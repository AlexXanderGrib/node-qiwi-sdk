[QIWI SDK](../README.md) / [Modules](../modules.md) / wallet

# Module: wallet

## Table of contents

### References

- [NodeQiwi](wallet.md#nodeqiwi)
- [Personal](wallet.md#personal)
- [PersonalApiError](wallet.md#personalapierror)
- [Wallet](wallet.md#wallet)
- [WalletApiError](wallet.md#walletapierror)
- [WalletApiErrorResponse](wallet.md#walletapierrorresponse)
- [WalletApiOptions](wallet.md#walletapioptions)
- [WalletApiShortError](wallet.md#walletapishorterror)
- [WalletApiShortErrorResponse](wallet.md#walletapishorterrorresponse)
- [WalletAuthorizationError](wallet.md#walletauthorizationerror)
- [WalletCompat](wallet.md#walletcompat)
- [\_WalletCompat](wallet.md#_walletcompat)
- [\_WalletCompatNodeQiwi](wallet.md#_walletcompatnodeqiwi)

### Enumerations

- [CardActionStatus](../enums/wallet.CardActionStatus.md)
- [CardStatus](../enums/wallet.CardStatus.md)
- [ChequeFormat](../enums/wallet.ChequeFormat.md)
- [CommissionPayer](../enums/wallet.CommissionPayer.md)
- [Currency](../enums/wallet.Currency.md)
- [LimitType](../enums/wallet.LimitType.md)
- [PaymentHistorySource](../enums/wallet.PaymentHistorySource.md)
- [PersonIdentificationLevel](../enums/wallet.PersonIdentificationLevel.md)
- [QuickPayRecipients](../enums/wallet.QuickPayRecipients.md)
- [Recipients](../enums/wallet.Recipients.md)
- [TransactionStatus](../enums/wallet.TransactionStatus.md)
- [TransactionType](../enums/wallet.TransactionType.md)

### Interfaces

- [Bill](../interfaces/wallet.Bill.md)
- [BillProvider](../interfaces/wallet.BillProvider.md)

### Type aliases

- [Account](wallet.md#account)
- [AccountOffer](wallet.md#accountoffer)
- [BillPayResponse](wallet.md#billpayresponse)
- [BillsGetParameters](wallet.md#billsgetparameters)
- [CardActionStatusAny](wallet.md#cardactionstatusany)
- [CardActionStatusPlain](wallet.md#cardactionstatusplain)
- [CardRenameResponse](wallet.md#cardrenameresponse)
- [CardRequisitesResponse](wallet.md#cardrequisitesresponse)
- [CardResponse](wallet.md#cardresponse)
- [CardStatusAny](wallet.md#cardstatusany)
- [CardStatusPlain](wallet.md#cardstatusplain)
- [CardUnblockResponse](wallet.md#cardunblockresponse)
- [ChequeFormatAny](wallet.md#chequeformatany)
- [ChequeFormatPlain](wallet.md#chequeformatplain)
- [CodeResponse](wallet.md#coderesponse)
- [CommissionPayerAny](wallet.md#commissionpayerany)
- [CommissionPayerPlain](wallet.md#commissionpayerplain)
- [CurrencyAny](wallet.md#currencyany)
- [CurrencyPlain](wallet.md#currencyplain)
- [FormUrlOptions](wallet.md#formurloptions)
- [FreePayFields](wallet.md#freepayfields)
- [GetAccountOffersResponse](wallet.md#getaccountoffersresponse)
- [GetAccountsResponse](wallet.md#getaccountsresponse)
- [GetPaymentHistoryParams](wallet.md#getpaymenthistoryparams)
- [GetPaymentHistoryParamsBase](wallet.md#getpaymenthistoryparamsbase)
- [GetPaymentHistoryParamsStartEnd](wallet.md#getpaymenthistoryparamsstartend)
- [GetPaymentHistoryTotalParams](wallet.md#getpaymenthistorytotalparams)
- [GetPaymentHistoryTotalResponse](wallet.md#getpaymenthistorytotalresponse)
- [GetTransactionsHistoryResponse](wallet.md#gettransactionshistoryresponse)
- [IdentificationBase](wallet.md#identificationbase)
- [IdentificationResponse](wallet.md#identificationresponse)
- [KeyPair](wallet.md#keypair)
- [Limit](wallet.md#limit)
- [LimitTypeAny](wallet.md#limittypeany)
- [LimitTypePlain](wallet.md#limittypeplain)
- [LimitsResponse](wallet.md#limitsresponse)
- [LockableField](wallet.md#lockablefield)
- [MoneyAmount](wallet.md#moneyamount)
- [PayParameters](wallet.md#payparameters)
- [PaymentCommissionRequest](wallet.md#paymentcommissionrequest)
- [PaymentHistorySourceAny](wallet.md#paymenthistorysourceany)
- [PaymentHistorySourcePlain](wallet.md#paymenthistorysourceplain)
- [PaymentResponse](wallet.md#paymentresponse)
- [PersonIdentificationLevelAny](wallet.md#personidentificationlevelany)
- [PersonIdentificationLevelPlain](wallet.md#personidentificationlevelplain)
- [PersonProfile](wallet.md#personprofile)
- [PrettyTokenResponse](wallet.md#prettytokenresponse)
- [ProviderInfo](wallet.md#providerinfo)
- [QuickPayParameters](wallet.md#quickpayparameters)
- [QuickPayRecipientsAny](wallet.md#quickpayrecipientsany)
- [QuickPayRecipientsPlain](wallet.md#quickpayrecipientsplain)
- [Restrictions](wallet.md#restrictions)
- [StringOrNumber](wallet.md#stringornumber)
- [TokenResponse](wallet.md#tokenresponse)
- [Transaction](wallet.md#transaction)
- [TransactionStatusAny](wallet.md#transactionstatusany)
- [TransactionStatusPlain](wallet.md#transactionstatusplain)
- [TransactionTypeAny](wallet.md#transactiontypeany)
- [TransactionTypePlain](wallet.md#transactiontypeplain)
- [WebHookInfo](wallet.md#webhookinfo)
- [WebhookTransaction](wallet.md#webhooktransaction)

## References

### NodeQiwi

Renames and re-exports [_WalletCompatNodeQiwi](../classes/index.QIWI._WalletCompatNodeQiwi.md)

___

### Personal

Renames and re-exports [_WalletCompat](../classes/index.QIWI._WalletCompat.md)

___

### PersonalApiError

Renames and re-exports [WalletApiError](../classes/index.QIWI.WalletApiError.md)

___

### Wallet

Re-exports [Wallet](../classes/index.QIWI.Wallet.md)

___

### WalletApiError

Re-exports [WalletApiError](../classes/index.QIWI.WalletApiError.md)

___

### WalletApiErrorResponse

Re-exports [WalletApiErrorResponse](index.QIWI.md#walletapierrorresponse)

___

### WalletApiOptions

Re-exports [WalletApiOptions](../interfaces/index.QIWI.WalletApiOptions.md)

___

### WalletApiShortError

Re-exports [WalletApiShortError](../classes/index.QIWI.WalletApiShortError.md)

___

### WalletApiShortErrorResponse

Re-exports [WalletApiShortErrorResponse](index.QIWI.md#walletapishorterrorresponse)

___

### WalletAuthorizationError

Re-exports [WalletAuthorizationError](../classes/index.QIWI.WalletAuthorizationError.md)

___

### WalletCompat

Renames and re-exports [_WalletCompat](../classes/index.QIWI._WalletCompat.md)

___

### \_WalletCompat

Re-exports [_WalletCompat](../classes/index.QIWI._WalletCompat.md)

___

### \_WalletCompatNodeQiwi

Re-exports [_WalletCompatNodeQiwi](../classes/index.QIWI._WalletCompatNodeQiwi.md)

## Type aliases

### Account

Ƭ **Account**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним пользовательского баланса |
| `balance` | [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` | - |
| `bankAlias` | `string` | Псевдоним банка |
| `currency` | [`Currency`](../enums/index.QIWI.Currency.md) | Код валюты баланса (number-3 ISO-4217) |
| `defaultAccount?` | `boolean` | - |
| `fsAlias` | `string` | Псевдоним банковского баланса |
| `hasBalance` | `boolean` | Логический признак реального баланса в системе QIWI Кошелек (не привязанная карта, не счет мобильного телефона и т.д.) |
| `title` | `string` | Название соответствующего счета кошелька |
| `type` | { `id`: `string` ; `title`: `string`  } | Сведения о счете |
| `type.id` | `string` | Описание счета |
| `type.title` | `string` | Описание счета |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:599](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L599)

___

### AccountOffer

Ƭ **AccountOffer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета |
| `currency` | [`Currency`](../enums/index.QIWI.Currency.md) | ID валюты счета |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:629](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L629)

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

[dist/cjs/apis/wallet/wallet.types.d.ts:1192](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1192)

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

[dist/cjs/apis/wallet/wallet.types.d.ts:1158](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1158)

___

### CardActionStatusAny

Ƭ **CardActionStatusAny**: [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md) \| [`CardActionStatusPlain`](index.QIWI.md#cardactionstatusplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:869](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L869)

___

### CardActionStatusPlain

Ƭ **CardActionStatusPlain**: keyof typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:868](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L868)

___

### CardRenameResponse

Ƭ **CardRenameResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | Текстовое описание ошибки |
| `errorCode` | `string` | Код ошибки |
| `status` | [`OK`](../enums/index.QIWI.CardActionStatus.md#ok) \| [`FAIL`](../enums/index.QIWI.CardActionStatus.md#fail) | - |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:886](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L886)

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
| `status` | [`CardActionStatusAny`](index.QIWI.md#cardactionstatusany) | - |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:876](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L876)

___

### CardResponse

Ƭ **CardResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balance` | [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` | Данные баланса карты |
| `info` | { `[key: string]`: `any`; `alias`: ``"qvc-cpa"`` \| ``"qvc-cpa-debit"`` \| ``"qvp-gold"`` ; `details`: { `description`: `string` ; `features`: `string`[] ; `images`: [`ImageObject`](index._internal_.md#imageobject)[] ; `imagesDet`: [`ImageObject`](index._internal_.md#imageobject)[] ; `imagesMin`: [`ImageObject`](index._internal_.md#imageobject)[] ; `info`: `string` ; `offerLink`: `string` ; `requisites`: [`NameValueObject`](index._internal_.md#namevalueobject)[] ; `tariffLink`: `string` ; `tariffs`: [`NameValueObject`](index._internal_.md#namevalueobject)[]  } ; `name`: `string` ; `period`: `string` ; `price`: [`MoneyAmount`](index.QIWI.md#moneyamount)  } | Тарифы и банковские реквизиты карты |
| `info.alias` | ``"qvc-cpa"`` \| ``"qvc-cpa-debit"`` \| ``"qvp-gold"`` | [Тип карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#card-types) |
| `info.details` | { `description`: `string` ; `features`: `string`[] ; `images`: [`ImageObject`](index._internal_.md#imageobject)[] ; `imagesDet`: [`ImageObject`](index._internal_.md#imageobject)[] ; `imagesMin`: [`ImageObject`](index._internal_.md#imageobject)[] ; `info`: `string` ; `offerLink`: `string` ; `requisites`: [`NameValueObject`](index._internal_.md#namevalueobject)[] ; `tariffLink`: `string` ; `tariffs`: [`NameValueObject`](index._internal_.md#namevalueobject)[]  } | - |
| `info.details.description` | `string` | Описание карты |
| `info.details.features` | `string`[] | Список возможностей карты на русском |
| `info.details.images` | [`ImageObject`](index._internal_.md#imageobject)[] | Изображения карты для лендинга с "примерными" данными |
| `info.details.imagesDet` | [`ImageObject`](index._internal_.md#imageobject)[] | Изображения карты без данных |
| `info.details.imagesMin` | [`ImageObject`](index._internal_.md#imageobject)[] | Иконки карты |
| `info.details.info` | `string` | Краткое описание тарифа карты. Пример: `99 ₽, действует 1 год` |
| `info.details.offerLink` | `string` | Ссылка на договор оферты на выпуск карты |
| `info.details.requisites` | [`NameValueObject`](index._internal_.md#namevalueobject)[] | Список пар "ключ-значение" с данными банковских реквизитов для пополнения карты |
| `info.details.tariffLink` | `string` | Ссылка на описание тарифа |
| `info.details.tariffs` | [`NameValueObject`](index._internal_.md#namevalueobject)[] | Список условий обслуживания карты |
| `info.name` | `string` | Название карты |
| `info.period` | `string` | Период обслуживания (по тарифу). Пример: `за год` |
| `info.price` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Тариф карты:  `amount` - Стоимость обслуживания `currency` - Код валюты баланса (по ISO) |
| `qvx` | { `activated`: `string` ; `blockedDate`: `string` ; `cardAlias`: `string` ; `cardExpire`: `string` ; `cardExpireMonth`: `string` ; `cardExpireYear`: `string` ; `cardLimit`: ``null`` \| { `currencyCode`: [`Currency`](../enums/index.QIWI.Currency.md) ; `value`: `number`  } ; `cardType`: [`CardType`](index._internal_.md#cardtype) ; `id`: `number` ; `maskedPan`: `string` ; `smsResended`: `string` ; `status`: [`CardStatus`](../enums/index.QIWI.CardStatus.md) ; `txnId`: `string` ; `unblockAvailable`: `boolean`  } | Общая информация о карте |
| `qvx.activated` | `string` | Дата активации карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.blockedDate` | `string` | Дата блокировки в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardAlias` | `string` | [Название карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#qvc-rename) в интерфейсе сайта [qiwi.com](https://qiwi.com/) |
| `qvx.cardExpire` | `string` | Срок действия карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardExpireMonth` | `string` | Месяц окончания действия карты. Например: `01` |
| `qvx.cardExpireYear` | `string` | Год окончания действия карты. Например: `2022` |
| `qvx.cardLimit` | ``null`` \| { `currencyCode`: [`Currency`](../enums/index.QIWI.Currency.md) ; `value`: `number`  } | - |
| `qvx.cardType` | [`CardType`](index._internal_.md#cardtype) | Вид карты |
| `qvx.id` | `number` | ID карты |
| `qvx.maskedPan` | `string` | Маскированный номер карты (отображаются только последние 4 цифры). Пример: `****9078` |
| `qvx.smsResended` | `string` | Дата высылки СМС с реквизитами в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.status` | [`CardStatus`](../enums/index.QIWI.CardStatus.md) | Текущий статус карты |
| `qvx.txnId` | `string` | ID транзакции заказа карты |
| `qvx.unblockAvailable` | `boolean` | Признак возможности разблокировать карту |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:783](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L783)

___

### CardStatusAny

Ƭ **CardStatusAny**: [`CardStatus`](../enums/index.QIWI.CardStatus.md) \| [`CardStatusPlain`](index.QIWI.md#cardstatusplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:764](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L764)

___

### CardStatusPlain

Ƭ **CardStatusPlain**: keyof typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:763](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L763)

___

### CardUnblockResponse

Ƭ **CardUnblockResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `confirmationId` | ``null`` |
| `nextConfirmationRequest` | ``null`` |
| `operationId` | ``null`` |
| `status` | [`CardActionStatusAny`](index.QIWI.md#cardactionstatusany) |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:870](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L870)

___

### ChequeFormatAny

Ƭ **ChequeFormatAny**: [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) \| [`ChequeFormatPlain`](index.QIWI.md#chequeformatplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L64)

___

### ChequeFormatPlain

Ƭ **ChequeFormatPlain**: keyof typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L63)

___

### CodeResponse

Ƭ **CodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:732](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L732)

___

### CommissionPayerAny

Ƭ **CommissionPayerAny**: [`CommissionPayer`](../enums/index.QIWI.CommissionPayer.md) \| [`CommissionPayerPlain`](index.QIWI.md#commissionpayerplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1009](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1009)

___

### CommissionPayerPlain

Ƭ **CommissionPayerPlain**: keyof typeof [`CommissionPayer`](../enums/index.QIWI.CommissionPayer.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1008](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1008)

___

### CurrencyAny

Ƭ **CurrencyAny**: [`Currency`](../enums/index.QIWI.Currency.md) \| [`CurrencyPlain`](index.QIWI.md#currencyplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L52)

___

### CurrencyPlain

Ƭ **CurrencyPlain**: keyof typeof [`Currency`](../enums/index.QIWI.Currency.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:51](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L51)

___

### FormUrlOptions

Ƭ **FormUrlOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string` | Формат совпадает с форматом параметра `fields.account` при оплате соответствующих провайдеров: для провайдера `99` - номер кошелька получателя; для провайдеров сотовой связи - номер мобильного телефона для пополнения (без префикса 8); для провайдеров перевода на карту - номер банковской карты получателя (без пробелов), для других провайдеров - идентификатор пользователя. Для провайдера `99999` указывается никнейм или номер кошелька получателя (задайте соответствующее значение параметра `extra['accountType']`). |
| `accountType?` | `string` | **Параметр используется только для ID=99999**. Значение определяет перевод на QIWI кошелек по никнейму или по номеру кошелька. Если вы не хотите, чтобы пользователь видел номер вашего кошелька на форме, используйте перевод по никнейму.  `phone` - для перевода по номеру  `nickname` - для перевода по никнейму. |
| `amount?` | `number` | Сумма платежа в рублях |
| `blocked?` | [`LockableField`](index.QIWI.md#lockablefield)[] | Признак неактивного поля формы. Пользователь не сможет менять значение данного поля. Каждый параметр задает соответствующее поле формы и нумеруется начиная с нуля (blocked[0], blocked[1]  и т.д.). Если не указан, пользователь сможет изменить все поля формы.  Допустимые значения:  `sum` - поле "сумма платежа",  `account` - поле "номер счета/телефона/карты",  `comment` - поле "комментарий".  Пример (неактивное поле суммы платежа): `blocked[0]=sum` |
| `comment?` | `string` | Комментарий. **Параметр используется только для `ID=99`** |
| `custom?` | `Record`<`string`, `unknown`\> | - |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:684](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L684)

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

[dist/cjs/apis/wallet/wallet.types.d.ts:893](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L893)

___

### GetAccountOffersResponse

Ƭ **GetAccountOffersResponse**: [`AccountOffer`](index.QIWI.md#accountoffer)[]

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:635](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L635)

___

### GetAccountsResponse

Ƭ **GetAccountsResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | [`Account`](index.QIWI.md#account)[] | Массив балансов |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:625](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L625)

___

### GetPaymentHistoryParams

Ƭ **GetPaymentHistoryParams**: [`GetPaymentHistoryParamsBase`](index.QIWI.md#getpaymenthistoryparamsbase) \| [`GetPaymentHistoryParamsBase`](index.QIWI.md#getpaymenthistoryparamsbase) & [`GetPaymentHistoryParamsStartEnd`](index.QIWI.md#getpaymenthistoryparamsstartend) \| [`GetPaymentHistoryParamsBase`](index.QIWI.md#getpaymenthistoryparamsbase) & { `nextTxnDate`: `string` ; `nextTxnId`: `number`  }

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:417](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L417)

___

### GetPaymentHistoryParamsBase

Ƭ **GetPaymentHistoryParamsBase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation?` | [`TransactionTypeAny`](index.QIWI.md#transactiontypeany) | Тип операций в отчете, для отбора. Допустимые значения:  `ALL` - все операции,  `IN` - только пополнения,  `OUT` - только платежи,  `QIWI_CARD` - только платежи по картам QIWI (QVC, QVP).  По умолчанию `ALL` |
| `rows` | `number` | Число платежей в ответе, для разбивки отчета на страницы. Целое число от 1 до 50. Запрос возвращает указанное число платежей в обратном хронологическом порядке, начиная от текущей даты или даты в параметре `startDate` |
| `sources?` | [`PaymentHistorySourceAny`](index.QIWI.md#paymenthistorysourceany)[] | Список источников платежа, для фильтра. Каждый источник нумеруется, начиная с нуля (`sources[0]`, `sources[1]` и т.д.).  Допустимые значения:  `QW_RUB` - рублевый счет кошелька,  `QW_USD` - счет кошелька в долларах,  `QW_EUR` - счет кошелька в евро,  `CARD` - привязанные и непривязанные к кошельку банковские карты,  `MK` - счет мобильного оператора. Если не указан, учитываются все источники |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:347](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L347)

___

### GetPaymentHistoryParamsStartEnd

Ƭ **GetPaymentHistoryParamsStartEnd**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `startDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `startDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |
| `startDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `endDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `endDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:389](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L389)

___

### GetPaymentHistoryTotalParams

Ƭ **GetPaymentHistoryTotalParams**: `Omit`<[`GetPaymentHistoryParamsBase`](index.QIWI.md#getpaymenthistoryparamsbase), ``"rows"``\> & [`GetPaymentHistoryParamsStartEnd`](index.QIWI.md#getpaymenthistoryparamsstartend)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:433](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L433)

___

### GetPaymentHistoryTotalResponse

Ƭ **GetPaymentHistoryTotalResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `incomingTotal` | [`MoneyAmount`](index.QIWI.md#moneyamount)[] | Данные о входящих платежах (пополнениях), отдельно по каждой валюте |
| `outgoingTotal` | [`MoneyAmount`](index.QIWI.md#moneyamount)[] | Данные об исходящих платежах, отдельно по каждой валюте |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:434](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L434)

___

### GetTransactionsHistoryResponse

Ƭ **GetTransactionsHistoryResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`Transaction`](index.QIWI.md#transaction)[] | Список объектов [Transaction](https://developer.qiwi.com/ru/qiwi-wallet-personal/#txnid). Число транзакций в списке меньше или равно параметру rows из запроса |
| `nextTxnDate` | [`Transaction`](index.QIWI.md#transaction)[``"date"``] \| ``null`` | Дата/время следующей транзакции в полном списке, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `nextTxnId` | [`Transaction`](index.QIWI.md#transaction)[``"txnId"``] \| ``null`` | ID следующей транзакции в полном списке |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:538](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L538)

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

[dist/cjs/apis/wallet/wallet.types.d.ts:280](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L280)

___

### IdentificationResponse

Ƭ **IdentificationResponse**: [`IdentificationBase`](index.QIWI.md#identificationbase) & { `id`: `number` ; `type`: [`SIMPLE`](../enums/index.QIWI.PersonIdentificationLevel.md#simple) \| [`VERIFIED`](../enums/index.QIWI.PersonIdentificationLevel.md#verified) \| [`FULL`](../enums/index.QIWI.PersonIdentificationLevel.md#full)  }

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:298](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L298)

___

### KeyPair

Ƭ **KeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `secretKey` | `string` |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1090](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1090)

___

### Limit

Ƭ **Limit**<`Cur`, `Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Cur` | extends keyof typeof [`Currency`](../enums/index.QIWI.Currency.md) = ``"RUB"`` |
| `Type` | extends [`LimitTypeAny`](index.QIWI.md#limittypeany) = [`LimitTypeAny`](index.QIWI.md#limittypeany) |

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

[dist/cjs/apis/wallet/wallet.types.d.ts:569](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L569)

___

### LimitTypeAny

Ƭ **LimitTypeAny**: [`LimitType`](../enums/index.QIWI.LimitType.md) \| [`LimitTypePlain`](index.QIWI.md#limittypeplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:568](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L568)

___

### LimitTypePlain

Ƭ **LimitTypePlain**: keyof typeof [`LimitType`](../enums/index.QIWI.LimitType.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:567](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L567)

___

### LimitsResponse

Ƭ **LimitsResponse**<`RequestedLimits`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RequestedLimits` | extends [`LimitTypeAny`](index.QIWI.md#limittypeany) = [`LimitTypeAny`](index.QIWI.md#limittypeany) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `limits` | { `KZ`: [`Limit`](index.QIWI.md#limit)<``"KZT"``, `RequestedLimits`\>[] ; `RU`: [`Limit`](index.QIWI.md#limit)<``"RUB"``, `RequestedLimits`\>[]  } | Описание лимитов |
| `limits.KZ` | [`Limit`](index.QIWI.md#limit)<``"KZT"``, `RequestedLimits`\>[] | - |
| `limits.RU` | [`Limit`](index.QIWI.md#limit)<``"RUB"``, `RequestedLimits`\>[] | Массив лимитов на операции |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:591](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L591)

___

### LockableField

Ƭ **LockableField**: ``"account"`` \| ``"comment"`` \| ``"sum"``

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:683](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L683)

___

### MoneyAmount

Ƭ **MoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма |
| `currency` | [`Currency`](../enums/index.QIWI.Currency.md) | Валюты |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L53)

___

### PayParameters

Ƭ **PayParameters**: `Object`

**`see`** [Документация по платежам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Номер счёта в указанной платёжной системе (у `provider`'а) Если он не задан, то следует указывать номер телефона(киви) получателя.  Записывается в `fields.account`, можно поставить `""`, если переопределяете в `fields` |
| `accountCurrency?` | [`Currency`](../enums/index.QIWI.Currency.md) | Валюта счёта, с которого производится платёж |
| `amount` | `number` | Сумма платежа в указанной валюте. Если валюта не указана, то в рублях. Советую округлять до 2ух знаков после , |
| `comment?` | `string` | Комментарий к платежу |
| `currency?` | [`Currency`](../enums/index.QIWI.Currency.md) | Валюта платежа |
| `fields?` | `Partial`<[`FreePayFields`](index.QIWI.md#freepayfields)\> & `Record`<`string`, `string`\> | Дополнительные параметры платежа. Обычно необходимо для [платежа по свободным реквизитам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#freepay) |
| `provider?` | `number` \| [`Recipients`](../enums/index.QIWI.Recipients.md) | Ака ID в доках, номер провайдера(платёжной системы) у QIWI  **`see`** [Recipients](../enums/wallet.Recipients.md)  **`default`** 99 |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:964](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L964)

___

### PaymentCommissionRequest

Ƭ **PaymentCommissionRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера) |
| `paymentMethod` | { `accountId`: [`Currency`](../enums/index.QIWI.Currency.md) ; `type`: ``"Account"``  } | Объект, определяющий обработку платежа процессингом QIWI Wallet |
| `paymentMethod.accountId` | [`Currency`](../enums/index.QIWI.Currency.md) | Идентификатор счета, только `643`. |
| `paymentMethod.type` | ``"Account"`` | Метод платежа, только `Account` |
| `purchaseTotals` | { `total`: [`MoneyAmount`](index.QIWI.md#moneyamount)  } | Объект с платежными реквизитами |
| `purchaseTotals.total` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Объект, содержащий данные о сумме платежа |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:636](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L636)

___

### PaymentHistorySourceAny

Ƭ **PaymentHistorySourceAny**: [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md) \| [`PaymentHistorySourcePlain`](index.QIWI.md#paymenthistorysourceplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:346](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L346)

___

### PaymentHistorySourcePlain

Ƭ **PaymentHistorySourcePlain**: keyof typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:345](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L345)

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
| `sum` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Копия объекта `sum` из платежного запроса |
| `terms` | `string` | Идентификатор провайдера, на которого был отправлен платеж |
| `transaction` | { `id`: `string` ; `state`: { `code`: ``"Accepted"``  }  } | - |
| `transaction.id` | `string` | - |
| `transaction.state` | { `code`: ``"Accepted"``  } | - |
| `transaction.state.code` | ``"Accepted"`` | - |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:656](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L656)

___

### PersonIdentificationLevelAny

Ƭ **PersonIdentificationLevelAny**: [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) \| [`PersonIdentificationLevelPlain`](index.QIWI.md#personidentificationlevelplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L17)

___

### PersonIdentificationLevelPlain

Ƭ **PersonIdentificationLevelPlain**: keyof typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L16)

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
| `contractInfo` | { `blocked`: `boolean` ; `contractId`: `number` ; `creationDate`: `string` ; `features`: `object`[] ; `identificationInfo`: { `bankAlias`: ``"QIWI"`` \| `string` ; `identificationLevel`: [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)  }[]  } | Информация о кошельке. Объект может отсутствовать, в зависимости от признака `contractInfoEnabled` в запросе. |
| `contractInfo.blocked` | `boolean` | Логический признак блокировки кошелька |
| `contractInfo.contractId` | `number` | Номер кошелька |
| `contractInfo.creationDate` | `string` | Дата/время создания QIWI Кошелька (через сайт/мобильное приложение, либо при первом пополнении, либо другим способом) |
| `contractInfo.features` | `object`[] | Служебная информация |
| `contractInfo.identificationInfo` | { `bankAlias`: ``"QIWI"`` \| `string` ; `identificationLevel`: [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)  }[] | Данные об [идентификации](https://qiwi.com/settings/identification#ru) пользователя. |
| `userInfo` | { `defaultPayCurrency`: [`Currency`](../enums/index.QIWI.Currency.md) ; `defaultPaySource`: `number` ; `email`: `string` ; `firstTxnId`: `string` ; `language`: `string` ; `operator`: `string` ; `phoneHash`: `string` ; `promoEnabled`: `string`  } | Прочие пользовательские данные. Объект может отсутствовать, в зависимости от признака `userInfoEnabled` в запросе. |
| `userInfo.defaultPayCurrency` | [`Currency`](../enums/index.QIWI.Currency.md) | Код валюты баланса кошелька по умолчанию (number-3 ISO-4217) |
| `userInfo.defaultPaySource` | `number` | Служебная информация |
| `userInfo.email` | `string` | E-mail пользователя |
| `userInfo.firstTxnId` | `string` | Номер первой транзакции после регистрации |
| `userInfo.language` | `string` | Служебная информация |
| `userInfo.operator` | `string` | Название мобильного оператора номера пользователя |
| `userInfo.phoneHash` | `string` | Служебная информация |
| `userInfo.promoEnabled` | `string` | Служебная информация |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:150](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L150)

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

[dist/cjs/apis/wallet/wallet.types.d.ts:745](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L745)

___

### ProviderInfo

Ƭ **ProviderInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | ``null`` \| `string` |
| `extras` | [`KeyValueObject`](index._internal_.md#keyvalueobject) |
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

[dist/cjs/apis/wallet/wallet.types.d.ts:1208](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1208)

___

### QuickPayParameters

Ƭ **QuickPayParameters**: `Omit`<[`PayParameters`](index.QIWI.md#payparameters), ``"provider"``\> & { `commissionPayer?`: [`CommissionPayer`](../enums/index.QIWI.CommissionPayer.md) ; `provider?`: `number` \| [`Recipients`](../enums/index.QIWI.Recipients.md) \| [`QuickPayRecipientsAny`](index.QIWI.md#quickpayrecipientsany)  }

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1016](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1016)

___

### QuickPayRecipientsAny

Ƭ **QuickPayRecipientsAny**: [`QuickPayRecipients`](../enums/index.QIWI.QuickPayRecipients.md) \| [`QuickPayRecipientsPlain`](index.QIWI.md#quickpayrecipientsplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1015](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1015)

___

### QuickPayRecipientsPlain

Ƭ **QuickPayRecipientsPlain**: ``"card"`` \| ``"phone"`` \| ``"qiwi"`` \| ``"yoomoney"``

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1014](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1014)

___

### Restrictions

Ƭ **Restrictions**: { `restrictionCode`: `string` ; `restrictionDescription`: `string`  }[]

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:315](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L315)

___

### StringOrNumber

Ƭ **StringOrNumber**: `string` \| `number`

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1089](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1089)

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

[dist/cjs/apis/wallet/wallet.types.d.ts:735](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L735)

___

### Transaction

Ƭ **Transaction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Для платежей - номер счета получателя. Для пополнений - номер отправителя, терминала или название агента пополнения кошелька |
| `comment` | `string` | Комментарий к платежу |
| `commission` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Данные о комиссии платежа |
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
| `status` | [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) | Статус платежа. Возможные значения:  `WAITING` - платеж проводится  `SUCCESS` - успешный платеж  `ERROR` - ошибка платежа. |
| `statusText` | `string` | Текстовое описание статуса платежа |
| `sum` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Данные о сумме платежа или пополнения. |
| `total` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Данные о фактической сумме платежа или пополнения. |
| `trmTxnId` | `string` | Клиентский ID транзакции |
| `txnId` | `number` | ID транзакции в сервисе QIWI Кошелек |
| `type` | [`IN`](../enums/index.QIWI.TransactionType.md#in) \| [`OUT`](../enums/index.QIWI.TransactionType.md#out) \| [`QIWI_CARD`](../enums/index.QIWI.TransactionType.md#qiwi_card) | Тип платежа. Возможные значения:  `IN` - пополнение,  `OUT` - платеж,  `QIWI_CARD` - платеж с карт QIWI (QVC, QVP). |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:443](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L443)

___

### TransactionStatusAny

Ƭ **TransactionStatusAny**: [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) \| [`TransactionStatusPlain`](index.QIWI.md#transactionstatusplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L40)

___

### TransactionStatusPlain

Ƭ **TransactionStatusPlain**: keyof typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:39](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L39)

___

### TransactionTypeAny

Ƭ **TransactionTypeAny**: [`TransactionType`](../enums/index.QIWI.TransactionType.md) \| [`TransactionTypePlain`](index.QIWI.md#transactiontypeplain)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L29)

___

### TransactionTypePlain

Ƭ **TransactionTypePlain**: keyof typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L28)

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
| `txnType` | [`TransactionType`](../enums/index.QIWI.TransactionType.md) | Тип транзакций, по которым отсылаются уведомления (IN - входящие, OUT - исходящие, BOTH - все) |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1020](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1020)

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
| `payment` | { `account`: `string` ; `comment`: `string` ; `commission`: [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` ; `date`: `string` ; `errorCode`: `number` ; `personId`: `number` ; `provider`: `number` \| [`Recipients`](../enums/index.QIWI.Recipients.md) ; `signFields`: `string` ; `status`: [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) ; `sum`: [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` ; `total`: [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` ; `txnId`: `number` ; `type`: [`IN`](../enums/index.QIWI.TransactionType.md#in) \| [`OUT`](../enums/index.QIWI.TransactionType.md#out)  } | Данные платежа |
| `payment.account` | `string` | - |
| `payment.comment` | `string` | - |
| `payment.commission` | [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` | Данные о комиссии для платежа или пополнения |
| `payment.date` | `string` | Для запросов истории платежей - Дата/время платежа, во временной зоне запроса (см. параметр `startDate`). Формат даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`  Для запросов данных о транзакции - Дата/время платежа, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `payment.errorCode` | `number` | [Код ошибки платежа](https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode) |
| `payment.personId` | `number` | Номер кошелька |
| `payment.provider` | `number` \| [`Recipients`](../enums/index.QIWI.Recipients.md) | ID провайдера QIWI Wallet |
| `payment.signFields` | `string` | Список полей объекта payment (через ,), которые хешируются алгоритмом HmacSHA256 для проверки уведомления (см. параметр `hash`) |
| `payment.status` | [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) | Статус платежа |
| `payment.sum` | [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` | Данные о сумме платежа или пополнения |
| `payment.total` | [`MoneyAmount`](index.QIWI.md#moneyamount) \| ``null`` | Данные об итоговой сумме платежа или пополнения |
| `payment.txnId` | `number` | ID транзакции в процессинге QIWI Wallet |
| `payment.type` | [`IN`](../enums/index.QIWI.TransactionType.md#in) \| [`OUT`](../enums/index.QIWI.TransactionType.md#out) | Тип платежа. Возможные значения:  `IN` - пополнение,  `OUT` - платеж. |
| `test` | `boolean` | Признак тестового сообщения |
| `version` | `string` | Версия API |

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1035](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1035)
