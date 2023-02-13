[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / \_P2pCompatBillPayments

# Class: \_P2pCompatBillPayments

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md)._P2pCompatBillPayments

**`Deprecated`**

Это класс для тех, кто мигрирует с `@qiwi/bill-payments-node-js-sdk`.
Остальным рекомендуется использовать класс `P2p`

**`Export`**

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
- [httpClientFactory](index.QIWI._P2pCompatBillPayments.md#httpclientfactory)

## Constructors

### constructor

• **new _P2pCompatBillPayments**(`secretKey`, `publicKey?`)

Creates an instance of _P2pCompatBillPayments.

**`Memberof`**

_P2pCompatBillPayments

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secretKey` | `string` | `undefined` |
| `publicKey` | `string` | `""` |

#### Overrides

[P2p](index.QIWI.P2p.md).[constructor](index.QIWI.P2p.md#constructor)

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L31)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[P2p](index.QIWI.P2p.md).[_options](index.QIWI.P2p.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

___

### bills

• `Readonly` **bills**: [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[bills](index.QIWI.P2p.md#bills)

#### Defined in

[apis/p2p/p2p.ts:109](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L109)

___

### publicKey

• `Readonly` **publicKey**: `string` = `""`

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:33](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L33)

___

### secretKey

• `Readonly` **secretKey**: `string`

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L32)

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md) = `BillCurrency`

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillCurrency](index.QIWI.P2p.md#billcurrency)

#### Defined in

[apis/p2p/p2p.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L27)

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md) = `BillPaySource`

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillPaySource](index.QIWI.P2p.md#billpaysource)

#### Defined in

[apis/p2p/p2p.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L28)

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md) = `BillStatus`

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillStatus](index.QIWI.P2p.md#billstatus)

#### Defined in

[apis/p2p/p2p.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L29)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](index._internal_.P2pBillsApi.md) = `P2pBillsApi`

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillsApi](index.QIWI.P2p.md#billsapi)

#### Defined in

[apis/p2p/p2p.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L25)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md) = `BillCurrency`

#### Inherited from

[P2p](index.QIWI.P2p.md).[Currency](index.QIWI.P2p.md#currency)

#### Defined in

[apis/p2p/p2p.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L31)

___

### PaySource

▪ `Static` `Readonly` **PaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md) = `BillPaySource`

#### Inherited from

[P2p](index.QIWI.P2p.md).[PaySource](index.QIWI.P2p.md#paysource)

#### Defined in

[apis/p2p/p2p.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L32)

___

### Status

▪ `Static` `Readonly` **Status**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md) = `BillStatus`

#### Inherited from

[P2p](index.QIWI.P2p.md).[Status](index.QIWI.P2p.md#status)

#### Defined in

[apis/p2p/p2p.ts:33](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L33)

## Accessors

### \_key

• `get` **_key**(): `string`

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Returns

`string`

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L48)

___

### agent

• `get` **agent**(): `any`

**`Memberof`**

WalletCompat

#### Returns

`any`

#### Inherited from

P2p.agent

#### Defined in

[apis/api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L23)

• `set` **agent**(`agent`): `void`

**`Memberof`**

WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

P2p.agent

#### Defined in

[apis/api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L32)

___

### key

• `get` **key**(): `string`

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Returns

`string`

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L58)

___

### options

• `get` **options**(): `T`

**`Memberof`**

OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

P2p.options

#### Defined in

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L44)

## Methods

### \_normalizeAmount

▸ **_normalizeAmount**(`amount`): `string`

Normalize amount

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | The amount |

#### Returns

`string`

string

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L69)

___

### cancelBill

▸ **cancelBill**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Cancelling unpaid bill

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | The bill identifier |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Promise<BillStatusData>

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:159](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L159)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`, `merchantSecret?`): `boolean`

Checks notification data signature

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | The signature |
| `body` | [`BillStatusBody`](../modules/index.QIWI.md#billstatusbody) | The notification body |
| `merchantSecret?` | `string` | The merchant key for validating signature |

#### Returns

`boolean`

boolean

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:82](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L82)

___

### createBill

