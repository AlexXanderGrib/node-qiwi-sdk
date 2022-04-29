// Платёжка с выводом (почти) куда-угодно 101

// import { Currency, Wallet, QuickPayRecipientsAny, CommissionPayer } from "qiwi-sdk";
import { Currency, Wallet, QuickPayRecipientsAny, CommissionPayer } from "..";

const wallet = Wallet.create(process.env.QIWI_TOKEN ?? "");

async function sendPayment(
  method: QuickPayRecipientsAny,
  account: string,
  amount: number
) {
  await wallet.payments.quickPay({
    // Пускай комиссию платит получатель
    amount,
    account,
    provider: method,

    // Комиссию платит получатель
    commissionPayer: CommissionPayer.RECEIVER,

    // Указываем валюту (хотя можно этого не делать)
    currency: Currency.RUB,
    comment: "Hello world!"
  });
}

// Донатим мне, чтобы я поддерживал библиотеку :)
sendPayment("yoomoney", "4100117723869225", 100);
