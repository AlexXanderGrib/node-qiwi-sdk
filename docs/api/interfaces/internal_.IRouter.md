[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IRouter

# Interface: IRouter

[<internal>](../modules/internal_.md).IRouter

## Hierarchy

- [`RequestHandler`](internal_.RequestHandler-1.md)

  ↳ **`IRouter`**

  ↳↳ [`Application`](internal_.Application.md)

## Callable

### IRouter

▸ **IRouter**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Request`](internal_.Request.md)<[`ParamsDictionary`](internal_.ParamsDictionary.md), `any`, `any`, [`ParsedQs`](internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\> |
| `res` | [`Response`](internal_.Response.md)<`any`, [`Record`](../modules/internal_.md#record)<`string`, `any`\>, `number`\> |
| `next` | [`NextFunction`](internal_.NextFunction.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:66

## Table of contents

### Properties

- [all](internal_.IRouter.md#all)
- [checkout](internal_.IRouter.md#checkout)
- [connect](internal_.IRouter.md#connect)
- [copy](internal_.IRouter.md#copy)
- [delete](internal_.IRouter.md#delete)
- [get](internal_.IRouter.md#get)
- [head](internal_.IRouter.md#head)
- [lock](internal_.IRouter.md#lock)
- [m-search](internal_.IRouter.md#m-search)
- [merge](internal_.IRouter.md#merge)
- [mkactivity](internal_.IRouter.md#mkactivity)
- [mkcol](internal_.IRouter.md#mkcol)
- [move](internal_.IRouter.md#move)
- [notify](internal_.IRouter.md#notify)
- [options](internal_.IRouter.md#options)
- [patch](internal_.IRouter.md#patch)
- [post](internal_.IRouter.md#post)
- [propfind](internal_.IRouter.md#propfind)
- [proppatch](internal_.IRouter.md#proppatch)
- [purge](internal_.IRouter.md#purge)
- [put](internal_.IRouter.md#put)
- [report](internal_.IRouter.md#report)
- [search](internal_.IRouter.md#search)
- [stack](internal_.IRouter.md#stack)
- [subscribe](internal_.IRouter.md#subscribe)
- [trace](internal_.IRouter.md#trace)
- [unlock](internal_.IRouter.md#unlock)
- [unsubscribe](internal_.IRouter.md#unsubscribe)
- [use](internal_.IRouter.md#use)

### Methods

- [param](internal_.IRouter.md#param)
- [route](internal_.IRouter.md#route)

## Properties

### all

• **all**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"all"``\>

Special-cased "all" method, applying the given route `path`,
middleware, and callback to _every_ HTTP method.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:262

___

### checkout

• **checkout**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:271

___

### connect

• **connect**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:272

___

### copy

• **copy**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:273

___

### delete

• **delete**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"delete"``\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:266

___

### get

• **get**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"get"``\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:263

___

### head

• **head**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"head"``\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:269

___

### lock

• **lock**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:274

___

### m-search

• **m-search**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:279

___

### merge

• **merge**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:275

___

### mkactivity

• **mkactivity**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:276

___

### mkcol

• **mkcol**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:277

___

### move

• **move**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:278

___

### notify

• **notify**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:280

___

### options

• **options**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"options"``\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:268

___

### patch

• **patch**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"patch"``\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:267

___

### post

• **post**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"post"``\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:264

___

### propfind

• **propfind**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:281

___

### proppatch

• **proppatch**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:282

___

### purge

• **purge**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:283

___

### put

• **put**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), ``"put"``\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:265

___

### report

• **report**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:284

___

### search

• **search**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:285

___

### stack

• **stack**: `any`[]

Stack of configured routes

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:298

___

### subscribe

• **subscribe**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:286

___

### trace

• **trace**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:287

___

### unlock

• **unlock**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:288

___

### unsubscribe

• **unsubscribe**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:289

___

### use

• **use**: [`IRouterHandler`](internal_.IRouterHandler.md)<[`IRouter`](internal_.IRouter.md), `string`\> & [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`IRouter`](internal_.IRouter.md), `any`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:291

## Methods

### param

▸ **param**(`name`, `handler`): [`IRouter`](internal_.IRouter.md)

Map the given param placeholder `name`(s) to the given callback(s).

Parameter mapping is used to provide pre-conditions to routes
which use normalized placeholders. For example a _:user_id_ parameter
could automatically load a user's information from the database without
any additional code,

The callback uses the samesignature as middleware, the only differencing
being that the value of the placeholder is passed, in this case the _id_
of the user. Once the `next()` function is invoked, just like middleware
it will continue on to execute the route, or subsequent parameter functions.

     app.param('user_id', function(req, res, next, id){
       User.find(id, function(err, user){
         if (err) {
           next(err);
         } else if (user) {
           req.user = user;
           next();
         } else {
           next(new Error('failed to load user'));
         }
       });
     });

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | [`RequestParamHandler`](../modules/internal_.md#requestparamhandler) |

#### Returns

[`IRouter`](internal_.IRouter.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:249

▸ **param**(`callback`): [`IRouter`](internal_.IRouter.md)

Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()

**`deprecated`** since version 4.11

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`name`: `string`, `matcher`: `RegExp`) => [`RequestParamHandler`](../modules/internal_.md#requestparamhandler) |

#### Returns

[`IRouter`](internal_.IRouter.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:256

___

### route

▸ **route**<`T`\>(`prefix`): [`IRoute`](internal_.IRoute.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `T` |

#### Returns

[`IRoute`](internal_.IRoute.md)<`T`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:293

▸ **route**(`prefix`): [`IRoute`](internal_.IRoute.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | [`PathParams`](../modules/internal_.md#pathparams) |

#### Returns

[`IRoute`](internal_.IRoute.md)<`string`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:294
