[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IRouterMatcher

# Interface: IRouterMatcher<T, Method\>

[<internal>](../modules/internal_.md).IRouterMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Method` | extends ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"`` = `any` |

## Callable

### IRouterMatcher

▸ **IRouterMatcher**<`Route`, `P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(`path`, ...`handlers`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Route` | extends `string` |
| `P` | [`RouteParameters`](../modules/internal_.md#routeparameters)<`Route`\> |
| `ResBody` | `any` |
| `ReqBody` | `any` |
| `ReqQuery` | [`ParsedQs`](internal_.ParsedQs.md) |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Route` |
| `...handlers` | [`RequestHandler`](internal_.RequestHandler-1.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:126

### IRouterMatcher

▸ **IRouterMatcher**<`Path`, `P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(`path`, ...`handlers`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |
| `P` | [`RouteParameters`](../modules/internal_.md#routeparameters)<`Path`\> |
| `ResBody` | `any` |
| `ReqBody` | `any` |
| `ReqQuery` | [`ParsedQs`](internal_.ParsedQs.md) |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `...handlers` | [`RequestHandlerParams`](../modules/internal_.md#requesthandlerparams)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:139

### IRouterMatcher

▸ **IRouterMatcher**<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(`path`, ...`handlers`): `T`

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
| `path` | [`PathParams`](../modules/internal_.md#pathparams) |
| `...handlers` | [`RequestHandler`](internal_.RequestHandler-1.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:152

### IRouterMatcher

▸ **IRouterMatcher**<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>(`path`, ...`handlers`): `T`

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
| `path` | [`PathParams`](../modules/internal_.md#pathparams) |
| `...handlers` | [`RequestHandlerParams`](../modules/internal_.md#requesthandlerparams)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>[] |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:163

### IRouterMatcher

▸ **IRouterMatcher**(`path`, `subApplication`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathParams`](../modules/internal_.md#pathparams) |
| `subApplication` | [`Application`](internal_.Application.md)<[`Record`](../modules/internal_.md#record)<`string`, `any`\>\> |

#### Returns

`T`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:174
