[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / PersonalApiError

# Class: PersonalApiError

[QIWI](../modules/QIWI.md).PersonalApiError

Ошибка, которую выбрасывает персональное API в случае
неправильного кода ответа от QIWI

## Hierarchy

- `ExtendedError`

  ↳ **`PersonalApiError`**

## Table of contents

### Constructors

- [constructor](QIWI.PersonalApiError.md#constructor)

### Properties

- [cause](QIWI.PersonalApiError.md#cause)
- [data](QIWI.PersonalApiError.md#data)
- [message](QIWI.PersonalApiError.md#message)
- [name](QIWI.PersonalApiError.md#name)
- [stack](QIWI.PersonalApiError.md#stack)
- [prepareStackTrace](QIWI.PersonalApiError.md#preparestacktrace)
- [stackTraceLimit](QIWI.PersonalApiError.md#stacktracelimit)

### Accessors

- [[toStringTag]](QIWI.PersonalApiError.md#[tostringtag])

### Methods

- [toJSON](QIWI.PersonalApiError.md#tojson)
- [captureStackTrace](QIWI.PersonalApiError.md#capturestacktrace)

## Constructors

### constructor

• **new PersonalApiError**(`message?`, `data?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `""` | Сообщение |
| `data?` | `AnyResponse` | `undefined` | Данные которыми ответил QIWI |

#### Overrides

ExtendedError.constructor

#### Defined in

[src/services/personal.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.ts#L26)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

ExtendedError.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### data

• `Optional` **data**: `AnyResponse`

___

### message

• **message**: `string` = `""`

#### Inherited from

ExtendedError.message

___

### name

• **name**: `string`

#### Inherited from

ExtendedError.name

#### Defined in

[src/error.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/error.ts#L9)

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

[src/error.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/error.ts#L32)

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

[src/error.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/error.ts#L17)

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
