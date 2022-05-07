[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / HttpResponse

# Interface: HttpResponse<Request, Response\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).HttpResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [body](index._internal_.HttpResponse.md#body)
- [headers](index._internal_.HttpResponse.md#headers)
- [request](index._internal_.HttpResponse.md#request)
- [statusCode](index._internal_.HttpResponse.md#statuscode)

## Properties

### body

• `Optional` **body**: `Response`

#### Defined in

dist/cjs/http.d.ts:25

___

### headers

• **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Defined in

dist/cjs/http.d.ts:24

___

### request

• **request**: [`HttpRequestOptions`](index._internal_.HttpRequestOptions.md)<`Request`, `Response`\>

#### Defined in

dist/cjs/http.d.ts:22

___

### statusCode

• **statusCode**: `number`

#### Defined in

dist/cjs/http.d.ts:23
