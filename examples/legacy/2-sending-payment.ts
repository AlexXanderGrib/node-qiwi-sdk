// Платёжка с выводом (почти) куда-угодно 101

// import { Personal, Recipients, Detector, Currency } from "qiwi-sdk";
import { Personal, Recipients, Currency, DetectorCompat } from "../..";

const wallet = new Personal(process.env.QIWI_TOKEN ?? "");
const detector = new DetectorCompat();

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
      return detector.getCardProvider(account);

    case "mobile":
      return detector.getPhoneProvider(account);
  }
}

async function sendPayment(method: PayoutMethod, account: string, amount: number) {
  const provider = await getProvider(method, account);
  const commission = await wallet.getCommission(provider, account, amount);

  // Используем метод `pay2` вместо `pay` для лучшей читаемости
  await wallet.pay2({
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
sendPayment("yoomoney", "4100117723869225", 100);
