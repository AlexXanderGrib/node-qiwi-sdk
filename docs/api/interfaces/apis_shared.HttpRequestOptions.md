[QIWI SDK](../README.md) / [Modules](../modules.md) / [apis/shared](../modules/apis_shared.md) / HttpRequestOptions

# Interface: HttpRequestOptions<Request, Response\>

[apis/shared](../modules/apis_shared.md).HttpRequestOptions

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

- [agent](apis_shared.HttpRequestOptions.md#agent)
- [baseURL](apis_shared.HttpRequestOptions.md#baseurl)
- [body](apis_shared.HttpRequestOptions.md#body)
- [headers](apis_shared.HttpRequestOptions.md#headers)
- [method](apis_shared.HttpRequestOptions.md#method)
- [okStatusCodes](apis_shared.HttpRequestOptions.md#okstatuscodes)
- [timeout](apis_shared.HttpRequestOptions.md#timeout)
- [url](apis_shared.HttpRequestOptions.md#url)

### Methods

- [mapHttpErrors](apis_shared.HttpRequestOptions.md#maphttperrors)
- [parseResponse](apis_shared.HttpRequestOptions.md#parseresponse)
- [stringifyBody](apis_shared.HttpRequestOptions.md#stringifybody)

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
