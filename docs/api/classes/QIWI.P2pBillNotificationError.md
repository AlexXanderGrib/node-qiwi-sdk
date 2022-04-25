[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / P2pBillNotificationError

# Class: P2pBillNotificationError

[QIWI](../modules/QIWI.md).P2pBillNotificationError

**`export`**

## Hierarchy

- [`ExtendedError`](internal_.ExtendedError.md)

  ↳ **`P2pBillNotificationError`**

## Table of contents

### Constructors

- [constructor](QIWI.P2pBillNotificationError.md#constructor)

### Properties

- [cause](QIWI.P2pBillNotificationError.md#cause)
- [message](QIWI.P2pBillNotificationError.md#message)
- [name](QIWI.P2pBillNotificationError.md#name)
- [stack](QIWI.P2pBillNotificationError.md#stack)
- [prepareStackTrace](QIWI.P2pBillNotificationError.md#preparestacktrace)
- [stackTraceLimit](QIWI.P2pBillNotificationError.md#stacktracelimit)

### Accessors

- [[toStringTag]](QIWI.P2pBillNotificationError.md#[tostringtag])

### Methods

- [toJSON](QIWI.P2pBillNotificationError.md#tojson)
- [captureStackTrace](QIWI.P2pBillNotificationError.md#capturestacktrace)

## Constructors

### constructor

• **new P2pBillNotificationError**()

Creates an instance of P2pBillNotificationError.

**`memberof`** P2pBillNotificationError

#### Overrides

[ExtendedError](internal_.ExtendedError.md).[constructor](internal_.ExtendedError.md#constructor)

#### Defined in

[src/apis/p2p/p2p.errors.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/apis/p2p/p2p.errors.ts#L64)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[cause](internal_.ExtendedError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[message](internal_.ExtendedError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[name](internal_.ExtendedError.md#name)

#### Defined in

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[stack](internal_.ExtendedError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: [`CallSite`](../interfaces/internal_.CallSite.md)[]) => `any`

Optional override for formatting stack traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | [`CallSite`](../interfaces/internal_.CallSite.md)[] |

##### Returns

`any`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[prepareStackTrace](internal_.ExtendedError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[stackTraceLimit](internal_.ExtendedError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Inherited from

ExtendedError.\_\_@toStringTag@11

#### Defined in

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/error.ts#L32)

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[toJSON](internal_.ExtendedError.md#tojson)

#### Defined in

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/error.ts#L17)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[captureStackTrace](internal_.ExtendedError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
