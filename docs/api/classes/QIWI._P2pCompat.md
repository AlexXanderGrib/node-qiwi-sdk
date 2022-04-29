[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / \_P2pCompat

# Class: \_P2pCompat

[QIWI](../modules/QIWI.md)._P2pCompat

**`deprecated`** Используйте класс `P2p` и новые сигнатуры
методов

**`export`**

## Hierarchy

- [`P2p`](QIWI.P2p.md)

  ↳ **`_P2pCompat`**

## Table of contents

### Constructors

- [constructor](QIWI._P2pCompat.md#constructor)

### Properties

- [\_options](QIWI._P2pCompat.md#_options)
- [bills](QIWI._P2pCompat.md#bills)
- [publicKey](QIWI._P2pCompat.md#publickey)
- [secretKey](QIWI._P2pCompat.md#secretkey)
- [BillCurrency](QIWI._P2pCompat.md#billcurrency)
- [BillPaySource](QIWI._P2pCompat.md#billpaysource)
- [BillStatus](QIWI._P2pCompat.md#billstatus)
- [BillsApi](QIWI._P2pCompat.md#billsapi)
- [Currency](QIWI._P2pCompat.md#currency)
- [PaySource](QIWI._P2pCompat.md#paysource)
- [Status](QIWI._P2pCompat.md#status)

### Accessors

- [agent](QIWI._P2pCompat.md#agent)
- [options](QIWI._P2pCompat.md#options)

### Methods

- [billStatus](QIWI._P2pCompat.md#billstatus-1)
- [checkNotificationSignature](QIWI._P2pCompat.md#checknotificationsignature)
- [createBill](QIWI._P2pCompat.md#createbill)
- [createBillFormUrl](QIWI._P2pCompat.md#createbillformurl)
- [getBillStatus](QIWI._P2pCompat.md#getbillstatus)
- [notificationMiddleware](QIWI._P2pCompat.md#notificationmiddleware)
- [rejectBill](QIWI._P2pCompat.md#rejectbill)
- [create](QIWI._P2pCompat.md#create)
- [formatLifetime](QIWI._P2pCompat.md#formatlifetime)
- [formatLifetimeDays](QIWI._P2pCompat.md#formatlifetimedays)
- [formatLifetimeMinutes](QIWI._P2pCompat.md#formatlifetimeminutes)
- [httpClientFactory](QIWI._P2pCompat.md#httpclientfactory)
- [patchPayUrl](QIWI._P2pCompat.md#patchpayurl)

## Constructors

### constructor

• **new _P2pCompat**(`secretKey`, `publicKey?`)

Creates an instance of _P2pCompat.

**`memberof`** _P2pCompat

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secretKey` | `string` | `undefined` |
| `publicKey` | `string` | `""` |

#### Overrides

[P2p](QIWI.P2p.md).[constructor](QIWI.P2p.md#constructor)

#### Defined in

[src/apis/p2p/p2p.compat.ts:33](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L33)

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

[src/apis/p2p/p2p.ts:88](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L88)

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

[src/apis/p2p/p2p.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L26)

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/QIWI.BillPaySource.md) = `BillPaySource`

#### Inherited from

[P2p](QIWI.P2p.md).[BillPaySource](QIWI.P2p.md#billpaysource)

#### Defined in

[src/apis/p2p/p2p.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L27)

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/QIWI.BillStatus.md) = `BillStatus`

#### Inherited from

[P2p](QIWI.P2p.md).[BillStatus](QIWI.P2p.md#billstatus)

#### Defined in

[src/apis/p2p/p2p.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L28)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](internal_.P2pBillsApi.md) = `P2pBillsApi`

#### Inherited from

[P2p](QIWI.P2p.md).[BillsApi](QIWI.P2p.md#billsapi)

#### Defined in

[src/apis/p2p/p2p.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L24)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`BillCurrency`](../enums/QIWI.BillCurrency.md) = `BillCurrency`

#### Defined in

[src/apis/p2p/p2p.compat.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L23)

___

### PaySource

▪ `Static` `Readonly` **PaySource**: typeof [`BillPaySource`](../enums/QIWI.BillPaySource.md) = `BillPaySource`

#### Defined in

[src/apis/p2p/p2p.compat.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L24)

___

### Status

▪ `Static` `Readonly` **Status**: typeof [`BillStatus`](../enums/QIWI.BillStatus.md) = `BillStatus`

#### Defined in

[src/apis/p2p/p2p.compat.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L25)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

P2p.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/api.ts#L21)

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

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/api.ts#L30)

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

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/api.ts#L41)

## Methods

### billStatus

▸ **billStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

### Проверка статуса перевода по счету

Метод позволяет проверить статус перевода по счету. Рекомендуется
его использовать после получения уведомления о переводе.

**`deprecated`** Используйте метод [getBillStatus](QIWI._P2pCompat.md#getbillstatus)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

Объект счёта

#### Defined in

[src/apis/p2p/p2p.compat.ts:92](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L92)

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

[src/apis/p2p/p2p.compat.ts:168](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L168)

___

### createBill

▸ **createBill**(`data`, `billId?`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BillCreationRequest`](../modules/QIWI.md#billcreationrequest) | Сформированный запрос на создание счёта |
| `billId?` | `string` | - |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Defined in

[src/apis/p2p/p2p.compat.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L64)

___

### createBillFormUrl

▸ **createBillFormUrl**(`parameters`): `string`

 Создаёт ссылку оплаты счёта без запроса к API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`Record`](../modules/internal_.md#record)<`string`, `string`\> ; `lifetime?`: `string` ; `successUrl?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | GET-параметры ссылки |

#### Returns

`string`

Ссылка на оплату счёта

#### Defined in

[src/apis/p2p/p2p.compat.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L78)

___

### getBillStatus

▸ **getBillStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

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

[src/apis/p2p/p2p.compat.ts:105](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L105)

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

[src/apis/p2p/p2p.ts:130](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L130)

___

### rejectBill

▸ **rejectBill**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

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

[src/apis/p2p/p2p.compat.ts:117](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L117)

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

[src/apis/p2p/p2p.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L67)

___

### formatLifetime

▸ `Static` **formatLifetime**(`days?`): `string`

**`deprecated`** Используйте [formatLifetimeDays](QIWI._P2pCompat.md#formatlifetimedays) или [formatLifetimeMinutes](QIWI._P2pCompat.md#formatlifetimeminutes)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `days` | `number` | `1` | Кол-во дней жизни счёта (может быть не целым числом) |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

[src/apis/p2p/p2p.compat.ts:128](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L128)

___

### formatLifetimeDays

▸ `Static` **formatLifetimeDays**(`days?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `days` | `number` | `1` | Кол-во дней жизни счёта (может быть не целым числом) |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

[src/apis/p2p/p2p.compat.ts:148](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L148)

___

### formatLifetimeMinutes

▸ `Static` **formatLifetimeMinutes**(`minutes?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `minutes` | `number` | `15` |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

[src/apis/p2p/p2p.compat.ts:157](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L157)

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

[src/apis/p2p/p2p.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.ts#L38)

___

### patchPayUrl

▸ `Static` **patchPayUrl**(`payUrl`, `options?`): `string`

Добавляет параметры

#### Parameters

| Name | Type |
| :------ | :------ |
| `payUrl` | `string` |
| `options?` | [`Partial`](../modules/internal_.md#partial)<{ `paySource`: [`BillPaySource`](../enums/QIWI.BillPaySource.md) ; `successUrl`: `string`  }\> |

#### Returns

`string`

Новый URL для оплаты

#### Defined in

[src/apis/p2p/p2p.compat.ts:139](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/p2p/p2p.compat.ts#L139)
