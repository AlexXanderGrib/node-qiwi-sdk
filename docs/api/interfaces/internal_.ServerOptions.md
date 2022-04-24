[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ServerOptions

# Interface: ServerOptions

[<internal>](../modules/internal_.md).ServerOptions

## Table of contents

### Properties

- [IncomingMessage](internal_.ServerOptions.md#incomingmessage)
- [ServerResponse](internal_.ServerOptions.md#serverresponse)
- [insecureHTTPParser](internal_.ServerOptions.md#insecurehttpparser)
- [maxHeaderSize](internal_.ServerOptions.md#maxheadersize)

## Properties

### IncomingMessage

• `Optional` **IncomingMessage**: typeof [`IncomingMessage`](../classes/internal_.IncomingMessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:142

___

### ServerResponse

• `Optional` **ServerResponse**: typeof [`ServerResponse`](../classes/internal_.ServerResponse.md)

#### Defined in

node_modules/@types/node/http.d.ts:143

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

Use an insecure HTTP parser that accepts invalid HTTP headers when true.
Using the insecure parser should be avoided.
See --insecure-http-parser for more information.

**`default`** false

#### Defined in

node_modules/@types/node/http.d.ts:157

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

Optionally overrides the value of
`--max-http-header-size` for requests received by this server, i.e.
the maximum length of request headers in bytes.

**`default`** 8192

#### Defined in

node_modules/@types/node/http.d.ts:150
