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

node_modules/typescript/lib/lib.es5.d.ts:979

## Properties

### message

• **message**: `string`

#### Inherited from

ExtendedError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

ExtendedError.name

#### Defined in

[src/error.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/error.ts#L8)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

ExtendedError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

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

#### Returns

`string`

#### Defined in

[src/error.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/error.ts#L18)

## Methods

### toJSON

▸ **toJSON**(): `Error`

#### Returns

`Error`

#### Inherited from

ExtendedError.toJSON

#### Defined in

[src/error.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/6d1bad4/src/error.ts#L10)

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
