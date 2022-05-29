// const { Wallet, P2p, BillPaySource, formatOffsetDate } = require("qiwi-sdk");
const { Wallet, P2p, formatOffsetDate } = require("..");

const wallet = Wallet.create(process.env.QIWI_TOKEN);

async function main() {
  const { publicKey, secretKey } = await wallet.bills.createP2PKeyPair("Keys");

  // Да, они обратном в порядке,
  // так как PublicKey не всегда нужен
  const p2p = P2p.create(secretKey, publicKey);

  const bill = await p2p.bills.create({
    amount: {
      value: 1000,
      currency: P2p.BillCurrency.RUB
    },
    expirationDateTime: formatOffsetDate(2, "day"),
    comment: "Создание сайта",

    // Можно сделать так, чтобы был доступен только 1 метод оплаты
    // Опционально
    paySource: P2p.BillPaySource.Card,

    // Куда перенаправить после успешной оплаты
    successUrl: "https://youtu.be/dQw4w9WgXcQ",

    // Данные о плательщике. Всё опционально
    customer: {
      account: "Заказчик #15",
      email: "zakaz@mail.ru",
      phone: "+79123456789"
    },

    // Кастомные данные
    customFields: {
      // Можно настроить вид формы
      // Свой код можно получить на
      // https://qiwi.com/p2p-admin/transfers/link
      themeCode: "Aleksandr-Kc3TIEub-N"
    }
  });

  // Выводим ссылку чтобы отправить заказчику
  console.log(bill.payUrl);
}

main();
