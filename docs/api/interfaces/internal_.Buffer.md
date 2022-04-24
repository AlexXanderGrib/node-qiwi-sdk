[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Buffer

# Interface: Buffer

[<internal>](../modules/internal_.md).Buffer

## Hierarchy

- `Uint8Array`

  ↳ **`Buffer`**

## Table of contents

### Properties

- [BYTES\_PER\_ELEMENT](internal_.Buffer.md#bytes_per_element)
- [[toStringTag]](internal_.Buffer.md#[tostringtag])
- [buffer](internal_.Buffer.md#buffer)
- [byteLength](internal_.Buffer.md#bytelength)
- [byteOffset](internal_.Buffer.md#byteoffset)
- [length](internal_.Buffer.md#length)

### Methods

- [[iterator]](internal_.Buffer.md#[iterator])
- [at](internal_.Buffer.md#at)
- [compare](internal_.Buffer.md#compare)
- [copy](internal_.Buffer.md#copy)
- [copyWithin](internal_.Buffer.md#copywithin)
- [entries](internal_.Buffer.md#entries)
- [equals](internal_.Buffer.md#equals)
- [every](internal_.Buffer.md#every)
- [fill](internal_.Buffer.md#fill)
- [filter](internal_.Buffer.md#filter)
- [find](internal_.Buffer.md#find)
- [findIndex](internal_.Buffer.md#findindex)
- [forEach](internal_.Buffer.md#foreach)
- [includes](internal_.Buffer.md#includes)
- [indexOf](internal_.Buffer.md#indexof)
- [join](internal_.Buffer.md#join)
- [keys](internal_.Buffer.md#keys)
- [lastIndexOf](internal_.Buffer.md#lastindexof)
- [map](internal_.Buffer.md#map)
- [readBigInt64BE](internal_.Buffer.md#readbigint64be)
- [readBigInt64LE](internal_.Buffer.md#readbigint64le)
- [readBigUInt64BE](internal_.Buffer.md#readbiguint64be)
- [readBigUInt64LE](internal_.Buffer.md#readbiguint64le)
- [readBigUint64BE](internal_.Buffer.md#readbiguint64be-1)
- [readBigUint64LE](internal_.Buffer.md#readbiguint64le-1)
- [readDoubleBE](internal_.Buffer.md#readdoublebe)
- [readDoubleLE](internal_.Buffer.md#readdoublele)
- [readFloatBE](internal_.Buffer.md#readfloatbe)
- [readFloatLE](internal_.Buffer.md#readfloatle)
- [readInt16BE](internal_.Buffer.md#readint16be)
- [readInt16LE](internal_.Buffer.md#readint16le)
- [readInt32BE](internal_.Buffer.md#readint32be)
- [readInt32LE](internal_.Buffer.md#readint32le)
- [readInt8](internal_.Buffer.md#readint8)
- [readIntBE](internal_.Buffer.md#readintbe)
- [readIntLE](internal_.Buffer.md#readintle)
- [readUInt16BE](internal_.Buffer.md#readuint16be)
- [readUInt16LE](internal_.Buffer.md#readuint16le)
- [readUInt32BE](internal_.Buffer.md#readuint32be)
- [readUInt32LE](internal_.Buffer.md#readuint32le)
- [readUInt8](internal_.Buffer.md#readuint8)
- [readUIntBE](internal_.Buffer.md#readuintbe)
- [readUIntLE](internal_.Buffer.md#readuintle)
- [readUint16BE](internal_.Buffer.md#readuint16be-1)
- [readUint16LE](internal_.Buffer.md#readuint16le-1)
- [readUint32BE](internal_.Buffer.md#readuint32be-1)
- [readUint32LE](internal_.Buffer.md#readuint32le-1)
- [readUint8](internal_.Buffer.md#readuint8-1)
- [readUintBE](internal_.Buffer.md#readuintbe-1)
- [readUintLE](internal_.Buffer.md#readuintle-1)
- [reduce](internal_.Buffer.md#reduce)
- [reduceRight](internal_.Buffer.md#reduceright)
- [reverse](internal_.Buffer.md#reverse)
- [set](internal_.Buffer.md#set)
- [slice](internal_.Buffer.md#slice)
- [some](internal_.Buffer.md#some)
- [sort](internal_.Buffer.md#sort)
- [subarray](internal_.Buffer.md#subarray)
- [swap16](internal_.Buffer.md#swap16)
- [swap32](internal_.Buffer.md#swap32)
- [swap64](internal_.Buffer.md#swap64)
- [toJSON](internal_.Buffer.md#tojson)
- [toLocaleString](internal_.Buffer.md#tolocalestring)
- [toString](internal_.Buffer.md#tostring)
- [valueOf](internal_.Buffer.md#valueof)
- [values](internal_.Buffer.md#values)
- [write](internal_.Buffer.md#write)
- [writeBigInt64BE](internal_.Buffer.md#writebigint64be)
- [writeBigInt64LE](internal_.Buffer.md#writebigint64le)
- [writeBigUInt64BE](internal_.Buffer.md#writebiguint64be)
- [writeBigUInt64LE](internal_.Buffer.md#writebiguint64le)
- [writeBigUint64BE](internal_.Buffer.md#writebiguint64be-1)
- [writeBigUint64LE](internal_.Buffer.md#writebiguint64le-1)
- [writeDoubleBE](internal_.Buffer.md#writedoublebe)
- [writeDoubleLE](internal_.Buffer.md#writedoublele)
- [writeFloatBE](internal_.Buffer.md#writefloatbe)
- [writeFloatLE](internal_.Buffer.md#writefloatle)
- [writeInt16BE](internal_.Buffer.md#writeint16be)
- [writeInt16LE](internal_.Buffer.md#writeint16le)
- [writeInt32BE](internal_.Buffer.md#writeint32be)
- [writeInt32LE](internal_.Buffer.md#writeint32le)
- [writeInt8](internal_.Buffer.md#writeint8)
- [writeIntBE](internal_.Buffer.md#writeintbe)
- [writeIntLE](internal_.Buffer.md#writeintle)
- [writeUInt16BE](internal_.Buffer.md#writeuint16be)
- [writeUInt16LE](internal_.Buffer.md#writeuint16le)
- [writeUInt32BE](internal_.Buffer.md#writeuint32be)
- [writeUInt32LE](internal_.Buffer.md#writeuint32le)
- [writeUInt8](internal_.Buffer.md#writeuint8)
- [writeUIntBE](internal_.Buffer.md#writeuintbe)
- [writeUIntLE](internal_.Buffer.md#writeuintle)
- [writeUint16BE](internal_.Buffer.md#writeuint16be-1)
- [writeUint16LE](internal_.Buffer.md#writeuint16le-1)
- [writeUint32BE](internal_.Buffer.md#writeuint32be-1)
- [writeUint32LE](internal_.Buffer.md#writeuint32le-1)
- [writeUint8](internal_.Buffer.md#writeuint8-1)
- [writeUintBE](internal_.Buffer.md#writeuintbe-1)
- [writeUintLE](internal_.Buffer.md#writeuintle-1)

## Properties

### BYTES\_PER\_ELEMENT

• `Readonly` **BYTES\_PER\_ELEMENT**: `number`

The size in bytes of each element in the array.

#### Inherited from

Uint8Array.BYTES\_PER\_ELEMENT

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2102

___

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"Uint8Array"``

#### Inherited from

Uint8Array.\_\_@toStringTag@11

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:282

___

### buffer

• `Readonly` **buffer**: [`ArrayBufferLike`](../modules/internal_.md#arraybufferlike)

The ArrayBuffer instance referenced by the array.

#### Inherited from

Uint8Array.buffer

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2107

___

### byteLength

• `Readonly` **byteLength**: `number`

The length in bytes of the array.

#### Inherited from

Uint8Array.byteLength

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2112

___

### byteOffset

• `Readonly` **byteOffset**: `number`

The offset in bytes of the array.

#### Inherited from

Uint8Array.byteOffset

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2117

___

### length

• `Readonly` **length**: `number`

The length of the array.

#### Inherited from

Uint8Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2216

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](internal_.IterableIterator.md)<`number`\>

#### Returns

[`IterableIterator`](internal_.IterableIterator.md)<`number`\>

#### Inherited from

Uint8Array.\_\_@iterator@41

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:272

___

### at

▸ **at**(`index`): `undefined` \| `number`

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| `number`

#### Inherited from

Uint8Array.at

#### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:50

___

### compare

▸ **compare**(`target`, `targetStart?`, `targetEnd?`, `sourceStart?`, `sourceEnd?`): ``0`` \| ``1`` \| ``-1``

Compares `buf` with `target` and returns a number indicating whether `buf`comes before, after, or is the same as `target` in sort order.
Comparison is based on the actual sequence of bytes in each `Buffer`.

* `0` is returned if `target` is the same as `buf`
* `1` is returned if `target` should come _before_`buf` when sorted.
* `-1` is returned if `target` should come _after_`buf` when sorted.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

console.log(buf1.compare(buf1));
// Prints: 0
console.log(buf1.compare(buf2));
// Prints: -1
console.log(buf1.compare(buf3));
// Prints: -1
console.log(buf2.compare(buf1));
// Prints: 1
console.log(buf2.compare(buf3));
// Prints: 1
console.log([buf1, buf2, buf3].sort(Buffer.compare));
// Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (This result is equal to: [buf1, buf3, buf2].)
```

The optional `targetStart`, `targetEnd`, `sourceStart`, and `sourceEnd`arguments can be used to limit the comparison to specific ranges within `target`and `buf` respectively.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const buf2 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);

console.log(buf1.compare(buf2, 5, 9, 0, 4));
// Prints: 0
console.log(buf1.compare(buf2, 0, 6, 4));
// Prints: -1
console.log(buf1.compare(buf2, 5, 6, 5));
// Prints: 1
```

`ERR_OUT_OF_RANGE` is thrown if `targetStart < 0`, `sourceStart < 0`,`targetEnd > target.byteLength`, or `sourceEnd > source.byteLength`.

**`since`** v0.11.13

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Uint8Array` | A `Buffer` or {@link Uint8Array} with which to compare `buf`. |
| `targetStart?` | `number` | - |
| `targetEnd?` | `number` | - |
| `sourceStart?` | `number` | - |
| `sourceEnd?` | `number` | - |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

node_modules/@types/node/buffer.d.ts:707

___

### copy

▸ **copy**(`target`, `targetStart?`, `sourceStart?`, `sourceEnd?`): `number`

Copies data from a region of `buf` to a region in `target`, even if the `target`memory region overlaps with `buf`.

[`TypedArray.prototype.set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set) performs the same operation, and is available
for all TypedArrays, including Node.js `Buffer`s, although it takes
different function arguments.

```js
import { Buffer } from 'buffer';

// Create two `Buffer` instances.
const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

// Copy `buf1` bytes 16 through 19 into `buf2` starting at byte 8 of `buf2`.
buf1.copy(buf2, 8, 16, 20);
// This is equivalent to:
// buf2.set(buf1.subarray(16, 20), 8);

console.log(buf2.toString('ascii', 0, 25));
// Prints: !!!!!!!!qrst!!!!!!!!!!!!!
```

```js
import { Buffer } from 'buffer';

// Create a `Buffer` and copy data from one region to an overlapping region
// within the same `Buffer`.

const buf = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf[i] = i + 97;
}

buf.copy(buf, 0, 4, 10);

console.log(buf.toString());
// Prints: efghijghijklmnopqrstuvwxyz
```

**`since`** v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Uint8Array` | A `Buffer` or {@link Uint8Array} to copy into. |
| `targetStart?` | `number` | - |
| `sourceStart?` | `number` | - |
| `sourceEnd?` | `number` | - |

#### Returns

`number`

The number of bytes copied.

#### Defined in

node_modules/@types/node/buffer.d.ts:761

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`Buffer`](../modules/internal_.md#buffer)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

#### Inherited from

Uint8Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2128

___

### entries

▸ **entries**(): [`IterableIterator`](internal_.IterableIterator.md)<[`number`, `number`]\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of `[index, byte]` pairs from the contents
of `buf`.

```js
import { Buffer } from 'buffer';

// Log the entire contents of a `Buffer`.

const buf = Buffer.from('buffer');

for (const pair of buf.entries()) {
  console.log(pair);
}
// Prints:
//   [0, 98]
//   [1, 117]
//   [2, 102]
//   [3, 102]
//   [4, 101]
//   [5, 114]
```

**`since`** v1.1.0

#### Returns

[`IterableIterator`](internal_.IterableIterator.md)<[`number`, `number`]\>

#### Overrides

Uint8Array.entries

#### Defined in

node_modules/@types/node/buffer.d.ts:2107

___

### equals

▸ **equals**(`otherBuffer`): `boolean`

Returns `true` if both `buf` and `otherBuffer` have exactly the same bytes,`false` otherwise. Equivalent to `buf.compare(otherBuffer) === 0`.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243', 'hex');
const buf3 = Buffer.from('ABCD');

console.log(buf1.equals(buf2));
// Prints: true
console.log(buf1.equals(buf3));
// Prints: false
```

**`since`** v0.11.13

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherBuffer` | `Uint8Array` | A `Buffer` or {@link Uint8Array} with which to compare `buf`. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/buffer.d.ts:652

___

### every

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Uint8Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2138

___

### fill

▸ **fill**(`value`, `offset?`, `end?`, `encoding?`): [`Buffer`](../modules/internal_.md#buffer)

Fills `buf` with the specified `value`. If the `offset` and `end` are not given,
the entire `buf` will be filled:

```js
import { Buffer } from 'buffer';

// Fill a `Buffer` with the ASCII character 'h'.

const b = Buffer.allocUnsafe(50).fill('h');

console.log(b.toString());
// Prints: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
```

`value` is coerced to a `uint32` value if it is not a string, `Buffer`, or
integer. If the resulting integer is greater than `255` (decimal), `buf` will be
filled with `value &#x26; 255`.

If the final write of a `fill()` operation falls on a multi-byte character,
then only the bytes of that character that fit into `buf` are written:

```js
import { Buffer } from 'buffer';

// Fill a `Buffer` with character that takes up two bytes in UTF-8.

console.log(Buffer.allocUnsafe(5).fill('\u0222'));
// Prints: <Buffer c8 a2 c8 a2 c8>
```

If `value` contains invalid characters, it is truncated; if no valid
fill data remains, an exception is thrown:

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(5);

console.log(buf.fill('a'));
// Prints: <Buffer 61 61 61 61 61>
console.log(buf.fill('aazz', 'hex'));
// Prints: <Buffer aa aa aa aa aa>
console.log(buf.fill('zz', 'hex'));
// Throws an exception.
```

**`since`** v0.5.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | The value with which to fill `buf`. |
| `offset?` | `number` | - |
| `end?` | `number` | - |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | - |

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

A reference to `buf`.

#### Overrides

Uint8Array.fill

#### Defined in

node_modules/@types/node/buffer.d.ts:1945

___

### filter

▸ **filter**(`predicate`, `thisArg?`): `Uint8Array`

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) => `any` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2157

___

### find

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `number`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Uint8Array`) => `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `number`

#### Inherited from

Uint8Array.find

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2168

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Uint8Array`) => `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Uint8Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2179

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Uint8Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2188

___

### includes

▸ **includes**(`value`, `byteOffset?`, `encoding?`): `boolean`

Equivalent to `buf.indexOf() !== -1`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this is a buffer');

console.log(buf.includes('this'));
// Prints: true
console.log(buf.includes('is'));
// Prints: true
console.log(buf.includes(Buffer.from('a buffer')));
// Prints: true
console.log(buf.includes(97));
// Prints: true (97 is the decimal ASCII value for 'a')
console.log(buf.includes(Buffer.from('a buffer example')));
// Prints: false
console.log(buf.includes(Buffer.from('a buffer example').slice(0, 8)));
// Prints: true
console.log(buf.includes('this', 4));
// Prints: false
```

**`since`** v5.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| [`Buffer`](../modules/internal_.md#buffer) | What to search for. |
| `byteOffset?` | `number` | - |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | - |

#### Returns

`boolean`

`true` if `value` was found in `buf`, `false` otherwise.

#### Overrides

Uint8Array.includes

#### Defined in

node_modules/@types/node/buffer.d.ts:2137

___

### indexOf

▸ **indexOf**(`value`, `byteOffset?`, `encoding?`): `number`

If `value` is:

* a string, `value` is interpreted according to the character encoding in`encoding`.
* a `Buffer` or [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), `value` will be used in its entirety.
To compare a partial `Buffer`, use `buf.slice()`.
* a number, `value` will be interpreted as an unsigned 8-bit integer
value between `0` and `255`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this is a buffer');

console.log(buf.indexOf('this'));
// Prints: 0
console.log(buf.indexOf('is'));
// Prints: 2
console.log(buf.indexOf(Buffer.from('a buffer')));
// Prints: 8
console.log(buf.indexOf(97));
// Prints: 8 (97 is the decimal ASCII value for 'a')
console.log(buf.indexOf(Buffer.from('a buffer example')));
// Prints: -1
console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8)));
// Prints: 8

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf16le');

console.log(utf16Buffer.indexOf('\u03a3', 0, 'utf16le'));
// Prints: 4
console.log(utf16Buffer.indexOf('\u03a3', -4, 'utf16le'));
// Prints: 6
```

If `value` is not a string, number, or `Buffer`, this method will throw a`TypeError`. If `value` is a number, it will be coerced to a valid byte value,
an integer between 0 and 255.

If `byteOffset` is not a number, it will be coerced to a number. If the result
of coercion is `NaN` or `0`, then the entire buffer will be searched. This
behavior matches [`String.prototype.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).

```js
import { Buffer } from 'buffer';

const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.indexOf(99.9));
console.log(b.indexOf(256 + 99));

// Passing a byteOffset that coerces to NaN or 0.
// Prints: 1, searching the whole buffer.
console.log(b.indexOf('b', undefined));
console.log(b.indexOf('b', {}));
console.log(b.indexOf('b', null));
console.log(b.indexOf('b', []));
```

If `value` is an empty string or empty `Buffer` and `byteOffset` is less
than `buf.length`, `byteOffset` will be returned. If `value` is empty and`byteOffset` is at least `buf.length`, `buf.length` will be returned.

**`since`** v1.5.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | What to search for. |
| `byteOffset?` | `number` | - |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | - |

#### Returns

`number`

The index of the first occurrence of `value` in `buf`, or `-1` if `buf` does not contain `value`.

#### Overrides

Uint8Array.indexOf

#### Defined in

node_modules/@types/node/buffer.d.ts:2014

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Uint8Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2203

___

### keys

▸ **keys**(): [`IterableIterator`](internal_.IterableIterator.md)<`number`\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of `buf` keys (indices).

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

for (const key of buf.keys()) {
  console.log(key);
}
// Prints:
//   0
//   1
//   2
//   3
//   4
//   5
```

**`since`** v1.1.0

#### Returns

[`IterableIterator`](internal_.IterableIterator.md)<`number`\>

#### Overrides

Uint8Array.keys

#### Defined in

node_modules/@types/node/buffer.d.ts:2159

___

### lastIndexOf

▸ **lastIndexOf**(`value`, `byteOffset?`, `encoding?`): `number`

Identical to `buf.indexOf()`, except the last occurrence of `value` is found
rather than the first occurrence.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this buffer is a buffer');

console.log(buf.lastIndexOf('this'));
// Prints: 0
console.log(buf.lastIndexOf('buffer'));
// Prints: 17
console.log(buf.lastIndexOf(Buffer.from('buffer')));
// Prints: 17
console.log(buf.lastIndexOf(97));
// Prints: 15 (97 is the decimal ASCII value for 'a')
console.log(buf.lastIndexOf(Buffer.from('yolo')));
// Prints: -1
console.log(buf.lastIndexOf('buffer', 5));
// Prints: 5
console.log(buf.lastIndexOf('buffer', 4));
// Prints: -1

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf16le');

console.log(utf16Buffer.lastIndexOf('\u03a3', undefined, 'utf16le'));
// Prints: 6
console.log(utf16Buffer.lastIndexOf('\u03a3', -5, 'utf16le'));
// Prints: 4
```

If `value` is not a string, number, or `Buffer`, this method will throw a`TypeError`. If `value` is a number, it will be coerced to a valid byte value,
an integer between 0 and 255.

If `byteOffset` is not a number, it will be coerced to a number. Any arguments
that coerce to `NaN`, like `{}` or `undefined`, will search the whole buffer.
This behavior matches [`String.prototype.lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf).

```js
import { Buffer } from 'buffer';

const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.lastIndexOf(99.9));
console.log(b.lastIndexOf(256 + 99));

// Passing a byteOffset that coerces to NaN.
// Prints: 1, searching the whole buffer.
console.log(b.lastIndexOf('b', undefined));
console.log(b.lastIndexOf('b', {}));

// Passing a byteOffset that coerces to 0.
// Prints: -1, equivalent to passing 0.
console.log(b.lastIndexOf('b', null));
console.log(b.lastIndexOf('b', []));
```

If `value` is an empty string or empty `Buffer`, `byteOffset` will be returned.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | What to search for. |
| `byteOffset?` | `number` | - |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | - |

#### Returns

`number`

The index of the last occurrence of `value` in `buf`, or `-1` if `buf` does not contain `value`.

#### Overrides

Uint8Array.lastIndexOf

#### Defined in

node_modules/@types/node/buffer.d.ts:2082

___

### map

▸ **map**(`callbackfn`, `thisArg?`): `Uint8Array`

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) => `number` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2226

___

### readBigInt64BE

▸ **readBigInt64BE**(`offset?`): `bigint`

Reads a signed, big-endian 64-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

node_modules/@types/node/buffer.d.ts:1093

___

### readBigInt64LE

▸ **readBigInt64LE**(`offset?`): `bigint`

Reads a signed, little-endian 64-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

node_modules/@types/node/buffer.d.ts:1102

___

### readBigUInt64BE

▸ **readBigUInt64BE**(`offset?`): `bigint`

Reads an unsigned, big-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64BE(0));
// Prints: 4294967295n
```

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

node_modules/@types/node/buffer.d.ts:1057

___

### readBigUInt64LE

▸ **readBigUInt64LE**(`offset?`): `bigint`

Reads an unsigned, little-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64LE(0));
// Prints: 18446744069414584320n
```

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

node_modules/@types/node/buffer.d.ts:1079

___

### readBigUint64BE

▸ **readBigUint64BE**(`offset?`): `bigint`

**`alias`** Buffer.readBigUInt64BE

**`since`** v14.10.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

node_modules/@types/node/buffer.d.ts:1062

___

### readBigUint64LE

▸ **readBigUint64LE**(`offset?`): `bigint`

**`alias`** Buffer.readBigUInt64LE

**`since`** v14.10.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

node_modules/@types/node/buffer.d.ts:1084

___

### readDoubleBE

▸ **readDoubleBE**(`offset?`): `number`

Reads a 64-bit, big-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleBE(0));
// Prints: 8.20788039913184e-304
```

**`since`** v0.11.15

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1469

___

### readDoubleLE

▸ **readDoubleLE**(`offset?`): `number`

Reads a 64-bit, little-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleLE(0));
// Prints: 5.447603722011605e-270
console.log(buf.readDoubleLE(1));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.11.15

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1454

___

### readFloatBE

▸ **readFloatBE**(`offset?`): `number`

Reads a 32-bit, big-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatBE(0));
// Prints: 2.387939260590663e-38
```

**`since`** v0.11.15

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1437

___

### readFloatLE

▸ **readFloatLE**(`offset?`): `number`

Reads a 32-bit, little-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatLE(0));
// Prints: 1.539989614439558e-36
console.log(buf.readFloatLE(1));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.11.15

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1422

___

### readInt16BE

▸ **readInt16BE**(`offset?`): `number`

Reads a signed, big-endian 16-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16BE(0));
// Prints: 5
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1369

___

### readInt16LE

▸ **readInt16LE**(`offset?`): `number`

Reads a signed, little-endian 16-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16LE(0));
// Prints: 1280
console.log(buf.readInt16LE(1));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1352

___

### readInt32BE

▸ **readInt32BE**(`offset?`): `number`

Reads a signed, big-endian 32-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32BE(0));
// Prints: 5
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1405

___

### readInt32LE

▸ **readInt32LE**(`offset?`): `number`

Reads a signed, little-endian 32-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32LE(0));
// Prints: 83886080
console.log(buf.readInt32LE(1));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1388

___

### readInt8

▸ **readInt8**(`offset?`): `number`

Reads a signed 8-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([-1, 5]);

console.log(buf.readInt8(0));
// Prints: -1
console.log(buf.readInt8(1));
// Prints: 5
console.log(buf.readInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.5.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1333

___

### readIntBE

▸ **readIntBE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as a big-endian, two's complement signed value
supporting up to 48 bits of accuracy.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readIntBE(0, 6).toString(16));
// Prints: 1234567890ab
console.log(buf.readIntBE(1, 6).toString(16));
// Throws ERR_OUT_OF_RANGE.
console.log(buf.readIntBE(1, 0).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1190

___

### readIntLE

▸ **readIntLE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as a little-endian, two's complement signed value
supporting up to 48 bits of accuracy.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readIntLE(0, 6).toString(16));
// Prints: -546f87a9cbee
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1169

___

### readUInt16BE

▸ **readUInt16BE**(`offset?`): `number`

Reads an unsigned, big-endian 16-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16BE(0).toString(16));
// Prints: 1234
console.log(buf.readUInt16BE(1).toString(16));
// Prints: 3456
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1261

___

### readUInt16LE

▸ **readUInt16LE**(`offset?`): `number`

Reads an unsigned, little-endian 16-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16LE(0).toString(16));
// Prints: 3412
console.log(buf.readUInt16LE(1).toString(16));
// Prints: 5634
console.log(buf.readUInt16LE(2).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1237

___

### readUInt32BE

▸ **readUInt32BE**(`offset?`): `number`

Reads an unsigned, big-endian 32-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint32BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

console.log(buf.readUInt32BE(0).toString(16));
// Prints: 12345678
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1307

___

### readUInt32LE

▸ **readUInt32LE**(`offset?`): `number`

Reads an unsigned, little-endian 32-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

console.log(buf.readUInt32LE(0).toString(16));
// Prints: 78563412
console.log(buf.readUInt32LE(1).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.5.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1285

___

### readUInt8

▸ **readUInt8**(`offset?`): `number`

Reads an unsigned 8-bit integer from `buf` at the specified `offset`.

This function is also available under the `readUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, -2]);

console.log(buf.readUInt8(0));
// Prints: 1
console.log(buf.readUInt8(1));
// Prints: 254
console.log(buf.readUInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.5.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1211

___

### readUIntBE

▸ **readUIntBE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as an unsigned big-endian integer supporting
up to 48 bits of accuracy.

This function is also available under the `readUintBE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readUIntBE(0, 6).toString(16));
// Prints: 1234567890ab
console.log(buf.readUIntBE(1, 6).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1147

___

### readUIntLE

▸ **readUIntLE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as an unsigned, little-endian integer supporting
up to 48 bits of accuracy.

This function is also available under the `readUintLE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readUIntLE(0, 6).toString(16));
// Prints: ab9078563412
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1121

___

### readUint16BE

▸ **readUint16BE**(`offset?`): `number`

**`alias`** Buffer.readUInt16BE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1266

___

### readUint16LE

▸ **readUint16LE**(`offset?`): `number`

**`alias`** Buffer.readUInt16LE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1242

___

### readUint32BE

▸ **readUint32BE**(`offset?`): `number`

**`alias`** Buffer.readUInt32BE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1312

___

### readUint32LE

▸ **readUint32LE**(`offset?`): `number`

**`alias`** Buffer.readUInt32LE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1290

___

### readUint8

▸ **readUint8**(`offset?`): `number`

**`alias`** Buffer.readUInt8

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1216

___

### readUintBE

▸ **readUintBE**(`offset`, `byteLength`): `number`

**`alias`** Buffer.readUIntBE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1152

___

### readUintLE

▸ **readUintLE**(`offset`, `byteLength`): `number`

**`alias`** Buffer.readUIntLE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1126

___

### reduce

▸ **reduce**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) => `number` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

Uint8Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2238

▸ **reduce**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

Uint8Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2239

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Uint8Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2251

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) => `number` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

Uint8Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2263

▸ **reduceRight**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

Uint8Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2264

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Uint8Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2276

___

### reverse

▸ **reverse**(): [`Buffer`](../modules/internal_.md#buffer)

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

#### Overrides

Uint8Array.reverse

#### Defined in

node_modules/@types/node/buffer.d.ts:1470

___

### set

▸ **set**(`array`, `offset?`): `void`

Sets a value or an array of values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | [`ArrayLike`](internal_.ArrayLike.md)<`number`\> | A typed or untyped array of values to set. |
| `offset?` | `number` | The index in the current array at which the values are to be written. |

#### Returns

`void`

#### Inherited from

Uint8Array.set

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2288

___

### slice

▸ **slice**(`start?`, `end?`): [`Buffer`](../modules/internal_.md#buffer)

Returns a new `Buffer` that references the same memory as the original, but
offset and cropped by the `start` and `end` indices.

This is the same behavior as `buf.subarray()`.

This method is not compatible with the `Uint8Array.prototype.slice()`,
which is a superclass of `Buffer`. To copy the slice, use`Uint8Array.prototype.slice()`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

const copiedBuf = Uint8Array.prototype.slice.call(buf);
copiedBuf[0]++;
console.log(copiedBuf.toString());
// Prints: cuffer

console.log(buf.toString());
// Prints: buffer
```

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

#### Overrides

Uint8Array.slice

#### Defined in

node_modules/@types/node/buffer.d.ts:788

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Uint8Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2305

___

### sort

▸ **sort**(`compareFn?`): [`Buffer`](../modules/internal_.md#buffer)

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

#### Inherited from

Uint8Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2316

___

### subarray

▸ **subarray**(`start?`, `end?`): [`Buffer`](../modules/internal_.md#buffer)

Returns a new `Buffer` that references the same memory as the original, but
offset and cropped by the `start` and `end` indices.

Specifying `end` greater than `buf.length` will return the same result as
that of `end` equal to `buf.length`.

This method is inherited from [`TypedArray.prototype.subarray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray).

Modifying the new `Buffer` slice will modify the memory in the original `Buffer`because the allocated memory of the two objects overlap.

```js
import { Buffer } from 'buffer';

// Create a `Buffer` with the ASCII alphabet, take a slice, and modify one byte
// from the original `Buffer`.

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

const buf2 = buf1.subarray(0, 3);

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: abc

buf1[0] = 33;

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: !bc
```

Specifying negative indexes causes the slice to be generated relative to the
end of `buf` rather than the beginning.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

console.log(buf.subarray(-6, -1).toString());
// Prints: buffe
// (Equivalent to buf.subarray(0, 5).)

console.log(buf.subarray(-6, -2).toString());
// Prints: buff
// (Equivalent to buf.subarray(0, 4).)

console.log(buf.subarray(-5, -2).toString());
// Prints: uff
// (Equivalent to buf.subarray(1, 4).)
```

**`since`** v3.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

#### Overrides

Uint8Array.subarray

#### Defined in

node_modules/@types/node/buffer.d.ts:848

___

### swap16

▸ **swap16**(): [`Buffer`](../modules/internal_.md#buffer)

Interprets `buf` as an array of unsigned 16-bit integers and swaps the
byte order _in-place_. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 2.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap16();

console.log(buf1);
// Prints: <Buffer 02 01 04 03 06 05 08 07>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap16();
// Throws ERR_INVALID_BUFFER_SIZE.
```

One convenient use of `buf.swap16()` is to perform a fast in-place conversion
between UTF-16 little-endian and UTF-16 big-endian:

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('This is little-endian UTF-16', 'utf16le');
buf.swap16(); // Convert to big-endian UTF-16 text.
```

**`since`** v5.10.0

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

A reference to `buf`.

#### Defined in

node_modules/@types/node/buffer.d.ts:1506

___

### swap32

▸ **swap32**(): [`Buffer`](../modules/internal_.md#buffer)

Interprets `buf` as an array of unsigned 32-bit integers and swaps the
byte order _in-place_. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 4.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap32();

console.log(buf1);
// Prints: <Buffer 04 03 02 01 08 07 06 05>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap32();
// Throws ERR_INVALID_BUFFER_SIZE.
```

**`since`** v5.10.0

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

A reference to `buf`.

#### Defined in

node_modules/@types/node/buffer.d.ts:1532

___

### swap64

▸ **swap64**(): [`Buffer`](../modules/internal_.md#buffer)

Interprets `buf` as an array of 64-bit numbers and swaps byte order _in-place_.
Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 8.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap64();

console.log(buf1);
// Prints: <Buffer 08 07 06 05 04 03 02 01>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap64();
// Throws ERR_INVALID_BUFFER_SIZE.
```

**`since`** v6.3.0

#### Returns

[`Buffer`](../modules/internal_.md#buffer)

A reference to `buf`.

#### Defined in

node_modules/@types/node/buffer.d.ts:1558

___

### toJSON

▸ **toJSON**(): `Object`

Returns a JSON representation of `buf`. [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) implicitly calls
this function when stringifying a `Buffer` instance.

`Buffer.from()` accepts objects in the format returned from this method.
In particular, `Buffer.from(buf.toJSON())` works like `Buffer.from(buf)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);
// Prints: {"type":"Buffer","data":[1,2,3,4,5]}

const copy = JSON.parse(json, (key, value) => {
  return value &#x26;&#x26; value.type === 'Buffer' ?
    Buffer.from(value) :
    value;
});

console.log(copy);
// Prints: <Buffer 01 02 03 04 05>
```

**`since`** v0.9.2

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `number`[] |
| `type` | ``"Buffer"`` |

#### Defined in

node_modules/@types/node/buffer.d.ts:630

___

### toLocaleString

▸ **toLocaleString**(): `string`

Converts a number to a string by using the current locale.

#### Returns

`string`

#### Inherited from

Uint8Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2329

___

### toString

▸ **toString**(`encoding?`, `start?`, `end?`): `string`

Decodes `buf` to a string according to the specified character encoding in`encoding`. `start` and `end` may be passed to decode only a subset of `buf`.

If `encoding` is `'utf8'` and a byte sequence in the input is not valid UTF-8,
then each invalid byte is replaced with the replacement character `U+FFFD`.

The maximum length of a string instance (in UTF-16 code units) is available
as {@link constants.MAX_STRING_LENGTH}.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

console.log(buf1.toString('utf8'));
// Prints: abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('utf8', 0, 5));
// Prints: abcde

const buf2 = Buffer.from('tést');

console.log(buf2.toString('hex'));
// Prints: 74c3a97374
console.log(buf2.toString('utf8', 0, 3));
// Prints: té
console.log(buf2.toString(undefined, 0, 3));
// Prints: té
```

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

`string`

#### Overrides

Uint8Array.toString

#### Defined in

node_modules/@types/node/buffer.d.ts:602

___

### valueOf

▸ **valueOf**(): `Uint8Array`

Returns the primitive value of the specified object.

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2337

___

### values

▸ **values**(): [`IterableIterator`](internal_.IterableIterator.md)<`number`\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) for `buf` values (bytes). This function is
called automatically when a `Buffer` is used in a `for..of` statement.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

for (const value of buf.values()) {
  console.log(value);
}
// Prints:
//   98
//   117
//   102
//   102
//   101
//   114

for (const value of buf) {
  console.log(value);
}
// Prints:
//   98
//   117
//   102
//   102
//   101
//   114
```

**`since`** v1.1.0

#### Returns

[`IterableIterator`](internal_.IterableIterator.md)<`number`\>

#### Overrides

Uint8Array.values

#### Defined in

node_modules/@types/node/buffer.d.ts:2193

___

### write

▸ **write**(`string`, `encoding?`): `number`

Writes `string` to `buf` at `offset` according to the character encoding in`encoding`. The `length` parameter is the number of bytes to write. If `buf` did
not contain enough space to fit the entire string, only part of `string` will be
written. However, partially encoded characters will not be written.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(256);

const len = buf.write('\u00bd + \u00bc = \u00be', 0);

console.log(`${len} bytes: ${buf.toString('utf8', 0, len)}`);
// Prints: 12 bytes: ½ + ¼ = ¾

const buffer = Buffer.alloc(10);

const length = buffer.write('abcd', 8);

console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);
// Prints: 2 bytes : ab
```

**`since`** v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | String to write to `buf`. |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | - |

#### Returns

`number`

Number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:561

▸ **write**(`string`, `offset`, `encoding?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `offset` | `number` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:562

▸ **write**(`string`, `offset`, `length`, `encoding?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `offset` | `number` |
| `length` | `number` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:563

___

### writeBigInt64BE

▸ **writeBigInt64BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64BE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04 05 06 07 08>
```

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:869

___

### writeBigInt64LE

▸ **writeBigInt64LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64LE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05 04 03 02 01>
```

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:890

___

### writeBigUInt64BE

▸ **writeBigUInt64BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.

This function is also available under the `writeBigUint64BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigUInt64BE(0xdecafafecacefaden, 0);

console.log(buf);
// Prints: <Buffer de ca fa fe ca ce fa de>
```

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:911

___

### writeBigUInt64LE

▸ **writeBigUInt64LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigUInt64LE(0xdecafafecacefaden, 0);

console.log(buf);
// Prints: <Buffer de fa ce ca fe fa ca de>
```

This function is also available under the `writeBigUint64LE` alias.

**`since`** v12.0.0, v10.20.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:937

___

### writeBigUint64BE

▸ **writeBigUint64BE**(`value`, `offset?`): `number`

**`alias`** Buffer.writeBigUInt64BE

**`since`** v14.10.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:916

___

### writeBigUint64LE

▸ **writeBigUint64LE**(`value`, `offset?`): `number`

**`alias`** Buffer.writeBigUInt64LE

**`since`** v14.10.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:942

___

### writeDoubleBE

▸ **writeDoubleBE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleBE(123.456, 0);

console.log(buf);
// Prints: <Buffer 40 5e dd 2f 1a 9f be 77>
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1891

___

### writeDoubleLE

▸ **writeDoubleLE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleLE(123.456, 0);

console.log(buf);
// Prints: <Buffer 77 be 9f 1a 2f dd 5e 40>
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1871

___

### writeFloatBE

▸ **writeFloatBE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatBE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer 4f 4a fe bb>
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1851

___

### writeFloatLE

▸ **writeFloatLE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatLE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer bb fe 4a 4f>
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1831

___

### writeInt16BE

▸ **writeInt16BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16BE(0x0102, 0);

console.log(buf);
// Prints: <Buffer 01 02>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1767

___

### writeInt16LE

▸ **writeInt16LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16LE(0x0304, 0);

console.log(buf);
// Prints: <Buffer 04 03>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1745

___

### writeInt32BE

▸ **writeInt32BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32BE(0x01020304, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1811

___

### writeInt32LE

▸ **writeInt32LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32LE(0x05060708, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1789

___

### writeInt8

▸ **writeInt8**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a valid
signed 8-bit integer. Behavior is undefined when `value` is anything other than
a signed 8-bit integer.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt8(2, 0);
buf.writeInt8(-2, 1);

console.log(buf);
// Prints: <Buffer 02 fe>
```

**`since`** v0.5.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1723

___

### writeIntBE

▸ **writeIntBE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined when`value` is anything other than a
signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeIntBE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer 12 34 56 78 90 ab>
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1040

___

### writeIntLE

▸ **writeIntLE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than a signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeIntLE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer ab 90 78 56 34 12>
```

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1019

___

### writeUInt16BE

▸ **writeUInt16BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 16-bit integer.

This function is also available under the `writeUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16BE(0xdead, 0);
buf.writeUInt16BE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer de ad be ef>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1640

___

### writeUInt16LE

▸ **writeUInt16LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 16-bit integer.

This function is also available under the `writeUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16LE(0xdead, 0);
buf.writeUInt16LE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer ad de ef be>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1612

___

### writeUInt32BE

▸ **writeUInt32BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 32-bit integer.

This function is also available under the `writeUint32BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32BE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer fe ed fa ce>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1694

___

### writeUInt32LE

▸ **writeUInt32LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 32-bit integer.

This function is also available under the `writeUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32LE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer ce fa ed fe>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1667

___

### writeUInt8

▸ **writeUInt8**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a
valid unsigned 8-bit integer. Behavior is undefined when `value` is anything
other than an unsigned 8-bit integer.

This function is also available under the `writeUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt8(0x3, 0);
buf.writeUInt8(0x4, 1);
buf.writeUInt8(0x23, 2);
buf.writeUInt8(0x42, 3);

console.log(buf);
// Prints: <Buffer 03 04 23 42>
```

**`since`** v0.5.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | - |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:1584

___

### writeUIntBE

▸ **writeUIntBE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than an unsigned integer.

This function is also available under the `writeUintBE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeUIntBE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer 12 34 56 78 90 ab>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:993

___

### writeUIntLE

▸ **writeUIntLE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than an unsigned integer.

This function is also available under the `writeUintLE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeUIntLE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer ab 90 78 56 34 12>
```

**`since`** v0.5.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

node_modules/@types/node/buffer.d.ts:965

___

### writeUint16BE

▸ **writeUint16BE**(`value`, `offset?`): `number`

**`alias`** Buffer.writeUInt16BE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1645

___

### writeUint16LE

▸ **writeUint16LE**(`value`, `offset?`): `number`

**`alias`** Buffer.writeUInt16LE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1617

___

### writeUint32BE

▸ **writeUint32BE**(`value`, `offset?`): `number`

**`alias`** Buffer.writeUInt32BE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1699

___

### writeUint32LE

▸ **writeUint32LE**(`value`, `offset?`): `number`

**`alias`** Buffer.writeUInt32LE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1672

___

### writeUint8

▸ **writeUint8**(`value`, `offset?`): `number`

**`alias`** Buffer.writeUInt8

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:1589

___

### writeUintBE

▸ **writeUintBE**(`value`, `offset`, `byteLength`): `number`

**`alias`** Buffer.writeUIntBE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:998

___

### writeUintLE

▸ **writeUintLE**(`value`, `offset`, `byteLength`): `number`

**`alias`** Buffer.writeUIntLE

**`since`** v14.9.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/buffer.d.ts:970
