[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletCardsApi

# Class: WalletCardsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletCardsApi

# API QIWI Мастер
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#default_balance)

**`export`**

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

### block

▸ **block**(`cardId`): `Promise`<`void`\>

## Блокировка карты

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[dist/cjs/apis/wallet/cards.api.d.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/cards.api.d.ts#L31)

___

### get

▸ **get**(): `Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

## Список карт

Успешный ответ содержит JSON-массив с информацией о
выпущенных картах

**`memberof`** WalletCardsApi

#### Returns

`Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

{Promise<CardResponse[]>}

#### Defined in

[dist/cjs/apis/wallet/cards.api.d.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/cards.api.d.ts#L21)

___

### getRequisites

▸ **getRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

## Получение реквизитов карты

Успешный ответ содержит JSON с PAN и CVV карты

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

{Promise<CardRequisitesResponse>}

#### Defined in

[dist/cjs/apis/wallet/cards.api.d.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/cards.api.d.ts#L55)

___

### rename

▸ **rename**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

## Переименование карты

Успешный ответ содержит JSON со статусом операции

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

{Promise<CardRenameResponse>}

#### Defined in

[dist/cjs/apis/wallet/cards.api.d.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/cards.api.d.ts#L68)

___

### unblock

▸ **unblock**(`cardId`): `Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

## Разблокировка карты

Успешный ответ содержит JSON со статусом операции

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletCardsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

{Promise<CardUnblockResponse>}

#### Defined in

[dist/cjs/apis/wallet/cards.api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/cards.api.d.ts#L43)
