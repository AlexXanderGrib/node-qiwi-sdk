[QIWI SDK](../README.md) / [Modules](../modules.md) / [apis/shared](../modules/apis_shared.md) / SimpleJsonHttp

# Class: SimpleJsonHttp

[apis/shared](../modules/apis_shared.md).SimpleJsonHttp

**`export`**

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

**`memberof`** SimpleJsonHttp

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`HttpClient`](../interfaces/index.QIWI.HttpClient.md)<`any`, `any`\> |

#### Defined in

[apis/shared/http.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L17)

## Properties

### client

• **client**: [`HttpClient`](../interfaces/index.QIWI.HttpClient.md)<`any`, `any`\>

## Methods

### delete

▸ **delete**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:84](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L84)

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

[apis/shared/http.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L32)

___

### patch

▸ **patch**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L71)

___

### post

▸ **post**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:45](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L45)

___

### put

▸ **put**<`T`\>(`url`, `body?`): `Promise`<`T`\>

**`memberof`** SimpleJsonHttp

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[apis/shared/http.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L58)

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
| `option` | [`HttpRequestOptions`](../interfaces/index.QIWI.HttpRequestOptions.md)<`any`, `any`\> |

#### Returns

`Promise`<`T`\>

{Promise<T>}

#### Defined in

[apis/shared/http.ts:108](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L108)

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

[apis/shared/http.ts:97](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/shared/http.ts#L97)