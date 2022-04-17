[qiwi-sdk](../README.md) / [Exports](../modules.md) / P2PNotificationError

# Class: P2PNotificationError

Ошибка валидации уведомления

## Hierarchy

- `ExtendedError`

  ↳ **`P2PNotificationError`**

## Table of contents

### Constructors

- [constructor](P2PNotificationError.md#constructor)

### Properties

- [cause](P2PNotificationError.md#cause)
- [message](P2PNotificationError.md#message)
- [name](P2PNotificationError.md#name)
- [stack](P2PNotificationError.md#stack)
- [prepareStackTrace](P2PNotificationError.md#preparestacktrace)
- [stackTraceLimit](P2PNotificationError.md#stacktracelimit)

### Accessors

- [[toStringTag]](P2PNotificationError.md#[tostringtag])

### Methods

- [toJSON](P2PNotificationError.md#tojson)
- [captureStackTrace](P2PNotificationError.md#capturestacktrace)

## Constructors

### constructor

• **new P2PNotificationError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

ExtendedError.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

• **new P2PNotificationError**(`message?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Inherited from

ExtendedError.constructor

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:30

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

ExtendedError.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

ExtendedError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

ExtendedError.name

#### Defined in

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/df33dc3/src/error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

ExtendedError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

ExtendedError.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

ExtendedError.stackTraceLimit

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

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/df33dc3/src/error.ts#L32)

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Inherited from

ExtendedError.toJSON

#### Defined in

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/df33dc3/src/error.ts#L17)

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

ExtendedError.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
