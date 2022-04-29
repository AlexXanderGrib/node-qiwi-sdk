[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CallSite

# Interface: CallSite

[<internal>](../modules/internal_.md).CallSite

## Table of contents

### Methods

- [getColumnNumber](internal_.CallSite.md#getcolumnnumber)
- [getEvalOrigin](internal_.CallSite.md#getevalorigin)
- [getFileName](internal_.CallSite.md#getfilename)
- [getFunction](internal_.CallSite.md#getfunction)
- [getFunctionName](internal_.CallSite.md#getfunctionname)
- [getLineNumber](internal_.CallSite.md#getlinenumber)
- [getMethodName](internal_.CallSite.md#getmethodname)
- [getThis](internal_.CallSite.md#getthis)
- [getTypeName](internal_.CallSite.md#gettypename)
- [isConstructor](internal_.CallSite.md#isconstructor)
- [isEval](internal_.CallSite.md#iseval)
- [isNative](internal_.CallSite.md#isnative)
- [isToplevel](internal_.CallSite.md#istoplevel)

## Methods

### getColumnNumber

▸ **getColumnNumber**(): ``null`` \| `number`

Current column number [if this function was defined in a script]

#### Returns

``null`` \| `number`

#### Defined in

node_modules/@types/node/globals.d.ts:164

___

### getEvalOrigin

▸ **getEvalOrigin**(): `undefined` \| `string`

A call site object representing the location where eval was called
[if this function was created using a call to eval]

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:170

___

### getFileName

▸ **getFileName**(): ``null`` \| `string`

Name of the script [if this function was defined in a script]

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:154

___

### getFunction

▸ **getFunction**(): `undefined` \| `Function`

Current function

#### Returns

`undefined` \| `Function`

#### Defined in

node_modules/@types/node/globals.d.ts:136

___

### getFunctionName

▸ **getFunctionName**(): ``null`` \| `string`

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:143

___

### getLineNumber

▸ **getLineNumber**(): ``null`` \| `number`

Current line number [if this function was defined in a script]

#### Returns

``null`` \| `number`

#### Defined in

node_modules/@types/node/globals.d.ts:159

___

### getMethodName

▸ **getMethodName**(): ``null`` \| `string`

Name of the property [of "this" or one of its prototypes] that holds
the current function

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:149

___

### getThis

▸ **getThis**(): `unknown`

Value of "this"

#### Returns

`unknown`

#### Defined in

node_modules/@types/node/globals.d.ts:123

___

### getTypeName

▸ **getTypeName**(): ``null`` \| `string`

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:131

___

### isConstructor

▸ **isConstructor**(): `boolean`

Is this a constructor call?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:190

___

### isEval

▸ **isEval**(): `boolean`

Does this call take place in code defined by a call to eval?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:180

___

### isNative

▸ **isNative**(): `boolean`

Is this call in native V8 code?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:185

___

### isToplevel

▸ **isToplevel**(): `boolean`

Is this a toplevel invocation, that is, is "this" the global object?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:175
