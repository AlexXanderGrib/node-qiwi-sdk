import { createHmac } from "crypto";
import { config } from "dotenv";
import { Application, ErrorRequestHandler } from "express";
import fetch from "node-fetch";
import { v4 as uuid } from "uuid";
import { BillCurrency, BillStatusData, P2P } from "..";
import { P2PPaymentError } from "../services/p2p";
import { createMockServer, MockServer } from "./server";

jest.setTimeout(30_000);

config();

describe(P2P.name, () => {
  const qiwi = new P2P(
    process.env.QIWI_SECRET_KEY as string,
    process.env.QIWI_PUBLIC_KEY as string
  );

  const billId = uuid();
  const amount = {
    currency: Math.random() >= 0.5 ? P2P.Currency.RUB : P2P.Currency.KZT,
    value: 20 + Math.round(Math.random() * 100)
  };

  test("Can be initialized", () => expect(qiwi).toBeTruthy());

  test("Can create Bill", async () => {
    const date = P2P.formatLifetime(1 + Math.round(Math.random() * 39));

    const response = await qiwi.createBill(
      {
        amount,
        expirationDateTime: date,
        comment: "Тест",
        customer: {},
        customFields: {}
      },
      billId
    );

    expect(typeof response?.payUrl).toBe("string");

    expect(response?.status?.value).toBe(P2P.BillStatus.WAITING);
    expect(response?.billId).toBe(billId);
    expect(response?.amount?.currency).toStrictEqual(amount.currency);

    const hash = createHmac("sha256", qiwi.secretKey).update(
      [
        response.amount.currency,
        response.amount.value,
        response.billId,
        response.siteId,
        response.status.value
      ].join("|")
    );

    expect(qiwi.checkNotificationSignature(hash.digest("hex"), response)).toBe(true);
    expect(
      P2P.patchPayUrl(response.payUrl, { paySource: P2P.PaySource.QIWI })
    ).toContain("paySource=qw");
  });

  test("Can get bill status", async () => {
    const response = await qiwi.billStatus(billId);

    expect(typeof response?.payUrl).toBe("string");

    expect(response?.status?.value).toBe(P2P.BillStatus.WAITING);
    expect(response?.billId).toBe(billId);
    expect(response?.amount?.currency).toStrictEqual(amount.currency);
  });

  test("Can delete bill", async () => {
    const response = await qiwi.rejectBill(billId);

    expect(typeof response?.payUrl).toBe("string");

    expect(response?.status?.value).toBe(P2P.BillStatus.REJECTED);
    expect(response?.billId).toBe(billId);
    expect(response?.amount?.currency).toStrictEqual(amount.currency);
  });

  test("Cant create Bill date back", async () => {
    const date = P2P.formatLifetime(-Math.round(Math.random() * 40));

    try {
      await qiwi.createBill({
        expirationDateTime: date,
        amount: { currency: P2P.Currency.RUB, value: 99 }
      });

      expect(false).toBeTruthy();
    } catch (error: any) {
      expect(error).toBeInstanceOf(P2PPaymentError);
      expect(error.message).toContain("Validation error");
    }
  });

  test("Bill form url", () => {
    const url = qiwi.createBillFormUrl({
      customFields: { a: "b" },
      amount: "100.019"
    });

    expect(url).toContain(`${encodeURIComponent("customFields[a]")}=b`);
    expect(url).toContain("amount=100.02");
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
        expirationDateTime: P2P.formatLifetime(1)
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
     * @param {boolean=} valid
     * @return {Promise<Response>}
     */
    function sendNotification(bill: BillStatusData, valid = true) {
      const hash = createHmac("sha256", valid ? qiwi.secretKey : "aboba").update(
        [
          bill.amount.currency,
          bill.amount.value,
          bill.billId,
          bill.siteId,
          bill.status.value
        ].join("|")
      );

      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Signature-SHA256": hash.digest("hex")
        },
        body: JSON.stringify({ bill })
      });
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
      const json = await response.json();

      expect(mock).toBeCalledWith({ type: "success", body: bill1 });
      expect(json).toEqual(bill1);
    });

    test("with repeating valid data", async () => {
      await sendNotification(bill1);
      expect(mock).toBeCalledTimes(0);
    });

    test("with not repeating valid data", async () => {
      const response = await sendNotification(bill2);
      const json = await response.json();

      expect(mock).toBeCalledWith({ type: "success", body: bill2 });
      expect(json).toEqual(bill2);
    });
  });
});
