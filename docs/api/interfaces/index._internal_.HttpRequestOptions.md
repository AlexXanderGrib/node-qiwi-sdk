[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / HttpRequestOptions

# Interface: HttpRequestOptions<Rq, Rs\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).HttpRequestOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Hierarchy

- `Partial`<[`HttpClientOptions`](index._internal_.HttpClientOptions.md)<`Rq`, `Rs`\>\>

  ↳ **`HttpRequestOptions`**

## Table of contents

### Properties

- [agent](index._internal_.HttpRequestOptions.md#agent)
- [baseURL](index._internal_.HttpRequestOptions.md#baseurl)
- [body](index._internal_.HttpRequestOptions.md#body)
- [headers](index._internal_.HttpRequestOptions.md#headers)
- [method](index._internal_.HttpRequestOptions.md#method)
- [okStatusCodes](index._internal_.HttpRequestOptions.md#okstatuscodes)
- [timeout](index._internal_.HttpRequestOptions.md#timeout)
- [url](index._internal_.HttpRequestOptions.md#url)

### Methods

- [mapHttpErrors](index._internal_.HttpRequestOptions.md#maphttperrors)
- [parseResponse](index._internal_.HttpRequestOptions.md#parseresponse)
- [stringifyBody](index._internal_.HttpRequestOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Inherited from

Partial.agent

#### Defined in

[dist/cjs/http.d.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L8)

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Partial.baseURL

#### Defined in

[dist/cjs/http.d.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L10)

___

### body

• `Optional` **body**: `Rq`

#### Defined in

[dist/cjs/http.d.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L19)

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Inherited from

Partial.headers

#### Defined in

[dist/cjs/http.d.ts:7](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L7)

___

### method

• **method**: `string`

#### Defined in

[dist/cjs/http.d.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L18)

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

#### Inherited from

Partial.okStatusCodes

#### Defined in

[dist/cjs/http.d.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L9)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Partial.timeout

#### Defined in

[dist/cjs/http.d.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L11)

___

### url

• **url**: `string`

#### Defined in

[dist/cjs/http.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L17)

## Methods

### mapHttpErrors

▸ `Optional` **mapHttpErrors**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`HttpError`](../classes/index._internal_.HttpError.md)<`any`, `any`\> |

#### Returns

`Error`

#### Inherited from

Partial.mapHttpErrors

#### Defined in

[dist/cjs/http.d.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L14)

___

### parseResponse

▸ `Optional` **parseResponse**(`body`): `Rs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Buffer` |

#### Returns

`Rs`

#### Inherited from

Partial.parseResponse

#### Defined in

[dist/cjs/http.d.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L13)

___

### stringifyBody

▸ `Optional` **stringifyBody**(`body`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Rq` |

#### Returns

`string` \| `Buffer`

#### Inherited from

Partial.stringifyBody

#### Defined in

[dist/cjs/http.d.ts:12](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L12)
