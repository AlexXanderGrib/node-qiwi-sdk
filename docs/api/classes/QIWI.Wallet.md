[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / Wallet

# Class: Wallet

[QIWI](../modules/QIWI.md).Wallet

# API Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/)

**`export`**

## Hierarchy

- [`ApiClass`](internal_.ApiClass.md)<[`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)\>

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

[ApiClass](internal_.ApiClass.md).[constructor](internal_.ApiClass.md#constructor)

#### Defined in

[src/apis/api.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/api.ts#L49)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)

#### Inherited from

[ApiClass](internal_.ApiClass.md).[_options](internal_.ApiClass.md#_options)

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](internal_.WalletBillsApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:165](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L165)

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](internal_.WalletCardsApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:163](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L163)

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](internal_.WalletFundingSourcesApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:162](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L162)

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](internal_.WalletIdentificationApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:158](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L158)

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](internal_.WalletLimitsApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:159](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L159)

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](internal_.WalletPaymentHistoryApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:161](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L161)

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](internal_.WalletPaymentsApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:164](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L164)

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](internal_.WalletPersonProfileApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:157](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L157)

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](internal_.WalletRestrictionsApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:160](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L160)

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](internal_.WalletWebhooksApi.md)

#### Defined in

[src/apis/wallet/wallet.ts:166](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L166)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](internal_.WalletBillsApi.md) = `WalletBillsApi`

#### Defined in

[src/apis/wallet/wallet.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L73)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/QIWI.CardActionStatus.md) = `CardActionStatus`

#### Defined in

[src/apis/wallet/wallet.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L63)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/QIWI.CardStatus.md) = `CardStatus`

#### Defined in

[src/apis/wallet/wallet.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L62)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](internal_.WalletCardsApi.md) = `WalletCardsApi`

#### Defined in

[src/apis/wallet/wallet.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L71)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `ChequeFormat`

#### Defined in

[src/apis/wallet/wallet.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L58)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/QIWI.Currency.md) = `Currency`

#### Defined in

[src/apis/wallet/wallet.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L57)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](internal_.WalletFundingSourcesApi.md) = `WalletFundingSourcesApi`

#### Defined in

[src/apis/wallet/wallet.ts:70](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L70)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](internal_.WalletIdentificationApi.md) = `WalletIdentificationApi`

#### Defined in

[src/apis/wallet/wallet.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L66)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/QIWI.LimitType.md) = `LimitType`

#### Defined in

[src/apis/wallet/wallet.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L61)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](internal_.WalletLimitsApi.md) = `WalletLimitsApi`

#### Defined in

[src/apis/wallet/wallet.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L67)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](internal_.WalletPaymentHistoryApi.md) = `WalletPaymentHistoryApi`

#### Defined in

[src/apis/wallet/wallet.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L69)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md) = `PaymentHistorySource`

#### Defined in

[src/apis/wallet/wallet.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L60)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](internal_.WalletPaymentsApi.md) = `WalletPaymentsApi`

#### Defined in

[src/apis/wallet/wallet.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L72)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Defined in

[src/apis/wallet/wallet.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L54)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](internal_.WalletPersonProfileApi.md) = `WalletPersonProfileApi`

#### Defined in

[src/apis/wallet/wallet.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L65)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/QIWI.Recipients.md) = `Recipients`

#### Defined in

[src/apis/wallet/wallet.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L59)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](internal_.WalletRestrictionsApi.md) = `WalletRestrictionsApi`

#### Defined in

[src/apis/wallet/wallet.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L68)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) = `TransactionStatus`

#### Defined in

[src/apis/wallet/wallet.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L56)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/QIWI.TransactionType.md) = `TransactionType`

#### Defined in

[src/apis/wallet/wallet.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L55)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](internal_.WalletWebhooksApi.md) = `WalletWebhooksApi`

#### Defined in

[src/apis/wallet/wallet.ts:74](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L74)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/api.ts#L21)

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

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/api.ts#L30)

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

[src/apis/api.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/api.ts#L40)

## Methods

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Wallet`](QIWI.Wallet.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Wallet`](QIWI.Wallet.md)\>\>

#### Defined in

[src/apis/wallet/wallet.ts:173](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L173)

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

[src/apis/wallet/wallet.ts:113](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L113)

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`, `__namedParameters?`): `Promise`<[`Wallet`](QIWI.Wallet.md)\>

Автоматически подтягивает номер телефона из API QIWI.
Номер телефона требуется для вызова большинства методов из
классов API:

- [IdentificationApi](QIWI.Wallet.md#identificationapi)
- [LimitsApi](QIWI.Wallet.md#limitsapi)
- [RestrictionsApi](QIWI.Wallet.md#restrictionsapi)
- [PaymentHistoryApi](QIWI.Wallet.md#paymenthistoryapi)
- [FundingSourcesApi](QIWI.Wallet.md#fundingsourcesapi)
- [CardsApi](QIWI.Wallet.md#cardsapi)

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `__namedParameters` | [`CreateAndFetchWalletIdParameters`](../modules/internal_.md#createandfetchwalletidparameters) |

#### Returns

`Promise`<[`Wallet`](QIWI.Wallet.md)\>

{Promise<Wallet>}

#### Defined in

[src/apis/wallet/wallet.ts:138](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L138)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(`token`): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Defined in

[src/apis/wallet/wallet.ts:84](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/d0770ca/src/apis/wallet/wallet.ts#L84)
