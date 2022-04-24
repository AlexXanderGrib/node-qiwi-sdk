[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Socket

# Class: Socket

[<internal>](../modules/internal_.md).Socket

This class is an abstraction of a TCP socket or a streaming `IPC` endpoint
(uses named pipes on Windows, and Unix domain sockets otherwise). It is also
an `EventEmitter`.

A `net.Socket` can be created by the user and used directly to interact with
a server. For example, it is returned by {@link createConnection},
so the user can use it to talk to the server.

It can also be created by Node.js and passed to the user when a connection
is received. For example, it is passed to the listeners of a `'connection'` event emitted on a [Server](internal_.Server.md), so the user can use
it to interact with the client.

**`since`** v0.3.4

## Hierarchy

- [`Duplex`](internal_.Duplex.md)

  ↳ **`Socket`**

## Table of contents

### Constructors

- [constructor](internal_.Socket.md#constructor)

### Properties

- [allowHalfOpen](internal_.Socket.md#allowhalfopen)
- [bufferSize](internal_.Socket.md#buffersize)
- [bytesRead](internal_.Socket.md#bytesread)
- [bytesWritten](internal_.Socket.md#byteswritten)
- [connecting](internal_.Socket.md#connecting)
- [destroyed](internal_.Socket.md#destroyed)
- [localAddress](internal_.Socket.md#localaddress)
- [localPort](internal_.Socket.md#localport)
- [readable](internal_.Socket.md#readable)
- [readableAborted](internal_.Socket.md#readableaborted)
- [readableDidRead](internal_.Socket.md#readabledidread)
- [readableEncoding](internal_.Socket.md#readableencoding)
- [readableEnded](internal_.Socket.md#readableended)
- [readableFlowing](internal_.Socket.md#readableflowing)
- [readableHighWaterMark](internal_.Socket.md#readablehighwatermark)
- [readableLength](internal_.Socket.md#readablelength)
- [readableObjectMode](internal_.Socket.md#readableobjectmode)
- [readyState](internal_.Socket.md#readystate)
- [remoteAddress](internal_.Socket.md#remoteaddress)
- [remoteFamily](internal_.Socket.md#remotefamily)
- [remotePort](internal_.Socket.md#remoteport)
- [writable](internal_.Socket.md#writable)
- [writableCorked](internal_.Socket.md#writablecorked)
- [writableEnded](internal_.Socket.md#writableended)
- [writableFinished](internal_.Socket.md#writablefinished)
- [writableHighWaterMark](internal_.Socket.md#writablehighwatermark)
- [writableLength](internal_.Socket.md#writablelength)
- [writableObjectMode](internal_.Socket.md#writableobjectmode)
- [captureRejectionSymbol](internal_.Socket.md#capturerejectionsymbol)
- [captureRejections](internal_.Socket.md#capturerejections)
- [defaultMaxListeners](internal_.Socket.md#defaultmaxlisteners)
- [errorMonitor](internal_.Socket.md#errormonitor)

### Methods

- [[asyncIterator]](internal_.Socket.md#[asynciterator])
- [\_construct](internal_.Socket.md#_construct)
- [\_destroy](internal_.Socket.md#_destroy)
- [\_final](internal_.Socket.md#_final)
- [\_read](internal_.Socket.md#_read)
- [\_write](internal_.Socket.md#_write)
- [\_writev](internal_.Socket.md#_writev)
- [addListener](internal_.Socket.md#addlistener)
- [address](internal_.Socket.md#address)
- [connect](internal_.Socket.md#connect)
- [cork](internal_.Socket.md#cork)
- [destroy](internal_.Socket.md#destroy)
- [emit](internal_.Socket.md#emit)
- [end](internal_.Socket.md#end)
- [eventNames](internal_.Socket.md#eventnames)
- [getMaxListeners](internal_.Socket.md#getmaxlisteners)
- [isPaused](internal_.Socket.md#ispaused)
- [listenerCount](internal_.Socket.md#listenercount)
- [listeners](internal_.Socket.md#listeners)
- [off](internal_.Socket.md#off)
- [on](internal_.Socket.md#on)
- [once](internal_.Socket.md#once)
- [pause](internal_.Socket.md#pause)
- [pipe](internal_.Socket.md#pipe)
- [prependListener](internal_.Socket.md#prependlistener)
- [prependOnceListener](internal_.Socket.md#prependoncelistener)
- [push](internal_.Socket.md#push)
- [rawListeners](internal_.Socket.md#rawlisteners)
- [read](internal_.Socket.md#read)
- [ref](internal_.Socket.md#ref)
- [removeAllListeners](internal_.Socket.md#removealllisteners)
- [removeListener](internal_.Socket.md#removelistener)
- [resume](internal_.Socket.md#resume)
- [setDefaultEncoding](internal_.Socket.md#setdefaultencoding)
- [setEncoding](internal_.Socket.md#setencoding)
- [setKeepAlive](internal_.Socket.md#setkeepalive)
- [setMaxListeners](internal_.Socket.md#setmaxlisteners)
- [setNoDelay](internal_.Socket.md#setnodelay)
- [setTimeout](internal_.Socket.md#settimeout)
- [uncork](internal_.Socket.md#uncork)
- [unpipe](internal_.Socket.md#unpipe)
- [unref](internal_.Socket.md#unref)
- [unshift](internal_.Socket.md#unshift)
- [wrap](internal_.Socket.md#wrap)
- [write](internal_.Socket.md#write)
- [from](internal_.Socket.md#from)
- [getEventListeners](internal_.Socket.md#geteventlisteners)
- [isDisturbed](internal_.Socket.md#isdisturbed)
- [listenerCount](internal_.Socket.md#listenercount-1)
- [on](internal_.Socket.md#on-1)
- [once](internal_.Socket.md#once-1)
- [setMaxListeners](internal_.Socket.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Socket**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SocketConstructorOpts`](../interfaces/internal_.SocketConstructorOpts.md) |

#### Overrides

[Duplex](internal_.Duplex.md).[constructor](internal_.Duplex.md#constructor)

#### Defined in

node_modules/@types/node/net.d.ts:78

## Properties

### allowHalfOpen

• **allowHalfOpen**: `boolean`

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `false`.

This can be changed manually to change the half-open behavior of an existing`Duplex` stream instance, but must be changed before the `'end'` event is
emitted.

**`since`** v0.9.4

#### Inherited from

[Duplex](internal_.Duplex.md).[allowHalfOpen](internal_.Duplex.md#allowhalfopen)

#### Defined in

node_modules/@types/node/stream.d.ts:819

___

### bufferSize

• `Readonly` **bufferSize**: `number`

This property shows the number of characters buffered for writing. The buffer
may contain strings whose length after encoding is not yet known. So this number
is only an approximation of the number of bytes in the buffer.

`net.Socket` has the property that `socket.write()` always works. This is to
help users get up and running quickly. The computer cannot always keep up
with the amount of data that is written to a socket. The network connection
simply might be too slow. Node.js will internally queue up the data written to a
socket and send it out over the wire when it is possible.

The consequence of this internal buffering is that memory may grow.
Users who experience large or growing `bufferSize` should attempt to
"throttle" the data flows in their program with `socket.pause()` and `socket.resume()`.

**`since`** v0.3.8

**`deprecated`** Since v14.6.0 - Use `writableLength` instead.

#### Defined in

node_modules/@types/node/net.d.ts:231

___

### bytesRead

• `Readonly` **bytesRead**: `number`

The amount of received bytes.

**`since`** v0.5.3

#### Defined in

node_modules/@types/node/net.d.ts:236

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

The amount of bytes sent.

**`since`** v0.5.3

#### Defined in

node_modules/@types/node/net.d.ts:241

___

### connecting

• `Readonly` **connecting**: `boolean`

If `true`,`socket.connect(options[, connectListener])` was
called and has not yet finished. It will stay `true` until the socket becomes
connected, then it is set to `false` and the `'connect'` event is emitted. Note
that the `socket.connect(options[, connectListener])` callback is a listener for the `'connect'` event.

**`since`** v6.1.0

#### Defined in

node_modules/@types/node/net.d.ts:249

___

### destroyed

• `Readonly` **destroyed**: `boolean`

See `writable.destroyed` for further details.

#### Overrides

[Duplex](internal_.Duplex.md).[destroyed](internal_.Duplex.md#destroyed)

#### Defined in

node_modules/@types/node/net.d.ts:253

___

### localAddress

• `Optional` `Readonly` **localAddress**: `string`

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

**`since`** v0.9.6

#### Defined in

node_modules/@types/node/net.d.ts:260

___

### localPort

• `Optional` `Readonly` **localPort**: `number`

The numeric representation of the local port. For example, `80` or `21`.

**`since`** v0.9.6

#### Defined in

node_modules/@types/node/net.d.ts:265

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`since`** v11.4.0

#### Inherited from

[Duplex](internal_.Duplex.md).[readable](internal_.Duplex.md#readable)

#### Defined in

node_modules/@types/node/stream.d.ts:71

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`since`** v16.8.0

**`experimental`**

#### Inherited from

[Duplex](internal_.Duplex.md).[readableAborted](internal_.Duplex.md#readableaborted)

#### Defined in

node_modules/@types/node/stream.d.ts:65

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`since`** v16.7.0, v14.18.0

**`experimental`**

#### Inherited from

[Duplex](internal_.Duplex.md).[readableDidRead](internal_.Duplex.md#readabledidread)

#### Defined in

node_modules/@types/node/stream.d.ts:77

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| [`BufferEncoding`](../modules/internal_.md#bufferencoding)

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`since`** v12.7.0

#### Inherited from

[Duplex](internal_.Duplex.md).[readableEncoding](internal_.Duplex.md#readableencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:82

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`since`** v12.9.0

#### Inherited from

[Duplex](internal_.Duplex.md).[readableEnded](internal_.Duplex.md#readableended)

#### Defined in

node_modules/@types/node/stream.d.ts:87

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`since`** v9.4.0

#### Inherited from

[Duplex](internal_.Duplex.md).[readableFlowing](internal_.Duplex.md#readableflowing)

#### Defined in

node_modules/@types/node/stream.d.ts:93

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`since`** v9.3.0

#### Inherited from

[Duplex](internal_.Duplex.md).[readableHighWaterMark](internal_.Duplex.md#readablehighwatermark)

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

[Duplex](internal_.Duplex.md).[readableLength](internal_.Duplex.md#readablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:105

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`since`** v12.3.0

#### Inherited from

[Duplex](internal_.Duplex.md).[readableObjectMode](internal_.Duplex.md#readableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:110

___

### readyState

• `Readonly` **readyState**: [`SocketReadyState`](../modules/internal_.md#socketreadystate)

This property represents the state of the connection as a string.

**`see`** {https://nodejs.org/api/net.html#socketreadystate}

**`since`** v0.5.0

#### Defined in

node_modules/@types/node/net.d.ts:271

___

### remoteAddress

• `Optional` `Readonly` **remoteAddress**: `string`

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**`since`** v0.5.10

#### Defined in

node_modules/@types/node/net.d.ts:277

___

### remoteFamily

• `Optional` `Readonly` **remoteFamily**: `string`

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`.

**`since`** v0.11.14

#### Defined in

node_modules/@types/node/net.d.ts:282

___

### remotePort

• `Optional` `Readonly` **remotePort**: `number`

The numeric representation of the remote port. For example, `80` or `21`.

**`since`** v0.5.10

#### Defined in

node_modules/@types/node/net.d.ts:287

___

### writable

• `Readonly` **writable**: `boolean`

#### Inherited from

[Duplex](internal_.Duplex.md).[writable](internal_.Duplex.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:803

___

### writableCorked

• `Readonly` **writableCorked**: `number`

#### Inherited from

[Duplex](internal_.Duplex.md).[writableCorked](internal_.Duplex.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:809

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

#### Inherited from

[Duplex](internal_.Duplex.md).[writableEnded](internal_.Duplex.md#writableended)

#### Defined in

node_modules/@types/node/stream.d.ts:804

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

#### Inherited from

[Duplex](internal_.Duplex.md).[writableFinished](internal_.Duplex.md#writablefinished)

#### Defined in

node_modules/@types/node/stream.d.ts:805

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

#### Inherited from

[Duplex](internal_.Duplex.md).[writableHighWaterMark](internal_.Duplex.md#writablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:806

___

### writableLength

• `Readonly` **writableLength**: `number`

#### Inherited from

[Duplex](internal_.Duplex.md).[writableLength](internal_.Duplex.md#writablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:807

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

#### Inherited from

[Duplex](internal_.Duplex.md).[writableObjectMode](internal_.Duplex.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:808

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.IncomingMessage.md#capturerejectionsymbol)

#### Inherited from

[Duplex](internal_.Duplex.md).[captureRejectionSymbol](internal_.Duplex.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Duplex](internal_.Duplex.md).[captureRejections](internal_.Duplex.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Duplex](internal_.Duplex.md).[defaultMaxListeners](internal_.Duplex.md#defaultmaxlisteners)

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

[Duplex](internal_.Duplex.md).[errorMonitor](internal_.Duplex.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:300

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

#### Inherited from

[Duplex](internal_.Duplex.md).[[asyncIterator]](internal_.Duplex.md#[asynciterator])

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

[Duplex](internal_.Duplex.md).[_construct](internal_.Duplex.md#_construct)

#### Defined in

node_modules/@types/node/stream.d.ts:117

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[Duplex](internal_.Duplex.md).[_destroy](internal_.Duplex.md#_destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:851

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

[Duplex](internal_.Duplex.md).[_final](internal_.Duplex.md#_final)

#### Defined in

node_modules/@types/node/stream.d.ts:852

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

[Duplex](internal_.Duplex.md).[_read](internal_.Duplex.md#_read)

#### Defined in

node_modules/@types/node/stream.d.ts:118

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

[Duplex](internal_.Duplex.md).[_write](internal_.Duplex.md#_write)

#### Defined in

node_modules/@types/node/stream.d.ts:843

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

[Duplex](internal_.Duplex.md).[_writev](internal_.Duplex.md#_writev)

#### Defined in

node_modules/@types/node/stream.d.ts:844

___

### addListener

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

events.EventEmitter
  1. close
  2. connect
  3. data
  4. drain
  5. end
  6. error
  7. lookup
  8. timeout

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:312

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`hadError`: `boolean`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:313

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:314

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:315

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:316

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:317

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:318

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[addListener](internal_.Duplex.md#addlistener)

#### Defined in

node_modules/@types/node/net.d.ts:319

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.addListener

#### Defined in

node_modules/@types/node/net.d.ts:320

▸ **addListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.addListener

#### Defined in

node_modules/@types/node/net.d.ts:321

___

### address

▸ **address**(): {} \| [`AddressInfo`](../interfaces/internal_.AddressInfo.md)

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

**`since`** v0.1.90

#### Returns

{} \| [`AddressInfo`](../interfaces/internal_.AddressInfo.md)

#### Defined in

node_modules/@types/node/net.d.ts:199

___

### connect

▸ **connect**(`options`, `connectionListener?`): [`Socket`](internal_.Socket.md)

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SocketConnectOpts`](../modules/internal_.md#socketconnectopts) |
| `connectionListener?` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Defined in

node_modules/@types/node/net.d.ts:115

▸ **connect**(`port`, `host`, `connectionListener?`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Defined in

node_modules/@types/node/net.d.ts:116

▸ **connect**(`port`, `connectionListener?`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `connectionListener?` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Defined in

node_modules/@types/node/net.d.ts:117

▸ **connect**(`path`, `connectionListener?`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Defined in

node_modules/@types/node/net.d.ts:118

___

### cork

▸ **cork**(): `void`

#### Returns

`void`

#### Inherited from

[Duplex](internal_.Duplex.md).[cork](internal_.Duplex.md#cork)

#### Defined in

node_modules/@types/node/stream.d.ts:859

___

### destroy

▸ **destroy**(`error?`): [`Socket`](internal_.Socket.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

**`since`** v8.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[destroy](internal_.Duplex.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:411

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
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:322

▸ **emit**(`event`, `hadError`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `hadError` | `boolean` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:323

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:324

▸ **emit**(`event`, `data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `data` | [`Buffer`](../modules/internal_.md#buffer) |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:325

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:326

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:327

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:328

▸ **emit**(`event`, `err`, `address`, `family`, `host`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `err` | `Error` |
| `address` | `string` |
| `family` | `string` \| `number` |
| `host` | `string` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[emit](internal_.Duplex.md#emit)

#### Defined in

node_modules/@types/node/net.d.ts:329

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |

#### Returns

`boolean`

#### Overrides

stream.Duplex.emit

#### Defined in

node_modules/@types/node/net.d.ts:330

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |

#### Returns

`boolean`

#### Overrides

stream.Duplex.emit

#### Defined in

node_modules/@types/node/net.d.ts:331

___

### end

▸ **end**(`callback?`): [`Socket`](internal_.Socket.md)

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

**`since`** v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | () => `void` | Optional callback for when the socket is finished. |

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Overrides

[Duplex](internal_.Duplex.md).[end](internal_.Duplex.md#end)

#### Defined in

node_modules/@types/node/net.d.ts:298

▸ **end**(`buffer`, `callback?`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `callback?` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[end](internal_.Duplex.md#end)

#### Defined in

node_modules/@types/node/net.d.ts:299

▸ **end**(`str`, `encoding?`, `callback?`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `Uint8Array` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback?` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[end](internal_.Duplex.md#end)

#### Defined in

node_modules/@types/node/net.d.ts:300

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

[Duplex](internal_.Duplex.md).[eventNames](internal_.Duplex.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.Socket.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[Duplex](internal_.Duplex.md).[getMaxListeners](internal_.Duplex.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:499

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

[Duplex](internal_.Duplex.md).[isPaused](internal_.Duplex.md#ispaused)

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

[Duplex](internal_.Duplex.md).[listenerCount](internal_.Duplex.md#listenercount)

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

[Duplex](internal_.Duplex.md).[listeners](internal_.Duplex.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`Socket`](internal_.Socket.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[off](internal_.Duplex.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

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

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:332

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`hadError`: `boolean`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:333

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:334

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:335

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:336

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:337

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:338

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on)

#### Defined in

node_modules/@types/node/net.d.ts:339

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.on

#### Defined in

node_modules/@types/node/net.d.ts:340

▸ **on**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.on

#### Defined in

node_modules/@types/node/net.d.ts:341

___

### once

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

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

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:342

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`hadError`: `boolean`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:343

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:344

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:345

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:346

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:347

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:348

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once)

#### Defined in

node_modules/@types/node/net.d.ts:349

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.once

#### Defined in

node_modules/@types/node/net.d.ts:350

▸ **once**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.once

#### Defined in

node_modules/@types/node/net.d.ts:351

___

### pause

▸ **pause**(): [`Socket`](internal_.Socket.md)

Pauses the reading of data. That is, `'data'` events will not be emitted.
Useful to throttle back an upload.

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Overrides

[Duplex](internal_.Duplex.md).[pause](internal_.Duplex.md#pause)

#### Defined in

node_modules/@types/node/net.d.ts:130

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[Duplex](internal_.Duplex.md).[pipe](internal_.Duplex.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:24

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

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

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:352

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`hadError`: `boolean`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:353

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:354

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:355

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:356

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:357

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:358

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependListener](internal_.Duplex.md#prependlistener)

#### Defined in

node_modules/@types/node/net.d.ts:359

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.prependListener

#### Defined in

node_modules/@types/node/net.d.ts:360

▸ **prependListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.prependListener

#### Defined in

node_modules/@types/node/net.d.ts:361

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

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

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:362

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`hadError`: `boolean`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:363

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:364

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: [`Buffer`](../modules/internal_.md#buffer)) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:365

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:366

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:367

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:368

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

[Duplex](internal_.Duplex.md).[prependOnceListener](internal_.Duplex.md#prependoncelistener)

#### Defined in

node_modules/@types/node/net.d.ts:369

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.prependOnceListener

#### Defined in

node_modules/@types/node/net.d.ts:370

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Overrides

stream.Duplex.prependOnceListener

#### Defined in

node_modules/@types/node/net.d.ts:371

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

[Duplex](internal_.Duplex.md).[push](internal_.Duplex.md#push)

#### Defined in

node_modules/@types/node/stream.d.ts:398

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

[Duplex](internal_.Duplex.md).[rawListeners](internal_.Duplex.md#rawlisteners)

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

Calling [read](internal_.Socket.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

[Duplex](internal_.Duplex.md).[read](internal_.Duplex.md#read)

#### Defined in

node_modules/@types/node/stream.d.ts:195

___

### ref

▸ **ref**(): [`Socket`](internal_.Socket.md)

Opposite of `unref()`, calling `ref()` on a previously `unref`ed socket will_not_ let the program exit if it's the only socket left (the default behavior).
If the socket is `ref`ed calling `ref` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Defined in

node_modules/@types/node/net.d.ts:213

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Socket`](internal_.Socket.md)

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

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeAllListeners](internal_.Duplex.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

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

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:471

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:472

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:473

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:474

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:475

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:476

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:477

▸ **removeListener**(`event`, `listener`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[removeListener](internal_.Duplex.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:478

___

### resume

▸ **resume**(): [`Socket`](internal_.Socket.md)

Resumes reading after a call to `socket.pause()`.

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Overrides

[Duplex](internal_.Duplex.md).[resume](internal_.Duplex.md#resume)

#### Defined in

node_modules/@types/node/net.d.ts:135

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`Socket`](internal_.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[setDefaultEncoding](internal_.Duplex.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:855

___

### setEncoding

▸ **setEncoding**(`encoding?`): [`Socket`](internal_.Socket.md)

Set the encoding for the socket as a `Readable Stream`. See `readable.setEncoding()` for more information.

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Overrides

[Duplex](internal_.Duplex.md).[setEncoding](internal_.Duplex.md#setencoding)

#### Defined in

node_modules/@types/node/net.d.ts:124

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`, `initialDelay?`): [`Socket`](internal_.Socket.md)

Enable/disable keep-alive functionality, and optionally set the initial
delay before the first keepalive probe is sent on an idle socket.

Set `initialDelay` (in milliseconds) to set the delay between the last
data packet received and the first keepalive probe. Setting `0` for`initialDelay` will leave the value unchanged from the default
(or previous) setting.

Enabling the keep-alive functionality will set the following socket options:

* `SO_KEEPALIVE=1`
* `TCP_KEEPIDLE=initialDelay`
* `TCP_KEEPCNT=10`
* `TCP_KEEPINTVL=1`

**`since`** v0.1.92

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Defined in

node_modules/@types/node/net.d.ts:193

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Socket`](internal_.Socket.md)

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

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[setMaxListeners](internal_.Duplex.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): [`Socket`](internal_.Socket.md)

Enable/disable the use of Nagle's algorithm.

When a TCP connection is created, it will have Nagle's algorithm enabled.

Nagle's algorithm delays data before it is sent via the network. It attempts
to optimize throughput at the expense of latency.

Passing `true` for `noDelay` or not passing an argument will disable Nagle's
algorithm for the socket. Passing `false` for `noDelay` will enable Nagle's
algorithm.

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Defined in

node_modules/@types/node/net.d.ts:173

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`Socket`](internal_.Socket.md)

Sets the socket to timeout after `timeout` milliseconds of inactivity on
the socket. By default `net.Socket` do not have a timeout.

When an idle timeout is triggered the socket will receive a `'timeout'` event but the connection will not be severed. The user must manually call `socket.end()` or `socket.destroy()` to
end the connection.

```js
socket.setTimeout(3000);
socket.on('timeout', () => {
  console.log('socket timeout');
  socket.end();
});
```

If `timeout` is 0, then the existing idle timeout is disabled.

The optional `callback` parameter will be added as a one-time listener for the `'timeout'` event.

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `callback?` | () => `void` |

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Defined in

node_modules/@types/node/net.d.ts:157

___

### uncork

▸ **uncork**(): `void`

#### Returns

`void`

#### Inherited from

[Duplex](internal_.Duplex.md).[uncork](internal_.Duplex.md#uncork)

#### Defined in

node_modules/@types/node/stream.d.ts:860

___

### unpipe

▸ **unpipe**(`destination?`): [`Socket`](internal_.Socket.md)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](internal_.Socket.md#pipe) method.

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
| `destination?` | [`WritableStream`](../interfaces/internal_.WritableStream.md) | Optional specific stream to unpipe |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[unpipe](internal_.Duplex.md#unpipe)

#### Defined in

node_modules/@types/node/stream.d.ts:305

___

### unref

▸ **unref**(): [`Socket`](internal_.Socket.md)

Calling `unref()` on a socket will allow the program to exit if this is the only
active socket in the event system. If the socket is already `unref`ed calling`unref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Socket`](internal_.Socket.md)

The socket itself.

#### Defined in

node_modules/@types/node/net.d.ts:206

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

Unlike [push](internal_.Socket.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](internal_.Socket.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](internal_.Socket.md#push) will reset the reading state appropriately,
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

[Duplex](internal_.Duplex.md).[unshift](internal_.Duplex.md#unshift)

#### Defined in

node_modules/@types/node/stream.d.ts:371

___

### wrap

▸ **wrap**(`stream`): [`Socket`](internal_.Socket.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](internal_.Socket.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
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
| `stream` | [`ReadableStream`](../interfaces/internal_.ReadableStream.md) | An "old style" readable stream |

#### Returns

[`Socket`](internal_.Socket.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[wrap](internal_.Duplex.md#wrap)

#### Defined in

node_modules/@types/node/stream.d.ts:397

___

### write

▸ **write**(`buffer`, `cb?`): `boolean`

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | (`err?`: `Error`) => `void` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[write](internal_.Duplex.md#write)

#### Defined in

node_modules/@types/node/net.d.ts:94

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `Uint8Array` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | (`err?`: `Error`) => `void` |

#### Returns

`boolean`

#### Overrides

[Duplex](internal_.Duplex.md).[write](internal_.Duplex.md#write)

#### Defined in

node_modules/@types/node/net.d.ts:95

___

### from

▸ `Static` **from**(`src`): [`Duplex`](internal_.Duplex.md)

A utility method for creating duplex streams.

- `Stream` converts writable stream into writable `Duplex` and readable stream
  to `Duplex`.
- `Blob` converts into readable `Duplex`.
- `string` converts into readable `Duplex`.
- `ArrayBuffer` converts into readable `Duplex`.
- `AsyncIterable` converts into a readable `Duplex`. Cannot yield `null`.
- `AsyncGeneratorFunction` converts into a readable/writable transform
  `Duplex`. Must take a source `AsyncIterable` as first parameter. Cannot yield
  `null`.
- `AsyncFunction` converts into a writable `Duplex`. Must return
  either `null` or `undefined`
- `Object ({ writable, readable })` converts `readable` and
  `writable` into `Stream` and then combines them into `Duplex` where the
  `Duplex` will write to the `writable` and read from the `readable`.
- `Promise` converts into readable `Duplex`. Value `null` is ignored.

**`since`** v16.8.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` \| [`Object`](../modules/internal_.md#object) \| `Promise`<`any`\> \| `ArrayBuffer` \| [`Stream`](internal_.Stream.md) \| [`Iterable`](../interfaces/internal_.Iterable.md)<`any`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)<`any`\> \| [`Blob`](../interfaces/internal_.Blob.md) \| [`AsyncGeneratorFunction`](../interfaces/internal_.AsyncGeneratorFunction.md) |

#### Returns

[`Duplex`](internal_.Duplex.md)

#### Inherited from

[Duplex](internal_.Duplex.md).[from](internal_.Duplex.md#from)

#### Defined in

node_modules/@types/node/stream.d.ts:842

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

[Duplex](internal_.Duplex.md).[getEventListeners](internal_.Duplex.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:270

___

### isDisturbed

▸ `Static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

**`since`** v16.8.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](internal_.Readable.md) \| [`ReadableStream`](../interfaces/internal_.ReadableStream.md) |

#### Returns

`boolean`

#### Inherited from

[Duplex](internal_.Duplex.md).[isDisturbed](internal_.Duplex.md#isdisturbed)

#### Defined in

node_modules/@types/node/stream.d.ts:59

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

[Duplex](internal_.Duplex.md).[listenerCount](internal_.Duplex.md#listenercount-1)

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

[Duplex](internal_.Duplex.md).[on](internal_.Duplex.md#on-1)

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

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once-1)

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

[Duplex](internal_.Duplex.md).[once](internal_.Duplex.md#once-1)

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

[Duplex](internal_.Duplex.md).[setMaxListeners](internal_.Duplex.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:290
