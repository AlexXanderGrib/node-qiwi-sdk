[qiwi-sdk](../README.md) / [Exports](../modules.md) / DetectorError

# Class: DetectorError

Ошибка, которую выбрасывает персональное API в случае
неправильного кода ответа от QIWI

## Hierarchy

- `ExtendedError`

  ↳ **`DetectorError`**

## Table of contents

### Constructors

- [constructor](DetectorError.md#constructor)

### Properties

- [message](DetectorError.md#message)
- [name](DetectorError.md#name)
- [stack](DetectorError.md#stack)
- [prepareStackTrace](DetectorError.md#preparestacktrace)
- [stackTraceLimit](DetectorError.md#stacktracelimit)

### Accessors

- [[toStringTag]](DetectorError.md#[tostringtag])

### Methods

- [toJSON](DetectorError.md#tojson)
- [captureStackTrace](DetectorError.md#capturestacktrace)

## Constructors

### constructor

• **new DetectorError**(`message?`)

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

[src/error.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e29a5de/src/error.ts#L8)

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

[src/error.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e29a5de/src/error.ts#L18)

## Methods

### toJSON

▸ **toJSON**(): `Error`

#### Returns

`Error`

#### Inherited from

ExtendedError.toJSON

#### Defined in

[src/error.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e29a5de/src/error.ts#L10)

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
