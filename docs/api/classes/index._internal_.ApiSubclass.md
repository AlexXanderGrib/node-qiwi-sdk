[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ApiSubclass

# Class: ApiSubclass<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ApiSubclass

**`Export`**

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

**`Memberof`**

OptionsWrapper

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

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: `T`

**`Memberof`**

OptionsWrapper

#### Inherited from

[OptionsWrapper](index._internal_.OptionsWrapper.md).[_options](index._internal_.OptionsWrapper.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Memberof`**

ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Defined in

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L55)
