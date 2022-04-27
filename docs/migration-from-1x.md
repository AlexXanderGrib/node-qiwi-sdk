# Миграция с 1x на 2x

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

О менее крупных изменениях можно почитать в [CHANGELOG.md](../CHANGELOG.md)
