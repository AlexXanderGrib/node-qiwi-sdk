[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / HttpClientOptions

# Interface: HttpClientOptions<Request, Response\>

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).HttpClientOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [agent](index.QIWI.HttpClientOptions.md#agent)
- [baseURL](index.QIWI.HttpClientOptions.md#baseurl)
- [headers](index.QIWI.HttpClientOptions.md#headers)
- [okStatusCodes](index.QIWI.HttpClientOptions.md#okstatuscodes)
- [timeout](index.QIWI.HttpClientOptions.md#timeout)

### Methods

- [mapHttpErrors](index.QIWI.HttpClientOptions.md#maphttperrors)
- [parseResponse](index.QIWI.HttpClientOptions.md#parseresponse)
- [stringifyBody](index.QIWI.HttpClientOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Defined in

apis/shared/http.types.ts:8

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

apis/shared/http.types.ts:10

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Defined in

apis/shared/http.types.ts:7

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

#### Defined in

apis/shared/http.types.ts:9

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

apis/shared/http.types.ts:11

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

#### Defined in

apis/shared/http.types.ts:13
