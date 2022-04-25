[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / Bill

# Interface: Bill

[QIWI](../modules/QIWI.md).Bill

## Table of contents

### Properties

- [comment](QIWI.Bill.md#comment)
- [creation\_datetime](QIWI.Bill.md#creation_datetime)
- [expiration\_datetime](QIWI.Bill.md#expiration_datetime)
- [external\_id](QIWI.Bill.md#external_id)
- [id](QIWI.Bill.md#id)
- [pay\_url](QIWI.Bill.md#pay_url)
- [provider](QIWI.Bill.md#provider)
- [repetitive](QIWI.Bill.md#repetitive)
- [status](QIWI.Bill.md#status)
- [sum](QIWI.Bill.md#sum)
- [type](QIWI.Bill.md#type)

## Properties

### comment

• **comment**: `string`

Комментарий к счету

#### Defined in

[src/apis/wallet/wallet.types.ts:1396](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1396)

___

### creation\_datetime

• **creation\_datetime**: `number`

Дата/время создания счета, Unix-time

#### Defined in

[src/apis/wallet/wallet.types.ts:1361](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1361)

___

### expiration\_datetime

• **expiration\_datetime**: `number`

Дата/время окончания срока действия счета, Unix-time

#### Defined in

[src/apis/wallet/wallet.types.ts:1366](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1366)

___

### external\_id

• **external\_id**: `string`

Идентификатор счета у мерчанта

#### Defined in

[src/apis/wallet/wallet.types.ts:1356](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1356)

___

### id

• **id**: `number`

Идентификатор счета в QIWI Кошельке

#### Defined in

[src/apis/wallet/wallet.types.ts:1351](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1351)

___

### pay\_url

• **pay\_url**: `string`

Ссылка для оплаты счета на Платежной форме QIWI

#### Defined in

[src/apis/wallet/wallet.types.ts:1401](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1401)

___

### provider

• **provider**: [`BillProvider`](QIWI.BillProvider.md)

Информация о мерчанте

#### Defined in

[src/apis/wallet/wallet.types.ts:1391](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1391)

___

### repetitive

• **repetitive**: `boolean`

Служебное поле

#### Defined in

[src/apis/wallet/wallet.types.ts:1386](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1386)

___

### status

• **status**: `string`

Константа, `READY_FOR_PAY`

#### Defined in

[src/apis/wallet/wallet.types.ts:1376](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1376)

___

### sum

• **sum**: [`MoneyAmount`](../modules/QIWI.md#moneyamount)

Сведения о сумме счета

#### Defined in

[src/apis/wallet/wallet.types.ts:1371](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1371)

___

### type

• **type**: ``"MERCHANT"``

Константа, `MERCHANT`

#### Defined in

[src/apis/wallet/wallet.types.ts:1381](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.types.ts#L1381)
