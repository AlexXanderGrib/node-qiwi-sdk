[qiwi-sdk](../README.md) / [Exports](../modules.md) / PersonalApiError

# Class: PersonalApiError

Ошибка, которую выбрасывает персональное API в случае
неправильного кода ответа от QIWI

## Hierarchy

- `ExtendedError`

  ↳ **`PersonalApiError`**

## Table of contents

### Constructors

- [constructor](PersonalApiError.md#constructor)

### Properties

- [data](PersonalApiError.md#data)
- [message](PersonalApiError.md#message)
- [name](PersonalApiError.md#name)
- [stack](PersonalApiError.md#stack)
- [prepareStackTrace](PersonalApiError.md#preparestacktrace)
- [stackTraceLimit](PersonalApiError.md#stacktracelimit)

### Accessors

- [[toStringTag]](PersonalApiError.md#[tostringtag])

### Methods

- [toJSON](PersonalApiError.md#tojson)
- [captureStackTrace](PersonalApiError.md#capturestacktrace)

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

[src/services/personal.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d8775dc/src/services/personal.ts#L24)

## Properties

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

[src/error.ts:8](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d8775dc/src/error.ts#L8)

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

[src/error.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d8775dc/src/error.ts#L18)

## Methods

### toJSON

▸ **toJSON**(): `Error`

#### Returns

`Error`

#### Inherited from

ExtendedError.toJSON

#### Defined in

[src/error.ts:10](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d8775dc/src/error.ts#L10)

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
