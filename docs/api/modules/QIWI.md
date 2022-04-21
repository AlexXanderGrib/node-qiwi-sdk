[qiwi-sdk](../README.md) / [Exports](../modules.md) / QIWI

# Namespace: QIWI

## Table of contents

### References

- [P2P](QIWI.md#p2p)
- [P2PNotificationError](QIWI.md#p2pnotificationerror)
- [P2PPaymentError](QIWI.md#p2ppaymenterror)
- [Personal](QIWI.md#personal)
- [PersonalApiError](QIWI.md#personalapierror)

### Enumerations

- [BillCurrency](../enums/QIWI.BillCurrency.md)
- [BillPaySource](../enums/QIWI.BillPaySource.md)
- [BillStatus](../enums/QIWI.BillStatus.md)
- [CardActionStatus](../enums/QIWI.CardActionStatus.md)
- [CardStatus](../enums/QIWI.CardStatus.md)
- [ChequeFormat](../enums/QIWI.ChequeFormat.md)
- [Currency](../enums/QIWI.Currency.md)
- [LimitType](../enums/QIWI.LimitType.md)
- [PaymentHistorySource](../enums/QIWI.PaymentHistorySource.md)
- [PersonIdentificationLevel](../enums/QIWI.PersonIdentificationLevel.md)
- [Recipients](../enums/QIWI.Recipients.md)
- [TimeSpan](../enums/QIWI.TimeSpan.md)
- [TransactionStatus](../enums/QIWI.TransactionStatus.md)
- [TransactionType](../enums/QIWI.TransactionType.md)

### Classes

- [Detector](../classes/QIWI.Detector.md)
- [DetectorCompat](../classes/QIWI.DetectorCompat.md)
- [DetectorError](../classes/QIWI.DetectorError.md)
- [P2p](../classes/QIWI.P2p.md)
- [P2pApiError](../classes/QIWI.P2pApiError.md)
- [P2pAuthorizationError](../classes/QIWI.P2pAuthorizationError.md)
- [P2pBillNotificationError](../classes/QIWI.P2pBillNotificationError.md)
- [P2pCompat](../classes/QIWI.P2pCompat.md)
- [Wallet](../classes/QIWI.Wallet.md)
- [WalletApiError](../classes/QIWI.WalletApiError.md)
- [WalletApiShortError](../classes/QIWI.WalletApiShortError.md)
- [WalletAuthorizationError](../classes/QIWI.WalletAuthorizationError.md)
- [WalletCompat](../classes/QIWI.WalletCompat.md)

### Interfaces

- [Bill](../interfaces/QIWI.Bill.md)
- [BillProvider](../interfaces/QIWI.BillProvider.md)
- [P2pApiOptions](../interfaces/QIWI.P2pApiOptions.md)
- [WalletApiOptions](../interfaces/QIWI.WalletApiOptions.md)

### Type aliases

- [Account](QIWI.md#account)
- [AccountOffer](QIWI.md#accountoffer)
- [AnyMapping](QIWI.md#anymapping)
- [AnyResponse](QIWI.md#anyresponse)
- [BillCreateParameters](QIWI.md#billcreateparameters)
- [BillCreationRequest](QIWI.md#billcreationrequest)
- [BillCurrencyAny](QIWI.md#billcurrencyany)
- [BillCurrencyPlain](QIWI.md#billcurrencyplain)
- [BillError](QIWI.md#billerror)
- [BillFormParameters](QIWI.md#billformparameters)
- [BillPayResponse](QIWI.md#billpayresponse)
- [BillStatusAny](QIWI.md#billstatusany)
- [BillStatusData](QIWI.md#billstatusdata)
- [BillStatusPlain](QIWI.md#billstatusplain)
- [BillsGetParameters](QIWI.md#billsgetparameters)
- [CardActionStatusAny](QIWI.md#cardactionstatusany)
- [CardActionStatusPlain](QIWI.md#cardactionstatusplain)
- [CardRenameResponse](QIWI.md#cardrenameresponse)
- [CardRequisitesResponse](QIWI.md#cardrequisitesresponse)
- [CardResponse](QIWI.md#cardresponse)
- [CardStatusAny](QIWI.md#cardstatusany)
- [CardStatusPlain](QIWI.md#cardstatusplain)
- [CardUnblockResponse](QIWI.md#cardunblockresponse)
- [ChequeFormatAny](QIWI.md#chequeformatany)
- [ChequeFormatPlain](QIWI.md#chequeformatplain)
- [CodeResponse](QIWI.md#coderesponse)
- [Collection](QIWI.md#collection)
- [CurrencyAny](QIWI.md#currencyany)
- [CurrencyPlain](QIWI.md#currencyplain)
- [DetectorApiOptions](QIWI.md#detectorapioptions)
- [FormUrlOptions](QIWI.md#formurloptions)
- [FreePayFields](QIWI.md#freepayfields)
- [GetAccountOffersResponse](QIWI.md#getaccountoffersresponse)
- [GetAccountsResponse](QIWI.md#getaccountsresponse)
- [GetPaymentHistoryParams](QIWI.md#getpaymenthistoryparams)
- [GetPaymentHistoryParamsBase](QIWI.md#getpaymenthistoryparamsbase)
- [GetPaymentHistoryParamsStartEnd](QIWI.md#getpaymenthistoryparamsstartend)
- [GetPaymentHistoryTotalParams](QIWI.md#getpaymenthistorytotalparams)
- [GetPaymentHistoryTotalResponse](QIWI.md#getpaymenthistorytotalresponse)
- [GetTransactionsHistoryResponse](QIWI.md#gettransactionshistoryresponse)
- [IdentificationBase](QIWI.md#identificationbase)
- [IdentificationResponse](QIWI.md#identificationresponse)
- [KeyPair](QIWI.md#keypair)
- [Limit](QIWI.md#limit)
- [LimitTypeAny](QIWI.md#limittypeany)
- [LimitTypePlain](QIWI.md#limittypeplain)
- [LimitsResponse](QIWI.md#limitsresponse)
- [LockableField](QIWI.md#lockablefield)
- [Mapping](QIWI.md#mapping)
- [MoneyAmount](QIWI.md#moneyamount)
- [ObjectKey](QIWI.md#objectkey)
- [ObjectMapping](QIWI.md#objectmapping)
- [P2pApiErrorResponse](QIWI.md#p2papierrorresponse)
- [PayParameters](QIWI.md#payparameters)
- [PayUrlPatchParameters](QIWI.md#payurlpatchparameters)
- [PaymentCommissionRequest](QIWI.md#paymentcommissionrequest)
- [PaymentHistorySourceAny](QIWI.md#paymenthistorysourceany)
- [PaymentHistorySourcePlain](QIWI.md#paymenthistorysourceplain)
- [PaymentResponse](QIWI.md#paymentresponse)
- [PersonIdentificationLevelAny](QIWI.md#personidentificationlevelany)
- [PersonIdentificationLevelPlain](QIWI.md#personidentificationlevelplain)
- [PersonProfile](QIWI.md#personprofile)
- [PrettyTokenResponse](QIWI.md#prettytokenresponse)
- [ReadonlyRecord](QIWI.md#readonlyrecord)
- [Restrictions](QIWI.md#restrictions)
- [StringOrNumber](QIWI.md#stringornumber)
- [TimeSpanKeys](QIWI.md#timespankeys)
- [TimeSpanMapping](QIWI.md#timespanmapping)
- [TokenResponse](QIWI.md#tokenresponse)
- [Transaction](QIWI.md#transaction-1)
- [TransactionStatusAny](QIWI.md#transactionstatusany)
- [TransactionStatusPlain](QIWI.md#transactionstatusplain)
- [TransactionTypeAny](QIWI.md#transactiontypeany)
- [TransactionTypePlain](QIWI.md#transactiontypeplain)
- [WalletApiErrorResponse](QIWI.md#walletapierrorresponse)
- [WalletApiShortErrorResponse](QIWI.md#walletapishorterrorresponse)
- [WebHookInfo](QIWI.md#webhookinfo)
- [WebhookTransaction](QIWI.md#webhooktransaction)

### Variables

- [TimeSpanMapping](QIWI.md#timespanmapping-1)

### Functions

- [convertCollection](QIWI.md#convertcollection)
- [convertMapping](QIWI.md#convertmapping)
- [convertObjectMapping](QIWI.md#convertobjectmapping)
- [formatDate](QIWI.md#formatdate)
- [formatOffsetDate](QIWI.md#formatoffsetdate)
- [formatQuerystring](QIWI.md#formatquerystring)
- [generateUUID](QIWI.md#generateuuid)
- [isCollection](QIWI.md#iscollection)
- [isMapping](QIWI.md#ismapping)
- [parseQuerystring](QIWI.md#parsequerystring)

## References

### P2P

Renames and re-exports [P2pCompat](../classes/QIWI.P2pCompat.md)

___

### P2PNotificationError

Renames and re-exports [P2pBillNotificationError](../classes/QIWI.P2pBillNotificationError.md)

___

### P2PPaymentError

Renames and re-exports [P2pApiError](../classes/QIWI.P2pApiError.md)

___

### Personal

Renames and re-exports [WalletCompat](../classes/QIWI.WalletCompat.md)

___

### PersonalApiError

Renames and re-exports [WalletApiError](../classes/QIWI.WalletApiError.md)

## Type aliases

### Account

Ƭ **Account**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним пользовательского баланса |
| `balance` | [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` | - |
| `bankAlias` | `string` | Псевдоним банка |
| `currency` | [`Currency`](../enums/QIWI.Currency.md) | Код валюты баланса (number-3 ISO-4217) |
| `defaultAccount?` | `boolean` | - |
| `fsAlias` | `string` | Псевдоним банковского баланса |
| `hasBalance` | `boolean` | Логический признак реального баланса в системе QIWI Кошелек (не привязанная карта, не счет мобильного телефона и т.д.) |
| `title` | `string` | Название соответствующего счета кошелька |
| `type` | { `id`: `string` ; `title`: `string`  } | Сведения о счете |
| `type.id` | `string` | Описание счета |
| `type.title` | `string` | Описание счета |

#### Defined in

[src/apis/wallet/wallet.types.ts:733](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L733)

___

### AccountOffer

Ƭ **AccountOffer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета |
| `currency` | [`Currency`](../enums/QIWI.Currency.md) | ID валюты счета |

#### Defined in

[src/apis/wallet/wallet.types.ts:774](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L774)

___

### AnyMapping

Ƭ **AnyMapping**<`K`, `V`\>: [`Mapping`](QIWI.md#mapping)<`K`, `V`\> \| `PropertyCollection`<`K`, `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Defined in

[src/apis/shared/shared.types.ts:12](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.types.ts#L12)

___

### AnyResponse

Ƭ **AnyResponse**: `Record`<`string`, `any`\>

#### Defined in

[src/apis/shared/shared.types.ts:1](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.types.ts#L1)

___

### BillCreateParameters

Ƭ **BillCreateParameters**: [`BillCreationRequest`](QIWI.md#billcreationrequest) & [`PayUrlPatchParameters`](QIWI.md#payurlpatchparameters) & { `billId?`: `string`  }

#### Defined in

[src/apis/p2p/p2p.types.ts:184](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L184)

___

### BillCreationRequest

Ƭ **BillCreationRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | { `currency`: [`BillCurrency`](../enums/QIWI.BillCurrency.md) ; `value`: `number` \| `string`  } | Данные о сумме счета |
| `amount.currency` | [`BillCurrency`](../enums/QIWI.BillCurrency.md) | Валюта суммы счета. Возможные значения: `RUB` - рубли `KZT` - тенге |
| `amount.value` | `number` \| `string` | Сумма, на которую выставляется счет, округленная в меньшую сторону до 2 десятичных знаков |
| `comment?` | `string` | Комментарий к счету  **`maxlength`** 255 |
| `customFields?` | `Record`<`string`, `string`\> | Дополнительные данные счета. Так же при помощи этого параметра вы можете настроить [персонализацию](https://developer.qiwi.com/ru/p2p-payments/#custom) вашей формы, передав переменную `themeCode` |
| `customer?` | { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | Идентификаторы пользователя |
| `customer.account?` | `string` | Идентификатор пользователя в вашей системе |
| `customer.email?` | `string` | E-mail пользователя |
| `customer.phone?` | `string` | Номер телефона пользователя (в международном формате) |
| `expirationDateTime?` | `string` \| `Date` | Дата, до которой счет будет доступен для оплаты. Если перевод не будет совершен до этой даты, ему присваивается финальный статус `EXPIRED` и последующий перевод станет невозможен.  **`example`** "2020-07-10T09:02:00+03:00" |

#### Defined in

[src/apis/p2p/p2p.types.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L24)

___

### BillCurrencyAny

Ƭ **BillCurrencyAny**: [`BillCurrency`](../enums/QIWI.BillCurrency.md) \| [`BillCurrencyPlain`](QIWI.md#billcurrencyplain)

#### Defined in

[src/apis/p2p/p2p.types.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L22)

___

### BillCurrencyPlain

Ƭ **BillCurrencyPlain**: keyof typeof [`BillCurrency`](../enums/QIWI.BillCurrency.md)

#### Defined in

[src/apis/p2p/p2p.types.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L21)

___

### BillError

Ƭ **BillError**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `datetime` | `string` | Дата и время ответа |
| `description` | `string` | Вот это надо пихать в поле `Error.message` |
| `errorCode` | `string` | Внутренний код ошибки |
| `serviceName` | `string` | Название сервиса, зачастую начинается на `invoicing` |
| `traceId` | `string` | Хз что это |
| `userMessage` | `string` |  |

#### Defined in

[src/apis/p2p/p2p.types.ts:126](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L126)

___

### BillFormParameters

Ƭ **BillFormParameters**: { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: `Record`<`string`, `string`\> ; `lifetime?`: `string` ; `successUrl?`: `string`  } & [`BillCreationRequest`](QIWI.md#billcreationrequest)[``"customer"``]

#### Defined in

[src/apis/p2p/p2p.types.ts:141](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L141)

___

### BillPayResponse

Ƭ **BillPayResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `WALLET_ACCEPT_PAY_RESULT` | `any` | - |
| `invoice_status` | `string` | Строка кода статуса оплаты счета, `PAID_STATUS`. Любой другой статус означает неуспех платежной транзакции. |
| `is_sms_confirm` | `boolean` | Признак подтверждения по SMS |

#### Defined in

[src/apis/wallet/wallet.types.ts:1466](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1466)

___

### BillStatusAny

Ƭ **BillStatusAny**: [`BillStatus`](../enums/QIWI.BillStatus.md) \| [`BillStatusPlain`](QIWI.md#billstatusplain)

#### Defined in

[src/apis/p2p/p2p.types.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L14)

___

### BillStatusData

Ƭ **BillStatusData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BillCreationRequest`](QIWI.md#billcreationrequest)[``"amount"``] | Данные о сумме счета |
| `billId` | `string` | Уникальный идентификатор выставляемого счета в вашей системе |
| `comment?` | `string` | Комментарий к счету |
| `creationDateTime` | `string` | Системная дата создания счета. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс` |
| `customFields` | `Record`<`string`, `string`\> | Объект строковых дополнительных параметров, переданных вами |
| `customer?` | [`BillCreationRequest`](QIWI.md#billcreationrequest)[``"customer"``] | Идентификаторы пользователя |
| `expirationDateTime` | `string` | Срок действия созданной формы для перевода. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс+\-чч:мм` |
| `payUrl` | `string` | [Ссылка для переадресации](https://developer.qiwi.com/ru/p2p-payments/#option) пользователя на созданную форму |
| `siteId` | `string` | Ваш идентификатор в системе p2p.qiwi |
| `status` | { `changedDateTime`: `string` ; `value`: [`BillStatusAny`](QIWI.md#billstatusany)  } | - |
| `status.changedDateTime` | `string` | Дата обновления статуса |
| `status.value` | [`BillStatusAny`](QIWI.md#billstatusany) | Текущий статус счета |

#### Defined in

[src/apis/p2p/p2p.types.ts:81](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L81)

___

### BillStatusPlain

Ƭ **BillStatusPlain**: keyof typeof [`BillStatus`](../enums/QIWI.BillStatus.md)

#### Defined in

[src/apis/p2p/p2p.types.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L13)

___

### BillsGetParameters

Ƭ **BillsGetParameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `max_creation_datetime?` | `number` | Верхняя временная граница для поиска счетов, Unix-time |
| `min_creation_datetime?` | `number` | Нижняя временная граница для поиска счетов, Unix-time |
| `next_creation_datetime?` | `number` | Начальное время для поиска (возвращаются только счета, выставленные ранее этого времени), Unix-time. Используется для продолжения списка, разбитого на страницы. |
| `next_id?` | `number` | Начальный идентификатор счета для поиска. Будет возвращен список счетов с идентификаторами, равными или меньше этого значения. Используется для продолжения списка, разбитого на страницы. |
| `rows?` | `number` | Максимальное число счетов в ответе, для разбивки списка на страницы. Целое число от 1 до 50. По умолчанию возвращается не более 50 счетов. |
| `statuses?` | `string` | Статус неоплаченного счета. Обязательный параметр. Только строка `READY_FOR_PAY` |

#### Defined in

[src/apis/wallet/wallet.types.ts:1426](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1426)

___

### CardActionStatusAny

Ƭ **CardActionStatusAny**: [`CardActionStatus`](../enums/QIWI.CardActionStatus.md) \| [`CardActionStatusPlain`](QIWI.md#cardactionstatusplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:1092](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1092)

___

### CardActionStatusPlain

Ƭ **CardActionStatusPlain**: keyof typeof [`CardActionStatus`](../enums/QIWI.CardActionStatus.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:1091](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1091)

___

### CardRenameResponse

Ƭ **CardRenameResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | Текстовое описание ошибки |
| `errorCode` | `string` | Код ошибки |
| `status` | [`OK`](../enums/QIWI.CardActionStatus.md#ok) \| [`FAIL`](../enums/QIWI.CardActionStatus.md#fail) | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:1116](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1116)

___

### CardRequisitesResponse

Ƭ **CardRequisitesResponse**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvv` | `string` | CVV карты |
| `errorCode` | `string` | Код ошибки |
| `pan` | `string` | Полный номер карты |
| `status` | [`CardActionStatusAny`](QIWI.md#cardactionstatusany) | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:1101](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1101)

___

### CardResponse

Ƭ **CardResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balance` | [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` | Данные баланса карты |
| `info` | { `[key: string]`: `any`; `alias`: ``"qvc-cpa"`` \| ``"qvc-cpa-debit"`` \| ``"qvp-gold"`` ; `details`: { `description`: `string` ; `features`: `string`[] ; `images`: `ImageObject`[] ; `imagesDet`: `ImageObject`[] ; `imagesMin`: `ImageObject`[] ; `info`: `string` ; `offerLink`: `string` ; `requisites`: `KVObject`[] ; `tariffLink`: `string` ; `tariffs`: `KVObject`[]  } ; `name`: `string` ; `period`: `string` ; `price`: [`MoneyAmount`](QIWI.md#moneyamount)  } | Тарифы и банковские реквизиты карты |
| `info.alias` | ``"qvc-cpa"`` \| ``"qvc-cpa-debit"`` \| ``"qvp-gold"`` | [Тип карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#card-types) |
| `info.details` | { `description`: `string` ; `features`: `string`[] ; `images`: `ImageObject`[] ; `imagesDet`: `ImageObject`[] ; `imagesMin`: `ImageObject`[] ; `info`: `string` ; `offerLink`: `string` ; `requisites`: `KVObject`[] ; `tariffLink`: `string` ; `tariffs`: `KVObject`[]  } | - |
| `info.details.description` | `string` | Описание карты |
| `info.details.features` | `string`[] | Список возможностей карты на русском |
| `info.details.images` | `ImageObject`[] | Изображения карты для лендинга с "примерными" данными |
| `info.details.imagesDet` | `ImageObject`[] | Изображения карты без данных |
| `info.details.imagesMin` | `ImageObject`[] | Иконки карты |
| `info.details.info` | `string` | Краткое описание тарифа карты. Пример: `99 ₽, действует 1 год` |
| `info.details.offerLink` | `string` | Ссылка на договор оферты на выпуск карты |
| `info.details.requisites` | `KVObject`[] | Список пар "ключ-значение" с данными банковских реквизитов для пополнения карты |
| `info.details.tariffLink` | `string` | Ссылка на описание тарифа |
| `info.details.tariffs` | `KVObject`[] | Список условий обслуживания карты |
| `info.name` | `string` | Название карты |
| `info.period` | `string` | Период обслуживания (по тарифу). Пример: `за год` |
| `info.price` | [`MoneyAmount`](QIWI.md#moneyamount) | Тариф карты:  `amount` - Стоимость обслуживания `currency` - Код валюты баланса (по ISO) |
| `qvx` | { `activated`: `string` ; `blockedDate`: `string` ; `cardAlias`: `string` ; `cardExpire`: `string` ; `cardExpireMonth`: `string` ; `cardExpireYear`: `string` ; `cardLimit`: ``null`` \| { `currencyCode`: [`Currency`](../enums/QIWI.Currency.md) ; `value`: `number`  } ; `cardType`: `CardType` ; `id`: `number` ; `maskedPan`: `string` ; `smsResended`: `string` ; `status`: [`CardStatus`](../enums/QIWI.CardStatus.md) ; `txnId`: `string` ; `unblockAvailable`: `boolean`  } | Общая информация о карте |
| `qvx.activated` | `string` | Дата активации карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.blockedDate` | `string` | Дата блокировки в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardAlias` | `string` | [Название карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#qvc-rename) в интерфейсе сайта [qiwi.com](https://qiwi.com/) |
| `qvx.cardExpire` | `string` | Срок действия карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardExpireMonth` | `string` | Месяц окончания действия карты. Например: `01` |
| `qvx.cardExpireYear` | `string` | Год окончания действия карты. Например: `2022` |
| `qvx.cardLimit` | ``null`` \| { `currencyCode`: [`Currency`](../enums/QIWI.Currency.md) ; `value`: `number`  } | - |
| `qvx.cardType` | `CardType` | Вид карты |
| `qvx.id` | `number` | ID карты |
| `qvx.maskedPan` | `string` | Маскированный номер карты (отображаются только последние 4 цифры). Пример: `****9078` |
| `qvx.smsResended` | `string` | Дата высылки СМС с реквизитами в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.status` | [`CardStatus`](../enums/QIWI.CardStatus.md) | Текущий статус карты |
| `qvx.txnId` | `string` | ID транзакции заказа карты |
| `qvx.unblockAvailable` | `boolean` | Признак возможности разблокировать карту |

#### Defined in

[src/apis/wallet/wallet.types.ts:975](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L975)

___

### CardStatusAny

Ƭ **CardStatusAny**: [`CardStatus`](../enums/QIWI.CardStatus.md) \| [`CardStatusPlain`](QIWI.md#cardstatusplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:952](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L952)

___

### CardStatusPlain

Ƭ **CardStatusPlain**: keyof typeof [`CardStatus`](../enums/QIWI.CardStatus.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:951](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L951)

___

### CardUnblockResponse

Ƭ **CardUnblockResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `confirmationId` | ``null`` |
| `nextConfirmationRequest` | ``null`` |
| `operationId` | ``null`` |
| `status` | [`CardActionStatusAny`](QIWI.md#cardactionstatusany) |

#### Defined in

[src/apis/wallet/wallet.types.ts:1094](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1094)

___

### ChequeFormatAny

Ƭ **ChequeFormatAny**: [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) \| [`ChequeFormatPlain`](QIWI.md#chequeformatplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L79)

___

### ChequeFormatPlain

Ƭ **ChequeFormatPlain**: keyof typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L78)

___

### CodeResponse

Ƭ **CodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Defined in

[src/apis/wallet/wallet.types.ts:909](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L909)

___

### Collection

Ƭ **Collection**<`T`\>: `Iterable`<`T`\> \| `ArrayLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/apis/shared/shared.types.ts:2](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.types.ts#L2)

___

### CurrencyAny

Ƭ **CurrencyAny**: [`Currency`](../enums/QIWI.Currency.md) \| [`CurrencyPlain`](QIWI.md#currencyplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L63)

___

### CurrencyPlain

Ƭ **CurrencyPlain**: keyof typeof [`Currency`](../enums/QIWI.Currency.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L62)

___

### DetectorApiOptions

Ƭ **DetectorApiOptions**: `ApiClassOptions`

#### Defined in

[src/apis/detector/detector.options.ts:3](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/detector/detector.options.ts#L3)

___

### FormUrlOptions

Ƭ **FormUrlOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string` | Формат совпадает с форматом параметра `fields.account` при оплате соответствующих провайдеров: для провайдера `99` - номер кошелька получателя; для провайдеров сотовой связи - номер мобильного телефона для пополнения (без префикса 8); для провайдеров перевода на карту - номер банковской карты получателя (без пробелов), для других провайдеров - идентификатор пользователя. Для провайдера `99999` указывается никнейм или номер кошелька получателя (задайте соответствующее значение параметра `extra['accountType']`). |
| `accountType?` | `string` | **Параметр используется только для ID=99999**. Значение определяет перевод на QIWI кошелек по никнейму или по номеру кошелька. Если вы не хотите, чтобы пользователь видел номер вашего кошелька на форме, используйте перевод по никнейму.  `phone` - для перевода по номеру  `nickname` - для перевода по никнейму. |
| `amount?` | `number` | Сумма платежа в рублях |
| `blocked?` | [`LockableField`](QIWI.md#lockablefield)[] | Признак неактивного поля формы. Пользователь не сможет менять значение данного поля. Каждый параметр задает соответствующее поле формы и нумеруется начиная с нуля (blocked[0], blocked[1]  и т.д.). Если не указан, пользователь сможет изменить все поля формы.  Допустимые значения:  `sum` - поле "сумма платежа",  `account` - поле "номер счета/телефона/карты",  `comment` - поле "комментарий".  Пример (неактивное поле суммы платежа): `blocked[0]=sum` |
| `comment?` | `string` | Комментарий. **Параметр используется только для `ID=99`** |
| `custom?` | `Record`<`string`, `unknown`\> | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:855](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L855)

___

### FreePayFields

Ƭ **FreePayFields**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Номер счета получателя |
| `city` | `string` | Город местонахождения получателя |
| `extra_to_bik` | `string` | БИК банка получателя. Почти всегда равен `to_bik` |
| `from_name` | `string` | Имя плательщика |
| `from_name_f` | `string` | Фамилия плательщика |
| `from_name_p` | `string` | Отчество плательщика |
| `goal` | `string` | Назначение платежа |
| `info` | ``"Коммерческие организации"`` | - |
| `is_commercial` | ``"1"`` | - |
| `name` | `string` | Наименование банка получателя. Например: `ПАО "Сбербанк"` |
| `nds` | ``"НДС не облагается"`` \| ``"В т.ч. НДС"`` | Признак уплаты НДС. Если вы оплачиваете квитанцию и в ней не указан НДС, то строка `НДС не облагается`. В ином случае, строка `В т.ч. НДС`. |
| `requestProtocol` | ``"qw1"`` | - |
| `toServiceId` | ``"1717"`` | - |
| `to_bik` | `string` | БИК банка получателя |
| `to_inn` | `string` | ИНН организации |
| `to_kpp` | `string` | КПП организации |
| `to_name` | `string` | Наименование организации. Например: `ООО "Технический Центр ДЕЛЬТА"` |
| `urgent` | ``"0"`` \| ``"1"`` | Признак срочного платежа (`0` - нет, `1` - да). Срочный платеж выполняется от 10 минут. Возможен по будням с 9:00 до 20:30 по московскому времени.  **Стоимость услуги — 25 рублей.** |

#### Defined in

[src/apis/wallet/wallet.types.ts:1126](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1126)

___

### GetAccountOffersResponse

Ƭ **GetAccountOffersResponse**: [`AccountOffer`](QIWI.md#accountoffer)[]

#### Defined in

[src/apis/wallet/wallet.types.ts:782](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L782)

___

### GetAccountsResponse

Ƭ **GetAccountsResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | [`Account`](QIWI.md#account)[] | Массив балансов |

#### Defined in

[src/apis/wallet/wallet.types.ts:769](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L769)

___

### GetPaymentHistoryParams

Ƭ **GetPaymentHistoryParams**: [`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase) \| [`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase) & [`GetPaymentHistoryParamsStartEnd`](QIWI.md#getpaymenthistoryparamsstartend) \| [`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase) & { `nextTxnDate`: `string` ; `nextTxnId`: `number`  }

#### Defined in

[src/apis/wallet/wallet.types.ts:489](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L489)

___

### GetPaymentHistoryParamsBase

Ƭ **GetPaymentHistoryParamsBase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation?` | [`TransactionTypeAny`](QIWI.md#transactiontypeany) | Тип операций в отчете, для отбора. Допустимые значения:  `ALL` - все операции,  `IN` - только пополнения,  `OUT` - только платежи,  `QIWI_CARD` - только платежи по картам QIWI (QVC, QVP).  По умолчанию `ALL` |
| `rows` | `number` | Число платежей в ответе, для разбивки отчета на страницы. Целое число от 1 до 50. Запрос возвращает указанное число платежей в обратном хронологическом порядке, начиная от текущей даты или даты в параметре `startDate` |
| `sources?` | [`PaymentHistorySourceAny`](QIWI.md#paymenthistorysourceany)[] | Список источников платежа, для фильтра. Каждый источник нумеруется, начиная с нуля (`sources[0]`, `sources[1]` и т.д.).  Допустимые значения:  `QW_RUB` - рублевый счет кошелька,  `QW_USD` - счет кошелька в долларах,  `QW_EUR` - счет кошелька в евро,  `CARD` - привязанные и непривязанные к кошельку банковские карты,  `MK` - счет мобильного оператора. Если не указан, учитываются все источники |

#### Defined in

[src/apis/wallet/wallet.types.ts:414](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L414)

___

### GetPaymentHistoryParamsStartEnd

Ƭ **GetPaymentHistoryParamsStartEnd**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `startDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `startDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |
| `startDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `endDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `endDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |

#### Defined in

[src/apis/wallet/wallet.types.ts:459](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L459)

___

### GetPaymentHistoryTotalParams

Ƭ **GetPaymentHistoryTotalParams**: `Omit`<[`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase), ``"rows"``\> & [`GetPaymentHistoryParamsStartEnd`](QIWI.md#getpaymenthistoryparamsstartend)

#### Defined in

[src/apis/wallet/wallet.types.ts:510](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L510)

___

### GetPaymentHistoryTotalResponse

Ƭ **GetPaymentHistoryTotalResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `incomingTotal` | [`MoneyAmount`](QIWI.md#moneyamount)[] | Данные о входящих платежах (пополнениях), отдельно по каждой валюте |
| `outgoingTotal` | [`MoneyAmount`](QIWI.md#moneyamount)[] | Данные об исходящих платежах, отдельно по каждой валюте |

#### Defined in

[src/apis/wallet/wallet.types.ts:516](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L516)

___

### GetTransactionsHistoryResponse

Ƭ **GetTransactionsHistoryResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`Transaction`](QIWI.md#transaction-1)[] | Список объектов [Transaction](https://developer.qiwi.com/ru/qiwi-wallet-personal/#txnid). Число транзакций в списке меньше или равно параметру rows из запроса |
| `nextTxnDate` | [`Transaction`](QIWI.md#transaction-1)[``"date"``] \| ``null`` | Дата/время следующей транзакции в полном списке, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `nextTxnId` | [`Transaction`](QIWI.md#transaction-1)[``"txnId"``] \| ``null`` | ID следующей транзакции в полном списке |

#### Defined in

[src/apis/wallet/wallet.types.ts:651](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L651)

___

### IdentificationBase

Ƭ **IdentificationBase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `birthDate` | `string` | Дата рождения пользователя (в формате "ГГГГ-ММ-ДД") |
| `firstName` | `string` | Имя пользователя |
| `inn` | `string` | ИНН пользователя |
| `lastName` | `string` | Фамилия пользователя |
| `middleName` | `string` | Отчество пользователя |
| `oms` | `string` | Номер полиса ОМС пользователя |
| `passport` | `string` | Серия и номер паспорта пользователя (только цифры) |
| `snils` | `string` | Номер СНИЛС пользователя |

#### Defined in

[src/apis/wallet/wallet.types.ts:328](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L328)

___

### IdentificationResponse

Ƭ **IdentificationResponse**: [`IdentificationBase`](QIWI.md#identificationbase) & { `id`: `number` ; `type`: [`SIMPLE`](../enums/QIWI.PersonIdentificationLevel.md#simple) \| [`VERIFIED`](../enums/QIWI.PersonIdentificationLevel.md#verified) \| [`FULL`](../enums/QIWI.PersonIdentificationLevel.md#full)  }

#### Defined in

[src/apis/wallet/wallet.types.ts:354](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L354)

___

### KeyPair

Ƭ **KeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `secretKey` | `string` |

#### Defined in

[src/apis/wallet/wallet.types.ts:1342](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1342)

___

### Limit

Ƭ **Limit**<`Cur`, `Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Cur` | extends keyof typeof [`Currency`](../enums/QIWI.Currency.md) = ``"RUB"`` |
| `Type` | extends [`LimitTypeAny`](QIWI.md#limittypeany) = [`LimitTypeAny`](QIWI.md#limittypeany) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Cur` | Валюта операций |
| `interval` | { `dateFrom`: `string` ; `dateTill`: `string`  } | Сведения о периоде действия лимита |
| `interval.dateFrom` | `string` | Начало периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` |
| `interval.dateTill` | `string` | Конец периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` |
| `max` | `number` | Значение лимита |
| `rest` | `number` | Остаток лимита, который можно потратить в данный период (период задается в параметре `interval`) |
| `spent` | `number` | Сумма, потраченная по данным операциям |
| `type` | `Type` | Тип операций, на которые действует данный лимит |

#### Defined in

[src/apis/wallet/wallet.types.ts:692](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L692)

___

### LimitTypeAny

Ƭ **LimitTypeAny**: [`LimitType`](../enums/QIWI.LimitType.md) \| [`LimitTypePlain`](QIWI.md#limittypeplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:690](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L690)

___

### LimitTypePlain

Ƭ **LimitTypePlain**: keyof typeof [`LimitType`](../enums/QIWI.LimitType.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:689](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L689)

___

### LimitsResponse

Ƭ **LimitsResponse**<`RequestedLimits`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RequestedLimits` | extends [`LimitTypeAny`](QIWI.md#limittypeany) = [`LimitTypeAny`](QIWI.md#limittypeany) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `limits` | { `KZ`: [`Limit`](QIWI.md#limit)<``"KZT"``, `RequestedLimits`\>[] ; `RU`: [`Limit`](QIWI.md#limit)<``"RUB"``, `RequestedLimits`\>[]  } | Описание лимитов |
| `limits.KZ` | [`Limit`](QIWI.md#limit)<``"KZT"``, `RequestedLimits`\>[] | - |
| `limits.RU` | [`Limit`](QIWI.md#limit)<``"RUB"``, `RequestedLimits`\>[] | Массив лимитов на операции |

#### Defined in

[src/apis/wallet/wallet.types.ts:724](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L724)

___

### LockableField

Ƭ **LockableField**: ``"account"`` \| ``"comment"`` \| ``"sum"``

#### Defined in

[src/apis/wallet/wallet.types.ts:853](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L853)

___

### Mapping

Ƭ **Mapping**<`K`, `V`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entries` | () => `PropertyCollection`<`K`, `V`\> |
| `get` | (`key`: `K`) => `undefined` \| `V` |
| `has` | (`key`: `K`) => `boolean` |

#### Defined in

[src/apis/shared/shared.types.ts:5](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.types.ts#L5)

___

### MoneyAmount

Ƭ **MoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма |
| `currency` | [`Currency`](../enums/QIWI.Currency.md) | Валюты |

#### Defined in

[src/apis/wallet/wallet.types.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L65)

___

### ObjectKey

Ƭ **ObjectKey**: `string` \| `number`

#### Defined in

[src/apis/shared/shared.types.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.types.ts#L10)

___

### ObjectMapping

Ƭ **ObjectMapping**<`K`, `V`\>: [`ReadonlyRecord`](QIWI.md#readonlyrecord)<`K`, `V`\> \| [`AnyMapping`](QIWI.md#anymapping)<`K`, `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`ObjectKey`](QIWI.md#objectkey) |
| `V` | `V` |

#### Defined in

[src/apis/shared/shared.types.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.types.ts#L15)

___

### P2pApiErrorResponse

Ƭ **P2pApiErrorResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dateTime` | `string` |
| `description` | `string` |
| `errorCode` | `string` |
| `serviceName` | `string` |
| `traceId` | `string` |
| `userMessage` | `string` |

#### Defined in

[src/apis/p2p/p2p.errors.ts:4](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.errors.ts#L4)

___

### PayParameters

Ƭ **PayParameters**: `Object`

**`see`** [Документация по платежам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Номер счёта в указанной платёжной системе (у `provider`'а) Если он не задан, то следует указывать номер телефона(киви) получателя.  Записывается в `fields.account`, можно поставить `""`, если переопределяете в `fields` |
| `amount` | `number` | Сумма платежа в указанной валюте. Если валюта не указана, то в рублях. Советую округлять до 2ух знаков после , |
| `comment?` | `string` | Комментарий к платежу |
| `currency?` | [`Currency`](../enums/QIWI.Currency.md) | Валюта платежа |
| `fields?` | `Partial`<[`FreePayFields`](QIWI.md#freepayfields)\> & `Record`<`string`, `string`\> | Дополнительные параметры платежа. Обычно необходимо для [платежа по свободным реквизитам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#freepay) |
| `provider?` | `number` \| [`Recipients`](../enums/QIWI.Recipients.md) | Ака ID в доках, номер провайдера(платёжной системы) у QIWI  **`see`** [Recipients](../enums/QIWI.Recipients.md)  **`default`** 99 |

#### Defined in

[src/apis/wallet/wallet.types.ts:1213](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1213)

___

### PayUrlPatchParameters

Ƭ **PayUrlPatchParameters**: `Partial`<{ `paySource`: [`BillPaySource`](../enums/QIWI.BillPaySource.md) ; `successUrl`: `string`  }\>

#### Defined in

[src/apis/p2p/p2p.types.ts:179](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/p2p/p2p.types.ts#L179)

___

### PaymentCommissionRequest

Ƭ **PaymentCommissionRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера) |
| `paymentMethod` | { `accountId`: ``"643"`` ; `type`: ``"Account"``  } | Объект, определяющий обработку платежа процессингом QIWI Wallet |
| `paymentMethod.accountId` | ``"643"`` | Идентификатор счета, только `643`. |
| `paymentMethod.type` | ``"Account"`` | Метод платежа, только `Account` |
| `purchaseTotals` | { `total`: { `amount`: `number` ; `currency`: ``"643"``  }  } | Объект с платежными реквизитами |
| `purchaseTotals.total` | { `amount`: `number` ; `currency`: ``"643"``  } | Объект, содержащий данные о сумме платежа |
| `purchaseTotals.total.amount` | `number` | Сумма (можно указать рубли и копейки, разделитель .). Положительное число, округленное до 2 знаков после десятичной точки. При большем числе знаков значение будет округлено до копеек в меньшую сторону. |
| `purchaseTotals.total.currency` | ``"643"`` | Валюта (только 643, рубли) |

#### Defined in

[src/apis/wallet/wallet.types.ts:784](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L784)

___

### PaymentHistorySourceAny

Ƭ **PaymentHistorySourceAny**: [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md) \| [`PaymentHistorySourcePlain`](QIWI.md#paymenthistorysourceplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:410](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L410)

___

### PaymentHistorySourcePlain

Ƭ **PaymentHistorySourcePlain**: keyof typeof [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:409](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L409)

___

### PaymentResponse

Ƭ **PaymentResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | Копия параметра `comment` из платежного запроса (возвращается, если присутствует в запросе) |
| `fields` | `Record`<`string`, `string`\> | Копия объекта `fields` из платежного запроса. **Номер карты (если был выполнен перевод на карту) возвращается в маскированном виде** |
| `id` | `string` | Копия параметра `id` из платежного запроса |
| `source` | ``"account_643"`` | Константа, `account_643` |
| `sum` | [`MoneyAmount`](QIWI.md#moneyamount) | Копия объекта `sum` из платежного запроса |
| `terms` | `string` | Идентификатор провайдера, на которого был отправлен платеж |
| `transaction` | { `id`: `string` ; `state`: { `code`: ``"Accepted"``  }  } | - |
| `transaction.id` | `string` | - |
| `transaction.state` | { `code`: ``"Accepted"``  } | - |
| `transaction.state.code` | ``"Accepted"`` | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:819](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L819)

___

### PersonIdentificationLevelAny

Ƭ **PersonIdentificationLevelAny**: [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) \| [`PersonIdentificationLevelPlain`](QIWI.md#personidentificationlevelplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L20)

___

### PersonIdentificationLevelPlain

Ƭ **PersonIdentificationLevelPlain**: keyof typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L19)

___

### PersonProfile

Ƭ **PersonProfile**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authInfo` | { `boundEmail`: `string` \| ``null`` ; `ip`: `string` ; `lastLoginDate`: `string` ; `mobilePinInfo`: { `lastMobilePinChange`: `string` ; `mobilePinUsed`: `boolean` ; `nextMobilePinChange`: `string`  } ; `passInfo`: { `lastPassChange`: `string` ; `nextPassChange`: `string` ; `passwordUsed`: `boolean`  } ; `personId`: `number` ; `pinInfo`: { `pinUsed`: `boolean`  } ; `registrationDate`: `string`  } | Текущие настройки авторизации. Объект может отсутствовать, в зависимости от признака `authInfoEnabled` в запросе. |
| `authInfo.boundEmail` | `string` \| ``null`` | E-mail, привязанный к кошельку. Если отсутствует, то `null` |
| `authInfo.ip` | `string` | IP-адрес последней пользовательской сессии |
| `authInfo.lastLoginDate` | `string` | Дата/время последней сессии в QIWI Кошельке |
| `authInfo.mobilePinInfo` | { `lastMobilePinChange`: `string` ; `mobilePinUsed`: `boolean` ; `nextMobilePinChange`: `string`  } | Данные о PIN-коде мобильного приложения QIWI Кошелька |
| `authInfo.mobilePinInfo.lastMobilePinChange` | `string` | Дата/время последнего изменения PIN-кода мобильного приложения QIWI Кошелька |
| `authInfo.mobilePinInfo.mobilePinUsed` | `boolean` | Логический признак использования PIN-кода (фактически означает, что мобильное приложение используется) |
| `authInfo.mobilePinInfo.nextMobilePinChange` | `string` | Дата/время следующего (планового) изменения PIN-кода мобильного приложения QIWI Кошелька |
| `authInfo.passInfo` | { `lastPassChange`: `string` ; `nextPassChange`: `string` ; `passwordUsed`: `boolean`  } | Данные об использовании пароля к сайту qiwi.com |
| `authInfo.passInfo.lastPassChange` | `string` | Дата/время последнего изменения пароля сайта qiwi.com |
| `authInfo.passInfo.nextPassChange` | `string` | Дата/время следующего (планового) изменения пароля сайта qiwi.com |
| `authInfo.passInfo.passwordUsed` | `boolean` | Логический признак использования пароля (фактически означает использование сайта qiwi.com) |
| `authInfo.personId` | `number` | Номер кошелька |
| `authInfo.pinInfo` | { `pinUsed`: `boolean`  } | Данные об использовании PIN-кода к приложению QIWI Кошелька на QIWI терминалах самообслуживания |
| `authInfo.pinInfo.pinUsed` | `boolean` | Логический признак использования PIN-кода для терминала (фактически означает факт использования приложения QIWI Кошелька на терминале) |
| `authInfo.registrationDate` | `string` | Дата/время регистрации QIWI Кошелька (через сайт/мобильное приложение, либо другим способом) |
| `contractInfo` | { `blocked`: `boolean` ; `contractId`: `number` ; `creationDate`: `string` ; `features`: `object`[] ; `identificationInfo`: { `bankAlias`: ``"QIWI"`` \| `string` ; `identificationLevel`: [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md)  }[]  } | Информация о кошельке. Объект может отсутствовать, в зависимости от признака `contractInfoEnabled` в запросе. |
| `contractInfo.blocked` | `boolean` | Логический признак блокировки кошелька |
| `contractInfo.contractId` | `number` | Номер кошелька |
| `contractInfo.creationDate` | `string` | Дата/время создания QIWI Кошелька (через сайт/мобильное приложение, либо при первом пополнении, либо другим способом) |
| `contractInfo.features` | `object`[] | Служебная информация |
| `contractInfo.identificationInfo` | { `bankAlias`: ``"QIWI"`` \| `string` ; `identificationLevel`: [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md)  }[] | Данные об [идентификации](https://qiwi.com/settings/identification#ru) пользователя. |
| `userInfo` | { `defaultPayCurrency`: [`Currency`](../enums/QIWI.Currency.md) ; `defaultPaySource`: `number` ; `email`: `string` ; `firstTxnId`: `string` ; `language`: `string` ; `operator`: `string` ; `phoneHash`: `string` ; `promoEnabled`: `string`  } | Прочие пользовательские данные. Объект может отсутствовать, в зависимости от признака `userInfoEnabled` в запросе. |
| `userInfo.defaultPayCurrency` | [`Currency`](../enums/QIWI.Currency.md) | Код валюты баланса кошелька по умолчанию (number-3 ISO-4217) |
| `userInfo.defaultPaySource` | `number` | Служебная информация |
| `userInfo.email` | `string` | E-mail пользователя |
| `userInfo.firstTxnId` | `string` | Номер первой транзакции после регистрации |
| `userInfo.language` | `string` | Служебная информация |
| `userInfo.operator` | `string` | Название мобильного оператора номера пользователя |
| `userInfo.phoneHash` | `string` | Служебная информация |
| `userInfo.promoEnabled` | `string` | Служебная информация |

#### Defined in

[src/apis/wallet/wallet.types.ts:178](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L178)

___

### PrettyTokenResponse

Ƭ **PrettyTokenResponse**<`C`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `C` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `client` | `C` |
| `expiry` | `number` |
| `token` | `string` |

#### Defined in

[src/apis/wallet/wallet.types.ts:927](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L927)

___

### ReadonlyRecord

Ƭ **ReadonlyRecord**<`K`, `V`\>: `Readonly`<`Record`<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`ObjectKey`](QIWI.md#objectkey) |
| `V` | `V` |

#### Defined in

[src/apis/shared/shared.types.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.types.ts#L13)

___

### Restrictions

Ƭ **Restrictions**: { `restrictionCode`: `string` ; `restrictionDescription`: `string`  }[]

#### Defined in

[src/apis/wallet/wallet.types.ts:376](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L376)

___

### StringOrNumber

Ƭ **StringOrNumber**: `string` \| `number`

#### Defined in

[src/apis/wallet/wallet.types.ts:1340](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1340)

___

### TimeSpanKeys

Ƭ **TimeSpanKeys**: keyof [`TimeSpanMapping`](QIWI.md#timespanmapping-1)

#### Defined in

[src/apis/shared/shared.ts:242](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L242)

___

### TimeSpanMapping

Ƭ **TimeSpanMapping**: typeof [`TimeSpanMapping`](QIWI.md#timespanmapping-1)

#### Defined in

[src/apis/shared/shared.ts:241](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L241)

___

### TokenResponse

Ƭ **TokenResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `access_token` | `string` | Токен с расширенным сроком действия |
| `expires_in` | `string` | Кол-во секунд в формате строки: `"316224000"` |
| `refresh_token` | `string` | Не используется |
| `token_type` | ``"Bearer"`` | Тип токена |

#### Defined in

[src/apis/wallet/wallet.types.ts:913](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L913)

___

### Transaction

Ƭ **Transaction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Для платежей - номер счета получателя. Для пополнений - номер отправителя, терминала или название агента пополнения кошелька |
| `comment` | `string` | Комментарий к платежу |
| `commission` | [`MoneyAmount`](QIWI.md#moneyamount) | Данные о комиссии платежа |
| `currencyRate` | `number` | Курс конвертации (если применяется в транзакции) |
| `date` | `string` | Для запросов истории платежей - Дата/время платежа, во временной зоне запроса (см. параметр `startDate`). Формат даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`  Для запросов данных о транзакции - Дата/время платежа, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `error` | `string` \| ``null`` | Описание ошибки |
| `errorCode` | `number` | [Код ошибки платежа](https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode) |
| `extras` | `object` | Служебная информация |
| `features` | { `bankDocumentAvailable`: `boolean` ; `chequeReady`: `boolean` ; `favoritePaymentEnabled`: `boolean` ; `regularPaymentEnabled`: `boolean` ; `repeatPaymentEnabled`: `boolean`  } | Поидее содержимое этого поля должно быть напрямую в Transaction. Но QIWI возвращает именно так |
| `features.bankDocumentAvailable` | `boolean` | Специальное поле |
| `features.chequeReady` | `boolean` | Специальное поле |
| `features.favoritePaymentEnabled` | `boolean` | Специальное поле |
| `features.regularPaymentEnabled` | `boolean` | Специальное поле |
| `features.repeatPaymentEnabled` | `boolean` | Специальное поле |
| `personId` | `number` | Номер кошелька |
| `provider` | { `descriptions`: `string` \| ``null`` ; `id`: `number` ; `keys`: `string` \| ``null`` ; `logoUrl`: `string` \| ``null`` ; `longName`: `string` ; `shortName`: `string` ; `siteUrl`: `string` \| ``null``  } | Данные о провайдере. |
| `provider.descriptions` | `string` \| ``null`` | описание провайдера (HTML) |
| `provider.id` | `number` | ID провайдера в QIWI Wallet |
| `provider.keys` | `string` \| ``null`` | список ключевых слов |
| `provider.logoUrl` | `string` \| ``null`` | ссылка на логотип провайдера |
| `provider.longName` | `string` | развернутое наименование провайдера |
| `provider.shortName` | `string` | краткое наименование провайдера |
| `provider.siteUrl` | `string` \| ``null`` | сайт провайдера |
| `source` | `object` | Служебная информация |
| `status` | [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) | Статус платежа. Возможные значения:  `WAITING` - платеж проводится  `SUCCESS` - успешный платеж  `ERROR` - ошибка платежа. |
| `statusText` | `string` | Текстовое описание статуса платежа |
| `sum` | [`MoneyAmount`](QIWI.md#moneyamount) | Данные о сумме платежа или пополнения. |
| `total` | [`MoneyAmount`](QIWI.md#moneyamount) | Данные о фактической сумме платежа или пополнения. |
| `trmTxnId` | `string` | Клиентский ID транзакции |
| `txnId` | `number` | ID транзакции в сервисе QIWI Кошелек |
| `type` | [`IN`](../enums/QIWI.TransactionType.md#in) \| [`OUT`](../enums/QIWI.TransactionType.md#out) \| [`QIWI_CARD`](../enums/QIWI.TransactionType.md#qiwi_card) | Тип платежа. Возможные значения:  `IN` - пополнение,  `OUT` - платеж,  `QIWI_CARD` - платеж с карт QIWI (QVC, QVP). |

#### Defined in

[src/apis/wallet/wallet.types.ts:527](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L527)

___

### TransactionStatusAny

Ƭ **TransactionStatusAny**: [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) \| [`TransactionStatusPlain`](QIWI.md#transactionstatusplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L49)

___

### TransactionStatusPlain

Ƭ **TransactionStatusPlain**: keyof typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L48)

___

### TransactionTypeAny

Ƭ **TransactionTypeAny**: [`TransactionType`](../enums/QIWI.TransactionType.md) \| [`TransactionTypePlain`](QIWI.md#transactiontypeplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L36)

___

### TransactionTypePlain

Ƭ **TransactionTypePlain**: keyof typeof [`TransactionType`](../enums/QIWI.TransactionType.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L35)

___

### WalletApiErrorResponse

Ƭ **WalletApiErrorResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dateTime` | `string` |
| `description` | `string` |
| `errorCode` | `string` |
| `serviceName` | `string` |
| `traceId` | `string` |
| `userMessage` | `string` |

#### Defined in

[src/apis/wallet/wallet.errors.ts:4](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.errors.ts#L4)

___

### WalletApiShortErrorResponse

Ƭ **WalletApiShortErrorResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Defined in

[src/apis/wallet/wallet.errors.ts:34](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.errors.ts#L34)

___

### WebHookInfo

Ƭ **WebHookInfo**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID действующего обработчика вебхуков |
| `hookParameters` | { `url`: `string`  } | Набор параметров обработчика (только URL) |
| `hookParameters.url` | `string` | - |
| `hookType` | ``"WEB"`` | Тип вебхука (только WEB) |
| `txnType` | [`TransactionType`](../enums/QIWI.TransactionType.md) | Тип транзакций, по которым отсылаются уведомления (IN - входящие, OUT - исходящие, BOTH - все) |

#### Defined in

[src/apis/wallet/wallet.types.ts:1255](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1255)

___

### WebhookTransaction

Ƭ **WebhookTransaction**: `Object`

**`see`** [Документация по вебхукам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_format)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | Хэш цифровой подписи уведомления |
| `hookId` | `string` | Уникальный id хука |
| `messageId` | `string` | Уникальный id уведомления |
| `payment` | { `account`: `string` ; `comment`: `string` ; `commission`: [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` ; `date`: `string` ; `errorCode`: `number` ; `personId`: `number` ; `provider`: `number` \| [`Recipients`](../enums/QIWI.Recipients.md) ; `signFields`: `string` ; `status`: [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) ; `sum`: [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` ; `total`: [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` ; `txnId`: `number` ; `type`: [`IN`](../enums/QIWI.TransactionType.md#in) \| [`OUT`](../enums/QIWI.TransactionType.md#out)  } | Данные платежа |
| `payment.account` | `string` | - |
| `payment.comment` | `string` | - |
| `payment.commission` | [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` | Данные о комиссии для платежа или пополнения |
| `payment.date` | `string` | Для запросов истории платежей - Дата/время платежа, во временной зоне запроса (см. параметр `startDate`). Формат даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`  Для запросов данных о транзакции - Дата/время платежа, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `payment.errorCode` | `number` | [Код ошибки платежа](https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode) |
| `payment.personId` | `number` | Номер кошелька |
| `payment.provider` | `number` \| [`Recipients`](../enums/QIWI.Recipients.md) | ID провайдера QIWI Wallet |
| `payment.signFields` | `string` | Список полей объекта payment (через ,), которые хешируются алгоритмом HmacSHA256 для проверки уведомления (см. параметр `hash`) |
| `payment.status` | [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) | Статус платежа |
| `payment.sum` | [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` | Данные о сумме платежа или пополнения |
| `payment.total` | [`MoneyAmount`](QIWI.md#moneyamount) \| ``null`` | Данные об итоговой сумме платежа или пополнения |
| `payment.txnId` | `number` | ID транзакции в процессинге QIWI Wallet |
| `payment.type` | [`IN`](../enums/QIWI.TransactionType.md#in) \| [`OUT`](../enums/QIWI.TransactionType.md#out) | Тип платежа. Возможные значения:  `IN` - пополнение,  `OUT` - платеж. |
| `test` | `boolean` | Признак тестового сообщения |
| `version` | `string` | Версия API |

#### Defined in

[src/apis/wallet/wallet.types.ts:1269](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.types.ts#L1269)

## Variables

### TimeSpanMapping

• `Const` **TimeSpanMapping**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `day` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `h` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `hour` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `hr` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `m` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `millisecond` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `min` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `minute` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `mn` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `mon` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `month` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `ms` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `msec` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `s` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `sec` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `second` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `w` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `week` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `y` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `year` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |
| `yr` | [`TimeSpan`](../enums/QIWI.TimeSpan.md) |

#### Defined in

[src/apis/shared/shared.ts:217](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L217)

## Functions

### convertCollection

▸ **convertCollection**<`T`\>(`collection`): `T`[]

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | [`Collection`](QIWI.md#collection)<`T`\> |

#### Returns

`T`[]

#### Defined in

[src/apis/shared/shared.ts:101](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L101)

___

### convertMapping

▸ **convertMapping**<`K`, `V`\>(`mapping`): `ReadonlyMap`<`K`, `V`\>

**`export`**

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | [`AnyMapping`](QIWI.md#anymapping)<`K`, `V`\> |

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Defined in

[src/apis/shared/shared.ts:115](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L115)

___

### convertObjectMapping

▸ **convertObjectMapping**<`K`, `V`\>(`mapping`): [`ReadonlyRecord`](QIWI.md#readonlyrecord)<`K`, `V`\>

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`ObjectKey`](QIWI.md#objectkey) |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | [`ObjectMapping`](QIWI.md#objectmapping)<`K`, `V`\> |

#### Returns

[`ReadonlyRecord`](QIWI.md#readonlyrecord)<`K`, `V`\>

{ReadonlyRecord<K, V>}

#### Defined in

[src/apis/shared/shared.ts:183](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L183)

___

### formatDate

▸ **formatDate**(`dateTime`): `string`

Форматирует дату в понятную для QIWI строку:

`ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateTime` | `string` \| `number` \| `Date` | Аргумент для конструктора |

#### Returns

`string`

#### Defined in

[src/apis/shared/shared.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L31)

___

### formatOffsetDate

▸ **formatOffsetDate**(`amount`, `unit?`, `currentDate?`): `string`

**`export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `undefined` |
| `unit` | `number` \| [`TimeSpan`](../enums/QIWI.TimeSpan.md) \| ``"ms"`` \| ``"msec"`` \| ``"millisecond"`` \| ``"s"`` \| ``"sec"`` \| ``"second"`` \| ``"m"`` \| ``"min"`` \| ``"minute"`` \| ``"h"`` \| ``"hr"`` \| ``"hour"`` \| ``"d"`` \| ``"day"`` \| ``"w"`` \| ``"week"`` \| ``"mn"`` \| ``"mon"`` \| ``"month"`` \| ``"y"`` \| ``"yr"`` \| ``"year"`` | `TimeSpan.Millisecond` |
| `currentDate` | `Date` | `undefined` |

#### Returns

`string`

{string}

#### Defined in

[src/apis/shared/shared.ts:252](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L252)

___

### formatQuerystring

▸ **formatQuerystring**(`object`): `string`

Создаёт строку запроса, в формате, который понимает QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`AnyResponse`](QIWI.md#anyresponse) | Объект для преобразования |

#### Returns

`string`

#### Defined in

[src/apis/shared/shared.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L75)

___

### generateUUID

▸ **generateUUID**(): `string`

Генерирует UUID

**`export`**

#### Returns

`string`

#### Defined in

[src/apis/shared/shared.ts:89](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L89)

___

### isCollection

▸ **isCollection**<`T`\>(`object`): object is Collection<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Collection<T\>

{object is Collection<T>}

#### Defined in

[src/apis/shared/shared.ts:147](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L147)

___

### isMapping

▸ **isMapping**<`K`, `V`\>(`object`): object is Mapping<K, V\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Mapping<K, V\>

{object is Mapping<K, V>}

#### Defined in

[src/apis/shared/shared.ts:131](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L131)

___

### parseQuerystring

▸ **parseQuerystring**(`querystring`): [`AnyResponse`](QIWI.md#anyresponse)

Разбирает строку запроса, в том формате, который передаёт QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `querystring` | `string` | Строка запроса |

#### Returns

[`AnyResponse`](QIWI.md#anyresponse)

#### Defined in

[src/apis/shared/shared.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/shared/shared.ts#L61)
