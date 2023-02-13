[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletPaymentHistoryApi

# Class: WalletPaymentHistoryApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletPaymentHistoryApi

# История платежей
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments_history)

**`Export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletPaymentHistoryApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletPaymentHistoryApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletPaymentHistoryApi.md#_options)

### Accessors

- [http](index._internal_.WalletPaymentHistoryApi.md#http)
- [walletId](index._internal_.WalletPaymentHistoryApi.md#walletid)

### Methods

- [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory)
- [getTotal](index._internal_.WalletPaymentHistoryApi.md#gettotal)
- [getTransaction](index._internal_.WalletPaymentHistoryApi.md#gettransaction)
- [getTransactionCheque](index._internal_.WalletPaymentHistoryApi.md#gettransactioncheque)
- [sendTransactionCheque](index._internal_.WalletPaymentHistoryApi.md#sendtransactioncheque)

## Constructors

### constructor

• **new WalletPaymentHistoryApi**(`options`)

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

### getHistory

▸ **getHistory**(`parameters`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

## Список платежей

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParameters`](../modules/index.QIWI.md#getpaymenthistoryparameters) | Тело запроса |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

Promise<GetTransactionsHistoryResponse>

#### Defined in

[apis/wallet/payment-history.api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/payment-history.api.ts#L36)

___

### getTotal

▸ **getTotal**(`parameters`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

## Статистика платежей

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`Memberof`**

WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParameters`](../modules/index.QIWI.md#getpaymenthistorytotalparameters) | Тело запроса |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

Promise<GetPaymentHistoryTotalResponse>

#### Defined in

[apis/wallet/payment-history.api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/payment-history.api.ts#L55)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type?`): `Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

## Информация о транзакции

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

**`Memberof`**

WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | Номер транзакции |
| `type?` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) | Тип транзакции |

#### Returns

`Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

Promise<Transaction>

#### Defined in

[apis/wallet/payment-history.api.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/payment-history.api.ts#L73)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Uint8Array`\>

### Файл квитанции

**`Memberof`**

WalletPaymentHistoryApi

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | `undefined` | номер транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].txnId` в ответе) |
| `type` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) | `undefined` | тип транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].type` в ответе) |
| `format` | [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) | `ChequeFormat.JPEG` | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Uint8Array`\>

Promise<Uint8Array>

#### Defined in

[apis/wallet/payment-history.api.ts:91](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/payment-history.api.ts#L91)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<`void`\>

### Отправка квитанции

**`Memberof`**

WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | номер транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].txnId` в ответе) |
| `type` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) | тип транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].type` в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[apis/wallet/payment-history.api.ts:115](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/payment-history.api.ts#L115)
