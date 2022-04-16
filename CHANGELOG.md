# Список изменений

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
