[QIWI SDK](../README.md) / [Modules](../modules.md) / shared

# Module: shared

## Table of contents

### Enumerations

- [TimeSpan](../enums/shared.TimeSpan.md)

### Classes

- [DefaultHttpClient](../classes/shared.DefaultHttpClient.md)
- [HttpError](../classes/shared.HttpError.md)
- [SimpleJsonHttp](../classes/shared.SimpleJsonHttp.md)

### Interfaces

- [HttpClient](../interfaces/shared.HttpClient.md)
- [HttpClientOptions](../interfaces/shared.HttpClientOptions.md)
- [HttpRequestOptions](../interfaces/shared.HttpRequestOptions.md)
- [HttpResponse](../interfaces/shared.HttpResponse.md)

### Type aliases

- [AnyRecord](shared.md#anyrecord)
- [AnyResponse](shared.md#anyresponse)
- [Collection](shared.md#collection)
- [Headers](shared.md#headers)
- [HmacOptions](shared.md#hmacoptions)
- [ObjectKey](shared.md#objectkey)
- [ReadonlyRecord](shared.md#readonlyrecord)
- [TimeSpanKeys](shared.md#timespankeys)
- [TimeSpanMapping](shared.md#timespanmapping)

### Variables

- [TimeSpanMapping](shared.md#timespanmapping-1)
- [USER\_AGENT](shared.md#user_agent)
- [environment](shared.md#environment)

### Functions

- [collect](shared.md#collect)
- [compareHmac](shared.md#comparehmac)
- [compareQiwiHmac](shared.md#compareqiwihmac)
- [formatDate](shared.md#formatdate)
- [formatOffsetDate](shared.md#formatoffsetdate)
- [formatQuerystring](shared.md#formatquerystring)
- [generateUUID](shared.md#generateuuid)
- [url](shared.md#url)

## Type aliases

### AnyRecord

Ƭ **AnyRecord**: [`ReadonlyRecord`](index.QIWI.md#readonlyrecord)<`string`, `unknown`\>

#### Defined in

dist/cjs/apis/shared/types.d.ts:5

___

### AnyResponse

Ƭ **AnyResponse**: `Record`<`string`, `any`\>

#### Defined in

dist/cjs/apis/shared/types.d.ts:1

___

### Collection

Ƭ **Collection**<`T`\>: `Iterable`<`T`\> \| `ArrayLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/cjs/apis/shared/types.d.ts:2

___

### Headers

Ƭ **Headers**: [`ReadonlyRecord`](index.QIWI.md#readonlyrecord)<`string`, `string`\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:5

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

dist/cjs/apis/shared/hmac.d.ts:3

___

### ObjectKey

Ƭ **ObjectKey**: `string` \| `number`

#### Defined in

dist/cjs/apis/shared/types.d.ts:3

___

### ReadonlyRecord

Ƭ **ReadonlyRecord**<`K`, `V`\>: `Readonly`<`Record`<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`ObjectKey`](index.QIWI.md#objectkey) |
| `V` | `V` |

#### Defined in

dist/cjs/apis/shared/types.d.ts:4

___

### TimeSpanKeys

Ƭ **TimeSpanKeys**: keyof [`TimeSpanMapping`](index.QIWI.md#timespanmapping-1)

#### Defined in

dist/cjs/apis/shared/time.d.ts:45

___

### TimeSpanMapping

Ƭ **TimeSpanMapping**: typeof [`TimeSpanMapping`](index.QIWI.md#timespanmapping-1)

#### Defined in

dist/cjs/apis/shared/time.d.ts:44

## Variables

### TimeSpanMapping

• `Const` **TimeSpanMapping**: `Readonly`<{ `d`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `day`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `h`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `hour`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `hr`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `m`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `millisecond`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `min`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `minute`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `mn`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `mon`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `month`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `ms`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `msec`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `s`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `sec`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `second`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `w`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `week`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `y`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `year`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) ; `yr`: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md)  }\>

#### Defined in

dist/cjs/apis/shared/time.d.ts:20

___

### USER\_AGENT

• `Const` **USER\_AGENT**: `string`

#### Defined in

dist/cjs/apis/shared/identity.d.ts:1

___

### environment

• `Const` **environment**: `Readonly`<`Record`<``"QIWI_TOKEN"`` \| ``"QIWI_WALLET"`` \| ``"QIWI_SECRET_KEY"`` \| ``"QIWI_PUBLIC_KEY"``, `string`\>\>

#### Defined in

dist/cjs/apis/shared/environment.d.ts:1

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
| `collection` | [`Collection`](index.QIWI.md#collection)<`T`\> |

#### Returns

`T`[]

#### Defined in

dist/cjs/apis/shared/collect.d.ts:10

___

### compareHmac

▸ **compareHmac**(`options`): `boolean`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HmacOptions`](index.QIWI.md#hmacoptions) |

#### Returns

`boolean`

#### Defined in

dist/cjs/apis/shared/hmac.d.ts:16

___

### compareQiwiHmac

▸ **compareQiwiHmac**(`key`, `digest`, `data`): `boolean`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`BinaryAlike`](index._internal_.md#binaryalike) |
| `digest` | [`BinaryAlike`](index._internal_.md#binaryalike) |
| `data` | `string`[] |

#### Returns

`boolean`

{boolean}

#### Defined in

dist/cjs/apis/shared/hmac.d.ts:26

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

dist/cjs/apis/shared/time.d.ts:9

___

### formatOffsetDate

▸ **formatOffsetDate**(`amount`, `unit?`, `currentDate?`): `string`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `unit?` | `number` \| ``"ms"`` \| ``"msec"`` \| ``"millisecond"`` \| ``"s"`` \| ``"sec"`` \| ``"second"`` \| ``"m"`` \| ``"min"`` \| ``"minute"`` \| ``"h"`` \| ``"hr"`` \| ``"hour"`` \| ``"d"`` \| ``"day"`` \| ``"w"`` \| ``"week"`` \| ``"mn"`` \| ``"mon"`` \| ``"month"`` \| ``"y"`` \| ``"yr"`` \| ``"year"`` |
| `currentDate?` | `Date` |

#### Returns

`string`

{string}

#### Defined in

dist/cjs/apis/shared/time.d.ts:55

___

### formatQuerystring

▸ **formatQuerystring**(`object`): `string`

Создаёт строку запроса, в формате, который понимает QIWI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`AnyResponse`](index.QIWI.md#anyresponse) | Объект для преобразования |

#### Returns

`string`

#### Defined in

dist/cjs/apis/shared/querystring.d.ts:8

___

### generateUUID

▸ **generateUUID**(): `string`

Генерирует UUID

**`export`**

#### Returns

`string`

#### Defined in

dist/cjs/apis/shared/uuid.d.ts:7

___

### url

▸ **url**(`parts`, ...`insertions`): [`URLResult`](index._internal_.md#urlresult)

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `parts` | `TemplateStringsArray` |
| `...insertions` | `unknown`[] |

#### Returns

[`URLResult`](index._internal_.md#urlresult)

#### Defined in

dist/cjs/apis/shared/url.d.ts:11
