[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HttpClientOptions

# Interface: HttpClientOptions<Rq, Rs\>

[<internal>](../modules/internal_.md).HttpClientOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Table of contents

### Properties

- [agent](internal_.HttpClientOptions.md#agent)
- [baseURL](internal_.HttpClientOptions.md#baseurl)
- [headers](internal_.HttpClientOptions.md#headers)
- [okStatusCodes](internal_.HttpClientOptions.md#okstatuscodes)
- [timeout](internal_.HttpClientOptions.md#timeout)

### Methods

- [mapHttpErrors](internal_.HttpClientOptions.md#maphttperrors)
- [parseResponse](internal_.HttpClientOptions.md#parseresponse)
- [stringifyBody](internal_.HttpClientOptions.md#stringifybody)

## Properties

### agent

• `Optional` **agent**: `any`

#### Defined in

[src/http.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L8)

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

[src/http.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L10)

___

### headers

• `Optional` **headers**: [`Readonly`](../modules/internal_.md#readonly)<[`Record`](../modules/internal_.md#record)<`string`, `string`\>\>

#### Defined in

[src/http.ts:7](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L7)

___

### okStatusCodes

• `Optional` **okStatusCodes**: [`Collection`](../modules/QIWI.md#collection)<`number`\>

#### Defined in

[src/http.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L9)

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

[src/http.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L11)

## Methods

### mapHttpErrors

▸ `Optional` **mapHttpErrors**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`HttpError`](../classes/internal_.HttpError.md)<`any`, `any`\> |

#### Returns

`Error`

#### Defined in

[src/http.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L15)

___

### parseResponse

▸ `Optional` **parseResponse**(`body`): `Rs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`Buffer`](../modules/internal_.md#buffer) |

#### Returns

`Rs`

#### Defined in

[src/http.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L14)

___

### stringifyBody

▸ `Optional` **stringifyBody**(`body`): `string` \| [`Buffer`](../modules/internal_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Rq` |

#### Returns

`string` \| [`Buffer`](../modules/internal_.md#buffer)

#### Defined in

[src/http.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/http.ts#L13)
