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
- [httpClientFactory](index.QIWI.Detector.md#httpclientfactory)

### Accessors

- [agent](index.QIWI.Detector.md#agent)
- [options](index.QIWI.Detector.md#options)

### Methods

- [create](index.QIWI.Detector.md#create)

## Constructors

### constructor

• **new Detector**(`[options]?`)

Creates an instance of P2p.

**`memberof`** P2p

#### Parameters

| Name | Type |
| :------ | :------ |
| `[options]?` | `Partial`<[`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)\> |

#### Overrides

[ApiClass](index._internal_.ApiClass.md).[constructor](index._internal_.ApiClass.md#constructor)

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:34](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L34)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[ApiClass](index._internal_.ApiClass.md).[_options](index._internal_.ApiClass.md#_options)

#### Defined in

dist/cjs/options-wrapper.d.ts:16

___

### detectProvider

• `Readonly` **detectProvider**: [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md)

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L35)

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md)

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:12](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L12)

___

### httpClientFactory

▪ `Static` **httpClientFactory**: () => [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Type declaration

▸ (): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`static`**

**`memberof`** Detector

##### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L20)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

[dist/cjs/apis/api.d.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L19)

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

[dist/cjs/apis/api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L25)

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

dist/cjs/options-wrapper.d.ts:40

## Methods

### create

▸ `Static` **create**(): [`Detector`](index.QIWI.Detector.md)

**`static`**

**`memberof`** Detector

#### Returns

[`Detector`](index.QIWI.Detector.md)

{Detector}

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L28)
