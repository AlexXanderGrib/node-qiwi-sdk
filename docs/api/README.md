qiwi-sdk / [Exports](modules.md)

# QIWI SDK

[![Test Status](https://github.com/AlexXanderGrib/node-qiwi-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![codecov](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk/branch/main/graph/badge.svg)](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk)
[![license MIT](https://img.shields.io/npm/l/qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/qiwi-sdk.svg)](https://npmjs.com/package/qiwi-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![qiwi-sdk](https://snyk.io/advisor/npm-package/qiwi-sdk/badge.svg)](https://snyk.io/advisor/npm-package/qiwi-sdk)
[![Quality (npms.io)](https://img.shields.io/npms-io/quality-score/qiwi-sdk.svg?label=Quality%20%28npms.io%29&)](https://npms.io/search?q=qiwi-sdk)

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

> Typed QIWI Wallet SDK for NodeJS. Supported API's: Personal & P2P Bill Payments

## 👅 Язык

Весь JSDoc библиотеки на русском языке, как и большая часть документации.
Основной `README.md` файл на английском потому что:

1. NPM лучше индексирует текст на английском + хочется чтобы не русскоговорящие
   люди, нашедшие эту библиотеку на NPM не пугались того, что всё на Русском.
2. Английский - это язык из которого пошли программистские термины, в том числе те,
   что нельзя перевести. (например: Contributing)

Language: [Русский](./README.ru.md) | **English**

## 🍬 Why use this lib?

1. **Full.** Covers the following APIs:
   - [Wallet Personal](https://developer.qiwi.com/ru/qiwi-wallet-personal/);
   - [P2P Payments](https://developer.qiwi.com/ru/p2p-payments/).
2. **Simple.** All methods are named as in QIWI documentation and collected into subclasses. All methods have JSDoc comments.
   - **Lot of [examples](#examples)**.
3. **Reliable.** The library is written in **TypeScript** and covered by tests.
4. [**Secure.**](./SECURITY.md) The library has only 3 dependencies and is constantly scanned by Code QL and [Snyk](https://snyk.io/advisor/npm-package/qiwi-sdk) for vulnerabilities.
5. **Compatible.** Code from version `1.1.0` (18 Jan. 2020) will work on version `3.1.0` (26 Apr. 2022) with little changes. Also `qiwi-sdk` provides classes to make migration from similar libs effortless.
   - [Migration from version 1 to 2](./docs/migrations/from-1-to-2);
   - [Migration from version 2 to 3](./docs/migrations/from-2-to-3.md);
   - [Migration from `node-qiwi`](./docs/migrations/from-node-qiwi.md);
   - [Migration from `@qiwi/bill-payments-node-js-sdk`](./docs/migrations/from-bill-payments-sdk.md).
6. **Powerful.** Supports http & socks [**proxy**](./examples/7-proxy.js) out of the box, and rarely used APIs:
   - Personal Webhooks;
   - P2P payment method blocking;
   - "Qiwi Master" Card API.

Language: [Русский](./README.ru.md) | **English**

## 📦 Installation

- **Using `npm`**
  ```shell
  npm i qiwi-sdk
  ```
- **Using `Yarn`**
  ```shell
  yarn add qiwi-sdk
  ```
- **Using `pnpm`**
  ```shell
  pnpm add qiwi-sdk
  ```

Language: [Русский](./README.ru.md) | **English**

## 🛠️ Usage

### Import

From the library you can import all the APIs separately, because
use cases are different.

- **CommonJS** (default for **Node JS**)
  ```javascript
  const { P2p, Wallet, Detector } = require("qiwi-sdk");
  ```
- **TypeScript** or **ES Модули**
  ```javascript
  import { P2p, Wallet, Detector } from "qiwi-sdk";
  ```

### Documentation

The table shows the currently implemented APIs.

**Class (Legacy v2)** is a compatible class only for those
who are upgrading from version 2. The rest are advised to use
the new version of the API - Class v3.

### API Overview

| Class (v3)                                        | ~~Class (Legacy v2)~~                                         | Documentation by QIWI                                                |
| ------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Wallet`](./docs/api/classes/QIWI.Wallet.md)     | [`Personal`](./docs/api/classes/QIWI.WalletCompat.md)         | https://developer.qiwi.com/en/qiwi-wallet-personal                   |
| [`P2p`](./docs/api/classes/QIWI.P2p.md)           | [`P2P`](./docs/api/classes/QIWI.P2pCompat.md)                 | https://developer.qiwi.com/en/p2p-payments                           |
| [`P2p`](./docs/api/classes/QIWI.P2p.md)           | -                                                             | https://developer.qiwi.com/en/bill-payments                          |
| [`Detector`](./docs/api/classes/QIWI.Detector.md) | [`DetectorCompat`](./docs/api/classes/QIWI.DetectorCompat.md) | https://developer.qiwi.com/en/qiwi-wallet-personal/#search-providers |

To see detailed documentation on a class, click on its name.

#### Migration

1. [Migration from version 2 to 3](./docs/migrations/from-1-to-2.md);
2. [Migration from version 1 to 2](./docs/migrations/from-1-to-2) (just in case);
3. [Migration from `node-qiwi`](./docs/migrations/from-node-qiwi.md);
4. [Migration from `@qiwi/bill-payments-node-js-sdk`](./docs/migrations/from-bill-payments-sdk.md).

#### Full documentation

[**👉 View full documentation 👈**](./docs/api/modules.md)

### Instantiation

```javascript
const { Wallet, P2p, Detector } = require("qiwi-sdk");

// ✅ - The right way (since v3.0.0)
const wallet = Wallet.create(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);
const p2p = P2p.create(process.env.QIWI_SECRET_KEY, process.env.QIWI_PUBLIC_KEY);
const detect = Detector.create();

// ✅ - Also right way (but since v3.2.0)
const wallet = new Wallet({
  token: process.env.QIWI_TOKEN,
  walletId: process.env.QIWI_WALLET
});
const p2p = new P2p({
  secretKey: process.env.QIWI_SECRET_KEY,
  publicKey: process.env.QIWI_PUBLIC_KEY
});
const detect = new Detector();
```

#### Environment variables

The following environment variables were used in this example.
It's recommended to store all data for API access in environment
variables or in another protected place, but not in the code.

| Name                                  | Type                         | Description                                                  |
| ------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| `QIWI_TOKEN`                          | String(32 chars) - Hex       | Qiwi token got on https://qiwi.com/api                       |
| `QIWI_WALLET`                         | String(10-16 chars) - Digits | Wallet's phone number                                        |
| `QIWI_SECRET_KEY` и `QIWI_PUBLIC_KEY` | Strings                      | Key paid created on https://qiwi.com/p2p-admin/transfers/api |

### Examples

1. [🥝 Getting info about wallet](./examples/1-info.js)
2. [📬 Sending payment](./examples/2-sending-payment.ts)
3. [🛠️ Using P2P api](./examples/3-p2p.js)
4. [🔐 Getting wallet limits (using ESM)](./examples/4-limits.mjs)
5. [🤖 Telegram bot with direct payments (by wallet phone number)](./examples/5-bot.js)
6. [🖥️ Shop on Express](./examples/6-express.js)
7. [🌐 Using proxy](./examples/7-proxy.js)

Language: [Русский](./README.ru.md) | **English**

## 🎩 About the Project

### License

Project is distributed under the [**MIT**](./LICENSE) License.

### Project Goals

- [ ] Cover all [APIs](https://developer.qiwi.com/) (в том числе для юридических лиц)
  - [x] API QIWI Wallet
  - [ ] Payments
  - [ ] Payouts
  - [ ] Bank as a Service
- [x] Keep versions backwards compatible
  - [x] v2 и v3
  - [x] v1 и v2
- [x] Ensure maximum reliability and code quality
  - [x] Types: TypeScript
  - [x] Tests: Jest, Codecov
  - [x] Auto-tests in the repository: Github Actions
  - [x] Linking: Eslint, Prettier, Editorconfig
  - [x] Security: Eslint Plugin, Code QL, manual check in Snyk

### Contributing

1. ⁉️ Do not hesitate to create [Issues](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ If you want to contribute to code, follow [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Also please donate 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Or give this repo [a star](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), if you liked this lib

### ISupport

You can write issue, or if i am slow to answer it, you can DM me in

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

### 💜 YooMoney package

**Interested in P2P acquiring in Russia?**

Check out my other SDK for YooMoney (formerly Yandex.Money) 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)

Language: [Русский](./README.ru.md) | **English**
