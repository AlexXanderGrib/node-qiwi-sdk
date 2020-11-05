# NodeJS QIWI SDK

Это полностью типизированная реализация клиента API Киви Банка

## Документация

В коде довфига комментариев, взятых из официального описания API,
поэтому если у вас `VSCode` или `WebStorm`, которые умеют их подгружать как подсказки в коде, проблем не должно возникнуть.

`@todo` Полноценные доки потом напишу

## Примеры

### Получение информации о владельце кошелька

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);

qp.getPersonProfile().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
```

### Как слить баланс кошелька

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);
const receiver = "+79123456789";
const provider = 99;

async function main() {
  const profile = await qp.getPersonProfile();
  const wallet = profile.authInfo.personId;
  const accounts = await qp.getAccounts(wallet);

  const rubleAccount = accounts.find(
    (acc) => acc.balance && acc.balance.currency === QIWI.Personal.Currency.RUB
  );

  const commission = await qp.getCommission(
    provider,
    receiver,
    rubleAccount.balance.amount
  );

  const totalToSteal = parseFloat(rubleAccount.balance.amount - balance);

  const payment = await qp.pay(provider, receiver, totalToSteal);

  console.log(payment);
}

main();
```

### Создание пары ключей для взаимодействия с P2P

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);

async function main() {
  const profile = await qp.getPersonProfile();
  const wallet = profile.authInfo.personId;

  const [pk, sk] = await qp.createP2PKeyPair("My super pair name");

  // Да, они инвертированы в порядке,
  // так как PublicKey не всегда нужен
  const p2pc = new QIWI.P2P(sk, pk);

  const bill = await p2pc.createBill({
    amount: {
      value: 1000,
      currency: QIWI.P2P.Currency.RUB
    },
    expirationDateTime: QIWI.P2P.formatLifetime(2 /* 2 дня */),
    comment: "Создание сайта pornhub.com"
  });

  console.log(bill.payUrl);
}

main();
```
