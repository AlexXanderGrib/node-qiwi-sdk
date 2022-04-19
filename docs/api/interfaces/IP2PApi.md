[qiwi-sdk](../README.md) / [Exports](../modules.md) / IP2PApi

# Interface: IP2PApi

## Table of contents

### Methods

- [billStatus](IP2PApi.md#billstatus)
- [checkNotificationSignature](IP2PApi.md#checknotificationsignature)
- [createBill](IP2PApi.md#createbill)
- [createBillFormUrl](IP2PApi.md#createbillformurl)
- [getBillStatus](IP2PApi.md#getbillstatus)
- [rejectBill](IP2PApi.md#rejectbill)

## Methods

### billStatus

▸ **billStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Defined in

[src/services/p2p.types.ts:194](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L194)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `body` | [`BillStatusData`](../modules/QIWI.md#billstatusdata) |

#### Returns

`boolean`

#### Defined in

[src/services/p2p.types.ts:187](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L187)

___

### createBill

▸ **createBill**(`data`, `id?`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BillCreationRequest`](../modules/QIWI.md#billcreationrequest) |
| `id?` | `string` |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Defined in

[src/services/p2p.types.ts:185](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L185)

___

### createBillFormUrl

▸ **createBillFormUrl**(`parameters`, `billId?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Omit`<{ `amount`: `string` \| `number` ; `billId`: `string` ; `comment?`: `string` ; `customFields?`: `Record`<`string`, `string`\> ; `lifetime?`: `string` ; `publicKey`: `string` ; `successUrl?`: `string`  } & { `account?`: `string` ; `email?`: `string` ; `phone?`: `string`  }, ``"billId"`` \| ``"publicKey"``\> |
| `billId?` | `string` |

#### Returns

`string`

#### Defined in

[src/services/p2p.types.ts:188](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L188)

___

### getBillStatus

▸ **getBillStatus**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Defined in

[src/services/p2p.types.ts:192](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L192)

___

### rejectBill

▸ **rejectBill**(`billId`): `Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |

#### Returns

`Promise`<[`BillStatusData`](../modules/QIWI.md#billstatusdata)\>

#### Defined in

[src/services/p2p.types.ts:186](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59731a2/src/services/p2p.types.ts#L186)
