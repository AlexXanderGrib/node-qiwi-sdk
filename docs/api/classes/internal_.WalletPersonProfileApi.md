[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletPersonProfileApi

# Class: WalletPersonProfileApi

[<internal>](../modules/internal_.md).WalletPersonProfileApi

# Профиль пользователя
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#profile)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletPersonProfileApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletPersonProfileApi.md#constructor)

### Properties

- [\_options](internal_.WalletPersonProfileApi.md#_options)

### Accessors

- [http](internal_.WalletPersonProfileApi.md#http)
- [walletId](internal_.WalletPersonProfileApi.md#walletid)

### Methods

- [getCurrent](internal_.WalletPersonProfileApi.md#getcurrent)

## Constructors

### constructor

• **new WalletPersonProfileApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/api.ts#L27)

## Methods

### getCurrent

▸ **getCurrent**(): `Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

## Профиль пользователя

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

**`memberof`** WalletPersonProfileApi

#### Returns

`Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

{Promise<PersonProfile>}

#### Defined in

[src/apis/wallet/person-profile.api.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/person-profile.api.ts#L22)
