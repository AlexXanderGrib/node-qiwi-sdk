[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / WalletAuthorizationError

# Class: WalletAuthorizationError

[QIWI](../modules/QIWI.md).WalletAuthorizationError

**`export`**

## Hierarchy

- `ExtendedError`

  ↳ **`WalletAuthorizationError`**

## Table of contents

### Constructors

- [constructor](QIWI.WalletAuthorizationError.md#constructor)

### Properties

- [cause](QIWI.WalletAuthorizationError.md#cause)
- [message](QIWI.WalletAuthorizationError.md#message)
- [name](QIWI.WalletAuthorizationError.md#name)
- [stack](QIWI.WalletAuthorizationError.md#stack)
- [prepareStackTrace](QIWI.WalletAuthorizationError.md#preparestacktrace)
- [stackTraceLimit](QIWI.WalletAuthorizationError.md#stacktracelimit)

### Accessors

- [[toStringTag]](QIWI.WalletAuthorizationError.md#[tostringtag])

### Methods

- [toJSON](QIWI.WalletAuthorizationError.md#tojson)
- [captureStackTrace](QIWI.WalletAuthorizationError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletAuthorizationError**()

Creates an instance of WalletAuthorizationError.

**`memberof`** WalletAuthorizationError

#### Overrides

ExtendedError.constructor

#### Defined in

src/apis/wallet/wallet.errors.ts:71

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

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/142b6cc/src/error.ts#L9)

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

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/142b6cc/src/error.ts#L32)

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

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/142b6cc/src/error.ts#L17)

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
