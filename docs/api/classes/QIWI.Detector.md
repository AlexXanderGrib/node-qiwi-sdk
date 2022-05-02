[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / Detector

# Class: Detector

[QIWI](../modules/QIWI.md).Detector

API получения ID провайдера QIWI по Номеру Телефона/Карте

**`export`**

## Hierarchy

- [`ApiClass`](internal_.ApiClass.md)<[`DetectorApiOptions`](../modules/QIWI.md#detectorapioptions)\>

  ↳ **`Detector`**

  ↳↳ [`DetectorCompat`](QIWI.DetectorCompat.md)

## Table of contents

### Constructors

- [constructor](QIWI.Detector.md#constructor)

### Properties

- [\_options](QIWI.Detector.md#_options)
- [detectProvider](QIWI.Detector.md#detectprovider)
- [DetectApi](QIWI.Detector.md#detectapi)

### Accessors

- [agent](QIWI.Detector.md#agent)
- [options](QIWI.Detector.md#options)

### Methods

- [create](QIWI.Detector.md#create)
- [httpClientFactory](QIWI.Detector.md#httpclientfactory)

## Constructors

### constructor

• **new Detector**(`[options]?`)

Creates an instance of P2p.

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `[options]` | [`Partial`](../modules/internal_.md#partial)<[`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md)\> |

#### Overrides

[ApiClass](internal_.ApiClass.md).[constructor](internal_.ApiClass.md#constructor)

#### Defined in

[src/apis/detector/detector.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/detector/detector.ts#L59)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md)

#### Inherited from

[ApiClass](internal_.ApiClass.md).[_options](internal_.ApiClass.md#_options)

___

### detectProvider

• `Readonly` **detectProvider**: [`DetectorDetectApi`](internal_.DetectorDetectApi.md)

#### Defined in

[src/apis/detector/detector.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/detector/detector.ts#L65)

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof [`DetectorDetectApi`](internal_.DetectorDetectApi.md) = `DetectorDetectApi`

#### Defined in

[src/apis/detector/detector.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/detector/detector.ts#L15)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/api.ts#L21)

• `set` **agent**(`agent`): `void`

**`memberof`** WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

ApiClass.agent

#### Defined in

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/api.ts#L30)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** ApiClass

#### Returns

`T`

#### Inherited from

ApiClass.options

#### Defined in

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/api.ts#L41)

## Methods

### create

▸ `Static` **create**(): [`Detector`](QIWI.Detector.md)

**`static`**

**`memberof`** Detector

#### Returns

[`Detector`](QIWI.Detector.md)

{Detector}

#### Defined in

[src/apis/detector/detector.ts:50](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/detector/detector.ts#L50)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`static`**

**`memberof`** Detector

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Defined in

[src/apis/detector/detector.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/1999c21/src/apis/detector/detector.ts#L24)
