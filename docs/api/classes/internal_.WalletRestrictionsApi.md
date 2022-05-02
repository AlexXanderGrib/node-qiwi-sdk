[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletRestrictionsApi

# Class: WalletRestrictionsApi

[<internal>](../modules/internal_.md).WalletRestrictionsApi

# Проверка ограничений исходящих платежей с QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#restrictions)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletRestrictionsApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletRestrictionsApi.md#constructor)

### Properties

- [\_options](internal_.WalletRestrictionsApi.md#_options)

### Accessors

- [http](internal_.WalletRestrictionsApi.md#http)
- [walletId](internal_.WalletRestrictionsApi.md#walletid)

### Methods

- [get](internal_.WalletRestrictionsApi.md#get)

## Constructors

### constructor

• **new WalletRestrictionsApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/api.ts#L27)

## Methods

### get

▸ **get**(): `Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

## Проверка ограничений исходящих платежей с QIWI Кошелька

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletRestrictionsApi

#### Returns

`Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

{Promise<Restrictions>}

#### Defined in

[src/apis/wallet/restrictions.api.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/restrictions.api.ts#L24)
