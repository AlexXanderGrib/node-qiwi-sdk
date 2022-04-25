# NodeJS QIWI SDK

[![Test Status](https://github.com/AlexXanderGrib/node-qiwi-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![codecov](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk/branch/main/graph/badge.svg)](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk)
[![license MIT](https://img.shields.io/npm/l/qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/qiwi-sdk.svg)](https://npmjs.com/package/qiwi-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![qiwi-sdk](https://snyk.io/advisor/npm-package/qiwi-sdk/badge.svg)](https://snyk.io/advisor/npm-package/qiwi-sdk)
[![Quality (npms.io)](https://img.shields.io/npms-io/quality-score/qiwi-sdk.svg?label=Quality%20%28npms.io%29&)](https://npms.io/search?q=qiwi-sdk)

**Language: ([🇷🇺 Русский](./README.md) / _🇬🇧 English_)**

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

## 🍬 Why use this lib?

1. Written in TypeScript, covered by tests
2. Covers [Personal Wallet](https://developer.qiwi.com/en/qiwi-wallet-personal/) & [P2P Payments](https://developer.qiwi.com/en/p2p-payments/) APIs
3. Documentation appears right in editor (on russian), cause JSDoc was used
4. [Secure](./SECURITY.md) (relatively)
   1. Only 3 dependencies: `axios`, `query-string` & `uuid`
5. Many [examples](./examples/)
6. Supported rarely-used features:
   1. Personal Webhooks
   2. P2P payment method lock
   3. Qiwi Master cards API
7. English support

## 📦 Installation

**Using `NPM`**

```shell
npm i qiwi-sdk
```

**Using `Yarn`**

```shell
yarn add qiwi-sdk
```

**Using `pnpm`**

```shell
pnpm add qiwi-sdk
```

## 🛠️ Usage

### Import

```typescript
// TypeScript or ESM
import { P2p, Wallet, Detector } from "qiwi-sdk";

// CommonJS
const { P2p, Wallet, Detector } = require("qiwi-sdk");
```

### API Overview

| Class (v3)                                        | Class (Legacy v2)                                             | Documentation by QIWI                                                |
| ------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Wallet`](./docs/api/classes/QIWI.Wallet.md)     | [`Personal`](./docs/api/classes/QIWI.WalletCompat.md)         | https://developer.qiwi.com/en/qiwi-wallet-personal                   |
| [`P2p`](./docs/api/classes/QIWI.P2p.md)           | [`P2P`](./docs/api/classes/QIWI.P2pCompat.md)                 | https://developer.qiwi.com/en/p2p-payments                           |
| [`Detector`](./docs/api/classes/QIWI.Detector.md) | [`DetectorCompat`](./docs/api/classes/QIWI.DetectorCompat.md) | https://developer.qiwi.com/en/qiwi-wallet-personal/#search-providers |

```typescript
// Personal - API for working with individual wallet
// Documentation:
// https://developer.qiwi.com/en/qiwi-wallet-personal
const qiwi = Wallet.create(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

// P2P - convenient api for issuing bills
// Documentation:
// https://developer.qiwi.com/en/p2p-payments
const p2p = P2p.create(process.env.QIWI_SECRET_KEY, process.env.QIWI_PUBLIC_KEY);

// Detector - API for getting Provider Id by phone or card number
// Contains only one method
const detector = Detector.create();
```

#### _Environment variables:_

| Name                                  | Type                         | Description                                                  |
| ------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| `QIWI_TOKEN`                          | String(32 chars) - Hex       | Qiwi token got on https://qiwi.com/api                       |
| `QIWI_WALLET`                         | String(10-16 chars) - Digits | Wallet's phone number                                        |
| `QIWI_SECRET_KEY` и `QIWI_PUBLIC_KEY` | Strings                      | Key paid created on https://qiwi.com/p2p-admin/transfers/api |

### 🤝 Integration

#### _Examples:_

1. [🥝 Getting info about wallet](./examples/1-info.js)
2. [📬 Sending payment](./examples/2-sending-payment.ts)
3. [🛠️ Using P2P api](./examples/3-p2p.js)
4. [🔐 Getting wallet limits (using ESM)](./examples/4-limits.mjs)
5. [🤖 Telegram bot with direct payments (by wallet phone number)](./examples/5-bot.js)
6. [🖥️ Shop on Express](./examples/6-express.js)
7. [🌐 Using proxy](./examples/7-proxy.js)

#### _Documentation:_

1. [**`⚙️ API Reference`**](./docs/api/modules.md)
2. 🧑‍⚖️ License - [**MIT**](./LICENSE)
3. 🆙 [Changelog](./CHANGELOG.md)

## About package

### 🏹 Project Goals

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

### ❤️ Contributing

1. ⁉️ Do not hesitate to create [Issues](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ If you want to contribute to code, follow [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Also please donate 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Or give this repo [a star](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), if you liked this lib

### 🙋 Support

You can write issue, or if i am slow to answer it, you can DM me in

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

### 💜 YooMoney package

**Interested in P2P acquiring in Russia?**

Check out my other SDK for YooMoney (formerly Yandex.Money) 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)
