[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / WalletApiShortError

# Class: WalletApiShortError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).WalletApiShortError

**`Export`**

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

**`Memberof`**

WalletApiShortError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiShortErrorResponse`](../modules/index.QIWI.md#walletapishorterrorresponse) |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[apis/wallet/wallet.errors.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L57)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)

___

### code

• `Readonly` **code**: `string`

#### Defined in

[apis/wallet/wallet.errors.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L49)

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

• `Readonly` **response**: [`WalletApiShortErrorResponse`](../modules/index.QIWI.md#walletapishorterrorresponse)

#### Defined in

[apis/wallet/wallet.errors.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.errors.ts#L58)

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
