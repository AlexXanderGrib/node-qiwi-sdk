[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / P2p

# Class: P2p

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).P2p

# P2P-счета
[Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)

**`export`**

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
- [httpClientFactory](index.QIWI.P2p.md#httpclientfactory)

### Accessors

- [agent](index.QIWI.P2p.md#agent)
- [options](index.QIWI.P2p.md#options)

### Methods

- [notificationMiddleware](index.QIWI.P2p.md#notificationmiddleware)
- [create](index.QIWI.P2p.md#create)
- [env](index.QIWI.P2p.md#env)

## Constructors

### constructor

• **new P2p**(`[options]?`)

Creates an instance of P2p.

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `[options]?` | `Partial`<[`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)\> |

#### Overrides

[ApiClass](index._internal_.ApiClass.md).[constructor](index._internal_.ApiClass.md#constructor)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:57

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[ApiClass](index._internal_.ApiClass.md).[_options](index._internal_.ApiClass.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

___

### bills

• `Readonly` **bills**: [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:58

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:17

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:18

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:19

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:16

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:20

___

### PaySource

▪ `Static` `Readonly` **PaySource**: typeof [`BillPaySource`](../enums/index.QIWI.BillPaySource.md)

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:21

___

### Status

▪ `Static` `Readonly` **Status**: typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md)

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

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:31

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

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

ApiClass.agent

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

ApiClass.options

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:40

## Methods

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

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:99

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

#### Defined in

dist/cjs/apis/p2p/p2p.d.ts:51
