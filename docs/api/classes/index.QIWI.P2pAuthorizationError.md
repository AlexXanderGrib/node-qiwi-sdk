[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2pAuthorizationError

# Class: P2pAuthorizationError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2pAuthorizationError

**`Export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`P2pAuthorizationError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.P2pAuthorizationError.md#constructor)

### Properties

- [cause](index.QIWI.P2pAuthorizationError.md#cause)
- [message](index.QIWI.P2pAuthorizationError.md#message)
- [name](index.QIWI.P2pAuthorizationError.md#name)

### Accessors

- [[toStringTag]](index.QIWI.P2pAuthorizationError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.P2pAuthorizationError.md#tojson)

## Constructors

### constructor

• **new P2pAuthorizationError**(`cause?`)

Creates an instance of P2pAuthorizationError.

**`Memberof`**

P2pAuthorizationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[apis/p2p/p2p.errors.ts:50](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.errors.ts#L50)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)

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
