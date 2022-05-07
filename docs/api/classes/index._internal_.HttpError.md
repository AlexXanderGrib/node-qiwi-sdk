[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / HttpError

# Class: HttpError<Rq, Rs\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).HttpError

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

- [constructor](index._internal_.HttpError.md#constructor)

### Properties

- [response](index._internal_.HttpError.md#response)

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
| `response` | [`HttpResponse`](../interfaces/index._internal_.HttpResponse.md)<`Rq`, `Rs`\> |

#### Overrides

Error.constructor

#### Defined in

dist/cjs/http.d.ts:42

## Properties

### response

• **response**: [`HttpResponse`](../interfaces/index._internal_.HttpResponse.md)<`Rq`, `Rs`\>

#### Defined in

dist/cjs/http.d.ts:35
