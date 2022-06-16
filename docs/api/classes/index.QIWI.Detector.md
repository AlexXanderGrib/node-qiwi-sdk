[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / Detector

# Class: Detector

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).Detector

API получения ID провайдера QIWI по Номеру Телефона/Карте

**`export`**

## Hierarchy

- [`ApiClass`](index._internal_.ApiClass.md)<[`DetectorApiOptions`](../modules/index.QIWI.md#detectorapioptions)\>

  ↳ **`Detector`**

  ↳↳ [`DetectorCompat`](index.QIWI.DetectorCompat.md)

## Table of contents

### Constructors

- [constructor](index.QIWI.Detector.md#constructor)

### Properties

- [\_options](index.QIWI.Detector.md#_options)
- [detectProvider](index.QIWI.Detector.md#detectprovider)
- [DetectApi](index.QIWI.Detector.md#detectapi)

### Accessors

- [agent](index.QIWI.Detector.md#agent)
- [options](index.QIWI.Detector.md#options)

### Methods

- [create](index.QIWI.Detector.md#create)
- [httpClientFactory](index.QIWI.Detector.md#httpclientfactory)

## Constructors

### constructor

• **new Detector**(`[options]?`)

Creates an instance of P2p.

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `[options]` | `Partial`<[`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)\> |

#### Overrides

[ApiClass](index._internal_.ApiClass.md).[constructor](index._internal_.ApiClass.md#constructor)

#### Defined in

[apis/detector/detector.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/detector/detector.ts#L57)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[ApiClass](index._internal_.ApiClass.md).[_options](index._internal_.ApiClass.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/options-wrapper.ts#L16)

___

### detectProvider

• `Readonly` **detectProvider**: [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md)

#### Defined in

[apis/detector/detector.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/detector/detector.ts#L63)

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md) = `DetectorDetectApi`

#### Defined in

[apis/detector/detector.ts:13](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/detector/detector.ts#L13)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

[apis/api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/api.ts#L23)

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

[apis/api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/api.ts#L32)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

ApiClass.options

#### Defined in

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/options-wrapper.ts#L44)

## Methods

### create

▸ `Static` **create**(): [`Detector`](index.QIWI.Detector.md)

**`static`**

**`memberof`** Detector

#### Returns

[`Detector`](index.QIWI.Detector.md)

{Detector}

#### Defined in

[apis/detector/detector.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/detector/detector.ts#L48)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`static`**

**`memberof`** Detector

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Defined in

[apis/detector/detector.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/detector/detector.ts#L22)
