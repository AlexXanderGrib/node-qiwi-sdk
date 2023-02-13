[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2pApiError

# Class: P2pApiError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2pApiError

**`Export`**

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

**`Memberof`**

P2pApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`P2pApiErrorResponse`](../modules/index.QIWI.md#p2papierrorresponse) |
| `cause?` | [`HttpError`](index.QIWI.HttpError.md)<`any`, `any`\> |

#### Overrides

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[apis/p2p/p2p.errors.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.errors.ts#L32)

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

[apis/p2p/p2p.errors.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.errors.ts#L23)

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

• `Readonly` **response**: [`P2pApiErrorResponse`](../modules/index.QIWI.md#p2papierrorresponse)

#### Defined in

[apis/p2p/p2p.errors.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.errors.ts#L32)

___

### serviceName

• `Readonly` **serviceName**: `string`

#### Defined in

[apis/p2p/p2p.errors.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.errors.ts#L24)

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
