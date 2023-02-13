[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / WalletApiError

# Class: WalletApiError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).WalletApiError

**`Export`**

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

• **new WalletApiError**(`response`, `cause?`)

Creates an instance of WalletApiError.

**`Memberof`**

WalletApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiErrorResponse`](../modules/index.QIWI.md#walletapierrorresponse) |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[apis/wallet/wallet.errors.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L31)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)

___

### dateTime

• `Readonly` **dateTime**: `Date`

#### Defined in

[apis/wallet/wallet.errors.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L22)

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

___

### response

• `Readonly` **response**: [`WalletApiErrorResponse`](../modules/index.QIWI.md#walletapierrorresponse)

#### Defined in

[apis/wallet/wallet.errors.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L31)

___

### serviceName

• `Readonly` **serviceName**: `string`

#### Defined in

[apis/wallet/wallet.errors.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L23)

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
