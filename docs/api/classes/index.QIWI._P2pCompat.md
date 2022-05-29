[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / \_P2pCompat

# Class: \_P2pCompat

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md)._P2pCompat

**`deprecated`** Используйте класс `P2p` и новые сигнатуры
методов

**`export`**

## Hierarchy

- [`P2p`](index.QIWI.P2p.md)

  ↳ **`_P2pCompat`**

## Table of contents

### Constructors

- [constructor](index.QIWI._P2pCompat.md#constructor)

### Properties

- [\_options](index.QIWI._P2pCompat.md#_options)
- [bills](index.QIWI._P2pCompat.md#bills)
- [publicKey](index.QIWI._P2pCompat.md#publickey)
- [secretKey](index.QIWI._P2pCompat.md#secretkey)
- [BillCurrency](index.QIWI._P2pCompat.md#billcurrency)
- [BillPaySource](index.QIWI._P2pCompat.md#billpaysource)
- [BillStatus](index.QIWI._P2pCompat.md#billstatus)
- [BillsApi](index.QIWI._P2pCompat.md#billsapi)
- [Currency](index.QIWI._P2pCompat.md#currency)
- [PaySource](index.QIWI._P2pCompat.md#paysource)
- [Status](index.QIWI._P2pCompat.md#status)
- [httpClientFactory](index.QIWI._P2pCompat.md#httpclientfactory)

### Accessors

- [agent](index.QIWI._P2pCompat.md#agent)
- [options](index.QIWI._P2pCompat.md#options)

### Methods

- [billStatus](index.QIWI._P2pCompat.md#billstatus-1)
- [checkNotificationSignature](index.QIWI._P2pCompat.md#checknotificationsignature)
- [createBill](index.QIWI._P2pCompat.md#createbill)
- [createBillFormUrl](index.QIWI._P2pCompat.md#createbillformurl)
- [getBillStatus](index.QIWI._P2pCompat.md#getbillstatus)
- [notificationMiddleware](index.QIWI._P2pCompat.md#notificationmiddleware)
- [rejectBill](index.QIWI._P2pCompat.md#rejectbill)
- [create](index.QIWI._P2pCompat.md#create)
- [env](index.QIWI._P2pCompat.md#env)
- [formatLifetime](index.QIWI._P2pCompat.md#formatlifetime)
- [formatLifetimeDays](index.QIWI._P2pCompat.md#formatlifetimedays)
- [formatLifetimeMinutes](index.QIWI._P2pCompat.md#formatlifetimeminutes)
- [patchPayUrl](index.QIWI._P2pCompat.md#patchpayurl)

## Constructors

### constructor

• **new _P2pCompat**(`secretKey`, `publicKey?`)

Creates an instance of _P2pCompat.

**`memberof`** _P2pCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |
| `publicKey?` | `string` |

#### Overrides

[P2p](index.QIWI.P2p.md).[constructor](index.QIWI.P2p.md#constructor)

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:20

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

dist/cjs/apis/p2p/p2p.compat.d.ts:13

___

### secretKey

• `Readonly` **secretKey**: `string`

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:12

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

### billStatus

▸ **billStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

### Проверка статуса перевода по счету

Метод позволяет проверить статус перевода по счету. Рекомендуется
его использовать после получения уведомления о переводе.

**`deprecated`** Используйте метод [getBillStatus](index.QIWI._P2pCompat.md#getbillstatus)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Объект счёта

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:60

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`): `boolean`

Проверяет подпись уведомления о статусе счёта

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | Подпись |
| `body` | [`BillStatusData`](../modules/index.QIWI.md#billstatusdata) \| [`BillStatusBody`](../modules/index.QIWI.md#billstatusbody) | Объект уведомления |

#### Returns

`boolean`

Признак валидности

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:115

___

### createBill

▸ **createBill**(`data`, `billId?`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

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
| `data` | [`BillCreationRequest`](../modules/index.QIWI.md#billcreationrequest) | Сформированный запрос на создание счёта |
| `billId?` | `string` | - |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:41

___

### createBillFormUrl

▸ **createBillFormUrl**(`parameters`): `string`

 Создаёт ссылку оплаты счёта без запроса к API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`PayUrlPatchParameters`](../modules/index.QIWI.md#payurlpatchparameters) & [`BillCustomFieldsExtension`](../modules/index._internal_.md#billcustomfieldsextension) & { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`CustomFields`](../modules/index._internal_.md#customfields) ; `lifetime?`: `string` ; `themeCode?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | GET-параметры ссылки |

#### Returns

`string`

Ссылка на оплату счёта

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:49

___

### getBillStatus

▸ **getBillStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

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

dist/cjs/apis/p2p/p2p.compat.d.ts:70

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

### rejectBill

▸ **rejectBill**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

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

dist/cjs/apis/p2p/p2p.compat.d.ts:79

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

___

### formatLifetime

▸ `Static` **formatLifetime**(`days?`): `string`

**`deprecated`** Используйте [formatLifetimeDays](index.QIWI._P2pCompat.md#formatlifetimedays) или [formatLifetimeMinutes](index.QIWI._P2pCompat.md#formatlifetimeminutes)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `days?` | `number` | Кол-во дней жизни счёта (может быть не целым числом) |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:87

___

### formatLifetimeDays

▸ `Static` **formatLifetimeDays**(`days?`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `days?` | `number` | Кол-во дней жизни счёта (может быть не целым числом) |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:101

___

### formatLifetimeMinutes

▸ `Static` **formatLifetimeMinutes**(`minutes?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minutes?` | `number` |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

dist/cjs/apis/p2p/p2p.compat.d.ts:107

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

dist/cjs/apis/p2p/p2p.compat.d.ts:95
