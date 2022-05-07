[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / HttpClient

# Interface: HttpClient<Rq, Rs\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).HttpClient

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Table of contents

### Properties

- [options](index._internal_.HttpClient.md#options)

### Methods

- [request](index._internal_.HttpClient.md#request)

## Properties

### options

• **options**: [`HttpClientOptions`](index._internal_.HttpClientOptions.md)<`Rq`, `Rs`\>

#### Defined in

dist/cjs/http.d.ts:45

## Methods

### request

▸ **request**(`options`): `Promise`<[`HttpResponse`](index._internal_.HttpResponse.md)<`Rq`, `Rs`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HttpRequestOptions`](index._internal_.HttpRequestOptions.md)<`Rq`, `Rs`\> |

#### Returns

`Promise`<[`HttpResponse`](index._internal_.HttpResponse.md)<`Rq`, `Rs`\>\>

#### Defined in

dist/cjs/http.d.ts:46
