[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / P2pBillsApi

# Class: P2pBillsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).P2pBillsApi

# P2P-счета
[Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/#p2p-)

**`export`**

## Hierarchy

- [`P2pApi`](index._internal_.P2pApi.md)

  ↳ **`P2pBillsApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.P2pBillsApi.md#constructor)

### Properties

- [\_normalizeAmount](index._internal_.P2pBillsApi.md#_normalizeamount)
- [\_options](index._internal_.P2pBillsApi.md#_options)
- [\_resolvePaySourcesFilter](index._internal_.P2pBillsApi.md#_resolvepaysourcesfilter)
- [generateId](index._internal_.P2pBillsApi.md#generateid)

### Accessors

- [http](index._internal_.P2pBillsApi.md#http)
- [publicKey](index._internal_.P2pBillsApi.md#publickey)
- [secretKey](index._internal_.P2pBillsApi.md#secretkey)

### Methods

- [checkNotificationSignature](index._internal_.P2pBillsApi.md#checknotificationsignature)
- [create](index._internal_.P2pBillsApi.md#create)
- [createFormUrl](index._internal_.P2pBillsApi.md#createformurl)
- [getRefundStatus](index._internal_.P2pBillsApi.md#getrefundstatus)
- [getStatus](index._internal_.P2pBillsApi.md#getstatus)
- [refund](index._internal_.P2pBillsApi.md#refund)
- [reject](index._internal_.P2pBillsApi.md#reject)
- [patchPayUrl](index._internal_.P2pBillsApi.md#patchpayurl)

## Constructors

### constructor

• **new P2pBillsApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md) |

#### Inherited from

[P2pApi](index._internal_.P2pApi.md).[constructor](index._internal_.P2pApi.md#constructor)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:22

## Properties

### \_normalizeAmount

• `Private` **\_normalizeAmount**: `any`

Нормализует сумму до строки с 2 числами после запятой

**`param`** Сумма

**`returns`**

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:36

___

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[P2pApi](index._internal_.P2pApi.md).[_options](index._internal_.P2pApi.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

___

### \_resolvePaySourcesFilter

• `Private` **\_resolvePaySourcesFilter**: `any`

**`param`**

**`returns`** {string}

**`memberof`** P2pBillsApi

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:28

___

### generateId

• **generateId**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:37

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Inherited from

P2pApi.http

#### Defined in

dist/cjs/apis/api.d.ts:43

___

### publicKey

• `Protected` `get` **publicKey**(): `string`

**`readonly`**

**`memberof`** P2pApi

#### Returns

`string`

#### Inherited from

P2pApi.publicKey

#### Defined in

dist/cjs/apis/p2p/api.d.ts:17

___

### secretKey

• `Protected` `get` **secretKey**(): `string`

**`readonly`**

**`memberof`** P2pApi

#### Returns

`string`

#### Inherited from

P2pApi.secretKey

#### Defined in

dist/cjs/apis/p2p/api.d.ts:25

## Methods

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`, `merchantSecret?`): `boolean`

**`memberof`** P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `body` | [`BillStatusData`](../modules/index.QIWI.md#billstatusdata) \| [`BillStatusBody`](../modules/index.QIWI.md#billstatusbody) |
| `merchantSecret?` | `string` |

#### Returns

`boolean`

{boolean}

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:87

___

### create

▸ **create**(`data`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

### Выставление счета

**По оплаченным счетам возврат денежных средств не предусмотрен.**

Доступно выставление счетов в рублях и тенге.
Надежный способ для интеграции. Параметры передаются
server2server с использованием авторизации. Метод позволяет
выставить счет: при успешном выполнении запроса в ответе
вернется параметр `payUrl` - ссылка для редиректа
пользователя на форму.

[Настройки формы и счета](https://developer.qiwi.com/ru/p2p-payments/#option)

**Для тестирования и отладки сервиса рекомендуем выставлять и оплачивать счета суммой 1 рубль.**

**`memberof`** P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BillCreateParameters`](../modules/index.QIWI.md#billcreateparameters) |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:58

___

### createFormUrl

▸ **createFormUrl**(`parameters`): `string`

 Создаёт ссылку оплаты счёта без запроса к API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`PayUrlPatchParameters`](../modules/index.QIWI.md#payurlpatchparameters) & [`BillCustomFieldsExtension`](../modules/index._internal_.md#billcustomfieldsextension) & { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`CustomFields`](../modules/index._internal_.md#customfields) ; `lifetime?`: `string` ; `themeCode?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | GET-параметры ссылки |

#### Returns

`string`

Ссылка на оплату счёта

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:95

___

### getRefundStatus

▸ **getRefundStatus**(`billId`, `refundId`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

**`deprecated`** API заархивировано

**`memberof`** P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |
| `refundId` | `string` |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

{Promise<BillRefundStatusData>}

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:113

___

### getStatus

▸ **getStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

### Проверка статуса перевода по счету

Метод позволяет проверить статус перевода по счету. Рекомендуется
его использовать после получения уведомления о переводе.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Объект счёта

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:68

___

### refund

▸ **refund**(`billId`, `options`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

**`deprecated`** API заархивировано

**`memberof`** P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |
| `options` | [`RefundCreationRequest`](../modules/index.QIWI.md#refundcreationrequest) |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

{Promise<BillRefundStatusData>}

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:104

___

### reject

▸ **reject**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

### Отмена неоплаченного счета

Метод позволяет отменить счет, по которому не был выполнен перевод.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Объект счёта

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:77

___

### patchPayUrl

▸ `Static` **patchPayUrl**(`payUrl`, `options?`): `string`

Добавляет параметры

#### Parameters

| Name | Type |
| :------ | :------ |
| `payUrl` | `string` |
| `options?` | [`PayUrlPatchParameters`](../modules/index.QIWI.md#payurlpatchparameters) |

#### Returns

`string`

Новый URL для оплаты

#### Defined in

dist/cjs/apis/p2p/bills.api.d.ts:19
