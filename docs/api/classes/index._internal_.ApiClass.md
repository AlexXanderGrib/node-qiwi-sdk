[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ApiClass

# Class: ApiClass<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ApiClass

**`Export`**

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

[OptionsWrapperWithGetter](index._internal_.OptionsWrapperWithGetter.md).[constructor](index._internal_.OptionsWrapperWithGetter.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: `T`

**`Memberof`**

OptionsWrapper

#### Inherited from

[OptionsWrapperWithGetter](index._internal_.OptionsWrapperWithGetter.md).[_options](index._internal_.OptionsWrapperWithGetter.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

## Accessors

### agent

• `get` **agent**(): `any`

**`Memberof`**

WalletCompat

#### Returns

`any`

#### Defined in

[apis/api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L23)

• `set` **agent**(`agent`): `void`

**`Memberof`**

WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Defined in

[apis/api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L32)

___

### options

• `get` **options**(): `T`

**`Memberof`**

OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

OptionsWrapperWithGetter.options

#### Defined in

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L44)
