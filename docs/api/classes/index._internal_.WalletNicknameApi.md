[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletNicknameApi

# Class: WalletNicknameApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletNicknameApi

# Получение своего ника
Не документированное

**`Export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletNicknameApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletNicknameApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletNicknameApi.md#_options)

### Accessors

- [http](index._internal_.WalletNicknameApi.md#http)
- [walletId](index._internal_.WalletNicknameApi.md#walletid)

### Methods

- [getCurrent](index._internal_.WalletNicknameApi.md#getcurrent)

## Constructors

### constructor

• **new WalletNicknameApi**(`options`)

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

▸ **getCurrent**(): `Promise`<[`NicknameData`](../modules/index.QIWI.md#nicknamedata)\>

## Получение своего ника

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletNicknameApi

#### Returns

`Promise`<[`NicknameData`](../modules/index.QIWI.md#nicknamedata)\>

Promise<NicknameData>

#### Defined in

[apis/wallet/nickname.api.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/nickname.api.ts#L22)
