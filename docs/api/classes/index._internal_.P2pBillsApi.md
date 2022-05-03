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

- [\_options](index._internal_.P2pBillsApi.md#_options)
- [generateId](index._internal_.P2pBillsApi.md#generateid)

### Accessors

- [http](index._internal_.P2pBillsApi.md#http)
- [publicKey](index._internal_.P2pBillsApi.md#publickey)
- [secretKey](index._internal_.P2pBillsApi.md#secretkey)

### Methods

- [\_normalizeAmount](index._internal_.P2pBillsApi.md#_normalizeamount)
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

[dist/cjs/options-wrapper.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L22)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[P2pApi](index._internal_.P2pApi.md).[_options](index._internal_.P2pApi.md#_options)

#### Defined in

[dist/cjs/options-wrapper.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L16)

___

### generateId

• **generateId**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[dist/cjs/apis/p2p/bills.api.d.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L27)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Inherited from

P2pApi.http

#### Defined in

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/api.d.ts#L43)

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

[dist/cjs/apis/p2p/api.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/api.d.ts#L17)

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

[dist/cjs/apis/p2p/api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/api.d.ts#L25)

## Methods

### \_normalizeAmount

▸ `Protected` **_normalizeAmount**(`amount`): `string`

Нормализует сумму до строки с 2 числами после запятой

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | Сумма |

#### Returns

`string`

#### Defined in

[dist/cjs/apis/p2p/bills.api.d.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L26)

___

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

[dist/cjs/apis/p2p/bills.api.d.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L77)

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

[dist/cjs/apis/p2p/bills.api.d.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L48)

___

### createFormUrl

▸ **createFormUrl**(`parameters`): `string`

 Создаёт ссылку оплаты счёта без запроса к API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: `Record`<`string`, `string`\> ; `lifetime?`: `string` ; `successUrl?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | GET-параметры ссылки |

#### Returns

`string`

Ссылка на оплату счёта

#### Defined in

[dist/cjs/apis/p2p/bills.api.d.ts:85](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L85)

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

[dist/cjs/apis/p2p/bills.api.d.ts:103](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L103)

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

[dist/cjs/apis/p2p/bills.api.d.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L58)

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

[dist/cjs/apis/p2p/bills.api.d.ts:94](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L94)

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

[dist/cjs/apis/p2p/bills.api.d.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L67)

___

### patchPayUrl

▸ `Static` **patchPayUrl**(`payUrl`, `options?`): `string`

Добавляет параметры

#### Parameters

| Name | Type |
| :------ | :------ |
| `payUrl` | `string` |
| `options?` | `Partial`<{ `paySource`: [`BillPaySource`](../enums/index.QIWI.BillPaySource.md) ; `successUrl`: `string`  }\> |

#### Returns

`string`

Новый URL для оплаты

#### Defined in

[dist/cjs/apis/p2p/bills.api.d.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/bills.api.d.ts#L19)
