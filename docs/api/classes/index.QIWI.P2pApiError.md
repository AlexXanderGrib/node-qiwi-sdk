[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2pApiError

# Class: P2pApiError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2pApiError

**`export`**

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`P2pApiError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.P2pApiError.md#constructor)

### Properties

- [cause](index.QIWI.P2pApiError.md#cause)
- [dateTime](index.QIWI.P2pApiError.md#datetime)
- [message](index.QIWI.P2pApiError.md#message)
- [name](index.QIWI.P2pApiError.md#name)
- [response](index.QIWI.P2pApiError.md#response)
- [serviceName](index.QIWI.P2pApiError.md#servicename)

### Accessors

- [[toStringTag]](index.QIWI.P2pApiError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.P2pApiError.md#tojson)

## Constructors

### constructor

• **new P2pApiError**(`response`, `cause?`)

Creates an instance of P2pApiError.

**`memberof`** P2pApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`P2pApiErrorResponse`](../modules/index.QIWI.md#p2papierrorresponse) |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

dist/cjs/apis/p2p/p2p.errors.d.ts:29

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[cause](index._internal_.ExtendedError.md#cause)

#### Defined in

dist/cjs/apis/error.d.ts:9

___

### dateTime

• `Readonly` **dateTime**: `Date`

#### Defined in

dist/cjs/apis/p2p/p2p.errors.d.ts:21

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

• `Readonly` **response**: [`P2pApiErrorResponse`](../modules/index.QIWI.md#p2papierrorresponse)

#### Defined in

dist/cjs/apis/p2p/p2p.errors.d.ts:20

___

### serviceName

• `Readonly` **serviceName**: `string`

#### Defined in

dist/cjs/apis/p2p/p2p.errors.d.ts:22

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
