[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Namespace: <internal\>

[index](index.md).<internal>

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
- [OptionsWrapperWithSetter](../classes/index._internal_.OptionsWrapperWithSetter.md)
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

### Type aliases

- [BillCustomFieldsExtension](index._internal_.md#billcustomfieldsextension)
- [BillRequestHandler](index._internal_.md#billrequesthandler)
- [BinaryAlike](index._internal_.md#binaryalike)
- [CardType](index._internal_.md#cardtype)
- [CreateAndFetchWalletIdParameters](index._internal_.md#createandfetchwalletidparameters)
- [CustomFields](index._internal_.md#customfields)
- [ImageObject](index._internal_.md#imageobject)
- [KeyValueObject](index._internal_.md#keyvalueobject)
- [MiddlewareOptions](index._internal_.md#middlewareoptions)
- [NameValueObject](index._internal_.md#namevalueobject)
- [SetupHttp](index._internal_.md#setuphttp)
- [URLResult](index._internal_.md#urlresult)

## Type aliases

### BillCustomFieldsExtension

Ƭ **BillCustomFieldsExtension**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `paySourcesFilter?` | [`BillPaySourceAny`](index.QIWI.md#billpaysourceany) \| [`BillPaySourceAny`](index.QIWI.md#billpaysourceany)[] | Строка с разделителями-запятыми. При [открытии формы](https://developer.qiwi.com/ru/p2p-payments/#payurl) будут отображаться только указанные способы перевода (один или несколько), если они доступны. Возможные значения: - `qw` - QIWI Кошелек, - `card` - банковская карта. |
| `themeCode?` | `string` | Код персонализации темы, добавляется в поле `customFields` |

#### Defined in

dist/cjs/apis/p2p/p2p.types.d.ts:63

___

### BillRequestHandler

Ƭ **BillRequestHandler**: `RequestHandler`<`Record`<`string`, `string`\>, `any`, [`BillStatusNotificationBody`](index.QIWI.md#billstatusnotificationbody)\>

#### Defined in

dist/cjs/apis/p2p/p2p.middleware.d.ts:23

___

### BinaryAlike

Ƭ **BinaryAlike**: `string` \| `NodeJS.ArrayBufferView`

#### Defined in

dist/cjs/apis/shared/hmac.d.ts:2

___

### CardType

Ƭ **CardType**: ``"VIRTUAL"`` \| ``"PLASTIC"``

#### Defined in

dist/cjs/apis/wallet/wallet.types.d.ts:773

___

### CreateAndFetchWalletIdParameters

Ƭ **CreateAndFetchWalletIdParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setupHttp?` | [`SetupHttp`](index._internal_.md#setuphttp) |

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:24

___

### CustomFields

Ƭ **CustomFields**: { `paySourcesFilter?`: `string` ; `themeCode?`: `string`  } & `Record`<`string`, `string`\>

#### Defined in

dist/cjs/apis/p2p/p2p.types.d.ts:26

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

dist/cjs/apis/wallet/wallet.types.d.ts:756

___

### KeyValueObject

Ƭ **KeyValueObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Defined in

dist/cjs/apis/wallet/wallet.types.d.ts:1192

___

### MiddlewareOptions

Ƭ **MiddlewareOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `memo?` | `boolean` |
| `memoTime?` | `number` |

#### Defined in

dist/cjs/apis/p2p/p2p.middleware.d.ts:24

___

### NameValueObject

Ƭ **NameValueObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Defined in

dist/cjs/apis/wallet/wallet.types.d.ts:769

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

dist/cjs/apis/wallet/wallet.d.ts:23

___

### URLResult

Ƭ **URLResult**: (`queryParameters?`: [`AnyRecord`](index.QIWI.md#anyrecord)) => `string`

#### Type declaration

▸ (`queryParameters?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters?` | [`AnyRecord`](index.QIWI.md#anyrecord) |

##### Returns

`string`

#### Defined in

dist/cjs/apis/shared/url.d.ts:2
