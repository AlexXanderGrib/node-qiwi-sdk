[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / DetectorError

# Class: DetectorError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).DetectorError

Ошибка, которую выбрасывает персональное API в случае
неправильного кода ответа от QIWI

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`DetectorError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.DetectorError.md#constructor)

### Properties

- [cause](index.QIWI.DetectorError.md#cause)
- [message](index.QIWI.DetectorError.md#message)
- [name](index.QIWI.DetectorError.md#name)

### Accessors

- [[toStringTag]](index.QIWI.DetectorError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.DetectorError.md#tojson)

## Constructors

### constructor

• **new DetectorError**(`message`, `cause?`)

Creates an instance of ErrorWithCause.

**`Memberof`**

ErrorWithCause

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `cause?` | `Error` |

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

[apis/error.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/error.ts#L14)

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
