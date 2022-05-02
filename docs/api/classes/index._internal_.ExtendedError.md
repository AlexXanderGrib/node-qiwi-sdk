[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ExtendedError

# Class: ExtendedError

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ExtendedError

Ошибка, которую можно преобразовать в JSON

**`export`**

## Hierarchy

- `Error`

  ↳ **`ExtendedError`**

  ↳↳ [`WalletApiError`](index.QIWI.WalletApiError.md)

  ↳↳ [`WalletAuthorizationError`](index.QIWI.WalletAuthorizationError.md)

  ↳↳ [`WalletApiShortError`](index.QIWI.WalletApiShortError.md)

  ↳↳ [`P2pApiError`](index.QIWI.P2pApiError.md)

  ↳↳ [`P2pAuthorizationError`](index.QIWI.P2pAuthorizationError.md)

  ↳↳ [`P2pBillNotificationError`](index.QIWI.P2pBillNotificationError.md)

  ↳↳ [`DetectorError`](index.QIWI.DetectorError.md)

## Table of contents

### Constructors

- [constructor](index._internal_.ExtendedError.md#constructor)

### Properties

- [name](index._internal_.ExtendedError.md#name)

### Accessors

- [[toStringTag]](index._internal_.ExtendedError.md#[tostringtag])

### Methods

- [toJSON](index._internal_.ExtendedError.md#tojson)

## Constructors

### constructor

• **new ExtendedError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

• **new ExtendedError**(`message?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:30

## Properties

### name

• **name**: `string`

#### Overrides

Error.name

#### Defined in

[dist/cjs/error.d.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/error.d.ts#L9)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

**`readonly`**

**`memberof`** ExtendedError

#### Returns

`string`

#### Defined in

[dist/cjs/error.d.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/error.d.ts#L24)

## Methods

### toJSON

▸ **toJSON**(): `Error`

**`memberof`** ExtendedError

#### Returns

`Error`

{Error}

#### Defined in

[dist/cjs/error.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/26a7b1c/dist/cjs/error.d.ts#L16)
