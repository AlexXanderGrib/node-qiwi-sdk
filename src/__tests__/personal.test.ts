/* eslint-disable unicorn/consistent-function-scoping */
import { config } from "dotenv";
import { Personal, WalletApiShortError } from "..";

jest.setTimeout(30_000);

config();

describe(Personal.name, () => {
  const qiwi = new Personal(
    process.env.QIWI_TOKEN as string,
    process.env.QIWI_WALLET as string
  );

  test("Can be initialized", () => expect(qiwi).toBeTruthy());

  test("Can get person profile", async () => {
    const response = await qiwi.getPersonProfile();

    expect(response).toHaveProperty("authInfo");
    expect(response).toHaveProperty("contractInfo");
    expect(response).toHaveProperty("userInfo");
  });

  test("Can get personal limits", async () => {
    const { limits } = await qiwi.getLimits([Personal.LimitType.TURNOVER]);

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
      expect(error).toBeInstanceOf(WalletApiShortError);
    }
  });

  test("Get Cheque methods return valid image", async () => {
    const transactionType = Personal.TransactionType.OUT;
    const { data: transactions } = await qiwi.getPaymentHistory({
      rows: 50,
      operation: transactionType
    });

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
      transactionType
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

  test("Payment form URL generation", () => {
    /**
     *
     * @param {number} amount
     * @param {string[]} substrings
     */
    function check(amount: number, substrings: string[]) {
      const url = qiwi.createFormUrl(Personal.Recipients.QIWI, { amount });

      for (const substring of substrings) {
        expect(url).toContain(substring);
      }
    }

    check(1.01, ["amountFraction=1"]);
    check(1.1, ["amountFraction=10"]);

    const url = qiwi.createFormUrl(Personal.Recipients.QIWI, {
      blocked: ["account", "sum"],
      comment: "1000 - 7"
    });

    expect(url).toContain(`extra%5B%27account%27%5D=${qiwi.walletId}`);
    expect(url).toContain(`blocked[0]=account`);
    expect(url).toContain(`blocked[1]=sum`);

    const url2 = qiwi.createFormUrl(Personal.Recipients.QIWINickname, {
      custom: { a: "b" }
    });

    expect(url2).toContain("a=b");
    expect(url2).not.toContain(`extra%5B%27account%27%5D=${qiwi.walletId}`);
  });
});
