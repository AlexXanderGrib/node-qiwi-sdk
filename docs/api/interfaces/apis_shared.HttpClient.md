[QIWI SDK](../README.md) / [Modules](../modules.md) / [apis/shared](../modules/apis_shared.md) / HttpClient

# Interface: HttpClient<Rq, Rs\>

[apis/shared](../modules/apis_shared.md).HttpClient

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Table of contents

### Properties

- [options](apis_shared.HttpClient.md#options)

### Methods

- [request](apis_shared.HttpClient.md#request)

## Properties

### options

• **options**: [`HttpClientOptions`](index.QIWI.HttpClientOptions.md)<`Rq`, `Rs`\>

#### Defined in

[apis/shared/http.types.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L52)

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

[apis/shared/http.types.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L53)
