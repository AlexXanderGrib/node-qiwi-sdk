qiwi-sdk / [Exports](modules.md)

# 🥝 NodeJS QIWI SDK

**Язык: (_🇷🇺 Русский_ / [🇬🇧 English](./README.en.md))**

[![codecov](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk/branch/main/graph/badge.svg)](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk)
[![license MIT](https://img.shields.io/npm/l/qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/qiwi-sdk?style=flat-square)](https://npmjs.com/package/qiwi-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-qiwi-sdk?style=flat-square)](https://github.com/AlexXanderGrib/node-qiwi-sdk)

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

## 🍬 Почему именно эта библиотека?

1. Она написана на TypeScript, покрыта тестами
2. Покрывает [`Personal`](https://developer.qiwi.com/ru/qiwi-wallet-personal/) и [`P2P`](https://developer.qiwi.com/ru/p2p-payments/) секции API
3. Документация появляется прямо в редакторе, так-как используется JSDoc
4. [Безопасная](./SECURITY.md) (Относительно)
5. Много [примеров](./examples/)
6. Поддерживаются даже редко-используемые возможности, например:
   1. Персональные Вебхуки
   2. Блокировка метода оплаты P2P
   3. API работы с картами Qiwi Master.

## 📦 Установка

**Используя `NPM`**

```shell
npm i -S qiwi-sdk
```

**Используя `Yarn`**

```shell
yarn add qiwi-sdk
```

**Используя `pnpm`**

```shell
pnpm add qiwi-sdk
```

## 🛠️ Использование

### Импорт

```typescript
// TypeScript
import { P2P, Personal, Detector } from "qiwi-sdk";

// CommonJS
const { P2P, Personal, Detector } = require("qiwi-sdk");

// ESM
import QIWI from "qiwi-sdk";
const { P2P, Personal, Detector } = QIWI;
```

### Выбор API

```typescript
// Personal - API, отвечающее за работу с конкретным кошельком
const qiwi = new Personal(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

// P2P - удобное API для выставления счетов
const p2p = new P2P(process.env.QIWI_SECRET_KEY, process.env.QIWI_PUBLIC_KEY);

// Detector - API для определения Provider ID по номеру телефона или карты
const detector = new Detector();
```

#### _Переменные окружения:_

- **`QIWI_TOKEN`** - токен киви, полученный на https://qiwi.com/api
- **`QIWI_WALLET`** - номер телефона кошелька, к которому привязан токен. Формат: `79123456789`
- **`QIWI_SECRET_KEY`** и **`QIWI_PUBLIC_KEY`** - пара ключей, созданные на https://qiwi.com/p2p-admin/transfers/api

### 🤝 Интеграция

#### _Примеры:_

1. [🥝 Получение информации о кошельке](./examples/1-info.js)
2. [📬 Отправка платежа куда угодно](./examples/2-sending-payment.ts)
3. [🛠️ Создание ключей P2P и создание счёта](./examples/3-p2p.js)
4. [🔐 Получение лимитов (на ESM)](./examples/4-limits.mjs)
5. [🤖 Телеграм бот с оплатой напрямую (по номеру кошелька)](./examples/5-bot.js)
6. [🖥️ Магазин на Express](./examples/6-express.js)

#### _Документация:_

1. [👴 Миграция с 1.x](./docs/migration-from-1x.md)
2. [**`⚙️ Список методов`**](./docs/api/modules.md)
3. 🧑‍⚖️ Лицензия - [**MIT**](./LICENSE)
4. 🆙 [Список изменений](./CHANGELOG.md)

## ❤️ Контрибьютинг

1. ⁉️ Не стесняйтесь писать [Issues](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ Если хотите что-то поправить в коде, следуйте [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Так-же можете отправить донат 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Или поставить библиотеке [звёздочку](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), если она вам понравилась

## 🙋 Поддержка

Вы можете написать `Issue`, а если я долго не отвечаю пишите в

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

## Интересует приём платежей от физ. лиц по РФ?

Попробуйте мою другую библиотеку - SDK для ЮMoney 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)
