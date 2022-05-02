[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletIdentificationApi

# Class: WalletIdentificationApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletIdentificationApi

# Идентификация
[Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#identification)

**`export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletIdentificationApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletIdentificationApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletIdentificationApi.md#_options)

### Accessors

- [http](index._internal_.WalletIdentificationApi.md#http)
- [walletId](index._internal_.WalletIdentificationApi.md#walletid)

### Methods

- [get](index._internal_.WalletIdentificationApi.md#get)
- [set](index._internal_.WalletIdentificationApi.md#set)

## Constructors

### constructor

• **new WalletIdentificationApi**(`options`)

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

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L43)

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

[dist/cjs/apis/wallet/api.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/api.d.ts#L17)

## Methods

### get

▸ **get**(): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

# Данные идентификации

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletIdentificationApi

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

{Promise<IdentificationResponse>}

#### Defined in

[dist/cjs/apis/wallet/identification.api.d.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/identification.api.d.ts#L38)

___

### set

▸ **set**(`data`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

# Идентификация пользователя

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletIdentificationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/index.QIWI.md#identificationbase) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

{Promise<IdentificationResponse>}

#### Defined in

[dist/cjs/apis/wallet/identification.api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/identification.api.d.ts#L25)
