[QIWI SDK](../README.md) / [Modules](../modules.md) / apis/shared

# Module: apis/shared

## Table of contents

### References

- [URL](apis_shared.md#url)
- [URLSearchParameters](apis_shared.md#urlsearchparameters)

### Enumerations

- [TimeSpan](../enums/apis_shared.TimeSpan.md)

### Classes

- [HttpError](../classes/apis_shared.HttpError.md)
- [SimpleJsonHttp](../classes/apis_shared.SimpleJsonHttp.md)

### Interfaces

- [HttpClient](../interfaces/apis_shared.HttpClient.md)
- [HttpClientOptions](../interfaces/apis_shared.HttpClientOptions.md)
- [HttpRequestOptions](../interfaces/apis_shared.HttpRequestOptions.md)
- [HttpResponse](../interfaces/apis_shared.HttpResponse.md)

### Type Aliases

- [AnyParameters](apis_shared.md#anyparameters)
- [AnyRecord](apis_shared.md#anyrecord)
- [Collection](apis_shared.md#collection)
- [Headers](apis_shared.md#headers)
- [HmacOptions](apis_shared.md#hmacoptions)
- [ObjectKey](apis_shared.md#objectkey)
- [ReadonlyRecord](apis_shared.md#readonlyrecord)
- [TimeSpanKeys](apis_shared.md#timespankeys)
- [TimeSpanMapping](apis_shared.md#timespanmapping)
- [URLResult](apis_shared.md#urlresult)

### Variables

- [TimeSpanMapping](apis_shared.md#timespanmapping-1)
- [USER\_AGENT](apis_shared.md#user_agent)
- [environment](apis_shared.md#environment)

### Functions

- [collect](apis_shared.md#collect)
- [compareHmac](apis_shared.md#comparehmac)
- [compareQiwiHmac](apis_shared.md#compareqiwihmac)
- [formatAltLifetimeDate](apis_shared.md#formataltlifetimedate)
- [formatDate](apis_shared.md#formatdate)
- [formatOffsetAltLifetimeDate](apis_shared.md#formatoffsetaltlifetimedate)
- [formatOffsetDate](apis_shared.md#formatoffsetdate)
- [formatQuerystring](apis_shared.md#formatquerystring)
- [generateUUID](apis_shared.md#generateuuid)
- [url](apis_shared.md#url-1)

## References

### URL

Re-exports [URL](index.QIWI.md#url)

___

### URLSearchParameters

Re-exports [URLSearchParameters](index.QIWI.md#urlsearchparameters)

## Type Aliases

### AnyParameters

Ƭ **AnyParameters**: `any`[]

#### Defined in

[apis/shared/types.ts:5](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/types.ts#L5)

___

### AnyRecord

Ƭ **AnyRecord**: [`ReadonlyRecord`](index.QIWI.md#readonlyrecord)<`string`, `unknown`\>

#### Defined in

[apis/shared/types.ts:4](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/types.ts#L4)

___

### Collection

Ƭ **Collection**<`T`\>: `Iterable`<`T`\> \| `ArrayLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[apis/shared/types.ts:1](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/types.ts#L1)

___

### Headers

Ƭ **Headers**: [`ReadonlyRecord`](index.QIWI.md#readonlyrecord)<`string`, `string`\>

#### Defined in

[apis/shared/http.types.ts:4](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/http.types.ts#L4)

___

### HmacOptions

Ƭ **HmacOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `algorithm?` | `string` |
| `data` | [`BinaryAlike`](index._internal_.md#binaryalike) |
| `digest` | [`BinaryAlike`](index._internal_.md#binaryalike) |
| `key` | [`BinaryAlike`](index._internal_.md#binaryalike) |

#### Defined in

[apis/shared/hmac.ts:4](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/hmac.ts#L4)

___

### ObjectKey

Ƭ **ObjectKey**: `string` \| `number`

#### Defined in

[apis/shared/types.ts:2](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/types.ts#L2)

___

### ReadonlyRecord

Ƭ **ReadonlyRecord**<`K`, `V`\>: `Readonly`<`Record`<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`ObjectKey`](index.QIWI.md#objectkey) |
| `V` | `V` |

#### Defined in

[apis/shared/types.ts:3](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/types.ts#L3)

___

### TimeSpanKeys

Ƭ **TimeSpanKeys**: keyof [`TimeSpanMapping`](index.QIWI.md#timespanmapping-1)

#### Defined in

[apis/shared/time.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L78)

___

### TimeSpanMapping

Ƭ **TimeSpanMapping**: typeof [`TimeSpanMapping`](index.QIWI.md#timespanmapping-1)

#### Defined in

[apis/shared/time.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L53)

[apis/shared/time.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L77)

___

### URLResult

Ƭ **URLResult**: (`queryParameters?`: [`AnyRecord`](index.QIWI.md#anyrecord)) => `string`

#### Type declaration

▸ (`queryParameters?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters?` | [`AnyRecord`](index.QIWI.md#anyrecord) |

##### Returns

`string`

#### Defined in

[apis/shared/url.ts:4](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/url.ts#L4)

## Variables

### TimeSpanMapping

• `Const` **TimeSpanMapping**: `Readonly`<{ `d`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Day; `day`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Day; `h`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Hour; `hour`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Hour; `hr`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Hour; `m`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Minute; `millisecond`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Millisecond; `min`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Minute; `minute`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Minute; `mn`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Month; `mon`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Month; `month`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Month; `ms`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Millisecond; `msec`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Millisecond; `s`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Second; `sec`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Second; `second`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Second; `w`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Week; `week`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Week; `y`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Year; `year`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Year; `yr`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) = TimeSpan.Year }\>

#### Defined in

[apis/shared/time.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L53)

[apis/shared/time.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L77)

___

### USER\_AGENT

• `Const` **USER\_AGENT**: `string`

#### Defined in

[apis/shared/identity.ts:1](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/identity.ts#L1)

___

### environment

• `Const` **environment**: `Readonly`<`Record`<``"QIWI_TOKEN"`` \| ``"QIWI_WALLET"`` \| ``"QIWI_SECRET_KEY"`` \| ``"QIWI_PUBLIC_KEY"``, `string`\>\>

#### Defined in

[apis/shared/environment.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/environment.ts#L32)

## Functions

### collect

▸ **collect**<`T`\>(`collection`): `T`[]

**`Export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | [`Collection`](index.QIWI.md#collection)<`T`\> |

#### Returns

`T`[]

#### Defined in

[apis/shared/collect.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/collect.ts#L11)

___

### compareHmac

▸ **compareHmac**(`options`): `boolean`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HmacOptions`](index.QIWI.md#hmacoptions) |

#### Returns

`boolean`

#### Defined in

[apis/shared/hmac.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/hmac.ts#L18)

___

### compareQiwiHmac

▸ **compareQiwiHmac**(`key`, `digest`, `data`): `boolean`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`BinaryAlike`](index._internal_.md#binaryalike) |
| `digest` | [`BinaryAlike`](index._internal_.md#binaryalike) |
| `data` | `string`[] |

#### Returns

`boolean`

boolean

#### Defined in

[apis/shared/hmac.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/hmac.ts#L43)

___

### formatAltLifetimeDate

▸ **formatAltLifetimeDate**(`dateTime`): `string`

**Используется только для параметра `lifetime` при создании ссылки на форму оплаты**

Форматирует дату в понятную для QIWI строку:

`ГГГГ-ММ-ДДTччмм`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateTime` | [`DateValue`](index._internal_.md#datevalue) |

#### Returns

`string`

string

#### Defined in

[apis/shared/time.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L31)

___

### formatDate

▸ **formatDate**(`dateTime`): `string`

Форматирует дату в понятную для QIWI строку:

`ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateTime` | [`DateValue`](index._internal_.md#datevalue) | Аргумент для конструктора |

#### Returns

`string`

#### Defined in

[apis/shared/time.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L13)

___

### formatOffsetAltLifetimeDate

▸ **formatOffsetAltLifetimeDate**(`amount`, `unit?`, `currentDate?`): `string`

**`Export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `undefined` |
| `unit` | [`TimeUnit`](index._internal_.md#timeunit) | `TimeSpan.Millisecond` |
| `currentDate?` | `Date` | `undefined` |

#### Returns

`string`

string

#### Defined in

[apis/shared/time.ts:133](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L133)

___

### formatOffsetDate

▸ **formatOffsetDate**(`amount`, `unit?`, `currentDate?`): `string`

**Используется только для параметра `lifetime` при создании ссылки на форму оплаты**

Форматирует дату в понятную для QIWI строку:

`ГГГГ-ММ-ДДTччмм`

**`Export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `undefined` |
| `unit` | [`TimeUnit`](index._internal_.md#timeunit) | `TimeSpan.Millisecond` |
| `currentDate?` | `Date` | `undefined` |

#### Returns

`string`

string

#### Defined in

[apis/shared/time.ts:116](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/time.ts#L116)

___

### formatQuerystring

▸ **formatQuerystring**(`object`): `string`

Создаёт строку запроса, в формате, который понимает QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Readonly`<`Record`<`string`, `unknown`\>\> | Объект для преобразования |

#### Returns

`string`

#### Defined in

[apis/shared/querystring.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/querystring.ts#L27)

___

### generateUUID

▸ **generateUUID**(): `string`

Генерирует UUID

**`Export`**

#### Returns

`string`

#### Defined in

[apis/shared/uuid.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/uuid.ts#L9)

___

### url

▸ **url**(`parts`, `...insertions`): [`URLResult`](index.QIWI.md#urlresult)

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `parts` | `TemplateStringsArray` |
| `...insertions` | `unknown`[] |

#### Returns

[`URLResult`](index.QIWI.md#urlresult)

#### Defined in

[apis/shared/url.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/shared/url.ts#L14)
