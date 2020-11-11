import { config } from "dotenv";
import { v4 as uuid } from "uuid";
import { P2P } from "..";
import { P2PPaymentError } from "../services/p2p-payments";

jest.setTimeout(30000);

config();

describe("P2P", () => {
  const qiwi = new P2P(process.env.QIWI_PK as string);
  const billId = uuid();

  test("Can be initialized", () => expect(qiwi).toBeTruthy());

  test("Can create Bill", async () => {
    const date = P2P.formatLifetime(1 + Math.round(Math.random() * 39));

    const response = await qiwi
      .createBill(
        {
          amount: {
            currency: P2P.Currency.RUB,
            value: 10
          },

          expirationDateTime: date,
          comment: "Тест",
          customer: {},
          customFields: {}
        },
        billId
      )
      .catch(console.error);

    expect(response).toHaveProperty("billId");
    expect(response).toHaveProperty("payUrl");
    expect(response).toHaveProperty("siteId");
  });

  test("Cant create Bill date back", async () => {
    const date = P2P.formatLifetime(-Math.round(Math.random() * 40));

    try {
      await qiwi.createBill({
        expirationDateTime: date,
        amount: { currency: P2P.Currency.RUB, value: 99 }
      });
    } catch (error) {
      expect(error).toBeInstanceOf(P2PPaymentError);
      expect(error.message).toContain("Validation error");
    }
  });
});
