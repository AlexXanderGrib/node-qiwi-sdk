[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / P2pBillsApi

# Class: P2pBillsApi

[<internal>](../modules/internal_.md).P2pBillsApi

# P2P-счета
[Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/#p2p-)

**`export`**

## Hierarchy

- [`P2pApi`](internal_.P2pApi.md)

  ↳ **`P2pBillsApi`**

## Table of contents

### Constructors

- [constructor](internal_.P2pBillsApi.md#constructor)

### Properties

- [\_options](internal_.P2pBillsApi.md#_options)

### Accessors

- [http](internal_.P2pBillsApi.md#http)
- [publicKey](internal_.P2pBillsApi.md#publickey)
- [secretKey](internal_.P2pBillsApi.md#secretkey)

### Methods

- [\_normalizeAmount](internal_.P2pBillsApi.md#_normalizeamount)
- [checkNotificationSignature](internal_.P2pBillsApi.md#checknotificationsignature)
- [create](internal_.P2pBillsApi.md#create)
- [createFormUrl](internal_.P2pBillsApi.md#createformurl)
- [getStatus](internal_.P2pBillsApi.md#getstatus)
- [reject](internal_.P2pBillsApi.md#reject)
- [patchPayUrl](internal_.P2pBillsApi.md#patchpayurl)

## Constructors

### constructor

• **new P2pBillsApi**(`_options`)

Creates an instance of P2pApi.

**`memberof`** P2pApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md) |

#### Inherited from

[P2pApi](internal_.P2pApi.md).[constructor](internal_.P2pApi.md#constructor)

#### Defined in

[src/apis/p2p/api.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/api.ts#L47)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)

#### Inherited from

[P2pApi](internal_.P2pApi.md).[_options](internal_.P2pApi.md#_options)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** P2pApi

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

#### Inherited from

P2pApi.http

#### Defined in

[src/apis/p2p/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/api.ts#L16)

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

[src/apis/p2p/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/api.ts#L27)

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

[src/apis/p2p/api.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/api.ts#L38)

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

[src/apis/p2p/bills.api.ts:45](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/bills.api.ts#L45)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`): `boolean`

Проверяет подпись уведомления о статусе счёта

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | Подпись |
| `body` | [`BillStatusData`](../modules/QIWI.md#billstatusdata) | Объект уведомления |

#### Returns

`boolean`

Признак валидности

#### Defined in

[src/apis/p2p/bills.api.ts:131](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/bills.api.ts#L131)

___

### create

▸ **create**(`data`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

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
| `data` | [`BillCreateParameters`](../modules/QIWI.md#billcreateparameters) |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

{Promise<BillStatusData>}

#### Defined in

[src/apis/p2p/bills.api.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/bills.api.ts#L71)

___

### createFormUrl

▸ **createFormUrl**(`parameters`): `string`

 Создаёт ссылку оплаты счёта без запроса к API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`Record`](../modules/internal_.md#record)<`string`, `string`\> ; `lifetime?`: `string` ; `successUrl?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | GET-параметры ссылки |

#### Returns

`string`

Ссылка на оплату счёта

#### Defined in

[src/apis/p2p/bills.api.ts:151](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/bills.api.ts#L151)

___

### getStatus

▸ **getStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

### Проверка статуса перевода по счету

Метод позволяет проверить статус перевода по счету. Рекомендуется
его использовать после получения уведомления о переводе.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

Объект счёта

#### Defined in

[src/apis/p2p/bills.api.ts:108](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/bills.api.ts#L108)

___

### reject

▸ **reject**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

### Отмена неоплаченного счета

Метод позволяет отменить счет, по которому не был выполнен перевод.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

Объект счёта

#### Defined in

[src/apis/p2p/bills.api.ts:120](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/bills.api.ts#L120)

___

### patchPayUrl

▸ `Static` **patchPayUrl**(`payUrl`, `options?`): `string`

Добавляет параметры

#### Parameters

| Name | Type |
| :------ | :------ |
| `payUrl` | `string` |
| `options` | [`Partial`](../modules/internal_.md#partial)<{ `paySource`: [`BillPaySource`](../enums/QIWI.BillPaySource.md) ; `successUrl`: `string`  }\> |

#### Returns

`string`

Новый URL для оплаты

#### Defined in

[src/apis/p2p/bills.api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0b4e701/src/apis/p2p/bills.api.ts#L27)
