[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / HttpClientOptions

# Interface: HttpClientOptions<Request, Response\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).HttpClientOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [agent](index._internal_.HttpClientOptions.md#agent)
- [baseURL](index._internal_.HttpClientOptions.md#baseurl)
- [headers](index._internal_.HttpClientOptions.md#headers)
- [okStatusCodes](index._internal_.HttpClientOptions.md#okstatuscodes)
- [timeout](index._internal_.HttpClientOptions.md#timeout)

### Methods

- [mapHttpErrors](index._internal_.HttpClientOptions.md#maphttperrors)
- [parseResponse](index._internal_.HttpClientOptions.md#parseresponse)
- [stringifyBody](index._internal_.HttpClientOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Defined in

dist/cjs/http.d.ts:8

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

dist/cjs/http.d.ts:10

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Defined in

dist/cjs/http.d.ts:7

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

#### Defined in

dist/cjs/http.d.ts:9

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

dist/cjs/http.d.ts:11

## Methods

### mapHttpErrors

▸ `Optional` **mapHttpErrors**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`HttpError`](../classes/index._internal_.HttpError.md)<`any`, `any`\> |

#### Returns

`Error`

#### Defined in

dist/cjs/http.d.ts:14

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

dist/cjs/http.d.ts:13

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

dist/cjs/http.d.ts:12
