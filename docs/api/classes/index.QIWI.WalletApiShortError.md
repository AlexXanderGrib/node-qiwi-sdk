[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / WalletApiShortError

# Class: WalletApiShortError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).WalletApiShortError

**`export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`WalletApiShortError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.WalletApiShortError.md#constructor)

### Properties

- [cause](index.QIWI.WalletApiShortError.md#cause)
- [code](index.QIWI.WalletApiShortError.md#code)
- [message](index.QIWI.WalletApiShortError.md#message)
- [name](index.QIWI.WalletApiShortError.md#name)
- [response](index.QIWI.WalletApiShortError.md#response)

### Accessors

- [[toStringTag]](index.QIWI.WalletApiShortError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.WalletApiShortError.md#tojson)

## Constructors

### constructor

• **new WalletApiShortError**(`response`, `cause?`)

Creates an instance of WalletApiShortError.

**`memberof`** WalletApiShortError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiShortErrorResponse`](../modules/index.QIWI.md#walletapishorterrorresponse) |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:50

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

dist/cjs/apis/error.d.ts:9

___

### code

• `Readonly` **code**: `string`

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:43

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

• `Readonly` **response**: [`WalletApiShortErrorResponse`](../modules/index.QIWI.md#walletapishorterrorresponse)

#### Defined in

dist/cjs/apis/wallet/wallet.errors.d.ts:42

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
