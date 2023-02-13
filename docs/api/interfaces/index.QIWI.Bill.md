[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / Bill

# Interface: Bill

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).Bill

## Table of contents

### Properties

- [comment](index.QIWI.Bill.md#comment)
- [creation\_datetime](index.QIWI.Bill.md#creation_datetime)
- [expiration\_datetime](index.QIWI.Bill.md#expiration_datetime)
- [external\_id](index.QIWI.Bill.md#external_id)
- [id](index.QIWI.Bill.md#id)
- [pay\_url](index.QIWI.Bill.md#pay_url)
- [provider](index.QIWI.Bill.md#provider)
- [repetitive](index.QIWI.Bill.md#repetitive)
- [status](index.QIWI.Bill.md#status)
- [sum](index.QIWI.Bill.md#sum)
- [type](index.QIWI.Bill.md#type)

## Properties

### comment

• **comment**: `string`

Комментарий к счету

#### Defined in

[apis/wallet/wallet.types.ts:1401](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1401)

___

### creation\_datetime

• **creation\_datetime**: `number`

Дата/время создания счета, Unix-time

#### Defined in

[apis/wallet/wallet.types.ts:1366](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1366)

___

### expiration\_datetime

• **expiration\_datetime**: `number`

Дата/время окончания срока действия счета, Unix-time

#### Defined in

[apis/wallet/wallet.types.ts:1371](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1371)

___

### external\_id

• **external\_id**: `string`

Идентификатор счета у мерчанта

#### Defined in

[apis/wallet/wallet.types.ts:1361](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1361)

___

### id

• **id**: `number`

Идентификатор счета в QIWI Кошельке

#### Defined in

[apis/wallet/wallet.types.ts:1356](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1356)

___

### pay\_url

• **pay\_url**: `string`

Ссылка для оплаты счета на Платежной форме QIWI

#### Defined in

[apis/wallet/wallet.types.ts:1406](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1406)

___

### provider

• **provider**: [`BillProvider`](index.QIWI.BillProvider.md)

Информация о мерчанте

#### Defined in

[apis/wallet/wallet.types.ts:1396](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1396)

___

### repetitive

• **repetitive**: `boolean`

Служебное поле

#### Defined in

[apis/wallet/wallet.types.ts:1391](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1391)

___

### status

• **status**: `string`

Константа, `READY_FOR_PAY`

#### Defined in

[apis/wallet/wallet.types.ts:1381](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1381)

___

### sum

• **sum**: [`MoneyAmount`](../modules/index.QIWI.md#moneyamount)

Сведения о сумме счета

#### Defined in

[apis/wallet/wallet.types.ts:1376](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1376)

___

### type

• **type**: ``"MERCHANT"``

Константа, `MERCHANT`

#### Defined in

[apis/wallet/wallet.types.ts:1386](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.types.ts#L1386)
