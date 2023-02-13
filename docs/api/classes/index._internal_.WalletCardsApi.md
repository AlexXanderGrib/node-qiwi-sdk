[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletCardsApi

# Class: WalletCardsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletCardsApi

# API QIWI Мастер
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#default_balance)

**`Export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletCardsApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletCardsApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletCardsApi.md#_options)

### Accessors

- [http](index._internal_.WalletCardsApi.md#http)
- [walletId](index._internal_.WalletCardsApi.md#walletid)

### Methods

- [block](index._internal_.WalletCardsApi.md#block)
- [get](index._internal_.WalletCardsApi.md#get)
- [getRequisites](index._internal_.WalletCardsApi.md#getrequisites)
- [rename](index._internal_.WalletCardsApi.md#rename)
- [unblock](index._internal_.WalletCardsApi.md#unblock)

## Constructors

### constructor

• **new WalletCardsApi**(`options`)

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

### block

▸ **block**(`cardId`): `Promise`<`void`\>

## Блокировка карты

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[apis/wallet/cards.api.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/cards.api.ts#L49)

___

### get

▸ **get**(`options?`): `Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

## Список карт

Успешный ответ содержит JSON-массив с информацией о
выпущенных картах

**`Memberof`**

WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.onlyQiwiMaster` | `undefined` \| `boolean` |

#### Returns

`Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

Promise<CardResponse[]>

#### Defined in

[apis/wallet/cards.api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/cards.api.ts#L32)

___

### getRequisites

▸ **getRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

## Получение реквизитов карты

Успешный ответ содержит JSON с PAN и CVV карты

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

Promise<CardRequisitesResponse>

#### Defined in

[apis/wallet/cards.api.ts:83](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/cards.api.ts#L83)

___

### rename

▸ **rename**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

## Переименование карты

Успешный ответ содержит JSON со статусом операции

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

Promise<CardRenameResponse>

#### Defined in

[apis/wallet/cards.api.ts:101](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/cards.api.ts#L101)

___

### unblock

▸ **unblock**(`cardId`): `Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

## Разблокировка карты

Успешный ответ содержит JSON со статусом операции

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

Promise<CardUnblockResponse>

#### Defined in

[apis/wallet/cards.api.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/cards.api.ts#L66)
