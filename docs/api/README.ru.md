# QIWI SDK

> Типизированный SDK для API QIWI Кошелька для NodeJS

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

Язык: **Русский** | [English](./README.md)

## 🍬 Почему именно эта библиотека?

1. **Полная.** Покрывает следующие API:
   - API Кошелька - [Wallet Personal](https://developer.qiwi.com/ru/qiwi-wallet-personal/);
   - P2P Счетов - [P2P Payments](https://developer.qiwi.com/ru/p2p-payments/).
2. **Простая.** Все методы названы как в документации QIWI и собраны в подклассы. Ко всем методам есть комментарии JSDoc.
   - **Много [примеров](#примеры)**.
3. **Надёжная.** Библиотека написана на **TypeScript** и покрыта тестами.
4. [**Безопасная.**](./SECURITY.md) У библиотеки всего `1` зависимость (axios), и она постоянно сканируется Code QL и [Snyk](https://snyk.io/advisor/npm-package/qiwi-sdk) на наличие уязвимостей.
5. **Совместимая.** Код с версии `1.1.0` (18 янв. 2020) будет работать на версии `3.1.0` (26 апр. 2022) с незначительными изменениями. Так-же `qiwi-sdk` предоставляет классы совместимости для упрощения миграции с похожих библиотек.
   - [Миграция с версии 1 на 2](./docs/migrations/from-1-to-2);
   - [Миграция с версии 2 на 3](./docs/migrations/from-2-to-3.md);
   - [Миграция c `node-qiwi`](./docs/migrations/from-node-qiwi.md);
   - [Миграция с `@qiwi/bill-payments-node-js-sdk`](./docs/migrations/from-bill-payments-sdk.md).
6. **Мощная.** Поддерживается работа с [**прокси**](./examples/7-proxy.js), и даже редко используемые API:
   - Персональные WebHook'и;
   - Блокировка метода оплаты P2P;
   - API работы с картами Qiwi Master.
   - [Интеграция с **`Express`**](#интеграция-с-express) из коробки
7. **Кроссплатформенная.** Поддерживает работу в браузере

Язык: **Русский** | [English](./README.md)

## 📦 Установка

- **Используя `npm`**
  ```shell
  npm i qiwi-sdk
  ```
- **Используя `Yarn`**
  ```shell
  yarn add qiwi-sdk
  ```
- **Используя `pnpm`**
  ```shell
  pnpm add qiwi-sdk
  ```

Язык: **Русский** | [English](./README.md)

## 🛠️ Использование

### Импорт

Из библиотеки можно импортировать все API по отдельности, так как
случаи их применения разные.

- **CommonJS** (способ по умолчанию для **Node JS**)
  ```javascript
  const { P2p, Wallet, Detector } = require("qiwi-sdk");
  ```
- **TypeScript** или **ES Модули**
  ```javascript
  import { P2p, Wallet, Detector } from "qiwi-sdk";
  ```

### Документация

[👉 Смотреть документацию API 👈](./docs/api/modules.md)

В таблице указанны текущие реализованные API.

**Класс (Legacy v2)** - это класс совместимости только для тех,
кто переходит с версии 2. Остальным рекомендуется использовать
новый вариант работы с API - Класс v3.

| **Класс (v3)**                                          | ~~Класс (Legacy v2)~~                                               | Документация от QIWI                                                 | Рекомендованное название переменной |
| ------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------- |
| [`Wallet`](./docs/api/classes/index.QIWI.Wallet.md)     | [`Personal`](./docs/api/classes/index.QIWI.WalletCompat.md)         | https://developer.qiwi.com/ru/qiwi-wallet-personal                   | `wallet` (или `qiwi`)               |
| [`P2p`](./docs/api/classes/index.QIWI.P2p.md)           | [`P2P`](./docs/api/classes/index.QIWI.P2pCompat.md)                 | https://developer.qiwi.com/ru/p2p-payments                           | `p2p`                               |
| [`P2p`](./docs/api/classes/index.QIWI.P2p.md)           | -                                                                   | https://developer.qiwi.com/ru/bill-payments                          | `p2p` (или `payments`)              |
| [`Detector`](./docs/api/classes/index.QIWI.Detector.md) | [`DetectorCompat`](./docs/api/classes/index.QIWI.DetectorCompat.md) | https://developer.qiwi.com/ru/qiwi-wallet-personal/#search-providers | `detector`                          |

Чтобы посмотреть детальную документацию по классу, нажмите на его
название.

#### Миграция

1. [Миграция с версии 2 на 3](./docs/migrations/from-2-to-3.md);
2. [Миграция с версии 1 на 2](./docs/migrations/from-1-to-2.md) (на всякий случай);
3. [Миграция c `node-qiwi`](./docs/migrations/from-node-qiwi.md);
4. [Миграция с `@qiwi/bill-payments-node-js-sdk`](./docs/migrations/from-bill-payments-sdk.md).

### Создание

```javascript
const { Wallet, P2p, Detector } = require("qiwi-sdk");

// ✅ - Правильный способ (с версии 3.0.0)
const wallet = Wallet.create(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);
const p2p = P2p.create(process.env.QIWI_SECRET_KEY, process.env.QIWI_PUBLIC_KEY);
const detect = Detector.create();

// ✅ - Тоже правильный способ (с версии 3.2.0)
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

#### Переменные окружения

В этом примере использовались следующие переменные окружения.
Все данные для доступа к API рекомендуется хранить в переменных
окружения либо в другом защищённом месте, но не в коде.

| Название                              | Тип                              | Описание                                                           |
| ------------------------------------- | -------------------------------- | ------------------------------------------------------------------ |
| `QIWI_TOKEN`                          | Строка(32 сим) - Hex             | Токен киви, полученный на https://qiwi.com/api                     |
| `QIWI_WALLET`                         | Строка(10-16 сим) - только цифры | Номер телефона кошелька, к которому привязан                       |
| `QIWI_SECRET_KEY` и `QIWI_PUBLIC_KEY` | Строки                           | Пара ключей, созданные на https://qiwi.com/p2p-admin/transfers/api |

### Примеры

#### Получение информации о кошельке

```javascript
const wallet = Wallet.create(process.env.QIWI_TOKEN);

wallet.personProfile.getCurrent().then(console.log);
// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
```

#### Отправка платежа

```javascript
const wallet = Wallet.create(process.env.QIWI_TOKEN);

// 100 руб. с рублёвого счёта на QIWI (99) `79123456789` включая комиссию
// Всё вышеописанное настраивается
wallet.payments.quickPay({
  amount: 100,
  account: "79123456789"
});
```

#### Выставление счёта

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

#### Использование прокси

```javascript
const { SocksProxyAgent } = require("socks-proxy-agent");

const wallet = Wallet.create(process.env.QIWI_TOKEN);
wallet.agent = new SocksProxyAgent("socks://login:password@host:port");

// Тут делаем что то с кошельком

// Не забываем очистить объект от агента
wallet.agent = undefined;
```

#### Интеграция с Express

```javascript
const p2p = P2p.create(process.env.QIWI_SECRET_KEY);
const app = express();

app.post(
  "/webhook/qiwi",
  p2p.notificationMiddleware({}, (req, res) => {
    // Тело запроса
    console.log(req.body);

    // { "siteId": "9hh4jb-00", "billId": "cc961e8d-d4d6-4f02-b737-2297e51fb48e", ... }
  })
);

app.use((error, req, res, next) => {
  if (error instanceof P2pBillNotificationError) {
    // Кто то отправил невалидное уведомление
    console.log(error);
  }

  return next();
});
```

#### Полные примеры

1. [🥝 Получение информации о кошельке](./examples/1-info.js)
2. [📬 Отправка платежа куда угодно](./examples/2-sending-payment.ts)
3. [🛠️ Создание ключей P2P и создание счёта](./examples/3-p2p.js)
4. [🔐 Получение лимитов (на ESM)](./examples/4-limits.mjs)
5. [🤖 Телеграм бот с оплатой напрямую (по номеру кошелька)](./examples/5-bot.js)
6. [🖥️ Магазин на Express](./examples/6-express.js)
7. [🌐 Использование прокси](./examples/7-proxy.js)

Язык: **Русский** | [English](./README.md)

## 🎩 О пакете

### Лицензия

Проект распространяется под лицензией MIT. Смотрите [LICENSE.txt](./LICENSE.txt)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAlexXanderGrib%2Fnode-qiwi-sdk.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FAlexXanderGrib%2Fnode-qiwi-sdk?ref=badge_large)

### Цели проекта

- [ ] Покрыть все [API QIWI](https://developer.qiwi.com/) (в том числе для юридических лиц)
  - [x] API QIWI Кошелька - (все API)
  - [ ] Прием платежей
  - [ ] Денежные выплаты
- [x] Сохранять обратную совместимость
  - [x] v2 и v3
  - [x] v1 и v2
- [x] Обеспечить максимальную надёжность и качество кода
  - [x] Типы: TypeScript
  - [x] Тесты: Jest, Codecov
  - [x] Авто-тесты в репозитории: Github Actions
  - [x] Статический анализ: Eslint, Prettier, Editorconfig
  - [x] Безопасность: Eslint Плагин, Code QL, ручная проверка в Snyk

### Содействие (Contributing)

1. ⁉️ Не стесняйтесь писать [Issues](https://github.com/AlexXanderGrib/node-qiwi-sdk/issues/new)
2. 🛠️ Если хотите что-то поправить в коде, следуйте [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. 💸 Так-же можете отправить донат 👉 https://qiwi.com/n/ALEXXGRIB
4. 🌟 Или поставить библиотеке [звёздочку](https://github.com/AlexXanderGrib/node-qiwi-sdk/stargazers), если она вам понравилась

### Поддержка

Вы можете написать `Issue`, а если я долго не отвечаю пишите в

**Telegram: [@AlexXanderGrib](https://t.me/AlexXanderGrib)**

### 💜 Пакет для YooMoney

**Интересует приём платежей от физ. лиц по РФ?**

Попробуйте мою другую библиотеку - SDK для ЮMoney 👉 [**github.com/AlexXanderGrib/yoomoney-sdk**](https://github.com/AlexXanderGrib/yoomoney-sdk)

Язык: **Русский** | [English](./README.md)
