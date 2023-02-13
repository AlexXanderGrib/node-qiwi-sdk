[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletProvidersApi

# Class: WalletProvidersApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletProvidersApi

# Информация о провайдере
Не документированное

**`Export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletProvidersApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletProvidersApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletProvidersApi.md#_options)

### Accessors

- [http](index._internal_.WalletProvidersApi.md#http)
- [walletId](index._internal_.WalletProvidersApi.md#walletid)

### Methods

- [getInfo](index._internal_.WalletProvidersApi.md#getinfo)

## Constructors

### constructor

• **new WalletProvidersApi**(`options`)

Creates an instance of OptionsWrapper.

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

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

WalletApi.http

#### Defined in

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L55)

___

### walletId

• `Protected` `get` **walletId**(): `string`

**`Memberof`**

WalletApi

#### Returns

`string`

#### Inherited from

WalletApi.walletId

#### Defined in

[apis/wallet/api.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/api.ts#L17)

## Methods

### getInfo

▸ **getInfo**(`providerId`): `Promise`<[`ProviderInfo`](../modules/index.QIWI.md#providerinfo)\>

## Профиль пользователя

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

**`Memberof`**

WalletProvidersApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerId` | `number` |

#### Returns

`Promise`<[`ProviderInfo`](../modules/index.QIWI.md#providerinfo)\>

Promise<ProviderInfo>

#### Defined in

[apis/wallet/providers.api.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/providers.api.ts#L24)
