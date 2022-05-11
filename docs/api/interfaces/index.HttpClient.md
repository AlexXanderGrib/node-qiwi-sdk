[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HttpClient

# Interface: HttpClient<Rq, Rs\>

[index](../modules/index.md).HttpClient

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Table of contents

### Properties

- [options](index.HttpClient.md#options)

### Methods

- [request](index.HttpClient.md#request)

## Properties

### options

• **options**: [`HttpClientOptions`](index.QIWI.HttpClientOptions.md)<`Rq`, `Rs`\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:45

## Methods

### request

▸ **request**(`options`): `Promise`<[`HttpResponse`](index.QIWI.HttpResponse.md)<`Rq`, `Rs`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HttpRequestOptions`](index.QIWI.HttpRequestOptions.md)<`Rq`, `Rs`\> |

#### Returns

`Promise`<[`HttpResponse`](index.QIWI.HttpResponse.md)<`Rq`, `Rs`\>\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:46