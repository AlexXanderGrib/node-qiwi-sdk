[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [ApiClass](../classes/index._internal_.ApiClass.md)
- [ApiSubclass](../classes/index._internal_.ApiSubclass.md)
- [DetectorApi](../classes/index._internal_.DetectorApi.md)
- [DetectorDetectApi](../classes/index._internal_.DetectorDetectApi.md)
- [ErrorWithCause](../classes/index._internal_.ErrorWithCause.md)
- [ExtendedError](../classes/index._internal_.ExtendedError.md)
- [OptionsWrapper](../classes/index._internal_.OptionsWrapper.md)
- [OptionsWrapperWithGetter](../classes/index._internal_.OptionsWrapperWithGetter.md)
- [P2pApi](../classes/index._internal_.P2pApi.md)
- [P2pBillsApi](../classes/index._internal_.P2pBillsApi.md)
- [WalletApi](../classes/index._internal_.WalletApi.md)
- [WalletBillsApi](../classes/index._internal_.WalletBillsApi.md)
- [WalletCardsApi](../classes/index._internal_.WalletCardsApi.md)
- [WalletFundingSourcesApi](../classes/index._internal_.WalletFundingSourcesApi.md)
- [WalletIdentificationApi](../classes/index._internal_.WalletIdentificationApi.md)
- [WalletLimitsApi](../classes/index._internal_.WalletLimitsApi.md)
- [WalletNicknameApi](../classes/index._internal_.WalletNicknameApi.md)
- [WalletOauthApi](../classes/index._internal_.WalletOauthApi.md)
- [WalletPaymentHistoryApi](../classes/index._internal_.WalletPaymentHistoryApi.md)
- [WalletPaymentsApi](../classes/index._internal_.WalletPaymentsApi.md)
- [WalletPersonProfileApi](../classes/index._internal_.WalletPersonProfileApi.md)
- [WalletProvidersApi](../classes/index._internal_.WalletProvidersApi.md)
- [WalletRestrictionsApi](../classes/index._internal_.WalletRestrictionsApi.md)
- [WalletWebhooksApi](../classes/index._internal_.WalletWebhooksApi.md)

### Interfaces

- [ApiClassOptions](../interfaces/index._internal_.ApiClassOptions.md)

### Type Aliases

- [BillCustomFieldsExtension](index._internal_.md#billcustomfieldsextension)
- [BillRequestHandler](index._internal_.md#billrequesthandler)
- [BinaryAlike](index._internal_.md#binaryalike)
- [CardType](index._internal_.md#cardtype)
- [CreateAndFetchWalletIdParameters](index._internal_.md#createandfetchwalletidparameters)
- [CustomFields](index._internal_.md#customfields)
- [DateValue](index._internal_.md#datevalue)
- [ImageObject](index._internal_.md#imageobject)
- [KeyValueObject](index._internal_.md#keyvalueobject)
- [MiddlewareOptions](index._internal_.md#middlewareoptions)
- [NameValueObject](index._internal_.md#namevalueobject)
- [SetupHttp](index._internal_.md#setuphttp)
- [TimeUnit](index._internal_.md#timeunit)
- [ToString](index._internal_.md#tostring)

## Type Aliases

### BillCustomFieldsExtension

Ƭ **BillCustomFieldsExtension**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `paySourcesFilter?` | [`BillPaySourceAny`](index.QIWI.md#billpaysourceany) \| [`BillPaySourceAny`](index.QIWI.md#billpaysourceany)[] | Строка с разделителями-запятыми. При [открытии формы](https://developer.qiwi.com/ru/p2p-payments/#payurl) будут отображаться только указанные способы перевода (один или несколько), если они доступны. Возможные значения: - `qw` - QIWI Кошелек, - `card` - банковская карта. |
| `themeCode?` | `string` | Код персонализации темы, добавляется в поле `customFields` |

#### Defined in

[apis/p2p/p2p.types.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/p2p/p2p.types.ts#L72)

___

### BillRequestHandler

Ƭ **BillRequestHandler**: `RequestHandler`<`Record`<`string`, `string`\>, `any`, [`BillStatusNotificationBody`](index.QIWI.md#billstatusnotificationbody)\>

#### Defined in

[apis/p2p/p2p.middleware.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/p2p/p2p.middleware.ts#L63)

___

### BinaryAlike

Ƭ **BinaryAlike**: `string` \| `Uint8Array`

#### Defined in

apis/shared/platform/crypto/shared.ts:1

___

### CardType

Ƭ **CardType**: ``"VIRTUAL"`` \| ``"PLASTIC"``

#### Defined in

[apis/wallet/wallet.types.ts:953](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L953)

___

### CreateAndFetchWalletIdParameters

Ƭ **CreateAndFetchWalletIdParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setupHttp?` | [`SetupHttp`](index._internal_.md#setuphttp) |

#### Defined in

[apis/wallet/wallet.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.ts#L44)

___

### CustomFields

Ƭ **CustomFields**: { `paySourcesFilter?`: `string` ; `themeCode?`: `string`  } & `Record`<`string`, `string`\>

#### Defined in

[apis/p2p/p2p.types.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/p2p/p2p.types.ts#L32)

___

### DateValue

Ƭ **DateValue**: `Date` \| `number` \| `string`

#### Defined in

[apis/shared/time.ts:3](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/time.ts#L3)

___

### ImageObject

Ƭ **ImageObject**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | Высота изображения |
| `ratio` | `string` | Размер изображения относительно минимального в наборе. Пример: `2x` |
| `url` | `string` | URL изображения |
| `width` | `number` | Ширина изображения |

#### Defined in

[apis/wallet/wallet.types.ts:934](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L934)

___

### KeyValueObject

Ƭ **KeyValueObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Defined in

[apis/wallet/wallet.types.ts:1483](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L1483)

___

### MiddlewareOptions

Ƭ **MiddlewareOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `memo?` | `boolean` |
| `memoTime?` | `number` |

#### Defined in

[apis/p2p/p2p.middleware.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/p2p/p2p.middleware.ts#L69)

___

### NameValueObject

Ƭ **NameValueObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Defined in

[apis/wallet/wallet.types.ts:951](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.types.ts#L951)

___

### SetupHttp

Ƭ **SetupHttp**: (`http`: [`SimpleJsonHttp`](../classes/index.QIWI.SimpleJsonHttp.md)) => `void`

#### Type declaration

▸ (`http`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `http` | [`SimpleJsonHttp`](../classes/index.QIWI.SimpleJsonHttp.md) |

##### Returns

`void`

nothing

#### Defined in

[apis/wallet/wallet.ts:42](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/wallet/wallet.ts#L42)

___

### TimeUnit

Ƭ **TimeUnit**: [`TimeSpan`](../enums/index.QIWI.TimeSpan.md) \| `number` \| [`TimeSpanKeys`](index.QIWI.md#timespankeys)

#### Defined in

[apis/shared/time.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/time.ts#L80)

___

### ToString

Ƭ **ToString**: `string` \| [`URLResult`](index.QIWI.md#urlresult)

#### Defined in

[apis/shared/http.ts:6](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/bc0e99e/src/apis/shared/http.ts#L6)
