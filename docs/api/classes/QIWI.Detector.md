[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / Detector

# Class: Detector

[QIWI](../modules/QIWI.md).Detector

API получения ID провайдера QIWI по Номеру Телефона/Карте

**`export`**

## Hierarchy

- **`Detector`**

  ↳ [`DetectorCompat`](QIWI.DetectorCompat.md)

## Table of contents

### Constructors

- [constructor](QIWI.Detector.md#constructor)

### Properties

- [\_options](QIWI.Detector.md#_options)
- [detectProvider](QIWI.Detector.md#detectprovider)
- [DetectApi](QIWI.Detector.md#detectapi)

### Accessors

- [options](QIWI.Detector.md#options)

### Methods

- [create](QIWI.Detector.md#create)
- [httpClientFactory](QIWI.Detector.md#httpclientfactory)

## Constructors

### constructor

• **new Detector**(`_options`)

Creates an instance of Detector.

**`memberof`** Detector

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`DetectorApiOptions`](../interfaces/QIWI.DetectorApiOptions.md) |

#### Defined in

src/apis/detector/detector.ts:68

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`DetectorApiOptions`](../interfaces/QIWI.DetectorApiOptions.md)

___

### detectProvider

• `Readonly` **detectProvider**: `DetectorDetectApi`

#### Defined in

src/apis/detector/detector.ts:70

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof `DetectorDetectApi` = `DetectorDetectApi`

#### Defined in

src/apis/detector/detector.ts:14

## Accessors

### options

• `get` **options**(): [`DetectorApiOptions`](../interfaces/QIWI.DetectorApiOptions.md)

**`readonly`**

**`memberof`** Detector

#### Returns

[`DetectorApiOptions`](../interfaces/QIWI.DetectorApiOptions.md)

#### Defined in

src/apis/detector/detector.ts:59

## Methods

### create

▸ `Static` **create**(): [`Detector`](QIWI.Detector.md)

**`static`**

**`memberof`** Detector

#### Returns

[`Detector`](QIWI.Detector.md)

{Detector}

#### Defined in

src/apis/detector/detector.ts:49

___

### httpClientFactory

▸ `Static` **httpClientFactory**(): `SimpleJsonHttp`

**`static`**

**`memberof`** Detector

#### Returns

`SimpleJsonHttp`

{SimpleJsonHttp}

#### Defined in

src/apis/detector/detector.ts:23
