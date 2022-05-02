[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / DetectorCompat

# Class: DetectorCompat

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).DetectorCompat

**`deprecated`** Используйте класс `Detector` и новые сигнатуры
методов

**`export`**

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
- [httpClientFactory](index.QIWI.DetectorCompat.md#httpclientfactory)

### Accessors

- [agent](index.QIWI.DetectorCompat.md#agent)
- [options](index.QIWI.DetectorCompat.md#options)

### Methods

- [getCardProvider](index.QIWI.DetectorCompat.md#getcardprovider)
- [getPhoneProvider](index.QIWI.DetectorCompat.md#getphoneprovider)
- [create](index.QIWI.DetectorCompat.md#create)

## Constructors

### constructor

• **new DetectorCompat**()

Creates an instance of DetectorCompat.

**`memberof`** DetectorCompat

#### Overrides

[Detector](index.QIWI.Detector.md).[constructor](index.QIWI.Detector.md#constructor)

#### Defined in

[dist/cjs/apis/detector/detector.compat.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.compat.d.ts#L16)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[Detector](index.QIWI.Detector.md).[_options](index.QIWI.Detector.md#_options)

#### Defined in

dist/cjs/options-wrapper.d.ts:16

___

### detectProvider

• `Readonly` **detectProvider**: [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md)

#### Inherited from

[Detector](index.QIWI.Detector.md).[detectProvider](index.QIWI.Detector.md#detectprovider)

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L35)

___

### DetectApi

▪ `Static` `Readonly` **DetectApi**: typeof [`DetectorDetectApi`](index._internal_.DetectorDetectApi.md)

#### Inherited from

[Detector](index.QIWI.Detector.md).[DetectApi](index.QIWI.Detector.md#detectapi)

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

#### Inherited from

[Detector](index.QIWI.Detector.md).[httpClientFactory](index.QIWI.Detector.md#httpclientfactory)

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:20](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L20)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

Detector.agent

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

Detector.agent

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

Detector.options

#### Defined in

dist/cjs/options-wrapper.d.ts:40

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

[dist/cjs/apis/detector/detector.compat.d.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.compat.d.ts#L30)

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

[dist/cjs/apis/detector/detector.compat.d.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.compat.d.ts#L23)

___

### create

▸ `Static` **create**(): [`Detector`](index.QIWI.Detector.md)

**`static`**

**`memberof`** Detector

#### Returns

[`Detector`](index.QIWI.Detector.md)

{Detector}

#### Inherited from

[Detector](index.QIWI.Detector.md).[create](index.QIWI.Detector.md#create)

#### Defined in

[dist/cjs/apis/detector/detector.d.ts:28](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detector.d.ts#L28)
