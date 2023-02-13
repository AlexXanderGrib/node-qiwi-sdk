[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / DetectorApi

# Class: DetectorApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).DetectorApi

**`Export`**

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

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) |

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[constructor](index._internal_.ApiSubclass.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[_options](index._internal_.ApiSubclass.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Memberof`**

ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Inherited from

ApiSubclass.http

#### Defined in

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L55)
