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

[dist/cjs/apis/wallet/wallet.types.d.ts:1134](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1134)

___

### creation\_datetime

• **creation\_datetime**: `number`

Дата/время создания счета, Unix-time

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1106](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1106)

___

### expiration\_datetime

• **expiration\_datetime**: `number`

Дата/время окончания срока действия счета, Unix-time

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1110](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1110)

___

### external\_id

• **external\_id**: `string`

Идентификатор счета у мерчанта

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1102](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1102)

___

### id

• **id**: `number`

Идентификатор счета в QIWI Кошельке

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1098](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1098)

___

### pay\_url

• **pay\_url**: `string`

Ссылка для оплаты счета на Платежной форме QIWI

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1138](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1138)

___

### provider

• **provider**: [`BillProvider`](index.QIWI.BillProvider.md)

Информация о мерчанте

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1130](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1130)

___

### repetitive

• **repetitive**: `boolean`

Служебное поле

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1126](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1126)

___

### status

• **status**: `string`

Константа, `READY_FOR_PAY`

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1118](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1118)

___

### sum

• **sum**: [`MoneyAmount`](../modules/index.QIWI.md#moneyamount)

Сведения о сумме счета

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1114](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1114)

___

### type

• **type**: ``"MERCHANT"``

Константа, `MERCHANT`

#### Defined in

[dist/cjs/apis/wallet/wallet.types.d.ts:1122](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/wallet/wallet.types.d.ts#L1122)