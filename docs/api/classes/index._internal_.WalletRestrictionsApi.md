[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletRestrictionsApi

# Class: WalletRestrictionsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletRestrictionsApi

# Проверка ограничений исходящих платежей с QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#restrictions)

**`export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletRestrictionsApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletRestrictionsApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletRestrictionsApi.md#_options)

### Accessors

- [http](index._internal_.WalletRestrictionsApi.md#http)
- [walletId](index._internal_.WalletRestrictionsApi.md#walletid)

### Methods

- [get](index._internal_.WalletRestrictionsApi.md#get)

## Constructors

### constructor

• **new WalletRestrictionsApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

[dist/cjs/options-wrapper.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/options-wrapper.d.ts#L22)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

[dist/cjs/options-wrapper.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/options-wrapper.d.ts#L16)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Inherited from

WalletApi.http

#### Defined in

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/api.d.ts#L43)

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

[dist/cjs/apis/wallet/api.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/api.d.ts#L17)

## Methods

### get

▸ **get**(): `Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

## Проверка ограничений исходящих платежей с QIWI Кошелька

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletRestrictionsApi

#### Returns

`Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

{Promise<Restrictions>}

#### Defined in

[dist/cjs/apis/wallet/restrictions.api.d.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/restrictions.api.d.ts#L23)
