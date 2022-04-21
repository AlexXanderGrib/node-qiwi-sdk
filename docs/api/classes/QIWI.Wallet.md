[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / Wallet

# Class: Wallet

[QIWI](../modules/QIWI.md).Wallet

# API Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/)

**`export`**

## Hierarchy

- `ApiClass`<[`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)\>

  ↳ **`Wallet`**

  ↳↳ [`WalletCompat`](QIWI.WalletCompat.md)

## Table of contents

### Constructors

- [constructor](QIWI.Wallet.md#constructor)

### Properties

- [\_options](QIWI.Wallet.md#_options)
- [bills](QIWI.Wallet.md#bills)
- [cards](QIWI.Wallet.md#cards)
- [fundingSources](QIWI.Wallet.md#fundingsources)
- [identification](QIWI.Wallet.md#identification)
- [limits](QIWI.Wallet.md#limits)
- [paymentHistory](QIWI.Wallet.md#paymenthistory)
- [payments](QIWI.Wallet.md#payments)
- [personProfile](QIWI.Wallet.md#personprofile)
- [restrictions](QIWI.Wallet.md#restrictions)
- [webhooks](QIWI.Wallet.md#webhooks)
- [BillsApi](QIWI.Wallet.md#billsapi)
- [CardActionStatus](QIWI.Wallet.md#cardactionstatus)
- [CardStatus](QIWI.Wallet.md#cardstatus)
- [CardsApi](QIWI.Wallet.md#cardsapi)
- [ChequeFormat](QIWI.Wallet.md#chequeformat)
- [Currency](QIWI.Wallet.md#currency)
- [FundingSourcesApi](QIWI.Wallet.md#fundingsourcesapi)
- [IdentificationApi](QIWI.Wallet.md#identificationapi)
- [LimitType](QIWI.Wallet.md#limittype)
- [LimitsApi](QIWI.Wallet.md#limitsapi)
- [PaymentHistoryApi](QIWI.Wallet.md#paymenthistoryapi)
- [PaymentHistorySource](QIWI.Wallet.md#paymenthistorysource)
- [PaymentsApi](QIWI.Wallet.md#paymentsapi)
- [PersonIdentificationLevel](QIWI.Wallet.md#personidentificationlevel)
- [PersonProfileApi](QIWI.Wallet.md#personprofileapi)
- [Recipients](QIWI.Wallet.md#recipients)
- [RestrictionsApi](QIWI.Wallet.md#restrictionsapi)
- [TransactionStatus](QIWI.Wallet.md#transactionstatus)
- [TransactionType](QIWI.Wallet.md#transactiontype)
- [WebhooksApi](QIWI.Wallet.md#webhooksapi)

### Accessors

- [agent](QIWI.Wallet.md#agent)
- [options](QIWI.Wallet.md#options)

### Methods

- [createOauthToken](QIWI.Wallet.md#createoauthtoken)
- [create](QIWI.Wallet.md#create)
- [createAndFetchWalletId](QIWI.Wallet.md#createandfetchwalletid)
- [httpClientFactory](QIWI.Wallet.md#httpclientfactory)

## Constructors

### constructor

• **new Wallet**(`_options`)

Creates an instance of ApiClass.

**`memberof`** ApiClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

ApiClass<WalletApiOptions\>.constructor

#### Defined in

src/apis/api.ts:49

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)

#### Inherited from

ApiClass.\_options

___

### bills

• `Readonly` **bills**: `WalletBillsApi`

#### Defined in

[src/apis/wallet/wallet.ts:140](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L140)

___

### cards

• `Readonly` **cards**: `WalletCardsApi`

#### Defined in

[src/apis/wallet/wallet.ts:138](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L138)

___

### fundingSources

• `Readonly` **fundingSources**: `WalletFundingSourcesApi`

#### Defined in

[src/apis/wallet/wallet.ts:137](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L137)

___

### identification

• `Readonly` **identification**: `WalletIdentificationApi`

#### Defined in

[src/apis/wallet/wallet.ts:133](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L133)

___

### limits

• `Readonly` **limits**: `WalletLimitsApi`

#### Defined in

[src/apis/wallet/wallet.ts:134](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L134)

___

### paymentHistory

• `Readonly` **paymentHistory**: `WalletPaymentHistoryApi`

#### Defined in

[src/apis/wallet/wallet.ts:136](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L136)

___

### payments

• `Readonly` **payments**: `WalletPaymentsApi`

#### Defined in

[src/apis/wallet/wallet.ts:139](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L139)

___

### personProfile

• `Readonly` **personProfile**: `WalletPersonProfileApi`

#### Defined in

[src/apis/wallet/wallet.ts:132](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L132)

___

### restrictions

• `Readonly` **restrictions**: `WalletRestrictionsApi`

#### Defined in

[src/apis/wallet/wallet.ts:135](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L135)

___

### webhooks

• `Readonly` **webhooks**: `WalletWebhooksApi`

#### Defined in

[src/apis/wallet/wallet.ts:141](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L141)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof `WalletBillsApi` = `WalletBillsApi`

#### Defined in

[src/apis/wallet/wallet.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L62)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/QIWI.CardActionStatus.md) = `CardActionStatus`

#### Defined in

[src/apis/wallet/wallet.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L52)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/QIWI.CardStatus.md) = `CardStatus`

#### Defined in

[src/apis/wallet/wallet.ts:51](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L51)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof `WalletCardsApi` = `WalletCardsApi`

#### Defined in

[src/apis/wallet/wallet.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L60)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `ChequeFormat`

#### Defined in

[src/apis/wallet/wallet.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L47)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/QIWI.Currency.md) = `Currency`

#### Defined in

[src/apis/wallet/wallet.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L46)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof `WalletFundingSourcesApi` = `WalletFundingSourcesApi`

#### Defined in

[src/apis/wallet/wallet.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L59)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof `WalletIdentificationApi` = `WalletIdentificationApi`

#### Defined in

[src/apis/wallet/wallet.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L55)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/QIWI.LimitType.md) = `LimitType`

#### Defined in

[src/apis/wallet/wallet.ts:50](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L50)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof `WalletLimitsApi` = `WalletLimitsApi`

#### Defined in

[src/apis/wallet/wallet.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L56)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof `WalletPaymentHistoryApi` = `WalletPaymentHistoryApi`

#### Defined in

[src/apis/wallet/wallet.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L58)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md) = `PaymentHistorySource`

#### Defined in

[src/apis/wallet/wallet.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L49)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof `WalletPaymentsApi` = `WalletPaymentsApi`

#### Defined in

[src/apis/wallet/wallet.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L61)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Defined in

[src/apis/wallet/wallet.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L43)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof `WalletPersonProfileApi` = `WalletPersonProfileApi`

#### Defined in

[src/apis/wallet/wallet.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L54)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/QIWI.Recipients.md) = `Recipients`

#### Defined in

[src/apis/wallet/wallet.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L48)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof `WalletRestrictionsApi` = `WalletRestrictionsApi`

#### Defined in

[src/apis/wallet/wallet.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L57)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) = `TransactionStatus`

#### Defined in

[src/apis/wallet/wallet.ts:45](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L45)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/QIWI.TransactionType.md) = `TransactionType`

#### Defined in

[src/apis/wallet/wallet.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L44)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof `WalletWebhooksApi` = `WalletWebhooksApi`

#### Defined in

[src/apis/wallet/wallet.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L63)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

src/apis/api.ts:21

• `set` **agent**(`agent`): `void`

**`memberof`** WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

ApiClass.agent

#### Defined in

src/apis/api.ts:30

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** ApiClass

#### Returns

`T`

#### Inherited from

ApiClass.options

#### Defined in

src/apis/api.ts:40

## Methods

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Wallet`](QIWI.Wallet.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Wallet`](QIWI.Wallet.md)\>\>

#### Defined in

[src/apis/wallet/wallet.ts:148](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L148)

___

### create

▸ `Static` **create**(`token`, `walletId?`): [`Wallet`](QIWI.Wallet.md)

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `undefined` |
| `walletId` | `string` | `""` |

#### Returns

[`Wallet`](QIWI.Wallet.md)

{Wallet}

#### Defined in

[src/apis/wallet/wallet.ts:102](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L102)

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`): `Promise`<[`Wallet`](QIWI.Wallet.md)\>

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<[`Wallet`](QIWI.Wallet.md)\>

{Promise<Wallet>}

#### Defined in

[src/apis/wallet/wallet.ts:118](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L118)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(`token`): `SimpleJsonHttp`

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`SimpleJsonHttp`

{SimpleJsonHttp}

#### Defined in

[src/apis/wallet/wallet.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/46a7631/src/apis/wallet/wallet.ts#L73)
