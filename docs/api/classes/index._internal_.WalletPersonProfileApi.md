[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletPersonProfileApi

# Class: WalletPersonProfileApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletPersonProfileApi

# Профиль пользователя
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#profile)

**`export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletPersonProfileApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletPersonProfileApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletPersonProfileApi.md#_options)

### Accessors

- [http](index._internal_.WalletPersonProfileApi.md#http)
- [walletId](index._internal_.WalletPersonProfileApi.md#walletid)

### Methods

- [getCurrent](index._internal_.WalletPersonProfileApi.md#getcurrent)

## Constructors

### constructor

• **new WalletPersonProfileApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

[dist/cjs/options-wrapper.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L22)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

[dist/cjs/options-wrapper.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L16)

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

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/api.d.ts#L43)

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

[dist/cjs/apis/wallet/api.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/api.d.ts#L17)

## Methods

### getCurrent

▸ **getCurrent**(): `Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

## Профиль пользователя

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

**`memberof`** WalletPersonProfileApi

#### Returns

`Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

{Promise<PersonProfile>}

#### Defined in

[dist/cjs/apis/wallet/person-profile.api.d.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/person-profile.api.d.ts#L21)
