// const { Wallet, P2p, BillPaySource, formatOffsetDate } = require("qiwi-sdk");
const { Wallet, P2p, BillPaySource, formatOffsetDate } = require("..");

const qiwi = Wallet.create(process.env.QIWI_TOKEN);

async function main() {
  const { publicKey, secretKey } = await qiwi.bills.createP2PKeyPair(
    "My super pair name"
  );

  // Да, они обратном в порядке,
  // так как PublicKey не всегда нужен
  const p2p = P2p.create(secretKey, publicKey);

  const bill = await p2p.bills.create({
    amount: {
      value: 1000,
      currency: P2p.Currency.RUB
    },
    expirationDateTime: formatOffsetDate(2, "day"),
    comment: "Создание сайта",
    paySource: BillPaySource.Card,
    successUrl: "https://youtu.be/dQw4w9WgXcQ"
  });

  // Выводим ссылку чтобы отправить заказчику
  console.log(bill.payUrl);
}

main();
