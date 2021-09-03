# Changelog

## 2.0

Параметр `walletId` был перенесён в конец и стал необязательным, 
так какпри создании класса `Personal` можно указать номер кошелька
или изменить его через свойство `walletId`

```javascript

const { Personal } = require('qiwi-sdk');

const qiwi = new Personal('token', '79123456789');
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