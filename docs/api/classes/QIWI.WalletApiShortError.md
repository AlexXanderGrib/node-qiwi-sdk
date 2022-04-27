[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / WalletApiShortError

# Class: WalletApiShortError

[QIWI](../modules/QIWI.md).WalletApiShortError

**`export`**

## Hierarchy

- [`ExtendedError`](internal_.ExtendedError.md)

  ↳ **`WalletApiShortError`**

## Table of contents

### Constructors

- [constructor](QIWI.WalletApiShortError.md#constructor)

### Properties

- [cause](QIWI.WalletApiShortError.md#cause)
- [code](QIWI.WalletApiShortError.md#code)
- [message](QIWI.WalletApiShortError.md#message)
- [name](QIWI.WalletApiShortError.md#name)
- [response](QIWI.WalletApiShortError.md#response)
- [stack](QIWI.WalletApiShortError.md#stack)
- [prepareStackTrace](QIWI.WalletApiShortError.md#preparestacktrace)
- [stackTraceLimit](QIWI.WalletApiShortError.md#stacktracelimit)

### Accessors

- [[toStringTag]](QIWI.WalletApiShortError.md#[tostringtag])

### Methods

- [toJSON](QIWI.WalletApiShortError.md#tojson)
- [captureStackTrace](QIWI.WalletApiShortError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletApiShortError**(`response`)

Creates an instance of WalletApiShortError.

**`memberof`** WalletApiShortError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiShortErrorResponse`](../modules/QIWI.md#walletapishorterrorresponse) |

#### Overrides

[ExtendedError](internal_.ExtendedError.md).[constructor](internal_.ExtendedError.md#constructor)

#### Defined in

[src/apis/wallet/wallet.errors.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/52e2fc4/src/apis/wallet/wallet.errors.ts#L55)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

[ExtendedError](internal_.ExtendedError.md).[cause](internal_.ExtendedError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### code

• `Readonly` **code**: `string`

#### Defined in

[src/apis/wallet/wallet.errors.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/52e2fc4/src/apis/wallet/wallet.errors.ts#L48)

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

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/52e2fc4/src/error.ts#L9)

___

### response

• `Readonly` **response**: [`WalletApiShortErrorResponse`](../modules/QIWI.md#walletapishorterrorresponse)

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

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/52e2fc4/src/error.ts#L32)

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

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/52e2fc4/src/error.ts#L17)

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
