[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletPaymentsApi

# Class: WalletPaymentsApi

[<internal>](../modules/internal_.md).WalletPaymentsApi

# Платежное API
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletPaymentsApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletPaymentsApi.md#constructor)

### Properties

- [\_options](internal_.WalletPaymentsApi.md#_options)

### Accessors

- [http](internal_.WalletPaymentsApi.md#http)
- [walletId](internal_.WalletPaymentsApi.md#walletid)

### Methods

- [createFormUrl](internal_.WalletPaymentsApi.md#createformurl)
- [getCommission](internal_.WalletPaymentsApi.md#getcommission)
- [pay](internal_.WalletPaymentsApi.md#pay)
- [createFormUrl](internal_.WalletPaymentsApi.md#createformurl-1)

## Constructors

### constructor

• **new WalletPaymentsApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/wallet/api.ts#L27)

## Methods

### createFormUrl

▸ **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму оплаты

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | Идентификатор провайдера |
| `options` | [`FormUrlOptions`](../modules/QIWI.md#formurloptions) | - |

#### Returns

`string`

{string} Ссылка

#### Defined in

[src/apis/wallet/payments.api.ts:103](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/wallet/payments.api.ts#L103)

___

### getCommission

▸ **getCommission**(`provider`, `account`, `amount`): `Promise`<`number`\>

## Комиссионные тарифы

Чтобы узнать комиссию за платеж до его совершения по заданному
набору платежных реквизитов, используйте этот запрос.
Возвращается полная комиссия QIWI Кошелька за платеж в пользу
указанного провайдера с учетом всех тарифов.

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | Идентификатор провайдера |
| `account` | `string` | Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера) |
| `amount` | `number` | Сумма |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/apis/wallet/payments.api.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/wallet/payments.api.ts#L35)

___

### pay

▸ **pay**(`params`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PayParameters`](../modules/QIWI.md#payparameters) | Параметры платежа |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

{Promise<PaymentResponse>}

#### Defined in

[src/apis/wallet/payments.api.ts:125](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/wallet/payments.api.ts#L125)

___

### createFormUrl

▸ `Static` **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму оплаты

**`static`**

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | Идентификатор провайдера |
| `options` | [`FormUrlOptions`](../modules/QIWI.md#formurloptions) | - |

#### Returns

`string`

{string} Ссылка

#### Defined in

[src/apis/wallet/payments.api.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/wallet/payments.api.ts#L71)
