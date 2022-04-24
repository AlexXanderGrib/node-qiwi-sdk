[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Request

# Interface: Request<P, ResBody, ReqBody, ReqQuery, Locals\>

[<internal>](../modules/internal_.md).Request

**`see`** https://expressjs.com/en/api.html#req.params

**`example`**
    app.get('/user/:id', (req, res) => res.send(req.params.id)); // implicitly `ParamsDictionary`
    app.get<ParamsArray>(/user\/(.*)/, (req, res) => res.send(req.params[0]));
    app.get<ParamsArray>('/user/*', (req, res) => res.send(req.params[0]));

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`ParamsDictionary`](internal_.ParamsDictionary.md) | For most requests, this should be `ParamsDictionary`, but if you're using this in a route handler for a route that uses a `RegExp` or a wildcard `string` path (e.g. `'/user/*'`), then `req.params` will be an array, in which case you should use `ParamsArray` instead. |
| `ResBody` | `any` | - |
| `ReqBody` | `any` | - |
| `ReqQuery` | [`ParsedQs`](internal_.ParsedQs.md) | - |
| `Locals` | extends [`Record`](../modules/internal_.md#record)<`string`, `any`\> = [`Record`](../modules/internal_.md#record)<`string`, `any`\> | - |

## Hierarchy

- [`IncomingMessage`](../classes/internal_.IncomingMessage.md)

- [`Request`](internal_.Request-1.md)

  ↳ **`Request`**

## Table of contents

### Properties

- [aborted](internal_.Request.md#aborted)
- [accepted](internal_.Request.md#accepted)
- [app](internal_.Request.md#app)
- [baseUrl](internal_.Request.md#baseurl)
- [body](internal_.Request.md#body)
- [complete](internal_.Request.md#complete)
- [connection](internal_.Request.md#connection)
- [cookies](internal_.Request.md#cookies)
- [destroyed](internal_.Request.md#destroyed)
- [fresh](internal_.Request.md#fresh)
- [headers](internal_.Request.md#headers)
- [host](internal_.Request.md#host)
- [hostname](internal_.Request.md#hostname)
- [httpVersion](internal_.Request.md#httpversion)
- [httpVersionMajor](internal_.Request.md#httpversionmajor)
- [httpVersionMinor](internal_.Request.md#httpversionminor)
- [ip](internal_.Request.md#ip)
- [ips](internal_.Request.md#ips)
- [method](internal_.Request.md#method)
- [next](internal_.Request.md#next)
- [originalUrl](internal_.Request.md#originalurl)
- [params](internal_.Request.md#params)
- [path](internal_.Request.md#path)
- [protocol](internal_.Request.md#protocol)
- [query](internal_.Request.md#query)
- [rawHeaders](internal_.Request.md#rawheaders)
- [rawTrailers](internal_.Request.md#rawtrailers)
- [readable](internal_.Request.md#readable)
- [readableAborted](internal_.Request.md#readableaborted)
- [readableDidRead](internal_.Request.md#readabledidread)
- [readableEncoding](internal_.Request.md#readableencoding)
- [readableEnded](internal_.Request.md#readableended)
- [readableFlowing](internal_.Request.md#readableflowing)
- [readableHighWaterMark](internal_.Request.md#readablehighwatermark)
- [readableLength](internal_.Request.md#readablelength)
- [readableObjectMode](internal_.Request.md#readableobjectmode)
- [res](internal_.Request.md#res)
- [route](internal_.Request.md#route)
- [secure](internal_.Request.md#secure)
- [signedCookies](internal_.Request.md#signedcookies)
- [socket](internal_.Request.md#socket)
- [stale](internal_.Request.md#stale)
- [statusCode](internal_.Request.md#statuscode)
- [statusMessage](internal_.Request.md#statusmessage)
- [subdomains](internal_.Request.md#subdomains)
- [trailers](internal_.Request.md#trailers)
- [url](internal_.Request.md#url)
- [xhr](internal_.Request.md#xhr)

### Methods

- [[asyncIterator]](internal_.Request.md#[asynciterator])
- [\_construct](internal_.Request.md#_construct)
- [\_destroy](internal_.Request.md#_destroy)
- [\_read](internal_.Request.md#_read)
- [accepts](internal_.Request.md#accepts)
- [acceptsCharsets](internal_.Request.md#acceptscharsets)
- [acceptsEncodings](internal_.Request.md#acceptsencodings)
- [acceptsLanguages](internal_.Request.md#acceptslanguages)
- [addListener](internal_.Request.md#addlistener)
- [destroy](internal_.Request.md#destroy)
- [emit](internal_.Request.md#emit)
- [eventNames](internal_.Request.md#eventnames)
- [get](internal_.Request.md#get)
- [getMaxListeners](internal_.Request.md#getmaxlisteners)
- [header](internal_.Request.md#header)
- [is](internal_.Request.md#is)
- [isPaused](internal_.Request.md#ispaused)
- [listenerCount](internal_.Request.md#listenercount)
- [listeners](internal_.Request.md#listeners)
- [off](internal_.Request.md#off)
- [on](internal_.Request.md#on)
- [once](internal_.Request.md#once)
- [param](internal_.Request.md#param)
- [pause](internal_.Request.md#pause)
- [pipe](internal_.Request.md#pipe)
- [prependListener](internal_.Request.md#prependlistener)
- [prependOnceListener](internal_.Request.md#prependoncelistener)
- [push](internal_.Request.md#push)
- [range](internal_.Request.md#range)
- [rawListeners](internal_.Request.md#rawlisteners)
- [read](internal_.Request.md#read)
- [removeAllListeners](internal_.Request.md#removealllisteners)
- [removeListener](internal_.Request.md#removelistener)
- [resume](internal_.Request.md#resume)
- [setEncoding](internal_.Request.md#setencoding)
- [setMaxListeners](internal_.Request.md#setmaxlisteners)
- [setTimeout](internal_.Request.md#settimeout)
- [unpipe](internal_.Request.md#unpipe)
- [unshift](internal_.Request.md#unshift)
- [wrap](internal_.Request.md#wrap)

## Properties

### aborted

• **aborted**: `boolean`

The `message.aborted` property will be `true` if the request has
been aborted.

**`since`** v10.1.0

**`deprecated`** Since v17.0.0 - Check `message.destroyed` from [stream.Readable](https://nodejs.org/dist/latest-v17.x/docs/api/stream.html#class-streamreadable).

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[aborted](../classes/internal_.IncomingMessage.md#aborted)

#### Defined in

node_modules/@types/node/http.d.ts:793

___

### accepted

• **accepted**: [`MediaType`](internal_.MediaType.md)[]

Return an array of Accepted media types
ordered from highest quality to lowest.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:497

___

### app

• **app**: [`Application`](internal_.Application.md)<[`Record`](../modules/internal_.md#record)<`string`, `any`\>\>

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:640

___

### baseUrl

• **baseUrl**: `string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:638

___

### body

• **body**: `ReqBody`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:619

___

### complete

• **complete**: `boolean`

The `message.complete` property will be `true` if a complete HTTP message has
been received and successfully parsed.

This property is particularly useful as a means of determining if a client or
server fully transmitted a message before a connection was terminated:

```js
const req = http.request({
  host: '127.0.0.1',
  port: 8080,
  method: 'POST'
}, (res) => {
  res.resume();
  res.on('end', () => {
    if (!res.complete)
      console.error(
        'The connection was terminated while the message was still being sent');
  });
});
```

**`since`** v0.3.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[complete](../classes/internal_.IncomingMessage.md#complete)

#### Defined in

node_modules/@types/node/http.d.ts:828

___

### connection

• **connection**: [`Socket`](../classes/internal_.Socket.md)

Alias for `message.socket`.

**`since`** v0.1.90

**`deprecated`** Since v16.0.0 - Use `socket`.

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[connection](../classes/internal_.IncomingMessage.md#connection)

#### Defined in

node_modules/@types/node/http.d.ts:834

___

### cookies

• **cookies**: `any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:622

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

**`since`** v8.0.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[destroyed](../classes/internal_.IncomingMessage.md#destroyed)

#### Defined in

node_modules/@types/node/stream.d.ts:115

___

### fresh

• **fresh**: `boolean`

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:604

___

### headers

• **headers**: [`IncomingHttpHeaders`](internal_.IncomingHttpHeaders.md)

The request/response headers object.

Key-value pairs of header names and values. Header names are lower-cased.

```js
// Prints something like:
//
// { 'user-agent': 'curl/7.22.0',
//   host: '127.0.0.1:8000',
//   accept: '*' }
console.log(request.headers);
```

Duplicates in raw headers are handled in the following ways, depending on the
header name:

* Duplicates of `age`, `authorization`, `content-length`, `content-type`,`etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`,`last-modified`, `location`,
`max-forwards`, `proxy-authorization`, `referer`,`retry-after`, `server`, or `user-agent` are discarded.
* `set-cookie` is always an array. Duplicates are added to the array.
* For duplicate `cookie` headers, the values are joined together with '; '.
* For all other headers, the values are joined together with ', '.

**`since`** v0.1.5

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[headers](../classes/internal_.IncomingMessage.md#headers)

#### Defined in

node_modules/@types/node/http.d.ts:871

___

### host

• **host**: `string`

**`deprecated`** Use hostname instead.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:597

___

### hostname

• **hostname**: `string`

Parse the "Host" header field hostname.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:592

___

### httpVersion

• **httpVersion**: `string`

In case of server request, the HTTP version sent by the client. In the case of
client response, the HTTP version of the connected-to server.
Probably either `'1.1'` or `'1.0'`.

Also `message.httpVersionMajor` is the first integer and`message.httpVersionMinor` is the second.

**`since`** v0.1.1

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[httpVersion](../classes/internal_.IncomingMessage.md#httpversion)

#### Defined in

node_modules/@types/node/http.d.ts:802

___

### httpVersionMajor

• **httpVersionMajor**: `number`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[httpVersionMajor](../classes/internal_.IncomingMessage.md#httpversionmajor)

#### Defined in

node_modules/@types/node/http.d.ts:803

___

### httpVersionMinor

• **httpVersionMinor**: `number`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[httpVersionMinor](../classes/internal_.IncomingMessage.md#httpversionminor)

#### Defined in

node_modules/@types/node/http.d.ts:804

___

### ip

• **ip**: `string`

Return the remote address, or when
"trust proxy" is `true` return
the upstream addr.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:559

___

### ips

• **ips**: `string`[]

When "trust proxy" is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:569

___

### method

• **method**: `string`

**Only valid for request obtained from [Server](../classes/internal_.Server.md).**

The request method as a string. Read only. Examples: `'GET'`, `'DELETE'`.

#### Overrides

[IncomingMessage](../classes/internal_.IncomingMessage.md).[method](../classes/internal_.IncomingMessage.md#method)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:624

___

### next

• `Optional` **next**: [`NextFunction`](internal_.NextFunction.md)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:647

___

### originalUrl

• **originalUrl**: `string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:634

___

### params

• **params**: `P`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:626

___

### path

• **path**: `string`

Short-hand for `url.parse(req.url).pathname`.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:587

___

### protocol

• **protocol**: `string`

Return the protocol string "http" or "https"
when requested with TLS. When the "trust proxy"
setting is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:545

___

### query

• **query**: `ReqQuery`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:628

___

### rawHeaders

• **rawHeaders**: `string`[]

The raw request/response headers list exactly as they were received.

The keys and values are in the same list. It is _not_ a
list of tuples. So, the even-numbered offsets are key values, and the
odd-numbered offsets are the associated values.

Header names are not lowercased, and duplicates are not merged.

```js
// Prints something like:
//
// [ 'user-agent',
//   'this is invalid because there can be only one',
//   'User-Agent',
//   'curl/7.22.0',
//   'Host',
//   '127.0.0.1:8000',
//   'ACCEPT',
//   '*' ]
console.log(request.rawHeaders);
```

**`since`** v0.11.6

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[rawHeaders](../classes/internal_.IncomingMessage.md#rawheaders)

#### Defined in

node_modules/@types/node/http.d.ts:896

___

### rawTrailers

• **rawTrailers**: `string`[]

The raw request/response trailer keys and values exactly as they were
received. Only populated at the `'end'` event.

**`since`** v0.11.6

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[rawTrailers](../classes/internal_.IncomingMessage.md#rawtrailers)

#### Defined in

node_modules/@types/node/http.d.ts:907

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`since`** v11.4.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readable](../classes/internal_.IncomingMessage.md#readable)

#### Defined in

node_modules/@types/node/stream.d.ts:71

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`since`** v16.8.0

**`experimental`**

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableAborted](../classes/internal_.IncomingMessage.md#readableaborted)

#### Defined in

node_modules/@types/node/stream.d.ts:65

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`since`** v16.7.0, v14.18.0

**`experimental`**

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableDidRead](../classes/internal_.IncomingMessage.md#readabledidread)

#### Defined in

node_modules/@types/node/stream.d.ts:77

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| [`BufferEncoding`](../modules/internal_.md#bufferencoding)

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`since`** v12.7.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableEncoding](../classes/internal_.IncomingMessage.md#readableencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:82

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`since`** v12.9.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableEnded](../classes/internal_.IncomingMessage.md#readableended)

#### Defined in

node_modules/@types/node/stream.d.ts:87

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`since`** v9.4.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableFlowing](../classes/internal_.IncomingMessage.md#readableflowing)

#### Defined in

node_modules/@types/node/stream.d.ts:93

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`since`** v9.3.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableHighWaterMark](../classes/internal_.IncomingMessage.md#readablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:98

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`since`** v9.4.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableLength](../classes/internal_.IncomingMessage.md#readablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:105

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`since`** v12.3.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[readableObjectMode](../classes/internal_.IncomingMessage.md#readableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:110

___

### res

• `Optional` **res**: [`Response`](internal_.Response.md)<`ResBody`, `Locals`, `number`\>

After middleware.init executed, Request will contain res and next properties
See: express/lib/middleware/init.js

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:646

___

### route

• **route**: `any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:630

___

### secure

• **secure**: `boolean`

Short-hand for:

   req.protocol == 'https'

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:552

___

### signedCookies

• **signedCookies**: `any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:632

___

### socket

• **socket**: [`Socket`](../classes/internal_.Socket.md)

The `net.Socket` object associated with the connection.

With HTTPS support, use `request.socket.getPeerCertificate()` to obtain the
client's authentication details.

This property is guaranteed to be an instance of the `net.Socket` class,
a subclass of `stream.Duplex`, unless the user specified a socket
type other than `net.Socket`.

**`since`** v0.3.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[socket](../classes/internal_.IncomingMessage.md#socket)

#### Defined in

node_modules/@types/node/http.d.ts:846

___

### stale

• **stale**: `boolean`

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:611

___

### statusCode

• `Optional` **statusCode**: `number`

**Only valid for response obtained from {@link ClientRequest}.**

The 3-digit HTTP response status code. E.G. `404`.

**`since`** v0.1.1

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[statusCode](../classes/internal_.IncomingMessage.md#statuscode)

#### Defined in

node_modules/@types/node/http.d.ts:966

___

### statusMessage

• `Optional` **statusMessage**: `string`

**Only valid for response obtained from {@link ClientRequest}.**

The HTTP response status message (reason phrase). E.G. `OK` or `Internal Server Error`.

**`since`** v0.11.10

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[statusMessage](../classes/internal_.IncomingMessage.md#statusmessage)

#### Defined in

node_modules/@types/node/http.d.ts:973

___

### subdomains

• **subdomains**: `string`[]

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain of
the app. By default, the domain of the app is assumed to be the last two
parts of the host. This can be changed by setting "subdomain offset".

For example, if the domain is "tobi.ferrets.example.com":
If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
If "subdomain offset" is 3, req.subdomains is `["tobi"]`.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:582

___

### trailers

• **trailers**: [`Dict`](internal_.Dict.md)<`string`\>

The request/response trailers object. Only populated at the `'end'` event.

**`since`** v0.3.0

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[trailers](../classes/internal_.IncomingMessage.md#trailers)

#### Defined in

node_modules/@types/node/http.d.ts:901

___

### url

• **url**: `string`

**Only valid for request obtained from [Server](../classes/internal_.Server.md).**

Request URL string. This contains only the URL that is present in the actual
HTTP request. Take the following request:

```http
GET /status?name=ryan HTTP/1.1
Accept: text/plain
```

To parse the URL into its parts:

```js
new URL(request.url, `http://${request.headers.host}`);
```

When `request.url` is `'/status?name=ryan'` and`request.headers.host` is `'localhost:3000'`:

```console
$ node
> new URL(request.url, `http://${request.headers.host}`)
URL {
  href: 'http://localhost:3000/status?name=ryan',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams { 'name' => 'ryan' },
  hash: ''
}
```

#### Overrides

[IncomingMessage](../classes/internal_.IncomingMessage.md).[url](../classes/internal_.IncomingMessage.md#url)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:636

___

### xhr

• **xhr**: `boolean`

Check if the request was an _XMLHttpRequest_.

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:616

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)<`any`\>

#### Returns

[`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)<`any`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[[asyncIterator]](../classes/internal_.IncomingMessage.md#[asynciterator])

#### Defined in

node_modules/@types/node/stream.d.ts:479

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[_construct](../classes/internal_.IncomingMessage.md#_construct)

#### Defined in

node_modules/@types/node/stream.d.ts:117

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

[IncomingMessage](../classes/internal_.IncomingMessage.md).[_destroy](../classes/internal_.IncomingMessage.md#_destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:399

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[_read](../classes/internal_.IncomingMessage.md#_read)

#### Defined in

node_modules/@types/node/stream.d.ts:118

___

### accepts

▸ **accepts**(): `string`[]

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimted list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    req.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    req.accepts('html');
    // => "html"
    req.accepts('text/html');
    // => "text/html"
    req.accepts('json, text');
    // => "json"
    req.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    req.accepts('html, json');
    // => "json"

#### Returns

`string`[]

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:437

▸ **accepts**(`type`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:438

▸ **accepts**(`type`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:439

▸ **accepts**(...`type`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...type` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:440

___

### acceptsCharsets

▸ **acceptsCharsets**(): `string`[]

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Returns

`string`[]

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:449

▸ **acceptsCharsets**(`charset`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset` | `string` |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:450

▸ **acceptsCharsets**(`charset`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:451

▸ **acceptsCharsets**(...`charset`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...charset` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:452

___

### acceptsEncodings

▸ **acceptsEncodings**(): `string`[]

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Returns

`string`[]

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:461

▸ **acceptsEncodings**(`encoding`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `string` |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:462

▸ **acceptsEncodings**(`encoding`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:463

▸ **acceptsEncodings**(...`encoding`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...encoding` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:464

___

### acceptsLanguages

▸ **acceptsLanguages**(): `string`[]

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Returns

`string`[]

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:473

▸ **acceptsLanguages**(`lang`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string` |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:474

▸ **acceptsLanguages**(`lang`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:475

▸ **acceptsLanguages**(...`lang`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lang` | `string`[] |

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:476

___

### addListener

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:423

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:424

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:425

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:426

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:427

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:428

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:429

▸ **addListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[addListener](../classes/internal_.IncomingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:430

___

### destroy

▸ **destroy**(`error?`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

Calls `destroy()` on the socket that received the `IncomingMessage`. If `error`is provided, an `'error'` event is emitted on the socket and `error` is passed
as an argument to any listeners on the event.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[destroy](../classes/internal_.IncomingMessage.md#destroy)

#### Defined in

node_modules/@types/node/http.d.ts:979

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

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:431

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:432

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:433

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:434

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:435

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:436

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:437

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[emit](../classes/internal_.IncomingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:438

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

[IncomingMessage](../classes/internal_.IncomingMessage.md).[eventNames](../classes/internal_.IncomingMessage.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### get

▸ **get**(`name`): `undefined` \| `string`[]

Return request header.

The `Referrer` header field is special-cased,
both `Referrer` and `Referer` are interchangeable.

Examples:

    req.get('Content-Type');
    // => "text/plain"

    req.get('content-type');
    // => "text/plain"

    req.get('Something');
    // => undefined

Aliased as `req.header()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"set-cookie"`` |

#### Returns

`undefined` \| `string`[]

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:394

▸ **get**(`name`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:395

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../classes/internal_.IncomingMessage.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[getMaxListeners](../classes/internal_.IncomingMessage.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### header

▸ **header**(`name`): `undefined` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"set-cookie"`` |

#### Returns

`undefined` \| `string`[]

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:397

▸ **header**(`name`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:398

___

### is

▸ **is**(`type`): ``null`` \| `string` \| ``false``

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:

     // With Content-Type: text/html; charset=utf-8
     req.is('html');
     req.is('text/html');
     req.is('text/*');
     // => true

     // When Content-Type is application/json
     req.is('json');
     req.is('application/json');
     req.is('application/*');
     // => true

     req.is('html');
     // => false

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |

#### Returns

``null`` \| `string` \| ``false``

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:535

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

**`since`** v0.11.14

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[isPaused](../classes/internal_.IncomingMessage.md#ispaused)

#### Defined in

node_modules/@types/node/stream.d.ts:278

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

[IncomingMessage](../classes/internal_.IncomingMessage.md).[listenerCount](../classes/internal_.IncomingMessage.md#listenercount)

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

[IncomingMessage](../classes/internal_.IncomingMessage.md).[listeners](../classes/internal_.IncomingMessage.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[off](../classes/internal_.IncomingMessage.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

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

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:439

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:440

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:441

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:442

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:443

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:444

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:445

▸ **on**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[on](../classes/internal_.IncomingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:446

___

### once

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

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

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:447

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:448

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:449

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:450

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:451

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:452

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:453

▸ **once**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[once](../classes/internal_.IncomingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:454

___

### param

▸ **param**(`name`, `defaultValue?`): `string`

**`deprecated`** since 4.11 Use either req.params, req.body or req.query, as applicable.

Return the value of param `name` when present or `defaultValue`.

 - Checks route placeholders, ex: _/user/:id_
 - Checks body params, ex: id=12, {"id":12}
 - Checks query string params, ex: ?id=12

To utilize request bodies, `req.body`
should be an object. This can be done by using
the `connect.bodyParser()` middleware.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `defaultValue?` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:512

___

### pause

▸ **pause**(): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

**`since`** v0.9.4

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[pause](../classes/internal_.IncomingMessage.md#pause)

#### Defined in

node_modules/@types/node/stream.d.ts:242

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

[IncomingMessage](../classes/internal_.IncomingMessage.md).[pipe](../classes/internal_.IncomingMessage.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:24

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

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

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:455

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:456

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:457

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:458

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:459

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:460

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:461

▸ **prependListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependListener](../classes/internal_.IncomingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:462

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

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

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:463

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:464

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:465

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:466

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:467

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:468

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:469

▸ **prependOnceListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[prependOnceListener](../classes/internal_.IncomingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:470

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`boolean`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[push](../classes/internal_.IncomingMessage.md#push)

#### Defined in

node_modules/@types/node/stream.d.ts:398

___

### range

▸ **range**(`size`, `options?`): `undefined` \| [`Ranges`](internal_.Ranges.md) \| [`Result`](../modules/internal_.md#result)

Parse Range header field, capping to the given `size`.

Unspecified ranges such as "0-" require knowledge of your resource length. In
the case of a byte range this is of course the total number of bytes.
If the Range header field is not given `undefined` is returned.
If the Range header field is given, return value is a result of range-parser.
See more ./types/range-parser/index.d.ts

NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
should respond with 4 users when available, not 3.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options?` | [`Options`](internal_.Options.md) |

#### Returns

`undefined` \| [`Ranges`](internal_.Ranges.md) \| [`Result`](../modules/internal_.md#result)

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:491

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

[IncomingMessage](../classes/internal_.IncomingMessage.md).[rawListeners](../classes/internal_.IncomingMessage.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method pulls some data out of the internal buffer and
returns it. If no data available to be read, `null` is returned. By default,
the data will be returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](internal_.Request.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[read](../classes/internal_.IncomingMessage.md#read)

#### Defined in

node_modules/@types/node/stream.d.ts:195

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

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

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeAllListeners](../classes/internal_.IncomingMessage.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

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

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:471

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:472

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:473

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:474

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:475

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:476

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:477

▸ **removeListener**(`event`, `listener`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[removeListener](../classes/internal_.IncomingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:478

___

### resume

▸ **resume**(): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

**`since`** v0.9.4

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[resume](../classes/internal_.IncomingMessage.md#resume)

#### Defined in

node_modules/@types/node/stream.d.ts:261

___

### setEncoding

▸ **setEncoding**(`encoding`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | The encoding to use. |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[setEncoding](../classes/internal_.IncomingMessage.md#setencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:220

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

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

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[setMaxListeners](../classes/internal_.IncomingMessage.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

Calls `message.socket.setTimeout(msecs, callback)`.

**`since`** v0.5.9

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs` | `number` |
| `callback?` | () => `void` |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[setTimeout](../classes/internal_.IncomingMessage.md#settimeout)

#### Defined in

node_modules/@types/node/http.d.ts:912

___

### unpipe

▸ **unpipe**(`destination?`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](internal_.Request.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | [`WritableStream`](internal_.WritableStream.md) | Optional specific stream to unpipe |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[unpipe](../classes/internal_.IncomingMessage.md#unpipe)

#### Defined in

node_modules/@types/node/stream.d.ts:305

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.match(/\n\n/)) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
      } else {
        // Still reading the header.
        header += str;
      }
    }
  }
}
```

Unlike [push](internal_.Request.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](internal_.Request.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](internal_.Request.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

**`since`** v0.9.11

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[unshift](../classes/internal_.IncomingMessage.md#unshift)

#### Defined in

node_modules/@types/node/stream.d.ts:371

___

### wrap

▸ **wrap**(`stream`): [`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](internal_.Request.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](internal_.ReadableStream.md) | An "old style" readable stream |

#### Returns

[`Request`](internal_.Request.md)<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

#### Inherited from

[IncomingMessage](../classes/internal_.IncomingMessage.md).[wrap](../classes/internal_.IncomingMessage.md#wrap)

#### Defined in

node_modules/@types/node/stream.d.ts:397
