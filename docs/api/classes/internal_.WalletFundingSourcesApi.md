[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletFundingSourcesApi

# Class: WalletFundingSourcesApi

[<internal>](../modules/internal_.md).WalletFundingSourcesApi

# Баланс QIWI Кошелька
[Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#balance)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletFundingSourcesApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletFundingSourcesApi.md#constructor)

### Properties

- [\_options](internal_.WalletFundingSourcesApi.md#_options)

### Accessors

- [http](internal_.WalletFundingSourcesApi.md#http)
- [walletId](internal_.WalletFundingSourcesApi.md#walletid)

### Methods

- [createAccount](internal_.WalletFundingSourcesApi.md#createaccount)
- [getAccountOffers](internal_.WalletFundingSourcesApi.md#getaccountoffers)
- [getAccounts](internal_.WalletFundingSourcesApi.md#getaccounts)
- [setDefaultAccount](internal_.WalletFundingSourcesApi.md#setdefaultaccount)

## Constructors

### constructor

• **new WalletFundingSourcesApi**(`_options`)

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

### createAccount

▸ **createAccount**(`alias`): `Promise`<`void`\>

## Создание баланса

Запрос создает новый счет и баланс в вашем QIWI Кошельке.
Список доступных для создания счетов можно получить [getAccountOffers](internal_.WalletFundingSourcesApi.md#getaccountoffers).

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

[src/apis/wallet/funding-sources.api.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/funding-sources.api.ts#L43)

___

### getAccountOffers

▸ **getAccountOffers**(): `Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

## Запрос доступных счетов

Запрос отображает псевдонимы счетов, доступных для создания
в вашем QIWI Кошельке.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletFundingSourcesApi

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

{Promise<GetAccountOffersResponse>}

#### Defined in

[src/apis/wallet/funding-sources.api.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/funding-sources.api.ts#L62)

___

### getAccounts

▸ **getAccounts**(): `Promise`<[`Account`](../modules/QIWI.md#account)[]\>

## Список балансов

Запрос выгружает текущие балансы счетов вашего QIWI Кошелька.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletFundingSourcesApi

#### Returns

`Promise`<[`Account`](../modules/QIWI.md#account)[]\>

{Promise<GetAccountsResponse["accounts"]>}

#### Defined in

[src/apis/wallet/funding-sources.api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/funding-sources.api.ts#L23)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`): `Promise`<`void`\>

## Установка баланса по умолчанию

Запрос устанавливает для вашего QIWI Кошелька счет, баланс
которого будет использоваться для фондирования всех платежей
по умолчанию. Счет должен содержаться в [getAccounts](internal_.WalletFundingSourcesApi.md#getaccounts)

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

[src/apis/wallet/funding-sources.api.ts:81](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/wallet/funding-sources.api.ts#L81)
