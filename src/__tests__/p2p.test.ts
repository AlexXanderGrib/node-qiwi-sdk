import { config } from "dotenv";
import { v4 as uuid } from "uuid";
import { P2P } from "..";
import { P2PPaymentError } from "../services/p2p-payments";

jest.setTimeout(30000);

config();

describe("P2P", () => {
  const qiwi = new P2P(process.env.QIWI_PK as string);

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
    } catch (error) {
      expect(error).toBeInstanceOf(P2PPaymentError);
      expect(error.message).toContain("Validation error");
    }
  });
});
