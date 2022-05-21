[QIWI SDK](../README.md) / [Modules](../modules.md) / [shared](../modules/shared.md) / HttpClientOptions

# Interface: HttpClientOptions<Request, Response\>

[shared](../modules/shared.md).HttpClientOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [agent](shared.HttpClientOptions.md#agent)
- [baseURL](shared.HttpClientOptions.md#baseurl)
- [headers](shared.HttpClientOptions.md#headers)
- [okStatusCodes](shared.HttpClientOptions.md#okstatuscodes)
- [timeout](shared.HttpClientOptions.md#timeout)

### Methods

- [mapHttpErrors](shared.HttpClientOptions.md#maphttperrors)
- [parseResponse](shared.HttpClientOptions.md#parseresponse)
- [stringifyBody](shared.HttpClientOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Defined in

dist/cjs/apis/shared/http.d.ts:8

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

dist/cjs/apis/shared/http.d.ts:10

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:7

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:9

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

dist/cjs/apis/shared/http.d.ts:11

## Methods

### mapHttpErrors

▸ `Optional` **mapHttpErrors**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`HttpError`](../classes/index.QIWI.HttpError.md)<`any`, `any`\> |

#### Returns

`Error`

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

#### Defined in

dist/cjs/apis/shared/http.d.ts:12
