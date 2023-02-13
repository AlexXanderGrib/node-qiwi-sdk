[QIWI SDK](../README.md) / [Modules](../modules.md) / [apis/shared](../modules/apis_shared.md) / HttpClientOptions

# Interface: HttpClientOptions<Request, Response\>

[apis/shared](../modules/apis_shared.md).HttpClientOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [agent](apis_shared.HttpClientOptions.md#agent)
- [baseURL](apis_shared.HttpClientOptions.md#baseurl)
- [headers](apis_shared.HttpClientOptions.md#headers)
- [mapHttpErrors](apis_shared.HttpClientOptions.md#maphttperrors)
- [okStatusCodes](apis_shared.HttpClientOptions.md#okstatuscodes)
- [parseResponse](apis_shared.HttpClientOptions.md#parseresponse)
- [stringifyBody](apis_shared.HttpClientOptions.md#stringifybody)
- [timeout](apis_shared.HttpClientOptions.md#timeout)

## Properties

### agent

• `Optional` **agent**: `any`

#### Defined in

[apis/shared/http.types.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L8)

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

[apis/shared/http.types.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L10)

___

### headers

• `Optional` **headers**: `Readonly`<`Record`<`string`, `string`\>\>

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

#### Defined in

[apis/shared/http.types.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L15)

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/index.QIWI.md#collection)<`number`\>

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

#### Defined in

[apis/shared/http.types.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L13)

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

[apis/shared/http.types.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L11)
