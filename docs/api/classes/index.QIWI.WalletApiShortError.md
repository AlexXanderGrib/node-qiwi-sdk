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

- [code](index.QIWI.WalletApiShortError.md#code)
- [name](index.QIWI.WalletApiShortError.md#name)
- [response](index.QIWI.WalletApiShortError.md#response)

### Accessors

- [[toStringTag]](index.QIWI.WalletApiShortError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.WalletApiShortError.md#tojson)

## Constructors

### constructor

• **new WalletApiShortError**(`response`)

Creates an instance of WalletApiShortError.

**`memberof`** WalletApiShortError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiShortErrorResponse`](../modules/index.QIWI.md#walletapishorterrorresponse) |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[dist/cjs/apis/wallet/wallet.errors.d.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/wallet.errors.d.ts#L48)

## Properties

### code

• `Readonly` **code**: `string`

#### Defined in

[dist/cjs/apis/wallet/wallet.errors.d.ts:42](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/wallet.errors.d.ts#L42)

___

### name

• **name**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[name](index._internal_.ExtendedError.md#name)

#### Defined in

[dist/cjs/error.d.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/error.d.ts#L9)

___

### response

• `Readonly` **response**: [`WalletApiShortErrorResponse`](../modules/index.QIWI.md#walletapishorterrorresponse)

#### Defined in

[dist/cjs/apis/wallet/wallet.errors.d.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/wallet.errors.d.ts#L41)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Inherited from

ExtendedError.\_\_@toStringTag@11

#### Defined in

[dist/cjs/error.d.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/error.d.ts#L24)

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

[dist/cjs/error.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/error.d.ts#L16)
