import { config } from "dotenv";
import { Personal } from "..";
import { PersonalApiError } from "../services/personal";

jest.setTimeout(30_000);

config();

describe("Personal API", () => {
  const qiwi = new Personal(process.env.QIWI_TOKEN as string);

  test("Can be initialized", () => expect(qiwi).toBeTruthy());

  test("Can get person profile", async () => {
    const response = await qiwi.getPersonProfile();

    expect(response).toHaveProperty("authInfo");
    expect(response).toHaveProperty("contractInfo");
    expect(response).toHaveProperty("userInfo");
  });

  test("Can get personal limits", async () => {
    const { limits } = await qiwi.getLimits(process.env.QIWI_WALLET as string, [
      Personal.LimitType.TURNOVER
    ]);

    const [limit] = limits.RU;

    expect(limit.type).toBe(Personal.LimitType.TURNOVER);
    expect(limit.currency).toBe("RUB");

    expect(Math.round(limit.spent + limit.rest)).toBeGreaterThanOrEqual(limit.max);
  });

  test("Can't send 1 million rubles to unknown wallet", async () => {
    try {
      await qiwi.pay2({
        account: "79123456789",
        amount: 1e6, // 1 лям
        comment: "NodeJS QIWI SDK Test npmjs.com/package/qiwi-sdk"
      });
    } catch (error) {
      expect(error).toBeInstanceOf(PersonalApiError);
    }
  });

  test("Get Cheque methods return valid image", async () => {
    const {
      contractInfo: { contractId }
    } = await qiwi.getPersonProfile();

    const transactionType = Personal.TransactionType.OUT;
    const { data: transactions } = await qiwi.getPaymentHistory(
      contractId.toString(),
      {
        rows: 50,
        operation: transactionType
      }
    );

    const transaction = transactions.find(
      (txn) =>
        txn.status === Personal.TransactionStatus.SUCCESS &&
        txn?.features?.chequeReady
    );

    if (!transaction) {
      throw new Error(
        "There is no successful in last 50 transactions in this QIWI WALLET"
      );
    }

    const response = await qiwi.getTransactionCheque(
      transaction.txnId,
      transactionType,
      Personal.ChequeFormat.JPEG
    );
    const buffer = response.slice(0, 32);

    expect(response).toBeInstanceOf(Buffer);
    expect(
      /** @see {@link https://github.com/sindresorhus/is-jpg/blob/master/index.js Пакет is-jpeg} */
      buffer.length > 3 &&
        buffer[0] === 255 &&
        buffer[1] === 216 &&
        buffer[2] === 255
    ).toBeTruthy();
  });
});
