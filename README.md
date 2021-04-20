# 🥝 NodeJS QIWI SDK

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

## Содержание

- [🥝 NodeJS QIWI SDK](#-nodejs-qiwi-sdk)
  - [Содержание](#содержание)
  - [Почему именно эта библиотека?](#почему-именно-эта-библиотека)
  - [Примеры](#примеры)
    - [🔎 Получение информации о владельце кошелька](#-получение-информации-о-владельце-кошелька)
    - [💰 Как слить баланс кошелька](#-как-слить-баланс-кошелька)
    - [🔑 Создание пары ключей для взаимодействия с P2P](#-создание-пары-ключей-для-взаимодействия-с-p2p)
    - [🧱 Получение Лимитов (на TypeScript)](#-получение-лимитов-на-typescript)
    - [Интересует приём и отправка P2P платежей по РФ на NodeJS?](#интересует-приём-и-отправка-p2p-платежей-по-рф-на-nodejs)


## Почему именно эта библиотека?
1. Полная поддержка TypeScript
2. Полностью покрывает `Personal` и `P2P` секции QIWI API
3. Документация прямо в коде, которую отлично подхватывают `VSCode` и `WebStorm`

## Примеры

### 🔎 Получение информации о владельце кошелька

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);

qp.getPersonProfile().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
```

### 💰 Как слить баланс кошелька

**Если вы делаете это другим людям без их согласия - это противозаконно, я оставляю это тут, потому что это хороший пример комплексного использования API**

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);
const receiver = "+79123456789";
const provider = 99;

async function main() {
  const profile = await qp.getPersonProfile();
  const wallet = profile.authInfo.personId.toString();
  const accounts = await qp.getAccounts(wallet);

  const rubleAccount = accounts.find(
    (accumulator) =>
      accumulator.balance &&
      accumulator.balance.currency === Personal.Currency.RUB
  );

  const commission = await qp.getCommission(
    provider,
    receiver,
    rubleAccount.balance.amount
  );

  const totalToSteal = rubleAccount.balance.amount - commission;

  const payment = await qp.pay(provider, receiver, totalToSteal);

  console.log(payment);
}

main();
```

### 🔑 Создание пары ключей для взаимодействия с P2P

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
    comment: "Создание сайта"
  });

  console.log(bill.payUrl);
}

main();
```

### 🧱 Получение Лимитов (на TypeScript)

```typescript
import { Personal } from "qiwi-sdk";

const qp = new Personal(process.env.QIWI_TOKEN);

async function main() {
  const { limits } = await qp.getLimits(process.env.QIWI_WALLET as string, [
    Personal.LimitType.TURNOVER
  ]);

  const [limit] = limits.RU;

  console.log(limit);
  // => { type: "TURNOVER", currency: "RUB", max: 400000, spent: 0, rest: 400000, ... }
}
```

### Интересует приём и отправка P2P платежей по РФ на NodeJS?

У нас есть точно такое-же типизированное SDK для YooMoney 👉 [github.com/AlexXanderGrib/yoomoney-sdk](https://github.com/AlexXanderGrib/yoomoney-sdk)