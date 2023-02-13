[QIWI SDK](../README.md) / [Modules](../modules.md) / apis/p2p

# Module: apis/p2p

## Table of contents

### References

- [P2P](apis_p2p.md#p2p)
- [P2PNotificationError](apis_p2p.md#p2pnotificationerror)
- [P2PPaymentError](apis_p2p.md#p2ppaymenterror)
- [P2p](apis_p2p.md#p2p-1)
- [P2pApiError](apis_p2p.md#p2papierror)
- [P2pApiErrorResponse](apis_p2p.md#p2papierrorresponse)
- [P2pApiOptions](apis_p2p.md#p2papioptions)
- [P2pAuthorizationError](apis_p2p.md#p2pauthorizationerror)
- [P2pBillNotificationError](apis_p2p.md#p2pbillnotificationerror)
- [P2pCompat](apis_p2p.md#p2pcompat)
- [QiwiBillPaymentsAPI](apis_p2p.md#qiwibillpaymentsapi)
- [\_P2pCompat](apis_p2p.md#_p2pcompat)
- [\_P2pCompatBillPayments](apis_p2p.md#_p2pcompatbillpayments)

### Enumerations

- [BillCurrency](../enums/apis_p2p.BillCurrency.md)
- [BillPaySource](../enums/apis_p2p.BillPaySource.md)
- [BillRefundStatus](../enums/apis_p2p.BillRefundStatus.md)
- [BillStatus](../enums/apis_p2p.BillStatus.md)

### Type Aliases

- [BillCreateParameters](apis_p2p.md#billcreateparameters)
- [BillCreationRequest](apis_p2p.md#billcreationrequest)
- [BillCurrencyAny](apis_p2p.md#billcurrencyany)
- [BillCurrencyPlain](apis_p2p.md#billcurrencyplain)
- [BillError](apis_p2p.md#billerror)
- [BillFormParameters](apis_p2p.md#billformparameters)
- [BillMoneyAmount](apis_p2p.md#billmoneyamount)
- [BillPaySourceAny](apis_p2p.md#billpaysourceany)
- [BillPaySourcePlain](apis_p2p.md#billpaysourceplain)
- [BillRefundStatusAny](apis_p2p.md#billrefundstatusany)
- [BillRefundStatusData](apis_p2p.md#billrefundstatusdata)
- [BillRefundStatusPlain](apis_p2p.md#billrefundstatusplain)
- [BillStatusAny](apis_p2p.md#billstatusany)
- [BillStatusBody](apis_p2p.md#billstatusbody)
- [BillStatusData](apis_p2p.md#billstatusdata)
- [BillStatusNotificationBody](apis_p2p.md#billstatusnotificationbody)
- [BillStatusPlain](apis_p2p.md#billstatusplain)
- [PayUrlPatchParameters](apis_p2p.md#payurlpatchparameters)
- [RefundCreationRequest](apis_p2p.md#refundcreationrequest)

## References

### P2P

Renames and re-exports [_P2pCompat](../classes/index.QIWI._P2pCompat.md)

___

### P2PNotificationError

Renames and re-exports [P2pBillNotificationError](../classes/index.QIWI.P2pBillNotificationError.md)

___

### P2PPaymentError

Renames and re-exports [P2pApiError](../classes/index.QIWI.P2pApiError.md)

___

### P2p

Re-exports [P2p](../classes/index.QIWI.P2p.md)

___

### P2pApiError

Re-exports [P2pApiError](../classes/index.QIWI.P2pApiError.md)

___

### P2pApiErrorResponse

Re-exports [P2pApiErrorResponse](index.QIWI.md#p2papierrorresponse)

___

### P2pApiOptions

Re-exports [P2pApiOptions](../interfaces/index.QIWI.P2pApiOptions.md)

___

### P2pAuthorizationError

Re-exports [P2pAuthorizationError](../classes/index.QIWI.P2pAuthorizationError.md)

___

### P2pBillNotificationError

Re-exports [P2pBillNotificationError](../classes/index.QIWI.P2pBillNotificationError.md)

___

### P2pCompat

Renames and re-exports [_P2pCompat](../classes/index.QIWI._P2pCompat.md)

___

### QiwiBillPaymentsAPI

Renames and re-exports [_P2pCompatBillPayments](../classes/index.QIWI._P2pCompatBillPayments.md)

___

### \_P2pCompat

Re-exports [_P2pCompat](../classes/index.QIWI._P2pCompat.md)

___

### \_P2pCompatBillPayments

Re-exports [_P2pCompatBillPayments](../classes/index.QIWI._P2pCompatBillPayments.md)

## Type Aliases

### BillCreateParameters

Ƭ **BillCreateParameters**: [`BillCreationRequest`](index.QIWI.md#billcreationrequest) & [`PayUrlPatchParameters`](index.QIWI.md#payurlpatchparameters) & { `billId?`: `string`  }

#### Defined in

[apis/p2p/p2p.types.ts:256](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L256)

___

### BillCreationRequest

Ƭ **BillCreationRequest**: [`BillCustomFieldsExtension`](index._internal_.md#billcustomfieldsextension) & { `amount`: [`BillMoneyAmount`](index.QIWI.md#billmoneyamount) ; `comment?`: `string` ; `customFields?`: [`CustomFields`](index._internal_.md#customfields) ; `customer?`: { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  } ; `expirationDateTime?`: `string` \| `Date`  }

#### Defined in

[apis/p2p/p2p.types.ts:88](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L88)

___

### BillCurrencyAny

Ƭ **BillCurrencyAny**: [`BillCurrency`](../enums/index.QIWI.BillCurrency.md) \| [`BillCurrencyPlain`](index.QIWI.md#billcurrencyplain)

#### Defined in

[apis/p2p/p2p.types.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L21)

___

### BillCurrencyPlain

Ƭ **BillCurrencyPlain**: keyof typeof [`BillCurrency`](../enums/index.QIWI.BillCurrency.md)

#### Defined in

[apis/p2p/p2p.types.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L20)

___

### BillError

Ƭ **BillError**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `datetime` | `string` | Дата и время ответа |
| `description` | `string` | Вот это надо пихать в поле `Error.message` |
| `errorCode` | `string` | Внутренний код ошибки |
| `serviceName` | `string` | Название сервиса, зачастую начинается на `invoicing` |
| `traceId` | `string` | Хз что это |
| `userMessage` | `string` |  |

#### Defined in

[apis/p2p/p2p.types.ts:188](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L188)

___

### BillFormParameters

Ƭ **BillFormParameters**: [`PayUrlPatchParameters`](index.QIWI.md#payurlpatchparameters) & [`BillCustomFieldsExtension`](index._internal_.md#billcustomfieldsextension) & { `amount`: `string` \| `number` ; `billId?`: `string` ; `comment?`: `string` ; `customFields?`: [`CustomFields`](index._internal_.md#customfields) ; `lifetime?`: `string` ; `themeCode?`: `string`  } & [`BillCreationRequest`](index.QIWI.md#billcreationrequest)[``"customer"``]

#### Defined in

[apis/p2p/p2p.types.ts:217](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L217)

___

### BillMoneyAmount

Ƭ **BillMoneyAmount**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | [`BillCurrencyAny`](index.QIWI.md#billcurrencyany) | Валюта суммы счета. Возможные значения: - `RUB` - рубли - `KZT` - тенге |
| `value` | `number` \| `string` | Сумма, на которую выставляется счет, округленная в меньшую сторону до 2 десятичных знаков |

#### Defined in

[apis/p2p/p2p.types.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L56)

___

### BillPaySourceAny

Ƭ **BillPaySourceAny**: [`BillPaySource`](../enums/index.QIWI.BillPaySource.md) \| [`BillPaySourcePlain`](index.QIWI.md#billpaysourceplain)

#### Defined in

[apis/p2p/p2p.types.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L30)

___

### BillPaySourcePlain

Ƭ **BillPaySourcePlain**: ``"qw"`` \| ``"card"`` \| ``"mobile"``

#### Defined in

[apis/p2p/p2p.types.ts:29](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L29)

___

### BillRefundStatusAny

Ƭ **BillRefundStatusAny**: [`BillRefundStatus`](../enums/index.QIWI.BillRefundStatus.md) \| [`BillRefundStatusPlain`](index.QIWI.md#billrefundstatusplain)

#### Defined in

[apis/p2p/p2p.types.ts:272](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L272)

___

### BillRefundStatusData

Ƭ **BillRefundStatusData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`BillMoneyAmount`](index.QIWI.md#billmoneyamount) |
| `datetime` | `string` |
| `refundId` | `string` |
| `status` | [`BillRefundStatusAny`](index.QIWI.md#billrefundstatusany) |

#### Defined in

[apis/p2p/p2p.types.ts:274](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L274)

___

### BillRefundStatusPlain

Ƭ **BillRefundStatusPlain**: keyof typeof [`BillRefundStatus`](../enums/index.QIWI.BillRefundStatus.md)

#### Defined in

[apis/p2p/p2p.types.ts:271](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L271)

___

### BillStatusAny

Ƭ **BillStatusAny**: [`BillStatus`](../enums/index.QIWI.BillStatus.md) \| [`BillStatusPlain`](index.QIWI.md#billstatusplain)

#### Defined in

[apis/p2p/p2p.types.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L13)

___

### BillStatusBody

Ƭ **BillStatusBody**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bill` | [`BillStatusNotificationBody`](index.QIWI.md#billstatusnotificationbody) |

#### Defined in

[apis/p2p/p2p.types.ts:184](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L184)

___

### BillStatusData

Ƭ **BillStatusData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BillMoneyAmount`](index.QIWI.md#billmoneyamount) | Данные о сумме счета |
| `billId` | `string` | Уникальный идентификатор выставляемого счета в вашей системе |
| `comment?` | `string` | Комментарий к счету |
| `creationDateTime` | `string` | Системная дата создания счета. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс` |
| `customFields?` | [`CustomFields`](index._internal_.md#customfields) | Объект строковых дополнительных параметров, переданных вами |
| `customer?` | [`BillCreationRequest`](index.QIWI.md#billcreationrequest)[``"customer"``] | Идентификаторы пользователя |
| `expirationDateTime` | `string` | Срок действия созданной формы для перевода. Формат даты: `ГГГГ-ММ-ДДTчч:мм:сс+\-чч:мм` |
| `payUrl` | `string` | [Ссылка для переадресации](https://developer.qiwi.com/ru/p2p-payments/#option) пользователя на созданную форму |
| `recipientPhoneNumber?` | `string` | Номер телефона привязанный к киви кошельку, на который совершается платёж |
| `siteId` | `string` | Ваш идентификатор в системе p2p.qiwi |
| `status` | { `changedDateTime`: `string` ; `value`: [`BillStatusAny`](index.QIWI.md#billstatusany)  } | - |
| `status.changedDateTime` | `string` | Дата обновления статуса |
| `status.value` | [`BillStatusAny`](index.QIWI.md#billstatusany) | Текущий статус счета |

#### Defined in

[apis/p2p/p2p.types.ts:131](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L131)

___

### BillStatusNotificationBody

Ƭ **BillStatusNotificationBody**: [`BillStatusData`](index.QIWI.md#billstatusdata)

#### Defined in

[apis/p2p/p2p.types.ts:182](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L182)

___

### BillStatusPlain

Ƭ **BillStatusPlain**: keyof typeof [`BillStatus`](../enums/index.QIWI.BillStatus.md)

#### Defined in

[apis/p2p/p2p.types.ts:12](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L12)

___

### PayUrlPatchParameters

Ƭ **PayUrlPatchParameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `paySource?` | [`BillPaySourceAny`](index.QIWI.md#billpaysourceany) | Выбранный по умолчанию метод оплаты |
| `successUrl?` | `string` | URL для переадресации в случае успешного перевода с баланса QIWI Кошелька. При ином способе оплаты переадресация не выполняется. Ссылка должна вести на ваш сайт. |

#### Defined in

[apis/p2p/p2p.types.ts:203](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L203)

___

### RefundCreationRequest

Ƭ **RefundCreationRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`BillMoneyAmount`](index.QIWI.md#billmoneyamount) |
| `refundId?` | `string` |

#### Defined in

[apis/p2p/p2p.types.ts:261](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/p2p.types.ts#L261)
