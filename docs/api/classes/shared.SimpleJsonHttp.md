[QIWI SDK](../README.md) / [Modules](../modules.md) / [shared](../modules/shared.md) / SimpleJsonHttp

# Class: SimpleJsonHttp

[shared](../modules/shared.md).SimpleJsonHttp

**`export`**

## Table of contents

### Constructors

- [constructor](shared.SimpleJsonHttp.md#constructor)

### Properties

- [client](shared.SimpleJsonHttp.md#client)

### Methods

- [delete](shared.SimpleJsonHttp.md#delete)
- [get](shared.SimpleJsonHttp.md#get)
- [patch](shared.SimpleJsonHttp.md#patch)
- [post](shared.SimpleJsonHttp.md#post)
- [put](shared.SimpleJsonHttp.md#put)
- [request](shared.SimpleJsonHttp.md#request)
- [simpleRequest](shared.SimpleJsonHttp.md#simplerequest)

## Constructors

### constructor

• **new SimpleJsonHttp**(`client?`)

Creates an instance of SimpleJsonHttp.

**`memberof`** SimpleJsonHttp

#### Parameters

| Name | Type |
| :------ | :------ |
| `client?` | [`HttpClient`](../interfaces/index.QIWI.HttpClient.md)<`any`, `any`\> |

#### Defined in

dist/cjs/apis/shared/http.d.ts:95

## Properties

### client

• **client**: [`HttpClient`](../interfaces/index.QIWI.HttpClient.md)<`any`, `any`\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:89

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

dist/cjs/apis/shared/http.d.ts:144

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

dist/cjs/apis/shared/http.d.ts:104

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

dist/cjs/apis/shared/http.d.ts:134

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

dist/cjs/apis/shared/http.d.ts:114

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

dist/cjs/apis/shared/http.d.ts:124

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

dist/cjs/apis/shared/http.d.ts:162

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

dist/cjs/apis/shared/http.d.ts:154
