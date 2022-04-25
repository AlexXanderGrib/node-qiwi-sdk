[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / P2pApi

# Class: P2pApi

[<internal>](../modules/internal_.md).P2pApi

**`export`**

## Hierarchy

- **`P2pApi`**

  ↳ [`P2pBillsApi`](internal_.P2pBillsApi.md)

## Table of contents

### Constructors

- [constructor](internal_.P2pApi.md#constructor)

### Properties

- [\_options](internal_.P2pApi.md#_options)

### Accessors

- [http](internal_.P2pApi.md#http)
- [publicKey](internal_.P2pApi.md#publickey)
- [secretKey](internal_.P2pApi.md#secretkey)

## Constructors

### constructor

• **new P2pApi**(`_options`)

Creates an instance of P2pApi.

**`memberof`** P2pApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md) |

#### Defined in

[src/apis/p2p/api.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/apis/p2p/api.ts#L47)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`P2pApiOptions`](../interfaces/QIWI.P2pApiOptions.md)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** P2pApi

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

#### Defined in

[src/apis/p2p/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/apis/p2p/api.ts#L16)

___

### publicKey

• `Protected` `get` **publicKey**(): `string`

**`readonly`**

**`memberof`** P2pApi

#### Returns

`string`

#### Defined in

[src/apis/p2p/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/apis/p2p/api.ts#L27)

___

### secretKey

• `Protected` `get` **secretKey**(): `string`

**`readonly`**

**`memberof`** P2pApi

#### Returns

`string`

#### Defined in

[src/apis/p2p/api.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1f94fde/src/apis/p2p/api.ts#L38)
