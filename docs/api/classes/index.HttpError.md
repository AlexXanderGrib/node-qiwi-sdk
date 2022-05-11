[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HttpError

# Class: HttpError<Rq, Rs\>

[index](../modules/index.md).HttpError

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

- [constructor](index.HttpError.md#constructor)

### Properties

- [response](index.HttpError.md#response)

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

dist/cjs/apis/shared/http.d.ts:42

## Properties

### response

• **response**: [`HttpResponse`](../interfaces/index.QIWI.HttpResponse.md)<`Rq`, `Rs`\>

#### Defined in

dist/cjs/apis/shared/http.d.ts:35
