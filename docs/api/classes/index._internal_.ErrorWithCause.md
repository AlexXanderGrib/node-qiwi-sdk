[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ErrorWithCause

# Class: ErrorWithCause

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ErrorWithCause

## Hierarchy

- `Error`

  ↳ **`ErrorWithCause`**

  ↳↳ [`ExtendedError`](index._internal_.ExtendedError.md)

## Table of contents

### Constructors

- [constructor](index._internal_.ErrorWithCause.md#constructor)

### Properties

- [cause](index._internal_.ErrorWithCause.md#cause)
- [message](index._internal_.ErrorWithCause.md#message)

## Constructors

### constructor

• **new ErrorWithCause**(`message`, `cause?`)

Creates an instance of ErrorWithCause.

**`memberof`** ErrorWithCause

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `cause?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

dist/cjs/apis/error.d.ts:16

## Properties

### cause

• `Optional` **cause**: `Error`

#### Overrides

Error.cause

#### Defined in

dist/cjs/apis/error.d.ts:9

___

### message

• **message**: `string`

#### Overrides

Error.message

#### Defined in

dist/cjs/apis/error.d.ts:8
