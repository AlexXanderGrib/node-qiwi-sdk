qiwi-sdk / [Exports](modules.md)

# NodeJS QIWI SDK

[![Test Status](https://github.com/AlexXanderGrib/node-qiwi-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![codecov](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk/branch/main/graph/badge.svg)](https://codecov.io/gh/AlexXanderGrib/node-qiwi-sdk)
[![license MIT](https://img.shields.io/npm/l/qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/qiwi-sdk.svg)](https://npmjs.com/package/qiwi-sdk)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-qiwi-sdk.svg)](https://github.com/AlexXanderGrib/node-qiwi-sdk)
[![qiwi-sdk](https://snyk.io/advisor/npm-package/qiwi-sdk/badge.svg)](https://snyk.io/advisor/npm-package/qiwi-sdk)
[![Quality (npms.io)](https://img.shields.io/npms-io/quality-score/qiwi-sdk.svg?label=Quality%20%28npms.io%29&)](https://npms.io/search?q=qiwi-sdk)

**Язык: (_🇷🇺 Русский_ / [🇬🇧 English](./README.en.md))**

<center>
  <img src="docs/assets/logo.svg" alt="QIWI SDK" /> 
</center>

## 🍬 Почему именно эта библиотека?

1. Она написана на TypeScript, покрыта тестами
2. Покрывает [`Wallet Personal`](https://developer.qiwi.com/ru/qiwi-wallet-personal/) и [`P2P Payments`](https://developer.qiwi.com/ru/p2p-payments/) секции API
3. Документация появляется прямо в редакторе, так-как используется JSDoc
4. [Безопасная](./SECURITY.md) (Относительно)
5. Много [примеров](./examples/README.md)
6. Поддерживаются даже редко-используемые возможности, например:
   1. Персональные Вебхуки
   2. Блокировка метода оплаты P2P
   3. API работы с картами Qiwi Master.

## 📦 Установка

**Используя `NPM`**

```shell
npm i qiwi-sdk
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

### Совместимость

После обновления до версии `3.0` большая часть старого кода осталось совместимой. Подробнее об изменениях читайте в [`CHANGELOG.md`](./CHANGELOG.md)

Если кратко, чтобы код остался совместимым, замените использование класса `Detector` на `DetectorCompat`.

Все остальные классы должны остаться совместимыми

### Импорт

```typescript
// TypeScript или ESM
import { P2p, Wallet, Detector } from "qiwi-sdk";

// CommonJS
const { P2p, Wallet, Detector } = require("qiwi-sdk");
```

### Обзор API

```typescript
// Personal - API, отвечающее за работу с конкретным кошельком
// Документация от QIWI:
// https://developer.qiwi.com/ru/qiwi-wallet-personal
const qiwi = Wallet.create(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

// P2P - удобное API для выставления счетов
// Документация от QIWI:
// https://developer.qiwi.com/ru/p2p-payments
const p2p = P2p.create(process.env.QIWI_SECRET_KEY, process.env.QIWI_PUBLIC_KEY);

// Detector - API для определения Provider ID по номеру телефона или карты
// Содержит всего 1 метод
const detector = Detector.create();
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
7. [🌐 Использование прокси](./examples/7-proxy.js)

#### _Документация:_

1. [👴 Миграция с 1.x](./docs/migration-from-1x.md)
2. [**`⚙️ Список методов`**](./docs/api/modules.md)
3. 🧑‍⚖️ Лицензия - [**MIT**](./LICENSE)
4. 🆙 [Список изменений](./CHANGELOG.md)

## О пакете

### Цели пакета

- [ ] Покрыть все [API QIWI](https://developer.qiwi.com/) (в том числе для юридических лиц)
  - [x] API QIWI Кошелька - (все API)
  - [ ] Прием платежей
  - [ ] Денежные выплаты
  - [ ] Bank as a Service
  - [ ] Идентификация
        клиентов
- [x] Сохранять обратную совместимость
  - [x] v2 и v3
  - [x] v1 и v2
- [x] Обеспечить максимальную надёжность и качество кода
  - [x] Типы: TypeScript
  - [x] Тесты: Jest, Codecov
  - [x] Авто-тесты в репозитории: Github Actions
  - [x] Линтинг: Eslint, Prettier, Editorconfig
  - [x] Безопасность: Eslint Плагин, Code QL, ручная проверка в Snyk

### ❤️ Контрибьютинг

1. ⁉️ Не стесняйтесь писать [Issues](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ Если хотите что-то поправить в коде, следуйте [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Так-же можете отправить донат 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Или поставить библиотеке [звёздочку](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), если она вам понравилась

### 🙋 Поддержка

Вы можете написать `Issue`, а если я долго не отвечаю пишите в

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

### Пакет для YooMoney

**Интересует приём платежей от физ. лиц по РФ?**

Попробуйте мою другую библиотеку - SDK для ЮMoney 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)
