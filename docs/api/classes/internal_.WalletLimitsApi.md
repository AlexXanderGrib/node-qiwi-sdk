[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletLimitsApi

# Class: WalletLimitsApi

[<internal>](../modules/internal_.md).WalletLimitsApi

# Лимиты QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#limits)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletLimitsApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletLimitsApi.md#constructor)

### Properties

- [\_options](internal_.WalletLimitsApi.md#_options)

### Accessors

- [http](internal_.WalletLimitsApi.md#http)
- [walletId](internal_.WalletLimitsApi.md#walletid)

### Methods

- [get](internal_.WalletLimitsApi.md#get)

## Constructors

### constructor

• **new WalletLimitsApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L27)

## Methods

### get

▸ **get**<`Limits`\>(`limits`): `Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

## Лимиты QIWI Кошелька

Запрос возвращает текущие уровни лимитов по операциям в
вашем QIWI кошельке. Лимиты действуют как ограничения на
сумму определенных операций.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletLimitsApi

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Limits` | extends [`LimitTypeAny`](../modules/QIWI.md#limittypeany)[] = [`LimitTypeAny`](../modules/QIWI.md#limittypeany)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | `Limits` |

#### Returns

`Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

{Promise<LimitsResponse<Limits[number]>>}

#### Defined in

[src/apis/wallet/limits.api.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/limits.api.ts#L28)
