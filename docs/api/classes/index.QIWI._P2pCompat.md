[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / \_P2pCompat

# Class: \_P2pCompat

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md)._P2pCompat

**`Deprecated`**

Используйте класс `P2p` и новые сигнатуры
методов

**`Export`**

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
- [httpClientFactory](index.QIWI._P2pCompat.md#httpclientfactory)
- [patchPayUrl](index.QIWI._P2pCompat.md#patchpayurl)

## Constructors

### constructor

• **new _P2pCompat**(`secretKey`, `publicKey?`)

Creates an instance of _P2pCompat.

**`Memberof`**

_P2pCompat

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secretKey` | `string` | `undefined` |
| `publicKey` | `string` | `""` |

#### Overrides

[P2p](index.QIWI.P2p.md).[constructor](index.QIWI.P2p.md#constructor)

#### Defined in

[apis/p2p/p2p.compat.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L28)

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

[apis/p2p/p2p.compat.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L30)

___

### secretKey

• `Readonly` **secretKey**: `string`

#### Defined in

[apis/p2p/p2p.compat.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L29)

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

### billStatus

▸ **billStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

### Проверка статуса перевода по счету

Метод позволяет проверить статус перевода по счету. Рекомендуется
его использовать после получения уведомления о переводе.

**`Deprecated`**

Используйте метод [getBillStatus](index.QIWI._P2pCompat.md#getbillstatus)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `billId` | `string` | Уникальный идентификатор счета в вашей системе. |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

Объект счёта

#### Defined in

[apis/p2p/p2p.compat.ts:87](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L87)

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

[apis/p2p/p2p.compat.ts:163](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L163)

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
| `billId?` | `string` | Свой ID счёта. По умолчанию генерируется UUID |

#### Returns

`Promise`<[`BillStatusData`](../modules/index.QIWI.md#billstatusdata)\>

#### Defined in

[apis/p2p/p2p.compat.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L59)

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

[apis/p2p/p2p.compat.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L73)

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

[apis/p2p/p2p.compat.ts:100](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L100)

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

[apis/p2p/p2p.compat.ts:112](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L112)

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

### formatLifetime

▸ `Static` **formatLifetime**(`days?`): `string`

**`Deprecated`**

Используйте [formatLifetimeDays](index.QIWI._P2pCompat.md#formatlifetimedays) или [formatLifetimeMinutes](index.QIWI._P2pCompat.md#formatlifetimeminutes)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `days` | `number` | `1` | Кол-во дней жизни счёта (может быть не целым числом) |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

[apis/p2p/p2p.compat.ts:123](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L123)

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

[apis/p2p/p2p.compat.ts:143](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L143)

___

### formatLifetimeMinutes

▸ `Static` **formatLifetimeMinutes**(`minutes?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `minutes?` | `number` | `15` | Кол-во минут жизни счёта (может быть не целым числом) |

#### Returns

`string`

Дата понятная QIWI

#### Defined in

[apis/p2p/p2p.compat.ts:152](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L152)

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

[apis/p2p/p2p.compat.ts:134](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.compat.ts#L134)
