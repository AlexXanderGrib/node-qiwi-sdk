[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Server

# Class: Server

[<internal>](../modules/internal_.md).Server

**`since`** v0.1.17

## Hierarchy

- [`Server`](internal_.Server-1.md)

  ↳ **`Server`**

## Table of contents

### Constructors

- [constructor](internal_.Server.md#constructor)

### Properties

- [connections](internal_.Server.md#connections)
- [headersTimeout](internal_.Server.md#headerstimeout)
- [keepAliveTimeout](internal_.Server.md#keepalivetimeout)
- [listening](internal_.Server.md#listening)
- [maxConnections](internal_.Server.md#maxconnections)
- [maxHeadersCount](internal_.Server.md#maxheaderscount)
- [maxRequestsPerSocket](internal_.Server.md#maxrequestspersocket)
- [requestTimeout](internal_.Server.md#requesttimeout)
- [timeout](internal_.Server.md#timeout)
- [captureRejectionSymbol](internal_.Server.md#capturerejectionsymbol)
- [captureRejections](internal_.Server.md#capturerejections)
- [defaultMaxListeners](internal_.Server.md#defaultmaxlisteners)
- [errorMonitor](internal_.Server.md#errormonitor)

### Methods

- [addListener](internal_.Server.md#addlistener)
- [address](internal_.Server.md#address)
- [close](internal_.Server.md#close)
- [emit](internal_.Server.md#emit)
- [eventNames](internal_.Server.md#eventnames)
- [getConnections](internal_.Server.md#getconnections)
- [getMaxListeners](internal_.Server.md#getmaxlisteners)
- [listen](internal_.Server.md#listen)
- [listenerCount](internal_.Server.md#listenercount)
- [listeners](internal_.Server.md#listeners)
- [off](internal_.Server.md#off)
- [on](internal_.Server.md#on)
- [once](internal_.Server.md#once)
- [prependListener](internal_.Server.md#prependlistener)
- [prependOnceListener](internal_.Server.md#prependoncelistener)
- [rawListeners](internal_.Server.md#rawlisteners)
- [ref](internal_.Server.md#ref)
- [removeAllListeners](internal_.Server.md#removealllisteners)
- [removeListener](internal_.Server.md#removelistener)
- [setMaxListeners](internal_.Server.md#setmaxlisteners)
- [setTimeout](internal_.Server.md#settimeout)
- [unref](internal_.Server.md#unref)
- [getEventListeners](internal_.Server.md#geteventlisteners)
- [listenerCount](internal_.Server.md#listenercount-1)
- [on](internal_.Server.md#on-1)
- [once](internal_.Server.md#once-1)
- [setMaxListeners](internal_.Server.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Server**(`requestListener?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestListener?` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Overrides

[Server](internal_.Server-1.md).[constructor](internal_.Server-1.md#constructor)

#### Defined in

node_modules/@types/node/http.d.ts:164

• **new Server**(`options`, `requestListener?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ServerOptions`](../interfaces/internal_.ServerOptions.md) |
| `requestListener?` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Overrides

[Server](internal_.Server-1.md).[constructor](internal_.Server-1.md#constructor)

#### Defined in

node_modules/@types/node/http.d.ts:165

## Properties

### connections

• **connections**: `number`

#### Inherited from

[Server](internal_.Server-1.md).[connections](internal_.Server-1.md#connections)

#### Defined in

node_modules/@types/node/net.d.ts:522

___

### headersTimeout

• **headersTimeout**: `number`

Limit the amount of time the parser will wait to receive the complete HTTP
headers.

In case of inactivity, the rules defined in `server.timeout` apply. However,
that inactivity based timeout would still allow the connection to be kept open
if the headers are being sent very slowly (by default, up to a byte per 2
minutes). In order to prevent this, whenever header data arrives an additional
check is made that more than `server.headersTimeout` milliseconds has not
passed since the connection was established. If the check fails, a `'timeout'`event is emitted on the server object, and (by default) the socket is destroyed.
See `server.timeout` for more information on how timeout behavior can be
customized.

**`since`** v11.3.0, v10.14.0

#### Defined in

node_modules/@types/node/http.d.ts:224

___

### keepAliveTimeout

• **keepAliveTimeout**: `number`

The number of milliseconds of inactivity a server needs to wait for additional
incoming data, after it has finished writing the last response, before a socket
will be destroyed. If the server receives new data before the keep-alive
timeout has fired, it will reset the regular inactivity timeout, i.e.,`server.timeout`.

A value of `0` will disable the keep-alive timeout behavior on incoming
connections.
A value of `0` makes the http server behave similarly to Node.js versions prior
to 8.0.0, which did not have a keep-alive timeout.

The socket timeout logic is set up on connection, so changing this value only
affects new connections to the server, not any existing connections.

**`since`** v8.0.0

#### Defined in

node_modules/@types/node/http.d.ts:240

___

### listening

• **listening**: `boolean`

Indicates whether or not the server is listening for connections.

**`since`** v5.7.0

#### Inherited from

[Server](internal_.Server-1.md).[listening](internal_.Server-1.md#listening)

#### Defined in

node_modules/@types/node/net.d.ts:527

___

### maxConnections

• **maxConnections**: `number`

Set this property to reject connections when the server's connection count gets
high.

It is not recommended to use this option once a socket has been sent to a child
with `child_process.fork()`.

**`since`** v0.2.0

#### Inherited from

[Server](internal_.Server-1.md).[maxConnections](internal_.Server-1.md#maxconnections)

#### Defined in

node_modules/@types/node/net.d.ts:521

___

### maxHeadersCount

• **maxHeadersCount**: ``null`` \| `number`

Limits maximum incoming headers count. If set to 0, no limit will be applied.

**`since`** v0.7.0

#### Defined in

node_modules/@types/node/http.d.ts:186

___

### maxRequestsPerSocket

• **maxRequestsPerSocket**: ``null`` \| `number`

The maximum number of requests socket can handle
before closing keep alive connection.

A value of `0` will disable the limit.

When the limit is reached it will set the `Connection` header value to `close`,
but will not actually close the connection, subsequent requests sent
after the limit is reached will get `503 Service Unavailable` as a response.

**`since`** v16.10.0

#### Defined in

node_modules/@types/node/http.d.ts:198

___

### requestTimeout

• **requestTimeout**: `number`

Sets the timeout value in milliseconds for receiving the entire request from
the client.

If the timeout expires, the server responds with status 408 without
forwarding the request to the request listener and then closes the connection.

It must be set to a non-zero value (e.g. 120 seconds) to protect against
potential Denial-of-Service attacks in case the server is deployed without a
reverse proxy in front.

**`since`** v14.11.0

#### Defined in

node_modules/@types/node/http.d.ts:253

___

### timeout

• **timeout**: `number`

The number of milliseconds of inactivity before a socket is presumed
to have timed out.

A value of `0` will disable the timeout behavior on incoming connections.

The socket timeout logic is set up on connection, so changing this
value only affects new connections to the server, not any existing connections.

**`since`** v0.9.12

#### Defined in

node_modules/@types/node/http.d.ts:209

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.IncomingMessage.md#capturerejectionsymbol)

#### Inherited from

[Server](internal_.Server-1.md).[captureRejectionSymbol](internal_.Server-1.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Server](internal_.Server-1.md).[captureRejections](internal_.Server-1.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Server](internal_.Server-1.md).[defaultMaxListeners](internal_.Server-1.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:307

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](internal_.IncomingMessage.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[Server](internal_.Server-1.md).[errorMonitor](internal_.Server-1.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:300

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[addListener](internal_.Server-1.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:254

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[addListener](internal_.Server-1.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:255

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: [`Socket`](internal_.Socket.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[addListener](internal_.Server-1.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:256

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[addListener](internal_.Server-1.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:257

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[addListener](internal_.Server-1.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:258

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:259

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:260

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: [`Duplex`](internal_.Duplex.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:261

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:262

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:263

▸ **addListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:264

___

### address

▸ **address**(): ``null`` \| `string` \| [`AddressInfo`](../interfaces/internal_.AddressInfo.md)

Returns the bound `address`, the address `family` name, and `port` of the server
as reported by the operating system if listening on an IP socket
(useful to find which port was assigned when getting an OS-assigned address):`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`.

For a server listening on a pipe or Unix domain socket, the name is returned
as a string.

```js
const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

// Grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});
```

`server.address()` returns `null` before the `'listening'` event has been
emitted or after calling `server.close()`.

**`since`** v0.1.90

#### Returns

``null`` \| `string` \| [`AddressInfo`](../interfaces/internal_.AddressInfo.md)

#### Inherited from

[Server](internal_.Server-1.md).[address](internal_.Server-1.md#address)

#### Defined in

node_modules/@types/node/net.d.ts:492

___

### close

▸ **close**(`callback?`): [`Server`](internal_.Server.md)

Stops the server from accepting new connections and keeps existing
connections. This function is asynchronous, the server is finally closed
when all connections are ended and the server emits a `'close'` event.
The optional `callback` will be called once the `'close'` event occurs. Unlike
that event, it will be called with an `Error` as its only argument if the server
was not open when it was closed.

**`since`** v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`err?`: `Error`) => `void` | Called when the server is closed. |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[close](internal_.Server-1.md#close)

#### Defined in

node_modules/@types/node/net.d.ts:465

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

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
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

[Server](internal_.Server-1.md).[emit](internal_.Server-1.md#emit)

#### Defined in

node_modules/@types/node/http.d.ts:265

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Overrides

[Server](internal_.Server-1.md).[emit](internal_.Server-1.md#emit)

#### Defined in

node_modules/@types/node/http.d.ts:266

▸ **emit**(`event`, `socket`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `socket` | [`Socket`](internal_.Socket.md) |

#### Returns

`boolean`

#### Overrides

[Server](internal_.Server-1.md).[emit](internal_.Server-1.md#emit)

#### Defined in

node_modules/@types/node/http.d.ts:267

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Overrides

[Server](internal_.Server-1.md).[emit](internal_.Server-1.md#emit)

#### Defined in

node_modules/@types/node/http.d.ts:268

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |

#### Returns

`boolean`

#### Overrides

[Server](internal_.Server-1.md).[emit](internal_.Server-1.md#emit)

#### Defined in

node_modules/@types/node/http.d.ts:269

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `req` | [`IncomingMessage`](internal_.IncomingMessage.md) |
| `res` | [`ServerResponse`](internal_.ServerResponse.md) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:270

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `req` | [`IncomingMessage`](internal_.IncomingMessage.md) |
| `res` | [`ServerResponse`](internal_.ServerResponse.md) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:271

▸ **emit**(`event`, `err`, `socket`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `err` | `Error` |
| `socket` | [`Duplex`](internal_.Duplex.md) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:272

▸ **emit**(`event`, `req`, `socket`, `head`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `req` | [`IncomingMessage`](internal_.IncomingMessage.md) |
| `socket` | [`Duplex`](internal_.Duplex.md) |
| `head` | [`Buffer`](../modules/internal_.md#buffer) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:273

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `req` | [`IncomingMessage`](internal_.IncomingMessage.md) |
| `res` | [`ServerResponse`](internal_.ServerResponse.md) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:274

▸ **emit**(`event`, `req`, `socket`, `head`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `req` | [`IncomingMessage`](internal_.IncomingMessage.md) |
| `socket` | [`Duplex`](internal_.Duplex.md) |
| `head` | [`Buffer`](../modules/internal_.md#buffer) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:275

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

[Server](internal_.Server-1.md).[eventNames](internal_.Server-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### getConnections

▸ **getConnections**(`cb`): `void`

Asynchronously get the number of concurrent connections on the server. Works
when sockets were sent to forks.

Callback should take two arguments `err` and `count`.

**`since`** v0.9.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`error`: ``null`` \| `Error`, `count`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

[Server](internal_.Server-1.md).[getConnections](internal_.Server-1.md#getconnections)

#### Defined in

node_modules/@types/node/net.d.ts:500

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.Server.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[Server](internal_.Server-1.md).[getMaxListeners](internal_.Server-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### listen

▸ **listen**(`port?`, `hostname?`, `backlog?`, `listeningListener?`): [`Server`](internal_.Server.md)

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(handle[, backlog][, callback])`
* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum
length of the queue of pending connections. The actual length will be determined
by the OS through sysctl settings such as `tcp_max_syn_backlog` and `somaxconn`on Linux. The default value of this parameter is 511 (not 512).

All [Socket](internal_.Socket.md) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for
details).

The `server.listen()` method can be called again if and only if there was an
error during the first `server.listen()` call or `server.close()` has been
called. Otherwise, an `ERR_SERVER_ALREADY_LISTEN` error will be thrown.

One of the most common errors raised when listening is `EADDRINUSE`.
This happens when another server is already listening on the requested`port`/`path`/`handle`. One way to handle this would be to retry
after a certain amount of time:

```js
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:446

▸ **listen**(`port?`, `hostname?`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:447

▸ **listen**(`port?`, `backlog?`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:448

▸ **listen**(`port?`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:449

▸ **listen**(`path`, `backlog?`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:450

▸ **listen**(`path`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:451

▸ **listen**(`options`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ListenOptions`](../interfaces/internal_.ListenOptions.md) |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:452

▸ **listen**(`handle`, `backlog?`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:453

▸ **listen**(`handle`, `listeningListener?`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[listen](internal_.Server-1.md#listen)

#### Defined in

node_modules/@types/node/net.d.ts:454

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

[Server](internal_.Server-1.md).[listenerCount](internal_.Server-1.md#listenercount)

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

[Server](internal_.Server-1.md).[listeners](internal_.Server-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`Server`](internal_.Server.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[off](internal_.Server-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

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
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[on](internal_.Server-1.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:276

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[on](internal_.Server-1.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:277

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: [`Socket`](internal_.Socket.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[on](internal_.Server-1.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:278

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[on](internal_.Server-1.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:279

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[on](internal_.Server-1.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:280

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:281

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:282

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: [`Duplex`](internal_.Duplex.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:283

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:284

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:285

▸ **on**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:286

___

### once

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

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
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[once](internal_.Server-1.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:287

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[once](internal_.Server-1.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:288

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: [`Socket`](internal_.Socket.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[once](internal_.Server-1.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:289

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[once](internal_.Server-1.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:290

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[once](internal_.Server-1.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:291

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:292

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:293

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: [`Duplex`](internal_.Duplex.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:294

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:295

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:296

▸ **once**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:297

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

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
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependListener](internal_.Server-1.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:298

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependListener](internal_.Server-1.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:299

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: [`Socket`](internal_.Socket.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependListener](internal_.Server-1.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:300

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependListener](internal_.Server-1.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:301

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependListener](internal_.Server-1.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:302

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:303

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:304

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: [`Duplex`](internal_.Duplex.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:305

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:306

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:307

▸ **prependListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:308

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

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
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependOnceListener](internal_.Server-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:309

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependOnceListener](internal_.Server-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:310

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: [`Socket`](internal_.Socket.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependOnceListener](internal_.Server-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:311

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependOnceListener](internal_.Server-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:312

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

[Server](internal_.Server-1.md).[prependOnceListener](internal_.Server-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:313

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:314

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:315

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: [`Duplex`](internal_.Duplex.md)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:316

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:317

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/internal_.md#requestlistener) |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:318

▸ **prependOnceListener**(`event`, `listener`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](internal_.IncomingMessage.md), `socket`: [`Duplex`](internal_.Duplex.md), `head`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:319

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

[Server](internal_.Server-1.md).[rawListeners](internal_.Server-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### ref

▸ **ref**(): [`Server`](internal_.Server.md)

Opposite of `unref()`, calling `ref()` on a previously `unref`ed server will_not_ let the program exit if it's the only server left (the default behavior).
If the server is `ref`ed calling `ref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[ref](internal_.Server-1.md#ref)

#### Defined in

node_modules/@types/node/net.d.ts:506

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Server`](internal_.Server.md)

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

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[removeAllListeners](internal_.Server-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Server`](internal_.Server.md)

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

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[removeListener](internal_.Server-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:467

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Server`](internal_.Server.md)

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

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[setMaxListeners](internal_.Server-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setTimeout

▸ **setTimeout**(`msecs?`, `callback?`): [`Server`](internal_.Server.md)

Sets the timeout value for sockets, and emits a `'timeout'` event on
the Server object, passing the socket as an argument, if a timeout
occurs.

If there is a `'timeout'` event listener on the Server object, then it
will be called with the timed-out socket as an argument.

By default, the Server does not timeout sockets. However, if a callback
is assigned to the Server's `'timeout'` event, timeouts must be handled
explicitly.

**`since`** v0.9.12

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs?` | `number` |
| `callback?` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Defined in

node_modules/@types/node/http.d.ts:180

▸ **setTimeout**(`callback`): [`Server`](internal_.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[`Server`](internal_.Server.md)

#### Defined in

node_modules/@types/node/http.d.ts:181

___

### unref

▸ **unref**(): [`Server`](internal_.Server.md)

Calling `unref()` on a server will allow the program to exit if this is the only
active server in the event system. If the server is already `unref`ed calling`unref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Server`](internal_.Server.md)

#### Inherited from

[Server](internal_.Server-1.md).[unref](internal_.Server-1.md#unref)

#### Defined in

node_modules/@types/node/net.d.ts:512

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) \| [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md) |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Server](internal_.Server-1.md).[getEventListeners](internal_.Server-1.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:270

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[Server](internal_.Server-1.md).[listenerCount](internal_.Server-1.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:242

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) | - |

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[Server](internal_.Server-1.md).[on](internal_.Server-1.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:221

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`NodeEventTarget`](../interfaces/internal_.NodeEventTarget.md) |
| `eventName` | `string` \| `symbol` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Server](internal_.Server-1.md).[once](internal_.Server-1.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md) |
| `eventName` | `string` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Server](internal_.Server-1.md).[once](internal_.Server-1.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:162

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `EventEmitter.setMaxListeners()` method allows the default limit to be
modified (if eventTargets is empty) or modify the limit specified in every `EventTarget` | `EventEmitter` passed as arguments.
The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

```js
EventEmitter.setMaxListeners(20);
// Equivalent to
EventEmitter.defaultMaxListeners = 20;

const eventTarget = new EventTarget();
// Only way to increase limit for `EventTarget` instances
// as these doesn't expose its own `setMaxListeners` method
EventEmitter.setMaxListeners(20, eventTarget);
```

**`since`** v15.3.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |
| `...eventTargets` | ([`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) \| [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md))[] |

#### Returns

`void`

#### Inherited from

[Server](internal_.Server-1.md).[setMaxListeners](internal_.Server-1.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:290
