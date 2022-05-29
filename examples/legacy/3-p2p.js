// const { Personal, P2P } = require("qiwi-sdk");
const { Personal, P2P } = require("../..");

const qiwi = new Personal(process.env.QIWI_TOKEN);

async function main() {
  const [publicKey, secretKey] = await qiwi.createP2PKeyPair("My super pair name");

  // Да, они обратном в порядке,
  // так как PublicKey не всегда нужен
  const p2p = new P2P(secretKey, publicKey);

  const bill = await p2p.createBill({
    amount: {
      value: 1000,
      currency: P2P.Currency.RUB
    },
    expirationDateTime: P2P.formatLifetime(2 /* 2 дня */),
    comment: "Создание сайта"
  });

  // Выводим ссылку чтобы отправить заказчику
  console.log(bill.payUrl);

  // Теперь можно оплатить счёт только картой, а после оплаты его перенаправит на рикролл
  const patchedPayUrl = P2P.patchPayUrl(bill.payUrl, {
    paySource: P2P.BillPaySource.Card,
    successUrl: "https://youtu.be/dQw4w9WgXcQ"
  });

  console.log(patchedPayUrl);
}

main();
