[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / DetectorDetectApi

# Class: DetectorDetectApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).DetectorDetectApi

**`export`**

## Hierarchy

- [`DetectorApi`](index._internal_.DetectorApi.md)

  ↳ **`DetectorDetectApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.DetectorDetectApi.md#constructor)

### Properties

- [\_options](index._internal_.DetectorDetectApi.md#_options)

### Accessors

- [http](index._internal_.DetectorDetectApi.md#http)

### Methods

- [\_extractProvider](index._internal_.DetectorDetectApi.md#_extractprovider)
- [byCardNumber](index._internal_.DetectorDetectApi.md#bycardnumber)
- [byPhone](index._internal_.DetectorDetectApi.md#byphone)

## Constructors

### constructor

• **new DetectorDetectApi**(`options`)

Creates an instance of OptionsWrapper.

**`memberof`** OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) |

#### Inherited from

[DetectorApi](index._internal_.DetectorApi.md).[constructor](index._internal_.DetectorApi.md#constructor)

#### Defined in

dist/cjs/options-wrapper.d.ts:22

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[DetectorApi](index._internal_.DetectorApi.md).[_options](index._internal_.DetectorApi.md#_options)

#### Defined in

dist/cjs/options-wrapper.d.ts:16

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** ApiSubclass

#### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Inherited from

DetectorApi.http

#### Defined in

[dist/cjs/apis/api.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/api.d.ts#L43)

## Methods

### \_extractProvider

▸ `Protected` **_extractProvider**(`response`): `number`

Вытаскивает ID провайдера из объекта ответа

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`AnyResponse`](../modules/index.QIWI.md#anyresponse) |

#### Returns

`number`

ID провайдера

#### Defined in

[dist/cjs/apis/detector/detect.api.d.ts:18](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detect.api.d.ts#L18)

___

### byCardNumber

▸ **byCardNumber**(`cardNumber`): `Promise`<`number`\>

Возвращает ID провайдера QIWI по номеру карты.
Используется для переводов на карту

**`note`** После ухода VISA и MasterCard из РФ стал работать хуже.
Советую использовать константу `Recipients.AnyRusCard` вместо вызова метода.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardNumber` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[dist/cjs/apis/detector/detect.api.d.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detect.api.d.ts#L35)

___

### byPhone

▸ **byPhone**(`phone`): `Promise`<`number`\>

Возвращает ID провайдера QIWI по номеру телефона.
Используется для пополнения на счёта мобильного

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[dist/cjs/apis/detector/detect.api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/apis/detector/detect.api.d.ts#L25)
