[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / P2pApi

# Class: P2pApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).P2pApi

**`Export`**

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

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md) |

#### Inherited from

[ApiSubclass](index._internal_.ApiSubclass.md).[constructor](index._internal_.ApiSubclass.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/index.QIWI.P2pApiOptions.md)

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

### publicKey

• `Protected` `get` **publicKey**(): `string`

**`Memberof`**

P2pApi

#### Returns

`string`

#### Defined in

[apis/p2p/api.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/api.ts#L17)

___

### secretKey

• `Protected` `get` **secretKey**(): `string`

**`Memberof`**

P2pApi

#### Returns

`string`

#### Defined in

[apis/p2p/api.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/p2p/api.ts#L28)
