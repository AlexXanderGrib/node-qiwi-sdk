[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletApi

# Class: WalletApi

[<internal>](../modules/internal_.md).WalletApi

**`export`**

## Hierarchy

- **`WalletApi`**

  ↳ [`WalletPersonProfileApi`](internal_.WalletPersonProfileApi.md)

  ↳ [`WalletIdentificationApi`](internal_.WalletIdentificationApi.md)

  ↳ [`WalletLimitsApi`](internal_.WalletLimitsApi.md)

  ↳ [`WalletRestrictionsApi`](internal_.WalletRestrictionsApi.md)

  ↳ [`WalletPaymentHistoryApi`](internal_.WalletPaymentHistoryApi.md)

  ↳ [`WalletFundingSourcesApi`](internal_.WalletFundingSourcesApi.md)

  ↳ [`WalletCardsApi`](internal_.WalletCardsApi.md)

  ↳ [`WalletPaymentsApi`](internal_.WalletPaymentsApi.md)

  ↳ [`WalletBillsApi`](internal_.WalletBillsApi.md)

  ↳ [`WalletWebhooksApi`](internal_.WalletWebhooksApi.md)

  ↳ [`WalletProvidersApi`](internal_.WalletProvidersApi.md)

## Table of contents

### Constructors

- [constructor](internal_.WalletApi.md#constructor)

### Properties

- [\_options](internal_.WalletApi.md#_options)

### Accessors

- [http](internal_.WalletApi.md#http)
- [walletId](internal_.WalletApi.md#walletid)

## Constructors

### constructor

• **new WalletApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/apis/wallet/api.ts#L36)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** WalletApi

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

#### Defined in

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/apis/wallet/api.ts#L16)

___

### walletId

• `Protected` `get` **walletId**(): `string`

**`readonly`**

**`memberof`** WalletApi

#### Returns

`string`

#### Defined in

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/16c3ee8/src/apis/wallet/api.ts#L27)
