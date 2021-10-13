# 🥝 NodeJS QIWI SDK

**Language: ([🇷🇺 Русский](./README.md) / _🇬🇧 English_)**

[![codecov](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk/branch/main/graph/badge.svg)](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk)
[![license MIT](https://img.shields.io/npm/l/qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/qiwi-sdk?style=flat-square)](https://npmjs.com/package/qiwi-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk)

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

## 🍬 Why use this lib?

1. Written in TypeScript
2. Covers [`Personal`](https://developer.qiwi.com/ru/qiwi-wallet-personal/) & [`P2P`](https://developer.qiwi.com/ru/p2p-payments/) APIs
3. Documentation appears right in editor (on russian), cause JSDoc was used

## 📦 Installation

**Using `NPM`**

```shell
npm i -S qiwi-sdk
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
// TypeScript
import { P2P, Personal } from "qiwi-sdk";

// CommonJS
const { P2P, Personal } = require("qiwi-sdk");

// ESM
import QIWI from "qiwi-sdk";
const { P2P, Personal } = QIWI;
```

### Choosing API

```typescript
// Personal - API for working with individual wallet
const qiwi = new Personal(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

// P2P - convenient api for issuing bills
const p2p = new P2P(process.env.QIWI_SECRET_KEY, process.env.QIWI_PUBLIC_KEY);
```

#### _Environment variables:_

- **`QIWI_TOKEN`** - qiwi token, got on https://qiwi.com/api
- **`QIWI_WALLET`** - phone number bound to the wallet. Format: `79123456789`
- **`QIWI_SECRET_KEY`** and **`QIWI_PUBLIC_KEY`** - key pair created on https://qiwi.com/p2p-admin/transfers/api

### 🤝 Integration

#### _Examples:_

1. [🥝 Getting info about wallet](./examples/1-info.js)
2. [📬 Sending payment](./examples/2-sending-payment.ts)
3. [🛠️ Using P2P api](./examples/3-p2p.js)
4. [🔐 Getting wallet limits (using ESM)](./examples/4-limits.mjs)
5. [🤖 Telegram bot with direct payments (by wallet phone number)](./examples/5-bot.js)
6. [🖥️ Shop on Express](./examples/6-express.js)

#### _Documentation:_

1. [👴 Migration from 1.x](./docs/migration-from-1x.md)
2. [**`⚙️ API Reference`**](./docs/api/modules.md)
3. 🧑‍⚖️ License - [**MIT**](./LICENSE)
4. 🆙 [Changelog](./CHANGELOG.md)

## ❤️ Contributing

1. ⁉️ Do not hesitate to create [Issues](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ If you want to contribute to code, follow [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Also please donate 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Or give this repo [a star](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), if you liked this lib

## 🙋 Support

You can write issue, or if i am slow to answer it, you can DM me in

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

## Interested in P2P acquiring in Russia?

Check out my other SDK for YooMoney (formerly Yandex.Money) 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)
