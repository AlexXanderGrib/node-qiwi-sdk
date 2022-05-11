[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletNicknameApi

# Class: WalletNicknameApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletNicknameApi

# Получение своего ника
Не документированное

**`export`**

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

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

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

### getCurrent

▸ **getCurrent**(): `Promise`<[`NicknameData`](../modules/index.QIWI.md#nicknamedata)\>

## Получение своего ника

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletNicknameApi

#### Returns

`Promise`<[`NicknameData`](../modules/index.QIWI.md#nicknamedata)\>

{Promise<NicknameData>}

#### Defined in

dist/cjs/apis/wallet/nickname.api.d.ts:20