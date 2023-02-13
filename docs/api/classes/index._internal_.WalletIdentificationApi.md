[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletIdentificationApi

# Class: WalletIdentificationApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletIdentificationApi

# Идентификация
[Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#identification)

**`Export`**

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

▸ **get**(): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

# Данные идентификации

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletIdentificationApi

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

Promise<IdentificationResponse>

#### Defined in

[apis/wallet/identification.api.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/identification.api.ts#L47)

___

### set

▸ **set**(`data`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

# Идентификация пользователя

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletIdentificationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/index.QIWI.md#identificationbase) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

Promise<IdentificationResponse>

#### Defined in

[apis/wallet/identification.api.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/identification.api.ts#L26)
