[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletFundingSourcesApi

# Class: WalletFundingSourcesApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletFundingSourcesApi

# Баланс QIWI Кошелька
[Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#balance)

**`export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletFundingSourcesApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletFundingSourcesApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletFundingSourcesApi.md#_options)

### Accessors

- [http](index._internal_.WalletFundingSourcesApi.md#http)
- [walletId](index._internal_.WalletFundingSourcesApi.md#walletid)

### Methods

- [createAccount](index._internal_.WalletFundingSourcesApi.md#createaccount)
- [getAccountOffers](index._internal_.WalletFundingSourcesApi.md#getaccountoffers)
- [getAccounts](index._internal_.WalletFundingSourcesApi.md#getaccounts)
- [setDefaultAccount](index._internal_.WalletFundingSourcesApi.md#setdefaultaccount)

## Constructors

### constructor

• **new WalletFundingSourcesApi**(`options`)

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

### createAccount

▸ **createAccount**(`alias`): `Promise`<`void`\>

## Создание баланса

Запрос создает новый счет и баланс в вашем QIWI Кошельке.
Список доступных для создания счетов можно получить [getAccountOffers](index._internal_.WalletFundingSourcesApi.md#getaccountoffers).

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletFundingSourcesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[dist/cjs/apis/wallet/funding-sources.api.d.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/funding-sources.api.d.ts#L35)

___

### getAccountOffers

▸ **getAccountOffers**(): `Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

## Запрос доступных счетов

Запрос отображает псевдонимы счетов, доступных для создания
в вашем QIWI Кошельке.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletFundingSourcesApi

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

{Promise<GetAccountOffersResponse>}

#### Defined in

[dist/cjs/apis/wallet/funding-sources.api.d.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/funding-sources.api.d.ts#L47)

___

### getAccounts

▸ **getAccounts**(): `Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

## Список балансов

Запрос выгружает текущие балансы счетов вашего QIWI Кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletFundingSourcesApi

#### Returns

`Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

{Promise<GetAccountsResponse["accounts"]>}

#### Defined in

[dist/cjs/apis/wallet/funding-sources.api.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/funding-sources.api.d.ts#L22)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`): `Promise`<`void`\>

## Установка баланса по умолчанию

Запрос устанавливает для вашего QIWI Кошелька счет, баланс
которого будет использоваться для фондирования всех платежей
по умолчанию. Счет должен содержаться в [getAccounts](index._internal_.WalletFundingSourcesApi.md#getaccounts)

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletFundingSourcesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[dist/cjs/apis/wallet/funding-sources.api.d.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/funding-sources.api.d.ts#L61)
