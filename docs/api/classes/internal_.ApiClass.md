[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ApiClass

# Class: ApiClass<T\>

[<internal>](../modules/internal_.md).ApiClass

**`export`**

**`abstract`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md) = [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md) |

## Hierarchy

- **`ApiClass`**

  ↳ [`Wallet`](QIWI.Wallet.md)

  ↳ [`P2p`](QIWI.P2p.md)

  ↳ [`Detector`](QIWI.Detector.md)

## Table of contents

### Constructors

- [constructor](internal_.ApiClass.md#constructor)

### Properties

- [\_options](internal_.ApiClass.md#_options)

### Accessors

- [agent](internal_.ApiClass.md#agent)
- [options](internal_.ApiClass.md#options)

## Constructors

### constructor

• **new ApiClass**<`T`\>(`_options`)

Creates an instance of ApiClass.

**`memberof`** ApiClass

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md) = [`ApiClassOptions`](../interfaces/internal_.ApiClassOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `T` |

#### Defined in

[src/apis/api.ts:50](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L50)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: `T`

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

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

#### Defined in

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L30)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** ApiClass

#### Returns

`T`

#### Defined in

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L41)
