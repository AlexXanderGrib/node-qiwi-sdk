[QIWI SDK](../README.md) / [Modules](../modules.md) / apis/wallet

# Module: apis/wallet

## Table of contents

### References

- [NodeQiwi](apis_wallet.md#nodeqiwi)
- [Personal](apis_wallet.md#personal)
- [PersonalApiError](apis_wallet.md#personalapierror)
- [Wallet](apis_wallet.md#wallet)
- [WalletApiError](apis_wallet.md#walletapierror)
- [WalletApiErrorResponse](apis_wallet.md#walletapierrorresponse)
- [WalletApiOptions](apis_wallet.md#walletapioptions)
- [WalletApiShortError](apis_wallet.md#walletapishorterror)
- [WalletApiShortErrorResponse](apis_wallet.md#walletapishorterrorresponse)
- [WalletAuthorizationError](apis_wallet.md#walletauthorizationerror)
- [WalletCompat](apis_wallet.md#walletcompat)
- [\_WalletCompat](apis_wallet.md#_walletcompat)
- [\_WalletCompatNodeQiwi](apis_wallet.md#_walletcompatnodeqiwi)

### Enumerations

- [CardActionStatus](../enums/apis_wallet.CardActionStatus.md)
- [CardStatus](../enums/apis_wallet.CardStatus.md)
- [ChequeFormat](../enums/apis_wallet.ChequeFormat.md)
- [CommissionPayer](../enums/apis_wallet.CommissionPayer.md)
- [Currency](../enums/apis_wallet.Currency.md)
- [LimitType](../enums/apis_wallet.LimitType.md)
- [PaymentHistorySource](../enums/apis_wallet.PaymentHistorySource.md)
- [PersonIdentificationLevel](../enums/apis_wallet.PersonIdentificationLevel.md)
- [QuickPayRecipients](../enums/apis_wallet.QuickPayRecipients.md)
- [Recipients](../enums/apis_wallet.Recipients.md)
- [TransactionStatus](../enums/apis_wallet.TransactionStatus.md)
- [TransactionType](../enums/apis_wallet.TransactionType.md)

### Interfaces

- [Bill](../interfaces/apis_wallet.Bill.md)
- [BillProvider](../interfaces/apis_wallet.BillProvider.md)

### Type Aliases

- [Account](apis_wallet.md#account)
- [AccountOffer](apis_wallet.md#accountoffer)
- [BillPayResponse](apis_wallet.md#billpayresponse)
- [BillsGetParameters](apis_wallet.md#billsgetparameters)
- [CardActionStatusAny](apis_wallet.md#cardactionstatusany)
- [CardActionStatusPlain](apis_wallet.md#cardactionstatusplain)
- [CardRenameResponse](apis_wallet.md#cardrenameresponse)
- [CardRequisitesResponse](apis_wallet.md#cardrequisitesresponse)
- [CardResponse](apis_wallet.md#cardresponse)
- [CardStatusAny](apis_wallet.md#cardstatusany)
- [CardStatusPlain](apis_wallet.md#cardstatusplain)
- [CardUnblockResponse](apis_wallet.md#cardunblockresponse)
- [ChequeFormatAny](apis_wallet.md#chequeformatany)
- [ChequeFormatPlain](apis_wallet.md#chequeformatplain)
- [CodeResponse](apis_wallet.md#coderesponse)
- [CommissionPayerAny](apis_wallet.md#commissionpayerany)
- [CommissionPayerPlain](apis_wallet.md#commissionpayerplain)
- [CurrencyPlain](apis_wallet.md#currencyplain)
- [FormUrlOptions](apis_wallet.md#formurloptions)
- [FreePayFields](apis_wallet.md#freepayfields)
- [GetAccountOffersResponse](apis_wallet.md#getaccountoffersresponse)
- [GetAccountsResponse](apis_wallet.md#getaccountsresponse)
- [GetPaymentHistoryParameters](apis_wallet.md#getpaymenthistoryparameters)
- [GetPaymentHistoryParametersBase](apis_wallet.md#getpaymenthistoryparametersbase)
- [GetPaymentHistoryParametersStartEnd](apis_wallet.md#getpaymenthistoryparametersstartend)
- [GetPaymentHistoryTotalParameters](apis_wallet.md#getpaymenthistorytotalparameters)
- [GetPaymentHistoryTotalResponse](apis_wallet.md#getpaymenthistorytotalresponse)
- [GetTransactionsHistoryResponse](apis_wallet.md#gettransactionshistoryresponse)
- [IdentificationBase](apis_wallet.md#identificationbase)
- [IdentificationResponse](apis_wallet.md#identificationresponse)
- [KeyPair](apis_wallet.md#keypair)
- [Limit](apis_wallet.md#limit)
- [LimitTypeAny](apis_wallet.md#limittypeany)
- [LimitTypePlain](apis_wallet.md#limittypeplain)
- [LimitsResponse](apis_wallet.md#limitsresponse)
- [LockableField](apis_wallet.md#lockablefield)
- [MoneyAmount](apis_wallet.md#moneyamount)
- [NicknameData](apis_wallet.md#nicknamedata)
- [PayParameters](apis_wallet.md#payparameters)
- [PaymentCommissionRequest](apis_wallet.md#paymentcommissionrequest)
- [PaymentHistorySourceAny](apis_wallet.md#paymenthistorysourceany)
- [PaymentHistorySourcePlain](apis_wallet.md#paymenthistorysourceplain)
- [PaymentResponse](apis_wallet.md#paymentresponse)
- [PersonIdentificationLevelAny](apis_wallet.md#personidentificationlevelany)
- [PersonIdentificationLevelPlain](apis_wallet.md#personidentificationlevelplain)
- [PersonProfile](apis_wallet.md#personprofile)
- [PrettyTokenResponse](apis_wallet.md#prettytokenresponse)
- [ProviderInfo](apis_wallet.md#providerinfo)
- [QuickPayParameters](apis_wallet.md#quickpayparameters)
- [QuickPayRecipientsAny](apis_wallet.md#quickpayrecipientsany)
- [QuickPayRecipientsPlain](apis_wallet.md#quickpayrecipientsplain)
- [Rate](apis_wallet.md#rate)
- [Restrictions](apis_wallet.md#restrictions)
- [ShortTokenResponse](apis_wallet.md#shorttokenresponse)
- [StringOrNumber](apis_wallet.md#stringornumber)
- [TokenResponse](apis_wallet.md#tokenresponse)
- [Transaction](apis_wallet.md#transaction)
- [TransactionStatusAny](apis_wallet.md#transactionstatusany)
- [TransactionStatusPlain](apis_wallet.md#transactionstatusplain)
- [TransactionTypeAny](apis_wallet.md#transactiontypeany)
- [TransactionTypePlain](apis_wallet.md#transactiontypeplain)
- [WebHookInfo](apis_wallet.md#webhookinfo)
- [WebhookTransaction](apis_wallet.md#webhooktransaction)

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

## Type Aliases

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

[apis/wallet/wallet.types.ts:725](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L725)

___

### AccountOffer

Ƭ **AccountOffer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета |
| `currency` | [`Currency`](../enums/index.QIWI.Currency.md) | ID валюты счета |

#### Defined in

[apis/wallet/wallet.types.ts:766](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L766)

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

[apis/wallet/wallet.types.ts:1469](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1469)

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

[apis/wallet/wallet.types.ts:1429](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1429)

___

### CardActionStatusAny

Ƭ **CardActionStatusAny**: [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md) \| [`CardActionStatusPlain`](index.QIWI.md#cardactionstatusplain)

#### Defined in

[apis/wallet/wallet.types.ts:1071](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1071)

___

### CardActionStatusPlain

Ƭ **CardActionStatusPlain**: keyof typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md)

#### Defined in

[apis/wallet/wallet.types.ts:1070](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1070)

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

[apis/wallet/wallet.types.ts:1095](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1095)

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

[apis/wallet/wallet.types.ts:1080](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1080)

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
| `info.price` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Тариф карты: - `amount` - Стоимость обслуживания - `currency` - Код валюты баланса (по ISO) |
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

[apis/wallet/wallet.types.ts:955](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L955)

___

### CardStatusAny

Ƭ **CardStatusAny**: [`CardStatus`](../enums/index.QIWI.CardStatus.md) \| [`CardStatusPlain`](index.QIWI.md#cardstatusplain)

#### Defined in

[apis/wallet/wallet.types.ts:932](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L932)

___

### CardStatusPlain

Ƭ **CardStatusPlain**: keyof typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md)

#### Defined in

[apis/wallet/wallet.types.ts:931](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L931)

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

[apis/wallet/wallet.types.ts:1073](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1073)

___

### ChequeFormatAny

Ƭ **ChequeFormatAny**: [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) \| [`ChequeFormatPlain`](index.QIWI.md#chequeformatplain)

#### Defined in

[apis/wallet/wallet.types.ts:84](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L84)

___

### ChequeFormatPlain

Ƭ **ChequeFormatPlain**: keyof typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Defined in

[apis/wallet/wallet.types.ts:83](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L83)

___

### CodeResponse

Ƭ **CodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Defined in

[apis/wallet/wallet.types.ts:886](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L886)

___

### CommissionPayerAny

Ƭ **CommissionPayerAny**: [`CommissionPayer`](../enums/index.QIWI.CommissionPayer.md) \| [`CommissionPayerPlain`](index.QIWI.md#commissionpayerplain)

#### Defined in

[apis/wallet/wallet.types.ts:1245](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1245)

___

### CommissionPayerPlain

Ƭ **CommissionPayerPlain**: keyof typeof [`CommissionPayer`](../enums/index.QIWI.CommissionPayer.md)

#### Defined in

[apis/wallet/wallet.types.ts:1244](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1244)

___

### CurrencyPlain

Ƭ **CurrencyPlain**: keyof typeof [`Currency`](../enums/index.QIWI.Currency.md)

#### Defined in

[apis/wallet/wallet.types.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L68)

___

### FormUrlOptions

Ƭ **FormUrlOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string` | Формат совпадает с форматом параметра `fields.account` при оплате соответствующих провайдеров: для провайдера `99` - номер кошелька получателя; для провайдеров сотовой связи - номер мобильного телефона для пополнения (без префикса 8); для провайдеров перевода на карту - номер банковской карты получателя (без пробелов), для других провайдеров - идентификатор пользователя. Для провайдера `99999` указывается никнейм или номер кошелька получателя (задайте соответствующее значение параметра `extra['accountType']`). |
| `accountType?` | `string` | **Параметр используется только для ID=99999**. Значение определяет перевод на QIWI кошелек по никнейму или по номеру кошелька. Если вы не хотите, чтобы пользователь видел номер вашего кошелька на форме, используйте перевод по никнейму.  - `phone` - для перевода по номеру - `nickname` - для перевода по никнейму. |
| `amount?` | `number` | Сумма платежа в рублях |
| `blocked?` | [`LockableField`](index.QIWI.md#lockablefield)[] | Признак неактивного поля формы. Пользователь не сможет менять значение данного поля. Каждый параметр задает соответствующее поле формы и нумеруется начиная с нуля (blocked[0], blocked[1]  и т.д.). Если не указан, пользователь сможет изменить все поля формы.  Допустимые значения: - `sum` - поле "сумма платежа", - `account` - поле "номер счета/телефона/карты", - `comment` - поле "комментарий".  Пример (неактивное поле суммы платежа): `blocked[0]=sum` |
| `comment?` | `string` | Комментарий. **Параметр используется только для `ID=99`** |
| `custom?` | `Record`<`string`, `unknown`\> | - |

#### Defined in

[apis/wallet/wallet.types.ts:836](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L836)

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

[apis/wallet/wallet.types.ts:1105](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1105)

___

### GetAccountOffersResponse

Ƭ **GetAccountOffersResponse**: [`AccountOffer`](index.QIWI.md#accountoffer)[]

#### Defined in

[apis/wallet/wallet.types.ts:774](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L774)

___

### GetAccountsResponse

Ƭ **GetAccountsResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | [`Account`](index.QIWI.md#account)[] | Массив балансов |

#### Defined in

[apis/wallet/wallet.types.ts:761](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L761)

___

### GetPaymentHistoryParameters

Ƭ **GetPaymentHistoryParameters**: [`GetPaymentHistoryParametersBase`](index.QIWI.md#getpaymenthistoryparametersbase) \| [`GetPaymentHistoryParametersBase`](index.QIWI.md#getpaymenthistoryparametersbase) & [`GetPaymentHistoryParametersStartEnd`](index.QIWI.md#getpaymenthistoryparametersstartend) \| [`GetPaymentHistoryParametersBase`](index.QIWI.md#getpaymenthistoryparametersbase) & { `nextTxnDate`: `string` ; `nextTxnId`: `number`  }

#### Defined in

[apis/wallet/wallet.types.ts:487](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L487)

___

### GetPaymentHistoryParametersBase

Ƭ **GetPaymentHistoryParametersBase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation?` | [`TransactionTypeAny`](index.QIWI.md#transactiontypeany) | Тип операций в отчете, для отбора. Допустимые значения: - `ALL` - все операции, - `IN` - только пополнения, - `OUT` - только платежи, - `QIWI_CARD` - только платежи по картам QIWI (QVC, QVP).  По умолчанию `ALL`  **`Default`**  "ALL" |
| `qvxCardId?` | [`StringOrNumber`](index.QIWI.md#stringornumber) | - |
| `rows` | `number` | Число платежей в ответе, для разбивки отчета на страницы. Целое число от 1 до 50. Запрос возвращает указанное число платежей в обратном хронологическом порядке, начиная от текущей даты или даты в параметре `startDate` |
| `sources?` | [`PaymentHistorySourceAny`](index.QIWI.md#paymenthistorysourceany)[] | Список источников платежа, для фильтра. Каждый источник нумеруется, начиная с нуля (`sources[0]`, `sources[1]` и т.д.).  Допустимые значения: - `QW_RUB` - рублевый счет кошелька, - `QW_USD` - счет кошелька в долларах, - `QW_EUR` - счет кошелька в евро, - `CARD` - привязанные и непривязанные к кошельку банковские карты, - `MK` - счет мобильного оператора. Если не указан, учитываются все источники |

#### Defined in

[apis/wallet/wallet.types.ts:417](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L417)

___

### GetPaymentHistoryParametersStartEnd

Ƭ **GetPaymentHistoryParametersStartEnd**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `startDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `startDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |
| `startDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `endDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `endDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |

#### Defined in

[apis/wallet/wallet.types.ts:457](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L457)

___

### GetPaymentHistoryTotalParameters

Ƭ **GetPaymentHistoryTotalParameters**: `Omit`<[`GetPaymentHistoryParametersBase`](index.QIWI.md#getpaymenthistoryparametersbase), ``"rows"``\> & [`GetPaymentHistoryParametersStartEnd`](index.QIWI.md#getpaymenthistoryparametersstartend)

#### Defined in

[apis/wallet/wallet.types.ts:508](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L508)

___

### GetPaymentHistoryTotalResponse

Ƭ **GetPaymentHistoryTotalResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `incomingTotal` | [`MoneyAmount`](index.QIWI.md#moneyamount)[] | Данные о входящих платежах (пополнениях), отдельно по каждой валюте |
| `outgoingTotal` | [`MoneyAmount`](index.QIWI.md#moneyamount)[] | Данные об исходящих платежах, отдельно по каждой валюте |

#### Defined in

[apis/wallet/wallet.types.ts:514](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L514)

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

[apis/wallet/wallet.types.ts:643](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L643)

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

[apis/wallet/wallet.types.ts:330](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L330)

___

### IdentificationResponse

Ƭ **IdentificationResponse**: [`IdentificationBase`](index.QIWI.md#identificationbase) & { `id`: `number` ; `type`: [`SIMPLE`](../enums/index.QIWI.PersonIdentificationLevel.md#simple) \| [`VERIFIED`](../enums/index.QIWI.PersonIdentificationLevel.md#verified) \| [`FULL`](../enums/index.QIWI.PersonIdentificationLevel.md#full)  }

#### Defined in

[apis/wallet/wallet.types.ts:356](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L356)

___

### KeyPair

Ƭ **KeyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `secretKey` | `string` |

#### Defined in

[apis/wallet/wallet.types.ts:1345](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1345)

___

### Limit

Ƭ **Limit**<`Current`, `Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Current` | extends keyof typeof [`Currency`](../enums/index.QIWI.Currency.md) = ``"RUB"`` |
| `Type` | extends [`LimitTypeAny`](index.QIWI.md#limittypeany) = [`LimitTypeAny`](index.QIWI.md#limittypeany) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Current` | Валюта операций |
| `interval` | { `dateFrom`: `string` ; `dateTill`: `string`  } | Сведения о периоде действия лимита |
| `interval.dateFrom` | `string` | Начало периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` |
| `interval.dateTill` | `string` | Конец периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` |
| `max` | `number` | Значение лимита |
| `rest` | `number` | Остаток лимита, который можно потратить в данный период (период задается в параметре `interval`) |
| `spent` | `number` | Сумма, потраченная по данным операциям |
| `type` | `Type` | Тип операций, на которые действует данный лимит |

#### Defined in

[apis/wallet/wallet.types.ts:684](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L684)

___

### LimitTypeAny

Ƭ **LimitTypeAny**: [`LimitType`](../enums/index.QIWI.LimitType.md) \| [`LimitTypePlain`](index.QIWI.md#limittypeplain)

#### Defined in

[apis/wallet/wallet.types.ts:682](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L682)

___

### LimitTypePlain

Ƭ **LimitTypePlain**: keyof typeof [`LimitType`](../enums/index.QIWI.LimitType.md)

#### Defined in

[apis/wallet/wallet.types.ts:681](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L681)

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

[apis/wallet/wallet.types.ts:716](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L716)

___

### LockableField

Ƭ **LockableField**: ``"account"`` \| ``"comment"`` \| ``"sum"``

#### Defined in

[apis/wallet/wallet.types.ts:834](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L834)

___

### MoneyAmount

Ƭ **MoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма |
| `currency` | [`Currency`](../enums/index.QIWI.Currency.md) | Валюты |

#### Defined in

[apis/wallet/wallet.types.ts:70](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L70)

___

### NicknameData

Ƭ **NicknameData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canChange` | `boolean` |
| `canUse` | `boolean` |
| `description` | `string` |
| `nickname` | `string` |

#### Defined in

[apis/wallet/wallet.types.ts:1499](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1499)

___

### PayParameters

Ƭ **PayParameters**: `Object`

**`See`**

[Документация по платежам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Номер счёта в указанной платёжной системе (у `provider`'а) Если он не задан, то следует указывать номер телефона(киви) получателя.  Записывается в `fields.account`, можно поставить `""`, если переопределяете в `fields` |
| `accountCurrency?` | [`Currency`](../enums/index.QIWI.Currency.md) | Валюта счёта, с которого производится платёж |
| `amount` | `number` | Сумма платежа в указанной валюте. Если валюта не указана, то в рублях. Советую округлять до 2ух знаков после , |
| `comment?` | `string` | Комментарий к платежу |
| `currency?` | [`Currency`](../enums/index.QIWI.Currency.md) | Валюта платежа |
| `fields?` | `Partial`<[`FreePayFields`](index.QIWI.md#freepayfields)\> & `Record`<`string`, `string`\> | Дополнительные параметры платежа. Обычно необходимо для [платежа по свободным реквизитам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#freepay) |
| `provider?` | `number` \| [`Recipients`](../enums/index.QIWI.Recipients.md) | Ака ID в доках, номер провайдера(платёжной системы) у QIWI  **`See`**  [Recipients](../enums/apis_wallet.Recipients.md)  **`Default`**  99 |

#### Defined in

[apis/wallet/wallet.types.ts:1192](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1192)

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

[apis/wallet/wallet.types.ts:776](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L776)

___

### PaymentHistorySourceAny

Ƭ **PaymentHistorySourceAny**: [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md) \| [`PaymentHistorySourcePlain`](index.QIWI.md#paymenthistorysourceplain)

#### Defined in

[apis/wallet/wallet.types.ts:413](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L413)

___

### PaymentHistorySourcePlain

Ƭ **PaymentHistorySourcePlain**: keyof typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md)

#### Defined in

[apis/wallet/wallet.types.ts:412](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L412)

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

[apis/wallet/wallet.types.ts:800](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L800)

___

### PersonIdentificationLevelAny

Ƭ **PersonIdentificationLevelAny**: [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) \| [`PersonIdentificationLevelPlain`](index.QIWI.md#personidentificationlevelplain)

#### Defined in

[apis/wallet/wallet.types.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L18)

___

### PersonIdentificationLevelPlain

Ƭ **PersonIdentificationLevelPlain**: keyof typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Defined in

[apis/wallet/wallet.types.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L17)

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

[apis/wallet/wallet.types.ts:183](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L183)

___

### PrettyTokenResponse

Ƭ **PrettyTokenResponse**<`C`\>: [`ShortTokenResponse`](index.QIWI.md#shorttokenresponse) & { `client`: `C`  }

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

[apis/wallet/wallet.types.ts:909](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L909)

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

[apis/wallet/wallet.types.ts:1485](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1485)

___

### QuickPayParameters

Ƭ **QuickPayParameters**: `Omit`<[`PayParameters`](index.QIWI.md#payparameters), ``"provider"``\> & { `commissionPayer?`: [`CommissionPayer`](../enums/index.QIWI.CommissionPayer.md) ; `provider?`: `number` \| [`Recipients`](../enums/index.QIWI.Recipients.md) \| [`QuickPayRecipientsAny`](index.QIWI.md#quickpayrecipientsany)  }

#### Defined in

[apis/wallet/wallet.types.ts:1255](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1255)

___

### QuickPayRecipientsAny

Ƭ **QuickPayRecipientsAny**: [`QuickPayRecipients`](../enums/index.QIWI.QuickPayRecipients.md) \| [`QuickPayRecipientsPlain`](index.QIWI.md#quickpayrecipientsplain)

#### Defined in

[apis/wallet/wallet.types.ts:1253](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1253)

___

### QuickPayRecipientsPlain

Ƭ **QuickPayRecipientsPlain**: ``"card"`` \| ``"phone"`` \| ``"qiwi"`` \| ``"yoomoney"``

#### Defined in

[apis/wallet/wallet.types.ts:1252](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1252)

___

### Rate

Ƭ **Rate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `from` | [`Currency`](../enums/index.QIWI.Currency.md) |
| `rate` | `number` |
| `to` | [`Currency`](../enums/index.QIWI.Currency.md) |

#### Defined in

[apis/wallet/wallet.types.ts:1506](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1506)

___

### Restrictions

Ƭ **Restrictions**: { `restrictionCode`: `string` ; `restrictionDescription`: `string`  }[]

#### Defined in

[apis/wallet/wallet.types.ts:375](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L375)

___

### ShortTokenResponse

Ƭ **ShortTokenResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiry` | `number` |
| `token` | `string` |

#### Defined in

[apis/wallet/wallet.types.ts:904](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L904)

___

### StringOrNumber

Ƭ **StringOrNumber**: `string` \| `number`

#### Defined in

[apis/wallet/wallet.types.ts:1343](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1343)

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

[apis/wallet/wallet.types.ts:890](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L890)

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
| `status` | [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) | Статус платежа. Возможные значения: - `WAITING` - платеж проводится - `SUCCESS` - успешный платеж - `ERROR` - ошибка платежа. |
| `statusText` | `string` | Текстовое описание статуса платежа |
| `sum` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Данные о сумме платежа или пополнения. |
| `total` | [`MoneyAmount`](index.QIWI.md#moneyamount) | Данные о фактической сумме платежа или пополнения. |
| `trmTxnId` | `string` | Клиентский ID транзакции |
| `txnId` | `number` | ID транзакции в сервисе QIWI Кошелек |
| `type` | [`IN`](../enums/index.QIWI.TransactionType.md#in) \| [`OUT`](../enums/index.QIWI.TransactionType.md#out) \| [`QIWI_CARD`](../enums/index.QIWI.TransactionType.md#qiwi_card) | Тип платежа. Возможные значения: - `IN` - пополнение, - `OUT` - платеж, - `QIWI_CARD` - платеж с карт QIWI (QVC, QVP). |

#### Defined in

[apis/wallet/wallet.types.ts:525](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L525)

___

### TransactionStatusAny

Ƭ **TransactionStatusAny**: [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) \| [`TransactionStatusPlain`](index.QIWI.md#transactionstatusplain)

#### Defined in

[apis/wallet/wallet.types.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L47)

___

### TransactionStatusPlain

Ƭ **TransactionStatusPlain**: keyof typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md)

#### Defined in

[apis/wallet/wallet.types.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L46)

___

### TransactionTypeAny

Ƭ **TransactionTypeAny**: [`TransactionType`](../enums/index.QIWI.TransactionType.md) \| [`TransactionTypePlain`](index.QIWI.md#transactiontypeplain)

#### Defined in

[apis/wallet/wallet.types.ts:34](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L34)

___

### TransactionTypePlain

Ƭ **TransactionTypePlain**: keyof typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md)

#### Defined in

[apis/wallet/wallet.types.ts:33](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L33)

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

[apis/wallet/wallet.types.ts:1260](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1260)

___

### WebhookTransaction

Ƭ **WebhookTransaction**: `Object`

[Документация по вебхукам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_format)

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
| `payment.type` | [`IN`](../enums/index.QIWI.TransactionType.md#in) \| [`OUT`](../enums/index.QIWI.TransactionType.md#out) | Тип платежа. Возможные значения: - `IN` - пополнение, - `OUT` - платеж. |
| `test` | `boolean` | Признак тестового сообщения |
| `version` | `string` | Версия API |

#### Defined in

[apis/wallet/wallet.types.ts:1274](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/wallet.types.ts#L1274)
