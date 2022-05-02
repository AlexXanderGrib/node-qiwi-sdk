[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ApiSubclass

# Class: ApiSubclass<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ApiSubclass

**`export`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) = [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) |

## Hierarchy

- [`OptionsWrapper`](index._internal_.OptionsWrapper.md)<`T`\>

  ↳ **`ApiSubclass`**

  ↳↳ [`WalletApi`](index._internal_.WalletApi.md)

  ↳↳ [`P2pApi`](index._internal_.P2pApi.md)

  ↳↳ [`DetectorApi`](index._internal_.DetectorApi.md)

## Table of contents

### Constructors

- [constructor](index._internal_.ApiSubclass.md#constructor)

### Properties

- [\_options](index._internal_.ApiSubclass.md#_options)

### Accessors

- [http](index._internal_.ApiSubclass.md#http)

## Constructors

### constructor

• **new ApiSubclass**<`T`\>(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) = [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T` |

#### Inherited from

[OptionsWrapper](index._internal_.OptionsWrapper.md).[constructor](index._internal_.OptionsWrapper.md#constructor)

#### Defined in

dist/cjs/options-wrapper.d.ts:22

## Properties

### \_options

• `Protected` `Readonly` **\_options**: `T`

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[OptionsWrapper](index._internal_.OptionsWrapper.md).[_options](index._internal_.OptionsWrapper.md#_options)

#### Defined in

dist/cjs/options-wrapper.d.ts:16

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Defined in

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L43)