[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletLimitsApi

# Class: WalletLimitsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletLimitsApi

# Лимиты QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#limits)

**`Export`**

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

▸ **get**<`Limits`\>(`limits`): `Promise`<[`LimitsResponse`](../modules/index.QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

## Лимиты QIWI Кошелька

Запрос возвращает текущие уровни лимитов по операциям в
вашем QIWI кошельке. Лимиты действуют как ограничения на
сумму определенных операций.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletLimitsApi

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

Promise<LimitsResponse<Limits[number]>>

#### Defined in

[apis/wallet/limits.api.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/limits.api.ts#L28)
