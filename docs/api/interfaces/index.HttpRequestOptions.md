[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HttpRequestOptions

# Interface: HttpRequestOptions<Request, Response\>

[index](../modules/index.md).HttpRequestOptions

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

- [agent](index.HttpRequestOptions.md#agent)
- [baseURL](index.HttpRequestOptions.md#baseurl)
- [body](index.HttpRequestOptions.md#body)
- [headers](index.HttpRequestOptions.md#headers)
- [mapHttpErrors](index.HttpRequestOptions.md#maphttperrors)
- [method](index.HttpRequestOptions.md#method)
- [okStatusCodes](index.HttpRequestOptions.md#okstatuscodes)
- [parseResponse](index.HttpRequestOptions.md#parseresponse)
- [stringifyBody](index.HttpRequestOptions.md#stringifybody)
- [timeout](index.HttpRequestOptions.md#timeout)
- [url](index.HttpRequestOptions.md#url)

## Properties

### agent

• `Optional` **agent**: `any`

#### Inherited from

Partial.agent

#### Defined in

[apis/shared/http.types.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L8)

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Partial.baseURL

#### Defined in

[apis/shared/http.types.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L10)

___

### body

• `Optional` **body**: `Request`

#### Defined in

[apis/shared/http.types.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L22)

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Inherited from

Partial.headers

#### Defined in

[apis/shared/http.types.ts:7](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L7)

___

### mapHttpErrors

• `Optional` **mapHttpErrors**: (`error`: [`HttpError`](../classes/index.QIWI.HttpError.md)<`any`, `any`\>) => `Error`

#### Type declaration

▸ (`error`): `Error`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`HttpError`](../classes/index.QIWI.HttpError.md)<`any`, `any`\> |

##### Returns

`Error`

#### Inherited from

Partial.mapHttpErrors

#### Defined in

[apis/shared/http.types.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L15)

___

### method

• **method**: `string`

#### Defined in

[apis/shared/http.types.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L21)

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

#### Inherited from

Partial.okStatusCodes

#### Defined in

[apis/shared/http.types.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L9)

___

### parseResponse

• `Optional` **parseResponse**: (`body`: `Uint8Array`) => `Response`

#### Type declaration

▸ (`body`): `Response`

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Uint8Array` |

##### Returns

`Response`

#### Inherited from

Partial.parseResponse

#### Defined in

[apis/shared/http.types.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L14)

___

### stringifyBody

• `Optional` **stringifyBody**: (`body`: `Request`) => `string` \| `Uint8Array`

#### Type declaration

▸ (`body`): `string` \| `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Request` |

##### Returns

`string` \| `Uint8Array`

#### Inherited from

Partial.stringifyBody

#### Defined in

[apis/shared/http.types.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L13)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Partial.timeout

#### Defined in

[apis/shared/http.types.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L11)

___

### url

• **url**: `string`

#### Defined in

[apis/shared/http.types.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L20)
