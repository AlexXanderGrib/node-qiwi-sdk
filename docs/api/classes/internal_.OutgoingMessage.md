[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OutgoingMessage

# Class: OutgoingMessage

[<internal>](../modules/internal_.md).OutgoingMessage

This class serves as the parent class of {@link ClientRequest} and [ServerResponse](internal_.ServerResponse.md). It is an abstract of outgoing message from
the perspective of the participants of HTTP transaction.

**`since`** v0.1.17

## Hierarchy

- [`Writable`](internal_.Writable.md)

  ↳ **`OutgoingMessage`**

  ↳↳ [`ServerResponse`](internal_.ServerResponse.md)

## Table of contents

### Constructors

- [constructor](internal_.OutgoingMessage.md#constructor)

### Properties

- [chunkedEncoding](internal_.OutgoingMessage.md#chunkedencoding)
- [connection](internal_.OutgoingMessage.md#connection)
- [destroyed](internal_.OutgoingMessage.md#destroyed)
- [finished](internal_.OutgoingMessage.md#finished)
- [headersSent](internal_.OutgoingMessage.md#headerssent)
- [req](internal_.OutgoingMessage.md#req)
- [sendDate](internal_.OutgoingMessage.md#senddate)
- [shouldKeepAlive](internal_.OutgoingMessage.md#shouldkeepalive)
- [socket](internal_.OutgoingMessage.md#socket)
- [useChunkedEncodingByDefault](internal_.OutgoingMessage.md#usechunkedencodingbydefault)
- [writable](internal_.OutgoingMessage.md#writable)
- [writableCorked](internal_.OutgoingMessage.md#writablecorked)
- [writableEnded](internal_.OutgoingMessage.md#writableended)
- [writableFinished](internal_.OutgoingMessage.md#writablefinished)
- [writableHighWaterMark](internal_.OutgoingMessage.md#writablehighwatermark)
- [writableLength](internal_.OutgoingMessage.md#writablelength)
- [writableObjectMode](internal_.OutgoingMessage.md#writableobjectmode)
- [captureRejectionSymbol](internal_.OutgoingMessage.md#capturerejectionsymbol)
- [captureRejections](internal_.OutgoingMessage.md#capturerejections)
- [defaultMaxListeners](internal_.OutgoingMessage.md#defaultmaxlisteners)
- [errorMonitor](internal_.OutgoingMessage.md#errormonitor)

### Methods

- [\_construct](internal_.OutgoingMessage.md#_construct)
- [\_destroy](internal_.OutgoingMessage.md#_destroy)
- [\_final](internal_.OutgoingMessage.md#_final)
- [\_write](internal_.OutgoingMessage.md#_write)
- [\_writev](internal_.OutgoingMessage.md#_writev)
- [addListener](internal_.OutgoingMessage.md#addlistener)
- [addTrailers](internal_.OutgoingMessage.md#addtrailers)
- [cork](internal_.OutgoingMessage.md#cork)
- [destroy](internal_.OutgoingMessage.md#destroy)
- [emit](internal_.OutgoingMessage.md#emit)
- [end](internal_.OutgoingMessage.md#end)
- [eventNames](internal_.OutgoingMessage.md#eventnames)
- [flushHeaders](internal_.OutgoingMessage.md#flushheaders)
- [getHeader](internal_.OutgoingMessage.md#getheader)
- [getHeaderNames](internal_.OutgoingMessage.md#getheadernames)
- [getHeaders](internal_.OutgoingMessage.md#getheaders)
- [getMaxListeners](internal_.OutgoingMessage.md#getmaxlisteners)
- [hasHeader](internal_.OutgoingMessage.md#hasheader)
- [listenerCount](internal_.OutgoingMessage.md#listenercount)
- [listeners](internal_.OutgoingMessage.md#listeners)
- [off](internal_.OutgoingMessage.md#off)
- [on](internal_.OutgoingMessage.md#on)
- [once](internal_.OutgoingMessage.md#once)
- [pipe](internal_.OutgoingMessage.md#pipe)
- [prependListener](internal_.OutgoingMessage.md#prependlistener)
- [prependOnceListener](internal_.OutgoingMessage.md#prependoncelistener)
- [rawListeners](internal_.OutgoingMessage.md#rawlisteners)
- [removeAllListeners](internal_.OutgoingMessage.md#removealllisteners)
- [removeHeader](internal_.OutgoingMessage.md#removeheader)
- [removeListener](internal_.OutgoingMessage.md#removelistener)
- [setDefaultEncoding](internal_.OutgoingMessage.md#setdefaultencoding)
- [setHeader](internal_.OutgoingMessage.md#setheader)
- [setMaxListeners](internal_.OutgoingMessage.md#setmaxlisteners)
- [setTimeout](internal_.OutgoingMessage.md#settimeout)
- [uncork](internal_.OutgoingMessage.md#uncork)
- [write](internal_.OutgoingMessage.md#write)
- [getEventListeners](internal_.OutgoingMessage.md#geteventlisteners)
- [listenerCount](internal_.OutgoingMessage.md#listenercount-1)
- [on](internal_.OutgoingMessage.md#on-1)
- [once](internal_.OutgoingMessage.md#once-1)
- [setMaxListeners](internal_.OutgoingMessage.md#setmaxlisteners-1)

## Constructors

### constructor

• **new OutgoingMessage**()

#### Overrides

[Writable](internal_.Writable.md).[constructor](internal_.Writable.md#constructor)

#### Defined in

node_modules/@types/node/http.d.ts:355

## Properties

### chunkedEncoding

• **chunkedEncoding**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:328

___

### connection

• `Readonly` **connection**: ``null`` \| [`Socket`](internal_.Socket.md)

Aliases of `outgoingMessage.socket`

**`since`** v0.3.0

**`deprecated`** Since v15.12.0,v14.17.1 - Use `socket` instead.

#### Defined in

node_modules/@types/node/http.d.ts:346

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

**`since`** v8.0.0

#### Inherited from

[Writable](internal_.Writable.md).[destroyed](internal_.Writable.md#destroyed)

#### Defined in

node_modules/@types/node/stream.d.ts:543

___

### finished

• **finished**: `boolean`

**`deprecated`** Use `writableEnded` instead.

#### Defined in

node_modules/@types/node/http.d.ts:335

___

### headersSent

• `Readonly` **headersSent**: `boolean`

Read-only. `true` if the headers were sent, otherwise `false`.

**`since`** v0.9.3

#### Defined in

node_modules/@types/node/http.d.ts:340

___

### req

• `Readonly` **req**: [`IncomingMessage`](internal_.IncomingMessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:327

___

### sendDate

• **sendDate**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:331

___

### shouldKeepAlive

• **shouldKeepAlive**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:329

___

### socket

• `Readonly` **socket**: ``null`` \| [`Socket`](internal_.Socket.md)

Reference to the underlying socket. Usually, users will not want to access
this property.

After calling `outgoingMessage.end()`, this property will be nulled.

**`since`** v0.3.0

#### Defined in

node_modules/@types/node/http.d.ts:354

___

### useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:330

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

**`since`** v11.4.0

#### Inherited from

[Writable](internal_.Writable.md).[writable](internal_.Writable.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:504

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`since`** v13.2.0, v12.16.0

#### Inherited from

[Writable](internal_.Writable.md).[writableCorked](internal_.Writable.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:538

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`since`** v12.9.0

#### Inherited from

[Writable](internal_.Writable.md).[writableEnded](internal_.Writable.md#writableended)

#### Defined in

node_modules/@types/node/stream.d.ts:510

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`since`** v12.6.0

#### Inherited from

[Writable](internal_.Writable.md).[writableFinished](internal_.Writable.md#writablefinished)

#### Defined in

node_modules/@types/node/stream.d.ts:515

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`since`** v9.3.0

#### Inherited from

[Writable](internal_.Writable.md).[writableHighWaterMark](internal_.Writable.md#writablehighwatermark)

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

[Writable](internal_.Writable.md).[writableLength](internal_.Writable.md#writablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:527

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`since`** v12.3.0

#### Inherited from

[Writable](internal_.Writable.md).[writableObjectMode](internal_.Writable.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:532

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.IncomingMessage.md#capturerejectionsymbol)

#### Inherited from

[Writable](internal_.Writable.md).[captureRejectionSymbol](internal_.Writable.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Writable](internal_.Writable.md).[captureRejections](internal_.Writable.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Writable](internal_.Writable.md).[defaultMaxListeners](internal_.Writable.md#defaultmaxlisteners)

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

[Writable](internal_.Writable.md).[errorMonitor](internal_.Writable.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:300

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

[Writable](internal_.Writable.md).[_construct](internal_.Writable.md#_construct)

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

[Writable](internal_.Writable.md).[_destroy](internal_.Writable.md#_destroy)

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

[Writable](internal_.Writable.md).[_final](internal_.Writable.md#_final)

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

[Writable](internal_.Writable.md).[_write](internal_.Writable.md#_write)

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

[Writable](internal_.Writable.md).[_writev](internal_.Writable.md#_writev)

#### Defined in

node_modules/@types/node/stream.d.ts:546

___

### addListener

▸ **addListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[addListener](internal_.Writable.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:721

▸ **addListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[addListener](internal_.Writable.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:722

▸ **addListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[addListener](internal_.Writable.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:723

▸ **addListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[addListener](internal_.Writable.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:724

▸ **addListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[addListener](internal_.Writable.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:725

▸ **addListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[addListener](internal_.Writable.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:726

▸ **addListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[addListener](internal_.Writable.md#addlistener)

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
| `headers` | [`OutgoingHttpHeaders`](../interfaces/internal_.OutgoingHttpHeaders.md) \| readonly [`string`, `string`][] |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:444

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](internal_.OutgoingMessage.md#uncork) or [end](internal_.OutgoingMessage.md#end) methods are called.

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

[Writable](internal_.Writable.md).[cork](internal_.Writable.md#cork)

#### Defined in

node_modules/@types/node/stream.d.ts:659

___

### destroy

▸ **destroy**(`error?`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[destroy](internal_.Writable.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:710

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

[Writable](internal_.Writable.md).[emit](internal_.Writable.md#emit)

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

[Writable](internal_.Writable.md).[emit](internal_.Writable.md#emit)

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

[Writable](internal_.Writable.md).[emit](internal_.Writable.md#emit)

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

[Writable](internal_.Writable.md).[emit](internal_.Writable.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:731

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | [`Readable`](internal_.Readable.md) |

#### Returns

`boolean`

#### Inherited from

[Writable](internal_.Writable.md).[emit](internal_.Writable.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:732

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | [`Readable`](internal_.Readable.md) |

#### Returns

`boolean`

#### Inherited from

[Writable](internal_.Writable.md).[emit](internal_.Writable.md#emit)

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

[Writable](internal_.Writable.md).[emit](internal_.Writable.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:734

___

### end

▸ **end**(`cb?`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](internal_.OutgoingMessage.md#write) method after calling [end](internal_.OutgoingMessage.md#end) will raise an error.

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[end](internal_.Writable.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:642

▸ **end**(`chunk`, `cb?`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[end](internal_.Writable.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:643

▸ **end**(`chunk`, `encoding`, `cb?`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[end](internal_.Writable.md#end)

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

[Writable](internal_.Writable.md).[eventNames](internal_.Writable.md#eventnames)

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

#### Defined in

node_modules/@types/node/http.d.ts:457

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

#### Defined in

node_modules/@types/node/http.d.ts:403

___

### getHeaders

▸ **getHeaders**(): [`OutgoingHttpHeaders`](../interfaces/internal_.OutgoingHttpHeaders.md)

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

[`OutgoingHttpHeaders`](../interfaces/internal_.OutgoingHttpHeaders.md)

#### Defined in

node_modules/@types/node/http.d.ts:397

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.OutgoingMessage.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[Writable](internal_.Writable.md).[getMaxListeners](internal_.Writable.md#getmaxlisteners)

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

#### Defined in

node_modules/@types/node/http.d.ts:413

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

[Writable](internal_.Writable.md).[listenerCount](internal_.Writable.md#listenercount)

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

[Writable](internal_.Writable.md).[listeners](internal_.Writable.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[off](internal_.Writable.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:735

▸ **on**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:736

▸ **on**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:737

▸ **on**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:738

▸ **on**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:739

▸ **on**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:740

▸ **on**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:741

___

### once

▸ **once**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:742

▸ **once**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:743

▸ **once**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:744

▸ **once**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:745

▸ **once**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:746

▸ **once**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:747

▸ **once**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:748

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

[Writable](internal_.Writable.md).[pipe](internal_.Writable.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:24

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependListener](internal_.Writable.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:749

▸ **prependListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependListener](internal_.Writable.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:750

▸ **prependListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependListener](internal_.Writable.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:751

▸ **prependListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependListener](internal_.Writable.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:752

▸ **prependListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependListener](internal_.Writable.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:753

▸ **prependListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependListener](internal_.Writable.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:754

▸ **prependListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependListener](internal_.Writable.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:755

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependOnceListener](internal_.Writable.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:756

▸ **prependOnceListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependOnceListener](internal_.Writable.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:757

▸ **prependOnceListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependOnceListener](internal_.Writable.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:758

▸ **prependOnceListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependOnceListener](internal_.Writable.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:759

▸ **prependOnceListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependOnceListener](internal_.Writable.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:760

▸ **prependOnceListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependOnceListener](internal_.Writable.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:761

▸ **prependOnceListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[prependOnceListener](internal_.Writable.md#prependoncelistener)

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

[Writable](internal_.Writable.md).[rawListeners](internal_.Writable.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeAllListeners](internal_.Writable.md#removealllisteners)

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

#### Defined in

node_modules/@types/node/http.d.ts:422

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeListener](internal_.Writable.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:763

▸ **removeListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeListener](internal_.Writable.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:764

▸ **removeListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeListener](internal_.Writable.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:765

▸ **removeListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeListener](internal_.Writable.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:766

▸ **removeListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeListener](internal_.Writable.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:767

▸ **removeListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeListener](internal_.Writable.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:768

▸ **removeListener**(`event`, `listener`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[removeListener](internal_.Writable.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:769

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | The new default encoding |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[setDefaultEncoding](internal_.Writable.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:619

___

### setHeader

▸ **setHeader**(`name`, `value`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

Sets a single header value for the header object.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |
| `value` | `string` \| `number` \| readonly `string`[] | Header value |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:368

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

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

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Inherited from

[Writable](internal_.Writable.md).[setMaxListeners](internal_.Writable.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`OutgoingMessage`](internal_.OutgoingMessage.md)

Once a socket is associated with the message and is connected,`socket.setTimeout()` will be called with `msecs` as the first parameter.

**`since`** v0.9.12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msecs` | `number` | - |
| `callback?` | () => `void` | Optional function to be called when a timeout occurs. Same as binding to the `timeout` event. |

#### Returns

[`OutgoingMessage`](internal_.OutgoingMessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:361

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](internal_.OutgoingMessage.md#cork) was called.

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

[Writable](internal_.Writable.md).[uncork](internal_.Writable.md#uncork)

#### Defined in

node_modules/@types/node/stream.d.ts:693

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
recommended to encapsulate the logic into a `Readable` and use [pipe](internal_.OutgoingMessage.md#pipe). However, if calling `write()` is preferred, it is
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

[Writable](internal_.Writable.md).[write](internal_.Writable.md#write)

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

[Writable](internal_.Writable.md).[write](internal_.Writable.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:613

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

[Writable](internal_.Writable.md).[getEventListeners](internal_.Writable.md#geteventlisteners)

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

[Writable](internal_.Writable.md).[listenerCount](internal_.Writable.md#listenercount-1)

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

[Writable](internal_.Writable.md).[on](internal_.Writable.md#on-1)

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

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once-1)

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

[Writable](internal_.Writable.md).[once](internal_.Writable.md#once-1)

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

[Writable](internal_.Writable.md).[setMaxListeners](internal_.Writable.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:290
