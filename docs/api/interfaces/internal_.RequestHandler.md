[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RequestHandler

# Interface: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals\>

[<internal>](../modules/internal_.md).RequestHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | [`ParamsDictionary`](internal_.ParamsDictionary.md) |
| `ResBody` | `any` |
| `ReqBody` | `any` |
| `ReqQuery` | [`Query`](../modules/internal_.md#query) |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

## Hierarchy

- [`RequestHandler`](internal_.RequestHandler-1.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

  ↳ **`RequestHandler`**

## Callable

### RequestHandler

▸ **RequestHandler**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\> |
| `res` | [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `number`\> |
| `next` | [`NextFunction`](internal_.NextFunction.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:66
