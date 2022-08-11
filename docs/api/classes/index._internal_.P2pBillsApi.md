[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / P2pBillsApi

# Class: P2pBillsApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).P2pBillsApi

# P2P-счета
[Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/#p2p-)

**`Export`**

## Hierarchy

- [`P2pApi`](index._internal_.P2pApi.md)

  ↳ **`P2pBillsApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.P2pBillsApi.md#constructor)

### Properties

- [\_options](index._internal_.P2pBillsApi.md#_options)

### Accessors

- [http](index._internal_.P2pBillsApi.md#http)
- [publicKey](index._internal_.P2pBillsApi.md#publickey)
- [secretKey](index._internal_.P2pBillsApi.md#secretkey)

### Methods

- [\_normalizeAmount](index._internal_.P2pBillsApi.md#_normalizeamount)
- [\_resolvePaySourcesFilter](index._internal_.P2pBillsApi.md#_resolvepaysourcesfilter)
- [checkNotificationSignature](index._internal_.P2pBillsApi.md#checknotificationsignature)
- [create](index._internal_.P2pBillsApi.md#create)
- [createFormUrl](index._internal_.P2pBillsApi.md#createformurl)
- [generateId](index._internal_.P2pBillsApi.md#generateid)
- [getRefundStatus](index._internal_.P2pBillsApi.md#getrefundstatus)
- [getStatus](index._internal_.P2pBillsApi.md#getstatus)
- [refund](index._internal_.P2pBillsApi.md#refund)
- [reject](index._internal_.P2pBillsApi.md#reject)
- [patchPayUrl](index._internal_.P2pBillsApi.md#patchpayurl)

## Constructors

### constructor

• **new P2pBillsApi**(`options`)

Creates an instance of OptionsWrapper.

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md) |

#### Inherited from

[P2pApi](index._internal_.P2pApi.md).[constructor](index._internal_.P2pApi.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[P2pApi](index._internal_.P2pApi.md).[_options](index._internal_.P2pApi.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/options-wrapper.ts#L16)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Memberof`**

ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Inherited from

P2pApi.http

#### Defined in

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/api.ts#L55)

___

### publicKey

• `Protected` `get` **publicKey**(): `string`

**`Memberof`**

P2pApi

#### Returns

`string`

#### Inherited from

P2pApi.publicKey

#### Defined in

[apis/p2p/api.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/api.ts#L17)

___

### secretKey

• `Protected` `get` **secretKey**(): `string`

**`Memberof`**

P2pApi

#### Returns

`string`

#### Inherited from

P2pApi.secretKey

#### Defined in

[apis/p2p/api.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/api.ts#L28)

## Methods

### \_normalizeAmount

▸ `Private` **_normalizeAmount**(`amount`): `string`

Нормализует сумму до строки с 2 числами после запятой

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | Сумма |

#### Returns

`string`

#### Defined in

[apis/p2p/bills.api.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L73)

___

### \_resolvePaySourcesFilter

▸ `Private` **_resolvePaySourcesFilter**(`paySourcesFilter`): `string`

**`Memberof`**

P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `paySourcesFilter` | [`BillPaySourceAny`](../modules/index.QIWI.md#billpaysourceany) \| [`BillPaySourceAny`](../modules/index.QIWI.md#billpaysourceany)[] |

#### Returns

`string`

string

#### Defined in

[apis/p2p/bills.api.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L58)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`, `merchantSecret?`): `boolean`

**`Memberof`**

P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `body` | [`BillStatusData`](../modules/index.QIWI.md#billstatusdata) \| [`BillStatusBody`](../modules/index.QIWI.md#billstatusbody) |
| `merchantSecret?` | `string` |

#### Returns

`boolean`

boolean

#### Defined in

[apis/p2p/bills.api.ts:177](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L177)

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

**`Memberof`**

P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BillCreateParameters`](../modules/index.QIWI.md#billcreateparameters) |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Promise<BillStatusData>

#### Defined in

[apis/p2p/bills.api.ts:101](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L101)

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

[apis/p2p/bills.api.ts:200](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L200)

___

### generateId

▸ **generateId**(): `string`

#### Returns

`string`

#### Defined in

[apis/p2p/bills.api.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L79)

___

### getRefundStatus

▸ **getRefundStatus**(`billId`, `refundId`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

**`Deprecated`**

API заархивировано

**`Memberof`**

P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |
| `refundId` | `string` |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Promise<BillRefundStatusData>

#### Defined in

[apis/p2p/bills.api.ts:258](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L258)

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

[apis/p2p/bills.api.ts:152](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L152)

___

### refund

▸ **refund**(`billId`, `options`): `Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

**`Deprecated`**

API заархивировано

**`Memberof`**

P2pBillsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |
| `options` | [`RefundCreationRequest`](../modules/index.QIWI.md#refundcreationrequest) |

#### Returns

`Promise`<[`BillRefundStatusData`](../modules/index.QIWI.md#billrefundstatusdata)\>

Promise<BillRefundStatusData>

#### Defined in

[apis/p2p/bills.api.ts:236](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L236)

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

[apis/p2p/bills.api.ts:164](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L164)

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

[apis/p2p/bills.api.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/b60f8c6/src/apis/p2p/bills.api.ts#L38)
