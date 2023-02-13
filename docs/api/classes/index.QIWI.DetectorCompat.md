[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / DetectorCompat

# Class: DetectorCompat

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).DetectorCompat

**`Deprecated`**

Используйте класс `Detector` и новые сигнатуры
методов

**`Export`**

## Hierarchy

- [`Detector`](index.QIWI.Detector.md)

  ↳ **`DetectorCompat`**

## Table of contents

### Constructors

- [constructor](index.QIWI.DetectorCompat.md#constructor)

### Properties

- [\_options](index.QIWI.DetectorCompat.md#_options)
- [detectProvider](index.QIWI.DetectorCompat.md#detectprovider)
- [DetectApi](index.QIWI.DetectorCompat.md#detectapi)

### Accessors

- [agent](index.QIWI.DetectorCompat.md#agent)
- [options](index.QIWI.DetectorCompat.md#options)

### Methods

- [getCardProvider](index.QIWI.DetectorCompat.md#getcardprovider)
- [getPhoneProvider](index.QIWI.DetectorCompat.md#getphoneprovider)
- [create](index.QIWI.DetectorCompat.md#create)
- [httpClientFactory](index.QIWI.DetectorCompat.md#httpclientfactory)

## Constructors

### constructor

• **new DetectorCompat**()

Creates an instance of DetectorCompat.

**`Memberof`**

DetectorCompat

#### Overrides

[Detector](index.QIWI.Detector.md).[constructor](index.QIWI.Detector.md#constructor)

#### Defined in

[apis/detector/detector.compat.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detector.compat.ts#L17)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[Detector](index.QIWI.Detector.md).[_options](index.QIWI.Detector.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

___

### detectProvider

• `Readonly` **detectProvider**: [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md)

#### Inherited from

[Detector](index.QIWI.Detector.md).[detectProvider](index.QIWI.Detector.md#detectprovider)

#### Defined in

[apis/detector/detector.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detector.ts#L66)

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md) = `DetectorDetectApi`

#### Inherited from

[Detector](index.QIWI.Detector.md).[DetectApi](index.QIWI.Detector.md#detectapi)

#### Defined in

[apis/detector/detector.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detector.ts#L16)

## Accessors

### agent

• `get` **agent**(): `any`

**`Memberof`**

WalletCompat

#### Returns

`any`

#### Inherited from

Detector.agent

#### Defined in

[apis/api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L23)

• `set` **agent**(`agent`): `void`

**`Memberof`**

WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

Detector.agent

#### Defined in

[apis/api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L32)

___

### options

• `get` **options**(): `T`

**`Memberof`**

OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

Detector.options

#### Defined in

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L44)

## Methods

### getCardProvider

▸ **getCardProvider**(`cardNumber`): `Promise`<`number`\>

**`Memberof`**

Detector

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardNumber` | `string` |

#### Returns

`Promise`<`number`\>

Promise<number>

#### Defined in

[apis/detector/detector.compat.ts:37](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detector.compat.ts#L37)

___

### getPhoneProvider

▸ **getPhoneProvider**(`phone`): `Promise`<`number`\>

**`Memberof`**

Detector

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | `string` |

#### Returns

`Promise`<`number`\>

Promise<number>

#### Defined in

[apis/detector/detector.compat.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detector.compat.ts#L27)

___

### create

▸ `Static` **create**(): [`Detector`](index.QIWI.Detector.md)

**`Static`**

**`Memberof`**

Detector

#### Returns

[`Detector`](index.QIWI.Detector.md)

Detector

#### Inherited from

[Detector](index.QIWI.Detector.md).[create](index.QIWI.Detector.md#create)

#### Defined in

[apis/detector/detector.ts:51](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detector.ts#L51)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Static`**

**`Memberof`**

Detector

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

SimpleJsonHttp

#### Inherited from

[Detector](index.QIWI.Detector.md).[httpClientFactory](index.QIWI.Detector.md#httpclientfactory)

#### Defined in

[apis/detector/detector.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detector.ts#L25)
