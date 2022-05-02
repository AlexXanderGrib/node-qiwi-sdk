[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletPaymentHistoryApi

# Class: WalletPaymentHistoryApi

[<internal>](../modules/internal_.md).WalletPaymentHistoryApi

# История платежей
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments_history)

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletPaymentHistoryApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletPaymentHistoryApi.md#constructor)

### Properties

- [\_options](internal_.WalletPaymentHistoryApi.md#_options)

### Accessors

- [http](internal_.WalletPaymentHistoryApi.md#http)
- [walletId](internal_.WalletPaymentHistoryApi.md#walletid)

### Methods

- [getHistory](internal_.WalletPaymentHistoryApi.md#gethistory)
- [getTotal](internal_.WalletPaymentHistoryApi.md#gettotal)
- [getTransaction](internal_.WalletPaymentHistoryApi.md#gettransaction)
- [getTransactionCheque](internal_.WalletPaymentHistoryApi.md#gettransactioncheque)
- [sendTransactionCheque](internal_.WalletPaymentHistoryApi.md#sendtransactioncheque)

## Constructors

### constructor

• **new WalletPaymentHistoryApi**(`_options`)

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

### getHistory

▸ **getHistory**(`parameters`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

## Список платежей

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules/QIWI.md#getpaymenthistoryparams) | Тело запроса |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

{Promise<GetTransactionsHistoryResponse>}

#### Defined in

[src/apis/wallet/payment-history.api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/payment-history.api.ts#L36)

___

### getTotal

▸ **getTotal**(`parameters`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

## Статистика платежей

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

**Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules/QIWI.md#getpaymenthistorytotalparams) | Тело запроса |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

{Promise<GetPaymentHistoryTotalResponse>}

#### Defined in

[src/apis/wallet/payment-history.api.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/payment-history.api.ts#L57)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type?`): `Promise`<[`Transaction`](../modules/QIWI.md#transaction)\>

## Информация о транзакции

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) | Номер транзакции |
| `type?` | [`TransactionTypeAny`](../modules/QIWI.md#transactiontypeany) | - |

#### Returns

`Promise`<[`Transaction`](../modules/QIWI.md#transaction)\>

{Promise<Transaction>}

#### Defined in

[src/apis/wallet/payment-history.api.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/payment-history.api.ts#L77)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

### Файл квитанции

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) | `undefined` | номер транзакции из [getHistory](internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].txnId` в ответе) |
| `type` | [`TransactionTypeAny`](../modules/QIWI.md#transactiontypeany) | `undefined` | тип транзакции из [getHistory](internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].type` в ответе) |
| `format` | [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) | `ChequeFormat.JPEG` | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

{Promise<Buffer>}

#### Defined in

[src/apis/wallet/payment-history.api.ts:97](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/payment-history.api.ts#L97)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<`void`\>

### Отправка квитанции

**`memberof`** WalletPaymentHistoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) | номер транзакции из [getHistory](internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].txnId` в ответе) |
| `type` | [`TransactionTypeAny`](../modules/QIWI.md#transactiontypeany) | тип транзакции из [getHistory](internal_.WalletPaymentHistoryApi.md#gethistory) (параметр `data[].type` в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[src/apis/wallet/payment-history.api.ts:123](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/wallet/payment-history.api.ts#L123)
