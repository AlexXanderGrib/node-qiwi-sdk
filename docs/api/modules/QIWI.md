[qiwi-sdk](../README.md) / [Exports](../modules.md) / QIWI

# Namespace: QIWI

## Table of contents

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
- [TransactionStatus](../enums/QIWI.TransactionStatus.md)
- [TransactionType](../enums/QIWI.TransactionType.md)

### Classes

- [Detector](../classes/QIWI.Detector.md)
- [DetectorError](../classes/QIWI.DetectorError.md)
- [P2P](../classes/QIWI.P2P.md)
- [P2PNotificationError](../classes/QIWI.P2PNotificationError.md)
- [P2PPaymentError](../classes/QIWI.P2PPaymentError.md)
- [Personal](../classes/QIWI.Personal.md)
- [PersonalApiError](../classes/QIWI.PersonalApiError.md)

### Interfaces

- [IP2PApi](../interfaces/QIWI.IP2PApi.md)
- [IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md)

### Type aliases

- [Account](QIWI.md#account)
- [AccountOffer](QIWI.md#accountoffer)
- [BillCreationRequest](QIWI.md#billcreationrequest)
- [BillCurrencyAny](QIWI.md#billcurrencyany)
- [BillCurrencyPlain](QIWI.md#billcurrencyplain)
- [BillError](QIWI.md#billerror)
- [BillFormParams](QIWI.md#billformparams)
- [BillStatusAny](QIWI.md#billstatusany)
- [BillStatusData](QIWI.md#billstatusdata)
- [BillStatusPlain](QIWI.md#billstatusplain)
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
- [CurrencyAny](QIWI.md#currencyany)
- [CurrencyPlain](QIWI.md#currencyplain)
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
- [Limit](QIWI.md#limit)
- [LimitTypeAny](QIWI.md#limittypeany)
- [LimitTypePlain](QIWI.md#limittypeplain)
- [LimitsResponse](QIWI.md#limitsresponse)
- [LockableField](QIWI.md#lockablefield)
- [MoneyAmount](QIWI.md#moneyamount)
- [Pay2Params](QIWI.md#pay2params)
- [PayUrlPatchParams](QIWI.md#payurlpatchparams)
- [PaymentCommissionRequest](QIWI.md#paymentcommissionrequest)
- [PaymentHistorySourceAny](QIWI.md#paymenthistorysourceany)
- [PaymentHistorySourcePlain](QIWI.md#paymenthistorysourceplain)
- [PaymentResponse](QIWI.md#paymentresponse)
- [PersonIdentificationLevelAny](QIWI.md#personidentificationlevelany)
- [PersonIdentificationLevelPlain](QIWI.md#personidentificationlevelplain)
- [PersonProfile](QIWI.md#personprofile)
- [PrettyTokenResponse](QIWI.md#prettytokenresponse)
- [Restrictions](QIWI.md#restrictions)
- [TokenResponse](QIWI.md#tokenresponse)
- [Transaction](QIWI.md#transaction-1)
- [TransactionStatusAny](QIWI.md#transactionstatusany)
- [TransactionStatusPlain](QIWI.md#transactionstatusplain)
- [TransactionTypeAny](QIWI.md#transactiontypeany)
- [TransactionTypePlain](QIWI.md#transactiontypeplain)
- [WebHookInfo](QIWI.md#webhookinfo)
- [WebhookTransaction](QIWI.md#webhooktransaction)

### Functions

- [createQS](QIWI.md#createqs)
- [formatDate](QIWI.md#formatdate)
- [parseQS](QIWI.md#parseqs)

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

[src/services/personal.types.ts:733](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L733)

___

### AccountOffer

Ƭ **AccountOffer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета |
| `currency` | [`Currency`](../enums/QIWI.Currency.md) | ID валюты счета |

#### Defined in

[src/services/personal.types.ts:774](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L774)

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
| `expirationDateTime` | `string` | Дата, до которой счет будет доступен для оплаты. Если перевод не будет совершен до этой даты, ему присваивается финальный статус `EXPIRED` и последующий перевод станет невозможен.  **`example`** "2020-07-10T09:02:00+03:00" |

#### Defined in

[src/services/p2p.types.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L24)

___

### BillCurrencyAny

Ƭ **BillCurrencyAny**: [`BillCurrency`](../enums/QIWI.BillCurrency.md) \| [`BillCurrencyPlain`](QIWI.md#billcurrencyplain)

#### Defined in

[src/services/p2p.types.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L22)

___

### BillCurrencyPlain

Ƭ **BillCurrencyPlain**: keyof typeof [`BillCurrency`](../enums/QIWI.BillCurrency.md)

#### Defined in

[src/services/p2p.types.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L21)

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

[src/services/p2p.types.ts:126](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L126)

___

### BillFormParams

Ƭ **BillFormParams**: { `amount`: `string` \| `number` ; `billId`: `string` ; `comment?`: `string` ; `customFields?`: `Record`<`string`, `string`\> ; `lifetime?`: `string` ; `publicKey`: `string` ; `successUrl?`: `string`  } & [`BillCreationRequest`](QIWI.md#billcreationrequest)[``"customer"``]

#### Defined in

[src/services/p2p.types.ts:141](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L141)

___

### BillStatusAny

Ƭ **BillStatusAny**: [`BillStatus`](../enums/QIWI.BillStatus.md) \| [`BillStatusPlain`](QIWI.md#billstatusplain)

#### Defined in

[src/services/p2p.types.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L14)

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

[src/services/p2p.types.ts:81](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L81)

___

### BillStatusPlain

Ƭ **BillStatusPlain**: keyof typeof [`BillStatus`](../enums/QIWI.BillStatus.md)

#### Defined in

[src/services/p2p.types.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L13)

___

### CardActionStatusAny

Ƭ **CardActionStatusAny**: [`CardActionStatus`](../enums/QIWI.CardActionStatus.md) \| [`CardActionStatusPlain`](QIWI.md#cardactionstatusplain)

#### Defined in

[src/services/personal.types.ts:1092](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1092)

___

### CardActionStatusPlain

Ƭ **CardActionStatusPlain**: keyof typeof [`CardActionStatus`](../enums/QIWI.CardActionStatus.md)

#### Defined in

[src/services/personal.types.ts:1091](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1091)

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

[src/services/personal.types.ts:1116](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1116)

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

[src/services/personal.types.ts:1101](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1101)

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

[src/services/personal.types.ts:975](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L975)

___

### CardStatusAny

Ƭ **CardStatusAny**: [`CardStatus`](../enums/QIWI.CardStatus.md) \| [`CardStatusPlain`](QIWI.md#cardstatusplain)

#### Defined in

[src/services/personal.types.ts:952](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L952)

___

### CardStatusPlain

Ƭ **CardStatusPlain**: keyof typeof [`CardStatus`](../enums/QIWI.CardStatus.md)

#### Defined in

[src/services/personal.types.ts:951](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L951)

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

[src/services/personal.types.ts:1094](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1094)

___

### ChequeFormatAny

Ƭ **ChequeFormatAny**: [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) \| [`ChequeFormatPlain`](QIWI.md#chequeformatplain)

#### Defined in

[src/services/personal.types.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L79)

___

### ChequeFormatPlain

Ƭ **ChequeFormatPlain**: keyof typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md)

#### Defined in

[src/services/personal.types.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L78)

___

### CodeResponse

Ƭ **CodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Defined in

[src/services/personal.types.ts:909](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L909)

___

### CurrencyAny

Ƭ **CurrencyAny**: [`Currency`](../enums/QIWI.Currency.md) \| [`CurrencyPlain`](QIWI.md#currencyplain)

#### Defined in

[src/services/personal.types.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L63)

___

### CurrencyPlain

Ƭ **CurrencyPlain**: keyof typeof [`Currency`](../enums/QIWI.Currency.md)

#### Defined in

[src/services/personal.types.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L62)

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

[src/services/personal.types.ts:855](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L855)

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

[src/services/personal.types.ts:1126](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1126)

___

### GetAccountOffersResponse

Ƭ **GetAccountOffersResponse**: [`AccountOffer`](QIWI.md#accountoffer)[]

#### Defined in

[src/services/personal.types.ts:782](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L782)

___

### GetAccountsResponse

Ƭ **GetAccountsResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | [`Account`](QIWI.md#account)[] | Массив балансов |

#### Defined in

[src/services/personal.types.ts:769](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L769)

___

### GetPaymentHistoryParams

Ƭ **GetPaymentHistoryParams**: [`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase) \| [`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase) & [`GetPaymentHistoryParamsStartEnd`](QIWI.md#getpaymenthistoryparamsstartend) \| [`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase) & { `nextTxnDate`: `string` ; `nextTxnId`: `number`  }

#### Defined in

[src/services/personal.types.ts:489](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L489)

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

[src/services/personal.types.ts:414](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L414)

___

### GetPaymentHistoryParamsStartEnd

Ƭ **GetPaymentHistoryParamsStartEnd**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `startDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `startDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |
| `startDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `endDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `endDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |

#### Defined in

[src/services/personal.types.ts:459](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L459)

___

### GetPaymentHistoryTotalParams

Ƭ **GetPaymentHistoryTotalParams**: `Omit`<[`GetPaymentHistoryParamsBase`](QIWI.md#getpaymenthistoryparamsbase), ``"rows"``\> & [`GetPaymentHistoryParamsStartEnd`](QIWI.md#getpaymenthistoryparamsstartend)

#### Defined in

[src/services/personal.types.ts:510](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L510)

___

### GetPaymentHistoryTotalResponse

Ƭ **GetPaymentHistoryTotalResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `incomingTotal` | [`MoneyAmount`](QIWI.md#moneyamount)[] | Данные о входящих платежах (пополнениях), отдельно по каждой валюте |
| `outgoingTotal` | [`MoneyAmount`](QIWI.md#moneyamount)[] | Данные об исходящих платежах, отдельно по каждой валюте |

#### Defined in

[src/services/personal.types.ts:516](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L516)

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

[src/services/personal.types.ts:651](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L651)

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

[src/services/personal.types.ts:328](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L328)

___

### IdentificationResponse

Ƭ **IdentificationResponse**: [`IdentificationBase`](QIWI.md#identificationbase) & { `id`: `number` ; `type`: [`SIMPLE`](../enums/QIWI.PersonIdentificationLevel.md#simple) \| [`VERIFIED`](../enums/QIWI.PersonIdentificationLevel.md#verified) \| [`FULL`](../enums/QIWI.PersonIdentificationLevel.md#full)  }

#### Defined in

[src/services/personal.types.ts:354](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L354)

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

[src/services/personal.types.ts:692](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L692)

___

### LimitTypeAny

Ƭ **LimitTypeAny**: [`LimitType`](../enums/QIWI.LimitType.md) \| [`LimitTypePlain`](QIWI.md#limittypeplain)

#### Defined in

[src/services/personal.types.ts:690](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L690)

___

### LimitTypePlain

Ƭ **LimitTypePlain**: keyof typeof [`LimitType`](../enums/QIWI.LimitType.md)

#### Defined in

[src/services/personal.types.ts:689](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L689)

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

[src/services/personal.types.ts:724](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L724)

___

### LockableField

Ƭ **LockableField**: ``"account"`` \| ``"comment"`` \| ``"sum"``

#### Defined in

[src/services/personal.types.ts:853](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L853)

___

### MoneyAmount

Ƭ **MoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма |
| `currency` | [`Currency`](../enums/QIWI.Currency.md) | Валюты |

#### Defined in

[src/services/personal.types.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L65)

___

### Pay2Params

Ƭ **Pay2Params**: `Object`

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

[src/services/personal.types.ts:1213](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1213)

___

### PayUrlPatchParams

Ƭ **PayUrlPatchParams**: `Partial`<{ `paySource`: [`BillPaySource`](../enums/QIWI.BillPaySource.md) ; `successUrl`: `string`  }\>

#### Defined in

[src/services/p2p.types.ts:179](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L179)

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

[src/services/personal.types.ts:784](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L784)

___

### PaymentHistorySourceAny

Ƭ **PaymentHistorySourceAny**: [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md) \| [`PaymentHistorySourcePlain`](QIWI.md#paymenthistorysourceplain)

#### Defined in

[src/services/personal.types.ts:410](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L410)

___

### PaymentHistorySourcePlain

Ƭ **PaymentHistorySourcePlain**: keyof typeof [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md)

#### Defined in

[src/services/personal.types.ts:409](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L409)

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

[src/services/personal.types.ts:819](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L819)

___

### PersonIdentificationLevelAny

Ƭ **PersonIdentificationLevelAny**: [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) \| [`PersonIdentificationLevelPlain`](QIWI.md#personidentificationlevelplain)

#### Defined in

[src/services/personal.types.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L20)

___

### PersonIdentificationLevelPlain

Ƭ **PersonIdentificationLevelPlain**: keyof typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md)

#### Defined in

[src/services/personal.types.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L19)

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

[src/services/personal.types.ts:178](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L178)

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

[src/services/personal.types.ts:927](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L927)

___

### Restrictions

Ƭ **Restrictions**: { `restrictionCode`: `string` ; `restrictionDescription`: `string`  }[]

#### Defined in

[src/services/personal.types.ts:376](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L376)

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

[src/services/personal.types.ts:913](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L913)

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

[src/services/personal.types.ts:527](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L527)

___

### TransactionStatusAny

Ƭ **TransactionStatusAny**: [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) \| [`TransactionStatusPlain`](QIWI.md#transactionstatusplain)

#### Defined in

[src/services/personal.types.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L49)

___

### TransactionStatusPlain

Ƭ **TransactionStatusPlain**: keyof typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md)

#### Defined in

[src/services/personal.types.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L48)

___

### TransactionTypeAny

Ƭ **TransactionTypeAny**: [`TransactionType`](../enums/QIWI.TransactionType.md) \| [`TransactionTypePlain`](QIWI.md#transactiontypeplain)

#### Defined in

[src/services/personal.types.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L36)

___

### TransactionTypePlain

Ƭ **TransactionTypePlain**: keyof typeof [`TransactionType`](../enums/QIWI.TransactionType.md)

#### Defined in

[src/services/personal.types.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L35)

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

[src/services/personal.types.ts:1255](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1255)

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

[src/services/personal.types.ts:1269](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.types.ts#L1269)

## Functions

### createQS

▸ **createQS**(`object`): `string`

Создаёт строку запроса, в формате, который понимает QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `AnyResponse` | Объект для преобразования |

#### Returns

`string`

#### Defined in

[src/services/shared.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/shared.ts#L54)

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

[src/services/shared.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/shared.ts#L22)

___

### parseQS

▸ **parseQS**(`querystring`): `AnyResponse`

Разбирает строку запроса, в том формате, который передаёт QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `querystring` | `string` | Строка запроса |

#### Returns

`AnyResponse`

#### Defined in

[src/services/shared.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/shared.ts#L40)
