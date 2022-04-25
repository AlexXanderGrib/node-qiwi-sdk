[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ExtendedError

# Class: ExtendedError

[<internal>](../modules/internal_.md).ExtendedError

Ошибка, которую можно преобразовать в JSON

**`export`**

## Hierarchy

- `Error`

  ↳ **`ExtendedError`**

  ↳↳ [`WalletApiError`](QIWI.WalletApiError.md)

  ↳↳ [`WalletAuthorizationError`](QIWI.WalletAuthorizationError.md)

  ↳↳ [`WalletApiShortError`](QIWI.WalletApiShortError.md)

  ↳↳ [`P2pApiError`](QIWI.P2pApiError.md)

  ↳↳ [`P2pAuthorizationError`](QIWI.P2pAuthorizationError.md)

  ↳↳ [`P2pBillNotificationError`](QIWI.P2pBillNotificationError.md)

  ↳↳ [`DetectorError`](QIWI.DetectorError.md)

## Table of contents

### Constructors

- [constructor](internal_.ExtendedError.md#constructor)

### Properties

- [cause](internal_.ExtendedError.md#cause)
- [message](internal_.ExtendedError.md#message)
- [name](internal_.ExtendedError.md#name)
- [stack](internal_.ExtendedError.md#stack)
- [prepareStackTrace](internal_.ExtendedError.md#preparestacktrace)
- [stackTraceLimit](internal_.ExtendedError.md#stacktracelimit)

### Accessors

- [[toStringTag]](internal_.ExtendedError.md#[tostringtag])

### Methods

- [toJSON](internal_.ExtendedError.md#tojson)
- [captureStackTrace](internal_.ExtendedError.md#capturestacktrace)

## Constructors

### constructor

• **new ExtendedError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

• **new ExtendedError**(`message?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | [`ErrorOptions`](../interfaces/internal_.ErrorOptions.md) |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:30

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Overrides

Error.name

#### Defined in

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/error.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: [`CallSite`](../interfaces/internal_.CallSite.md)[]) => `any`

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Defined in

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/error.ts#L32)

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Defined in

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/error.ts#L17)

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
