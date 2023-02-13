[QIWI SDK](../README.md) / [Modules](../modules.md) / [apis/shared](../modules/apis_shared.md) / HttpResponse

# Interface: HttpResponse<Request, Response\>

[apis/shared](../modules/apis_shared.md).HttpResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [body](apis_shared.HttpResponse.md#body)
- [headers](apis_shared.HttpResponse.md#headers)
- [request](apis_shared.HttpResponse.md#request)
- [statusCode](apis_shared.HttpResponse.md#statuscode)

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
