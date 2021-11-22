[qiwi-sdk](README.md) / Exports

# qiwi-sdk

## Table of contents

### Enumerations

- [BillCurrency](enums/BillCurrency.md)
- [BillPaySource](enums/BillPaySource.md)
- [BillStatus](enums/BillStatus.md)
- [CardActionStatus](enums/CardActionStatus.md)
- [CardStatus](enums/CardStatus.md)
- [ChequeFormat](enums/ChequeFormat.md)
- [Currency](enums/Currency.md)
- [LimitType](enums/LimitType.md)
- [PersonIdentificationLevel](enums/PersonIdentificationLevel.md)
- [Recipients](enums/Recipients.md)
- [TransactionStatus](enums/TransactionStatus.md)
- [TransactionType](enums/TransactionType.md)

### Classes

- [Detector](classes/Detector.md)
- [DetectorError](classes/DetectorError.md)
- [P2P](classes/P2P.md)
- [P2PNotificationError](classes/P2PNotificationError.md)
- [P2PPaymentError](classes/P2PPaymentError.md)
- [Personal](classes/Personal.md)
- [PersonalApiError](classes/PersonalApiError.md)

### Interfaces

- [IP2PApi](interfaces/IP2PApi.md)
- [IPersonalAPI](interfaces/IPersonalAPI.md)

### Type aliases

