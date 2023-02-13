[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletBillsApi

# Class: WalletBillsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletBillsApi

# Выставление счета на QIWI кошелек
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#invoices)

Для выставления счета на QIWI Кошелек используется протокол
[API P2P-счетов](https://developer.qiwi.com/ru/p2p-payments/#create).
Для авторизации используется [токен P2P](https://developer.qiwi.com/ru/qiwi-wallet-personal/#p2p-token).

**`Export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletBillsApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletBillsApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletBillsApi.md#_options)

### Accessors

- [http](index._internal_.WalletBillsApi.md#http)
- [walletId](index._internal_.WalletBillsApi.md#walletid)

### Methods

- [createP2PKeyPair](index._internal_.WalletBillsApi.md#createp2pkeypair)
- [get](index._internal_.WalletBillsApi.md#get)
- [pay](index._internal_.WalletBillsApi.md#pay)
- [reject](index._internal_.WalletBillsApi.md#reject)

## Constructors

### constructor

• **new WalletBillsApi**(`options`)

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

### createP2PKeyPair

▸ **createP2PKeyPair**(`name`, `server?`): `Promise`<[`KeyPair`](../modules/index.QIWI.md#keypair)\>

## Выпуск токена P2P

Запрос возвращает пару токенов P2P (для выставления счета
при вызове платежной формы и через API, соответственно) в
полях ответа PublicKey и SecretKey. Для авторизации
используется токен API QIWI Кошелька.

**`Memberof`**

WalletBillsApi

**`Example`**

```ts
const { publicKey, secretKey } = await createP2PKeyPair('my-key-pair');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Название связки ключей |
| `server?` | `string` | URL сервера для отправки уведомлений |

#### Returns

`Promise`<[`KeyPair`](../modules/index.QIWI.md#keypair)\>

Promise<KeyPair>

#### Defined in

[apis/wallet/bills.api.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/bills.api.ts#L43)

___

### get

▸ **get**(`parameters?`): `Promise`<[`Bill`](../interfaces/index.QIWI.Bill.md)[]\>

## Список счетов

Метод получения списка неоплаченных счетов вашего кошелька.
Список строится в обратном хронологическом порядке. По
умолчанию, список разбивается на страницы по 50 элементов в
каждой, но вы можете задать другое количество элементов (не
более 50). В запросе можно использовать фильтры по времени
выставления счета, начальному идентификатору счета.

**`Memberof`**

WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | [`BillsGetParameters`](../modules/index.QIWI.md#billsgetparameters) |

#### Returns

`Promise`<[`Bill`](../interfaces/index.QIWI.Bill.md)[]\>

Promise<Bill[]>

#### Defined in

[apis/wallet/bills.api.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/bills.api.ts#L72)

___

### pay

▸ **pay**(`bill`): `Promise`<[`BillPayResponse`](../modules/index.QIWI.md#billpayresponse)\>

**`Memberof`**

WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `bill` | [`Bill`](../interfaces/index.QIWI.Bill.md) |

#### Returns

`Promise`<[`BillPayResponse`](../modules/index.QIWI.md#billpayresponse)\>

Promise<BillPayResponse>

#### Defined in

[apis/wallet/bills.api.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/bills.api.ts#L80)

▸ **pay**(`id`, `currency`): `Promise`<[`BillPayResponse`](../modules/index.QIWI.md#billpayresponse)\>

**`Memberof`**

WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `currency` | [`Currency`](../enums/index.QIWI.Currency.md) |

#### Returns

`Promise`<[`BillPayResponse`](../modules/index.QIWI.md#billpayresponse)\>

Promise<BillPayResponse>

#### Defined in

[apis/wallet/bills.api.ts:81](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/bills.api.ts#L81)

___

### reject

▸ **reject**(`id`): `Promise`<`void`\>

## Отмена неоплаченного счета

Метод отклоняет неоплаченный счет. При этом счет становится
недоступным для оплаты.

**`Memberof`**

WalletBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[apis/wallet/bills.api.ts:113](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/bills.api.ts#L113)
