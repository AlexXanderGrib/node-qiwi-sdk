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

[apis/shared/http.types.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L29)

___

### headers

• **headers**: `Readonly`<`Record`<`string`, `string`\>\>

#### Defined in

[apis/shared/http.types.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L28)

___

### request

• **request**: [`HttpRequestOptions`](index.QIWI.HttpRequestOptions.md)<`Request`, `Response`\>

#### Defined in

[apis/shared/http.types.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L26)

___

### statusCode

• **statusCode**: `number`

#### Defined in

[apis/shared/http.types.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/shared/http.types.ts#L27)
