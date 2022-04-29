[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / P2p

# Class: P2p

[QIWI](../modules/QIWI.md).P2p

# P2P-счета
[Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)

**`export`**

## Hierarchy

- [`ApiClass`](internal_.ApiClass.md)<[`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)\>

  ↳ **`P2p`**

  ↳↳ [`_P2pCompat`](QIWI._P2pCompat.md)

  ↳↳ [`_P2pCompatBillPayments`](QIWI._P2pCompatBillPayments.md)

## Table of contents

### Constructors

- [constructor](QIWI.P2p.md#constructor)

### Properties

- [\_options](QIWI.P2p.md#_options)
- [bills](QIWI.P2p.md#bills)
- [BillCurrency](QIWI.P2p.md#billcurrency)
- [BillPaySource](QIWI.P2p.md#billpaysource)
- [BillStatus](QIWI.P2p.md#billstatus)
- [BillsApi](QIWI.P2p.md#billsapi)

### Accessors

- [agent](QIWI.P2p.md#agent)
- [options](QIWI.P2p.md#options)

### Methods

- [notificationMiddleware](QIWI.P2p.md#notificationmiddleware)
- [create](QIWI.P2p.md#create)
- [httpClientFactory](QIWI.P2p.md#httpclientfactory)

## Constructors

### constructor

• **new P2p**(`[options]?`)

Creates an instance of P2p.

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `[options]` | [`Partial`](../modules/internal_.md#partial)<[`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)\> |

#### Overrides

[ApiClass](internal_.ApiClass.md).[constructor](internal_.ApiClass.md#constructor)

#### Defined in

[src/apis/p2p/p2p.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L80)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)

#### Inherited from

[ApiClass](internal_.ApiClass.md).[_options](internal_.ApiClass.md#_options)

___

### bills

• `Readonly` **bills**: [`P2pBillsApi`](internal_.P2pBillsApi.md)

#### Defined in

[src/apis/p2p/p2p.ts:88](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L88)

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/QIWI.BillCurrency.md) = `BillCurrency`

#### Defined in

[src/apis/p2p/p2p.ts:26](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L26)

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/QIWI.BillPaySource.md) = `BillPaySource`

#### Defined in

[src/apis/p2p/p2p.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L27)

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/QIWI.BillStatus.md) = `BillStatus`

#### Defined in

[src/apis/p2p/p2p.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L28)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`P2pBillsApi`](internal_.P2pBillsApi.md) = `P2pBillsApi`

#### Defined in

[src/apis/p2p/p2p.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L24)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/api.ts#L21)

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

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/api.ts#L30)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** ApiClass

#### Returns

`T`

#### Inherited from

ApiClass.options

#### Defined in

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/api.ts#L41)

## Methods

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

#### Defined in

[src/apis/p2p/p2p.ts:130](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L130)

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

#### Defined in

[src/apis/p2p/p2p.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L67)

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

#### Defined in

[src/apis/p2p/p2p.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/285ce1c/src/apis/p2p/p2p.ts#L38)
