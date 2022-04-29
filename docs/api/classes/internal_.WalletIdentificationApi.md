[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletIdentificationApi

# Class: WalletIdentificationApi

[<internal>](../modules/internal_.md).WalletIdentificationApi

# Идентификация
[Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#identification)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletIdentificationApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletIdentificationApi.md#constructor)

### Properties

- [\_options](internal_.WalletIdentificationApi.md#_options)

### Accessors

- [http](internal_.WalletIdentificationApi.md#http)
- [walletId](internal_.WalletIdentificationApi.md#walletid)

### Methods

- [get](internal_.WalletIdentificationApi.md#get)
- [set](internal_.WalletIdentificationApi.md#set)

## Constructors

### constructor

• **new WalletIdentificationApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/api.ts#L27)

## Methods

### get

▸ **get**(): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

# Данные идентификации

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletIdentificationApi

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

{Promise<IdentificationResponse>}

#### Defined in

[src/apis/wallet/identification.api.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/identification.api.ts#L48)

___

### set

▸ **set**(`data`): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

# Идентификация пользователя

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletIdentificationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/QIWI.md#identificationbase) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

{Promise<IdentificationResponse>}

#### Defined in

[src/apis/wallet/identification.api.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/identification.api.ts#L26)
