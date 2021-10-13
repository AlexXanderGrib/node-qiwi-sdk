[qiwi-sdk](../README.md) / [Exports](../modules.md) / P2P

# Class: P2P

Имплементирует [P2P API QIWI](https://developer.qiwi.com/ru/p2p-payments)

**`see`** [Описание](https://developer.qiwi.com/ru/p2p-payments)

## Hierarchy

- `HttpAPI`

  ↳ **`P2P`**

## Table of contents

### Constructors

- [constructor](P2P.md#constructor)

### Properties

- [API\_HEADERS](P2P.md#api_headers)
- [API\_OK\_RESPONSE\_CODES](P2P.md#api_ok_response_codes)
- [API\_TIMEOUT](P2P.md#api_timeout)
- [API\_URL](P2P.md#api_url)
- [agent](P2P.md#agent)
- [publicKey](P2P.md#publickey)
- [secretKey](P2P.md#secretkey)
- [BillStatus](P2P.md#billstatus)
- [Currency](P2P.md#currency)
- [PaySource](P2P.md#paysource)

### Methods

- [\_generateId](P2P.md#_generateid)
- [\_normalizeAmount](P2P.md#_normalizeamount)
- [\_request](P2P.md#_request)
- [billStatus](P2P.md#billstatus)
- [checkNotificationSignature](P2P.md#checknotificationsignature)
- [createBill](P2P.md#createbill)
- [createBillFormUrl](P2P.md#createbillformurl)
- [delete](P2P.md#delete)
- [get](P2P.md#get)
- [head](P2P.md#head)
- [notificationMiddleware](P2P.md#notificationmiddleware)
- [patch](P2P.md#patch)
- [post](P2P.md#post)
- [put](P2P.md#put)
- [rejectBill](P2P.md#rejectbill)
- [formatLifetime](P2P.md#formatlifetime)
- [patchPayUrl](P2P.md#patchpayurl)

## Constructors

### constructor

• **new P2P**(`secretKey`, `publicKey?`)

Создаёт клиент P2P API используя Публичный и Приватный ключи,
полученные на [Странице P2P API QIWI](https://qiwi.com/p2p-admin/transfers/api)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `secretKey` | `string` | `undefined` | Публичный ключ |
| `publicKey` | `string` | `""` | Приватный ключ (необязателен) |

#### Overrides

HttpAPI.constructor

#### Defined in

[src/services/p2p.ts:116](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L116)

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

[src/services/p2p.ts:99](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L99)

___

### API\_OK\_RESPONSE\_CODES

• `Protected` `Readonly` **API\_OK\_RESPONSE\_CODES**: `number`[]

#### Inherited from

HttpAPI.API\_OK\_RESPONSE\_CODES

#### Defined in

[src/http.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L48)

___

### API\_TIMEOUT

• `Protected` `Readonly` **API\_TIMEOUT**: `number` = `10_000`

#### Inherited from

HttpAPI.API\_TIMEOUT

#### Defined in

[src/http.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L47)

___

### API\_URL

• `Protected` `Readonly` **API\_URL**: ``"https://api.qiwi.com/partner/bill/v1/bills"``

#### Overrides

HttpAPI.API\_URL

#### Defined in

[src/services/p2p.ts:106](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L106)

___

### agent

• `Optional` **agent**: `Agent` \| (`parsedUrl`: `URL`) => `Agent`

#### Overrides

HttpAPI.agent

#### Defined in

[src/services/p2p.ts:97](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L97)

___

### publicKey

• **publicKey**: `string` = `""`

___

### secretKey

• **secretKey**: `string`

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/BillStatus.md)

#### Defined in

[src/services/p2p.ts:93](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L93)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`BillCurrency`](../enums/BillCurrency.md)

#### Defined in

[src/services/p2p.ts:94](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L94)

___

### PaySource

▪ `Static` `Readonly` **PaySource**: typeof [`BillPaySource`](../enums/BillPaySource.md)

#### Defined in

[src/services/p2p.ts:95](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L95)

## Methods

### \_generateId

▸ `Protected` **_generateId**(): `string`

Генерирует UUID

#### Returns

`string`

UUID

#### Defined in

[src/services/p2p.ts:233](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L233)

___

### \_normalizeAmount

▸ `Private` **_normalizeAmount**(`amount`): `string`

Нормализует сумму до строки с 2 числами после запятой

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | Сумма |

#### Returns

`string`

#### Defined in

[src/services/p2p.ts:181](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L181)

___

### \_request

▸ `Protected` **_request**(`url`, `method`, `headers`, `body?`): `Promise`<`any`\>

Simplified http request function

**`throws`** {HttpError} If http error code is not matched valid

**`throws`** {DecodingError} If unable to decode response

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Relative to API url path |
| `method` | `string` | Http request method |
| `headers` | `Record`<`string`, `string`\> | Additional headers to API |
| `body?` | `string` | Request body |

#### Returns

`Promise`<`any`\>

Decoded response

#### Inherited from

HttpAPI.\_request

#### Defined in

[src/http.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L64)

___

### billStatus

▸ **billStatus**(`billId`): `Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

### Проверка статуса перевода по счету

Метод позволяет проверить статус перевода по счету. Рекомендуется
его использовать после получения уведомления о переводе.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

Объект счёта

#### Defined in

[src/services/p2p.ts:197](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L197)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`): `boolean`

Проверяет подпись уведомления о статусе счёта

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | Подпись |
| `body` | [`BillStatusData`](../modules.md#billstatusdata) | Объект уведомления |

#### Returns

`boolean`

Признак валидности

#### Defined in

[src/services/p2p.ts:244](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L244)

___

### createBill

▸ **createBill**(`data`, `id?`): `Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

### Выставление счета

**По оплаченным счетам возврат денежных средств не предусмотрен.**

Доступно выставление счетов в рублях и тенге.
Надежный способ для интеграции. Параметры передаются
server2server с использованием авторизации. Метод позволяет
выставить счет: при успешном выполнении запроса в ответе
вернется параметр `payUrl` - ссылка для редиректа
пользователя на форму.

[Настройки формы и счета](https://developer.qiwi.com/ru/p2p-payments/#option)

**Для тестирования и отладки сервиса рекомендуем выставлять и оплачивать счета суммой 1 рубль.**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BillCreationRequest`](../modules.md#billcreationrequest) | Сформированный запрос на создание счёта |
| `id` | `string` | Свой ID счёта. По умолчанию генерируется UUID |

#### Returns

`Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

#### Defined in

[src/services/p2p.ts:160](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L160)

___

### createBillFormUrl

▸ **createBillFormUrl**(`parameters`, `billId?`): `string`

 Создаёт ссылку оплаты счёта без запроса к API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `Omit`<{ `amount`: `string` \| `number` ; `billId`: `string` ; `comment?`: `string` ; `customFields?`: `Record`<`string`, `string`\> ; `lifetime?`: `string` ; `publicKey`: `string` ; `successUrl?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  }, ``"billId"`` \| ``"publicKey"``\> | GET-параметры ссылки |
| `billId` | `string` | Свой ID счёта, по умолчанию случайный UUID |

#### Returns

`string`

Ссылка на оплату счёта

#### Defined in

[src/services/p2p.ts:354](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L354)

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
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.delete

#### Defined in

[src/http.ts:207](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L207)

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
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.get

#### Defined in

[src/http.ts:122](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L122)

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
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.head

#### Defined in

[src/http.ts:136](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L136)

___

### notificationMiddleware

▸ **notificationMiddleware**(`options?`, `actualHandler?`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

## Это middleware кидает ошибки, позаботьтесь об их обработке

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.memo?` | `boolean` |
| `actualHandler` | `RequestHandler`<`Record`<`string`, `string`\>, `any`, [`BillStatusData`](../modules.md#billstatusdata), `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Returns

`RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

##### Пример:
**В начале файла**
```js
const p2p = new QIWI.P2P(process.env.QIWI_PRIVATE_KEY);
```
*`Вариант 1 - Классический`*

```js
app.post('/webhook/qiwi', p2p.notificationMiddleware(), (req, res) => {
 req.body // Это `BillStatusData`
})
```

*`Вариант 2 - Если нужны подсказки типов`*

```js
app.post('/webhook/qiwi', p2p.notificationMiddleware({}, (req, res) => {
 req.body // Это `BillStatusData`
}))
```

**Обработка ошибок**
```js
app.use((error, request, response, next) => {
 console.log(error); // [Error: Notification signature mismatch]
})
```

#### Defined in

[src/services/p2p.ts:300](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L300)

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
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.patch

#### Defined in

[src/http.ts:189](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L189)

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
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.post

#### Defined in

[src/http.ts:153](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L153)

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
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.put

#### Defined in

[src/http.ts:171](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L171)

___

### rejectBill

▸ **rejectBill**(`billId`): `Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

### Отмена неоплаченного счета

Метод позволяет отменить счет, по которому не был выполнен перевод.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

Объект счёта

#### Defined in

[src/services/p2p.ts:210](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L210)

___

### formatLifetime

▸ `Static` **formatLifetime**(`days?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `days` | `number` | `1` | Кол-во дней жизни счёта (может быть не целым числом) |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

[src/services/p2p.ts:219](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L219)

___

### patchPayUrl

▸ `Static` **patchPayUrl**(`payUrl`, `options?`): `string`

Добавляет параметры

#### Parameters

| Name | Type |
| :------ | :------ |
| `payUrl` | `string` |
| `options` | `Partial`<`Object`\> |

#### Returns

`string`

Новый URL для оплаты

#### Defined in

[src/services/p2p.ts:127](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/p2p.ts#L127)
