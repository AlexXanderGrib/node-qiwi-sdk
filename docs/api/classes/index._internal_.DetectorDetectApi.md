[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / DetectorDetectApi

# Class: DetectorDetectApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).DetectorDetectApi

**`Export`**

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

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md) |

#### Inherited from

[DetectorApi](index._internal_.DetectorApi.md).[constructor](index._internal_.DetectorApi.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/index._internal_.ApiClassOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[DetectorApi](index._internal_.DetectorApi.md).[_options](index._internal_.DetectorApi.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Memberof`**

ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Inherited from

DetectorApi.http

#### Defined in

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L55)

## Methods

### \_extractProvider

▸ `Protected` **_extractProvider**(`response`): `number`

Вытаскивает ID провайдера из объекта ответа

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Readonly`<`Record`<`string`, `unknown`\>\> |

#### Returns

`number`

ID провайдера

#### Defined in

[apis/detector/detect.api.ts:22](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detect.api.ts#L22)

___

### byCardNumber

▸ **byCardNumber**(`cardNumber`): `Promise`<`number`\>

Возвращает ID провайдера QIWI по номеру карты.
Используется для переводов на карту

**`Note`**

После ухода VISA и MasterCard из РФ стал работать хуже.
Советую использовать константу `Recipients.AnyRusCard` вместо вызова метода.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardNumber` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[apis/detector/detect.api.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detect.api.ts#L53)

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

[apis/detector/detect.api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/detector/detect.api.ts#L36)
