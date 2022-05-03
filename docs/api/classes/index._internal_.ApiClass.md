[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ApiClass

# Class: ApiClass<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ApiClass

**`export`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) = [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) |

## Hierarchy

- [`OptionsWrapperWithGetter`](index._internal_.OptionsWrapperWithGetter.md)<`T`\>

  ↳ **`ApiClass`**

  ↳↳ [`Wallet`](index.QIWI.Wallet.md)

  ↳↳ [`P2p`](index.QIWI.P2p.md)

  ↳↳ [`Detector`](index.QIWI.Detector.md)

## Table of contents

### Constructors

- [constructor](index._internal_.ApiClass.md#constructor)

### Properties

- [\_options](index._internal_.ApiClass.md#_options)

### Accessors

- [agent](index._internal_.ApiClass.md#agent)
- [options](index._internal_.ApiClass.md#options)

## Constructors

### constructor

• **new ApiClass**<`T`\>(`options`)

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

[OptionsWrapperWithGetter](index._internal_.OptionsWrapperWithGetter.md).[constructor](index._internal_.OptionsWrapperWithGetter.md#constructor)

#### Defined in

[dist/cjs/options-wrapper.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L22)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: `T`

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[OptionsWrapperWithGetter](index._internal_.OptionsWrapperWithGetter.md).[_options](index._internal_.OptionsWrapperWithGetter.md#_options)

#### Defined in

[dist/cjs/options-wrapper.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L16)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Defined in

[dist/cjs/apis/api.d.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/api.d.ts#L19)

• `set` **agent**(`agent`): `void`

**`memberof`** WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Defined in

[dist/cjs/apis/api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/api.d.ts#L25)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

OptionsWrapperWithGetter.options

#### Defined in

[dist/cjs/options-wrapper.d.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L40)
