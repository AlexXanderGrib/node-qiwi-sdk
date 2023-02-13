[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletApi

# Class: WalletApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletApi

**`Export`**

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

  ↳↳ [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

  ↳↳ [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

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

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[constructor](index._internal_.ApiSubclass.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[_options](index._internal_.ApiSubclass.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Memberof`**

ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Inherited from

ApiSubclass.http

#### Defined in

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L55)

___

### walletId

• `Protected` `get` **walletId**(): `string`

**`Memberof`**

WalletApi

#### Returns

`string`

#### Defined in

[apis/wallet/api.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/api.ts#L17)
