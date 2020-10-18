import { config } from "dotenv";
import { v4 as uuid } from "uuid";
import * as QIWI from "..";

jest.setTimeout(30000);

config();

describe("P2P", () => {
  const qiwi = new QIWI.P2P(process.env.QIWI_PK as string);
  const billId = uuid();

  test("Can be initialized", () => expect(qiwi).toBeTruthy());

  test("Can create Bill", async () => {
    const date = QIWI.formatDate(Date.now() + 1000 * 3600 * 24);

    const response = await qiwi
      .createBill(
        {
          amount: {
            currency: QIWI.P2P.Currency.RUB,
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
});
