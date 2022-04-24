/* eslint-disable unicorn/consistent-function-scoping */
import { config } from "dotenv";
import { Personal, WalletApiShortError } from "..";
import { Account, PaymentHistorySource, Wallet } from "../apis";

jest.setTimeout(30_000);

config();

describe(Personal.name, () => {
  const qiwi = new Personal(
    process.env.QIWI_TOKEN as string,
    process.env.QIWI_WALLET as string
  );

  test("Can be initialized", () => {
    expect(qiwi).toBeInstanceOf(Wallet);
    expect(Wallet.create("")).toBeInstanceOf(Wallet);
  });

  test("[v3] Wallet id can be fetched", async () => {
    const wallet = await Wallet.createAndFetchWalletId(
      process.env.QIWI_TOKEN as string
    );
    expect(wallet.options.walletId).toBe(process.env.QIWI_WALLET as string);
  });

  test("Can get person profile", async () => {
    const response = await qiwi.getPersonProfile();

    expect(response).toHaveProperty("authInfo");
    expect(response).toHaveProperty("contractInfo");
    expect(response).toHaveProperty("userInfo");
  });

  test("Can get personal limits and restrictions", async () => {
    const { limits } = await qiwi.getLimits([Personal.LimitType.TURNOVER]);

    const [limit] = limits.RU;

    expect(limit.type).toBe(Personal.LimitType.TURNOVER);
    expect(limit.currency).toBe("RUB");

    expect(Math.round(limit.spent + limit.rest)).toBeGreaterThanOrEqual(limit.max);

    const restrictions = await qiwi.getRestrictions();
    expect(restrictions).toHaveLength(0);
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
      sources: [PaymentHistorySource.CARD],
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

    const txn = await qiwi.getTransaction(transaction.txnId);
    expect(txn).toMatchObject(transaction);

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

  test("[v3] Can get agent and options", () => {
    expect(qiwi).toHaveProperty("agent");
    expect(qiwi.options).toMatchObject({
      token: process.env.QIWI_TOKEN as string,
      walletId: process.env.QIWI_WALLET as string
    });
  });

  test("Can get identification", async () => {
    const id = await qiwi.getIdentification();

    expect(id).toMatchObject({
      id: Number.parseInt(process.env.QIWI_WALLET as string)
    });
  });

  test("Can get cards", async () => {
    const cards = await qiwi.getCards();

    expect(Array.isArray(cards)).toBeTruthy();
  });

  test("Can get accounts", async () => {
    const accounts = await qiwi.getAccounts();
    const offers = await qiwi.getAccountOffers();

    const offeredAccounts = offers.map((offer) => offer.alias);
    const currentAccounts = accounts.map((account) => account.alias);

    for (const id of currentAccounts) {
      expect(offeredAccounts).not.toContain(id);
    }

    const defaultAccount = accounts.find(
      (account) => account.defaultAccount === true
    ) as Account;

    expect(defaultAccount.currency).toBe(defaultAccount.balance?.currency);
  });

  test("[v3] Can get bills", async () => {
    const bills = await qiwi.bills.get();

    expect(Array.isArray(bills)).toBeTruthy();
  });
});
