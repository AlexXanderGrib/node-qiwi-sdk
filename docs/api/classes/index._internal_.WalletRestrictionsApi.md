[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletRestrictionsApi

# Class: WalletRestrictionsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletRestrictionsApi

# Проверка ограничений исходящих платежей с QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#restrictions)

**`Export`**

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

### get

▸ **get**(): `Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

## Проверка ограничений исходящих платежей с QIWI Кошелька

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletRestrictionsApi

#### Returns

`Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

Promise<Restrictions>

#### Defined in

[apis/wallet/restrictions.api.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/restrictions.api.ts#L25)
