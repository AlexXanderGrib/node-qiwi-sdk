[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletLimitsApi

# Class: WalletLimitsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletLimitsApi

# Лимиты QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#limits)

**`export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletLimitsApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletLimitsApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletLimitsApi.md#_options)

### Accessors

- [http](index._internal_.WalletLimitsApi.md#http)
- [walletId](index._internal_.WalletLimitsApi.md#walletid)

### Methods

- [get](index._internal_.WalletLimitsApi.md#get)

## Constructors

### constructor

• **new WalletLimitsApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

dist/cjs/options-wrapper.d.ts:22

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

dist/cjs/options-wrapper.d.ts:16

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

### get

▸ **get**<`Limits`\>(`limits`): `Promise`<[`LimitsResponse`](../modules/index.QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

## Лимиты QIWI Кошелька

Запрос возвращает текущие уровни лимитов по операциям в
вашем QIWI кошельке. Лимиты действуют как ограничения на
сумму определенных операций.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletLimitsApi

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Limits` | extends [`LimitTypeAny`](../modules/index.QIWI.md#limittypeany)[] = [`LimitTypeAny`](../modules/index.QIWI.md#limittypeany)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | `Limits` |

#### Returns

`Promise`<[`LimitsResponse`](../modules/index.QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

{Promise<LimitsResponse<Limits[number]>>}

#### Defined in

dist/cjs/apis/wallet/limits.api.d.ts:26
