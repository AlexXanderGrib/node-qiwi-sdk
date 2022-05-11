[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / DefaultHttpClient

# Class: DefaultHttpClient

[index](../modules/index.md).DefaultHttpClient

**`export`**

**`implements`** {HttpClient}

## Hierarchy

- [`OptionsWrapperWithSetter`](index._internal_.OptionsWrapperWithSetter.md)<[`HttpClientOptions`](../interfaces/index.QIWI.HttpClientOptions.md)\>

  ↳ **`DefaultHttpClient`**

## Implements

- [`HttpClient`](../interfaces/index.QIWI.HttpClient.md)

## Table of contents

### Constructors

- [constructor](index.DefaultHttpClient.md#constructor)

### Properties

- [\_axios](index.DefaultHttpClient.md#_axios)
- [\_options](index.DefaultHttpClient.md#_options)

### Accessors

- [options](index.DefaultHttpClient.md#options)

### Methods

- [\_mapResponse](index.DefaultHttpClient.md#_mapresponse)
- [request](index.DefaultHttpClient.md#request)

## Constructors

### constructor

• **new DefaultHttpClient**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HttpClientOptions`](../interfaces/index.QIWI.HttpClientOptions.md)<`any`, `any`\> |

#### Inherited from

[OptionsWrapperWithSetter](index._internal_.OptionsWrapperWithSetter.md).[constructor](index._internal_.OptionsWrapperWithSetter.md#constructor)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:22

## Properties

### \_axios

• `Protected` `Readonly` **\_axios**: `AxiosInstance`

**`memberof`** DefaultHttpClient

#### Defined in

dist/cjs/apis/shared/http.d.ts:62

___

### \_options

• `Protected` **\_options**: [`HttpClientOptions`](../interfaces/index.QIWI.HttpClientOptions.md)<`any`, `any`\>

#### Inherited from

[OptionsWrapperWithSetter](index._internal_.OptionsWrapperWithSetter.md).[_options](index._internal_.OptionsWrapperWithSetter.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:51

## Accessors

### options

• `get` **options**(): `T`

**`memberof`** OptionsWrapperWithSetter

#### Returns

`T`

#### Implementation of

[HttpClient](../interfaces/index.QIWI.HttpClient.md).[options](../interfaces/index.QIWI.HttpClient.md#options)

#### Inherited from

OptionsWrapperWithSetter.options

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:56

• `set` **options**(`value`): `void`

**`memberof`** OptionsWrapperWithSetter

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[HttpClient](../interfaces/index.QIWI.HttpClient.md).[options](../interfaces/index.QIWI.HttpClient.md#options)

#### Inherited from

OptionsWrapperWithSetter.options

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:61

## Methods

### \_mapResponse

▸ `Protected` **_mapResponse**(`axiosResponse`, `request`): [`HttpResponse`](../interfaces/index.QIWI.HttpResponse.md)<`any`, `any`\>

**`memberof`** DefaultHttpClient

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosResponse` | `AxiosResponse`<`any`, `any`\> |
| `request` | [`HttpRequestOptions`](../interfaces/index.QIWI.HttpRequestOptions.md)<`any`, `any`\> |

#### Returns

[`HttpResponse`](../interfaces/index.QIWI.HttpResponse.md)<`any`, `any`\>

{HttpResponse}

#### Defined in

dist/cjs/apis/shared/http.d.ts:80

___

### request

▸ **request**(`options`): `Promise`<[`HttpResponse`](../interfaces/index.QIWI.HttpResponse.md)<`any`, `any`\>\>

**`memberof`** DefaultHttpClient

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HttpRequestOptions`](../interfaces/index.QIWI.HttpRequestOptions.md)<`any`, `any`\> |

#### Returns

`Promise`<[`HttpResponse`](../interfaces/index.QIWI.HttpResponse.md)<`any`, `any`\>\>

#### Implementation of

[HttpClient](../interfaces/index.QIWI.HttpClient.md).[request](../interfaces/index.QIWI.HttpClient.md#request)

#### Defined in

dist/cjs/apis/shared/http.d.ts:70
