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

[dist/cjs/apis/p2p/p2p.compat.d.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[P2p](index.QIWI.P2p.md).[_options](index.QIWI.P2p.md#_options)

#### Defined in

dist/cjs/options-wrapper.d.ts:16

___

### bills

• `Readonly` **bills**: [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[bills](index.QIWI.P2p.md#bills)

#### Defined in

[dist/cjs/apis/p2p/p2p.d.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L44)

___

### publicKey

• `Readonly` **publicKey**: `string`

#### Defined in

[dist/cjs/apis/p2p/p2p.compat.d.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L13)

___

### secretKey

• `Readonly` **secretKey**: `string`

#### Defined in

[dist/cjs/apis/p2p/p2p.compat.d.ts:12](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L12)

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillCurrency](index.QIWI.P2p.md#billcurrency)

#### Defined in

[dist/cjs/apis/p2p/p2p.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L16)

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillPaySource](index.QIWI.P2p.md#billpaysource)

#### Defined in

[dist/cjs/apis/p2p/p2p.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L17)

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillStatus](index.QIWI.P2p.md#billstatus)

#### Defined in

[dist/cjs/apis/p2p/p2p.d.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L18)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Inherited from

[P2p](index.QIWI.P2p.md).[BillsApi](index.QIWI.P2p.md#billsapi)

#### Defined in

[dist/cjs/apis/p2p/p2p.d.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L15)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md)

#### Defined in

[dist/cjs/apis/p2p/p2p.compat.d.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L14)

___

### PaySource

▪ `Static` `Readonly` **PaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md)

#### Defined in

[dist/cjs/apis/p2p/p2p.compat.d.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L15)

___

### Status

▪ `Static` `Readonly` **Status**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md)

#### Defined in

[dist/cjs/apis/p2p/p2p.compat.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L16)

___

### httpClientFactory

▪ `Static` **httpClientFactory**: (`secretKey`: `string`) => [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Type declaration

▸ (`secretKey`): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`static`**

**`memberof`** P2p

##### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |

##### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Inherited from

[P2p](index.QIWI.P2p.md).[httpClientFactory](index.QIWI.P2p.md#httpclientfactory)

#### Defined in

[dist/cjs/apis/p2p/p2p.d.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L27)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

P2p.agent

#### Defined in

[dist/cjs/apis/api.d.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L19)

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

[dist/cjs/apis/api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L25)

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

dist/cjs/options-wrapper.d.ts:40

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L63)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`): `boolean`

Проверяет подпись уведомления о статусе счёта

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | Подпись |
| `body` | [`BillStatusData`](../modules/index.QIWI.md#billstatusdata) | Объект уведомления |

#### Returns

`boolean`

Признак валидности

#### Defined in

[dist/cjs/apis/p2p/p2p.compat.d.ts:118](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L118)

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L44)

___

### createBillFormUrl

▸ **createBillFormUrl**(`parameters`): `string`

 Создаёт ссылку оплаты счёта без запроса к API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: `Record`<`string`, `string`\> ; `lifetime?`: `string` ; `successUrl?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } | GET-параметры ссылки |

#### Returns

`string`

Ссылка на оплату счёта

#### Defined in

[dist/cjs/apis/p2p/p2p.compat.d.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L52)

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L73)

___

### notificationMiddleware

▸ **notificationMiddleware**(`options?`, `actualHandler?`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

## Это middleware кидает ошибки, позаботьтесь об их обработке

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.memo?` | `boolean` |
| `actualHandler?` | `RequestHandler`<`Record`<`string`, `string`\>, `any`, [`BillStatusData`](../modules/index.QIWI.md#billstatusdata), `ParsedQs`, `Record`<`string`, `any`\>\> |

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

[P2p](index.QIWI.P2p.md).[notificationMiddleware](index.QIWI.P2p.md#notificationmiddleware)

#### Defined in

[dist/cjs/apis/p2p/p2p.d.ts:85](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L85)

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:82](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L82)

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

[dist/cjs/apis/p2p/p2p.d.ts:37](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.d.ts#L37)

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:90](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L90)

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:104](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L104)

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:110](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L110)

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

[dist/cjs/apis/p2p/p2p.compat.d.ts:98](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/p2p/p2p.compat.d.ts#L98)