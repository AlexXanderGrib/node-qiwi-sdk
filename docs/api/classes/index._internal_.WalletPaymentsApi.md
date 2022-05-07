[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletPaymentsApi

# Class: WalletPaymentsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletPaymentsApi

# Платежное API
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletPaymentsApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletPaymentsApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletPaymentsApi.md#_options)

### Accessors

- [http](index._internal_.WalletPaymentsApi.md#http)
- [walletId](index._internal_.WalletPaymentsApi.md#walletid)

### Methods

- [\_resolveProvider](index._internal_.WalletPaymentsApi.md#_resolveprovider)
- [createFormUrl](index._internal_.WalletPaymentsApi.md#createformurl)
- [getCommission](index._internal_.WalletPaymentsApi.md#getcommission)
- [getRates](index._internal_.WalletPaymentsApi.md#getrates)
- [pay](index._internal_.WalletPaymentsApi.md#pay)
- [quickPay](index._internal_.WalletPaymentsApi.md#quickpay)
- [createFormUrl](index._internal_.WalletPaymentsApi.md#createformurl-1)

## Constructors

### constructor

• **new WalletPaymentsApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

dist/cjs/options-wrapper.d.ts:22

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

dist/cjs/options-wrapper.d.ts:16

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

### \_resolveProvider

▸ `Protected` **_resolveProvider**(`provider`, `account`): `Promise`<`number`\>

**`throws`** {DetectorError}

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `undefined` \| `number` \| [`Card`](../enums/index.QIWI.QuickPayRecipients.md#card) \| [`Phone`](../enums/index.QIWI.QuickPayRecipients.md#phone) \| ``"card"`` \| ``"phone"`` \| ``"qiwi"`` \| ``"yoomoney"`` |
| `account` | `string` |

#### Returns

`Promise`<`number`\>

{Promise<number>}

#### Defined in

dist/cjs/apis/wallet/payments.api.d.ts:81

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму оплаты

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | Идентификатор провайдера |
| `options?` | [`FormUrlOptions`](../modules/index.QIWI.md#formurloptions) | - |

#### Returns

`string`

{string} Ссылка

#### Defined in

dist/cjs/apis/wallet/payments.api.d.ts:48

___

### getCommission

▸ **getCommission**(`provider`, `account`, `amount`, `__namedParameters?`): `Promise`<`number`\>

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
| `__namedParameters?` | `Object` | - |
| `__namedParameters.accountCurrency?` | [`Currency`](../enums/index.QIWI.Currency.md) | - |
| `__namedParameters.paymentCurrency?` | [`Currency`](../enums/index.QIWI.Currency.md) | - |

#### Returns

`Promise`<`number`\>

#### Defined in

dist/cjs/apis/wallet/payments.api.d.ts:26

___

### getRates

▸ **getRates**(): `Promise`<[`Rate`](../modules/index.QIWI.md#rate)[]\>

Получение курсов валют

**`memberof`** WalletPaymentsApi

#### Returns

`Promise`<[`Rate`](../modules/index.QIWI.md#rate)[]\>

{Promise<Rate[]>}

#### Defined in

dist/cjs/apis/wallet/payments.api.d.ts:88

___

### pay

▸ **pay**(`params`): `Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PayParameters`](../modules/index.QIWI.md#payparameters) | Параметры платежа |

#### Returns

`Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

{Promise<PaymentResponse>}

#### Defined in

dist/cjs/apis/wallet/payments.api.d.ts:58

___

### quickPay

▸ **quickPay**(`parameters`): `Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

Метод для отправки платежа с возможностью автоматического вычета
комиссии и распознавания `provider`'а

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`throws`** {DetectorError} Под капотом создаётся и вызывается `Detector`. Он может выкинуть эту ошибку

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`QuickPayParameters`](../modules/index.QIWI.md#quickpayparameters) |

#### Returns

`Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

{Promise<PaymentResponse>}

#### Defined in

dist/cjs/apis/wallet/payments.api.d.ts:70

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
| `options?` | [`FormUrlOptions`](../modules/index.QIWI.md#formurloptions) | - |

#### Returns

`string`

{string} Ссылка

#### Defined in

dist/cjs/apis/wallet/payments.api.d.ts:39
