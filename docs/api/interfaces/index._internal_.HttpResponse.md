[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / HttpResponse

# Interface: HttpResponse<Rq, Rs\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).HttpResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Table of contents

### Properties

- [body](index._internal_.HttpResponse.md#body)
- [headers](index._internal_.HttpResponse.md#headers)
- [request](index._internal_.HttpResponse.md#request)
- [statusCode](index._internal_.HttpResponse.md#statuscode)

## Properties

### body

• `Optional` **body**: `Rs`

#### Defined in

[dist/cjs/http.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L25)

___

### headers

• **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Defined in

[dist/cjs/http.d.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L24)

___

### request

• **request**: [`HttpRequestOptions`](index._internal_.HttpRequestOptions.md)<`Rq`, `Rs`\>

#### Defined in

[dist/cjs/http.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L22)

___

### statusCode

• **statusCode**: `number`

#### Defined in

[dist/cjs/http.d.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/http.d.ts#L23)
