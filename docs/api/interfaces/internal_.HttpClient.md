[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HttpClient

# Interface: HttpClient<Rq, Rs\>

[<internal>](../modules/internal_.md).HttpClient

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Table of contents

### Properties

- [options](internal_.HttpClient.md#options)

### Methods

- [request](internal_.HttpClient.md#request)

## Properties

### options

• **options**: [`HttpClientOptions`](internal_.HttpClientOptions.md)<`Rq`, `Rs`\>

#### Defined in

[src/http.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/http.ts#L52)

## Methods

### request

▸ **request**(`options`): `Promise`<[`HttpResponse`](internal_.HttpResponse.md)<`Rq`, `Rs`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HttpRequestOptions`](internal_.HttpRequestOptions.md)<`Rq`, `Rs`\> |

#### Returns

`Promise`<[`HttpResponse`](internal_.HttpResponse.md)<`Rq`, `Rs`\>\>

#### Defined in

[src/http.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/http.ts#L53)
