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

[src/http.ts:181](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L181)

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

[src/http.ts:250](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L250)

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

[src/http.ts:196](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L196)

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

[src/http.ts:235](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L235)

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

[src/http.ts:209](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L209)

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

[src/http.ts:222](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L222)

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

[src/http.ts:276](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L276)

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

[src/http.ts:265](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/http.ts#L265)
