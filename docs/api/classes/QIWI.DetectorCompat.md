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

- [agent](QIWI.DetectorCompat.md#agent)
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

[src/apis/detector/detector.compat.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/detector/detector.compat.ts#L17)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md)

#### Inherited from

[Detector](QIWI.Detector.md).[_options](QIWI.Detector.md#_options)

___

### detectProvider

• `Readonly` **detectProvider**: [`DetectorDetectApi`](internal_.DetectorDetectApi.md)

#### Inherited from

[Detector](QIWI.Detector.md).[detectProvider](QIWI.Detector.md#detectprovider)

#### Defined in

[src/apis/detector/detector.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/detector/detector.ts#L54)

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof [`DetectorDetectApi`](internal_.DetectorDetectApi.md) = `DetectorDetectApi`

#### Inherited from

[Detector](QIWI.Detector.md).[DetectApi](QIWI.Detector.md#detectapi)

#### Defined in

[src/apis/detector/detector.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/detector/detector.ts#L15)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

Detector.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L21)

• `set` **agent**(`agent`): `void`

**`memberof`** WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

Detector.agent

#### Defined in

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L30)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** ApiClass

#### Returns

`T`

#### Inherited from

Detector.options

#### Defined in

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L41)

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

[src/apis/detector/detector.compat.ts:37](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/detector/detector.compat.ts#L37)

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

[src/apis/detector/detector.compat.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/detector/detector.compat.ts#L27)

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

[src/apis/detector/detector.ts:50](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/detector/detector.ts#L50)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`static`**

**`memberof`** Detector

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Inherited from

[Detector](QIWI.Detector.md).[httpClientFactory](QIWI.Detector.md#httpclientfactory)

#### Defined in

[src/apis/detector/detector.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/detector/detector.ts#L24)
