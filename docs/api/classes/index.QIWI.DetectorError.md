[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / DetectorError

# Class: DetectorError

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).DetectorError

Ошибка, которую выбрасывает персональное API в случае
неправильного кода ответа от QIWI

## Hierarchy

- [`ExtendedError`](index._internal_.ExtendedError.md)

  ↳ **`DetectorError`**

## Table of contents

### Constructors

- [constructor](index.QIWI.DetectorError.md#constructor)

### Properties

- [name](index.QIWI.DetectorError.md#name)

### Accessors

- [[toStringTag]](index.QIWI.DetectorError.md#[tostringtag])

### Methods

- [toJSON](index.QIWI.DetectorError.md#tojson)

## Constructors

### constructor

• **new DetectorError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

• **new DetectorError**(`message?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[constructor](index._internal_.ExtendedError.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:30

## Properties

### name

• **name**: `string`

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[name](index._internal_.ExtendedError.md#name)

#### Defined in

dist/cjs/apis/error.d.ts:9

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Inherited from

ExtendedError.\_\_@toStringTag@404

#### Defined in

dist/cjs/apis/error.d.ts:24

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Inherited from

[ExtendedError](index._internal_.ExtendedError.md).[toJSON](index._internal_.ExtendedError.md#tojson)

#### Defined in

dist/cjs/apis/error.d.ts:16