- [Account](modules.md#account)
- [AccountOffer](modules.md#accountoffer)
- [BillCreationRequest](modules.md#billcreationrequest)
- [BillError](modules.md#billerror)
- [BillFormParams](modules.md#billformparams)
- [BillStatusData](modules.md#billstatusdata)
- [CardRenameResponse](modules.md#cardrenameresponse)
- [CardRequisitesResponse](modules.md#cardrequisitesresponse)
- [CardResponse](modules.md#cardresponse)
- [CardUnblockResponse](modules.md#cardunblockresponse)
- [CodeResponse](modules.md#coderesponse)
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
- [Limit](modules.md#limit)
- [LimitsResponse](modules.md#limitsresponse)
- [MoneyAmount](modules.md#moneyamount)
- [Pay2Params](modules.md#pay2params)
- [PayUrlPatchParams](modules.md#payurlpatchparams)
- [PaymentCommissionRequest](modules.md#paymentcommissionrequest)
- [PaymentResponse](modules.md#paymentresponse)
- [PersonProfile](modules.md#personprofile)
- [PrettyTokenResponse](modules.md#prettytokenresponse)
- [Restrictions](modules.md#restrictions)
- [TokenResponse](modules.md#tokenresponse)
- [Transaction](modules.md#transaction)

### Functions

- [createQS](modules.md#createqs)
- [formatDate](modules.md#formatdate)
- [parseQS](modules.md#parseqs)

## Type aliases

### Account

Ƭ **Account**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним пользовательского баланса |
| `balance` | [`MoneyAmount`](modules.md#moneyamount) \| ``null`` | - |
| `bankAlias` | `string` | Псевдоним банка |
| `currency` | [`Currency`](enums/Currency.md) | Код валюты баланса (number-3 ISO-4217) |
| `defaultAccount?` | `boolean` | - |
| `fsAlias` | `string` | Псевдоним банковского баланса |
| `hasBalance` | `boolean` | Логический признак реального баланса в системе QIWI Кошелек (не привязанная карта, не счет мобильного телефона и т.д.) |
| `title` | `string` | Название соответствующего счета кошелька |
| `type` | `Object` | Сведения о счете |
| `type.id` | `string` | Описание счета |
| `type.title` | `string` | Описание счета |

#### Defined in

[src/services/personal.types.ts:660](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L660)

___

### AccountOffer

Ƭ **AccountOffer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета |
| `currency` | [`Currency`](enums/Currency.md) | ID валюты счета |

#### Defined in

[src/services/personal.types.ts:701](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L701)

___

### BillCreationRequest

Ƭ **BillCreationRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `Object` | Данные о сумме счета |
| `amount.currency` | [`BillCurrency`](enums/BillCurrency.md) | Валюта суммы счета. Возможные значения: `RUB` - рубли `KZT` - тенге |
| `amount.value` | `number` \| `string` | Сумма, на которую выставляется счет, округленная в меньшую сторону до 2 десятичных знаков |
| `comment?` | `string` | Комментарий к счету  **`maxlength`** 255 |
| `customFields?` | `Record`<`string`, `string`\> | Дополнительные данные счета. Так же при помощи этого параметра вы можете настроить [персонализацию](https://developer.qiwi.com/ru/p2p-payments/#custom) вашей формы, передав переменную `themeCode` |
| `customer?` | `Object` | Идентификаторы пользователя |
| `customer.account?` | `string` | Идентификатор пользователя в вашей системе |
| `customer.email?` | `string` | E-mail пользователя |
| `customer.phone?` | `string` | Номер телефона пользователя (в международном формате) |
| `expirationDateTime` | `string` | Дата, до которой счет будет доступен для оплаты. Если перевод не будет совершен до этой даты, ему присваивается финальный статус `EXPIRED` и последующий перевод станет невозможен.  **`example`** "2020-07-10T09:02:00+03:00" |

#### Defined in

[src/services/p2p.types.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/p2p.types.ts#L18)

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

[src/services/p2p.types.ts:120](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/p2p.types.ts#L120)

___

### BillFormParams

Ƭ **BillFormParams**: { `amount`: `string` \| `number` ; `billId`: `string` ; `comment?`: `string` ; `customFields?`: `Record`<`string`, `string`\> ; `lifetime?`: `string` ; `publicKey`: `string` ; `successUrl?`: `string`  } & [`BillCreationRequest`](modules.md#billcreationrequest)[``"customer"``]

#### Defined in

[src/services/p2p.types.ts:135](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/p2p.types.ts#L135)

___

### BillStatusData

Ƭ **BillStatusData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BillCreationRequest`](modules.md#billcreationrequest)[``"amount"``] | Данные о сумме счета |
| `billId` | `string` | Уникальный идентификатор выставляемого счета в вашей системе |
| `comment?` | `string` | Комментарий к счету |
| `creationDateTime` | `string` | Системная дата создания счета. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс` |
| `customFields` | `Record`<`string`, `string`\> | Объект строковых дополнительных параметров, переданных вами |
| `customer?` | [`BillCreationRequest`](modules.md#billcreationrequest)[``"customer"``] | Идентификаторы пользователя |
| `expirationDateTime` | `string` | Срок действия созданной формы для перевода. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс+\-чч:мм` |
| `payUrl` | `string` | [Ссылка для переадресации](https://developer.qiwi.com/ru/p2p-payments/#option) пользователя на созданную форму |
| `siteId` | `string` | Ваш идентификатор в системе p2p.qiwi |
| `status` | `Object` | - |
| `status.changedDateTime` | `string` | Дата обновления статуса |
| `status.value` | [`BillStatus`](enums/BillStatus.md) | Текущий статус счета |

#### Defined in

[src/services/p2p.types.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/p2p.types.ts#L75)

___

### CardRenameResponse

Ƭ **CardRenameResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | Текстовое описание ошибки |
| `errorCode` | `string` | Код ошибки |
| `status` | [`OK`](enums/CardActionStatus.md#ok) \| [`FAIL`](enums/CardActionStatus.md#fail) | - |

#### Defined in

[src/services/personal.types.ts:1033](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L1033)

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
| `status` | [`CardActionStatus`](enums/CardActionStatus.md) | - |

#### Defined in

[src/services/personal.types.ts:1018](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L1018)

___

### CardResponse

Ƭ **CardResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balance` | [`MoneyAmount`](modules.md#moneyamount) \| ``null`` | Данные баланса карты |
| `info` | `Object` | Тарифы и банковские реквизиты карты |
| `info.alias` | ``"qvc-cpa"`` \| ``"qvc-cpa-debit"`` \| ``"qvp-gold"`` | [Тип карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#card-types) |
| `info.details` | `Object` | - |
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
| `info.price` | [`MoneyAmount`](modules.md#moneyamount) | Тариф карты:  `amount` - Стоимость обслуживания `currency` - Код валюты баланса (по ISO) |
| `qvx` | `Object` | Общая информация о карте |
| `qvx.activated` | `string` | Дата активации карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.blockedDate` | `string` | Дата блокировки в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardAlias` | `string` | [Название карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#qvc-rename) в интерфейсе сайта [qiwi.com](https://qiwi.com/) |
| `qvx.cardExpire` | `string` | Срок действия карты в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.cardExpireMonth` | `string` | Месяц окончания действия карты. Например: `01` |
| `qvx.cardExpireYear` | `string` | Год окончания действия карты. Например: `2022` |
| `qvx.cardLimit` | ``null`` \| { `currencyCode`: [`Currency`](enums/Currency.md) ; `value`: `number`  } | - |
| `qvx.cardType` | ``"VIRTUAL"`` \| ``"PLASTIC"`` | Вид карты |
| `qvx.id` | `number` | ID карты |
| `qvx.maskedPan` | `string` | Маскированный номер карты (отображаются только последние 4 цифры). Пример: `****9078` |
| `qvx.smsResended` | `string` | Дата высылки СМС с реквизитами в формате: `2022-01-31T00:00:00+03:00` |
| `qvx.status` | [`CardStatus`](enums/CardStatus.md) | Текущий статус карты |
| `qvx.txnId` | `string` | ID транзакции заказа карты |
| `qvx.unblockAvailable` | `boolean` | Признак возможности разблокировать карту |

#### Defined in

[src/services/personal.types.ts:895](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L895)

___

### CardUnblockResponse

Ƭ **CardUnblockResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `confirmationId` | ``null`` |
| `nextConfirmationRequest` | ``null`` |
| `operationId` | ``null`` |
| `status` | [`CardActionStatus`](enums/CardActionStatus.md) |

#### Defined in

[src/services/personal.types.ts:1011](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L1011)

___

### CodeResponse

Ƭ **CodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Defined in

[src/services/personal.types.ts:834](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L834)

___

### FormUrlOptions

Ƭ **FormUrlOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string` | Формат совпадает с форматом параметра `fields.account` при оплате соответствующих провайдеров: для провайдера `99` - номер кошелька получателя; для провайдеров сотовой связи - номер мобильного телефона для пополнения (без префикса 8); для провайдеров перевода на карту - номер банковской карты получателя (без пробелов), для других провайдеров - идентификатор пользователя. Для провайдера `99999` указывается никнейм или номер кошелька получателя (задайте соответствующее значение параметра `extra['accountType']`). |
| `accountType?` | `string` | **Параметр используется только для ID=99999**. Значение определяет перевод на QIWI кошелек по никнейму или по номеру кошелька. Если вы не хотите, чтобы пользователь видел номер вашего кошелька на форме, используйте перевод по никнейму.  `phone` - для перевода по номеру  `nickname` - для перевода по никнейму. |
| `amount?` | `number` | Сумма платежа в рублях |
| `blocked?` | (``"account"`` \| ``"comment"`` \| ``"sum"``)[] | Признак неактивного поля формы. Пользователь не сможет менять значение данного поля. Каждый параметр задает соответствующее поле формы и нумеруется начиная с нуля (blocked[0], blocked[1]  и т.д.). Если не указан, пользователь сможет изменить все поля формы.  Допустимые значения:  `sum` - поле "сумма платежа",  `account` - поле "номер счета/телефона/карты",  `comment` - поле "комментарий".  Пример (неактивное поле суммы платежа): `blocked[0]=sum` |
| `comment?` | `string` | Комментарий. **Параметр используется только для `ID=99`** |
| `custom?` | `Record`<`string`, `unknown`\> | - |

#### Defined in

[src/services/personal.types.ts:780](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L780)

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

[src/services/personal.types.ts:1043](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L1043)

___

### GetAccountOffersResponse

Ƭ **GetAccountOffersResponse**: [`AccountOffer`](modules.md#accountoffer)[]

#### Defined in

[src/services/personal.types.ts:709](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L709)

___

### GetAccountsResponse

Ƭ **GetAccountsResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | [`Account`](modules.md#account)[] | Массив балансов |

#### Defined in

[src/services/personal.types.ts:696](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L696)

___

### GetPaymentHistoryParams

Ƭ **GetPaymentHistoryParams**: [`GetPaymentHistoryParamsBase`](modules.md#getpaymenthistoryparamsbase) \| [`GetPaymentHistoryParamsBase`](modules.md#getpaymenthistoryparamsbase) & [`GetPaymentHistoryParamsStartEnd`](modules.md#getpaymenthistoryparamsstartend) \| [`GetPaymentHistoryParamsBase`](modules.md#getpaymenthistoryparamsbase) & { `nextTxnDate`: `string` ; `nextTxnId`: `number`  }

#### Defined in

[src/services/personal.types.ts:419](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L419)

___

### GetPaymentHistoryParamsBase

Ƭ **GetPaymentHistoryParamsBase**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation?` | [`TransactionType`](enums/TransactionType.md) | Тип операций в отчете, для отбора. Допустимые значения:  `ALL` - все операции,  `IN` - только пополнения,  `OUT` - только платежи,  `QIWI_CARD` - только платежи по картам QIWI (QVC, QVP).  По умолчанию `ALL` |
| `rows` | `number` | Число платежей в ответе, для разбивки отчета на страницы. Целое число от 1 до 50. Запрос возвращает указанное число платежей в обратном хронологическом порядке, начиная от текущей даты или даты в параметре `startDate` |
| `sources?` | (``"QW_RUB"`` \| ``"QW_USD"`` \| ``"QW_EUR"`` \| ``"CARD"`` \| ``"MK"``)[] | Список источников платежа, для фильтра. Каждый источник нумеруется, начиная с нуля (`sources[0]`, `sources[1]` и т.д.).  Допустимые значения:  `QW_RUB` - рублевый счет кошелька,  `QW_USD` - счет кошелька в долларах,  `QW_EUR` - счет кошелька в евро,  `CARD` - привязанные и непривязанные к кошельку банковские карты,  `MK` - счет мобильного оператора. Если не указан, учитываются все источники |

#### Defined in

[src/services/personal.types.ts:344](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L344)

___

### GetPaymentHistoryParamsStartEnd

Ƭ **GetPaymentHistoryParamsStartEnd**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `startDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `startDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |
| `startDate` | `string` | Начальная дата поиска платежей. **Используется только вместе с `endDate`. Максимальный допустимый интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от текущей даты по московскому времени.  Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна совпадать с временной зоной в параметре `endDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм` (временной сдвиг от GMT). |

#### Defined in

[src/services/personal.types.ts:389](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L389)

___

### GetPaymentHistoryTotalParams

Ƭ **GetPaymentHistoryTotalParams**: `Omit`<[`GetPaymentHistoryParamsBase`](modules.md#getpaymenthistoryparamsbase), ``"rows"``\> & [`GetPaymentHistoryParamsStartEnd`](modules.md#getpaymenthistoryparamsstartend)

#### Defined in

[src/services/personal.types.ts:440](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L440)

___

### GetPaymentHistoryTotalResponse

Ƭ **GetPaymentHistoryTotalResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `incomingTotal` | [`MoneyAmount`](modules.md#moneyamount)[] | Данные о входящих платежах (пополнениях), отдельно по каждой валюте |
| `outgoingTotal` | [`MoneyAmount`](modules.md#moneyamount)[] | Данные об исходящих платежах, отдельно по каждой валюте |

#### Defined in

[src/services/personal.types.ts:446](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L446)

___

### GetTransactionsHistoryResponse

Ƭ **GetTransactionsHistoryResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`Transaction`](modules.md#transaction)[] | Список объектов [Transaction](https://developer.qiwi.com/ru/qiwi-wallet-personal/#txnid). Число транзакций в списке меньше или равно параметру rows из запроса |
| `nextTxnDate` | [`Transaction`](modules.md#transaction)[``"date"``] \| ``null`` | Дата/время следующей транзакции в полном списке, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `nextTxnId` | [`Transaction`](modules.md#transaction)[``"txnId"``] \| ``null`` | ID следующей транзакции в полном списке |

#### Defined in

[src/services/personal.types.ts:581](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L581)

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

[src/services/personal.types.ts:288](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L288)

___

### IdentificationResponse

Ƭ **IdentificationResponse**: [`IdentificationBase`](modules.md#identificationbase) & { `id`: `number` ; `type`: [`SIMPLE`](enums/PersonIdentificationLevel.md#simple) \| [`VERIFIED`](enums/PersonIdentificationLevel.md#verified) \| [`FULL`](enums/PersonIdentificationLevel.md#full)  }

#### Defined in

[src/services/personal.types.ts:314](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L314)

___

### Limit

Ƭ **Limit**<`Cur`, `Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Cur` | extends keyof typeof [`Currency`](enums/Currency.md)``"RUB"`` |
| `Type` | extends [`LimitType`](enums/LimitType.md)[`LimitType`](enums/LimitType.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Cur` | Валюта операций |
| `interval` | `Object` | Сведения о периоде действия лимита |
| `interval.dateFrom` | `string` | Начало периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` |
| `interval.dateTill` | `string` | Конец периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` |
| `max` | `number` | Значение лимита |
| `rest` | `number` | Остаток лимита, который можно потратить в данный период (период задается в параметре `interval`) |
| `spent` | `number` | Сумма, потраченная по данным операциям |
| `type` | `Type` | Тип операций, на которые действует данный лимит |

#### Defined in

[src/services/personal.types.ts:619](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L619)

___

### LimitsResponse

Ƭ **LimitsResponse**<`RequestedLimits`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RequestedLimits` | extends [`LimitType`](enums/LimitType.md)[`LimitType`](enums/LimitType.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `limits` | `Object` | Описание лимитов |
| `limits.KZ` | [`Limit`](modules.md#limit)<``"KZT"``, `RequestedLimits`\>[] | - |
| `limits.RU` | [`Limit`](modules.md#limit)<``"RUB"``, `RequestedLimits`\>[] | Массив лимитов на операции |

#### Defined in

[src/services/personal.types.ts:651](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L651)

___

### MoneyAmount

Ƭ **MoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Сумма |
| `currency` | [`Currency`](enums/Currency.md) | Валюты |

#### Defined in

[src/services/personal.types.ts:51](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L51)

___

### Pay2Params

Ƭ **Pay2Params**: `Object`

**`see`** [Документация по платежам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Номер счёта в указанной платёжной системе (у `provider`'а) Если он не задан, но следует указывать номер телефона(киви) получателя.  Записывается в `fields.account`, можно поставить `""`, если переопределяете в `fields` |
| `amount` | `number` | Сумма платежа в указанной валюте. Если валюта не указана, то в рублях. Советую округлять до 2ух знаков после , |
| `comment?` | `string` | Комментарий к платежу |
| `currency?` | [`Currency`](enums/Currency.md) | Валюта платежа |
| `fields?` | `Partial`<[`FreePayFields`](modules.md#freepayfields)\> & `Record`<`string`, `string`\> | Дополнительные параметры платежа. Обычно необходимо для [платежа по свободным реквизитам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#freepay) |
| `provider?` | `number` \| [`Recipients`](enums/Recipients.md) | Ака ID в доках, номер провайдера(платёжной системы) у QIWI  **`see`** [Recipients](classes/Personal.md#recipients)  **`default`** 99 |

#### Defined in

[src/services/personal.types.ts:1130](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L1130)

___

### PayUrlPatchParams

Ƭ **PayUrlPatchParams**: `Partial`<`Object`\>

#### Defined in

[src/services/p2p.types.ts:173](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/p2p.types.ts#L173)

___

### PaymentCommissionRequest

Ƭ **PaymentCommissionRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера) |
| `paymentMethod` | `Object` | Объект, определяющий обработку платежа процессингом QIWI Wallet |
| `paymentMethod.accountId` | ``"643"`` | Идентификатор счета, только `643`. |
| `paymentMethod.type` | ``"Account"`` | Метод платежа, только `Account` |
| `purchaseTotals` | `Object` | Объект с платежными реквизитами |
| `purchaseTotals.total` | `Object` | Объект, содержащий данные о сумме платежа |
| `purchaseTotals.total.amount` | `number` | Сумма (можно указать рубли и копейки, разделитель .). Положительное число, округленное до 2 знаков после десятичной точки. При большем числе знаков значение будет округлено до копеек в меньшую сторону. |
| `purchaseTotals.total.currency` | ``"643"`` | Валюта (только 643, рубли) |

#### Defined in

[src/services/personal.types.ts:711](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L711)

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
| `sum` | [`MoneyAmount`](modules.md#moneyamount) | Копия объекта `sum` из платежного запроса |
| `terms` | `string` | Идентификатор провайдера, на которого был отправлен платеж |
| `transaction` | `Object` | - |
| `transaction.id` | `string` | - |
| `transaction.state` | `Object` | - |
| `transaction.state.code` | ``"Accepted"`` | - |

#### Defined in

[src/services/personal.types.ts:746](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L746)

___

### PersonProfile

Ƭ **PersonProfile**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authInfo` | `Object` | Текущие настройки авторизации. Объект может отсутствовать, в зависимости от признака `authInfoEnabled` в запросе. |
| `authInfo.boundEmail` | `string` \| ``null`` | E-mail, привязанный к кошельку. Если отсутствует, то `null` |
| `authInfo.ip` | `string` | IP-адрес последней пользовательской сессии |
| `authInfo.lastLoginDate` | `string` | Дата/время последней сессии в QIWI Кошельке |
| `authInfo.mobilePinInfo` | `Object` | Данные о PIN-коде мобильного приложения QIWI Кошелька |
| `authInfo.mobilePinInfo.lastMobilePinChange` | `string` | Дата/время последнего изменения PIN-кода мобильного приложения QIWI Кошелька |
| `authInfo.mobilePinInfo.mobilePinUsed` | `boolean` | Логический признак использования PIN-кода (фактически означает, что мобильное приложение используется) |
| `authInfo.mobilePinInfo.nextMobilePinChange` | `string` | Дата/время следующего (планового) изменения PIN-кода мобильного приложения QIWI Кошелька |
| `authInfo.passInfo` | `Object` | Данные об использовании пароля к сайту qiwi.com |
| `authInfo.passInfo.lastPassChange` | `string` | Дата/время последнего изменения пароля сайта qiwi.com |
| `authInfo.passInfo.nextPassChange` | `string` | Дата/время следующего (планового) изменения пароля сайта qiwi.com |
| `authInfo.passInfo.passwordUsed` | `boolean` | Логический признак использования пароля (фактически означает использование сайта qiwi.com) |
| `authInfo.personId` | `number` | Номер кошелька |
| `authInfo.pinInfo` | `Object` | Данные об использовании PIN-кода к приложению QIWI Кошелька на QIWI терминалах самообслуживания |
| `authInfo.pinInfo.pinUsed` | `boolean` | Логический признак использования PIN-кода для терминала (фактически означает факт использования приложения QIWI Кошелька на терминале) |
| `authInfo.registrationDate` | `string` | Дата/время регистрации QIWI Кошелька (через сайт/мобильное приложение, либо другим способом) |
| `contractInfo` | `Object` | Информация о кошельке. Объект может отсутствовать, в зависимости от признака `contractInfoEnabled` в запросе. |
| `contractInfo.blocked` | `boolean` | Логический признак блокировки кошелька |
| `contractInfo.contractId` | `number` | Номер кошелька |
| `contractInfo.creationDate` | `string` | Дата/время создания QIWI Кошелька (через сайт/мобильное приложение, либо при первом пополнении, либо другим способом) |
| `contractInfo.features` | `object`[] | Служебная информация |
| `contractInfo.identificationInfo` | { `bankAlias`: ``"QIWI"`` \| `string` ; `identificationLevel`: [`PersonIdentificationLevel`](enums/PersonIdentificationLevel.md)  }[] | Данные об [идентификации](https://qiwi.com/settings/identification#ru) пользователя. |
| `userInfo` | `Object` | Прочие пользовательские данные. Объект может отсутствовать, в зависимости от признака `userInfoEnabled` в запросе. |
| `userInfo.defaultPayCurrency` | [`Currency`](enums/Currency.md) | Код валюты баланса кошелька по умолчанию (number-3 ISO-4217) |
| `userInfo.defaultPaySource` | `number` | Служебная информация |
| `userInfo.email` | `string` | E-mail пользователя |
| `userInfo.firstTxnId` | `string` | Номер первой транзакции после регистрации |
| `userInfo.language` | `string` | Служебная информация |
| `userInfo.operator` | `string` | Название мобильного оператора номера пользователя |
| `userInfo.phoneHash` | `string` | Служебная информация |
| `userInfo.promoEnabled` | `string` | Служебная информация |

#### Defined in

[src/services/personal.types.ts:138](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L138)

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

[src/services/personal.types.ts:852](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L852)

___

### Restrictions

Ƭ **Restrictions**: { `restrictionCode`: `string` ; `restrictionDescription`: `string`  }[]

#### Defined in

[src/services/personal.types.ts:336](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L336)

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

[src/services/personal.types.ts:838](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L838)

___

### Transaction

Ƭ **Transaction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` | Для платежей - номер счета получателя. Для пополнений - номер отправителя, терминала или название агента пополнения кошелька |
| `comment` | `string` | Комментарий к платежу |
| `commission` | [`MoneyAmount`](modules.md#moneyamount) | Данные о комиссии платежа |
| `currencyRate` | `number` | Курс конвертации (если применяется в транзакции) |
| `date` | `string` | Для запросов истории платежей - Дата/время платежа, во временной зоне запроса (см. параметр `startDate`). Формат даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`  Для запросов данных о транзакции - Дата/время платежа, время московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`) |
| `error` | `string` \| ``null`` | Описание ошибки |
| `errorCode` | `number` | [Код ошибки платежа](https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode) |
| `extras` | `object` | Служебная информация |
| `features` | `Object` | Поидее содержимое этого поля должно быть напрямую в Transaction. Но QIWI возвращает именно так |
| `features.bankDocumentAvailable` | `boolean` | Специальное поле |
| `features.chequeReady` | `boolean` | Специальное поле |
| `features.favoritePaymentEnabled` | `boolean` | Специальное поле |
| `features.regularPaymentEnabled` | `boolean` | Специальное поле |
| `features.repeatPaymentEnabled` | `boolean` | Специальное поле |
| `personId` | `number` | Номер кошелька |
| `provider` | `Object` | Данные о провайдере. |
| `provider.descriptions` | `string` \| ``null`` | описание провайдера (HTML) |
| `provider.id` | `number` | ID провайдера в QIWI Wallet |
| `provider.keys` | `string` \| ``null`` | список ключевых слов |
| `provider.logoUrl` | `string` \| ``null`` | ссылка на логотип провайдера |
| `provider.longName` | `string` | развернутое наименование провайдера |
| `provider.shortName` | `string` | краткое наименование провайдера |
| `provider.siteUrl` | `string` \| ``null`` | сайт провайдера |
| `source` | `object` | Служебная информация |
| `status` | [`TransactionStatus`](enums/TransactionStatus.md) | Статус платежа. Возможные значения:  `WAITING` - платеж проводится  `SUCCESS` - успешный платеж  `ERROR` - ошибка платежа. |
| `statusText` | `string` | Текстовое описание статуса платежа |
| `sum` | [`MoneyAmount`](modules.md#moneyamount) | Данные о сумме платежа или пополнения. |
| `total` | [`MoneyAmount`](modules.md#moneyamount) | Данные о фактической сумме платежа или пополнения. |
| `trmTxnId` | `string` | Клиентский ID транзакции |
| `txnId` | `number` | ID транзакции в сервисе QIWI Кошелек |
| `type` | [`IN`](enums/TransactionType.md#in) \| [`OUT`](enums/TransactionType.md#out) \| [`QIWI_CARD`](enums/TransactionType.md#qiwi_card) | Тип платежа. Возможные значения:  `IN` - пополнение,  `OUT` - платеж,  `QIWI_CARD` - платеж с карт QIWI (QVC, QVP). |

#### Defined in

[src/services/personal.types.ts:457](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/personal.types.ts#L457)

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

[src/services/shared.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/shared.ts#L54)

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

[src/services/shared.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/shared.ts#L22)

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

[src/services/shared.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/110642c/src/services/shared.ts#L40)
