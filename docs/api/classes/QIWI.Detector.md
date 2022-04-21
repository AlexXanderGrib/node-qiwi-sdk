[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / Detector

# Class: Detector

[QIWI](../modules/QIWI.md).Detector

API получения ID провайдера QIWI по Номеру Телефона/Карте

**`export`**

## Hierarchy

- `ApiClass`<[`DetectorApiOptions`](../modules/QIWI.md#detectorapioptions)\>

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

• **new Detector**(`_options`)

Creates an instance of ApiClass.

**`memberof`** ApiClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `ApiClassOptions` |

#### Inherited from

ApiClass<DetectorApiOptions\>.constructor

#### Defined in

src/apis/api.ts:49

## Properties

### \_options

• `Protected` `Readonly` **\_options**: `ApiClassOptions`

#### Inherited from

ApiClass.\_options

___

### detectProvider

• `Readonly` **detectProvider**: `DetectorDetectApi`

#### Defined in

[src/apis/detector/detector.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/detector/detector.ts#L54)

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof `DetectorDetectApi` = `DetectorDetectApi`

#### Defined in

[src/apis/detector/detector.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/detector/detector.ts#L15)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

src/apis/api.ts:21

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

src/apis/api.ts:30

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

src/apis/api.ts:40

## Methods

### create

▸ `Static` **create**(): [`Detector`](QIWI.Detector.md)

**`static`**

**`memberof`** Detector

#### Returns

[`Detector`](QIWI.Detector.md)

{Detector}

#### Defined in

[src/apis/detector/detector.ts:50](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/detector/detector.ts#L50)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(): `SimpleJsonHttp`

**`static`**

**`memberof`** Detector

#### Returns

`SimpleJsonHttp`

{SimpleJsonHttp}

#### Defined in

[src/apis/detector/detector.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/detector/detector.ts#L24)
