[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / HttpError

# Class: HttpError<Rq, Rs\>

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).HttpError

**`export`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Hierarchy

- `Error`

  ↳ **`HttpError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.HttpError.md#constructor)

### Properties

- [response](index.QIWI.HttpError.md#response)

## Constructors

### constructor

• **new HttpError**<`Rq`, `Rs`\>(`message`, `response`)

Creates an instance of HttpError.

**`memberof`** HttpError

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `response` | [`HttpResponse`](../interfaces/index.QIWI.HttpResponse.md)<`Rq`, `Rs`\> |

#### Overrides

Error.constructor

#### Defined in

[apis/shared/http.types.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/shared/http.types.ts#L46)

## Properties

### response

• **response**: [`HttpResponse`](../interfaces/index.QIWI.HttpResponse.md)<`Rq`, `Rs`\>
