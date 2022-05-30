[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / HttpRequestOptions

# Interface: HttpRequestOptions<Request, Response\>

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).HttpRequestOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Hierarchy

- `Partial`<[`HttpClientOptions`](index.QIWI.HttpClientOptions.md)<`Request`, `Response`\>\>

  ↳ **`HttpRequestOptions`**

## Table of contents

### Properties

- [agent](index.QIWI.HttpRequestOptions.md#agent)
- [baseURL](index.QIWI.HttpRequestOptions.md#baseurl)
- [body](index.QIWI.HttpRequestOptions.md#body)
- [headers](index.QIWI.HttpRequestOptions.md#headers)
- [method](index.QIWI.HttpRequestOptions.md#method)
- [okStatusCodes](index.QIWI.HttpRequestOptions.md#okstatuscodes)
- [timeout](index.QIWI.HttpRequestOptions.md#timeout)
- [url](index.QIWI.HttpRequestOptions.md#url)

### Methods

- [mapHttpErrors](index.QIWI.HttpRequestOptions.md#maphttperrors)
- [parseResponse](index.QIWI.HttpRequestOptions.md#parseresponse)
- [stringifyBody](index.QIWI.HttpRequestOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Inherited from

Partial.agent

#### Defined in

apis/shared/http.types.ts:8

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Partial.baseURL

#### Defined in

apis/shared/http.types.ts:10

___

### body

• `Optional` **body**: `Request`

#### Defined in

apis/shared/http.types.ts:22

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Inherited from

Partial.headers

#### Defined in

apis/shared/http.types.ts:7

___

### method

• **method**: `string`

#### Defined in

apis/shared/http.types.ts:21

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

#### Inherited from

Partial.okStatusCodes

#### Defined in

apis/shared/http.types.ts:9

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Partial.timeout

#### Defined in

apis/shared/http.types.ts:11

___

### url

• **url**: `string`

#### Defined in

apis/shared/http.types.ts:20

## Methods

### mapHttpErrors

▸ `Optional` **mapHttpErrors**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`HttpError`](../classes/index.QIWI.HttpError.md)<`any`, `any`\> |

#### Returns

`Error`

#### Inherited from

Partial.mapHttpErrors

#### Defined in

apis/shared/http.types.ts:15

___

### parseResponse

▸ `Optional` **parseResponse**(`body`): `Response`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Uint8Array` |

#### Returns

`Response`

#### Inherited from

Partial.parseResponse

#### Defined in

apis/shared/http.types.ts:14

___

### stringifyBody

▸ `Optional` **stringifyBody**(`body`): `string` \| `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Request` |

#### Returns

`string` \| `Uint8Array`

#### Inherited from

Partial.stringifyBody

#### Defined in

apis/shared/http.types.ts:13
