[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Application

# Interface: Application<Locals\>

[<internal>](../modules/internal_.md).Application

## Type parameters

| Name | Type |
| :------ | :------ |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

## Hierarchy

- [`EventEmitter`](../classes/internal_.EventEmitter-1.md)

- [`IRouter`](internal_.IRouter.md)

- [`Application`](internal_.Application-1.md)

  ↳ **`Application`**

## Callable

### Application

▸ **Application**(`req`, `res`): `any`

Express instance itself is a request handler, which could be invoked without
third argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IncomingMessage`](../classes/internal_.IncomingMessage.md) \| [`Request`](internal_.Request.md)<[`ParamsDictionary`](internal_.ParamsDictionary.md), `any`, `any`, [`ParsedQs`](internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\> |
| `res` | [`ServerResponse`](../classes/internal_.ServerResponse.md) \| [`Response`](internal_.Response.md)<`any`, [`Record`](../modules/internal_.md#record)<`string`, `any`\>, `number`\> |

#### Returns

`any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1052

### Application

▸ **Application**(`req`, `res`, `next`): `void`

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

- [\_router](internal_.Application.md#_router)
- [all](internal_.Application.md#all)
- [checkout](internal_.Application.md#checkout)
- [connect](internal_.Application.md#connect)
- [copy](internal_.Application.md#copy)
- [delete](internal_.Application.md#delete)
- [get](internal_.Application.md#get)
- [head](internal_.Application.md#head)
- [locals](internal_.Application.md#locals)
- [lock](internal_.Application.md#lock)
- [m-search](internal_.Application.md#m-search)
- [map](internal_.Application.md#map)
- [merge](internal_.Application.md#merge)
- [mkactivity](internal_.Application.md#mkactivity)
- [mkcol](internal_.Application.md#mkcol)
- [mountpath](internal_.Application.md#mountpath)
- [move](internal_.Application.md#move)
- [notify](internal_.Application.md#notify)
- [options](internal_.Application.md#options)
- [patch](internal_.Application.md#patch)
- [post](internal_.Application.md#post)
- [propfind](internal_.Application.md#propfind)
- [proppatch](internal_.Application.md#proppatch)
- [purge](internal_.Application.md#purge)
- [put](internal_.Application.md#put)
- [report](internal_.Application.md#report)
- [resource](internal_.Application.md#resource)
- [router](internal_.Application.md#router)
- [routes](internal_.Application.md#routes)
- [search](internal_.Application.md#search)
- [settings](internal_.Application.md#settings)
- [stack](internal_.Application.md#stack)
- [subscribe](internal_.Application.md#subscribe)
- [trace](internal_.Application.md#trace)
- [unlock](internal_.Application.md#unlock)
- [unsubscribe](internal_.Application.md#unsubscribe)
- [use](internal_.Application.md#use)

### Methods

- [addListener](internal_.Application.md#addlistener)
- [defaultConfiguration](internal_.Application.md#defaultconfiguration)
- [disable](internal_.Application.md#disable)
- [disabled](internal_.Application.md#disabled)
- [emit](internal_.Application.md#emit)
- [enable](internal_.Application.md#enable)
- [enabled](internal_.Application.md#enabled)
- [engine](internal_.Application.md#engine)
- [eventNames](internal_.Application.md#eventnames)
- [getMaxListeners](internal_.Application.md#getmaxlisteners)
- [init](internal_.Application.md#init)
- [listen](internal_.Application.md#listen)
- [listenerCount](internal_.Application.md#listenercount)
- [listeners](internal_.Application.md#listeners)
- [off](internal_.Application.md#off)
- [on](internal_.Application.md#on)
- [once](internal_.Application.md#once)
- [param](internal_.Application.md#param)
- [path](internal_.Application.md#path)
- [prependListener](internal_.Application.md#prependlistener)
- [prependOnceListener](internal_.Application.md#prependoncelistener)
- [rawListeners](internal_.Application.md#rawlisteners)
- [removeAllListeners](internal_.Application.md#removealllisteners)
- [removeListener](internal_.Application.md#removelistener)
- [render](internal_.Application.md#render)
- [route](internal_.Application.md#route)
- [set](internal_.Application.md#set)
- [setMaxListeners](internal_.Application.md#setmaxlisteners)

## Properties

### \_router

• **\_router**: `any`

Used to get all registered routes in Express Application

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1228

___

### all

• **all**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, ``"all"``\>

Special-cased "all" method, applying the given route `path`,
middleware, and callback to _every_ HTTP method.

#### Inherited from

[IRouter](internal_.IRouter.md).[all](internal_.IRouter.md#all)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:262

___

### checkout

• **checkout**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[checkout](internal_.IRouter.md#checkout)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:271

___

### connect

• **connect**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[connect](internal_.IRouter.md#connect)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:272

___

### copy

• **copy**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[copy](internal_.IRouter.md#copy)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:273

___

### delete

• **delete**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, ``"delete"``\>

#### Inherited from

[IRouter](internal_.IRouter.md).[delete](internal_.IRouter.md#delete)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:266

___

### get

• **get**: (`name`: `string`) => `any` & [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Overrides

[IRouter](internal_.IRouter.md).[get](internal_.IRouter.md#get)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1114

___

### head

• **head**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, ``"head"``\>

#### Inherited from

[IRouter](internal_.IRouter.md).[head](internal_.IRouter.md#head)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:269

___

### locals

• **locals**: `Locals`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1213

___

### lock

• **lock**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[lock](internal_.IRouter.md#lock)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:274

___

### m-search

• **m-search**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[m-search](internal_.IRouter.md#m-search)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:279

___

### map

• **map**: `any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1211

___

### merge

• **merge**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[merge](internal_.IRouter.md#merge)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:275

___

### mkactivity

• **mkactivity**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[mkactivity](internal_.IRouter.md#mkactivity)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:276

___

### mkcol

• **mkcol**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[mkcol](internal_.IRouter.md#mkcol)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:277

___

### mountpath

• **mountpath**: `string` \| `string`[]

The app.mountpath property contains one or more path patterns on which a sub-app was mounted.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1246

___

### move

• **move**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[move](internal_.IRouter.md#move)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:278

___

### notify

• **notify**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[notify](internal_.IRouter.md#notify)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:280

___

### options

• **options**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, ``"options"``\>

#### Inherited from

[IRouter](internal_.IRouter.md).[options](internal_.IRouter.md#options)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:268

___

### patch

• **patch**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, ``"patch"``\>

#### Inherited from

[IRouter](internal_.IRouter.md).[patch](internal_.IRouter.md#patch)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:267

___

### post

• **post**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, ``"post"``\>

#### Inherited from

[IRouter](internal_.IRouter.md).[post](internal_.IRouter.md#post)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:264

___

### propfind

• **propfind**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[propfind](internal_.IRouter.md#propfind)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:281

___

### proppatch

• **proppatch**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[proppatch](internal_.IRouter.md#proppatch)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:282

___

### purge

• **purge**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[purge](internal_.IRouter.md#purge)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:283

___

### put

• **put**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, ``"put"``\>

#### Inherited from

[IRouter](internal_.IRouter.md).[put](internal_.IRouter.md#put)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:265

___

### report

• **report**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[report](internal_.IRouter.md#report)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:284

___

### resource

• **resource**: `any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1209

___

### router

• **router**: `string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1205

___

### routes

• **routes**: `any`

The app.routes object houses all of the routes defined mapped by the
associated HTTP verb. This object may be used for introspection
capabilities, for example Express uses this internally not only for
routing but to provide default OPTIONS behaviour unless app.options()
is used. Your application or framework may also remove routes by
simply by removing them from this object.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1223

___

### search

• **search**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[search](internal_.IRouter.md#search)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:285

___

### settings

• **settings**: `any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1207

___

### stack

• **stack**: `any`[]

Stack of configured routes

#### Inherited from

[IRouter](internal_.IRouter.md).[stack](internal_.IRouter.md#stack)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:298

___

### subscribe

• **subscribe**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[subscribe](internal_.IRouter.md#subscribe)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:286

___

### trace

• **trace**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[trace](internal_.IRouter.md#trace)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:287

___

### unlock

• **unlock**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[unlock](internal_.IRouter.md#unlock)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:288

___

### unsubscribe

• **unsubscribe**: [`IRouterMatcher`](internal_.IRouterMatcher.md)<[`Application`](internal_.Application.md)<`Locals`\>, `any`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[unsubscribe](internal_.IRouter.md#unsubscribe)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:289

___

### use

• **use**: [`ApplicationRequestHandler`](../modules/internal_.md#applicationrequesthandler)<[`Application`](internal_.Application.md)<`Locals`\>\>

#### Overrides

[IRouter](internal_.IRouter.md).[use](internal_.IRouter.md#use)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1230

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Application`](internal_.Application.md)<`Locals`\>

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[addListener](../classes/internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:327

___

### defaultConfiguration

▸ **defaultConfiguration**(): `void`

Initialize application configuration.

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1066

___

### disable

▸ **disable**(`setting`): [`Application`](internal_.Application.md)<`Locals`\>

Disable `setting`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1165

___

### disabled

▸ **disabled**(`setting`): `boolean`

Check if `setting` is disabled.

   app.disabled('foo')
   // => true

   app.enable('foo')
   app.disabled('foo')
   // => false

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1159

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[emit](../classes/internal_.EventEmitter-1.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:583

___

### enable

▸ **enable**(`setting`): [`Application`](internal_.Application.md)<`Locals`\>

Enable `setting`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1162

___

### enabled

▸ **enabled**(`setting`): `boolean`

Check if `setting` is enabled (truthy).

   app.enabled('foo')
   // => false

   app.enable('foo')
   app.enabled('foo')
   // => true

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1147

___

### engine

▸ **engine**(`ext`, `fn`): [`Application`](internal_.Application.md)<`Locals`\>

Register the given template engine callback `fn`
as `ext`.

By default will `require()` the engine based on the
file extension. For example if you try to render
a "foo.jade" file Express will invoke the following internally:

    app.engine('jade', require('jade').__express);

For engines that do not provide `.__express` out of the box,
or if you wish to "map" a different extension to the template engine
you may use this method. For example mapping the EJS template engine to
".html" files:

    app.engine('html', require('ejs').renderFile);

In this case EJS provides a `.renderFile()` method with
the same signature that Express expects: `(path, options, callback)`,
though note that it aliases this method as `ejs.__express` internally
so if you're using ".ejs" extensions you dont need to do anything.

Some template engines do not follow this convention, the
[Consolidate.js](https://github.com/visionmedia/consolidate.js)
library was created to map all of node's popular template
engines to follow this convention, thus allowing them to
work seamlessly within Express.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `string` |
| `fn` | (`path`: `string`, `options`: `object`, `callback`: (`e`: `any`, `rendered?`: `string`) => `void`) => `void` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1096

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[eventNames](../classes/internal_.EventEmitter-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../classes/internal_.IncomingMessage.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[getMaxListeners](../classes/internal_.EventEmitter-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### init

▸ **init**(): `void`

Initialize the server.

  - setup default configuration
  - setup default middleware
  - setup route reflection methods

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1061

___

### listen

▸ **listen**(`port`, `hostname`, `backlog`, `callback?`): [`Server`](../classes/internal_.Server.md)

Listen for connections.

A node `http.Server` is returned, with this
application (which is a `Function`) as its
callback. If you wish to create both an HTTP
and HTTPS server you may do so with the "http"
and "https" modules as shown here:

   var http = require('http')
     , https = require('https')
     , express = require('express')
     , app = express();

   http.createServer(app).listen(80);
   https.createServer({ ... }, app).listen(443);

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `hostname` | `string` |
| `backlog` | `number` |
| `callback?` | () => `void` |

#### Returns

[`Server`](../classes/internal_.Server.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1198

▸ **listen**(`port`, `hostname`, `callback?`): [`Server`](../classes/internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `hostname` | `string` |
| `callback?` | () => `void` |

#### Returns

[`Server`](../classes/internal_.Server.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1199

▸ **listen**(`port`, `callback?`): [`Server`](../classes/internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `callback?` | () => `void` |

#### Returns

[`Server`](../classes/internal_.Server.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1200

▸ **listen**(`callback?`): [`Server`](../classes/internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

[`Server`](../classes/internal_.Server.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1201

▸ **listen**(`path`, `callback?`): [`Server`](../classes/internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback?` | () => `void` |

#### Returns

[`Server`](../classes/internal_.Server.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1202

▸ **listen**(`handle`, `listeningListener?`): [`Server`](../classes/internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](../classes/internal_.Server.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1203

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[listenerCount](../classes/internal_.EventEmitter-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:589

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[listeners](../classes/internal_.EventEmitter-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`Application`](internal_.Application.md)<`Locals`\>

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[off](../classes/internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `callback`): `this`

The mount event is fired on a sub-app, when it is mounted on a parent app.
The parent app is passed to the callback function.

NOTE:
Sub-apps will:
 - Not inherit the value of settings that have a default value. You must set the value in the sub-app.
 - Inherit the value of settings with no default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | (`parent`: [`Application`](internal_.Application.md)<[`Record`](../modules/internal_.md#record)<`string`, `any`\>\>) => `void` |

#### Returns

`this`

#### Overrides

[EventEmitter](../classes/internal_.EventEmitter-1.md).[on](../classes/internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1241

___

### once

▸ **once**(`eventName`, `listener`): [`Application`](internal_.Application.md)<`Locals`\>

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[once](../classes/internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:387

___

### param

▸ **param**(`name`, `handler`): [`Application`](internal_.Application.md)<`Locals`\>

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
| `name` | `string` \| `string`[] |
| `handler` | [`RequestParamHandler`](../modules/internal_.md#requestparamhandler) |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Overrides

[IRouter](internal_.IRouter.md).[param](internal_.IRouter.md#param)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1116

▸ **param**(`callback`): [`Application`](internal_.Application.md)<`Locals`\>

Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()

**`deprecated`** since version 4.11

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`name`: `string`, `matcher`: `RegExp`) => [`RequestParamHandler`](../modules/internal_.md#requestparamhandler) |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Overrides

[IRouter](internal_.IRouter.md).[param](internal_.IRouter.md#param)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1123

___

### path

▸ **path**(): `string`

Return the app's absolute pathname
based on the parent(s) that have
mounted it.

For example if the application was
mounted as "/admin", which itself
was mounted as "/blog" then the
return value would be "/blog/admin".

#### Returns

`string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1135

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Application`](internal_.Application.md)<`Locals`\>

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[prependListener](../classes/internal_.EventEmitter-1.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Application`](internal_.Application.md)<`Locals`\>

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[prependOnceListener](../classes/internal_.EventEmitter-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:623

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[rawListeners](../classes/internal_.EventEmitter-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Application`](internal_.Application.md)<`Locals`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[removeAllListeners](../classes/internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Application`](internal_.Application.md)<`Locals`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[removeListener](../classes/internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:467

___

### render

▸ **render**(`name`, `options?`, `callback?`): `void`

Render the given view `name` name with `options`
and a callback accepting an error and the
rendered template string.

Example:

   app.render('email', { name: 'Tobi' }, function(err, html){
     // ...
   })

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `object` |
| `callback?` | (`err`: `Error`, `html`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1178

▸ **render**(`name`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | (`err`: `Error`, `html`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1179

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

#### Inherited from

[IRouter](internal_.IRouter.md).[route](internal_.IRouter.md#route)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:293

▸ **route**(`prefix`): [`IRoute`](internal_.IRoute.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | [`PathParams`](../modules/internal_.md#pathparams) |

#### Returns

[`IRoute`](internal_.IRoute.md)<`string`\>

#### Inherited from

[IRouter](internal_.IRouter.md).[route](internal_.IRouter.md#route)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:294

___

### set

▸ **set**(`setting`, `val`): [`Application`](internal_.Application.md)<`Locals`\>

Assign `setting` to `val`, or return `setting`'s value.

   app.set('foo', 'bar');
   app.get('foo');
   // => "bar"
   app.set('foo', ['bar', 'baz']);
   app.get('foo');
   // => ["bar", "baz"]

Mounted servers inherit their parent server's settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `string` |
| `val` | `any` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1113

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Application`](internal_.Application.md)<`Locals`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Application`](internal_.Application.md)<`Locals`\>

#### Inherited from

[EventEmitter](../classes/internal_.EventEmitter-1.md).[setMaxListeners](../classes/internal_.EventEmitter-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493
