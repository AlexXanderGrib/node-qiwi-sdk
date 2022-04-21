# Список изменений

## 3.0

1. Глобально Изменено API (Но большая часть совместима без изменений)
2. Убрана зависимость от `sweet-decorators`
3. Изменена система выброса ошибок - теперь `Stack Trace`'ы стали более полными

**Но, для практически всего API сделан класс совместимости**

### Импорт и использование

#### Wallet (Personal)

```typescript
// Старый способ
import { Personal } from "qiwi-sdk";
const qiwi = new Personal("token", "phone");

// Новый способ
import { Wallet } from "qiwi-sdk";
const qiwi = Wallet.create("token", "phone");

// Совместимый способ
import { Personal, WalletCompat } from "qiwi-sdk";
// Это один класс, экспортированный 2 раза
Personal === WalletCompat;
const qiwi = new Personal("token", "phone");
```

#### P2P

```typescript
// Старый способ
import { P2P } from "qiwi-sdk";
const p2p = new P2P("secretKey", "publicKey");

// Новый способ
import { P2p } from "qiwi-sdk";
const p2p = P2p.create("secretKey", "publicKey");

// Совместимый способ
import { P2P, P2pCompat } from "qiwi-sdk";
// Это один класс, экспортированный 2 раза
P2P === P2pCompat;
const p2p = new P2P("secretKey", "publicKey");
```

#### Detect

```typescript
// Старый способ
import { Detector } from "qiwi-sdk";
const detector = new Detector();

// Новый способ
import { Detector } from "qiwi-sdk";
const qiwi = Detector.create();

// Совместимый способ
import { DetectorCompat } from "qiwi-sdk";
const detector = new DetectorCompat();
```

### Доступность методов

| Способ      | Старые сигнатуры | Новые сигнатуры | Поддержка\* |
| ----------- | :--------------: | :-------------: | :---------: |
| Новый       |        ❎        |       ✅        |     ✅      |
| Совместимый |        ✅        |       ✅        |     ❎      |

\* - поддержка в новых версиях и добавление новых методов

### Новые названия методов.

Теперь все классы API разбиты на логические подклассы.

#### Wallet (Personal)

| Старый способ вызова             | Новый способ вызова                       |
| -------------------------------- | ----------------------------------------- |
| `new Personal(token, walletId?)` | `Wallet.create(token, walletId?)`         |
| `.getPersonProfile()`            | `.personProfile.getCurrent()`             |
| `.setIdentification()`           | `.identification.set()`                   |
| `.getIdentification()`           | `.identification.get()`                   |
| `.getLimits<T>()`                | `.limits.get<T>()`                        |
| `.getRestrictions()`             | `.restrictions.get()`                     |
| `.getPaymentHistory()`           | `.paymentHistory.getHistory()`            |
| `.getPaymentHistoryTotal()`      | `.paymentHistory.getTotal()`              |
| `.getTransaction()`              | `.paymentHistory.getTransaction()`        |
| `.getTransactionCheque()`        | `.paymentHistory.getTransactionCheque()`  |
| `.sendTransactionCheque()`       | `.paymentHistory.sendTransactionCheque()` |
| `.getAccounts()`                 | `.fundingSources.getAccounts()`           |
| `.getAccountOffers()`            | `.fundingSources.getAccountOffers()`      |
| `.createAccount()`               | `.fundingSources.createAccount()`         |
| `.setDefaultAccount()`           | `.fundingSources.setDefaultAccount()`     |
| `.getCommission()`               | `.payments.getCommission()`               |
| `.createFormUrl()`               | `.payments.createFormUrl()`               |
| `.pay2()`                        | `.payments.pay()`                         |
| `.createP2PKeyPair()`            | `.bills.createP2PKeyPair()`               |
| `.createOauthToken()`            | `.createOauthToken()`                     |
| `.getCards()`                    | `.cards.get()`                            |
| `.blockCard()`                   | `.cards.block()`                          |
| `.unblockCard()`                 | `.cards.unblock()`                        |
| `.getCardRequisites()`           | `.cards.getRequisites()`                  |
| `.renameCard()`                  | `.cards.rename()`                         |
| `.addWebHook()`                  | `.webhooks.add()`                         |
| `.removeWebHook()`               | `.webhooks.remove()`                      |
| `.getWebHookSecret()`            | `.webhooks.getSecret()`                   |
| `.getNewWebHookSecret()`         | `.webhooks.updateSecret()`                |
| `.getActiveWebHook()`            | `.webhooks.getActiveWebhook()`            |
| `.testActiveWebHook()`           | `.webhooks.testActiveWebhook()`           |
| `.checkWebHookSign()`            | `.webhooks.checkSign()`                   |
| `.webhookKey`                    | `.webhooks.keys`                          |
| `.hookId`                        | `.webhooks.activeId`                      |

#### P2P

| Старый способ вызова             | Новый способ вызова                 |
| -------------------------------- | ----------------------------------- |
| `new P2P(secretKey, publicKey?)` | `P2p.create(secretKey, publicKey?)` |
| `.createBill()`                  | `.bills.create()`                   |
| `.createBillFormUrl()`           | `.bills.createFormUrl()`            |
| `.getBillStatus()`               | `.bills.getStatus()`                |
| `.billStatus()`                  | `.bills.getStatus()`                |
| `.rejectBill()`                  | `.bills.reject()`                   |

#### Detector

| Старый способ вызова                                        | Новый способ вызова              |
| ----------------------------------------------------------- | -------------------------------- |
| `new DetectorCompat()` (или `new Detector()` до обновления) | `Detector.create()`              |
| `.getPhoneProvider()`                                       | `.detectProvider.byPhone()`      |
| `.getCardProvider()`                                        | `.detectProvider.byCardNumber()` |

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
