[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / WalletAuthorizationError

# Class: WalletAuthorizationError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).WalletAuthorizationError

**`export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`WalletAuthorizationError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.WalletAuthorizationError.md#constructor)

### Properties

- [cause](index.QIWI.WalletAuthorizationError.md#cause)
- [message](index.QIWI.WalletAuthorizationError.md#message)
- [name](index.QIWI.WalletAuthorizationError.md#name)

### Accessors

- [[toStringTag]](index.QIWI.WalletAuthorizationError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.WalletAuthorizationError.md#tojson)

## Constructors

### constructor

• **new WalletAuthorizationError**(`cause?`)

Creates an instance of WalletAuthorizationError.

**`memberof`** WalletAuthorizationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:65

## Properties

### cause

• `Optional` **cause**: [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\>

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:60

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
