[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Response

# Interface: Response<ResBody, Locals, StatusCode\>

[<internal>](../modules/internal_.md).Response

## Type parameters

| Name | Type |
| :------ | :------ |
| `ResBody` | `any` |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> |
| `StatusCode` | extends `number` = `number` |

## Hierarchy

- [`ServerResponse`](../classes/internal_.ServerResponse.md)

- [`Response`](internal_.Response-1.md)

  ↳ **`Response`**

## Table of contents

### Properties

- [app](internal_.Response.md#app)
- [charset](internal_.Response.md#charset)
- [chunkedEncoding](internal_.Response.md#chunkedencoding)
- [connection](internal_.Response.md#connection)
- [destroyed](internal_.Response.md#destroyed)
- [finished](internal_.Response.md#finished)
- [headersSent](internal_.Response.md#headerssent)
- [json](internal_.Response.md#json)
- [jsonp](internal_.Response.md#jsonp)
- [locals](internal_.Response.md#locals)
- [req](internal_.Response.md#req)
- [send](internal_.Response.md#send)
- [sendDate](internal_.Response.md#senddate)
- [shouldKeepAlive](internal_.Response.md#shouldkeepalive)
- [socket](internal_.Response.md#socket)
- [statusCode](internal_.Response.md#statuscode)
- [statusMessage](internal_.Response.md#statusmessage)
- [useChunkedEncodingByDefault](internal_.Response.md#usechunkedencodingbydefault)
- [writable](internal_.Response.md#writable)
- [writableCorked](internal_.Response.md#writablecorked)
- [writableEnded](internal_.Response.md#writableended)
- [writableFinished](internal_.Response.md#writablefinished)
- [writableHighWaterMark](internal_.Response.md#writablehighwatermark)
- [writableLength](internal_.Response.md#writablelength)
- [writableObjectMode](internal_.Response.md#writableobjectmode)

### Methods

- [\_construct](internal_.Response.md#_construct)
- [\_destroy](internal_.Response.md#_destroy)
- [\_final](internal_.Response.md#_final)
- [\_write](internal_.Response.md#_write)
- [\_writev](internal_.Response.md#_writev)
- [addListener](internal_.Response.md#addlistener)
- [addTrailers](internal_.Response.md#addtrailers)
- [append](internal_.Response.md#append)
- [assignSocket](internal_.Response.md#assignsocket)
- [attachment](internal_.Response.md#attachment)
- [clearCookie](internal_.Response.md#clearcookie)
- [contentType](internal_.Response.md#contenttype)
- [cookie](internal_.Response.md#cookie)
- [cork](internal_.Response.md#cork)
- [destroy](internal_.Response.md#destroy)
- [detachSocket](internal_.Response.md#detachsocket)
- [download](internal_.Response.md#download)
- [emit](internal_.Response.md#emit)
- [end](internal_.Response.md#end)
- [eventNames](internal_.Response.md#eventnames)
- [flushHeaders](internal_.Response.md#flushheaders)
- [format](internal_.Response.md#format)
- [get](internal_.Response.md#get)
- [getHeader](internal_.Response.md#getheader)
- [getHeaderNames](internal_.Response.md#getheadernames)
- [getHeaders](internal_.Response.md#getheaders)
- [getMaxListeners](internal_.Response.md#getmaxlisteners)
- [hasHeader](internal_.Response.md#hasheader)
- [header](internal_.Response.md#header)
- [links](internal_.Response.md#links)
- [listenerCount](internal_.Response.md#listenercount)
- [listeners](internal_.Response.md#listeners)
- [location](internal_.Response.md#location)
- [off](internal_.Response.md#off)
- [on](internal_.Response.md#on)
- [once](internal_.Response.md#once)
- [pipe](internal_.Response.md#pipe)
- [prependListener](internal_.Response.md#prependlistener)
- [prependOnceListener](internal_.Response.md#prependoncelistener)
- [rawListeners](internal_.Response.md#rawlisteners)
- [redirect](internal_.Response.md#redirect)
- [removeAllListeners](internal_.Response.md#removealllisteners)
- [removeHeader](internal_.Response.md#removeheader)
- [removeListener](internal_.Response.md#removelistener)
- [render](internal_.Response.md#render)
- [sendFile](internal_.Response.md#sendfile)
- [sendStatus](internal_.Response.md#sendstatus)
- [sendfile](internal_.Response.md#sendfile-1)
- [set](internal_.Response.md#set)
- [setDefaultEncoding](internal_.Response.md#setdefaultencoding)
- [setHeader](internal_.Response.md#setheader)
- [setMaxListeners](internal_.Response.md#setmaxlisteners)
- [setTimeout](internal_.Response.md#settimeout)
- [status](internal_.Response.md#status)
- [type](internal_.Response.md#type)
- [uncork](internal_.Response.md#uncork)
- [vary](internal_.Response.md#vary)
- [write](internal_.Response.md#write)
- [writeContinue](internal_.Response.md#writecontinue)
- [writeHead](internal_.Response.md#writehead)
- [writeProcessing](internal_.Response.md#writeprocessing)

## Properties

### app

• **app**: [`Application`](internal_.Application.md)<[`Record`](../modules/internal_.md#record)<`string`, `any`\>\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1017

___

### charset

• **charset**: `string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1006

___

### chunkedEncoding

• **chunkedEncoding**: `boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[chunkedEncoding](../classes/internal_.ServerResponse.md#chunkedencoding)

#### Defined in

node_modules/@types/node/http.d.ts:328

___

### connection

• `Readonly` **connection**: ``null`` \| [`Socket`](../classes/internal_.Socket.md)

Aliases of `outgoingMessage.socket`

**`since`** v0.3.0

**`deprecated`** Since v15.12.0,v14.17.1 - Use `socket` instead.

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[connection](../classes/internal_.ServerResponse.md#connection)

#### Defined in

node_modules/@types/node/http.d.ts:346

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

**`since`** v8.0.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[destroyed](../classes/internal_.ServerResponse.md#destroyed)

#### Defined in

node_modules/@types/node/stream.d.ts:543

___

### finished

• **finished**: `boolean`

**`deprecated`** Use `writableEnded` instead.

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[finished](../classes/internal_.ServerResponse.md#finished)

#### Defined in

node_modules/@types/node/http.d.ts:335

___

### headersSent

• **headersSent**: `boolean`

Read-only. `true` if the headers were sent, otherwise `false`.

#### Overrides

[ServerResponse](../classes/internal_.ServerResponse.md).[headersSent](../classes/internal_.ServerResponse.md#headerssent)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:914

___

### json

• **json**: [`Send`](../modules/internal_.md#send)<`ResBody`, [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>\>

Send JSON response.

Examples:

    res.json(null);
    res.json({ user: 'tj' });
    res.status(500).json('oh noes!');
    res.status(404).json('I dont have that');

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:717

___

### jsonp

• **jsonp**: [`Send`](../modules/internal_.md#send)<`ResBody`, [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>\>

Send JSON response with JSONP callback support.

Examples:

    res.jsonp(null);
    res.jsonp({ user: 'tj' });
    res.status(500).jsonp('oh noes!');
    res.status(404).jsonp('I dont have that');

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:729

___

### locals

• **locals**: `Locals`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1004

___

### req

• **req**: [`Request`](internal_.Request.md)<[`ParamsDictionary`](internal_.ParamsDictionary.md), `any`, `any`, [`ParsedQs`](internal_.ParsedQs.md), [`Record`](../modules/internal_.md#record)<`string`, `any`\>\>

After middleware.init executed, Response will contain req property
See: express/lib/middleware/init.js

#### Overrides

[ServerResponse](../classes/internal_.ServerResponse.md).[req](../classes/internal_.ServerResponse.md#req)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1034

___

### send

• **send**: [`Send`](../modules/internal_.md#send)<`ResBody`, [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>\>

Send a response.

Examples:

    res.send(new Buffer('wahoo'));
    res.send({ some: 'json' });
    res.send('<p>some html</p>');
    res.status(404).send('Sorry, cant find that');

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:705

___

### sendDate

• **sendDate**: `boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[sendDate](../classes/internal_.ServerResponse.md#senddate)

#### Defined in

node_modules/@types/node/http.d.ts:331

___

### shouldKeepAlive

• **shouldKeepAlive**: `boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[shouldKeepAlive](../classes/internal_.ServerResponse.md#shouldkeepalive)

#### Defined in

node_modules/@types/node/http.d.ts:329

___

### socket

• `Readonly` **socket**: ``null`` \| [`Socket`](../classes/internal_.Socket.md)

Reference to the underlying socket. Usually, users will not want to access
this property.

After calling `outgoingMessage.end()`, this property will be nulled.

**`since`** v0.3.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[socket](../classes/internal_.ServerResponse.md#socket)

#### Defined in

node_modules/@types/node/http.d.ts:354

___

### statusCode

• **statusCode**: `number`

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status code that will be sent to the client when
the headers get flushed.

```js
response.statusCode = 404;
```

After response header was sent to the client, this property indicates the
status code which was sent out.

**`since`** v0.4.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[statusCode](../classes/internal_.ServerResponse.md#statuscode)

#### Defined in

node_modules/@types/node/http.d.ts:478

___

### statusMessage

• **statusMessage**: `string`

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status message that will be sent to the client when
the headers get flushed. If this is left as `undefined` then the standard
message for the status code will be used.

```js
response.statusMessage = 'Not found';
```

After response header was sent to the client, this property indicates the
status message which was sent out.

**`since`** v0.11.8

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[statusMessage](../classes/internal_.ServerResponse.md#statusmessage)

#### Defined in

node_modules/@types/node/http.d.ts:493

___

### useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: `boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[useChunkedEncodingByDefault](../classes/internal_.ServerResponse.md#usechunkedencodingbydefault)

#### Defined in

node_modules/@types/node/http.d.ts:330

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

**`since`** v11.4.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writable](../classes/internal_.ServerResponse.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:504

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`since`** v13.2.0, v12.16.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writableCorked](../classes/internal_.ServerResponse.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:538

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`since`** v12.9.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writableEnded](../classes/internal_.ServerResponse.md#writableended)

#### Defined in

node_modules/@types/node/stream.d.ts:510

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`since`** v12.6.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writableFinished](../classes/internal_.ServerResponse.md#writablefinished)

#### Defined in

node_modules/@types/node/stream.d.ts:515

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`since`** v9.3.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writableHighWaterMark](../classes/internal_.ServerResponse.md#writablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:520

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**`since`** v9.4.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writableLength](../classes/internal_.ServerResponse.md#writablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:527

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`since`** v12.3.0

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writableObjectMode](../classes/internal_.ServerResponse.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:532

## Methods

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[_construct](../classes/internal_.ServerResponse.md#_construct)

#### Defined in

node_modules/@types/node/stream.d.ts:553

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[_destroy](../classes/internal_.ServerResponse.md#_destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:554

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[_final](../classes/internal_.ServerResponse.md#_final)

#### Defined in

node_modules/@types/node/stream.d.ts:555

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[_write](../classes/internal_.ServerResponse.md#_write)

#### Defined in

node_modules/@types/node/stream.d.ts:545

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[_writev](../classes/internal_.ServerResponse.md#_writev)

#### Defined in

node_modules/@types/node/stream.d.ts:546

___

### addListener

▸ **addListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addListener](../classes/internal_.ServerResponse.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:721

▸ **addListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addListener](../classes/internal_.ServerResponse.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:722

▸ **addListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addListener](../classes/internal_.ServerResponse.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:723

▸ **addListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addListener](../classes/internal_.ServerResponse.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:724

▸ **addListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addListener](../classes/internal_.ServerResponse.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:725

▸ **addListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addListener](../classes/internal_.ServerResponse.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:726

▸ **addListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addListener](../classes/internal_.ServerResponse.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:727

___

### addTrailers

▸ **addTrailers**(`headers`): `void`

Adds HTTP trailers (headers but at the end of the message) to the message.

Trailers are **only** be emitted if the message is chunked encoded. If not,
the trailer will be silently discarded.

HTTP requires the `Trailer` header to be sent to emit trailers,
with a list of header fields in its value, e.g.

```js
message.writeHead(200, { 'Content-Type': 'text/plain',
                         'Trailer': 'Content-MD5' });
message.write(fileData);
message.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
message.end();
```

Attempting to set a header field name or value that contains invalid characters
will result in a `TypeError` being thrown.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | [`OutgoingHttpHeaders`](internal_.OutgoingHttpHeaders.md) \| readonly [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[addTrailers](../classes/internal_.ServerResponse.md#addtrailers)

#### Defined in

node_modules/@types/node/http.d.ts:444

___

### append

▸ **append**(`field`, `value?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Appends the specified value to the HTTP response header field.
If the header is not already set, it creates the header with the specified value.
The value parameter can be a string or an array.

Note: calling res.set() after res.append() will reset the previously-set header value.

**`since`** 4.11.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `value?` | `string` \| `string`[] |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1028

___

### assignSocket

▸ **assignSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | [`Socket`](../classes/internal_.Socket.md) |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[assignSocket](../classes/internal_.ServerResponse.md#assignsocket)

#### Defined in

node_modules/@types/node/http.d.ts:495

___

### attachment

▸ **attachment**(`filename?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set _Content-Disposition_ header to _attachment_ with optional `filename`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename?` | `string` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:893

___

### clearCookie

▸ **clearCookie**(`name`, `options?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Clear cookie `name`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`CookieOptions`](internal_.CookieOptions.md) |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:920

___

### contentType

▸ **contentType**(`type`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:

    res.type('.html');
    res.type('html');
    res.type('json');
    res.type('application/json');
    res.type('png');

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:820

___

### cookie

▸ **cookie**(`name`, `val`, `options`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set cookie `name` to `val`, with the given `options`.

Options:

   - `maxAge`   max-age in milliseconds, converted to `expires`
   - `signed`   sign the cookie
   - `path`     defaults to "/"

Examples:

   // "Remember Me" for 15 minutes
   res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

   // save as above
   res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `val` | `string` |
| `options` | [`CookieOptions`](internal_.CookieOptions.md) |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:939

▸ **cookie**(`name`, `val`, `options`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `val` | `any` |
| `options` | [`CookieOptions`](internal_.CookieOptions.md) |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:940

▸ **cookie**(`name`, `val`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `val` | `any` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:941

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](internal_.Response.md#uncork) or [end](internal_.Response.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

**`since`** v0.11.2

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[cork](../classes/internal_.ServerResponse.md#cork)

#### Defined in

node_modules/@types/node/stream.d.ts:659

___

### destroy

▸ **destroy**(`error?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to`write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

**`since`** v8.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Optional, an error to emit with `'error'` event. |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[destroy](../classes/internal_.ServerResponse.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:710

___

### detachSocket

▸ **detachSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | [`Socket`](../classes/internal_.Socket.md) |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[detachSocket](../classes/internal_.ServerResponse.md#detachsocket)

#### Defined in

node_modules/@types/node/http.d.ts:496

___

### download

▸ **download**(`path`, `fn?`): `void`

Transfer the file at the given `path` as an attachment.

Optionally providing an alternate attachment `filename`,
and optional callback `fn(err)`. The callback is invoked
when the data transfer is complete, or when an error has
ocurred. Be sure to check `res.headersSent` if you plan to respond.

The optional options argument passes through to the underlying
res.sendFile() call, and takes the exact same parameters.

This method uses `res.sendfile()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fn?` | [`Errback`](../modules/internal_.md#errback) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:804

▸ **download**(`path`, `filename`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `filename` | `string` |
| `fn?` | [`Errback`](../modules/internal_.md#errback) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:805

▸ **download**(`path`, `filename`, `options`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `filename` | `string` |
| `options` | `any` |
| `fn?` | [`Errback`](../modules/internal_.md#errback) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:806

___

### emit

▸ **emit**(`event`): `boolean`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[emit](../classes/internal_.ServerResponse.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:728

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[emit](../classes/internal_.ServerResponse.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:729

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[emit](../classes/internal_.ServerResponse.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:730

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[emit](../classes/internal_.ServerResponse.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:731

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | [`Readable`](../classes/internal_.Readable.md) |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[emit](../classes/internal_.ServerResponse.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:732

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | [`Readable`](../classes/internal_.Readable.md) |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[emit](../classes/internal_.ServerResponse.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:733

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[emit](../classes/internal_.ServerResponse.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:734

___

### end

▸ **end**(`cb?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](internal_.Response.md#write) method after calling [end](internal_.Response.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

**`since`** v0.9.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[end](../classes/internal_.ServerResponse.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:642

▸ **end**(`chunk`, `cb?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[end](../classes/internal_.ServerResponse.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:643

▸ **end**(`chunk`, `encoding`, `cb?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[end](../classes/internal_.ServerResponse.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:644

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

[ServerResponse](../classes/internal_.ServerResponse.md).[eventNames](../classes/internal_.ServerResponse.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### flushHeaders

▸ **flushHeaders**(): `void`

Compulsorily flushes the message headers

For efficiency reason, Node.js normally buffers the message headers
until `outgoingMessage.end()` is called or the first chunk of message data
is written. It then tries to pack the headers and data into a single TCP
packet.

It is usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. `outgoingMessage.flushHeaders()`bypasses the optimization and kickstarts the request.

**`since`** v1.6.0

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[flushHeaders](../classes/internal_.ServerResponse.md#flushheaders)

#### Defined in

node_modules/@types/node/http.d.ts:457

___

### format

▸ **format**(`obj`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Respond to the Acceptable formats using an `obj`
of mime-type callbacks.

This method uses `req.accepted`, an array of
acceptable types ordered by their quality values.
When "Accept" is not present the _first_ callback
is invoked, otherwise the first match is used. When
no match is performed the server responds with
406 "Not Acceptable".

Content-Type is set for you, however if you choose
you may alter this within the callback using `res.type()`
or `res.set('Content-Type', ...)`.

   res.format({
     'text/plain': function(){
       res.send('hey');
     },

     'text/html': function(){
       res.send('<p>hey</p>');
     },

     'appliation/json': function(){
       res.send({ message: 'hey' });
     }
   });

In addition to canonicalized MIME types you may
also use extnames mapped to these types:

   res.format({
     text: function(){
       res.send('hey');
     },

     html: function(){
       res.send('<p>hey</p>');
     },

     json: function(){
       res.send({ message: 'hey' });
     }
   });

By default Express passes an `Error`
with a `.status` of 406 to `next(err)`
if a match is not made. If you provide
a `.default` callback it will be invoked
instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:888

___

### get

▸ **get**(`field`): `string`

Get value for header `field`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:917

___

### getHeader

▸ **getHeader**(`name`): `undefined` \| `string` \| `number` \| `string`[]

Gets the value of HTTP header with the given name. If such a name doesn't
exist in message, it will be `undefined`.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of header |

#### Returns

`undefined` \| `string` \| `number` \| `string`[]

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[getHeader](../classes/internal_.ServerResponse.md#getheader)

#### Defined in

node_modules/@types/node/http.d.ts:375

___

### getHeaderNames

▸ **getHeaderNames**(): `string`[]

Returns an array of names of headers of the outgoing outgoingMessage. All
names are lowercase.

**`since`** v8.0.0

#### Returns

`string`[]

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[getHeaderNames](../classes/internal_.ServerResponse.md#getheadernames)

#### Defined in

node_modules/@types/node/http.d.ts:403

___

### getHeaders

▸ **getHeaders**(): [`OutgoingHttpHeaders`](internal_.OutgoingHttpHeaders.md)

Returns a shallow copy of the current outgoing headers. Since a shallow
copy is used, array values may be mutated without additional calls to
various header-related HTTP module methods. The keys of the returned
object are the header names and the values are the respective header
values. All header names are lowercase.

The object returned by the `outgoingMessage.getHeaders()` method does
not prototypically inherit from the JavaScript Object. This means that
typical Object methods such as `obj.toString()`, `obj.hasOwnProperty()`,
and others are not defined and will not work.

```js
outgoingMessage.setHeader('Foo', 'bar');
outgoingMessage.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headers = outgoingMessage.getHeaders();
// headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
```

**`since`** v8.0.0

#### Returns

[`OutgoingHttpHeaders`](internal_.OutgoingHttpHeaders.md)

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[getHeaders](../classes/internal_.ServerResponse.md#getheaders)

#### Defined in

node_modules/@types/node/http.d.ts:397

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../classes/internal_.IncomingMessage.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[getMaxListeners](../classes/internal_.ServerResponse.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### hasHeader

▸ **hasHeader**(`name`): `boolean`

Returns `true` if the header identified by `name` is currently set in the
outgoing headers. The header name is case-insensitive.

```js
const hasContentType = outgoingMessage.hasHeader('content-type');
```

**`since`** v8.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[hasHeader](../classes/internal_.ServerResponse.md#hasheader)

#### Defined in

node_modules/@types/node/http.d.ts:413

___

### header

▸ **header**(`field`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `any` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:910

▸ **header**(`field`, `value?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `value?` | `string` \| `string`[] |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:911

___

### links

▸ **links**(`links`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set Link header field with the given `links`.

Examples:

   res.links({
     next: 'http://api.example.com/users?page=2',
     last: 'http://api.example.com/users?page=5'
   });

#### Parameters

| Name | Type |
| :------ | :------ |
| `links` | `any` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:693

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

[ServerResponse](../classes/internal_.ServerResponse.md).[listenerCount](../classes/internal_.ServerResponse.md#listenercount)

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

[ServerResponse](../classes/internal_.ServerResponse.md).[listeners](../classes/internal_.ServerResponse.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### location

▸ **location**(`url`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set the location header to `url`.

The given `url` can also be the name of a mapped url, for
example by default express supports "back" which redirects
to the _Referrer_ or _Referer_ headers or "/".

Examples:

   res.location('/foo/bar').;
   res.location('http://example.com');
   res.location('../login'); // /blog/post/1 -> /blog/login

Mounting:

  When an application is mounted and `res.location()`
  is given a path that does _not_ lead with "/" it becomes
  relative to the mount-point. For example if the application
  is mounted at "/blog", the following would become "/blog/login".

     res.location('login');

  While the leading slash would result in a location of "/login":

     res.location('/login');

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:969

___

### off

▸ **off**(`eventName`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[off](../classes/internal_.ServerResponse.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[on](../classes/internal_.ServerResponse.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:735

▸ **on**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[on](../classes/internal_.ServerResponse.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:736

▸ **on**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[on](../classes/internal_.ServerResponse.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:737

▸ **on**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[on](../classes/internal_.ServerResponse.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:738

▸ **on**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[on](../classes/internal_.ServerResponse.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:739

▸ **on**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[on](../classes/internal_.ServerResponse.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:740

▸ **on**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[on](../classes/internal_.ServerResponse.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:741

___

### once

▸ **once**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[once](../classes/internal_.ServerResponse.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:742

▸ **once**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[once](../classes/internal_.ServerResponse.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:743

▸ **once**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[once](../classes/internal_.ServerResponse.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:744

▸ **once**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[once](../classes/internal_.ServerResponse.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:745

▸ **once**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[once](../classes/internal_.ServerResponse.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:746

▸ **once**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[once](../classes/internal_.ServerResponse.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:747

▸ **once**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[once](../classes/internal_.ServerResponse.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:748

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](internal_.WritableStream.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[pipe](../classes/internal_.ServerResponse.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:24

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependListener](../classes/internal_.ServerResponse.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:749

▸ **prependListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependListener](../classes/internal_.ServerResponse.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:750

▸ **prependListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependListener](../classes/internal_.ServerResponse.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:751

▸ **prependListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependListener](../classes/internal_.ServerResponse.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:752

▸ **prependListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependListener](../classes/internal_.ServerResponse.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:753

▸ **prependListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependListener](../classes/internal_.ServerResponse.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:754

▸ **prependListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependListener](../classes/internal_.ServerResponse.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:755

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependOnceListener](../classes/internal_.ServerResponse.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:756

▸ **prependOnceListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependOnceListener](../classes/internal_.ServerResponse.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:757

▸ **prependOnceListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependOnceListener](../classes/internal_.ServerResponse.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:758

▸ **prependOnceListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependOnceListener](../classes/internal_.ServerResponse.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:759

▸ **prependOnceListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependOnceListener](../classes/internal_.ServerResponse.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:760

▸ **prependOnceListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependOnceListener](../classes/internal_.ServerResponse.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:761

▸ **prependOnceListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[prependOnceListener](../classes/internal_.ServerResponse.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:762

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

[ServerResponse](../classes/internal_.ServerResponse.md).[rawListeners](../classes/internal_.ServerResponse.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### redirect

▸ **redirect**(`url`): `void`

Redirect to the given `url` with optional response `status`
defaulting to 302.

The resulting `url` is determined by `res.location()`, so
it will play nicely with mounted apps, relative paths,
`"back"` etc.

Examples:

   res.redirect('/foo/bar');
   res.redirect('http://example.com');
   res.redirect(301, 'http://example.com');
   res.redirect('http://example.com', 301);
   res.redirect('../login'); // /blog/post/1 -> /blog/login

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:987

▸ **redirect**(`status`, `url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `url` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:988

▸ **redirect**(`url`, `status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `status` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:989

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

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

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeAllListeners](../classes/internal_.ServerResponse.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeHeader

▸ **removeHeader**(`name`): `void`

Removes a header that is queued for implicit sending.

```js
outgoingMessage.removeHeader('Content-Encoding');
```

**`since`** v0.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeHeader](../classes/internal_.ServerResponse.md#removeheader)

#### Defined in

node_modules/@types/node/http.d.ts:422

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeListener](../classes/internal_.ServerResponse.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:763

▸ **removeListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeListener](../classes/internal_.ServerResponse.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:764

▸ **removeListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeListener](../classes/internal_.ServerResponse.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:765

▸ **removeListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeListener](../classes/internal_.ServerResponse.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:766

▸ **removeListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeListener](../classes/internal_.ServerResponse.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:767

▸ **removeListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](../classes/internal_.Readable.md)) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeListener](../classes/internal_.ServerResponse.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:768

▸ **removeListener**(`event`, `listener`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[removeListener](../classes/internal_.ServerResponse.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:769

___

### render

▸ **render**(`view`, `options?`, `callback?`): `void`

Render `view` with the given `options` and optional callback `fn`.
When a callback function is given a response will _not_ be made
automatically, otherwise a response of _200_ and _text/html_ is given.

Options:

 - `cache`     boolean hinting to the engine it should cache
 - `filename`  filename of the view being rendered

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `string` |
| `options?` | `object` |
| `callback?` | (`err`: `Error`, `html`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1001

▸ **render**(`view`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `string` |
| `callback?` | (`err`: `Error`, `html`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1002

___

### sendFile

▸ **sendFile**(`path`, `fn?`): `void`

Transfer the file at the given `path`.

Automatically sets the _Content-Type_ response header field.
The callback `fn(err)` is invoked when the transfer is complete
or when an error occurs. Be sure to check `res.headersSent`
if you wish to attempt responding, as the header and some data
may have already been transferred.

Options:

  - `maxAge`   defaulting to 0 (can be string converted by `ms`)
  - `root`     root directory for relative filenames
  - `headers`  object of headers to serve with file
  - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them

Other options are passed along to `send`.

Examples:

 The following example illustrates how `res.sendFile()` may
 be used as an alternative for the `static()` middleware for
 dynamic situations. The code backing `res.sendFile()` is actually
 the same code, so HTTP cache support etc is identical.

    app.get('/user/:uid/photos/:file', function(req, res){
      var uid = req.params.uid
        , file = req.params.file;

      req.user.mayViewFilesFrom(uid, function(yes){
        if (yes) {
          res.sendFile('/uploads/' + uid + '/' + file);
        } else {
          res.send(403, 'Sorry! you cant see that.');
        }
      });
    });

**`api`** public

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fn?` | [`Errback`](../modules/internal_.md#errback) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:771

▸ **sendFile**(`path`, `options`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `any` |
| `fn?` | [`Errback`](../modules/internal_.md#errback) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:772

___

### sendStatus

▸ **sendStatus**(`code`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set the response HTTP status code to `statusCode` and send its string representation as the response body.

**`link`** http://expressjs.com/4x/api.html#res.sendStatus

Examples:

   res.sendStatus(200); // equivalent to res.status(200).send('OK')
   res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
   res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
   res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `StatusCode` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:681

___

### sendfile

▸ **sendfile**(`path`): `void`

**`deprecated`** Use sendFile instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:777

▸ **sendfile**(`path`, `options`): `void`

**`deprecated`** Use sendFile instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:781

▸ **sendfile**(`path`, `fn`): `void`

**`deprecated`** Use sendFile instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fn` | [`Errback`](../modules/internal_.md#errback) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:785

▸ **sendfile**(`path`, `options`, `fn`): `void`

**`deprecated`** Use sendFile instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `any` |
| `fn` | [`Errback`](../modules/internal_.md#errback) |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:789

___

### set

▸ **set**(`field`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set header `field` to `val`, or pass
an object of header fields.

Examples:

   res.set('Foo', ['bar', 'baz']);
   res.set('Accept', 'application/json');
   res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });

Aliased as `res.header()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `any` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:907

▸ **set**(`field`, `value?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `value?` | `string` \| `string`[] |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:908

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | The new default encoding |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[setDefaultEncoding](../classes/internal_.ServerResponse.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:619

___

### setHeader

▸ **setHeader**(`name`, `value`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Sets a single header value for the header object.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |
| `value` | `string` \| `number` \| readonly `string`[] | Header value |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[setHeader](../classes/internal_.ServerResponse.md#setheader)

#### Defined in

node_modules/@types/node/http.d.ts:368

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

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

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[setMaxListeners](../classes/internal_.ServerResponse.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Once a socket is associated with the message and is connected,`socket.setTimeout()` will be called with `msecs` as the first parameter.

**`since`** v0.9.12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msecs` | `number` | - |
| `callback?` | () => `void` | Optional function to be called when a timeout occurs. Same as binding to the `timeout` event. |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[setTimeout](../classes/internal_.ServerResponse.md#settimeout)

#### Defined in

node_modules/@types/node/http.d.ts:361

___

### status

▸ **status**(`code`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set status `code`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `StatusCode` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:668

___

### type

▸ **type**(`type`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:

    res.type('.html');
    res.type('html');
    res.type('json');
    res.type('application/json');
    res.type('png');

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:834

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](internal_.Response.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, it is recommended that calls to `writable.uncork()` be
deferred using `process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

**`since`** v0.11.2

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[uncork](../classes/internal_.ServerResponse.md#uncork)

#### Defined in

node_modules/@types/node/stream.d.ts:693

___

### vary

▸ **vary**(`field`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Adds the field to the Vary response header, if it is not there already.
Examples:

    res.vary('User-Agent').render('docs');

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1015

___

### write

▸ **write**(`chunk`, `callback?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
It is recommended that once `write()` returns false, no more chunks be written
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](internal_.Response.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` | Callback for when this chunk of data is flushed. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[write](../classes/internal_.ServerResponse.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:612

▸ **write**(`chunk`, `encoding`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[write](../classes/internal_.ServerResponse.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:613

___

### writeContinue

▸ **writeContinue**(`callback?`): `void`

Sends a HTTP/1.1 100 Continue message to the client, indicating that
the request body should be sent. See the `'checkContinue'` event on`Server`.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writeContinue](../classes/internal_.ServerResponse.md#writecontinue)

#### Defined in

node_modules/@types/node/http.d.ts:502

___

### writeHead

▸ **writeHead**(`statusCode`, `statusMessage?`, `headers?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

Sends a response header to the request. The status code is a 3-digit HTTP
status code, like `404`. The last argument, `headers`, are the response headers.
Optionally one can give a human-readable `statusMessage` as the second
argument.

`headers` may be an `Array` where the keys and values are in the same list.
It is _not_ a list of tuples. So, the even-numbered offsets are key values,
and the odd-numbered offsets are the associated values. The array is in the same
format as `request.rawHeaders`.

Returns a reference to the `ServerResponse`, so that calls can be chained.

```js
const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);
```

This method must only be called once on a message and it must
be called before `response.end()` is called.

If `response.write()` or `response.end()` are called before calling
this, the implicit/mutable headers will be calculated and call this function.

When headers have been set with `response.setHeader()`, they will be merged
with any headers passed to `response.writeHead()`, with the headers passed
to `response.writeHead()` given precedence.

If this method is called and `response.setHeader()` has not been called,
it will directly write the supplied header values onto the network channel
without caching internally, and the `response.getHeader()` on the header
will not yield the expected result. If progressive population of headers is
desired with potential future retrieval and modification, use `response.setHeader()` instead.

```js
// Returns content-type = text/plain
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
```

`Content-Length` is given in bytes, not characters. Use `Buffer.byteLength()` to determine the length of the body in bytes. Node.js
does not check whether `Content-Length` and the length of the body which has
been transmitted are equal or not.

Attempting to set a header field name or value that contains invalid characters
will result in a `TypeError` being thrown.

**`since`** v0.1.30

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `statusMessage?` | `string` |
| `headers?` | [`OutgoingHttpHeaders`](internal_.OutgoingHttpHeaders.md) \| [`OutgoingHttpHeader`](../modules/internal_.md#outgoinghttpheader)[] |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writeHead](../classes/internal_.ServerResponse.md#writehead)

#### Defined in

node_modules/@types/node/http.d.ts:560

▸ **writeHead**(`statusCode`, `headers?`): [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `headers?` | [`OutgoingHttpHeaders`](internal_.OutgoingHttpHeaders.md) \| [`OutgoingHttpHeader`](../modules/internal_.md#outgoinghttpheader)[] |

#### Returns

[`Response`](internal_.Response.md)<`ResBody`, `Locals`, `StatusCode`\>

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writeHead](../classes/internal_.ServerResponse.md#writehead)

#### Defined in

node_modules/@types/node/http.d.ts:561

___

### writeProcessing

▸ **writeProcessing**(): `void`

Sends a HTTP/1.1 102 Processing message to the client, indicating that
the request body should be sent.

**`since`** v10.0.0

#### Returns

`void`

#### Inherited from

[ServerResponse](../classes/internal_.ServerResponse.md).[writeProcessing](../classes/internal_.ServerResponse.md#writeprocessing)

#### Defined in

node_modules/@types/node/http.d.ts:567
