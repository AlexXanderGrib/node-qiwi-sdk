[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ExtendedError

# Class: ExtendedError

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ExtendedError

Ошибка, которую можно преобразовать в JSON

**`export`**

## Hierarchy

- [`ErrorWithCause`](index._internal_.ErrorWithCause.md)

  ↳ **`ExtendedError`**

  ↳↳ [`WalletApiError`](index.QIWI.WalletApiError.md)

  ↳↳ [`WalletAuthorizationError`](index.QIWI.WalletAuthorizationError.md)

  ↳↳ [`WalletApiShortError`](index.QIWI.WalletApiShortError.md)

  ↳↳ [`P2pApiError`](index.QIWI.P2pApiError.md)

  ↳↳ [`P2pAuthorizationError`](index.QIWI.P2pAuthorizationError.md)

  ↳↳ [`P2pBillNotificationError`](index.QIWI.P2pBillNotificationError.md)

  ↳↳ [`DetectorError`](index.QIWI.DetectorError.md)

## Table of contents

### Constructors

- [constructor](index._internal_.ExtendedError.md#constructor)

### Properties

- [cause](index._internal_.ExtendedError.md#cause)
- [message](index._internal_.ExtendedError.md#message)
- [name](index._internal_.ExtendedError.md#name)

### Accessors

- [[toStringTag]](index._internal_.ExtendedError.md#[tostringtag])

### Methods

- [toJSON](index._internal_.ExtendedError.md#tojson)

## Constructors

### constructor

• **new ExtendedError**(`message`, `cause?`)

Creates an instance of ErrorWithCause.

**`memberof`** ErrorWithCause

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `cause?` | `Error` |

#### Inherited from

[ErrorWithCause](index._internal_.ErrorWithCause.md).[constructor](index._internal_.ErrorWithCause.md#constructor)

#### Defined in

dist/cjs/apis/error.d.ts:16

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ErrorWithCause](index._internal_.ErrorWithCause.md).[cause](index._internal_.ErrorWithCause.md#cause)

#### Defined in

dist/cjs/apis/error.d.ts:9

___

### message

• **message**: `string`

#### Inherited from

[ErrorWithCause](index._internal_.ErrorWithCause.md).[message](index._internal_.ErrorWithCause.md#message)

#### Defined in

dist/cjs/apis/error.d.ts:8

___

### name

• **name**: `string`

#### Overrides

ErrorWithCause.name

#### Defined in

dist/cjs/apis/error.d.ts:26

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Defined in

dist/cjs/apis/error.d.ts:41

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Defined in

dist/cjs/apis/error.d.ts:33
