[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / \_P2pCompatBillPayments

# Class: \_P2pCompatBillPayments

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md)._P2pCompatBillPayments

**`deprecated`** Это класс для тех, кто мигрирует с `@qiwi/bill-payments-node-js-sdk`.
Остальным рекомендуется использовать класс `P2p`

**`export`**

## Hierarchy

- [`P2p`](index.QIWI.P2p.md)

  ↳ **`_P2pCompatBillPayments`**

## Table of contents

### Constructors

- [constructor](index.QIWI._P2pCompatBillPayments.md#constructor)

### Properties

- [\_options](index.QIWI._P2pCompatBillPayments.md#_options)
- [bills](index.QIWI._P2pCompatBillPayments.md#bills)
- [publicKey](index.QIWI._P2pCompatBillPayments.md#publickey)
- [secretKey](index.QIWI._P2pCompatBillPayments.md#secretkey)
- [BillCurrency](index.QIWI._P2pCompatBillPayments.md#billcurrency)
- [BillPaySource](index.QIWI._P2pCompatBillPayments.md#billpaysource)
- [BillStatus](index.QIWI._P2pCompatBillPayments.md#billstatus)
- [BillsApi](index.QIWI._P2pCompatBillPayments.md#billsapi)
- [Currency](index.QIWI._P2pCompatBillPayments.md#currency)
- [PaySource](index.QIWI._P2pCompatBillPayments.md#paysource)
- [Status](index.QIWI._P2pCompatBillPayments.md#status)
- [httpClientFactory](index.QIWI._P2pCompatBillPayments.md#httpclientfactory)

### Accessors

- [\_key](index.QIWI._P2pCompatBillPayments.md#_key)
- [agent](index.QIWI._P2pCompatBillPayments.md#agent)
- [key](index.QIWI._P2pCompatBillPayments.md#key)
- [options](index.QIWI._P2pCompatBillPayments.md#options)

### Methods

- [\_normalizeAmount](index.QIWI._P2pCompatBillPayments.md#_normalizeamount)
- [cancelBill](index.QIWI._P2pCompatBillPayments.md#cancelbill)
- [checkNotificationSignature](index.QIWI._P2pCompatBillPayments.md#checknotificationsignature)
- [createBill](index.QIWI._P2pCompatBillPayments.md#createbill)
- [createPaymentForm](index.QIWI._P2pCompatBillPayments.md#createpaymentform)
- [generateId](index.QIWI._P2pCompatBillPayments.md#generateid)
- [getBillInfo](index.QIWI._P2pCompatBillPayments.md#getbillinfo)
- [getLifetimeByDay](index.QIWI._P2pCompatBillPayments.md#getlifetimebyday)
- [getRefundInfo](index.QIWI._P2pCompatBillPayments.md#getrefundinfo)
- [notificationMiddleware](index.QIWI._P2pCompatBillPayments.md#notificationmiddleware)
- [refund](index.QIWI._P2pCompatBillPayments.md#refund)
- [create](index.QIWI._P2pCompatBillPayments.md#create)
- [env](index.QIWI._P2pCompatBillPayments.md#env)

## Constructors

### constructor

• **new _P2pCompatBillPayments**(`secretKey`, `publicKey?`)

Creates an instance of _P2pCompatBillPayments.

**`memberof`** _P2pCompatBillPayments

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |
| `publicKey?` | `string` |

#### Overrides

[P2p](index.QIWI.P2p.md).[constructor](index.QIWI.P2p.md#constructor)

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:21

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[P2p](index.QIWI.P2p.md).[_options](index.QIWI.P2p.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

___

### bills

• `Readonly` **bills**: [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[bills](index.QIWI.P2p.md#bills)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:58

___

### publicKey

• `Readonly` **publicKey**: `string`

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:14

___

### secretKey

• `Readonly` **secretKey**: `string`

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:13

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillCurrency](index.QIWI.P2p.md#billcurrency)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:17

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillPaySource](index.QIWI.P2p.md#billpaysource)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:18

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillStatus](index.QIWI.P2p.md#billstatus)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:19

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillsApi](index.QIWI.P2p.md#billsapi)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:16

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[Currency](index.QIWI.P2p.md#currency)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:20

___

### PaySource

▪ `Static` `Readonly` **PaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[PaySource](index.QIWI.P2p.md#paysource)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:21

___

### Status

▪ `Static` `Readonly` **Status**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[Status](index.QIWI.P2p.md#status)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:22

___

### httpClientFactory

▪ `Static` **httpClientFactory**: (`secretKey`: `string`) => [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Type declaration

▸ (`secretKey`): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`static`**

**`memberof`** P2p

##### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |

##### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Inherited from

[P2p](index.QIWI.P2p.md).[httpClientFactory](index.QIWI.P2p.md#httpclientfactory)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:31

## Accessors

### \_key

• `get` **_key**(): `string`

**`readonly`**

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Returns

`string`

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:28

___

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

P2p.agent

#### Defined in

dist/cjs/apis/api.d.ts:19

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

dist/cjs/apis/api.d.ts:25

___

### key

• `get` **key**(): `string`

**`readonly`**

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Returns

`string`

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:35

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

P2p.options

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:40

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

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:43

___

### cancelBill

▸ **cancelBill**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Cancelling unpaid bill

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | The bill identifier |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:103

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`, `merchantSecret?`): `boolean`

Checks notification data signature

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | The signature |
| `body` | [`BillStatusBody`](../modules/index.QIWI.md#billstatusbody) | The notification body |
| `merchantSecret?` | `string` | - |

#### Returns

`boolean`

{boolean}

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:53

___

### createBill

▸ **createBill**(`billId`, `parameters`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Creating bill

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |
| `parameters` | [`BillCreateParameters`](../modules/index.QIWI.md#billcreateparameters) |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:87

___

### createPaymentForm

▸ **createPaymentForm**(`parameters`): `string`

Creating checkout link

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Pick`<[`PayUrlPatchParameters`](../modules/index.QIWI.md#payurlpatchparameters) & [`BillCustomFieldsExtension`](../modules/index._internal_.md#billcustomfieldsextension) & { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`CustomFields`](../modules/index._internal_.md#customfields) ; `lifetime?`: `string` ; `themeCode?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  }, ``"amount"`` \| ``"billId"`` \| ``"successUrl"``\> & { `publicKey?`: `string`  } & `Readonly`<`Record`<`string`, `any`\>\> |

#### Returns

`string`

{string}

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:76

___

### generateId

▸ **generateId**(): `string`

Generate id

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Returns

`string`

Return uuid v4

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:68

___

### getBillInfo

▸ **getBillInfo**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Getting bill info

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | The bill identifier |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:95

___

### getLifetimeByDay

▸ **getLifetimeByDay**(`days?`): `string`

Generate lifetime in format

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type |
| :------ | :------ |
| `days?` | `number` |

#### Returns

`string`

Lifetime in ISO

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:61

___

### getRefundInfo

▸ **getRefundInfo**(`billId`, `refundId`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Getting refund info
Method is not available for individuals

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` \| `number` | The bill identifier |
| `refundId` | `string` \| `number` | The refund identifier |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

{Promise<BillRefundStatusData>}

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:113

___

### notificationMiddleware

▸ **notificationMiddleware**(`options?`, `handler?`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

## Это middleware кидает ошибки, позаботьтесь об их обработке

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`MiddlewareOptions`](../modules/index._internal_.md#middlewareoptions) |
| `handler?` | [`BillRequestHandler`](../modules/index._internal_.md#billrequesthandler) |

#### Returns

`RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

##### Пример:
**В начале файла**
```js
const p2p = new QIWI.P2P(process.env.QIWI_PRIVATE_KEY);
```
*`Вариант 1 - Классический`*

```js
app.post('/webhook/qiwi', p2p.notificationMiddleware(), (req, res) => {
 req.body // Это `BillStatusNotificationBody`
})
```

*`Вариант 2 - Если нужны подсказки типов`*

```js
app.post('/webhook/qiwi', p2p.notificationMiddleware({}, (req, res) => {
 req.body // Это `BillStatusNotificationBody`
}))
```

**Обработка ошибок**
```js
app.use((error, request, response, next) => {
 console.log(error); // [Error: Notification signature mismatch]
})
```

#### Inherited from

[P2p](index.QIWI.P2p.md).[notificationMiddleware](index.QIWI.P2p.md#notificationmiddleware)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:99

___

### refund

▸ **refund**(`billId`, `refundId`, `amount?`, `currency?`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Refund paid bill
Method is not available for individuals

**`memberof`** _P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` \| `number` | The bill identifier |
| `refundId` | `string` \| `number` | The refund identifier |
| `amount?` | `number` | - |
| `currency?` | [`BillCurrencyAny`](../modules/index.QIWI.md#billcurrencyany) | - |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

{Promise<BillRefundStatusData>}

#### Defined in

dist/cjs/apis/p2p/p2p.compat-bill-payments.d.ts:125

___

### create

▸ `Static` **create**(`secretKey`, `publicKey?`): [`P2p`](index.QIWI.P2p.md)

**`static`**

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |
| `publicKey?` | `string` |

#### Returns

[`P2p`](index.QIWI.P2p.md)

{P2p}

#### Inherited from

[P2p](index.QIWI.P2p.md).[create](index.QIWI.P2p.md#create)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:41

___

### env

▸ `Static` **env**(`secretKey?`, `publicKey?`): [`P2p`](index.QIWI.P2p.md)

**`static`**

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey?` | `string` |
| `publicKey?` | `string` |

#### Returns

[`P2p`](index.QIWI.P2p.md)

{P2p}

#### Inherited from

[P2p](index.QIWI.P2p.md).[env](index.QIWI.P2p.md#env)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:51
