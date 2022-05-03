[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletApi

# Class: WalletApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletApi

**`export`**

## Hierarchy

- [`ApiSubclass`](index._internal_.ApiSubclass.md)<[`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)\>

  ↳ **`WalletApi`**

  ↳↳ [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

  ↳↳ [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

  ↳↳ [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

  ↳↳ [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

  ↳↳ [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

  ↳↳ [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

  ↳↳ [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

  ↳↳ [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

  ↳↳ [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

  ↳↳ [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

  ↳↳ [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

## Table of contents

### Constructors

- [constructor](index._internal_.WalletApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletApi.md#_options)

### Accessors

- [http](index._internal_.WalletApi.md#http)
- [walletId](index._internal_.WalletApi.md#walletid)

## Constructors

### constructor

• **new WalletApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[constructor](index._internal_.ApiSubclass.md#constructor)

#### Defined in

[dist/cjs/options-wrapper.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L22)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[_options](index._internal_.ApiSubclass.md#_options)

#### Defined in

[dist/cjs/options-wrapper.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L16)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Inherited from

ApiSubclass.http

#### Defined in

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/api.d.ts#L43)

___

### walletId

• `Protected` `get` **walletId**(): `string`

**`readonly`**

**`memberof`** WalletApi

#### Returns

`string`

#### Defined in

[dist/cjs/apis/wallet/api.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/wallet/api.d.ts#L17)
