[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SimpleJsonHttp

# Class: SimpleJsonHttp

[<internal>](../modules/internal_.md).SimpleJsonHttp

**`export`**

## Table of contents

### Constructors

- [constructor](internal_.SimpleJsonHttp.md#constructor)

### Properties

- [client](internal_.SimpleJsonHttp.md#client)

### Methods

- [delete](internal_.SimpleJsonHttp.md#delete)
- [get](internal_.SimpleJsonHttp.md#get)
- [patch](internal_.SimpleJsonHttp.md#patch)
- [post](internal_.SimpleJsonHttp.md#post)
- [put](internal_.SimpleJsonHttp.md#put)
- [request](internal_.SimpleJsonHttp.md#request)
- [simpleRequest](internal_.SimpleJsonHttp.md#simplerequest)

## Constructors

### constructor

• **new SimpleJsonHttp**(`client?`)

Creates an instance of SimpleJsonHttp.

**`memberof`** SimpleJsonHttp

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`HttpClient`](../interfaces/internal_.HttpClient.md)<`any`, `any`\> |

#### Defined in

[src/http.ts:184](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L184)

## Properties

### client

• **client**: [`HttpClient`](../interfaces/internal_.HttpClient.md)<`any`, `any`\>

## Methods

### delete

▸ **delete**<`T`\>(`url`, `data?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/http.ts:251](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L251)

___

### get

▸ **get**<`T`\>(`url`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/http.ts:199](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L199)

___

### patch

▸ **patch**<`T`\>(`url`, `data?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/http.ts:238](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L238)

___

### post

▸ **post**<`T`\>(`url`, `data?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/http.ts:212](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L212)

___

### put

▸ **put**<`T`\>(`url`, `data?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/http.ts:225](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L225)

___

### request

▸ **request**<`T`\>(`option`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`HttpRequestOptions`](../interfaces/internal_.HttpRequestOptions.md)<`any`, `any`\> |

#### Returns

`Promise`<`T`\>

{Promise<T>}

#### Defined in

[src/http.ts:275](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L275)

___

### simpleRequest

▸ **simpleRequest**<`T`\>(`method`, `url`, `body?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `url` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

{Promise<T>}

#### Defined in

[src/http.ts:264](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/http.ts#L264)
