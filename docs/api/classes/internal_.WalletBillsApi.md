[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletBillsApi

# Class: WalletBillsApi

[<internal>](../modules/internal_.md).WalletBillsApi

# Выставление счета на QIWI кошелек
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#invoices)

Для выставления счета на QIWI Кошелек используется протокол
[API P2P-счетов](https://developer.qiwi.com/ru/p2p-payments/#create).
Для авторизации используется [токен P2P](https://developer.qiwi.com/ru/qiwi-wallet-personal/#p2p-token).

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletBillsApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletBillsApi.md#constructor)

### Properties

- [\_options](internal_.WalletBillsApi.md#_options)

### Accessors

- [http](internal_.WalletBillsApi.md#http)
- [walletId](internal_.WalletBillsApi.md#walletid)

### Methods

- [createP2PKeyPair](internal_.WalletBillsApi.md#createp2pkeypair)
- [get](internal_.WalletBillsApi.md#get)
- [pay](internal_.WalletBillsApi.md#pay)
- [reject](internal_.WalletBillsApi.md#reject)

## Constructors

### constructor

• **new WalletBillsApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L36)

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

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L16)

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

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L27)

## Methods

### createP2PKeyPair

▸ **createP2PKeyPair**(`name`, `server?`): `Promise`<[`KeyPair`](../modules/QIWI.md#keypair)\>

## Выпуск токена P2P

Запрос возвращает пару токенов P2P (для выставления счета
при вызове платежной формы и через API, соответственно) в
полях ответа PublicKey и SecretKey. Для авторизации
используется токен API QIWI Кошелька.

**`memberof`** WalletBillsApi

**`example`**

const { publicKey, secretKey } = await createP2PKeyPair('my-key-pair');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Название связки ключей |
| `server?` | `string` | - |

#### Returns

`Promise`<[`KeyPair`](../modules/QIWI.md#keypair)\>

{Promise<KeyPair>}

#### Defined in

[src/apis/wallet/bills.api.ts:42](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/bills.api.ts#L42)

___

### get

▸ **get**(`parameters?`): `Promise`<[`Bill`](../interfaces/QIWI.Bill.md)[]\>

## Список счетов

Метод получения списка неоплаченных счетов вашего кошелька.
Список строится в обратном хронологическом порядке. По
умолчанию, список разбивается на страницы по 50 элементов в
каждой, но вы можете задать другое количество элементов (не
более 50). В запросе можно использовать фильтры по времени
выставления счета, начальному идентификатору счета.

**`memberof`** WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`BillsGetParameters`](../modules/QIWI.md#billsgetparameters) |

#### Returns

`Promise`<[`Bill`](../interfaces/QIWI.Bill.md)[]\>

{Promise<Bill[]>}

#### Defined in

[src/apis/wallet/bills.api.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/bills.api.ts#L71)

___

### pay

▸ **pay**(`bill`): `Promise`<[`BillPayResponse`](../modules/QIWI.md#billpayresponse)\>

**`memberof`** WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `bill` | [`Bill`](../interfaces/QIWI.Bill.md) |

#### Returns

`Promise`<[`BillPayResponse`](../modules/QIWI.md#billpayresponse)\>

{Promise<BillPayResponse>}

#### Defined in

[src/apis/wallet/bills.api.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/bills.api.ts#L79)

▸ **pay**(`id`, `currency`): `Promise`<[`BillPayResponse`](../modules/QIWI.md#billpayresponse)\>

**`memberof`** WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `currency` | [`Currency`](../enums/QIWI.Currency.md) |

#### Returns

`Promise`<[`BillPayResponse`](../modules/QIWI.md#billpayresponse)\>

{Promise<BillPayResponse>}

#### Defined in

[src/apis/wallet/bills.api.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/bills.api.ts#L80)

___

### reject

▸ **reject**(`id`): `Promise`<`void`\>

## Отмена неоплаченного счета

Метод отклоняет неоплаченный счет. При этом счет становится
недоступным для оплаты.

**`memberof`** WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

[src/apis/wallet/bills.api.ts:112](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/bills.api.ts#L112)
