# NodeJS QIWI SDK

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

Язык: **Русский** | [English](./README.en.md)

## 🍬 Почему именно эта библиотека?

1. **Полная.** Покрывает следующие API:
   - API Кошелька - [Wallet Personal](https://developer.qiwi.com/ru/qiwi-wallet-personal/);
   - P2P Счетов - [P2P Payments](https://developer.qiwi.com/ru/p2p-payments/).
2. **Простая.** Все методы названы как в документации QIWI и собраны в подклассы. Ко всем методам есть комментарии JSDoc.
   - **Много [примеров](#примеры)**.
3. **Надёжная.** Библиотека написана на TypeScript и покрыта тестами.
4. [**Безопасная.**](./SECURITY.md) У библиотеки всего 3 зависимости, и она постоянно сканируется Code QL и [Snyk](https://snyk.io/advisor/npm-package/qiwi-sdk) на наличие уязвимостей.
5. **Совместимая.** Код с версии `1.1.0` (18 янв. 2020) будет работать на версии `3.1.0` (26 апр. 2022) с незначительными изменениями.
   - [Миграция с версии 1 на 2](/docs/migration-from-1x.md)
   - [Миграция с версии 2 на 3](/docs/migration-from-2x.md)
6. **Мощная.** Поддерживается работа с [**прокси**](./examples/7-proxy.js), и даже редко используемые API:
   - Персональные Вебхуки;
   - Блокировка метода оплаты P2P;
   - API работы с картами Qiwi Master.

## 📦 Установка

- **Используя `NPM`**
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

Каждый импортированный класс реализует 1 API. В таблице указанны
текущие реализованные API.

**Класс (Legacy v2)** - это класс совместимости только для тех,
кто переходит с версии 2. Остальным рекомендуется использовать
новый вариант работы с API - Класс v3.

| **Класс (v3)**                                    | ~~Класс (Legacy v2)~~                                         | Документация от QIWI                                                 |
| ------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Wallet`](./docs/api/classes/QIWI.Wallet.md)     | [`Personal`](./docs/api/classes/QIWI.WalletCompat.md)         | https://developer.qiwi.com/ru/qiwi-wallet-personal                   |
| [`P2p`](./docs/api/classes/QIWI.P2p.md)           | [`P2P`](./docs/api/classes/QIWI.P2pCompat.md)                 | https://developer.qiwi.com/ru/p2p-payments                           |
| [`Detector`](./docs/api/classes/QIWI.Detector.md) | [`DetectorCompat`](./docs/api/classes/QIWI.DetectorCompat.md) | https://developer.qiwi.com/ru/qiwi-wallet-personal/#search-providers |

Чтобы посмотреть детальную документацию по классу, нажмите на его
название.

#### Миграция

1. [Миграция с версии 2 на 3](/docs/migration-from-2x.md)
2. [Миграция с версии 1 на 2](/docs/migration-from-1x.md) (на всякий случай)

#### Полная документация

[**Смотреть всю документацию**](./docs/api/modules.md)

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

1. [🥝 Получение информации о кошельке](./examples/1-info.js)
2. [📬 Отправка платежа куда угодно](./examples/2-sending-payment.ts)
3. [🛠️ Создание ключей P2P и создание счёта](./examples/3-p2p.js)
4. [🔐 Получение лимитов (на ESM)](./examples/4-limits.mjs)
5. [🤖 Телеграм бот с оплатой напрямую (по номеру кошелька)](./examples/5-bot.js)
6. [🖥️ Магазин на Express](./examples/6-express.js)
7. [🌐 Использование прокси](./examples/7-proxy.js)

## 🎩 О пакете

### Лицензия

Проект распространяется под лицензией [**MIT**](./LICENSE)

### Цели проекта

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
