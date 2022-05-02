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

- [dateTime](index.QIWI.WalletApiError.md#datetime)
- [name](index.QIWI.WalletApiError.md#name)
- [response](index.QIWI.WalletApiError.md#response)
- [serviceName](index.QIWI.WalletApiError.md#servicename)

### Accessors

- [[toStringTag]](index.QIWI.WalletApiError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.WalletApiError.md#tojson)

## Constructors

### constructor

• **new WalletApiError**(`response`)

Creates an instance of WalletApiError.

**`memberof`** WalletApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiErrorResponse`](../modules/index.QIWI.md#walletapierrorresponse) |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[dist/cjs/apis/wallet/wallet.errors.d.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.errors.d.ts#L27)

## Properties

### dateTime

• `Readonly` **dateTime**: `Date`

#### Defined in

[dist/cjs/apis/wallet/wallet.errors.d.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.errors.d.ts#L20)

___

### name

• **name**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[name](index._internal_.ExtendedError.md#name)

#### Defined in

[dist/cjs/error.d.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/error.d.ts#L9)

___

### response

• `Readonly` **response**: [`WalletApiErrorResponse`](../modules/index.QIWI.md#walletapierrorresponse)

#### Defined in

[dist/cjs/apis/wallet/wallet.errors.d.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.errors.d.ts#L19)

___

### serviceName

• `Readonly` **serviceName**: `string`

#### Defined in

[dist/cjs/apis/wallet/wallet.errors.d.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.errors.d.ts#L21)

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

[dist/cjs/error.d.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/error.d.ts#L24)

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

[dist/cjs/error.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/error.d.ts#L16)
