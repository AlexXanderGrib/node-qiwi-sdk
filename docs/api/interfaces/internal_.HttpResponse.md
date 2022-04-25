[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HttpResponse

# Interface: HttpResponse<Rq, Rs\>

[<internal>](../modules/internal_.md).HttpResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Table of contents

### Properties

- [body](internal_.HttpResponse.md#body)
- [headers](internal_.HttpResponse.md#headers)
- [request](internal_.HttpResponse.md#request)
- [statusCode](internal_.HttpResponse.md#statuscode)

## Properties

### body

• `Optional` **body**: `Rs`

#### Defined in

[src/http.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4f2e487/src/http.ts#L29)

___

### headers

• **headers**: [`Readonly`](../modules/internal_.md#readonly)<[`Record`](../modules/internal_.md#record)<`string`, `string`\>\>

#### Defined in

[src/http.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4f2e487/src/http.ts#L28)

___

### request

• **request**: [`HttpRequestOptions`](internal_.HttpRequestOptions.md)<`Rq`, `Rs`\>

#### Defined in

[src/http.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4f2e487/src/http.ts#L26)

___

### statusCode

• **statusCode**: `number`

#### Defined in

[src/http.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4f2e487/src/http.ts#L27)
