import axios from "axios";
import { createHmac, randomBytes } from "crypto";
import { config } from "dotenv";
import type { Application, ErrorRequestHandler } from "express";

import {
  BillCurrency,
  BillStatusData,
  generateUUID,
  P2P,
  BillPaySource,
  P2p
} from "..";

import { createMockServer, MockServer } from "./server";

jest.setTimeout(30_000);

config();

describe(P2P.name, () => {
  const qiwi = new P2P(
    process.env.QIWI_SECRET_KEY as string,
    process.env.QIWI_PUBLIC_KEY as string
  );

  const billId = generateUUID();
  const amount = {
    currency: Math.random() >= 0.5 ? P2P.Currency.RUB : P2P.Currency.KZT,
    value: 20 + Math.round(Math.random() * 100)
  };

  const themeCode = "Aleksandr-Kc3TIEub-N";

  test("Can be initialized", () => {
    expect(qiwi).toBeInstanceOf(P2p);
    expect(P2p.create("")).toBeInstanceOf(P2p);
    expect(new P2p()).toBeInstanceOf(P2p);
    expect(new P2p({})).toBeInstanceOf(P2p);
  });

  test("[v3] .env() loads environment correctly", () => {
    const auto = P2p.env();

    expect(auto.options.publicKey).toBe(qiwi.options.publicKey);
    expect(auto.options.secretKey).toBe(qiwi.options.secretKey);
  });

  test("Can create Bill", async () => {
    const date = P2P.formatLifetimeDays(1 + Math.round(Math.random() * 39));

    const response = await qiwi.createBill(
      {
        amount,
        expirationDateTime: date,
        comment: "Тест",
        customer: {},
        themeCode,
        paySourcesFilter: [BillPaySource.Card, BillPaySource.QIWI],
        customFields: {}
      },
      billId
    );

    expect(typeof response.payUrl).toBe("string");

    expect(response.status.value).toBe(P2P.BillStatus.WAITING);
    expect(response.billId).toBe(billId);
    expect(response.amount.currency).toStrictEqual(amount.currency);
    expect(response.customFields).toStrictEqual({
      themeCode,
      paySourcesFilter: "card,qw"
    });

    expect(new Date(date).toISOString()).toBe(
      new Date(response.expirationDateTime).toISOString()
    );

    const hash = createHmac("sha256", qiwi.secretKey)
      .update(
        [
          response.amount.currency,
          response.amount.value,
          response.billId,
          response.siteId,
          response.status.value
        ].join("|")
      )
      .digest("hex");

    expect(qiwi.checkNotificationSignature(hash, response)).toBe(true);
    const url = P2P.patchPayUrl(response.payUrl, {
      paySource: P2P.PaySource.QIWI,
      successUrl: "https://example.com"
    });

    expect(url).toContain("paySource=qw");
    expect(url).toContain("successUrl");
    expect(url).toContain("example.com");

    const url2 = P2P.patchPayUrl(url);
    expect(url2).toBe(url);
  });

  test("Can get bill status", async () => {
    const response = await qiwi.billStatus(billId);

    expect(typeof response.payUrl).toBe("string");

    expect(response.status.value).toBe(P2P.BillStatus.WAITING);
    expect(response.billId).toBe(billId);
    expect(response.amount.currency).toStrictEqual(amount.currency);
  });

  test("Can delete bill", async () => {
    const response = await qiwi.rejectBill(billId);

    expect(typeof response.payUrl).toBe("string");

    expect(response.status.value).toBe(P2P.BillStatus.REJECTED);
    expect(response.billId).toBe(billId);
    expect(response.amount.currency).toStrictEqual(amount.currency);
  });

  test("Default bill expiration is 15 min", async () => {
    const bill = await qiwi.createBill({
      amount: { currency: P2P.Currency.RUB, value: 99 }
    });

    const expiry = new Date(bill.expirationDateTime).getTime();
    const now = Date.now();

    const FIFTEEN_MINUTES = 15 * 60 * 1000;
    const THRESHOLD = 5000; // 5 sec

    const difference = expiry - now;

    expect(difference).toBeLessThanOrEqual(FIFTEEN_MINUTES);
    expect(difference).toBeGreaterThan(FIFTEEN_MINUTES - THRESHOLD);
  });

  test("Bill form url", () => {
    const url = qiwi.createBillFormUrl({
      customFields: { a: "b" },
      amount: "100.019"
    });

    expect(url).toContain(`${encodeURIComponent("customFields[a]")}=b`);
    expect(url).toContain("amount=100.02");
  });

  test("Bill form url [options]", () => {
    const billId = generateUUID();
    const url = qiwi.createBillFormUrl({
      amount: 10,
      billId,
      paySourcesFilter: "qw",
      themeCode
    });

    expect(url).toContain(billId);
    expect(url).toContain(
      `${encodeURIComponent("customFields[paySourcesFilter]")}=qw`
    );
    expect(url).toContain(themeCode);
  });

  describe("Middleware", () => {
    const mock = jest.fn();
    let bill1: BillStatusData;
    let bill2: BillStatusData;

    let server: MockServer;
    let app: Application;
    let url = "";

    beforeAll(async () => {
      server = await createMockServer();

      app = server.app;
      url = server.url;

      app.post(
        "/",
        qiwi.notificationMiddleware({}, (request, response) => {
          mock({ type: "success", body: request.body });

          response.json(request.body);
        })
      );

      app.use(((error, _request, response, next) => {
        mock({ type: "error", error });
        response.json({ type: "error" });

        return next();
      }) as ErrorRequestHandler);

      const data = {
        amount: { currency: BillCurrency.RUB, value: 1 },
        expirationDateTime: P2P.formatLifetimeDays(1)
      };

      [bill1, bill2] = await Promise.all([
        qiwi.createBill(data),
        qiwi.createBill(data)
      ]);
    });

    afterAll(async () => {
      server.close();

      await Promise.all([
        qiwi.rejectBill(bill1.billId),
        qiwi.rejectBill(bill2.billId)
      ]);
    });

    afterEach(() => mock.mockClear());

    /**
     *
     * @param {BillStatusData} bill
     * @param {boolean} [valid]
     * @return {Promise<Response>}
     */
    function sendNotification(bill: BillStatusData, valid = true) {
      const hash = createHmac("sha256", valid ? qiwi.secretKey : randomBytes(2))
        .update(
          [
            bill.amount.currency,
            bill.amount.value,
            bill.billId,
            bill.siteId,
            bill.status.value
          ].join("|")
        )
        .digest("hex");

      return axios
        .post(url, JSON.stringify({ bill }), {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Signature-SHA256": hash
          }
        })
        .catch((error) =>
          axios.isAxiosError(error) && error.response
            ? error.response
            : Promise.reject(error)
        );
    }

    test("with invalid data", async () => {
      await sendNotification(bill1, false);
      expect(mock).toBeCalledWith({
        type: "error",
        error: new Error("Notification signature mismatch")
      });
    });

    test("with repeating invalid data", async () => {
      await sendNotification(bill1, false);
      expect(mock).toBeCalledWith({
        type: "error",
        error: new Error("Notification signature mismatch")
      });
    });

    test("with valid data", async () => {
      const response = await sendNotification(bill1);
      const json = response.data;

      expect(mock).toBeCalledWith({ type: "success", body: bill1 });
      expect(json).toEqual(bill1);
    });

    test("with repeating valid data", async () => {
      await sendNotification(bill1);
      expect(mock).toBeCalledTimes(0);
    });

    test("with not repeating valid data", async () => {
      const response = await sendNotification(bill2);
      const json = response.data;

      expect(mock).toBeCalledWith({ type: "success", body: bill2 });
      expect(json).toEqual(bill2);
    });
  });

  test("[v2 compat] Can format time in legacy way", () => {
    const days = 3;
    const minutes = days * 60 * 24;

    const lt = P2P.formatLifetime(days);
    const ltd = P2P.formatLifetimeDays(days);
    const ltm = P2P.formatLifetimeMinutes(minutes);

    expect(lt).toBe(ltd);
    expect(lt).toBe(ltm);
  });
});
