[qiwi-sdk](../README.md) / [Exports](../modules.md) / Personal

# Class: Personal

Имплементирует [персональное API QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal)

**`see`** [Описание](https://developer.qiwi.com/ru/qiwi-wallet-personal)

## Hierarchy

- `HttpAPI`

  ↳ **`Personal`**

## Implements

- [`IPersonalAPI`](../interfaces/QIWI.IPersonalAPI.md)

## Table of contents

### Constructors

- [constructor](Personal.md#constructor)

### Properties

- [API\_HEADERS](Personal.md#api_headers)
- [API\_OK\_RESPONSE\_CODES](Personal.md#api_ok_response_codes)
- [API\_TIMEOUT](Personal.md#api_timeout)
- [API\_TOKEN](Personal.md#api_token)
- [API\_URL](Personal.md#api_url)
- [agent](Personal.md#agent)
- [hookId](Personal.md#hookid)
- [walletId](Personal.md#walletid)
- [webhookKey](Personal.md#webhookkey)
- [ChequeFormat](Personal.md#chequeformat)
- [Currency](Personal.md#currency)
- [IdentificationLevel](Personal.md#identificationlevel)
- [LimitType](Personal.md#limittype)
- [ReceiptFormat](Personal.md#receiptformat)
- [Recipients](Personal.md#recipients)
- [TransactionStatus](Personal.md#transactionstatus)
- [TransactionType](Personal.md#transactiontype)

### Methods

- [\_request](Personal.md#_request)
- [addWebHook](Personal.md#addwebhook)
- [blockCard](Personal.md#blockcard)
- [checkWebHookSign](Personal.md#checkwebhooksign)
- [createAccount](Personal.md#createaccount)
- [createFormUrl](Personal.md#createformurl)
- [createOauthToken](Personal.md#createoauthtoken)
- [createP2PKeyPair](Personal.md#createp2pkeypair)
- [delete](Personal.md#delete)
- [get](Personal.md#get)
- [getAccountOffers](Personal.md#getaccountoffers)
- [getAccounts](Personal.md#getaccounts)
- [getActiveWebHook](Personal.md#getactivewebhook)
- [getCardRequisites](Personal.md#getcardrequisites)
- [getCards](Personal.md#getcards)
- [getCommission](Personal.md#getcommission)
- [getIdentification](Personal.md#getidentification)
- [getLimits](Personal.md#getlimits)
- [getNewWebHookSecret](Personal.md#getnewwebhooksecret)
- [getPaymentHistory](Personal.md#getpaymenthistory)
- [getPaymentHistoryTotal](Personal.md#getpaymenthistorytotal)
- [getPersonProfile](Personal.md#getpersonprofile)
- [getRestrictions](Personal.md#getrestrictions)
- [getTransaction](Personal.md#gettransaction)
- [getTransactionCheque](Personal.md#gettransactioncheque)
- [getWebHookSecret](Personal.md#getwebhooksecret)
- [head](Personal.md#head)
- [patch](Personal.md#patch)
- [pay](Personal.md#pay)
- [pay2](Personal.md#pay2)
- [post](Personal.md#post)
- [put](Personal.md#put)
- [removeWebHook](Personal.md#removewebhook)
- [renameCard](Personal.md#renamecard)
- [sendTransactionCheque](Personal.md#sendtransactioncheque)
- [setDefaultAccount](Personal.md#setdefaultaccount)
- [setIdentification](Personal.md#setidentification)
- [testActiveWebHook](Personal.md#testactivewebhook)
- [unblockCard](Personal.md#unblockcard)
- [createFormUrl](Personal.md#createformurl-1)

## Constructors

### constructor

• **new Personal**(`API_TOKEN`, `walletId?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `API_TOKEN` | `string` | `undefined` | Токен полученный на [Странице QIWI API](https://qiwi.com/api) |
| `walletId` | `StringOrNumber` | `""` | Номер кошелька |

#### Overrides

HttpAPI.constructor

#### Defined in

[src/services/personal.ts:83](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L83)

## Properties

### API\_HEADERS

• `Protected` `Readonly` **API\_HEADERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Accept` | `string` |
| `Authorization` | `string` |
| `Content-Type` | `string` |
| `User-Agent` | `string` |

#### Overrides

HttpAPI.API\_HEADERS

#### Defined in

[src/services/personal.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L68)

___

### API\_OK\_RESPONSE\_CODES

• `Protected` `Readonly` **API\_OK\_RESPONSE\_CODES**: `number`[]

#### Overrides

HttpAPI.API\_OK\_RESPONSE\_CODES

#### Defined in

[src/services/personal.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L76)

___

### API\_TIMEOUT

• `Protected` `Readonly` **API\_TIMEOUT**: `number` = `10_000`

#### Inherited from

HttpAPI.API\_TIMEOUT

#### Defined in

[src/http.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L46)

___

### API\_TOKEN

• `Readonly` **API\_TOKEN**: `string`

___

### API\_URL

• `Protected` `Readonly` **API\_URL**: ``"https://edge.qiwi.com/"``

#### Overrides

HttpAPI.API\_URL

#### Defined in

[src/services/personal.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L75)

___

### agent

• `Optional` **agent**: `any`

#### Overrides

HttpAPI.agent

#### Defined in

[src/services/personal.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L63)

___

### hookId

• `Optional` **hookId**: `string`

#### Defined in

[src/services/personal.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L66)

___

### walletId

• **walletId**: `StringOrNumber` = `""`

___

### webhookKey

• **webhookKey**: `Map`<`string`, `string`\>

#### Defined in

[src/services/personal.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L65)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `values.ChequeFormat`

#### Defined in

[src/services/personal.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L61)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/QIWI.Currency.md) = `values.Currency`

#### Defined in

[src/services/personal.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L54)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) = `values.PersonIdentificationLevel`

#### Defined in

[src/services/personal.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L55)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/QIWI.LimitType.md) = `values.LimitType`

#### Defined in

[src/services/personal.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L58)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `values.ChequeFormat`

#### Defined in

[src/services/personal.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L56)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/QIWI.Recipients.md) = `values.Recipients`

#### Defined in

[src/services/personal.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L57)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) = `values.TransactionStatus`

#### Defined in

[src/services/personal.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L60)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/QIWI.TransactionType.md) = `values.TransactionType`

#### Defined in

[src/services/personal.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L59)

## Methods

### \_request

▸ `Protected` **_request**(`url`, `method`, `headers`, `body?`): `Promise`<`any`\>

Simplified http request function

**`throws`** {HttpError} If http error code is not matched valid

**`throws`** {DecodingError} If unable to decode response

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Relative to API url path |
| `method` | `Method` | Http request method |
| `headers` | `Record`<`string`, `string`\> | - |
| `body?` | `string` | - |

#### Returns

`Promise`<`any`\>

Decoded response

#### Inherited from

HttpAPI.\_request

#### Defined in

[src/http.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L63)

___

### addWebHook

▸ **addWebHook**(`parameter`, `txnType`): `Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

Регистрирует обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | `string` | Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.** |
| `txnType` | ``0`` \| ``1`` \| ``2`` | Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все" |

#### Returns

`Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Defined in

[src/services/personal.ts:616](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L616)

___

### blockCard

▸ **blockCard**(`cardId`, `wallet?`): `Promise`<`any`\>

Блокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[blockCard](../interfaces/QIWI.IPersonalAPI.md#blockcard)

#### Defined in

[src/services/personal.ts:563](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L563)

___

### checkWebHookSign

▸ **checkWebHookSign**(`transaction`): `Promise`<`undefined` \| `boolean`\>

Проверяет подпись уведомления вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`WebhookTransaction`](../modules/QIWI.md#webhooktransaction) | Объект уведомления транзакции вебхука |

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Defined in

[src/services/personal.ts:697](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L697)

___

### createAccount

▸ **createAccount**(`alias`, `wallet?`): `Promise`<``""``\>

Создаёт новый счёт по параметру `alias`
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<``""``\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[createAccount](../interfaces/QIWI.IPersonalAPI.md#createaccount)

#### Defined in

[src/services/personal.ts:295](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L295)

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules/QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[createFormUrl](../interfaces/QIWI.IPersonalAPI.md#createformurl)

#### Defined in

[src/services/personal.ts:395](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L395)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Personal`](QIWI.Personal.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Personal`](QIWI.Personal.md)\>\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[createOauthToken](../interfaces/QIWI.IPersonalAPI.md#createoauthtoken)

#### Defined in

[src/services/personal.ts:511](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L511)

___

### createP2PKeyPair

▸ **createP2PKeyPair**(`name`, `server?`): `Promise`<[PublicKey: string, SecretKey: string]\>

Создаёт пару ключей для взаимодействия с P2P BILLS API

**`example`**

const [PublicKey, SecretKey] = await createP2PKeyPair('my-key-pair');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Название связки ключей |
| `server?` | `string` | URL сервера для отправки уведомлений |

#### Returns

`Promise`<[PublicKey: string, SecretKey: string]\>

Массив, где - [0=Публичный ключ, 1=Секретный ключ]

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[createP2PKeyPair](../interfaces/QIWI.IPersonalAPI.md#createp2pkeypair)

#### Defined in

[src/services/personal.ts:487](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L487)

___

### delete

▸ `Protected` **delete**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает DELETE запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | - |
| `body?` | `string` | - |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.delete

#### Defined in

[src/http.ts:209](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L209)

___

### get

▸ `Protected` **get**<`T`\>(`url`, `headers?`): `Promise`<`T`\>

Делает GET запрос и парсит ответ

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | - |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.get

#### Defined in

[src/http.ts:124](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L124)

___

### getAccountOffers

▸ **getAccountOffers**(`wallet?`): `Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

Успешный JSON-ответ содержит данные о счетах, которые можно
создать

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getAccountOffers](../interfaces/QIWI.IPersonalAPI.md#getaccountoffers)

#### Defined in

[src/services/personal.ts:282](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L282)

___

### getAccounts

▸ **getAccounts**(`wallet?`): `Promise`<[`Account`](../modules/QIWI.md#account)[]\>

Успешный ответ содержит JSON-массив счетов вашего QIWI
Кошелька для фондирования платежей и текущие балансы счетов

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`Account`](../modules/QIWI.md#account)[]\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getAccounts](../interfaces/QIWI.IPersonalAPI.md#getaccounts)

#### Defined in

[src/services/personal.ts:265](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L265)

___

### getActiveWebHook

▸ **getActiveWebHook**(): `Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Defined in

[src/services/personal.ts:674](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L674)

___

### getCardRequisites

▸ **getCardRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

Получает реквизиты карты

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getCardRequisites](../interfaces/QIWI.IPersonalAPI.md#getcardrequisites)

#### Defined in

[src/services/personal.ts:587](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L587)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getCards](../interfaces/QIWI.IPersonalAPI.md#getcards)

#### Defined in

[src/services/personal.ts:551](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L551)

___

### getCommission

▸ **getCommission**(`provider`, `account`, `amount`): `Promise`<`number`\>

Получает сумму комиссии по заданным реквизитам

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID Провайдера у QIWI |
| `account` | `string` | ID получателя у провайдера |
| `amount` | `number` | Сумма |

#### Returns

`Promise`<`number`\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getCommission](../interfaces/QIWI.IPersonalAPI.md#getcommission)

#### Defined in

[src/services/personal.ts:328](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L328)

___

### getIdentification

▸ **getIdentification**(`wallet?`): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getIdentification](../interfaces/QIWI.IPersonalAPI.md#getidentification)

#### Defined in

[src/services/personal.ts:131](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L131)

___

### getLimits

▸ **getLimits**<`Limits`\>(`limits`, `wallet?`): `Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

Запрос возвращает текущие уровни лимитов по операциям в вашем
QIWI кошельке. Лимиты действуют как ограничения на сумму
определенных операций.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Limits` | extends [`LimitTypeAny`](../modules/QIWI.md#limittypeany)[] = [`LimitTypeAny`](../modules/QIWI.md#limittypeany)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | `Limits` |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getLimits](../interfaces/QIWI.IPersonalAPI.md#getlimits)

#### Defined in

[src/services/personal.ts:147](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L147)

___

### getNewWebHookSecret

▸ **getNewWebHookSecret**(`hookId?`): `Promise`<`string`\>

Измененяет секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/services/personal.ts:662](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L662)

___

### getPaymentHistory

▸ **getPaymentHistory**(`parameters`, `wallet?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules/QIWI.md#getpaymenthistoryparams) | Тело запроса |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getPaymentHistory](../interfaces/QIWI.IPersonalAPI.md#getpaymenthistory)

#### Defined in

[src/services/personal.ts:176](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L176)

___

### getPaymentHistoryTotal

▸ **getPaymentHistoryTotal**(`parameters`, `wallet?`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules/QIWI.md#getpaymenthistorytotalparams) |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getPaymentHistoryTotal](../interfaces/QIWI.IPersonalAPI.md#getpaymenthistorytotal)

#### Defined in

[src/services/personal.ts:192](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L192)

___

### getPersonProfile

▸ **getPersonProfile**(): `Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

#### Returns

`Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getPersonProfile](../interfaces/QIWI.IPersonalAPI.md#getpersonprofile)

#### Defined in

[src/services/personal.ts:95](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L95)

___

### getRestrictions

▸ **getRestrictions**(`wallet?`): `Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getRestrictions](../interfaces/QIWI.IPersonalAPI.md#getrestrictions)

#### Defined in

[src/services/personal.ts:163](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L163)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type`): `Promise`<[`Transaction`](../modules/QIWI.md#transaction-1)\>

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | Номер транзакции |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | Тип транзакции |

#### Returns

`Promise`<[`Transaction`](../modules/QIWI.md#transaction-1)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getTransaction](../interfaces/QIWI.IPersonalAPI.md#gettransaction)

#### Defined in

[src/services/personal.ts:208](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L208)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transactionId` | `StringOrNumber` | `undefined` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | `undefined` | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `format` | [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) | `Personal.ChequeFormat.JPEG` | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Buffer`\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getTransactionCheque](../interfaces/QIWI.IPersonalAPI.md#gettransactioncheque)

#### Defined in

[src/services/personal.ts:224](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L224)

___

### getWebHookSecret

▸ **getWebHookSecret**(`hookId?`): `Promise`<`string`\>

Получает секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/services/personal.ts:649](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L649)

___

### head

▸ `Protected` **head**<`T`\>(`url`, `headers?`): `Promise`<`T`\>

Делает HEAD запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | - |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.head

#### Defined in

[src/http.ts:138](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L138)

___

### patch

▸ `Protected` **patch**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает PATCH запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | - |
| `body?` | `string` | - |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.patch

#### Defined in

[src/http.ts:191](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L191)

___

### pay

▸ **pay**(`provider`, `account`, `amount`, `currency?`, `fields?`, `comment?`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Перевод с кошелька

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`deprecated`** Используйте [pay2](Personal.md#pay2), так-как он более читаемый

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `provider` | `undefined` \| `number` | `undefined` | Ака ID, в доках, номер провайдера у QIWI |
| `account` | `string` | `undefined` | Номер кошелька или карты или типа того |
| `amount` | `number` | `undefined` | Сумма платежа |
| `currency` | `undefined` \| [`Currency`](../enums/QIWI.Currency.md) | `Personal.Currency.RUB` | Валюта платежа, по умолчанию = рубли |
| `fields` | `undefined` \| `Partial`<[`FreePayFields`](../modules/QIWI.md#freepayfields)\> & `Record`<`string`, `string`\> | `{}` | Доп. поля, их невозможно типизировать, просто читайте доки |
| `comment` | `undefined` \| `string` | `""` | Комментарий к платежу, необязательный |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

#### Defined in

[src/services/personal.ts:424](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L424)

___

### pay2

▸ **pay2**(`params`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Более читаемая версия метода [pay](Personal.md#pay)

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`Pay2Params`](../modules/QIWI.md#pay2params) | Параметры платежа |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[pay2](../interfaces/QIWI.IPersonalAPI.md#pay2)

#### Defined in

[src/services/personal.ts:444](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L444)

___

### post

▸ `Protected` **post**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает POST запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | - |
| `body?` | `string` | - |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.post

#### Defined in

[src/http.ts:155](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L155)

___

### put

▸ `Protected` **put**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает PUT запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | - |
| `body?` | `string` | - |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.put

#### Defined in

[src/http.ts:173](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/http.ts#L173)

___

### removeWebHook

▸ **removeWebHook**(`hookId?`): `Promise`<`any`\>

Удаляет обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/personal.ts:636](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L636)

___

### renameCard

▸ **renameCard**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[renameCard](../interfaces/QIWI.IPersonalAPI.md#renamecard)

#### Defined in

[src/services/personal.ts:603](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L603)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<``""``\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<``""``\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[sendTransactionCheque](../interfaces/QIWI.IPersonalAPI.md#sendtransactioncheque)

#### Defined in

[src/services/personal.ts:244](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L244)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`, `wallet?`): `Promise`<``""``\>

Устанавливает счёт по умолчанию
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<``""``\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[setDefaultAccount](../interfaces/QIWI.IPersonalAPI.md#setdefaultaccount)

#### Defined in

[src/services/personal.ts:310](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L310)

___

### setIdentification

▸ **setIdentification**(`data`, `wallet?`): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/QIWI.md#identificationbase) |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[setIdentification](../interfaces/QIWI.IPersonalAPI.md#setidentification)

#### Defined in

[src/services/personal.ts:113](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L113)

___

### testActiveWebHook

▸ **testActiveWebHook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`link`** https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/personal.ts:688](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L688)

___

### unblockCard

▸ **unblockCard**(`cardId`, `wallet?`): `Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

Разблокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[unblockCard](../interfaces/QIWI.IPersonalAPI.md#unblockcard)

#### Defined in

[src/services/personal.ts:574](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L574)

___

### createFormUrl

▸ `Static` **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules/QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[src/services/personal.ts:363](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L363)
