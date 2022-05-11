[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / DetectorApi

# Class: DetectorApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).DetectorApi

**`export`**

## Hierarchy

- [`ApiSubclass`](index._internal_.ApiSubclass.md)<[`DetectorApiOptions`](../modules/index.QIWI.md#detectorapioptions)\>

  ↳ **`DetectorApi`**

  ↳↳ [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md)

## Table of contents

### Constructors

- [constructor](index._internal_.DetectorApi.md#constructor)

### Properties

- [\_options](index._internal_.DetectorApi.md#_options)

### Accessors

- [http](index._internal_.DetectorApi.md#http)

## Constructors

### constructor

• **new DetectorApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) |

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[constructor](index._internal_.ApiSubclass.md#constructor)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:22

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[_options](index._internal_.ApiSubclass.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Inherited from

ApiSubclass.http

#### Defined in

dist/cjs/apis/api.d.ts:43
