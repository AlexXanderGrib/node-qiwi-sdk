[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / DetectorCompat

# Class: DetectorCompat

[QIWI](../modules/QIWI.md).DetectorCompat

**`deprecated`** Используйте класс `Detector` и новые сигнатуры
методов

**`export`**

## Hierarchy

- [`Detector`](QIWI.Detector.md)

  ↳ **`DetectorCompat`**

## Table of contents

### Constructors

- [constructor](QIWI.DetectorCompat.md#constructor)

### Properties

- [\_options](QIWI.DetectorCompat.md#_options)
- [detectProvider](QIWI.DetectorCompat.md#detectprovider)
- [DetectApi](QIWI.DetectorCompat.md#detectapi)

### Accessors

- [options](QIWI.DetectorCompat.md#options)

### Methods

- [getCardProvider](QIWI.DetectorCompat.md#getcardprovider)
- [getPhoneProvider](QIWI.DetectorCompat.md#getphoneprovider)
- [create](QIWI.DetectorCompat.md#create)
- [httpClientFactory](QIWI.DetectorCompat.md#httpclientfactory)

## Constructors

### constructor

• **new DetectorCompat**()

Creates an instance of DetectorCompat.

**`memberof`** DetectorCompat

#### Overrides

[Detector](QIWI.Detector.md).[constructor](QIWI.Detector.md#constructor)

#### Defined in

src/apis/detector/detector.compat.ts:17

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`DetectorApiOptions`](../interfaces/QIWI.DetectorApiOptions.md)

#### Inherited from

[Detector](QIWI.Detector.md).[_options](QIWI.Detector.md#_options)

___

### detectProvider

• `Readonly` **detectProvider**: `DetectorDetectApi`

#### Inherited from

[Detector](QIWI.Detector.md).[detectProvider](QIWI.Detector.md#detectprovider)

#### Defined in

src/apis/detector/detector.ts:70

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof `DetectorDetectApi` = `DetectorDetectApi`

#### Inherited from

[Detector](QIWI.Detector.md).[DetectApi](QIWI.Detector.md#detectapi)

#### Defined in

src/apis/detector/detector.ts:14

## Accessors

### options

• `get` **options**(): [`DetectorApiOptions`](../interfaces/QIWI.DetectorApiOptions.md)

**`readonly`**

**`memberof`** Detector

#### Returns

[`DetectorApiOptions`](../interfaces/QIWI.DetectorApiOptions.md)

#### Inherited from

Detector.options

#### Defined in

src/apis/detector/detector.ts:59

## Methods

### getCardProvider

▸ **getCardProvider**(`cardNumber`): `Promise`<`number`\>

**`memberof`** Detector

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardNumber` | `string` |

#### Returns

`Promise`<`number`\>

{Promise<number>}

#### Defined in

src/apis/detector/detector.compat.ts:37

___

### getPhoneProvider

▸ **getPhoneProvider**(`phone`): `Promise`<`number`\>

**`memberof`** Detector

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | `string` |

#### Returns

`Promise`<`number`\>

{Promise<number>}

#### Defined in

src/apis/detector/detector.compat.ts:27

___

### create

▸ `Static` **create**(): [`Detector`](QIWI.Detector.md)

**`static`**

**`memberof`** Detector

#### Returns

[`Detector`](QIWI.Detector.md)

{Detector}

#### Inherited from

[Detector](QIWI.Detector.md).[create](QIWI.Detector.md#create)

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

#### Inherited from

[Detector](QIWI.Detector.md).[httpClientFactory](QIWI.Detector.md#httpclientfactory)

#### Defined in

src/apis/detector/detector.ts:23
