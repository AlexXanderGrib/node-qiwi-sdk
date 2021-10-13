// const QIWI = require("qiwi-sdk");
const QIWI = require("..");

const qiwi = new QIWI.Personal(process.env.QIWI_TOKEN);

async function main() {
  const [publicKey, secretKey] = await qiwi.createP2PKeyPair("My super pair name");

  // Да, они обратном в порядке,
  // так как PublicKey не всегда нужен
  const p2p = new QIWI.P2P(secretKey, publicKey);

  const bill = await p2p.createBill({
    amount: {
      value: 1000,
      currency: QIWI.P2P.Currency.RUB
    },
    expirationDateTime: QIWI.P2P.formatLifetime(2 /* 2 дня */),
    comment: "Создание сайта"
  });

  // Выводим ссылку чтобы отправить заказчику
  console.log(bill.payUrl);
}

main();