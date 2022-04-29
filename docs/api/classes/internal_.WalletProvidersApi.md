[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletProvidersApi

# Class: WalletProvidersApi

[<internal>](../modules/internal_.md).WalletProvidersApi

# Информация о провайдере
Не документированное

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletProvidersApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletProvidersApi.md#constructor)

### Properties

- [\_options](internal_.WalletProvidersApi.md#_options)

### Accessors

- [http](internal_.WalletProvidersApi.md#http)
- [walletId](internal_.WalletProvidersApi.md#walletid)

### Methods

- [getInfo](internal_.WalletProvidersApi.md#getinfo)

## Constructors

### constructor

• **new WalletProvidersApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/api.ts#L36)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)

#### Inherited from

[WalletApi](internal_.WalletApi.md).[_options](internal_.WalletApi.md#_options)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** WalletApi

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

#### Inherited from

WalletApi.http

#### Defined in

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/api.ts#L27)

## Methods

### getInfo

▸ **getInfo**(`providerId`): `Promise`<[`ProviderInfo`](../modules/QIWI.md#providerinfo)\>

## Профиль пользователя

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

**`memberof`** WalletProvidersApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerId` | `number` |

#### Returns

`Promise`<[`ProviderInfo`](../modules/QIWI.md#providerinfo)\>

{Promise<ProviderInfo>}

#### Defined in

[src/apis/wallet/providers.api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/providers.api.ts#L23)
