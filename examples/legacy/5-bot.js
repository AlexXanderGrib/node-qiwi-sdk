// const { Personal } = require('qiwi-sdk');
const { Personal } = require("..");
const { Telegraf } = require("telegraf");
const { promisify } = require("util");

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const wallet = new Personal(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);
const sleep = promisify(setTimeout);

/** ... */

bot.hears("оплатить", (ctx) => {
  wallet.createFormUrl(Personal.Recipients.QIWI, {
    // Можно не указывать. Подставляется текущий номер телефона
    // по умолчанию если ID провайдера - 99 (QIWI)
    // account: process.env.QIWI_WALLET

    amount: 100,
    blocked: ["account", "comment", "sum"],
    comment: ctx.message.from.id
  });
});

/** ... */

/** @type {Set<string>} */
const processedTransactions = new Set();

async function checkPayments() {
  // Начинаем проверять список транзакций каждые 60 секунд
  while (true) {
    const { data } = await wallet.getPaymentHistory({
      operation: Personal.TransactionType.IN,
      rows: 30
    });

    const transactions = data.filter((txn) => processedTransactions.has(txn.txnId));

    for (const transaction of transactions) {
      await bot.telegram.sendMessage(transaction.comment, "✅ Спасибо за покупку!");

      /** ... */
    }

    await sleep(60_000);
  }
}

checkPayments();
