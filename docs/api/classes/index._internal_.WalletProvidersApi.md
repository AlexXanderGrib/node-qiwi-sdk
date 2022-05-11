[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletProvidersApi

# Class: WalletProvidersApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletProvidersApi

# Информация о провайдере
Не документированное

**`export`**

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

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:22

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

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

WalletApi.http

#### Defined in

dist/cjs/apis/api.d.ts:43

___

### walletId

• `Protected` `get` **walletId**(): `string`

**`readonly`**

**`memberof`** WalletApi

#### Returns

`string`

#### Inherited from

WalletApi.walletId

#### Defined in

dist/cjs/apis/wallet/api.d.ts:17

## Methods

### getInfo

▸ **getInfo**(`providerId`): `Promise`<[`ProviderInfo`](../modules/index.QIWI.md#providerinfo)\>

## Профиль пользователя

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

**`memberof`** WalletProvidersApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerId` | `number` |

#### Returns

`Promise`<[`ProviderInfo`](../modules/index.QIWI.md#providerinfo)\>

{Promise<ProviderInfo>}

#### Defined in

dist/cjs/apis/wallet/providers.api.d.ts:22
