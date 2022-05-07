[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Namespace: <internal\>

[index](index.md).<internal>

## Table of contents

### Classes

- [ApiClass](../classes/index._internal_.ApiClass.md)
- [ApiSubclass](../classes/index._internal_.ApiSubclass.md)
- [DetectorApi](../classes/index._internal_.DetectorApi.md)
- [DetectorDetectApi](../classes/index._internal_.DetectorDetectApi.md)
- [ExtendedError](../classes/index._internal_.ExtendedError.md)
- [HttpError](../classes/index._internal_.HttpError.md)
- [OptionsWrapper](../classes/index._internal_.OptionsWrapper.md)
- [OptionsWrapperWithGetter](../classes/index._internal_.OptionsWrapperWithGetter.md)
- [P2pApi](../classes/index._internal_.P2pApi.md)
- [P2pBillsApi](../classes/index._internal_.P2pBillsApi.md)
- [SimpleJsonHttp](../classes/index._internal_.SimpleJsonHttp.md)
- [WalletApi](../classes/index._internal_.WalletApi.md)
- [WalletBillsApi](../classes/index._internal_.WalletBillsApi.md)
- [WalletCardsApi](../classes/index._internal_.WalletCardsApi.md)
- [WalletFundingSourcesApi](../classes/index._internal_.WalletFundingSourcesApi.md)
- [WalletIdentificationApi](../classes/index._internal_.WalletIdentificationApi.md)
- [WalletLimitsApi](../classes/index._internal_.WalletLimitsApi.md)
- [WalletNicknameApi](../classes/index._internal_.WalletNicknameApi.md)
- [WalletPaymentHistoryApi](../classes/index._internal_.WalletPaymentHistoryApi.md)
- [WalletPaymentsApi](../classes/index._internal_.WalletPaymentsApi.md)
- [WalletPersonProfileApi](../classes/index._internal_.WalletPersonProfileApi.md)
- [WalletProvidersApi](../classes/index._internal_.WalletProvidersApi.md)
- [WalletRestrictionsApi](../classes/index._internal_.WalletRestrictionsApi.md)
- [WalletWebhooksApi](../classes/index._internal_.WalletWebhooksApi.md)

### Interfaces

- [ApiClassOptions](../interfaces/index._internal_.ApiClassOptions.md)
- [HttpClient](../interfaces/index._internal_.HttpClient.md)
- [HttpClientOptions](../interfaces/index._internal_.HttpClientOptions.md)
- [HttpRequestOptions](../interfaces/index._internal_.HttpRequestOptions.md)
- [HttpResponse](../interfaces/index._internal_.HttpResponse.md)

### Type aliases

- [CardType](index._internal_.md#cardtype)
- [CreateAndFetchWalletIdParameters](index._internal_.md#createandfetchwalletidparameters)
- [ImageObject](index._internal_.md#imageobject)
- [KeyValueObject](index._internal_.md#keyvalueobject)
- [NameValueObject](index._internal_.md#namevalueobject)
- [SetupHttp](index._internal_.md#setuphttp)

## Type aliases

### CardType

Ƭ **CardType**: ``"VIRTUAL"`` \| ``"PLASTIC"``

#### Defined in

dist/cjs/apis/wallet/wallet.types.d.ts:794

___

### CreateAndFetchWalletIdParameters

Ƭ **CreateAndFetchWalletIdParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setupHttp?` | [`SetupHttp`](index._internal_.md#setuphttp) |

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:23

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

dist/cjs/apis/wallet/wallet.types.d.ts:777

___

### KeyValueObject

Ƭ **KeyValueObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Defined in

dist/cjs/apis/wallet/wallet.types.d.ts:1216

___

### NameValueObject

Ƭ **NameValueObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Defined in

dist/cjs/apis/wallet/wallet.types.d.ts:790

___

### SetupHttp

Ƭ **SetupHttp**: (`http`: [`SimpleJsonHttp`](../classes/index._internal_.SimpleJsonHttp.md)) => `void`

#### Type declaration

▸ (`http`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `http` | [`SimpleJsonHttp`](../classes/index._internal_.SimpleJsonHttp.md) |

##### Returns

`void`

nothing

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:22
