[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HttpResponse

# Interface: HttpResponse<Request, Response\>

[index](../modules/index.md).HttpResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [body](index.HttpResponse.md#body)
- [headers](index.HttpResponse.md#headers)
- [request](index.HttpResponse.md#request)
- [statusCode](index.HttpResponse.md#statuscode)

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
