[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / P2p

# Class: P2p

[QIWI](../modules/QIWI.md).P2p

# P2P-счета
[Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)

**`export`**

## Hierarchy

- **`P2p`**

  ↳ [`P2pCompat`](QIWI.P2pCompat.md)

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

- [options](QIWI.P2p.md#options)

### Methods

- [notificationMiddleware](QIWI.P2p.md#notificationmiddleware)
- [create](QIWI.P2p.md#create)
- [httpClientFactory](QIWI.P2p.md#httpclientfactory)

## Constructors

### constructor

• **new P2p**(`_options`)

Creates an instance of P2p.

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md) |

#### Defined in

src/apis/p2p/p2p.ts:112

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)

___

### bills

• `Readonly` **bills**: `P2pBillsApi`

#### Defined in

src/apis/p2p/p2p.ts:113

___

### BillCurrency

▪ `Static` `Readonly` **BillCurrency**: typeof [`BillCurrency`](../enums/QIWI.BillCurrency.md) = `BillCurrency`

#### Defined in

src/apis/p2p/p2p.ts:48

___

### BillPaySource

▪ `Static` `Readonly` **BillPaySource**: typeof [`BillPaySource`](../enums/QIWI.BillPaySource.md) = `BillPaySource`

#### Defined in

src/apis/p2p/p2p.ts:49

___

### BillStatus

▪ `Static` `Readonly` **BillStatus**: typeof [`BillStatus`](../enums/QIWI.BillStatus.md) = `BillStatus`

#### Defined in

src/apis/p2p/p2p.ts:50

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof `P2pBillsApi` = `P2pBillsApi`

#### Defined in

src/apis/p2p/p2p.ts:46

## Accessors

### options

• `get` **options**(): [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)

**`readonly`**

**`memberof`** P2p

#### Returns

[`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)

#### Defined in

src/apis/p2p/p2p.ts:103

## Methods

### notificationMiddleware

▸ **notificationMiddleware**(`options?`, `actualHandler?`): `RequestHandler`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

`[Экспериментально]` Упрощает интеграцию с `express`

## Это middleware кидает ошибки, позаботьтесь об их обработке

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.memo?` | `boolean` |
| `actualHandler` | `RequestHandler`<`Record`<`string`, `string`\>, `any`, [`BillStatusData`](../modules/QIWI.md#billstatusdata), `ParsedQs`, `Record`<`string`, `any`\>\> |

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

#### Defined in

src/apis/p2p/p2p.ts:155

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

src/apis/p2p/p2p.ts:89

___

### httpClientFactory

▸ `Static` **httpClientFactory**(`secretKey`): `SimpleJsonHttp`

**`static`**

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `string` |

#### Returns

`SimpleJsonHttp`

{SimpleJsonHttp}

#### Defined in

src/apis/p2p/p2p.ts:60
