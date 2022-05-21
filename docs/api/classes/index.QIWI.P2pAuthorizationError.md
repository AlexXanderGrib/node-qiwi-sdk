[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2pAuthorizationError

# Class: P2pAuthorizationError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2pAuthorizationError

**`export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`P2pAuthorizationError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.P2pAuthorizationError.md#constructor)

### Properties

- [cause](index.QIWI.P2pAuthorizationError.md#cause)
- [message](index.QIWI.P2pAuthorizationError.md#message)
- [name](index.QIWI.P2pAuthorizationError.md#name)

### Accessors

- [[toStringTag]](index.QIWI.P2pAuthorizationError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.P2pAuthorizationError.md#tojson)

## Constructors

### constructor

• **new P2pAuthorizationError**(`cause?`)

Creates an instance of P2pAuthorizationError.

**`memberof`** P2pAuthorizationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

dist/cjs/apis/p2p/p2p.errors.d.ts:44

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

dist/cjs/apis/error.d.ts:9

___

### message

• **message**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[message](index._internal_.ExtendedError.md#message)

#### Defined in

dist/cjs/apis/error.d.ts:8

___

### name

• **name**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[name](index._internal_.ExtendedError.md#name)

#### Defined in

dist/cjs/apis/error.d.ts:26

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Inherited from

ExtendedError.\_\_@toStringTag@407

#### Defined in

dist/cjs/apis/error.d.ts:41

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[toJSON](index._internal_.ExtendedError.md#tojson)

#### Defined in

dist/cjs/apis/error.d.ts:33
