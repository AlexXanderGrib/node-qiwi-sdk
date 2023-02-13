[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2pBillNotificationError

# Class: P2pBillNotificationError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2pBillNotificationError

**`Export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`P2pBillNotificationError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.P2pBillNotificationError.md#constructor)

### Properties

- [cause](index.QIWI.P2pBillNotificationError.md#cause)
- [message](index.QIWI.P2pBillNotificationError.md#message)
- [name](index.QIWI.P2pBillNotificationError.md#name)
- [notification](index.QIWI.P2pBillNotificationError.md#notification)

### Accessors

- [[toStringTag]](index.QIWI.P2pBillNotificationError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.P2pBillNotificationError.md#tojson)

## Constructors

### constructor

• **new P2pBillNotificationError**(`notification`)

Creates an instance of P2pBillNotificationError.

**`Memberof`**

P2pBillNotificationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`BillStatusData`](../modules/index.QIWI.md#billstatusdata) |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[apis/p2p/p2p.errors.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.errors.ts#L67)

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

___

### notification

• **notification**: [`BillStatusData`](../modules/index.QIWI.md#billstatusdata)

#### Defined in

[apis/p2p/p2p.errors.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.errors.ts#L67)

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