▸ **createBill**(`billId`, `parameters`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Creating bill

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |
| `parameters` | [`BillCreateParameters`](../modules/index.QIWI.md#billcreateparameters) |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Promise<BillStatusData>

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:134](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L134)

___

### createPaymentForm

▸ **createPaymentForm**(`parameters`): `string`

Creating checkout link

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Pick`<[`PayUrlPatchParameters`](../modules/index.QIWI.md#payurlpatchparameters) & [`BillCustomFieldsExtension`](../modules/index._internal_.md#billcustomfieldsextension) & { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`CustomFields`](../modules/index._internal_.md#customfields) ; `lifetime?`: `string` ; `themeCode?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  }, ``"amount"`` \| ``"successUrl"`` \| ``"billId"``\> & { `publicKey?`: `string`  } & `Readonly`<`Record`<`string`, `any`\>\> |

#### Returns

`string`

string

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:118](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L118)

___

### generateId

▸ **generateId**(): `string`

Generate id

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Returns

`string`

Return uuid v4

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:107](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L107)

___

### getBillInfo

▸ **getBillInfo**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Getting bill info

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | The bill identifier |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Promise<BillStatusData>

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:148](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L148)

___

### getLifetimeByDay

▸ **getLifetimeByDay**(`days?`): `string`

Generate lifetime in format

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `days?` | `number` | `45` | Days of lifetime |

#### Returns

`string`

Lifetime in ISO

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:97](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L97)

___

### getRefundInfo

▸ **getRefundInfo**(`billId`, `refundId`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Getting refund info
Method is not available for individuals

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` \| `number` | The bill identifier |
| `refundId` | `string` \| `number` | The refund identifier |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Promise<BillRefundStatusData>

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:172](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L172)

___

### notificationMiddleware

▸ **notificationMiddleware**(`options?`, `handler?`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

## Это middleware кидает ошибки, позаботьтесь об их обработке

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`MiddlewareOptions`](../modules/index._internal_.md#middlewareoptions) | Параметры обработки запроса |
| `handler?` | [`BillRequestHandler`](../modules/index._internal_.md#billrequesthandler) |  |

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

[apis/p2p/p2p.ts:151](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L151)

___

### refund

▸ **refund**(`billId`, `refundId`, `amount?`, `currency?`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Refund paid bill
Method is not available for individuals

**`Memberof`**

_P2pCompatBillPaymentsUniversal

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `billId` | `string` \| `number` | `undefined` | The bill identifier |
| `refundId` | `string` \| `number` | `undefined` | The refund identifier |
| `amount?` | `number` | `0` | The amount |
| `currency?` | [`BillCurrencyAny`](../modules/index.QIWI.md#billcurrencyany) | `BillCurrency.RUB` | The currency |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Promise<BillRefundStatusData>

#### Defined in

[apis/p2p/p2p.compat-bill-payments.ts:190](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat-bill-payments.ts#L190)

___

### create

▸ `Static` **create**(`secretKey`, `publicKey?`): [`P2p`](index.QIWI.P2p.md)

**`Static`**

**`Memberof`**

P2p

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secretKey` | `string` | `undefined` |
| `publicKey?` | `string` | `""` |

#### Returns

[`P2p`](index.QIWI.P2p.md)

P2p

#### Inherited from

[P2p](index.QIWI.P2p.md).[create](index.QIWI.P2p.md#create)

#### Defined in

[apis/p2p/p2p.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L72)

___

### env

▸ `Static` **env**(`secretKey?`, `publicKey?`): [`P2p`](index.QIWI.P2p.md)

**`Static`**

**`Memberof`**

P2p

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secretKey?` | `string` | `environment.QIWI_SECRET_KEY` |
| `publicKey?` | `string` | `environment.QIWI_PUBLIC_KEY` |

#### Returns

[`P2p`](index.QIWI.P2p.md)

P2p

#### Inherited from

[P2p](index.QIWI.P2p.md).[env](index.QIWI.P2p.md#env)

#### Defined in

[apis/p2p/p2p.ts:89](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L89)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(`secretKey`): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Static`**

**`Memberof`**

P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

SimpleJsonHttp

#### Inherited from

[P2p](index.QIWI.P2p.md).[httpClientFactory](index.QIWI.P2p.md#httpclientfactory)

#### Defined in

[apis/p2p/p2p.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L43)
