[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / SimpleJsonHttp

# Class: SimpleJsonHttp

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).SimpleJsonHttp

**`export`**

## Table of contents

### Constructors

- [constructor](index._internal_.SimpleJsonHttp.md#constructor)

### Properties

- [client](index._internal_.SimpleJsonHttp.md#client)

### Methods

- [delete](index._internal_.SimpleJsonHttp.md#delete)
- [get](index._internal_.SimpleJsonHttp.md#get)
- [patch](index._internal_.SimpleJsonHttp.md#patch)
- [post](index._internal_.SimpleJsonHttp.md#post)
- [put](index._internal_.SimpleJsonHttp.md#put)
- [request](index._internal_.SimpleJsonHttp.md#request)
- [simpleRequest](index._internal_.SimpleJsonHttp.md#simplerequest)

## Constructors

### constructor

• **new SimpleJsonHttp**(`client?`)

Creates an instance of SimpleJsonHttp.

**`memberof`** SimpleJsonHttp

#### Parameters

| Name | Type |
| :------ | :------ |
| `client?` | [`HttpClient`](../interfaces/index._internal_.HttpClient.md)<`any`, `any`\> |

#### Defined in

[dist/cjs/http.d.ts:95](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L95)

## Properties

### client

• **client**: [`HttpClient`](../interfaces/index._internal_.HttpClient.md)<`any`, `any`\>

#### Defined in

[dist/cjs/http.d.ts:89](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L89)

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

[dist/cjs/http.d.ts:144](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L144)

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

[dist/cjs/http.d.ts:104](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L104)

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

[dist/cjs/http.d.ts:134](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L134)

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

[dist/cjs/http.d.ts:114](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L114)

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

[dist/cjs/http.d.ts:124](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L124)

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
| `option` | [`HttpRequestOptions`](../interfaces/index._internal_.HttpRequestOptions.md)<`any`, `any`\> |

#### Returns

`Promise`<`T`\>

{Promise<T>}

#### Defined in

[dist/cjs/http.d.ts:162](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L162)

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

[dist/cjs/http.d.ts:154](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L154)
