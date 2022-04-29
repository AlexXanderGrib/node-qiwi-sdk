[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WritableStream

# Interface: WritableStream

[<internal>](../modules/internal_.md).WritableStream

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter-2.md)

  ↳ **`WritableStream`**

  ↳↳ [`ReadWriteStream`](internal_.ReadWriteStream.md)

## Implemented by

- [`Writable`](../classes/internal_.Writable.md)
- [`Writable`](../classes/internal_.internal.Writable.md)

## Table of contents

### Properties

- [writable](internal_.WritableStream.md#writable)

### Methods

- [addListener](internal_.WritableStream.md#addlistener)
- [emit](internal_.WritableStream.md#emit)
- [end](internal_.WritableStream.md#end)
- [eventNames](internal_.WritableStream.md#eventnames)
- [getMaxListeners](internal_.WritableStream.md#getmaxlisteners)
- [listenerCount](internal_.WritableStream.md#listenercount)
- [listeners](internal_.WritableStream.md#listeners)
- [off](internal_.WritableStream.md#off)
- [on](internal_.WritableStream.md#on)
- [once](internal_.WritableStream.md#once)
- [prependListener](internal_.WritableStream.md#prependlistener)
- [prependOnceListener](internal_.WritableStream.md#prependoncelistener)
- [rawListeners](internal_.WritableStream.md#rawlisteners)
- [removeAllListeners](internal_.WritableStream.md#removealllisteners)
- [removeListener](internal_.WritableStream.md#removelistener)
- [setMaxListeners](internal_.WritableStream.md#setmaxlisteners)
- [write](internal_.WritableStream.md#write)

## Properties

### writable

• **writable**: `boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:215

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`WritableStream`](internal_.WritableStream.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[addListener](internal_.EventEmitter-2.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:327

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

[EventEmitter](internal_.EventEmitter-2.md).[emit](internal_.EventEmitter-2.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:583

___

### end

▸ **end**(`cb?`): [`WritableStream`](internal_.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`WritableStream`](internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/globals.d.ts:218

▸ **end**(`data`, `cb?`): [`WritableStream`](internal_.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

[`WritableStream`](internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/globals.d.ts:219

▸ **end**(`str`, `encoding?`, `cb?`): [`WritableStream`](internal_.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | () => `void` |

#### Returns

[`WritableStream`](internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/globals.d.ts:220

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

[EventEmitter](internal_.EventEmitter-2.md).[eventNames](internal_.EventEmitter-2.md#eventnames)

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

[EventEmitter](internal_.EventEmitter-2.md).[getMaxListeners](internal_.EventEmitter-2.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:499

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

[EventEmitter](internal_.EventEmitter-2.md).[listenerCount](internal_.EventEmitter-2.md#listenercount)

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

[EventEmitter](internal_.EventEmitter-2.md).[listeners](internal_.EventEmitter-2.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`WritableStream`](internal_.WritableStream.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[off](internal_.EventEmitter-2.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`eventName`, `listener`): [`WritableStream`](internal_.WritableStream.md)

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

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[on](internal_.EventEmitter-2.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:358

___

### once

▸ **once**(`eventName`, `listener`): [`WritableStream`](internal_.WritableStream.md)

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

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[once](internal_.EventEmitter-2.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:387

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`WritableStream`](internal_.WritableStream.md)

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

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[prependListener](internal_.EventEmitter-2.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`WritableStream`](internal_.WritableStream.md)

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

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[prependOnceListener](internal_.EventEmitter-2.md#prependoncelistener)

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

[EventEmitter](internal_.EventEmitter-2.md).[rawListeners](internal_.EventEmitter-2.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`WritableStream`](internal_.WritableStream.md)

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

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[removeAllListeners](internal_.EventEmitter-2.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`WritableStream`](internal_.WritableStream.md)

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

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[removeListener](internal_.EventEmitter-2.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:467

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WritableStream`](internal_.WritableStream.md)

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

[`WritableStream`](internal_.WritableStream.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[setMaxListeners](internal_.EventEmitter-2.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### write

▸ **write**(`buffer`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:216

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:217
