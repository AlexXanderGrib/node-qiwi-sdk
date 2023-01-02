[QIWI SDK](../README.md) / [Modules](../modules.md) / [apis/shared](../modules/apis_shared.md) / SimpleJsonHttp

# Class: SimpleJsonHttp

[apis/shared](../modules/apis_shared.md).SimpleJsonHttp

**`Export`**

## Table of contents

### Constructors

- [constructor](apis_shared.SimpleJsonHttp.md#constructor)

### Properties

- [client](apis_shared.SimpleJsonHttp.md#client)

### Methods

- [delete](apis_shared.SimpleJsonHttp.md#delete)
- [get](apis_shared.SimpleJsonHttp.md#get)
- [patch](apis_shared.SimpleJsonHttp.md#patch)
- [post](apis_shared.SimpleJsonHttp.md#post)
- [put](apis_shared.SimpleJsonHttp.md#put)
- [request](apis_shared.SimpleJsonHttp.md#request)
- [simpleRequest](apis_shared.SimpleJsonHttp.md#simplerequest)

## Constructors

### constructor

• **new SimpleJsonHttp**(`client?`)

Creates an instance of SimpleJsonHttp.

**`Memberof`**

SimpleJsonHttp

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`HttpClient`](../interfaces/index.QIWI.HttpClient.md)<`any`, `any`\> |

#### Defined in

[apis/shared/http.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L20)

## Properties

### client

• **client**: [`HttpClient`](../interfaces/index.QIWI.HttpClient.md)<`any`, `any`\>

#### Defined in

[apis/shared/http.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L21)

## Methods

### delete

▸ **delete**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`Memberof`**

SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`ToString`](../modules/index._internal_.md#tostring) |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:87](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L87)

___

### get

▸ **get**<`T`\>(`url`): `Promise`<`T`\>

**`Memberof`**

SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`ToString`](../modules/index._internal_.md#tostring) |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L35)

___

### patch

▸ **patch**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`Memberof`**

SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`ToString`](../modules/index._internal_.md#tostring) |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:74](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L74)

___

### post

▸ **post**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`Memberof`**

SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`ToString`](../modules/index._internal_.md#tostring) |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L48)

___

### put

▸ **put**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`Memberof`**

SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`ToString`](../modules/index._internal_.md#tostring) |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L61)

___

### request

▸ **request**<`T`\>(`option`): `Promise`<`T`\>

**`Memberof`**

SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`HttpRequestOptions`](../interfaces/index.QIWI.HttpRequestOptions.md)<`any`, `any`\> |

#### Returns

`Promise`<`T`\>

Promise<T>

#### Defined in

[apis/shared/http.ts:111](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L111)

___

### simpleRequest

▸ **simpleRequest**<`T`\>(`method`, `url`, `body?`): `Promise`<`T`\>

**`Memberof`**

SimpleJsonHttp

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

Promise<T>

#### Defined in

[apis/shared/http.ts:100](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L100)
