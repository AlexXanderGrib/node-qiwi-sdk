[qiwi-sdk](../README.md) / [Exports](../modules.md) / Bill

# Interface: Bill

## Table of contents

### Properties

- [comment](Bill.md#comment)
- [creation\_datetime](Bill.md#creation_datetime)
- [expiration\_datetime](Bill.md#expiration_datetime)
- [external\_id](Bill.md#external_id)
- [id](Bill.md#id)
- [pay\_url](Bill.md#pay_url)
- [provider](Bill.md#provider)
- [repetitive](Bill.md#repetitive)
- [status](Bill.md#status)
- [sum](Bill.md#sum)
- [type](Bill.md#type)

## Properties

### comment

• **comment**: `string`

Комментарий к счету

#### Defined in

[src/apis/wallet/wallet.types.ts:1411](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1411)

___

### creation\_datetime

• **creation\_datetime**: `number`

Дата/время создания счета, Unix-time

#### Defined in

[src/apis/wallet/wallet.types.ts:1376](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1376)

___

### expiration\_datetime

• **expiration\_datetime**: `number`

Дата/время окончания срока действия счета, Unix-time

#### Defined in

[src/apis/wallet/wallet.types.ts:1381](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1381)

___

### external\_id

• **external\_id**: `string`

Идентификатор счета у мерчанта

#### Defined in

[src/apis/wallet/wallet.types.ts:1371](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1371)

___

### id

• **id**: `number`

Идентификатор счета в QIWI Кошельке

#### Defined in

[src/apis/wallet/wallet.types.ts:1366](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1366)

___

### pay\_url

• **pay\_url**: `string`

Ссылка для оплаты счета на Платежной форме QIWI

#### Defined in

[src/apis/wallet/wallet.types.ts:1416](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1416)

___

### provider

• **provider**: [`BillProvider`](QIWI.BillProvider.md)

Информация о мерчанте

#### Defined in

[src/apis/wallet/wallet.types.ts:1406](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1406)

___

### repetitive

• **repetitive**: `boolean`

Служебное поле

#### Defined in

[src/apis/wallet/wallet.types.ts:1401](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1401)

___

### status

• **status**: `string`

Константа, `READY_FOR_PAY`

#### Defined in

[src/apis/wallet/wallet.types.ts:1391](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1391)

___

### sum

• **sum**: [`MoneyAmount`](../modules/QIWI.md#moneyamount)

Сведения о сумме счета

#### Defined in

[src/apis/wallet/wallet.types.ts:1386](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1386)

___

### type

• **type**: ``"MERCHANT"``

Константа, `MERCHANT`

#### Defined in

[src/apis/wallet/wallet.types.ts:1396](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/116975d/src/apis/wallet/wallet.types.ts#L1396)
