qiwi-sdk / [Exports](modules.md)

# 🥝 NodeJS QIWI SDK

[![codecov](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk/branch/main/graph/badge.svg)](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk)
[![license MIT](https://img.shields.io/npm/l/qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/qiwi-sdk?style=flat-square)](https://npmjs.com/package/qiwi-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk)

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

## 🇬🇧 For english speakers

This document is primarily on Russian, because QIWI Bank (JSC) is Russian bank and mostly russian people interested in this package. Whoever, i added short translations, marked by 🇬🇧 emoji, so you can understand what is going on there.

## 📕 Содержание / ToC

**🇬🇧: `Table of Contents`**

- [🥝 NodeJS QIWI SDK](#-nodejs-qiwi-sdk)
  - [🇬🇧 For english speakers](#-for-english-speakers)
  - [📕 Содержание / ToC](#-содержание--toc)
  - [🍬 Почему именно эта библиотека?](#-почему-именно-эта-библиотека)
  - [📦 Установка / Installation](#-установка--installation)
    - [NPM:](#npm)
    - [Yarn:](#yarn)
  - [⚠️ Миграция с 1.x](#️-миграция-с-1x)
  - [✏️ Примеры / Examples](#️-примеры--examples)
    - [🔎 Получение информации о владельце кошелька](#-получение-информации-о-владельце-кошелька)
    - [**💸 Отправка платежа (TypeScript)**](#-отправка-платежа-typescript)
    - [🔑 Создание пары ключей для взаимодействия с P2P](#-создание-пары-ключей-для-взаимодействия-с-p2p)
    - [🧱 Получение Лимитов (TypeScript)](#-получение-лимитов-typescript)
  - [ℹ️ Доп. информация](#ℹ️-доп-информация)
    - [🧑‍⚖️ Лицензия](#️-лицензия)
    - [❤️ Контрибьютинг](#️-контрибьютинг)
    - [🙋 Поддержка](#-поддержка)
    - [Интересует приём и отправка P2P платежей по РФ на NodeJS?](#интересует-приём-и-отправка-p2p-платежей-по-рф-на-nodejs)

## 🍬 Почему именно эта библиотека?

**🇬🇧: `Why use this lib?`**

1. Полная поддержка `TypeScript`
2. Полностью покрывает `Personal` и `P2P` секции QIWI API
3. Документация прямо в коде, которую отлично подхватывают `VSCode` и `WebStorm`

**🇬🇧: `First-class TS support, Personal & P2P api coverage, In-Code docs that's appear in editor`**

## 📦 Установка / Installation

### NPM:

```shell
npm i -S qiwi-sdk
```

### Yarn:

```shell
yarn add qiwi-sdk
```

## ⚠️ Миграция с 1.x
**🇬🇧: `Breaking change in following methods`**

Параметр `walletId` был перенесён в конец и стал необязательным, 
так какпри создании класса `Personal` можно указать номер кошелька
или изменить его через свойство `walletId`

```javascript

const { Personal } = require('qiwi-sdk');

const qiwi = new Personal('token', '79123456789');
```

**Затронутые методы:**
- `unblockCard()`
- `blockCard()`
- `setDefaultAccount()`
- `createAccount()`
- `getAccountOffers()`
- `getAccounts()`
- `getPaymentHistoryTotal()`
- `getPaymentHistory()`
- `getRestrictions()`
- `getLimits()`
- `getIdentification()`
- `setIdentification()`

О менее крупных изменениях можно почитать в [CHANGELOG.md](./CHANGELOG.md)

## ✏️ Примеры / Examples

### 🔎 Получение информации о владельце кошелька

**🇬🇧: `Getting information about the owner of the wallet`**

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);

qp.getPersonProfile().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
```

### **💸 Отправка платежа (TypeScript)**

**🇬🇧: `Sending a payment`**

```typescript
// Платёжка с выводом (почти) куда-угодно 101

import { Personal, Recipients, Detector, Currency } from "qiwi-sdk";

const qiwi = new Personal(process.env.QIWI_TOKEN);
const detector = new Detector();

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
  const commission = await qiwi.getCommission(provider, account, amount);

  // Используем метод `pay2` вместо `pay` для лучшей читаемости
  await qiwi.pay2({
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
```

### 🔑 Создание пары ключей для взаимодействия с P2P

**🇬🇧: `Creating key pair for P2P API`**

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);

async function main() {
  const profile = await qp.getPersonProfile();

  const [pk, sk] = await qp.createP2PKeyPair("My super pair name");

  // Да, они обратном в порядке,
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

  // Выводим ссылку чтобы отправить заказчику
  console.log(bill.payUrl);
}

main();
```

### 🧱 Получение Лимитов (TypeScript)

**🇬🇧: `Getting wallet's limits`**

```typescript
import { Personal } from "qiwi-sdk";

const qp = new Personal(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

async function main() {
  // 2.0
  const { limits } = await qp.getLimits([
    Personal.LimitType.TURNOVER
  ]);

  const [limit] = limits.RU;

  console.log(limit);
  // => { type: "TURNOVER", currency: "RUB", max: 400000, spent: 0, rest: 400000, ... }
}
```

## ℹ️ Доп. информация

**🇬🇧: `Additional info`**

### 🧑‍⚖️ Лицензия

**🇬🇧: `License`**

[**MIT**](./LICENSE)

### ❤️ Контрибьютинг

**🇬🇧: `Contributing`**

*Что делаем?*:

1. ⁉️ Не стесняемся писать [Issue](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ Если хотите что-то поправить следуйте гайду [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Донатим 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Ставим [звёздочки](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), если библиотека понравилась.

### 🙋 Поддержка

**🇬🇧: `Support`**

Библиотека - маленькая, я отвечаю быстро. Не стесняйтесь писать Issue, даже если кажется что они глупые. Если что, можете писать в

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

### Интересует приём и отправка P2P платежей по РФ на NodeJS?

У нас есть точно такое-же типизированное SDK для YooMoney 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)

**🇬🇧: `Have interest in well-done SDK for YooMoney (formerly Yandex.Money)? Check out my other lib`**
