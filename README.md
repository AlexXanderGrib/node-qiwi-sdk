# QIWI SDK

> QIWI SDK for node: P2P Payments & Wallet management

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

[![Test Status](https://github.com/AlexXanderGrib/node-qiwi-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![Downloads](https://img.shields.io/npm/dt/qiwi-sdk.svg)](https://npmjs.com/package/qiwi-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/node-qiwi-sdk/main.svg)](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![qiwi-sdk](https://snyk.io/advisor/npm-package/qiwi-sdk/badge.svg)](https://snyk.io/advisor/npm-package/qiwi-sdk)
[![Known Vulnerabilities](https://snyk.io/test/npm/qiwi-sdk/badge.svg)](https://snyk.io/test/npm/qiwi-sdk)
[![Quality](https://img.shields.io/npms-io/quality-score/qiwi-sdk.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=qiwi-sdk)
[![npm](https://img.shields.io/npm/v/qiwi-sdk.svg)](https://npmjs.com/package/qiwi-sdk)
[![license MIT](https://img.shields.io/npm/l/qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/qiwi-sdk)](https://bundlephobia.com/package/qiwi-sdk)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/79352d0de1de49b591b78acce5bd1900)](https://www.codacy.com/gh/AlexXanderGrib/node-qiwi-sdk/dashboard?utm_source=github.com&utm_medium=referral&utm_content=AlexXanderGrib/node-qiwi-sdk&utm_campaign=Badge_Grade)

## 👅 Язык

> [👉 Документация на Русском 🇷🇺 👈](./README.ru.md)

Language: [Русский](./README.ru.md) | **English**

## 🍬 Why use this lib?

1. **Full.** Covers the following APIs: [Wallet Personal](https://developer.qiwi.com/ru/qiwi-wallet-personal/), [P2P Payments](https://developer.qiwi.com/ru/p2p-payments/);
2. **Simple.** All methods are named as in QIWI documentation and collected into subclasses. All methods have JSDoc comments. Lot of [examples](#examples).
3. **Reliable.** The library is written in **TypeScript** and covered by tests.
4. [**Secure.**](./SECURITY.md) The library has only 1 dependency (axios) and is constantly scanned by Code QL and [Snyk](https://snyk.io/advisor/npm-package/qiwi-sdk) for vulnerabilities.
5. **Compatible.** Code from version `1.1.0` (18 Jan. 2020) will work on version `4.0.0` (26 May 2022) with little changes. Also `qiwi-sdk` provides classes to make migration from similar libs effortless.
   - [Migration from version 1 to 2](./docs/migrations/from-1-to-2);
   - [Migration from version 2 to 3](./docs/migrations/from-2-to-3.md);
   - [Migration from `node-qiwi`](./docs/migrations/from-node-qiwi.md);
   - [Migration from `@qiwi/bill-payments-node-js-sdk`](./docs/migrations/from-bill-payments-sdk.md).

Language: [Русский](./README.ru.md) | **English**

## Documentation

1. [Installation](#instantiation)
2. [Import](#import)
3. [API Overview](#api-overview)
4. [API Reference](./docs/api/modules.md)
5. [Examples](#examples)

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

- **TypeScript** or **ES Modules**

  ```javascript
  import { P2p, Wallet, Detector } from "qiwi-sdk";
  ```

### Documentation

[👉 View API Reference 👈](./docs/api/modules.md)

The table shows the currently implemented APIs.

**Class (Legacy v2)** is a compatible class only for those
who are upgrading from version 2. The rest are advised to use
the new version of the API - Class v3.

### API Overview

| Class (v3)                                              | ~~Class (Legacy v2)~~                                               | Documentation by QIWI                                                | Recommended var name  |
| ------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------- |
| [`Wallet`](./docs/api/classes/index.QIWI.Wallet.md)     | [`Personal`](./docs/api/classes/index.QIWI.WalletCompat.md)         | https://developer.qiwi.com/en/qiwi-wallet-personal                   | `wallet` (or `qiwi`)  |
| [`P2p`](./docs/api/classes/index.QIWI.P2p.md)           | [`P2P`](./docs/api/classes/index.QIWI.P2pCompat.md)                 | https://developer.qiwi.com/en/p2p-payments                           | `p2p`                 |
| [`P2p`](./docs/api/classes/index.QIWI.P2p.md)           | -                                                                   | https://developer.qiwi.com/en/bill-payments                          | `p2p` (or `payments`) |
| [`Detector`](./docs/api/classes/index.QIWI.Detector.md) | [`DetectorCompat`](./docs/api/classes/index.QIWI.DetectorCompat.md) | https://developer.qiwi.com/en/qiwi-wallet-personal/#search-providers | `detector`            |

To see detailed documentation on a class, click on its name.

#### Migration

1. [Migration from version 2 to 3](./docs/migrations/from-2-to-3.md);
2. [Migration from version 1 to 2](./docs/migrations/from-1-to-2.md) (just in case);
3. [Migration from `node-qiwi`](./docs/migrations/from-node-qiwi.md);
4. [Migration from `@qiwi/bill-payments-node-js-sdk`](./docs/migrations/from-bill-payments-sdk.md).

### Instantiation

```javascript
const { Wallet, P2p, Detector } = require("qiwi-sdk");

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
| `QIWI_SECRET_KEY` и `QIWI_PUBLIC_KEY` | Strings                      | Key pair created on https://qiwi.com/p2p-admin/transfers/api |

### Examples

#### Getting info about wallet

```javascript
const wallet = Wallet.create(process.env.QIWI_TOKEN);

wallet.personProfile.getCurrent().then(console.log);
// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
```

#### Sending payment

```javascript
const wallet = Wallet.create(process.env.QIWI_TOKEN);

// 100 RUB from RUB account to QIWI (99) `79123456789` including commission
// All above can be configured
wallet.payments.quickPay({
  amount: 100,
  account: "79123456789"
});
```

#### Using P2P

```javascript
const p2p = P2p.create(process.env.QIWI_SECRET_KEY);

p2p.bills
  .create({
    amount: {
      value: 1000,
      currency: P2p.Currency.RUB
    },
    successUrl: "https://youtu.be/dQw4w9WgXcQ"
  })
  .then(console.log);

// => { payUrl: 'https://oplata.qiwi.com/...' }
```

#### Using Proxy

```javascript
const { SocksProxyAgent } = require("socks-proxy-agent");

const wallet = Wallet.create(process.env.QIWI_TOKEN);
wallet.agent = new SocksProxyAgent("socks://login:password@host:port");

// do work here

// Remember to dispose agent
wallet.agent = undefined;
```

### Express integration

```javascript
const p2p = P2p.create(process.env.QIWI_SECRET_KEY);
const app = express();

app.post(
  "/webhook/qiwi",
  p2p.notificationMiddleware({}, (req, res) => {
    // Bill body
    console.log(req.body);

    // { "siteId": "9hh4jb-00", "billId": "cc961e8d-d4d6-4f02-b737-2297e51fb48e", ... }
  })
);

app.use((error, req, res, next) => {
  if (error instanceof P2pBillNotificationError) {
    // Somebody sent invalid notification
    console.log(error);
  }

  return next();
});
```

#### Full examples

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

Distributed under the MIT License. See [LICENSE.txt](./LICENSE.txt) for more information.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAlexXanderGrib%2Fnode-qiwi-sdk.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FAlexXanderGrib%2Fnode-qiwi-sdk?ref=badge_large)

### Contributing

1. ⁉️ Do not hesitate to create [Issues](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ If you want to contribute to code, follow [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Also please donate 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Or give this repo [a star](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), if you liked this lib

### Support

- [Create Issue](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
- [Telegram: @AlexXanderGrib](https://t.me/AlexXanderGrib)

You can write issue, or if i am slow to answer it, you can DM me in

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

### 💜 YooMoney package

**Interested in P2P acquiring in Russia?**

Check out my other SDK for YooMoney (formerly Yandex.Money) 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)

Language: [Русский](./README.ru.md) | **English**
