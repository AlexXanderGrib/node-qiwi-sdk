[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletCardsApi

# Class: WalletCardsApi

[<internal>](../modules/internal_.md).WalletCardsApi

# API QIWI Мастер
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#default_balance)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletCardsApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletCardsApi.md#constructor)

### Properties

- [\_options](internal_.WalletCardsApi.md#_options)

### Accessors

- [http](internal_.WalletCardsApi.md#http)
- [walletId](internal_.WalletCardsApi.md#walletid)

### Methods

- [block](internal_.WalletCardsApi.md#block)
- [get](internal_.WalletCardsApi.md#get)
- [getRequisites](internal_.WalletCardsApi.md#getrequisites)
- [rename](internal_.WalletCardsApi.md#rename)
- [unblock](internal_.WalletCardsApi.md#unblock)

## Constructors

### constructor

• **new WalletCardsApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/api.ts#L27)

## Methods

### block

▸ **block**(`cardId`): `Promise`<`void`\>

## Блокировка карты

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[src/apis/wallet/cards.api.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/cards.api.ts#L43)

___

### get

▸ **get**(): `Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

## Список карт

Успешный ответ содержит JSON-массив с информацией о
выпущенных картах

**`memberof`** WalletCardsApi

#### Returns

`Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

{Promise<CardResponse[]>}

#### Defined in

[src/apis/wallet/cards.api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/cards.api.ts#L30)

___

### getRequisites

▸ **getRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

## Получение реквизитов карты

Успешный ответ содержит JSON с PAN и CVV карты

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

{Promise<CardRequisitesResponse>}

#### Defined in

[src/apis/wallet/cards.api.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/cards.api.ts#L75)

___

### rename

▸ **rename**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

## Переименование карты

Успешный ответ содержит JSON со статусом операции

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

{Promise<CardRenameResponse>}

#### Defined in

[src/apis/wallet/cards.api.ts:93](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/cards.api.ts#L93)

___

### unblock

▸ **unblock**(`cardId`): `Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

## Разблокировка карты

Успешный ответ содержит JSON со статусом операции

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

{Promise<CardUnblockResponse>}

#### Defined in

[src/apis/wallet/cards.api.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/cards.api.ts#L58)
