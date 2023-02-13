[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletOauthApi

# Class: WalletOauthApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletOauthApi

# Доступ к API QIWI Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)

**`Export`**

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

### \_http

• `Protected` `Readonly` **\_http**: [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Defined in

[apis/wallet/oauth.api.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/oauth.api.ts#L25)

___

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

___

### CLIENT\_ID

▪ `Static` `Readonly` **CLIENT\_ID**: ``"api_wallet_private"``

#### Defined in

[apis/wallet/oauth.api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/oauth.api.ts#L21)

___

### CLIENT\_SECRET

▪ `Static` `Readonly` **CLIENT\_SECRET**: ``"hTFPyt"``

#### Defined in

[apis/wallet/oauth.api.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/oauth.api.ts#L22)

___

### CLIENT\_SOFTWARE

▪ `Static` `Readonly` **CLIENT\_SOFTWARE**: ``"api"``

#### Defined in

[apis/wallet/oauth.api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/oauth.api.ts#L23)

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

### \_getHttp

▸ `Protected` **_getHttp**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Memberof`**

WalletOauthApi

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Defined in

[apis/wallet/oauth.api.ts:34](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/oauth.api.ts#L34)

___

### createToken

▸ **createToken**(): `Promise`<[`ShortTokenResponse`](../modules/index.QIWI.md#shorttokenresponse)\>

## Выпуск OAuth-токена

Создаёт токен с увеличенным сроком действия (10 лет)

[Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

**`Memberof`**

WalletOauthApi

#### Returns

`Promise`<[`ShortTokenResponse`](../modules/index.QIWI.md#shorttokenresponse)\>

Promise<PrettyTokenResponse<Wallet>>

#### Defined in

[apis/wallet/oauth.api.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/oauth.api.ts#L59)
