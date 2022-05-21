[QIWI SDK](../README.md) / [Modules](../modules.md) / [shared](../modules/shared.md) / HttpRequestOptions

# Interface: HttpRequestOptions<Request, Response\>

[shared](../modules/shared.md).HttpRequestOptions

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

- [agent](shared.HttpRequestOptions.md#agent)
- [baseURL](shared.HttpRequestOptions.md#baseurl)
- [body](shared.HttpRequestOptions.md#body)
- [headers](shared.HttpRequestOptions.md#headers)
- [method](shared.HttpRequestOptions.md#method)
- [okStatusCodes](shared.HttpRequestOptions.md#okstatuscodes)
- [timeout](shared.HttpRequestOptions.md#timeout)
- [url](shared.HttpRequestOptions.md#url)

### Methods

- [mapHttpErrors](shared.HttpRequestOptions.md#maphttperrors)
- [parseResponse](shared.HttpRequestOptions.md#parseresponse)
- [stringifyBody](shared.HttpRequestOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Inherited from

Partial.agent

#### Defined in

dist/cjs/apis/shared/http.d.ts:8

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Partial.baseURL

#### Defined in

dist/cjs/apis/shared/http.d.ts:10

___

### body

• `Optional` **body**: `Request`

#### Defined in

dist/cjs/apis/shared/http.d.ts:19

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Inherited from

Partial.headers

#### Defined in

dist/cjs/apis/shared/http.d.ts:7

___

### method

• **method**: `string`

#### Defined in

dist/cjs/apis/shared/http.d.ts:18

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

#### Inherited from

Partial.okStatusCodes

#### Defined in

dist/cjs/apis/shared/http.d.ts:9

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Partial.timeout

#### Defined in

dist/cjs/apis/shared/http.d.ts:11

___

### url

• **url**: `string`

#### Defined in

dist/cjs/apis/shared/http.d.ts:17

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

dist/cjs/apis/shared/http.d.ts:14

___

### parseResponse

▸ `Optional` **parseResponse**(`body`): `Response`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Buffer` |

#### Returns

`Response`

#### Inherited from

Partial.parseResponse

#### Defined in

dist/cjs/apis/shared/http.d.ts:13

___

### stringifyBody

▸ `Optional` **stringifyBody**(`body`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Request` |

#### Returns

`string` \| `Buffer`

#### Inherited from

Partial.stringifyBody

#### Defined in

dist/cjs/apis/shared/http.d.ts:12
