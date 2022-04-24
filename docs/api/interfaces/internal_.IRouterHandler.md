[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IRouterHandler

# Interface: IRouterHandler<T, Route\>

[<internal>](../modules/internal_.md).IRouterHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Route` | extends `string` = `string` |

## Callable

### IRouterHandler

▸ **IRouterHandler**(...`handlers`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`RequestHandler`](internal_.RequestHandler-1.md)<[`RouteParameters`](../modules/internal_.md#routeparameters)<`Route`\>, `any`, `any`, [`ParsedQs`](internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:178

### IRouterHandler

▸ **IRouterHandler**(...`handlers`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`RequestHandlerParams`](../modules/internal_.md#requesthandlerparams)<[`RouteParameters`](../modules/internal_.md#routeparameters)<`Route`\>, `any`, `any`, [`ParsedQs`](internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:179

### IRouterHandler

▸ **IRouterHandler**<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(...`handlers`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | [`RouteParameters`](../modules/internal_.md#routeparameters)<`Route`\> |
| `ResBody` | `any` |
| `ReqBody` | `any` |
| `ReqQuery` | [`ParsedQs`](internal_.ParsedQs.md) |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`RequestHandler`](internal_.RequestHandler-1.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:180

### IRouterHandler

▸ **IRouterHandler**<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(...`handlers`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | [`RouteParameters`](../modules/internal_.md#routeparameters)<`Route`\> |
| `ResBody` | `any` |
| `ReqBody` | `any` |
| `ReqQuery` | [`ParsedQs`](internal_.ParsedQs.md) |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`RequestHandlerParams`](../modules/internal_.md#requesthandlerparams)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:190

### IRouterHandler

▸ **IRouterHandler**<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(...`handlers`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | [`ParamsDictionary`](internal_.ParamsDictionary.md) |
| `ResBody` | `any` |
| `ReqBody` | `any` |
| `ReqQuery` | [`ParsedQs`](internal_.ParsedQs.md) |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`RequestHandler`](internal_.RequestHandler-1.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:200

### IRouterHandler

▸ **IRouterHandler**<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(...`handlers`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | [`ParamsDictionary`](internal_.ParamsDictionary.md) |
| `ResBody` | `any` |
| `ReqBody` | `any` |
| `ReqQuery` | [`ParsedQs`](internal_.ParsedQs.md) |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...handlers` | [`RequestHandlerParams`](../modules/internal_.md#requesthandlerparams)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:210
