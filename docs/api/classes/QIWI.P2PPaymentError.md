[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / P2PPaymentError

# Class: P2PPaymentError

[QIWI](../modules/QIWI.md).P2PPaymentError

Ошибка, которую выбрасывает P2P API в случае неправильного
кода ответа от QIWI

## Hierarchy

- `ErrorWithCode`<`string`\>

  ↳ **`P2PPaymentError`**

## Table of contents

### Constructors

- [constructor](QIWI.P2PPaymentError.md#constructor)

### Properties

- [cause](QIWI.P2PPaymentError.md#cause)
- [code](QIWI.P2PPaymentError.md#code)
- [data](QIWI.P2PPaymentError.md#data)
- [message](QIWI.P2PPaymentError.md#message)
- [name](QIWI.P2PPaymentError.md#name)
- [stack](QIWI.P2PPaymentError.md#stack)
- [prepareStackTrace](QIWI.P2PPaymentError.md#preparestacktrace)
- [stackTraceLimit](QIWI.P2PPaymentError.md#stacktracelimit)

### Accessors

- [[toStringTag]](QIWI.P2PPaymentError.md#[tostringtag])

### Methods

- [toJSON](QIWI.P2PPaymentError.md#tojson)
- [toString](QIWI.P2PPaymentError.md#tostring)
- [captureStackTrace](QIWI.P2PPaymentError.md#capturestacktrace)

## Constructors

### constructor

• **new P2PPaymentError**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `AnyResponse` |

#### Overrides

ErrorWithCode&lt;string\&gt;.constructor

#### Defined in

[src/services/p2p.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/p2p.ts#L28)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

ErrorWithCode.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### code

• **code**: `string`

#### Inherited from

ErrorWithCode.code

___

### data

• **data**: `AnyResponse`

___

### message

• **message**: `string`

#### Inherited from

ErrorWithCode.message

___

### name

• **name**: `string`

#### Inherited from

ErrorWithCode.name

#### Defined in

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

ErrorWithCode.stack

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

ErrorWithCode.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

ErrorWithCode.stackTraceLimit

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

ErrorWithCode.\_\_@toStringTag@11

#### Defined in

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/error.ts#L32)

## Methods

### toJSON

▸ **toJSON**(): `Error` & { `code`: `string`  }

**`memberof`** ErrorWithCode

#### Returns

`Error` & { `code`: `string`  }

{(Error & { code: CodeType })}

#### Inherited from

ErrorWithCode.toJSON

#### Defined in

[src/error.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/error.ts#L64)

___

### toString

▸ **toString**(): `string`

**`memberof`** ErrorWithCode

#### Returns

`string`

{string}

#### Inherited from

ErrorWithCode.toString

#### Defined in

[src/error.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/error.ts#L79)

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

ErrorWithCode.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
