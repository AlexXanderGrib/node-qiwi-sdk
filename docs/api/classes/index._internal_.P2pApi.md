[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / P2pApi

# Class: P2pApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).P2pApi

**`export`**

## Hierarchy

- [`ApiSubclass`](index._internal_.ApiSubclass.md)<[`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)\>

  ↳ **`P2pApi`**

  ↳↳ [`P2pBillsApi`](index._internal_.P2pBillsApi.md)

## Table of contents

### Constructors

- [constructor](index._internal_.P2pApi.md#constructor)

### Properties

- [\_options](index._internal_.P2pApi.md#_options)

### Accessors

- [http](index._internal_.P2pApi.md#http)
- [publicKey](index._internal_.P2pApi.md#publickey)
- [secretKey](index._internal_.P2pApi.md#secretkey)

## Constructors

### constructor

• **new P2pApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md) |

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[constructor](index._internal_.ApiSubclass.md#constructor)

#### Defined in

[dist/cjs/options-wrapper.d.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/options-wrapper.d.ts#L22)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

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

### publicKey

• `Protected` `get` **publicKey**(): `string`

**`readonly`**

**`memberof`** P2pApi

#### Returns

`string`

#### Defined in

[dist/cjs/apis/p2p/api.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/api.d.ts#L17)

___

### secretKey

• `Protected` `get` **secretKey**(): `string`

**`readonly`**

**`memberof`** P2pApi

#### Returns

`string`

#### Defined in

[dist/cjs/apis/p2p/api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/59c6cc6/dist/cjs/apis/p2p/api.d.ts#L25)
