# Список изменений

## 4.1

Убрана поддержка браузера

## 4.0

- Удалены зависимости: `uuid` и `query-string`
- Теперь библиотека имеет сборку, которая работает в браузере

## 3.0

1. Глобально Изменено API (Но большая часть совместима без изменений)
2. Убрана зависимость от `sweet-decorators`
3. Изменена система выброса ошибок - теперь `Stack Trace`'ы стали более полными

**Но, для практически всего API сделан класс совместимости**

[Миграция с версии 2](./docs/migrations/from-2-to-3.md)

## 2.0

Добавлен `CHANGELOG.md`

### 2.3.0

1. Добавлена поддержка Es-Модулей. Теперь API можно импортировать по частям

```js
import { Personal } from "qiwi-sdk";
```

2. `node-fetch` убран, теперь вместо него используется `axios`
3. Добавлены строковые типы для упрощения отправки запросов в API. Чтобы больше не приходилось импортировать `enum`ы
4. Упрощён `User-Agent` библиотеки

### 2.1.5

Fix: метод `Personal.createP2PKeyPair()`

### 2.0.1

Починена возможная дырка в безопасности связанная с конкатенацией
querystring в [personal.ts](./src/services/personal.ts)

### 2.0.0

Параметр `walletId` был перенесён в конец и стал необязательным,
так как при создании класса `Personal` можно указать номер кошелька
или изменить его через свойство `walletId`

```javascript
const { Personal } = require("qiwi-sdk");

const qiwi = new Personal("token", "79123456789");
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

Да собственно кроме этого ничего не изменилось

[Миграция с версии 1](./docs/migrations/from-1-to-2.md)
