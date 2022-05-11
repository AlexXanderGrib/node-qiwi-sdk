[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2pBillNotificationError

# Class: P2pBillNotificationError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2pBillNotificationError

**`export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`P2pBillNotificationError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.P2pBillNotificationError.md#constructor)

### Properties

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

**`memberof`** P2pBillNotificationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`BillStatusData`](../modules/index.QIWI.md#billstatusdata) |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

dist/cjs/apis/p2p/p2p.errors.d.ts:57

## Properties

### name

• **name**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[name](index._internal_.ExtendedError.md#name)

#### Defined in

dist/cjs/apis/error.d.ts:9

___

### notification

• **notification**: [`BillStatusData`](../modules/index.QIWI.md#billstatusdata)

#### Defined in

dist/cjs/apis/p2p/p2p.errors.d.ts:52

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Inherited from

ExtendedError.\_\_@toStringTag@404

#### Defined in

dist/cjs/apis/error.d.ts:24

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

dist/cjs/apis/error.d.ts:16
