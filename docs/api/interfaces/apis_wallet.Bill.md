[QIWI SDK](../README.md) / [Modules](../modules.md) / [apis/wallet](../modules/apis_wallet.md) / Bill

# Interface: Bill

[apis/wallet](../modules/apis_wallet.md).Bill

## Table of contents

### Properties

- [comment](apis_wallet.Bill.md#comment)
- [creation\_datetime](apis_wallet.Bill.md#creation_datetime)
- [expiration\_datetime](apis_wallet.Bill.md#expiration_datetime)
- [external\_id](apis_wallet.Bill.md#external_id)
- [id](apis_wallet.Bill.md#id)
- [pay\_url](apis_wallet.Bill.md#pay_url)
- [provider](apis_wallet.Bill.md#provider)
- [repetitive](apis_wallet.Bill.md#repetitive)
- [status](apis_wallet.Bill.md#status)
- [sum](apis_wallet.Bill.md#sum)
- [type](apis_wallet.Bill.md#type)

## Properties

### comment

• **comment**: `string`

Комментарий к счету

#### Defined in

[apis/wallet/wallet.types.ts:1399](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1399)

___

### creation\_datetime

• **creation\_datetime**: `number`

Дата/время создания счета, Unix-time

#### Defined in

[apis/wallet/wallet.types.ts:1364](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1364)

___

### expiration\_datetime

• **expiration\_datetime**: `number`

Дата/время окончания срока действия счета, Unix-time

#### Defined in

[apis/wallet/wallet.types.ts:1369](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1369)

___

### external\_id

• **external\_id**: `string`

Идентификатор счета у мерчанта

#### Defined in

[apis/wallet/wallet.types.ts:1359](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1359)

___

### id

• **id**: `number`

Идентификатор счета в QIWI Кошельке

#### Defined in

[apis/wallet/wallet.types.ts:1354](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1354)

___

### pay\_url

• **pay\_url**: `string`

Ссылка для оплаты счета на Платежной форме QIWI

#### Defined in

[apis/wallet/wallet.types.ts:1404](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1404)

___

### provider

• **provider**: [`BillProvider`](index.QIWI.BillProvider.md)

Информация о мерчанте

#### Defined in

[apis/wallet/wallet.types.ts:1394](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1394)

___

### repetitive

• **repetitive**: `boolean`

Служебное поле

#### Defined in

[apis/wallet/wallet.types.ts:1389](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1389)

___

### status

• **status**: `string`

Константа, `READY_FOR_PAY`

#### Defined in

[apis/wallet/wallet.types.ts:1379](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1379)

___

### sum

• **sum**: [`MoneyAmount`](../modules/index.QIWI.md#moneyamount)

Сведения о сумме счета

#### Defined in

[apis/wallet/wallet.types.ts:1374](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1374)

___

### type

• **type**: ``"MERCHANT"``

Константа, `MERCHANT`

#### Defined in

[apis/wallet/wallet.types.ts:1384](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1384)
