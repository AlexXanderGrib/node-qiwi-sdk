[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / WalletAuthorizationError

# Class: WalletAuthorizationError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).WalletAuthorizationError

**`Export`**

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

**`Memberof`**

WalletAuthorizationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[apis/wallet/wallet.errors.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L77)

## Properties

### cause

• `Optional` **cause**: [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\>

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

[apis/wallet/wallet.errors.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L77)

___

### message

• **message**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[message](index._internal_.ExtendedError.md#message)

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)

___

### name

• **name**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[name](index._internal_.ExtendedError.md#name)

#### Defined in

[apis/error.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L29)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`Memberof`**

ExtendedError

#### Returns

`string`

#### Inherited from

ExtendedError.\_\_@toStringTag@18

#### Defined in

[apis/error.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L52)

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`Memberof`**

ExtendedError

#### Returns

`Error`

Error

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[toJSON](index._internal_.ExtendedError.md#tojson)

#### Defined in

[apis/error.ts:37](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L37)
