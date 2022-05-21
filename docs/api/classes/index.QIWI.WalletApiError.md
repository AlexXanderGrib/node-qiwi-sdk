[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / WalletApiError

# Class: WalletApiError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).WalletApiError

**`export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`WalletApiError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.WalletApiError.md#constructor)

### Properties

- [cause](index.QIWI.WalletApiError.md#cause)
- [dateTime](index.QIWI.WalletApiError.md#datetime)
- [message](index.QIWI.WalletApiError.md#message)
- [name](index.QIWI.WalletApiError.md#name)
- [response](index.QIWI.WalletApiError.md#response)
- [serviceName](index.QIWI.WalletApiError.md#servicename)

### Accessors

- [[toStringTag]](index.QIWI.WalletApiError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.WalletApiError.md#tojson)

## Constructors

### constructor

• **new WalletApiError**(`response`, `cause`)

Creates an instance of WalletApiError.

**`memberof`** WalletApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiErrorResponse`](../modules/index.QIWI.md#walletapierrorresponse) |
| `cause` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:28

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

dist/cjs/apis/error.d.ts:9

___

### dateTime

• `Readonly` **dateTime**: `Date`

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:20

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

___

### response

• `Readonly` **response**: [`WalletApiErrorResponse`](../modules/index.QIWI.md#walletapierrorresponse)

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:19

___

### serviceName

• `Readonly` **serviceName**: `string`

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:21

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
