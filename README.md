# 🥝 NodeJS QIWI SDK

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
  - [✏️ Примеры / Examples](#️-примеры--examples)
    - [🔎 Получение информации о владельце кошелька](#-получение-информации-о-владельце-кошелька)
    - [🔑 Создание пары ключей для взаимодействия с P2P](#-создание-пары-ключей-для-взаимодействия-с-p2p)
    - [🧱 Получение Лимитов (на TypeScript)](#-получение-лимитов-на-typescript)
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

## ✏️ Примеры / Examples

### 🔎 Получение информации о владельце кошелька

**🇬🇧: `Getting information about the owner of the wallet`**

```javascript
const QIWI = require("qiwi-sdk");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);

qp.getPersonProfile().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
```

### 🔑 Создание пары ключей для взаимодействия с P2P

**🇬🇧: `Creating key pair for P2P API`**

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

**🇬🇧: `Getting wallet's limits (on TypeScript)`**

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

У нас есть точно такое-же типизированное SDK для YooMoney 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)

**🇬🇧: `Have interest in well-done SDK for YooMoney (formerly Yandex.Money)? Check out my other lib`**
