[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletPaymentHistoryApi

# Class: WalletPaymentHistoryApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletPaymentHistoryApi

# История платежей
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments_history)

**`export`**

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

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L43)

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

[dist/cjs/apis/wallet/api.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/api.d.ts#L17)

## Methods

### getHistory

▸ **getHistory**(`parameters`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

## Список платежей

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules/index.QIWI.md#getpaymenthistoryparams) | Тело запроса |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

{Promise<GetTransactionsHistoryResponse>}

#### Defined in

[dist/cjs/apis/wallet/payment-history.api.d.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/payment-history.api.d.ts#L26)

___

### getTotal

▸ **getTotal**(`parameters`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

## Статистика платежей

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules/index.QIWI.md#getpaymenthistorytotalparams) | Тело запроса |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

{Promise<GetPaymentHistoryTotalResponse>}

#### Defined in

[dist/cjs/apis/wallet/payment-history.api.d.ts:39](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/payment-history.api.d.ts#L39)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type?`): `Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

## Информация о транзакции

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | Номер транзакции |
| `type?` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) | - |

#### Returns

`Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

{Promise<Transaction>}

#### Defined in

[dist/cjs/apis/wallet/payment-history.api.d.ts:51](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/payment-history.api.d.ts#L51)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Buffer`\>

### Файл квитанции

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | номер транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].txnId` в ответе) |
| `type` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) | тип транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].type` в ответе) |
| `format?` | [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Buffer`\>

{Promise<Buffer>}

#### Defined in

[dist/cjs/apis/wallet/payment-history.api.d.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/payment-history.api.d.ts#L61)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<`void`\>

### Отправка квитанции

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | номер транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].txnId` в ответе) |
| `type` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) | тип транзакции из [getHistory](index._internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].type` в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[dist/cjs/apis/wallet/payment-history.api.d.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/payment-history.api.d.ts#L71)
