[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletPersonProfileApi

# Class: WalletPersonProfileApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletPersonProfileApi

# Профиль пользователя
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#profile)

**`Export`**

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

### getCurrent

▸ **getCurrent**(): `Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

## Профиль пользователя

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

**`Memberof`**

WalletPersonProfileApi

#### Returns

`Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

Promise<PersonProfile>

#### Defined in

[apis/wallet/person-profile.api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/person-profile.api.ts#L23)
