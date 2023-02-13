[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2p

# Class: P2p

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2p

# P2P-счета
[Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)

**`Export`**

## Hierarchy

- [`ApiClass`](index._internal_.ApiClass.md)<[`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)\>

  ↳ **`P2p`**

  ↳↳ [`_P2pCompat`](index.QIWI._P2pCompat.md)

  ↳↳ [`_P2pCompatBillPayments`](index.QIWI._P2pCompatBillPayments.md)

## Table of contents

### Constructors

- [constructor](index.QIWI.P2p.md#constructor)

### Properties

- [\_options](index.QIWI.P2p.md#_options)
- [bills](index.QIWI.P2p.md#bills)
- [BillCurrency](index.QIWI.P2p.md#billcurrency)
- [BillPaySource](index.QIWI.P2p.md#billpaysource)
- [BillStatus](index.QIWI.P2p.md#billstatus)
- [BillsApi](index.QIWI.P2p.md#billsapi)
- [Currency](index.QIWI.P2p.md#currency)
- [PaySource](index.QIWI.P2p.md#paysource)
- [Status](index.QIWI.P2p.md#status)

### Accessors

- [agent](index.QIWI.P2p.md#agent)
- [options](index.QIWI.P2p.md#options)

### Methods

- [notificationMiddleware](index.QIWI.P2p.md#notificationmiddleware)
- [create](index.QIWI.P2p.md#create)
- [env](index.QIWI.P2p.md#env)
- [httpClientFactory](index.QIWI.P2p.md#httpclientfactory)

## Constructors

### constructor

• **new P2p**(`options?`)

Creates an instance of P2p.

**`Memberof`**

P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)\> |

#### Overrides

[ApiClass](index._internal_.ApiClass.md).[constructor](index._internal_.ApiClass.md#constructor)

#### Defined in

[apis/p2p/p2p.ts:101](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L101)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[ApiClass](index._internal_.ApiClass.md).[_options](index._internal_.ApiClass.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

___

### bills

• `Readonly` **bills**: [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Defined in

[apis/p2p/p2p.ts:109](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L109)

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md) = `BillCurrency`

#### Defined in

[apis/p2p/p2p.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L27)

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md) = `BillPaySource`

#### Defined in

[apis/p2p/p2p.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L28)

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md) = `BillStatus`

#### Defined in

[apis/p2p/p2p.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L29)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](index._internal_.P2pBillsApi.md) = `P2pBillsApi`

#### Defined in

[apis/p2p/p2p.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L25)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md) = `BillCurrency`

#### Defined in

[apis/p2p/p2p.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L31)

___

### PaySource

▪ `Static` `Readonly` **PaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md) = `BillPaySource`

#### Defined in

[apis/p2p/p2p.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L32)

___

### Status

▪ `Static` `Readonly` **Status**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md) = `BillStatus`

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

ApiClass.agent

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

ApiClass.agent

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

ApiClass.options

#### Defined in

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L44)

## Methods

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

#### Defined in

[apis/p2p/p2p.ts:151](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L151)

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

#### Defined in

[apis/p2p/p2p.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.ts#L43)
