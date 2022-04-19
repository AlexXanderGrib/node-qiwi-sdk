[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / Personal

# Class: Personal

[QIWI](../modules/QIWI.md).Personal

Имплементирует [персональное API QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal)

**`see`** [Описание](https://developer.qiwi.com/ru/qiwi-wallet-personal)

## Hierarchy

- `HttpAPI`

  ↳ **`Personal`**

## Implements

- [`IPersonalAPI`](../interfaces/QIWI.IPersonalAPI.md)

## Table of contents

### Constructors

- [constructor](QIWI.Personal.md#constructor)

### Properties

- [API\_HEADERS](QIWI.Personal.md#api_headers)
- [API\_OK\_RESPONSE\_CODES](QIWI.Personal.md#api_ok_response_codes)
- [API\_TIMEOUT](QIWI.Personal.md#api_timeout)
- [API\_TOKEN](QIWI.Personal.md#api_token)
- [API\_URL](QIWI.Personal.md#api_url)
- [agent](QIWI.Personal.md#agent)
- [hookId](QIWI.Personal.md#hookid)
- [walletId](QIWI.Personal.md#walletid)
- [webhookKey](QIWI.Personal.md#webhookkey)
- [ChequeFormat](QIWI.Personal.md#chequeformat)
- [Currency](QIWI.Personal.md#currency)
- [IdentificationLevel](QIWI.Personal.md#identificationlevel)
- [LimitType](QIWI.Personal.md#limittype)
- [ReceiptFormat](QIWI.Personal.md#receiptformat)
- [Recipients](QIWI.Personal.md#recipients)
- [TransactionStatus](QIWI.Personal.md#transactionstatus)
- [TransactionType](QIWI.Personal.md#transactiontype)

### Methods

- [\_request](QIWI.Personal.md#_request)
- [addWebHook](QIWI.Personal.md#addwebhook)
- [blockCard](QIWI.Personal.md#blockcard)
- [checkWebHookSign](QIWI.Personal.md#checkwebhooksign)
- [createAccount](QIWI.Personal.md#createaccount)
- [createFormUrl](QIWI.Personal.md#createformurl)
- [createOauthToken](QIWI.Personal.md#createoauthtoken)
- [createP2PKeyPair](QIWI.Personal.md#createp2pkeypair)
- [delete](QIWI.Personal.md#delete)
- [get](QIWI.Personal.md#get)
- [getAccountOffers](QIWI.Personal.md#getaccountoffers)
- [getAccounts](QIWI.Personal.md#getaccounts)
- [getActiveWebHook](QIWI.Personal.md#getactivewebhook)
- [getCardRequisites](QIWI.Personal.md#getcardrequisites)
- [getCards](QIWI.Personal.md#getcards)
- [getCommission](QIWI.Personal.md#getcommission)
- [getIdentification](QIWI.Personal.md#getidentification)
- [getLimits](QIWI.Personal.md#getlimits)
- [getNewWebHookSecret](QIWI.Personal.md#getnewwebhooksecret)
- [getPaymentHistory](QIWI.Personal.md#getpaymenthistory)
- [getPaymentHistoryTotal](QIWI.Personal.md#getpaymenthistorytotal)
- [getPersonProfile](QIWI.Personal.md#getpersonprofile)
- [getRestrictions](QIWI.Personal.md#getrestrictions)
- [getTransaction](QIWI.Personal.md#gettransaction)
- [getTransactionCheque](QIWI.Personal.md#gettransactioncheque)
- [getWebHookSecret](QIWI.Personal.md#getwebhooksecret)
- [head](QIWI.Personal.md#head)
- [patch](QIWI.Personal.md#patch)
- [pay](QIWI.Personal.md#pay)
- [pay2](QIWI.Personal.md#pay2)
- [post](QIWI.Personal.md#post)
- [put](QIWI.Personal.md#put)
- [removeWebHook](QIWI.Personal.md#removewebhook)
- [renameCard](QIWI.Personal.md#renamecard)
- [sendTransactionCheque](QIWI.Personal.md#sendtransactioncheque)
- [setDefaultAccount](QIWI.Personal.md#setdefaultaccount)
- [setIdentification](QIWI.Personal.md#setidentification)
- [testActiveWebHook](QIWI.Personal.md#testactivewebhook)
- [unblockCard](QIWI.Personal.md#unblockcard)
- [createFormUrl](QIWI.Personal.md#createformurl-1)

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

[src/services/personal.ts:84](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L84)

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

[src/services/personal.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L69)

___

### API\_OK\_RESPONSE\_CODES

• `Protected` `Readonly` **API\_OK\_RESPONSE\_CODES**: `number`[]

#### Overrides

HttpAPI.API\_OK\_RESPONSE\_CODES

#### Defined in

[src/services/personal.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L77)

___

### API\_TIMEOUT

• `Protected` `Readonly` **API\_TIMEOUT**: `number` = `10_000`

#### Inherited from

HttpAPI.API\_TIMEOUT

#### Defined in

[src/http.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L47)

___

### API\_TOKEN

• `Readonly` **API\_TOKEN**: `string`

___

### API\_URL

• `Protected` `Readonly` **API\_URL**: ``"https://edge.qiwi.com/"``

#### Overrides

HttpAPI.API\_URL

#### Defined in

[src/services/personal.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L76)

___

### agent

• `Optional` **agent**: `any`

#### Overrides

HttpAPI.agent

#### Defined in

[src/services/personal.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L64)

___

### hookId

• `Optional` **hookId**: `string`

#### Defined in

[src/services/personal.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L67)

___

### walletId

• **walletId**: `StringOrNumber` = `""`

___

### webhookKey

• **webhookKey**: `Map`<`string`, `string`\>

#### Defined in

[src/services/personal.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L66)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `values.ChequeFormat`

#### Defined in

[src/services/personal.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L62)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/QIWI.Currency.md) = `values.Currency`

#### Defined in

[src/services/personal.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L55)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) = `values.PersonIdentificationLevel`

#### Defined in

[src/services/personal.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L56)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/QIWI.LimitType.md) = `values.LimitType`

#### Defined in

[src/services/personal.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L59)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `values.ChequeFormat`

#### Defined in

[src/services/personal.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L57)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/QIWI.Recipients.md) = `values.Recipients`

#### Defined in

[src/services/personal.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L58)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) = `values.TransactionStatus`

#### Defined in

[src/services/personal.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L61)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/QIWI.TransactionType.md) = `values.TransactionType`

#### Defined in

[src/services/personal.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L60)

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

[src/http.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L64)

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

[src/services/personal.ts:617](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L617)

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

[src/services/personal.ts:564](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L564)

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

[src/services/personal.ts:698](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L698)

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

[src/services/personal.ts:296](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L296)

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

[src/services/personal.ts:396](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L396)

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

[src/services/personal.ts:512](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L512)

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

[src/services/personal.ts:488](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L488)

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

[src/http.ts:210](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L210)

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

[src/http.ts:125](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L125)

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

[src/services/personal.ts:283](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L283)

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

[src/services/personal.ts:266](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L266)

___

### getActiveWebHook

▸ **getActiveWebHook**(): `Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Defined in

[src/services/personal.ts:675](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L675)

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

[src/services/personal.ts:588](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L588)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

#### Implementation of

[IPersonalAPI](../interfaces/QIWI.IPersonalAPI.md).[getCards](../interfaces/QIWI.IPersonalAPI.md#getcards)

#### Defined in

[src/services/personal.ts:552](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L552)

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

[src/services/personal.ts:329](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L329)

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

[src/services/personal.ts:132](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L132)

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

[src/services/personal.ts:148](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L148)

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

[src/services/personal.ts:663](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L663)

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

[src/services/personal.ts:177](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L177)

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

[src/services/personal.ts:193](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L193)

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

[src/services/personal.ts:96](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L96)

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

[src/services/personal.ts:164](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L164)

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

[src/services/personal.ts:209](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L209)

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

[src/services/personal.ts:225](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L225)

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

[src/services/personal.ts:650](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L650)

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

[src/http.ts:139](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L139)

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

[src/http.ts:192](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L192)

___

### pay

▸ **pay**(`provider`, `account`, `amount`, `currency?`, `fields?`, `comment?`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Перевод с кошелька

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`deprecated`** Используйте [pay2](QIWI.Personal.md#pay2), так-как он более читаемый

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

[src/services/personal.ts:425](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L425)

___

### pay2

▸ **pay2**(`params`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Более читаемая версия метода [pay](QIWI.Personal.md#pay)

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

[src/services/personal.ts:445](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L445)

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

[src/http.ts:156](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L156)

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

[src/http.ts:174](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/http.ts#L174)

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

[src/services/personal.ts:637](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L637)

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

[src/services/personal.ts:604](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L604)

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

[src/services/personal.ts:245](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L245)

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

[src/services/personal.ts:311](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L311)

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

[src/services/personal.ts:114](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L114)

___

### testActiveWebHook

▸ **testActiveWebHook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`link`** https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/personal.ts:689](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L689)

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

[src/services/personal.ts:575](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L575)

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

[src/services/personal.ts:364](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/personal.ts#L364)
