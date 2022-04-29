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

- [\_resolveProvider](internal_.WalletPaymentsApi.md#_resolveprovider)
- [createFormUrl](internal_.WalletPaymentsApi.md#createformurl)
- [getCommission](internal_.WalletPaymentsApi.md#getcommission)
- [pay](internal_.WalletPaymentsApi.md#pay)
- [quickPay](internal_.WalletPaymentsApi.md#quickpay)
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

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/api.ts#L27)

## Methods

### \_resolveProvider

▸ `Protected` **_resolveProvider**(`provider`, `account`): `Promise`<`number`\>

**`throws`** {DetectorError}

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `undefined` \| `number` \| [`Card`](../enums/QIWI.QuickPayRecipients.md#card) \| [`Phone`](../enums/QIWI.QuickPayRecipients.md#phone) \| ``"card"`` \| ``"phone"`` \| ``"qiwi"`` \| ``"yoomoney"`` |
| `account` | `string` |

#### Returns

`Promise`<`number`\>

{Promise<number>}

#### Defined in

[src/apis/wallet/payments.api.ts:207](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/payments.api.ts#L207)

___

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

[src/apis/wallet/payments.api.ts:105](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/payments.api.ts#L105)

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
| `__namedParameters` | `Object` | - |
| `__namedParameters.accountCurrency` | `undefined` \| [`Currency`](../enums/QIWI.Currency.md) | - |
| `__namedParameters.paymentCurrency` | `undefined` \| [`Currency`](../enums/QIWI.Currency.md) | - |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/apis/wallet/payments.api.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/payments.api.ts#L38)

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

[src/apis/wallet/payments.api.ts:127](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/payments.api.ts#L127)

___

### quickPay

▸ **quickPay**(`parameters`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Метод для отправки платежа с возможностью автоматического вычета
комиссии и распознавания `provider`'а

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`throws`** {DetectorError} Под капотом создаётся и вызывается `Detector`. Он может выкинуть эту ошибку

**`memberof`** WalletPaymentsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`QuickPayParameters`](../modules/QIWI.md#quickpayparameters) |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

{Promise<PaymentResponse>}

#### Defined in

[src/apis/wallet/payments.api.ts:165](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/payments.api.ts#L165)

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

[src/apis/wallet/payments.api.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/payments.api.ts#L73)
