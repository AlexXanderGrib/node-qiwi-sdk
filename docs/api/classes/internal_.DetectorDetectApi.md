[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DetectorDetectApi

# Class: DetectorDetectApi

[<internal>](../modules/internal_.md).DetectorDetectApi

**`export`**

## Hierarchy

- [`DetectorApi`](internal_.DetectorApi.md)

  ↳ **`DetectorDetectApi`**

## Table of contents

### Constructors

- [constructor](internal_.DetectorDetectApi.md#constructor)

### Properties

- [\_options](internal_.DetectorDetectApi.md#_options)

### Accessors

- [http](internal_.DetectorDetectApi.md#http)

### Methods

- [\_extractProvider](internal_.DetectorDetectApi.md#_extractprovider)
- [byCardNumber](internal_.DetectorDetectApi.md#bycardnumber)
- [byPhone](internal_.DetectorDetectApi.md#byphone)

## Constructors

### constructor

• **new DetectorDetectApi**(`_options`)

Creates an instance of DetectorApi.

**`memberof`** DetectorApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md) |

#### Inherited from

[DetectorApi](internal_.DetectorApi.md).[constructor](internal_.DetectorApi.md#constructor)

#### Defined in

[src/apis/detector/api.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/detector/api.ts#L25)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md)

#### Inherited from

[DetectorApi](internal_.DetectorApi.md).[_options](internal_.DetectorApi.md#_options)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** DetectorApi

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

#### Inherited from

DetectorApi.http

#### Defined in

[src/apis/detector/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/detector/api.ts#L16)

## Methods

### \_extractProvider

▸ `Private` **_extractProvider**(`response`): `number`

Вытаскивает ID провайдера из объекта ответа

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`AnyResponse`](../modules/QIWI.md#anyresponse) |

#### Returns

`number`

ID провайдера

#### Defined in

[src/apis/detector/detect.api.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/detector/detect.api.ts#L19)

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

[src/apis/detector/detect.api.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/detector/detect.api.ts#L46)

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

[src/apis/detector/detect.api.ts:31](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/detector/detect.api.ts#L31)
