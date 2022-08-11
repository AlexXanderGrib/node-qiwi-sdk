[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletFundingSourcesApi

# Class: WalletFundingSourcesApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletFundingSourcesApi

# Баланс QIWI Кошелька
[Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#balance)

**`Export`**

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

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/options-wrapper.ts#L16)

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

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/api.ts#L55)

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

[apis/wallet/api.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/api.ts#L17)

## Methods

### createAccount

▸ **createAccount**(`alias`): `Promise`<`void`\>

## Создание баланса

Запрос создает новый счет и баланс в вашем QIWI Кошельке.
Список доступных для создания счетов можно получить [getAccountOffers](index._internal_.WalletFundingSourcesApi.md#getaccountoffers).

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletFundingSourcesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[apis/wallet/funding-sources.api.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/funding-sources.api.ts#L44)

___

### getAccountOffers

▸ **getAccountOffers**(): `Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

## Запрос доступных счетов

Запрос отображает псевдонимы счетов, доступных для создания
в вашем QIWI Кошельке.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletFundingSourcesApi

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

Promise<GetAccountOffersResponse>

#### Defined in

[apis/wallet/funding-sources.api.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/funding-sources.api.ts#L64)

___

### getAccounts

▸ **getAccounts**(): `Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

## Список балансов

Запрос выгружает текущие балансы счетов вашего QIWI Кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletFundingSourcesApi

#### Returns

`Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

Promise<GetAccountsResponse["accounts"]>

#### Defined in

[apis/wallet/funding-sources.api.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/funding-sources.api.ts#L24)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`): `Promise`<`void`\>

## Установка баланса по умолчанию

Запрос устанавливает для вашего QIWI Кошелька счет, баланс
которого будет использоваться для фондирования всех платежей
по умолчанию. Счет должен содержаться в [getAccounts](index._internal_.WalletFundingSourcesApi.md#getaccounts)

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletFundingSourcesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[apis/wallet/funding-sources.api.ts:83](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/wallet/funding-sources.api.ts#L83)
