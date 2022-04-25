[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HttpError

# Class: HttpError<Rq, Rs\>

[<internal>](../modules/internal_.md).HttpError

**`export`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

## Hierarchy

- `Error`

  ↳ **`HttpError`**

## Table of contents

### Constructors

- [constructor](internal_.HttpError.md#constructor)

### Properties

- [cause](internal_.HttpError.md#cause)
- [message](internal_.HttpError.md#message)
- [name](internal_.HttpError.md#name)
- [response](internal_.HttpError.md#response)
- [stack](internal_.HttpError.md#stack)
- [prepareStackTrace](internal_.HttpError.md#preparestacktrace)
- [stackTraceLimit](internal_.HttpError.md#stacktracelimit)

### Methods

- [captureStackTrace](internal_.HttpError.md#capturestacktrace)

## Constructors

### constructor

• **new HttpError**<`Rq`, `Rs`\>(`message`, `response`)

Creates an instance of HttpError.

**`memberof`** HttpError

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Rq` | `any` |
| `Rs` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `response` | [`HttpResponse`](../interfaces/internal_.HttpResponse.md)<`Rq`, `Rs`\> |

#### Overrides

Error.constructor

#### Defined in

[src/http.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4f2e487/src/http.ts#L46)

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

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### response

• **response**: [`HttpResponse`](../interfaces/internal_.HttpResponse.md)<`Rq`, `Rs`\>

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

## Methods

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
