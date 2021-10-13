[qiwi-sdk](../README.md) / [Exports](../modules.md) / Detector

# Class: Detector

API получения ID провайдера QIWI по Номеру Телефона/Карте

## Hierarchy

- `HttpAPI`

  ↳ **`Detector`**

## Table of contents

### Constructors

- [constructor](Detector.md#constructor)

### Properties

- [API\_HEADERS](Detector.md#api_headers)
- [API\_OK\_RESPONSE\_CODES](Detector.md#api_ok_response_codes)
- [API\_TIMEOUT](Detector.md#api_timeout)
- [API\_URL](Detector.md#api_url)
- [agent](Detector.md#agent)

### Methods

- [\_extractProvider](Detector.md#_extractprovider)
- [\_request](Detector.md#_request)
- [delete](Detector.md#delete)
- [get](Detector.md#get)
- [getCardProvider](Detector.md#getcardprovider)
- [getPhoneProvider](Detector.md#getphoneprovider)
- [head](Detector.md#head)
- [patch](Detector.md#patch)
- [post](Detector.md#post)
- [put](Detector.md#put)

## Constructors

### constructor

• **new Detector**()

#### Inherited from

HttpAPI.constructor

## Properties

### API\_HEADERS

• `Protected` `Readonly` **API\_HEADERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Accept` | `string` |
| `Content-Type` | `string` |

#### Overrides

HttpAPI.API\_HEADERS

#### Defined in

[src/services/detector.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/detector.ts#L17)

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

• `Protected` `Readonly` **API\_URL**: ``"https://qiwi.com"``

#### Overrides

HttpAPI.API\_URL

#### Defined in

[src/services/detector.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/detector.ts#L16)

___

### agent

• `Protected` `Optional` **agent**: `Agent` \| (`parsedUrl`: `URL`) => `Agent`

#### Inherited from

HttpAPI.agent

#### Defined in

[src/http.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/http.ts#L49)

## Methods

### \_extractProvider

▸ `Private` **_extractProvider**(`response`): `number`

Вытаскивает ID провайдера из объекта ответа

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `AnyResponse` |

#### Returns

`number`

ID провайдера

#### Defined in

[src/services/detector.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/detector.ts#L28)

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

### getCardProvider

▸ **getCardProvider**(`cardNumber`): `Promise`<`number`\>

Возвращает ID провайдера QIWI по номеру карты.
Используется для переводов на карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardNumber` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/services/detector.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/detector.ts#L56)

___

### getPhoneProvider

▸ **getPhoneProvider**(`phone`): `Promise`<`number`\>

Возвращает ID провайдера QIWI по номеру телефона.
Используется для пополнения на счёта мобильного

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/services/detector.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/services/detector.ts#L40)

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
