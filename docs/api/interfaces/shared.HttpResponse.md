[QIWI SDK](../README.md) / [Modules](../modules.md) / [shared](../modules/shared.md) / HttpResponse

# Interface: HttpResponse<Request, Response\>

[shared](../modules/shared.md).HttpResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [body](shared.HttpResponse.md#body)
- [headers](shared.HttpResponse.md#headers)
- [request](shared.HttpResponse.md#request)
- [statusCode](shared.HttpResponse.md#statuscode)

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
