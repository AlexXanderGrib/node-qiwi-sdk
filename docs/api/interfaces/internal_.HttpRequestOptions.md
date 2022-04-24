[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HttpRequestOptions

# Interface: HttpRequestOptions<Rq, Rs\>

[<internal>](../modules/internal_.md).HttpRequestOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Hierarchy

- [`Partial`](../modules/internal_.md#partial)<[`HttpClientOptions`](internal_.HttpClientOptions.md)<`Rq`, `Rs`\>\>

  ↳ **`HttpRequestOptions`**

## Table of contents

### Properties

- [agent](internal_.HttpRequestOptions.md#agent)
- [baseURL](internal_.HttpRequestOptions.md#baseurl)
- [body](internal_.HttpRequestOptions.md#body)
- [headers](internal_.HttpRequestOptions.md#headers)
- [method](internal_.HttpRequestOptions.md#method)
- [okStatusCodes](internal_.HttpRequestOptions.md#okstatuscodes)
- [timeout](internal_.HttpRequestOptions.md#timeout)
- [url](internal_.HttpRequestOptions.md#url)

### Methods

- [mapHttpErrors](internal_.HttpRequestOptions.md#maphttperrors)
- [parseResponse](internal_.HttpRequestOptions.md#parseresponse)
- [stringifyBody](internal_.HttpRequestOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Inherited from

Partial.agent

#### Defined in

[src/http.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L8)

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Partial.baseURL

#### Defined in

[src/http.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L10)

___

### body

• `Optional` **body**: `Rq`

#### Defined in

[src/http.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L22)

___

### headers

• `Optional` **headers**: [`Readonly`](../modules/internal_.md#readonly)<[`Record`](../modules/internal_.md#record)<`string`, `string`\>\>

#### Inherited from

Partial.headers

#### Defined in

[src/http.ts:7](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L7)

___

### method

• **method**: `string`

#### Defined in

[src/http.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L21)

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/QIWI.md#collection)<`number`\>

#### Inherited from

Partial.okStatusCodes

#### Defined in

[src/http.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L9)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Partial.timeout

#### Defined in

[src/http.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L11)

___

### url

• **url**: `string`

#### Defined in

[src/http.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L20)

## Methods

### mapHttpErrors

▸ `Optional` **mapHttpErrors**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`HttpError`](../classes/internal_.HttpError.md)<`any`, `any`\> |

#### Returns

`Error`

#### Inherited from

Partial.mapHttpErrors

#### Defined in

[src/http.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L15)

___

### parseResponse

▸ `Optional` **parseResponse**(`body`): `Rs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`Buffer`](../modules/internal_.md#buffer) |

#### Returns

`Rs`

#### Inherited from

Partial.parseResponse

#### Defined in

[src/http.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L14)

___

### stringifyBody

▸ `Optional` **stringifyBody**(`body`): `string` \| [`Buffer`](../modules/internal_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Rq` |

#### Returns

`string` \| [`Buffer`](../modules/internal_.md#buffer)

#### Inherited from

Partial.stringifyBody

#### Defined in

[src/http.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L13)
