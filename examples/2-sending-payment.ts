// Платёжка с выводом (почти) куда-угодно 101

// import { Recipients, Currency, Wallet, Detector } from "qiwi-sdk";
import { Recipients, Currency, Wallet, Detector } from "..";

const qiwi = Wallet.create(process.env.QIWI_TOKEN ?? "");
const detector = Detector.create();

type PayoutMethod = "qiwi" | "yoomoney" | "card" | "mobile";

async function getProvider(
  method: PayoutMethod,
  account: string
): Promise<Recipients | number> {
  switch (method) {
    // Киви и YooMoney одни, поэтому с ними всё просто
    case "qiwi":
      return Recipients.QIWI;

    case "yoomoney":
      return Recipients.YooMoney;

    // А вот банков которые выпускают карты
    // и моб. операторов куча, поэтому тут надо чекать
    case "card":
      return detector.detectProvider.byCardNumber(account);

    case "mobile":
      return detector.detectProvider.byPhone(account);
  }
}

async function sendPayment(method: PayoutMethod, account: string, amount: number) {
  const provider = await getProvider(method, account);
  const commission = await qiwi.payments.getCommission(provider, account, amount);

  await qiwi.payments.pay({
    // Пускай комиссию платит получатель
    amount: amount - commission,
    account,

    // Указываем провайдера так-как переводим не только на КИВИ
    provider,

    // Указываем валюту (хотя можно этого не делать)
    currency: Currency.RUB,
    comment: "Hello world!"
  });
}

// Донатим мне, чтобы я поддерживал библиотеку :)
sendPayment("yoomoney", "410016348581848", 100);
