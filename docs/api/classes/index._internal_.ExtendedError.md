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

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/error.ts#L14)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ErrorWithCause](index._internal_.ErrorWithCause.md).[cause](index._internal_.ErrorWithCause.md#cause)

___

### message

• **message**: `string`

#### Inherited from

[ErrorWithCause](index._internal_.ErrorWithCause.md).[message](index._internal_.ErrorWithCause.md#message)

___

### name

• **name**: `string`

#### Overrides

ErrorWithCause.name

#### Defined in

[apis/error.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/error.ts#L29)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Defined in

[apis/error.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/error.ts#L52)

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Defined in

[apis/error.ts:37](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/error.ts#L37)
