[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NextFunction

# Interface: NextFunction

[<internal>](../modules/internal_.md).NextFunction

## Callable

### NextFunction

▸ **NextFunction**(`err?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:35

### NextFunction

▸ **NextFunction**(`deferToNext`): `void`

"Break-out" of a router by calling {next('router')};

**`see`** {https://expressjs.com/en/guide/using-middleware.html#middleware.router}

#### Parameters

| Name | Type |
| :------ | :------ |
| `deferToNext` | ``"router"`` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:40

### NextFunction

▸ **NextFunction**(`deferToNext`): `void`

"Break-out" of a route by calling {next('route')};

**`see`** {https://expressjs.com/en/guide/using-middleware.html#middleware.application}

#### Parameters

| Name | Type |
| :------ | :------ |
| `deferToNext` | ``"route"`` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:45
