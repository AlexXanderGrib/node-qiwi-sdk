[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / HttpResponse

# Interface: HttpResponse<Request, Response\>

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).HttpResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [body](index.QIWI.HttpResponse.md#body)
- [headers](index.QIWI.HttpResponse.md#headers)
- [request](index.QIWI.HttpResponse.md#request)
- [statusCode](index.QIWI.HttpResponse.md#statuscode)

## Properties

### body

• `Optional` **body**: `Response`

#### Defined in

dist/cjs/apis/shared/http.d.ts:25

___

### headers

• **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:24

___

### request

• **request**: [`HttpRequestOptions`](index.QIWI.HttpRequestOptions.md)<`Request`, `Response`\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:22

___

### statusCode

• **statusCode**: `number`

#### Defined in

dist/cjs/apis/shared/http.d.ts:23
