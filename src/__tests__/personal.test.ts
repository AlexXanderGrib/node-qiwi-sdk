/* eslint-disable unicorn/consistent-function-scoping */
import { config } from "dotenv";
import { Personal, WalletApiShortError } from "..";
import {
  Account,
  CommissionPayer,
  Currency,
  formatOffsetDate,
  PaymentHistorySource,
  Recipients,
  Wallet
} from "../apis";
import { SAMPLE_CARD, SAMPLE_PHONE } from "./constants";

jest.setTimeout(30_000);

config();

// eslint-disable-next-line require-jsdoc
async function expectToThrow(errorClass: any, executor: () => Promise<void>) {
  try {
    await executor();
  } catch (error) {
    expect(error).toBeInstanceOf(errorClass);
  }
}

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

  test("[v3] Can get provider info", async () => {
    const info = await qiwi.providers.getInfo(99);

    expect(info).toMatchObject({
      type: "PROVIDER",
      id: 99,
      shortName: "Перевод на QIWI Кошелек",
      hasPaymentForm: true,
      siteUrl: "https://www.qiwi.com",
      searchAvailable: true
    });
  });

  test("Can't send 1 million rubles to unknown wallet", () =>
    expectToThrow(WalletApiShortError, async () => {
      const commission = await qiwi.getCommission(
        Recipients.QIWI,
        SAMPLE_PHONE,
        100
      );
      expect(typeof commission).toBe("number");

      await qiwi.pay2({
        account: SAMPLE_PHONE,
        amount: 1e6, // 1 лям
        comment: "Test npmjs.com/package/qiwi-sdk#pay2"
      });
    }));

  describe("[v3] QuickPay", () => {
    test("Cant send 1m rub to unknown card", async () => {
      await expectToThrow(WalletApiShortError, async () => {
        await qiwi.payments.quickPay({
          account: SAMPLE_CARD,
          amount: 1e6,
          accountCurrency: Currency.KZT,
          comment: "Test npmjs.com/package/qiwi-sdk#payments.quickPay",
          commissionPayer: CommissionPayer.RECEIVER,
          provider: "card"
        });
      });
    });

    test("Cant send 1m rub to unknown phone", async () => {
      await expectToThrow(WalletApiShortError, async () => {
        await qiwi.payments.quickPay({
          account: SAMPLE_PHONE,
          amount: 1e6,
          provider: "phone"
        });
      });
    });

    test("Cant send 1m rub to unknown wallet", async () => {
      await expectToThrow(WalletApiShortError, async () => {
        await qiwi.payments.quickPay({
          account: SAMPLE_PHONE,
          amount: 1e6,
          provider: "qiwi"
        });
      });
    });

    test("Cant send 1m rub to unknown yoomoney", async () => {
      await expectToThrow(WalletApiShortError, async () => {
        await qiwi.payments.quickPay({
          account: "4100117723869225",
          amount: 1e6,
          provider: "yoomoney"
        });
      });
    });

    test("Cant send 1m rub to unknown qiwi by nickname", async () => {
      await expectToThrow(WalletApiShortError, async () => {
        await qiwi.payments.quickPay({
          account: "GUMUSALINY",
          amount: 1e6,
          provider: Recipients.QIWINickname
        });
      });
    });
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

    const totals = await qiwi.getPaymentHistoryTotal({
      startDate: formatOffsetDate(-10, "day"),
      endDate: formatOffsetDate(0)
    });

    expect(totals).toMatchObject({});

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

  test("Can create oauth token", async () => {
    const oauth = await qiwi.createOauthToken();

    expect(oauth.client).toBeInstanceOf(Personal);
  });
});
