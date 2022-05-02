[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / \_P2pCompatBillPayments

# Class: \_P2pCompatBillPayments

[QIWI](../modules/QIWI.md)._P2pCompatBillPayments

**`deprecated`** Это класс для тех, кто мигрирует с `@qiwi/bill-payments-node-js-sdk`.
Остальным рекомендуется использовать

**`export`**

## Hierarchy

- [`P2p`](QIWI.P2p.md)

  ↳ **`_P2pCompatBillPayments`**

## Table of contents

### Constructors

- [constructor](QIWI._P2pCompatBillPayments.md#constructor)

### Properties

- [\_options](QIWI._P2pCompatBillPayments.md#_options)
- [bills](QIWI._P2pCompatBillPayments.md#bills)
- [publicKey](QIWI._P2pCompatBillPayments.md#publickey)
- [secretKey](QIWI._P2pCompatBillPayments.md#secretkey)
- [BillCurrency](QIWI._P2pCompatBillPayments.md#billcurrency)
- [BillPaySource](QIWI._P2pCompatBillPayments.md#billpaysource)
- [BillStatus](QIWI._P2pCompatBillPayments.md#billstatus)
- [BillsApi](QIWI._P2pCompatBillPayments.md#billsapi)

### Accessors

- [\_key](QIWI._P2pCompatBillPayments.md#_key)
- [agent](QIWI._P2pCompatBillPayments.md#agent)
- [key](QIWI._P2pCompatBillPayments.md#key)
- [options](QIWI._P2pCompatBillPayments.md#options)

### Methods

- [\_normalizeAmount](QIWI._P2pCompatBillPayments.md#_normalizeamount)
- [cancelBill](QIWI._P2pCompatBillPayments.md#cancelbill)
- [checkNotificationSignature](QIWI._P2pCompatBillPayments.md#checknotificationsignature)
- [createBill](QIWI._P2pCompatBillPayments.md#createbill)
- [createPaymentForm](QIWI._P2pCompatBillPayments.md#createpaymentform)
- [generateId](QIWI._P2pCompatBillPayments.md#generateid)
- [getBillInfo](QIWI._P2pCompatBillPayments.md#getbillinfo)
- [getLifetimeByDay](QIWI._P2pCompatBillPayments.md#getlifetimebyday)
- [getRefundInfo](QIWI._P2pCompatBillPayments.md#getrefundinfo)
- [notificationMiddleware](QIWI._P2pCompatBillPayments.md#notificationmiddleware)
- [refund](QIWI._P2pCompatBillPayments.md#refund)
- [create](QIWI._P2pCompatBillPayments.md#create)
- [httpClientFactory](QIWI._P2pCompatBillPayments.md#httpclientfactory)

## Constructors

### constructor

• **new _P2pCompatBillPayments**(`secretKey`, `publicKey?`)

Creates an instance of _P2pCompatBillPayments.

**`memberof`** _P2pCompatBillPayments

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secretKey` | `string` | `undefined` |
| `publicKey` | `string` | `""` |

#### Overrides

[P2p](QIWI.P2p.md).[constructor](QIWI.P2p.md#constructor)

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L29)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)

#### Inherited from

[P2p](QIWI.P2p.md).[_options](QIWI.P2p.md#_options)

___

### bills

• `Readonly` **bills**: [`P2pBillsApi`](internal_.P2pBillsApi.md)

#### Inherited from

[P2p](QIWI.P2p.md).[bills](QIWI.P2p.md#bills)

#### Defined in

[src/apis/p2p/p2p.ts:88](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L88)

___

### publicKey

• `Readonly` **publicKey**: `string` = `""`

___

### secretKey

• `Readonly` **secretKey**: `string`

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/QIWI.BillCurrency.md) = `BillCurrency`

#### Inherited from

[P2p](QIWI.P2p.md).[BillCurrency](QIWI.P2p.md#billcurrency)

#### Defined in

[src/apis/p2p/p2p.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L26)

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/QIWI.BillPaySource.md) = `BillPaySource`

#### Inherited from

[P2p](QIWI.P2p.md).[BillPaySource](QIWI.P2p.md#billpaysource)

#### Defined in

[src/apis/p2p/p2p.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L27)

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/QIWI.BillStatus.md) = `BillStatus`

#### Inherited from

[P2p](QIWI.P2p.md).[BillStatus](QIWI.P2p.md#billstatus)

#### Defined in

[src/apis/p2p/p2p.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L28)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](internal_.P2pBillsApi.md) = `P2pBillsApi`

#### Inherited from

[P2p](QIWI.P2p.md).[BillsApi](QIWI.P2p.md#billsapi)

#### Defined in

[src/apis/p2p/p2p.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L24)

## Accessors

### \_key

• `get` **_key**(): `string`

**`readonly`**

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Returns

`string`

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L46)

___

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

P2p.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/api.ts#L21)

• `set` **agent**(`agent`): `void`

**`memberof`** WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

P2p.agent

#### Defined in

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/api.ts#L30)

___

### key

• `get` **key**(): `string`

**`readonly`**

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Returns

`string`

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L56)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** ApiClass

#### Returns

`T`

#### Inherited from

P2p.options

#### Defined in

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/api.ts#L41)

## Methods

### \_normalizeAmount

▸ **_normalizeAmount**(`amount`): `string`

Normalize amount

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | The amount |

#### Returns

`string`

{string}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L67)

___

### cancelBill

▸ **cancelBill**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

Cancelling unpaid bill

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | The bill identifier |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:157](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L157)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`, `merchantSecret?`): `boolean`

Checks notification data signature

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | The signature |
| `body` | [`BillStatusBody`](../modules/QIWI.md#billstatusbody) | The notification body |
| `merchantSecret` | `string` | - |

#### Returns

`boolean`

{boolean}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L80)

___

### createBill

▸ **createBill**(`billId`, `parameters`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

Creating bill

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |
| `parameters` | [`BillCreateParameters`](../modules/QIWI.md#billcreateparameters) |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:132](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L132)

___

### createPaymentForm

▸ **createPaymentForm**(`parameters`): `string`

Creating checkout link

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`Pick`](../modules/internal_.md#pick)<{ `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`Record`](../modules/internal_.md#record)<`string`, `string`\> ; `lifetime?`: `string` ; `successUrl?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  }, ``"amount"`` \| ``"billId"`` \| ``"successUrl"``\> & { `publicKey?`: `string`  } & [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Returns

`string`

{string}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:116](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L116)

___

### generateId

▸ **generateId**(): `string`

Generate id

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Returns

`string`

Return uuid v4

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:105](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L105)

___

### getBillInfo

▸ **getBillInfo**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

Getting bill info

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | The bill identifier |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:146](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L146)

___

### getLifetimeByDay

▸ **getLifetimeByDay**(`days?`): `string`

Generate lifetime in format

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `days` | `number` | `45` |

#### Returns

`string`

Lifetime in ISO

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:95](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L95)

___

### getRefundInfo

▸ **getRefundInfo**(`billId`, `refundId`): `Promise`<[`BillRefundStatusData`](../modules/QIWI.md#billrefundstatusdata)\>

Getting refund info
Method is not available for individuals

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` \| `number` | The bill identifier |
| `refundId` | `string` \| `number` | The refund identifier |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/QIWI.md#billrefundstatusdata)\>

{Promise<BillRefundStatusData>}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:170](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L170)

___

### notificationMiddleware

▸ **notificationMiddleware**(`options?`, `actualHandler?`): [`RequestHandler`](../interfaces/internal_.RequestHandler.md)<[`ParamsDictionary`](../interfaces/internal_.ParamsDictionary.md), `any`, `any`, [`ParsedQs`](../interfaces/internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

## Это middleware кидает ошибки, позаботьтесь об их обработке

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.memo?` | `boolean` |
| `actualHandler` | [`RequestHandler`](../interfaces/internal_.RequestHandler.md)<[`Record`](../modules/internal_.md#record)<`string`, `string`\>, `any`, [`BillStatusData`](../modules/QIWI.md#billstatusdata), [`ParsedQs`](../interfaces/internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\> |

#### Returns

[`RequestHandler`](../interfaces/internal_.RequestHandler.md)<[`ParamsDictionary`](../interfaces/internal_.ParamsDictionary.md), `any`, `any`, [`ParsedQs`](../interfaces/internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\>

##### Пример:
**В начале файла**
```js
const p2p = new QIWI.P2P(process.env.QIWI_PRIVATE_KEY);
```
*`Вариант 1 - Классический`*

```js
app.post('/webhook/qiwi', p2p.notificationMiddleware(), (req, res) => {
 req.body // Это `BillStatusData`
})
```

*`Вариант 2 - Если нужны подсказки типов`*

```js
app.post('/webhook/qiwi', p2p.notificationMiddleware({}, (req, res) => {
 req.body // Это `BillStatusData`
}))
```

**Обработка ошибок**
```js
app.use((error, request, response, next) => {
 console.log(error); // [Error: Notification signature mismatch]
})
```

#### Inherited from

[P2p](QIWI.P2p.md).[notificationMiddleware](QIWI.P2p.md#notificationmiddleware)

#### Defined in

[src/apis/p2p/p2p.ts:130](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L130)

___

### refund

▸ **refund**(`billId`, `refundId`, `amount?`, `currency?`): `Promise`<[`BillRefundStatusData`](../modules/QIWI.md#billrefundstatusdata)\>

Refund paid bill
Method is not available for individuals

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `billId` | `string` \| `number` | `undefined` | The bill identifier |
| `refundId` | `string` \| `number` | `undefined` | The refund identifier |
| `amount` | `number` | `0` | - |
| `currency` | [`BillCurrencyAny`](../modules/QIWI.md#billcurrencyany) | `BillCurrency.RUB` | - |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/QIWI.md#billrefundstatusdata)\>

{Promise<BillRefundStatusData>}

#### Defined in

[src/apis/p2p/p2p.compat-bill-payments.ts:188](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.compat-bill-payments.ts#L188)

___

### create

▸ `Static` **create**(`secretKey`, `publicKey?`): [`P2p`](QIWI.P2p.md)

**`static`**

**`memberof`** P2p

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secretKey` | `string` | `undefined` |
| `publicKey` | `string` | `""` |

#### Returns

[`P2p`](QIWI.P2p.md)

{P2p}

#### Inherited from

[P2p](QIWI.P2p.md).[create](QIWI.P2p.md#create)

#### Defined in

[src/apis/p2p/p2p.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L67)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(`secretKey`): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`static`**

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Inherited from

[P2p](QIWI.P2p.md).[httpClientFactory](QIWI.P2p.md#httpclientfactory)

#### Defined in

[src/apis/p2p/p2p.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/p2p/p2p.ts#L38)
