[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / P2pApiError

# Class: P2pApiError

[QIWI](../modules/QIWI.md).P2pApiError

**`export`**

## Hierarchy

- [`ExtendedError`](internal_.ExtendedError.md)

  ↳ **`P2pApiError`**

## Table of contents

### Constructors

- [constructor](QIWI.P2pApiError.md#constructor)

### Properties

- [cause](QIWI.P2pApiError.md#cause)
- [dateTime](QIWI.P2pApiError.md#datetime)
- [message](QIWI.P2pApiError.md#message)
- [name](QIWI.P2pApiError.md#name)
- [response](QIWI.P2pApiError.md#response)
- [serviceName](QIWI.P2pApiError.md#servicename)
- [stack](QIWI.P2pApiError.md#stack)
- [prepareStackTrace](QIWI.P2pApiError.md#preparestacktrace)
- [stackTraceLimit](QIWI.P2pApiError.md#stacktracelimit)

### Accessors

- [[toStringTag]](QIWI.P2pApiError.md#[tostringtag])

### Methods

- [toJSON](QIWI.P2pApiError.md#tojson)
- [captureStackTrace](QIWI.P2pApiError.md#capturestacktrace)

## Constructors

### constructor

• **new P2pApiError**(`response`)

Creates an instance of P2pApiError.

**`memberof`** P2pApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`P2pApiErrorResponse`](../modules/QIWI.md#p2papierrorresponse) |

#### Overrides

[ExtendedError](internal_.ExtendedError.md).[constructor](internal_.ExtendedError.md#constructor)

#### Defined in

[src/apis/p2p/p2p.errors.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/apis/p2p/p2p.errors.ts#L30)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[cause](internal_.ExtendedError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### dateTime

• `Readonly` **dateTime**: `Date`

#### Defined in

[src/apis/p2p/p2p.errors.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/apis/p2p/p2p.errors.ts#L22)

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

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/error.ts#L9)

___

### response

• `Readonly` **response**: [`P2pApiErrorResponse`](../modules/QIWI.md#p2papierrorresponse)

___

### serviceName

• `Readonly` **serviceName**: `string`

#### Defined in

[src/apis/p2p/p2p.errors.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/apis/p2p/p2p.errors.ts#L23)

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

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/error.ts#L32)

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

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/error.ts#L17)

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
