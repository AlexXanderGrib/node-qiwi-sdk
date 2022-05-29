[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletOauthApi

# Class: WalletOauthApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletOauthApi

# Доступ к API QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)

**`export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletOauthApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletOauthApi.md#constructor)

### Properties

- [\_http](index._internal_.WalletOauthApi.md#_http)
- [\_options](index._internal_.WalletOauthApi.md#_options)
- [CLIENT\_ID](index._internal_.WalletOauthApi.md#client_id)
- [CLIENT\_SECRET](index._internal_.WalletOauthApi.md#client_secret)
- [CLIENT\_SOFTWARE](index._internal_.WalletOauthApi.md#client_software)

### Accessors

- [http](index._internal_.WalletOauthApi.md#http)
- [walletId](index._internal_.WalletOauthApi.md#walletid)

### Methods

- [\_getHttp](index._internal_.WalletOauthApi.md#_gethttp)
- [createToken](index._internal_.WalletOauthApi.md#createtoken)

## Constructors

### constructor

• **new WalletOauthApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:22

## Properties

### \_http

• `Protected` `Readonly` **\_http**: [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Defined in

dist/cjs/apis/wallet/oauth.api.d.ts:16

___

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

___

### CLIENT\_ID

▪ `Static` `Readonly` **CLIENT\_ID**: ``"api_wallet_private"``

#### Defined in

dist/cjs/apis/wallet/oauth.api.d.ts:13

___

### CLIENT\_SECRET

▪ `Static` `Readonly` **CLIENT\_SECRET**: ``"hTFPyt"``

#### Defined in

dist/cjs/apis/wallet/oauth.api.d.ts:14

___

### CLIENT\_SOFTWARE

▪ `Static` `Readonly` **CLIENT\_SOFTWARE**: ``"api"``

#### Defined in

dist/cjs/apis/wallet/oauth.api.d.ts:15

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

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

### \_getHttp

▸ `Protected` **_getHttp**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`memberof`** WalletOauthApi

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Defined in

dist/cjs/apis/wallet/oauth.api.d.ts:24

___

### createToken

▸ **createToken**(): `Promise`<[`ShortTokenResponse`](../modules/index.QIWI.md#shorttokenresponse)\>

## Выпуск OAuth-токена

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

**`memberof`** WalletOauthApi

#### Returns

`Promise`<[`ShortTokenResponse`](../modules/index.QIWI.md#shorttokenresponse)\>

{Promise<PrettyTokenResponse<Wallet>>}

#### Defined in

dist/cjs/apis/wallet/oauth.api.d.ts:35
