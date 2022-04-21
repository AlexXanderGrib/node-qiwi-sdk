[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / WalletApiError

# Class: WalletApiError

[QIWI](../modules/QIWI.md).WalletApiError

**`export`**

## Hierarchy

- `ExtendedError`

  ↳ **`WalletApiError`**

## Table of contents

### Constructors

- [constructor](QIWI.WalletApiError.md#constructor)

### Properties

- [cause](QIWI.WalletApiError.md#cause)
- [dateTime](QIWI.WalletApiError.md#datetime)
- [message](QIWI.WalletApiError.md#message)
- [name](QIWI.WalletApiError.md#name)
- [response](QIWI.WalletApiError.md#response)
- [serviceName](QIWI.WalletApiError.md#servicename)
- [stack](QIWI.WalletApiError.md#stack)
- [prepareStackTrace](QIWI.WalletApiError.md#preparestacktrace)
- [stackTraceLimit](QIWI.WalletApiError.md#stacktracelimit)

### Accessors

- [[toStringTag]](QIWI.WalletApiError.md#[tostringtag])

### Methods

- [toJSON](QIWI.WalletApiError.md#tojson)
- [captureStackTrace](QIWI.WalletApiError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletApiError**(`response`)

Creates an instance of WalletApiError.

**`memberof`** WalletApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`WalletApiErrorResponse`](../modules/QIWI.md#walletapierrorresponse) |

#### Overrides

ExtendedError.constructor

#### Defined in

[src/apis/wallet/wallet.errors.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.errors.ts#L29)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

ExtendedError.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### dateTime

• `Readonly` **dateTime**: `Date`

#### Defined in

[src/apis/wallet/wallet.errors.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.errors.ts#L21)

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

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/error.ts#L9)

___

### response

• `Readonly` **response**: [`WalletApiErrorResponse`](../modules/QIWI.md#walletapierrorresponse)

___

### serviceName

• `Readonly` **serviceName**: `string`

#### Defined in

[src/apis/wallet/wallet.errors.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.errors.ts#L22)

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

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/error.ts#L32)

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

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/error.ts#L17)

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
