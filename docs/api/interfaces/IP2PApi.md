[qiwi-sdk](../README.md) / [Exports](../modules.md) / IP2PApi

# Interface: IP2PApi

## Implemented by

- [`P2P`](../classes/P2P.md)

## Table of contents

### Methods

- [billStatus](IP2PApi.md#billstatus)
- [checkNotificationSignature](IP2PApi.md#checknotificationsignature)
- [createBill](IP2PApi.md#createbill)
- [createBillFormUrl](IP2PApi.md#createbillformurl)
- [rejectBill](IP2PApi.md#rejectbill)

## Methods

### billStatus

▸ **billStatus**(`billId`): `Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |

#### Returns

`Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

#### Defined in

[src/services/p2p.types.ts:186](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/p2p.types.ts#L186)

___

### checkNotificationSignature

▸ **checkNotificationSignature**(`signature`, `body`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |
| `body` | [`BillStatusData`](../modules.md#billstatusdata) |

#### Returns

`boolean`

#### Defined in

[src/services/p2p.types.ts:181](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/p2p.types.ts#L181)

___

### createBill

▸ **createBill**(`data`, `id?`): `Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BillCreationRequest`](../modules.md#billcreationrequest) |
| `id?` | `string` |

#### Returns

`Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

#### Defined in

[src/services/p2p.types.ts:179](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/p2p.types.ts#L179)

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

[src/services/p2p.types.ts:182](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/p2p.types.ts#L182)

___

### rejectBill

▸ **rejectBill**(`billId`): `Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `billId` | `string` |

#### Returns

`Promise`<[`BillStatusData`](../modules.md#billstatusdata)\>

#### Defined in

[src/services/p2p.types.ts:180](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/p2p.types.ts#L180)
