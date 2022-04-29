[qiwi-sdk](README.md) / Exports

# qiwi-sdk

## Table of contents

### References

- [Detector](modules.md#detector)
- [DetectorApiOptions](modules.md#detectorapioptions)
- [DetectorCompat](modules.md#detectorcompat)
- [DetectorError](modules.md#detectorerror)
- [NodeQiwi](modules.md#nodeqiwi)
- [P2P](modules.md#p2p)
- [P2PNotificationError](modules.md#p2pnotificationerror)
- [P2PPaymentError](modules.md#p2ppaymenterror)
- [P2p](modules.md#p2p-1)
- [P2pApiError](modules.md#p2papierror)
- [P2pApiErrorResponse](modules.md#p2papierrorresponse)
- [P2pApiOptions](modules.md#p2papioptions)
- [P2pAuthorizationError](modules.md#p2pauthorizationerror)
- [P2pBillNotificationError](modules.md#p2pbillnotificationerror)
- [P2pCompat](modules.md#p2pcompat)
- [Personal](modules.md#personal)
- [PersonalApiError](modules.md#personalapierror)
- [QiwiBillPaymentsAPI](modules.md#qiwibillpaymentsapi)
- [Wallet](modules.md#wallet)
- [WalletApiError](modules.md#walletapierror)
- [WalletApiErrorResponse](modules.md#walletapierrorresponse)
- [WalletApiOptions](modules.md#walletapioptions)
- [WalletApiShortError](modules.md#walletapishorterror)
- [WalletApiShortErrorResponse](modules.md#walletapishorterrorresponse)
- [WalletAuthorizationError](modules.md#walletauthorizationerror)
- [WalletCompat](modules.md#walletcompat)
- [\_P2pCompat](modules.md#_p2pcompat)
- [\_P2pCompatBillPayments](modules.md#_p2pcompatbillpayments)
- [\_WalletCompat](modules.md#_walletcompat)
- [\_WalletCompatNodeQiwi](modules.md#_walletcompatnodeqiwi)
- [default](modules.md#default)

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)
- [QIWI](modules/QIWI.md)

### Enumerations

- [BillCurrency](enums/BillCurrency.md)
- [BillPaySource](enums/BillPaySource.md)
- [BillRefundStatus](enums/BillRefundStatus.md)
- [BillStatus](enums/BillStatus.md)
- [CardActionStatus](enums/CardActionStatus.md)
- [CardStatus](enums/CardStatus.md)
- [ChequeFormat](enums/ChequeFormat.md)
- [CommissionPayer](enums/CommissionPayer.md)
- [Currency](enums/Currency.md)
- [LimitType](enums/LimitType.md)
- [PaymentHistorySource](enums/PaymentHistorySource.md)
- [PersonIdentificationLevel](enums/PersonIdentificationLevel.md)
- [QuickPayRecipients](enums/QuickPayRecipients.md)
- [Recipients](enums/Recipients.md)
- [TimeSpan](enums/TimeSpan.md)
- [TransactionStatus](enums/TransactionStatus.md)
- [TransactionType](enums/TransactionType.md)

### Interfaces

- [Bill](interfaces/Bill.md)
- [BillProvider](interfaces/BillProvider.md)

### Type aliases

- [Account](modules.md#account)
- [AccountOffer](modules.md#accountoffer)
- [AnyResponse](modules.md#anyresponse)
- [BillCreateParameters](modules.md#billcreateparameters)
- [BillCreationRequest](modules.md#billcreationrequest)
- [BillCurrencyAny](modules.md#billcurrencyany)
- [BillCurrencyPlain](modules.md#billcurrencyplain)
- [BillError](modules.md#billerror)
- [BillFormParameters](modules.md#billformparameters)
- [BillMoneyAmount](modules.md#billmoneyamount)
- [BillPayResponse](modules.md#billpayresponse)
- [BillRefundStatusAny](modules.md#billrefundstatusany)
- [BillRefundStatusData](modules.md#billrefundstatusdata)
- [BillRefundStatusPlain](modules.md#billrefundstatusplain)
- [BillStatusAny](modules.md#billstatusany)
- [BillStatusBody](modules.md#billstatusbody)
- [BillStatusData](modules.md#billstatusdata)
- [BillStatusPlain](modules.md#billstatusplain)
- [BillsGetParameters](modules.md#billsgetparameters)
- [CardActionStatusAny](modules.md#cardactionstatusany)
- [CardActionStatusPlain](modules.md#cardactionstatusplain)
- [CardRenameResponse](modules.md#cardrenameresponse)
- [CardRequisitesResponse](modules.md#cardrequisitesresponse)
- [CardResponse](modules.md#cardresponse)
- [CardStatusAny](modules.md#cardstatusany)
- [CardStatusPlain](modules.md#cardstatusplain)
- [CardUnblockResponse](modules.md#cardunblockresponse)
- [ChequeFormatAny](modules.md#chequeformatany)
- [ChequeFormatPlain](modules.md#chequeformatplain)
- [CodeResponse](modules.md#coderesponse)
- [Collection](modules.md#collection)
- [CommissionPayerAny](modules.md#commissionpayerany)
- [CommissionPayerPlain](modules.md#commissionpayerplain)
- [CurrencyAny](modules.md#currencyany)
- [CurrencyPlain](modules.md#currencyplain)
- [FormUrlOptions](modules.md#formurloptions)
- [FreePayFields](modules.md#freepayfields)
- [GetAccountOffersResponse](modules.md#getaccountoffersresponse)
- [GetAccountsResponse](modules.md#getaccountsresponse)
- [GetPaymentHistoryParams](modules.md#getpaymenthistoryparams)
- [GetPaymentHistoryParamsBase](modules.md#getpaymenthistoryparamsbase)
- [GetPaymentHistoryParamsStartEnd](modules.md#getpaymenthistoryparamsstartend)
- [GetPaymentHistoryTotalParams](modules.md#getpaymenthistorytotalparams)
- [GetPaymentHistoryTotalResponse](modules.md#getpaymenthistorytotalresponse)
- [GetTransactionsHistoryResponse](modules.md#gettransactionshistoryresponse)
- [IdentificationBase](modules.md#identificationbase)
- [IdentificationResponse](modules.md#identificationresponse)
- [KeyPair](modules.md#keypair)
- [Limit](modules.md#limit)
- [LimitTypeAny](modules.md#limittypeany)
- [LimitTypePlain](modules.md#limittypeplain)
- [LimitsResponse](modules.md#limitsresponse)
- [LockableField](modules.md#lockablefield)
- [MoneyAmount](modules.md#moneyamount)
- [ObjectKey](modules.md#objectkey)
- [PayParameters](modules.md#payparameters)
- [PayUrlPatchParameters](modules.md#payurlpatchparameters)
- [PaymentCommissionRequest](modules.md#paymentcommissionrequest)
- [PaymentHistorySourceAny](modules.md#paymenthistorysourceany)
- [PaymentHistorySourcePlain](modules.md#paymenthistorysourceplain)
- [PaymentResponse](modules.md#paymentresponse)
- [PersonIdentificationLevelAny](modules.md#personidentificationlevelany)
- [PersonIdentificationLevelPlain](modules.md#personidentificationlevelplain)
- [PersonProfile](modules.md#personprofile)
- [PrettyTokenResponse](modules.md#prettytokenresponse)
- [ProviderInfo](modules.md#providerinfo)
- [QuickPayParameters](modules.md#quickpayparameters)
- [QuickPayRecipientsAny](modules.md#quickpayrecipientsany)
- [QuickPayRecipientsPlain](modules.md#quickpayrecipientsplain)
- [ReadonlyRecord](modules.md#readonlyrecord)
- [RefundCreationRequest](modules.md#refundcreationrequest)
- [Restrictions](modules.md#restrictions)
- [StringOrNumber](modules.md#stringornumber)
- [TimeSpanKeys](modules.md#timespankeys)
- [TimeSpanMapping](modules.md#timespanmapping)
- [TokenResponse](modules.md#tokenresponse)
- [Transaction](modules.md#transaction)
- [TransactionStatusAny](modules.md#transactionstatusany)
- [TransactionStatusPlain](modules.md#transactionstatusplain)
- [TransactionTypeAny](modules.md#transactiontypeany)
- [TransactionTypePlain](modules.md#transactiontypeplain)
- [WebHookInfo](modules.md#webhookinfo)
- [WebhookTransaction](modules.md#webhooktransaction)

### Variables

- [TimeSpanMapping](modules.md#timespanmapping-1)

### Functions

- [collect](modules.md#collect)
- [formatDate](modules.md#formatdate)
- [formatOffsetDate](modules.md#formatoffsetdate)
- [formatQuerystring](modules.md#formatquerystring)
- [generateUUID](modules.md#generateuuid)
- [parseQuerystring](modules.md#parsequerystring)

## References

### Detector

Re-exports [Detector](classes/QIWI.Detector.md)

___

### DetectorApiOptions

Re-exports [DetectorApiOptions](modules/QIWI.md#detectorapioptions)

___

### DetectorCompat

Re-exports [DetectorCompat](classes/QIWI.DetectorCompat.md)

___

### DetectorError

Re-exports [DetectorError](classes/QIWI.DetectorError.md)

___

### NodeQiwi

Renames and re-exports [_WalletCompatNodeQiwi](classes/QIWI._WalletCompatNodeQiwi.md)

___

### P2P

Renames and re-exports [_P2pCompat](classes/QIWI._P2pCompat.md)

___

### P2PNotificationError

Renames and re-exports [P2pBillNotificationError](classes/QIWI.P2pBillNotificationError.md)

___

### P2PPaymentError

Renames and re-exports [P2pApiError](classes/QIWI.P2pApiError.md)

___

### P2p

Re-exports [P2p](classes/QIWI.P2p.md)

___

### P2pApiError

Re-exports [P2pApiError](classes/QIWI.P2pApiError.md)

___

### P2pApiErrorResponse

Re-exports [P2pApiErrorResponse](modules/QIWI.md#p2papierrorresponse)

___

### P2pApiOptions

Re-exports [P2pApiOptions](interfaces/QIWI.P2pApiOptions.md)

___

### P2pAuthorizationError

Re-exports [P2pAuthorizationError](classes/QIWI.P2pAuthorizationError.md)

___

### P2pBillNotificationError

Re-exports [P2pBillNotificationError](classes/QIWI.P2pBillNotificationError.md)

___

### P2pCompat

Renames and re-exports [_P2pCompat](classes/QIWI._P2pCompat.md)

___

### Personal

Renames and re-exports [_WalletCompat](classes/QIWI._WalletCompat.md)

___

### PersonalApiError

Renames and re-exports [WalletApiError](classes/QIWI.WalletApiError.md)

___

### QiwiBillPaymentsAPI

Renames and re-exports [_P2pCompatBillPayments](classes/QIWI._P2pCompatBillPayments.md)

___

### Wallet

Re-exports [Wallet](classes/QIWI.Wallet.md)

___

### WalletApiError

Re-exports [WalletApiError](classes/QIWI.WalletApiError.md)

___

### WalletApiErrorResponse

Re-exports [WalletApiErrorResponse](modules/QIWI.md#walletapierrorresponse)

___

### WalletApiOptions

Re-exports [WalletApiOptions](interfaces/QIWI.WalletApiOptions.md)

___

### WalletApiShortError

Re-exports [WalletApiShortError](classes/QIWI.WalletApiShortError.md)

___

### WalletApiShortErrorResponse

Re-exports [WalletApiShortErrorResponse](modules/QIWI.md#walletapishorterrorresponse)

___

### WalletAuthorizationError

Re-exports [WalletAuthorizationError](classes/QIWI.WalletAuthorizationError.md)

___

### WalletCompat

Renames and re-exports [_WalletCompat](classes/QIWI._WalletCompat.md)

___

### \_P2pCompat

Re-exports [_P2pCompat](classes/QIWI._P2pCompat.md)

___

### \_P2pCompatBillPayments

Re-exports [_P2pCompatBillPayments](classes/QIWI._P2pCompatBillPayments.md)

___

### \_WalletCompat

Re-exports [_WalletCompat](classes/QIWI._WalletCompat.md)

___

### \_WalletCompatNodeQiwi

Re-exports [_WalletCompatNodeQiwi](classes/QIWI._WalletCompatNodeQiwi.md)

___

### default

Renames and re-exports [QIWI](modules/QIWI.md)

## Type aliases

### Account

Ƭ **Account**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним пользовательского баланса |
| `balance` | [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` | - |
| `bankAlias` | `string` | Псевдоним банка |
| `currency` | [`Currency`](enums/QIWI.Currency.md) | Код валюты баланса (number-3 ISO-4217) |
| `defaultAccount?` | `boolean` | - |
| `fsAlias` | `string` | Псевдоним банковского баланса |
| `hasBalance` | `boolean` | Логический признак реального баланса в системе QIWI Кошелек (не привязанная карта, не счет мобильного телефона и т.д.) |
| `title` | `string` | Название соответствующего счета кошелька |
| `type` | { `id`: `string` ; `title`: `string`  } | Сведения о счете |
| `type.id` | `string` | Описание счета |
| `type.title` | `string` | Описание счета |

#### Defined in

[src/apis/wallet/wallet.types.ts:733](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L733)

___

### AccountOffer

Ƭ **AccountOffer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета |
| `currency` | [`Currency`](enums/QIWI.Currency.md) | ID валюты счета |

#### Defined in

[src/apis/wallet/wallet.types.ts:774](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L774)

___

### AnyResponse

Ƭ **AnyResponse**: [`Record`](modules/internal_.md#record)<`string`, `any`\>

#### Defined in

[src/apis/shared/types.ts:1](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/types.ts#L1)

___

### BillCreateParameters

Ƭ **BillCreateParameters**: [`BillCreationRequest`](modules/QIWI.md#billcreationrequest) & [`PayUrlPatchParameters`](modules/QIWI.md#payurlpatchparameters) & { `billId?`: `string`  }

#### Defined in

[src/apis/p2p/p2p.types.ts:190](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L190)

___

### BillCreationRequest

Ƭ **BillCreationRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BillMoneyAmount`](modules/QIWI.md#billmoneyamount) | Данные о сумме счета |
| `comment?` | `string` | Комментарий к счету  **`maxlength`** 255 |
| `customFields?` | [`Record`](modules/internal_.md#record)<`string`, `string`\> | Дополнительные данные счета. Так же при помощи этого параметра вы можете настроить [персонализацию](https://developer.qiwi.com/ru/p2p-payments/#custom) вашей формы, передав переменную `themeCode` |
| `customer?` | { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | Идентификаторы пользователя |
| `customer.account?` | `string` | Идентификатор пользователя в вашей системе |
| `customer.email?` | `string` | E-mail пользователя |
| `customer.phone?` | `string` | Номер телефона пользователя (в международном формате) |
| `expirationDateTime?` | `string` \| `Date` | Дата, до которой счет будет доступен для оплаты. Если перевод не будет совершен до этой даты, ему присваивается финальный статус `EXPIRED` и последующий перевод станет невозможен.  **`example`** "2020-07-10T09:02:00+03:00" |

#### Defined in

[src/apis/p2p/p2p.types.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L40)

___

### BillCurrencyAny

Ƭ **BillCurrencyAny**: [`BillCurrency`](enums/QIWI.BillCurrency.md) \| [`BillCurrencyPlain`](modules/QIWI.md#billcurrencyplain)

#### Defined in

[src/apis/p2p/p2p.types.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L22)

___

### BillCurrencyPlain

Ƭ **BillCurrencyPlain**: keyof typeof [`BillCurrency`](enums/QIWI.BillCurrency.md)

#### Defined in

[src/apis/p2p/p2p.types.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L21)

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

[src/apis/p2p/p2p.types.ts:132](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L132)

___

### BillFormParameters

Ƭ **BillFormParameters**: { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`Record`](modules/internal_.md#record)<`string`, `string`\> ; `lifetime?`: `string` ; `successUrl?`: `string`  } & [`BillCreationRequest`](modules/QIWI.md#billcreationrequest)[``"customer"``]

#### Defined in

[src/apis/p2p/p2p.types.ts:147](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L147)

___

### BillMoneyAmount

Ƭ **BillMoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | [`BillCurrencyAny`](modules/QIWI.md#billcurrencyany) | Валюта суммы счета. Возможные значения: `RUB` - рубли `KZT` - тенге |
| `value` | `number` \| `string` | Сумма, на которую выставляется счет, округленная в меньшую сторону до 2 десятичных знаков |

#### Defined in

[src/apis/p2p/p2p.types.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L24)

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

[src/apis/wallet/wallet.types.ts:1481](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1481)

___

### BillRefundStatusAny

Ƭ **BillRefundStatusAny**: [`BillRefundStatus`](enums/QIWI.BillRefundStatus.md) \| [`BillRefundStatusPlain`](modules/QIWI.md#billrefundstatusplain)

#### Defined in

[src/apis/p2p/p2p.types.ts:206](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L206)

___

### BillRefundStatusData

Ƭ **BillRefundStatusData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`BillMoneyAmount`](modules/QIWI.md#billmoneyamount) |
| `datetime` | `string` |
| `refundId` | `string` |
| `status` | [`BillRefundStatusAny`](modules/QIWI.md#billrefundstatusany) |

#### Defined in

[src/apis/p2p/p2p.types.ts:208](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L208)

___

### BillRefundStatusPlain

Ƭ **BillRefundStatusPlain**: keyof typeof [`BillRefundStatus`](enums/QIWI.BillRefundStatus.md)

#### Defined in

[src/apis/p2p/p2p.types.ts:205](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L205)

___

### BillStatusAny

Ƭ **BillStatusAny**: [`BillStatus`](enums/QIWI.BillStatus.md) \| [`BillStatusPlain`](modules/QIWI.md#billstatusplain)

#### Defined in

[src/apis/p2p/p2p.types.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L14)

___

### BillStatusBody

Ƭ **BillStatusBody**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bill` | [`BillStatusData`](modules/QIWI.md#billstatusdata) |

#### Defined in

[src/apis/p2p/p2p.types.ts:128](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L128)

___

### BillStatusData

Ƭ **BillStatusData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BillMoneyAmount`](modules/QIWI.md#billmoneyamount) | Данные о сумме счета |
| `billId` | `string` | Уникальный идентификатор выставляемого счета в вашей системе |
| `comment?` | `string` | Комментарий к счету |
| `creationDateTime` | `string` | Системная дата создания счета. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс` |
| `customFields` | [`Record`](modules/internal_.md#record)<`string`, `string`\> | Объект строковых дополнительных параметров, переданных вами |
| `customer?` | [`BillCreationRequest`](modules/QIWI.md#billcreationrequest)[``"customer"``] | Идентификаторы пользователя |
| `expirationDateTime` | `string` | Срок действия созданной формы для перевода. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс+\-чч:мм` |
| `payUrl` | `string` | [Ссылка для переадресации](https://developer.qiwi.com/ru/p2p-payments/#option) пользователя на созданную форму |
| `siteId` | `string` | Ваш идентификатор в системе p2p.qiwi |
| `status` | { `changedDateTime`: `string` ; `value`: [`BillStatusAny`](modules/QIWI.md#billstatusany)  } | - |
| `status.changedDateTime` | `string` | Дата обновления статуса |
| `status.value` | [`BillStatusAny`](modules/QIWI.md#billstatusany) | Текущий статус счета |

#### Defined in

[src/apis/p2p/p2p.types.ts:83](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L83)

___

### BillStatusPlain

Ƭ **BillStatusPlain**: keyof typeof [`BillStatus`](enums/QIWI.BillStatus.md)

#### Defined in

[src/apis/p2p/p2p.types.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L13)

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

[src/apis/wallet/wallet.types.ts:1441](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1441)

___

### CardActionStatusAny

Ƭ **CardActionStatusAny**: [`CardActionStatus`](enums/QIWI.CardActionStatus.md) \| [`CardActionStatusPlain`](modules/QIWI.md#cardactionstatusplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:1081](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1081)

___

### CardActionStatusPlain

Ƭ **CardActionStatusPlain**: keyof typeof [`CardActionStatus`](enums/QIWI.CardActionStatus.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:1080](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1080)

___

### CardRenameResponse

Ƭ **CardRenameResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | Текстовое описание ошибки |
| `errorCode` | `string` | Код ошибки |
| `status` | [`OK`](enums/QIWI.CardActionStatus.md#ok) \| [`FAIL`](enums/QIWI.CardActionStatus.md#fail) | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:1105](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1105)

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
| `status` | [`CardActionStatusAny`](modules/QIWI.md#cardactionstatusany) | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:1090](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1090)

___

### CardResponse

Ƭ **CardResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balance` | [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` | Данные баланса карты |
| `info` | { `[key: string]`: `any`; `alias`: ``"qvc-cpa"`` \| ``"qvc-cpa-debit"`` \| ``"qvp-gold"`` ; `details`: { `description`: `string` ; `features`: `string`[] ; `images`: [`ImageObject`](modules/internal_.md#imageobject)[] ; `imagesDet`: [`ImageObject`](modules/internal_.md#imageobject)[] ; `imagesMin`: [`ImageObject`](modules/internal_.md#imageobject)[] ; `info`: `string` ; `offerLink`: `string` ; `requisites`: [`NameValueObject`](modules/internal_.md#namevalueobject)[] ; `tariffLink`: `string` ; `tariffs`: [`NameValueObject`](modules/internal_.md#namevalueobject)[]  } ; `name`: `string` ; `period`: `string` ; `price`: [`MoneyAmount`](modules/QIWI.md#moneyamount)  } | Тарифы и банковские реквизиты карты |
| `info.alias` | ``"qvc-cpa"`` \| ``"qvc-cpa-debit"`` \| ``"qvp-gold"`` | [Тип карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#card-types) |
| `info.details` | { `description`: `string` ; `features`: `string`[] ; `images`: [`ImageObject`](modules/internal_.md#imageobject)[] ; `imagesDet`: [`ImageObject`](modules/internal_.md#imageobject)[] ; `imagesMin`: [`ImageObject`](modules/internal_.md#imageobject)[] ; `info`: `string` ; `offerLink`: `string` ; `requisites`: [`NameValueObject`](modules/internal_.md#namevalueobject)[] ; `tariffLink`: `string` ; `tariffs`: [`NameValueObject`](modules/internal_.md#namevalueobject)[]  } | - |
| `info.details.description` | `string` | Описание карты |
| `info.details.features` | `string`[] | Список возможностей карты на русском |
| `info.details.images` | [`ImageObject`](modules/internal_.md#imageobject)[] | Изображения карты для лендинга с "примерными" данными |
| `info.details.imagesDet` | [`ImageObject`](modules/internal_.md#imageobject)[] | Изображения карты без данных |
| `info.details.imagesMin` | [`ImageObject`](modules/internal_.md#imageobject)[] | Иконки карты |
| `info.details.info` | `string` | Краткое описание тарифа карты. Пример: `99 ₽, действует 1 год` |
| `info.details.offerLink` | `string` | Ссылка на договор оферты на выпуск карты |
| `info.details.requisites` | [`NameValueObject`](modules/internal_.md#namevalueobject)[] | Список пар "ключ-значение" с данными банковских реквизитов для пополнения карты |
| `info.details.tariffLink` | `string` | Ссылка на описание тарифа |
| `info.details.tariffs` | [`NameValueObject`](modules/internal_.md#namevalueobject)[] | Список условий обслуживания карты |
| `info.name` | `string` | Название карты |
| `info.period` | `string` | Период обслуживания (по тарифу). Пример: `за год` |
| `info.price` | [`MoneyAmount`](modules/QIWI.md#moneyamount) | Тариф карты:  `amount` - Стоимость обслуживания `currency` - Код валюты баланса (по ISO) |
| `qvx` | { `activated`: `string` ; `blockedDate`: `string` ; `cardAlias`: `string` ; `cardExpire`: `string` ; `cardExpireMonth`: `string` ; `cardExpireYear`: `string` ; `cardLimit`: ``null`` \| { `currencyCode`: [`Currency`](enums/QIWI.Currency.md) ; `value`: `number`  } ; `cardType`: [`CardType`](modules/internal_.md#cardtype) ; `id`: `number` ; `maskedPan`: `string` ; `smsResended`: `string` ; `status`: [`CardStatus`](enums/QIWI.CardStatus.md) ; `txnId`: `string` ; `unblockAvailable`: `boolean`  } | Общая информация о карте |
| `qvx.activated` | `string` | Дата активации карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.blockedDate` | `string` | Дата блокировки в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardAlias` | `string` | [Название карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#qvc-rename) в интерфейсе сайта [qiwi.com](https://qiwi.com/) |
| `qvx.cardExpire` | `string` | Срок действия карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardExpireMonth` | `string` | Месяц окончания действия карты. Например: `01` |
| `qvx.cardExpireYear` | `string` | Год окончания действия карты. Например: `2022` |
| `qvx.cardLimit` | ``null`` \| { `currencyCode`: [`Currency`](enums/QIWI.Currency.md) ; `value`: `number`  } | - |
| `qvx.cardType` | [`CardType`](modules/internal_.md#cardtype) | Вид карты |
| `qvx.id` | `number` | ID карты |
| `qvx.maskedPan` | `string` | Маскированный номер карты (отображаются только последние 4 цифры). Пример: `****9078` |
| `qvx.smsResended` | `string` | Дата высылки СМС с реквизитами в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.status` | [`CardStatus`](enums/QIWI.CardStatus.md) | Текущий статус карты |
| `qvx.txnId` | `string` | ID транзакции заказа карты |
| `qvx.unblockAvailable` | `boolean` | Признак возможности разблокировать карту |

#### Defined in

[src/apis/wallet/wallet.types.ts:964](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L964)

___

### CardStatusAny

Ƭ **CardStatusAny**: [`CardStatus`](enums/QIWI.CardStatus.md) \| [`CardStatusPlain`](modules/QIWI.md#cardstatusplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:941](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L941)

___

### CardStatusPlain

Ƭ **CardStatusPlain**: keyof typeof [`CardStatus`](enums/QIWI.CardStatus.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:940](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L940)

___

### CardUnblockResponse

Ƭ **CardUnblockResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `confirmationId` | ``null`` |
| `nextConfirmationRequest` | ``null`` |
| `operationId` | ``null`` |
| `status` | [`CardActionStatusAny`](modules/QIWI.md#cardactionstatusany) |

#### Defined in

[src/apis/wallet/wallet.types.ts:1083](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1083)

___

### ChequeFormatAny

Ƭ **ChequeFormatAny**: [`ChequeFormat`](enums/QIWI.ChequeFormat.md) \| [`ChequeFormatPlain`](modules/QIWI.md#chequeformatplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L79)

___

### ChequeFormatPlain

Ƭ **ChequeFormatPlain**: keyof typeof [`ChequeFormat`](enums/QIWI.ChequeFormat.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L78)

___

### CodeResponse

Ƭ **CodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Defined in

[src/apis/wallet/wallet.types.ts:898](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L898)

___

### Collection

Ƭ **Collection**<`T`\>: [`Iterable`](interfaces/internal_.Iterable.md)<`T`\> \| [`ArrayLike`](interfaces/internal_.ArrayLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/apis/shared/types.ts:2](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/types.ts#L2)

___

### CommissionPayerAny

Ƭ **CommissionPayerAny**: [`CommissionPayer`](enums/QIWI.CommissionPayer.md) \| [`CommissionPayerPlain`](modules/QIWI.md#commissionpayerplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:1255](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1255)

___

### CommissionPayerPlain

Ƭ **CommissionPayerPlain**: keyof typeof [`CommissionPayer`](enums/QIWI.CommissionPayer.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:1254](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1254)

___

### CurrencyAny

Ƭ **CurrencyAny**: [`Currency`](enums/QIWI.Currency.md) \| [`CurrencyPlain`](modules/QIWI.md#currencyplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L63)

___

### CurrencyPlain

Ƭ **CurrencyPlain**: keyof typeof [`Currency`](enums/QIWI.Currency.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L62)

___

### FormUrlOptions

Ƭ **FormUrlOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string` | Формат совпадает с форматом параметра `fields.account` при оплате соответствующих провайдеров: для провайдера `99` - номер кошелька получателя; для провайдеров сотовой связи - номер мобильного телефона для пополнения (без префикса 8); для провайдеров перевода на карту - номер банковской карты получателя (без пробелов), для других провайдеров - идентификатор пользователя. Для провайдера `99999` указывается никнейм или номер кошелька получателя (задайте соответствующее значение параметра `extra['accountType']`). |
| `accountType?` | `string` | **Параметр используется только для ID=99999**. Значение определяет перевод на QIWI кошелек по никнейму или по номеру кошелька. Если вы не хотите, чтобы пользователь видел номер вашего кошелька на форме, используйте перевод по никнейму.  `phone` - для перевода по номеру  `nickname` - для перевода по никнейму. |
| `amount?` | `number` | Сумма платежа в рублях |
| `blocked?` | [`LockableField`](modules/QIWI.md#lockablefield)[] | Признак неактивного поля формы. Пользователь не сможет менять значение данного поля. Каждый параметр задает соответствующее поле формы и нумеруется начиная с нуля (blocked[0], blocked[1]  и т.д.). Если не указан, пользователь сможет изменить все поля формы.  Допустимые значения:  `sum` - поле "сумма платежа",  `account` - поле "номер счета/телефона/карты",  `comment` - поле "комментарий".  Пример (неактивное поле суммы платежа): `blocked[0]=sum` |
| `comment?` | `string` | Комментарий. **Параметр используется только для `ID=99`** |
| `custom?` | [`Record`](modules/internal_.md#record)<`string`, `unknown`\> | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:844](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L844)

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

[src/apis/wallet/wallet.types.ts:1115](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1115)

___

### GetAccountOffersResponse

Ƭ **GetAccountOffersResponse**: [`AccountOffer`](modules/QIWI.md#accountoffer)[]

#### Defined in

[src/apis/wallet/wallet.types.ts:782](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L782)

___

### GetAccountsResponse

Ƭ **GetAccountsResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | [`Account`](modules/QIWI.md#account)[] | Массив балансов |

#### Defined in

[src/apis/wallet/wallet.types.ts:769](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L769)

___

### GetPaymentHistoryParams

Ƭ **GetPaymentHistoryParams**: [`GetPaymentHistoryParamsBase`](modules/QIWI.md#getpaymenthistoryparamsbase) \| [`GetPaymentHistoryParamsBase`](modules/QIWI.md#getpaymenthistoryparamsbase) & [`GetPaymentHistoryParamsStartEnd`](modules/QIWI.md#getpaymenthistoryparamsstartend) \| [`GetPaymentHistoryParamsBase`](modules/QIWI.md#getpaymenthistoryparamsbase) & { `nextTxnDate`: `string` ; `nextTxnId`: `number`  }

#### Defined in

[src/apis/wallet/wallet.types.ts:489](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L489)

___

### GetPaymentHistoryParamsBase

Ƭ **GetPaymentHistoryParamsBase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation?` | [`TransactionTypeAny`](modules/QIWI.md#transactiontypeany) | Тип операций в отчете, для отбора. Допустимые значения:  `ALL` - все операции,  `IN` - только пополнения,  `OUT` - только платежи,  `QIWI_CARD` - только платежи по картам QIWI (QVC, QVP).  По умолчанию `ALL` |
| `rows` | `number` | Число платежей в ответе, для разбивки отчета на страницы. Целое число от 1 до 50. Запрос возвращает указанное число платежей в обратном хронологическом порядке, начиная от текущей даты или даты в параметре `startDate` |
| `sources?` | [`PaymentHistorySourceAny`](modules/QIWI.md#paymenthistorysourceany)[] | Список источников платежа, для фильтра. Каждый источник нумеруется, начиная с нуля (`sources[0]`, `sources[1]` и т.д.).  Допустимые значения:  `QW_RUB` - рублевый счет кошелька,  `QW_USD` - счет кошелька в долларах,  `QW_EUR` - счет кошелька в евро,  `CARD` - привязанные и непривязанные к кошельку банковские карты,  `MK` - счет мобильного оператора. Если не указан, учитываются все источники |

#### Defined in

[src/apis/wallet/wallet.types.ts:414](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L414)

___

### GetPaymentHistoryParamsStartEnd

Ƭ **GetPaymentHistoryParamsStartEnd**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `startDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `startDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |
| `startDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `endDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `endDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |

#### Defined in

[src/apis/wallet/wallet.types.ts:459](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L459)

___

### GetPaymentHistoryTotalParams

Ƭ **GetPaymentHistoryTotalParams**: [`Omit`](modules/internal_.md#omit)<[`GetPaymentHistoryParamsBase`](modules/QIWI.md#getpaymenthistoryparamsbase), ``"rows"``\> & [`GetPaymentHistoryParamsStartEnd`](modules/QIWI.md#getpaymenthistoryparamsstartend)

#### Defined in

[src/apis/wallet/wallet.types.ts:510](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L510)

___

### GetPaymentHistoryTotalResponse

Ƭ **GetPaymentHistoryTotalResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `incomingTotal` | [`MoneyAmount`](modules/QIWI.md#moneyamount)[] | Данные о входящих платежах (пополнениях), отдельно по каждой валюте |
| `outgoingTotal` | [`MoneyAmount`](modules/QIWI.md#moneyamount)[] | Данные об исходящих платежах, отдельно по каждой валюте |

#### Defined in

[src/apis/wallet/wallet.types.ts:516](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L516)

___

### GetTransactionsHistoryResponse

Ƭ **GetTransactionsHistoryResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`Transaction`](modules/QIWI.md#transaction)[] | Список объектов [Transaction](https://developer.qiwi.com/ru/qiwi-wallet-personal/#txnid). Число транзакций в списке меньше или равно параметру rows из запроса |
| `nextTxnDate` | [`Transaction`](modules/QIWI.md#transaction)[``"date"``] \| ``null`` | Дата/время следующей транзакции в полном списке, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `nextTxnId` | [`Transaction`](modules/QIWI.md#transaction)[``"txnId"``] \| ``null`` | ID следующей транзакции в полном списке |

#### Defined in

[src/apis/wallet/wallet.types.ts:651](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L651)

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

[src/apis/wallet/wallet.types.ts:328](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L328)

___

### IdentificationResponse

Ƭ **IdentificationResponse**: [`IdentificationBase`](modules/QIWI.md#identificationbase) & { `id`: `number` ; `type`: [`SIMPLE`](enums/QIWI.PersonIdentificationLevel.md#simple) \| [`VERIFIED`](enums/QIWI.PersonIdentificationLevel.md#verified) \| [`FULL`](enums/QIWI.PersonIdentificationLevel.md#full)  }

#### Defined in

[src/apis/wallet/wallet.types.ts:354](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L354)

___

### KeyPair

Ƭ **KeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `secretKey` | `string` |

#### Defined in

[src/apis/wallet/wallet.types.ts:1357](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1357)

___

### Limit

Ƭ **Limit**<`Cur`, `Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Cur` | extends keyof typeof [`Currency`](enums/QIWI.Currency.md) = ``"RUB"`` |
| `Type` | extends [`LimitTypeAny`](modules/QIWI.md#limittypeany) = [`LimitTypeAny`](modules/QIWI.md#limittypeany) |

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

[src/apis/wallet/wallet.types.ts:692](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L692)

___

### LimitTypeAny

Ƭ **LimitTypeAny**: [`LimitType`](enums/QIWI.LimitType.md) \| [`LimitTypePlain`](modules/QIWI.md#limittypeplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:690](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L690)

___

### LimitTypePlain

Ƭ **LimitTypePlain**: keyof typeof [`LimitType`](enums/QIWI.LimitType.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:689](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L689)

___

### LimitsResponse

Ƭ **LimitsResponse**<`RequestedLimits`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RequestedLimits` | extends [`LimitTypeAny`](modules/QIWI.md#limittypeany) = [`LimitTypeAny`](modules/QIWI.md#limittypeany) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `limits` | { `KZ`: [`Limit`](modules/QIWI.md#limit)<``"KZT"``, `RequestedLimits`\>[] ; `RU`: [`Limit`](modules/QIWI.md#limit)<``"RUB"``, `RequestedLimits`\>[]  } | Описание лимитов |
| `limits.KZ` | [`Limit`](modules/QIWI.md#limit)<``"KZT"``, `RequestedLimits`\>[] | - |
| `limits.RU` | [`Limit`](modules/QIWI.md#limit)<``"RUB"``, `RequestedLimits`\>[] | Массив лимитов на операции |

#### Defined in

[src/apis/wallet/wallet.types.ts:724](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L724)

___

### LockableField

Ƭ **LockableField**: ``"account"`` \| ``"comment"`` \| ``"sum"``

#### Defined in

[src/apis/wallet/wallet.types.ts:842](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L842)

___

### MoneyAmount

Ƭ **MoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма |
| `currency` | [`Currency`](enums/QIWI.Currency.md) | Валюты |

#### Defined in

[src/apis/wallet/wallet.types.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L65)

___

### ObjectKey

Ƭ **ObjectKey**: `string` \| `number`

#### Defined in

[src/apis/shared/types.ts:3](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/types.ts#L3)

___

### PayParameters

Ƭ **PayParameters**: `Object`

**`see`** [Документация по платежам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Номер счёта в указанной платёжной системе (у `provider`'а) Если он не задан, то следует указывать номер телефона(киви) получателя.  Записывается в `fields.account`, можно поставить `""`, если переопределяете в `fields` |
| `accountCurrency?` | [`Currency`](enums/QIWI.Currency.md) | Валюта счёта, с которого производится платёж |
| `amount` | `number` | Сумма платежа в указанной валюте. Если валюта не указана, то в рублях. Советую округлять до 2ух знаков после , |
| `comment?` | `string` | Комментарий к платежу |
| `currency?` | [`Currency`](enums/QIWI.Currency.md) | Валюта платежа |
| `fields?` | [`Partial`](modules/internal_.md#partial)<[`FreePayFields`](modules/QIWI.md#freepayfields)\> & [`Record`](modules/internal_.md#record)<`string`, `string`\> | Дополнительные параметры платежа. Обычно необходимо для [платежа по свободным реквизитам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#freepay) |
| `provider?` | `number` \| [`Recipients`](enums/QIWI.Recipients.md) | Ака ID в доках, номер провайдера(платёжной системы) у QIWI  **`see`** [Recipients](classes/QIWI.Wallet.md#recipients)  **`default`** 99 |

#### Defined in

[src/apis/wallet/wallet.types.ts:1202](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1202)

___

### PayUrlPatchParameters

Ƭ **PayUrlPatchParameters**: [`Partial`](modules/internal_.md#partial)<{ `paySource`: [`BillPaySource`](enums/QIWI.BillPaySource.md) ; `successUrl`: `string`  }\>

#### Defined in

[src/apis/p2p/p2p.types.ts:185](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L185)

___

### PaymentCommissionRequest

Ƭ **PaymentCommissionRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера) |
| `paymentMethod` | { `accountId`: [`Currency`](enums/QIWI.Currency.md) ; `type`: ``"Account"``  } | Объект, определяющий обработку платежа процессингом QIWI Wallet |
| `paymentMethod.accountId` | [`Currency`](enums/QIWI.Currency.md) | Идентификатор счета, только `643`. |
| `paymentMethod.type` | ``"Account"`` | Метод платежа, только `Account` |
| `purchaseTotals` | { `total`: [`MoneyAmount`](modules/QIWI.md#moneyamount)  } | Объект с платежными реквизитами |
| `purchaseTotals.total` | [`MoneyAmount`](modules/QIWI.md#moneyamount) | Объект, содержащий данные о сумме платежа |

#### Defined in

[src/apis/wallet/wallet.types.ts:784](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L784)

___

### PaymentHistorySourceAny

Ƭ **PaymentHistorySourceAny**: [`PaymentHistorySource`](enums/QIWI.PaymentHistorySource.md) \| [`PaymentHistorySourcePlain`](modules/QIWI.md#paymenthistorysourceplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:410](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L410)

___

### PaymentHistorySourcePlain

Ƭ **PaymentHistorySourcePlain**: keyof typeof [`PaymentHistorySource`](enums/QIWI.PaymentHistorySource.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:409](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L409)

___

### PaymentResponse

Ƭ **PaymentResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | Копия параметра `comment` из платежного запроса (возвращается, если присутствует в запросе) |
| `fields` | [`Record`](modules/internal_.md#record)<`string`, `string`\> | Копия объекта `fields` из платежного запроса. **Номер карты (если был выполнен перевод на карту) возвращается в маскированном виде** |
| `id` | `string` | Копия параметра `id` из платежного запроса |
| `source` | ``"account_643"`` | Константа, `account_643` |
| `sum` | [`MoneyAmount`](modules/QIWI.md#moneyamount) | Копия объекта `sum` из платежного запроса |
| `terms` | `string` | Идентификатор провайдера, на которого был отправлен платеж |
| `transaction` | { `id`: `string` ; `state`: { `code`: ``"Accepted"``  }  } | - |
| `transaction.id` | `string` | - |
| `transaction.state` | { `code`: ``"Accepted"``  } | - |
| `transaction.state.code` | ``"Accepted"`` | - |

#### Defined in

[src/apis/wallet/wallet.types.ts:808](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L808)

___

### PersonIdentificationLevelAny

Ƭ **PersonIdentificationLevelAny**: [`PersonIdentificationLevel`](enums/QIWI.PersonIdentificationLevel.md) \| [`PersonIdentificationLevelPlain`](modules/QIWI.md#personidentificationlevelplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L20)

___

### PersonIdentificationLevelPlain

Ƭ **PersonIdentificationLevelPlain**: keyof typeof [`PersonIdentificationLevel`](enums/QIWI.PersonIdentificationLevel.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L19)

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
| `contractInfo` | { `blocked`: `boolean` ; `contractId`: `number` ; `creationDate`: `string` ; `features`: `object`[] ; `identificationInfo`: { `bankAlias`: ``"QIWI"`` \| `string` ; `identificationLevel`: [`PersonIdentificationLevel`](enums/QIWI.PersonIdentificationLevel.md)  }[]  } | Информация о кошельке. Объект может отсутствовать, в зависимости от признака `contractInfoEnabled` в запросе. |
| `contractInfo.blocked` | `boolean` | Логический признак блокировки кошелька |
| `contractInfo.contractId` | `number` | Номер кошелька |
| `contractInfo.creationDate` | `string` | Дата/время создания QIWI Кошелька (через сайт/мобильное приложение, либо при первом пополнении, либо другим способом) |
| `contractInfo.features` | `object`[] | Служебная информация |
| `contractInfo.identificationInfo` | { `bankAlias`: ``"QIWI"`` \| `string` ; `identificationLevel`: [`PersonIdentificationLevel`](enums/QIWI.PersonIdentificationLevel.md)  }[] | Данные об [идентификации](https://qiwi.com/settings/identification#ru) пользователя. |
| `userInfo` | { `defaultPayCurrency`: [`Currency`](enums/QIWI.Currency.md) ; `defaultPaySource`: `number` ; `email`: `string` ; `firstTxnId`: `string` ; `language`: `string` ; `operator`: `string` ; `phoneHash`: `string` ; `promoEnabled`: `string`  } | Прочие пользовательские данные. Объект может отсутствовать, в зависимости от признака `userInfoEnabled` в запросе. |
| `userInfo.defaultPayCurrency` | [`Currency`](enums/QIWI.Currency.md) | Код валюты баланса кошелька по умолчанию (number-3 ISO-4217) |
| `userInfo.defaultPaySource` | `number` | Служебная информация |
| `userInfo.email` | `string` | E-mail пользователя |
| `userInfo.firstTxnId` | `string` | Номер первой транзакции после регистрации |
| `userInfo.language` | `string` | Служебная информация |
| `userInfo.operator` | `string` | Название мобильного оператора номера пользователя |
| `userInfo.phoneHash` | `string` | Служебная информация |
| `userInfo.promoEnabled` | `string` | Служебная информация |

#### Defined in

[src/apis/wallet/wallet.types.ts:178](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L178)

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

[src/apis/wallet/wallet.types.ts:916](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L916)

___

### ProviderInfo

Ƭ **ProviderInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | ``null`` \| `string` |
| `extras` | [`KeyValueObject`](modules/internal_.md#keyvalueobject) |
| `hasPaymentForm` | `boolean` |
| `id` | `number` |
| `keys` | `string` |
| `logoUrl` | `string` \| ``null`` |
| `longName` | `string` |
| `searchAvailable` | `boolean` |
| `shortName` | `string` |
| `siteUrl` | ``null`` \| `string` |
| `type` | ``"PROVIDER"`` |

#### Defined in

[src/apis/wallet/wallet.types.ts:1497](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1497)

___

### QuickPayParameters

Ƭ **QuickPayParameters**: [`Omit`](modules/internal_.md#omit)<[`PayParameters`](modules/QIWI.md#payparameters), ``"provider"``\> & { `commissionPayer?`: [`CommissionPayer`](enums/QIWI.CommissionPayer.md) ; `provider?`: `number` \| [`Recipients`](enums/QIWI.Recipients.md) \| [`QuickPayRecipientsAny`](modules/QIWI.md#quickpayrecipientsany)  }

#### Defined in

[src/apis/wallet/wallet.types.ts:1265](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1265)

___

### QuickPayRecipientsAny

Ƭ **QuickPayRecipientsAny**: [`QuickPayRecipients`](enums/QIWI.QuickPayRecipients.md) \| [`QuickPayRecipientsPlain`](modules/QIWI.md#quickpayrecipientsplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:1263](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1263)

___

### QuickPayRecipientsPlain

Ƭ **QuickPayRecipientsPlain**: ``"card"`` \| ``"phone"`` \| ``"qiwi"`` \| ``"yoomoney"``

#### Defined in

[src/apis/wallet/wallet.types.ts:1262](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1262)

___

### ReadonlyRecord

Ƭ **ReadonlyRecord**<`K`, `V`\>: [`Readonly`](modules/internal_.md#readonly)<[`Record`](modules/internal_.md#record)<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`ObjectKey`](modules/QIWI.md#objectkey) |
| `V` | `V` |

#### Defined in

[src/apis/shared/types.ts:4](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/types.ts#L4)

___

### RefundCreationRequest

Ƭ **RefundCreationRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`BillMoneyAmount`](modules/QIWI.md#billmoneyamount) |
| `refundId?` | `string` |

#### Defined in

[src/apis/p2p/p2p.types.ts:195](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.types.ts#L195)

___

### Restrictions

Ƭ **Restrictions**: { `restrictionCode`: `string` ; `restrictionDescription`: `string`  }[]

#### Defined in

[src/apis/wallet/wallet.types.ts:376](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L376)

___

### StringOrNumber

Ƭ **StringOrNumber**: `string` \| `number`

#### Defined in

[src/apis/wallet/wallet.types.ts:1355](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1355)

___

### TimeSpanKeys

Ƭ **TimeSpanKeys**: keyof [`TimeSpanMapping`](modules/QIWI.md#timespanmapping-1)

#### Defined in

[src/apis/shared/time.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/time.ts#L80)

___

### TimeSpanMapping

Ƭ **TimeSpanMapping**: typeof [`TimeSpanMapping`](modules/QIWI.md#timespanmapping-1)

#### Defined in

[src/apis/shared/time.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/time.ts#L79)

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

[src/apis/wallet/wallet.types.ts:902](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L902)

___

### Transaction

Ƭ **Transaction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Для платежей - номер счета получателя. Для пополнений - номер отправителя, терминала или название агента пополнения кошелька |
| `comment` | `string` | Комментарий к платежу |
| `commission` | [`MoneyAmount`](modules/QIWI.md#moneyamount) | Данные о комиссии платежа |
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
| `status` | [`TransactionStatus`](enums/QIWI.TransactionStatus.md) | Статус платежа. Возможные значения:  `WAITING` - платеж проводится  `SUCCESS` - успешный платеж  `ERROR` - ошибка платежа. |
| `statusText` | `string` | Текстовое описание статуса платежа |
| `sum` | [`MoneyAmount`](modules/QIWI.md#moneyamount) | Данные о сумме платежа или пополнения. |
| `total` | [`MoneyAmount`](modules/QIWI.md#moneyamount) | Данные о фактической сумме платежа или пополнения. |
| `trmTxnId` | `string` | Клиентский ID транзакции |
| `txnId` | `number` | ID транзакции в сервисе QIWI Кошелек |
| `type` | [`IN`](enums/QIWI.TransactionType.md#in) \| [`OUT`](enums/QIWI.TransactionType.md#out) \| [`QIWI_CARD`](enums/QIWI.TransactionType.md#qiwi_card) | Тип платежа. Возможные значения:  `IN` - пополнение,  `OUT` - платеж,  `QIWI_CARD` - платеж с карт QIWI (QVC, QVP). |

#### Defined in

[src/apis/wallet/wallet.types.ts:527](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L527)

___

### TransactionStatusAny

Ƭ **TransactionStatusAny**: [`TransactionStatus`](enums/QIWI.TransactionStatus.md) \| [`TransactionStatusPlain`](modules/QIWI.md#transactionstatusplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L49)

___

### TransactionStatusPlain

Ƭ **TransactionStatusPlain**: keyof typeof [`TransactionStatus`](enums/QIWI.TransactionStatus.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L48)

___

### TransactionTypeAny

Ƭ **TransactionTypeAny**: [`TransactionType`](enums/QIWI.TransactionType.md) \| [`TransactionTypePlain`](modules/QIWI.md#transactiontypeplain)

#### Defined in

[src/apis/wallet/wallet.types.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L36)

___

### TransactionTypePlain

Ƭ **TransactionTypePlain**: keyof typeof [`TransactionType`](enums/QIWI.TransactionType.md)

#### Defined in

[src/apis/wallet/wallet.types.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L35)

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
| `txnType` | [`TransactionType`](enums/QIWI.TransactionType.md) | Тип транзакций, по которым отсылаются уведомления (IN - входящие, OUT - исходящие, BOTH - все) |

#### Defined in

[src/apis/wallet/wallet.types.ts:1270](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1270)

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
| `payment` | { `account`: `string` ; `comment`: `string` ; `commission`: [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` ; `date`: `string` ; `errorCode`: `number` ; `personId`: `number` ; `provider`: `number` \| [`Recipients`](enums/QIWI.Recipients.md) ; `signFields`: `string` ; `status`: [`TransactionStatus`](enums/QIWI.TransactionStatus.md) ; `sum`: [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` ; `total`: [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` ; `txnId`: `number` ; `type`: [`IN`](enums/QIWI.TransactionType.md#in) \| [`OUT`](enums/QIWI.TransactionType.md#out)  } | Данные платежа |
| `payment.account` | `string` | - |
| `payment.comment` | `string` | - |
| `payment.commission` | [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` | Данные о комиссии для платежа или пополнения |
| `payment.date` | `string` | Для запросов истории платежей - Дата/время платежа, во временной зоне запроса (см. параметр `startDate`). Формат даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`  Для запросов данных о транзакции - Дата/время платежа, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `payment.errorCode` | `number` | [Код ошибки платежа](https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode) |
| `payment.personId` | `number` | Номер кошелька |
| `payment.provider` | `number` \| [`Recipients`](enums/QIWI.Recipients.md) | ID провайдера QIWI Wallet |
| `payment.signFields` | `string` | Список полей объекта payment (через ,), которые хешируются алгоритмом HmacSHA256 для проверки уведомления (см. параметр `hash`) |
| `payment.status` | [`TransactionStatus`](enums/QIWI.TransactionStatus.md) | Статус платежа |
| `payment.sum` | [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` | Данные о сумме платежа или пополнения |
| `payment.total` | [`MoneyAmount`](modules/QIWI.md#moneyamount) \| ``null`` | Данные об итоговой сумме платежа или пополнения |
| `payment.txnId` | `number` | ID транзакции в процессинге QIWI Wallet |
| `payment.type` | [`IN`](enums/QIWI.TransactionType.md#in) \| [`OUT`](enums/QIWI.TransactionType.md#out) | Тип платежа. Возможные значения:  `IN` - пополнение,  `OUT` - платеж. |
| `test` | `boolean` | Признак тестового сообщения |
| `version` | `string` | Версия API |

#### Defined in

[src/apis/wallet/wallet.types.ts:1284](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/wallet.types.ts#L1284)

## Variables

### TimeSpanMapping

• `Const` **TimeSpanMapping**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `day` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `h` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `hour` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `hr` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `m` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `millisecond` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `min` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `minute` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `mn` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `mon` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `month` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `ms` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `msec` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `s` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `sec` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `second` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `w` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `week` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `y` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `year` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |
| `yr` | [`TimeSpan`](enums/QIWI.TimeSpan.md) |

#### Defined in

[src/apis/shared/time.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/time.ts#L55)

## Functions

### collect

▸ **collect**<`T`\>(`collection`): `T`[]

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | [`Collection`](modules/QIWI.md#collection)<`T`\> |

#### Returns

`T`[]

#### Defined in

[src/apis/shared/collect.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/collect.ts#L11)

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

[src/apis/shared/time.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/time.ts#L19)

___

### formatOffsetDate

▸ **formatOffsetDate**(`amount`, `unit?`, `currentDate?`): `string`

**`export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `undefined` |
| `unit` | `number` \| [`TimeSpan`](enums/QIWI.TimeSpan.md) \| ``"ms"`` \| ``"msec"`` \| ``"millisecond"`` \| ``"s"`` \| ``"sec"`` \| ``"second"`` \| ``"m"`` \| ``"min"`` \| ``"minute"`` \| ``"h"`` \| ``"hr"`` \| ``"hour"`` \| ``"d"`` \| ``"day"`` \| ``"w"`` \| ``"week"`` \| ``"mn"`` \| ``"mon"`` \| ``"month"`` \| ``"y"`` \| ``"yr"`` \| ``"year"`` | `TimeSpan.Millisecond` |
| `currentDate` | `Date` | `undefined` |

#### Returns

`string`

{string}

#### Defined in

[src/apis/shared/time.ts:90](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/time.ts#L90)

___

### formatQuerystring

▸ **formatQuerystring**(`object`): `string`

Создаёт строку запроса, в формате, который понимает QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`AnyResponse`](modules/QIWI.md#anyresponse) | Объект для преобразования |

#### Returns

`string`

#### Defined in

[src/apis/shared/querystring.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/querystring.ts#L26)

___

### generateUUID

▸ **generateUUID**(): `string`

Генерирует UUID

**`export`**

#### Returns

`string`

#### Defined in

[src/apis/shared/uuid.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/uuid.ts#L10)

___

### parseQuerystring

▸ **parseQuerystring**(`querystring`): [`AnyResponse`](modules/QIWI.md#anyresponse)

Разбирает строку запроса, в том формате, который передаёт QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `querystring` | `string` | Строка запроса |

#### Returns

[`AnyResponse`](modules/QIWI.md#anyresponse)

#### Defined in

[src/apis/shared/querystring.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/shared/querystring.ts#L9)
