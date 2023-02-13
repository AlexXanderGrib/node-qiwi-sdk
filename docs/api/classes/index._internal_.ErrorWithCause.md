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

**`Memberof`**

ErrorWithCause

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `cause?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)
