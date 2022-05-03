[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / \_WalletCompat

# Class: \_WalletCompat

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md)._WalletCompat

**`deprecated`** Используйте класс `Wallet` и новые сигнатуры
методов

**`export`**

## Hierarchy

- [`Wallet`](index.QIWI.Wallet.md)

  ↳ **`_WalletCompat`**

## Table of contents

### Constructors

- [constructor](index.QIWI._WalletCompat.md#constructor)

### Properties

- [\_executeWithWalletId](index.QIWI._WalletCompat.md#_executewithwalletid)
- [\_options](index.QIWI._WalletCompat.md#_options)
- [bills](index.QIWI._WalletCompat.md#bills)
- [cards](index.QIWI._WalletCompat.md#cards)
- [fundingSources](index.QIWI._WalletCompat.md#fundingsources)
- [identification](index.QIWI._WalletCompat.md#identification)
- [limits](index.QIWI._WalletCompat.md#limits)
- [paymentHistory](index.QIWI._WalletCompat.md#paymenthistory)
- [payments](index.QIWI._WalletCompat.md#payments)
- [personProfile](index.QIWI._WalletCompat.md#personprofile)
- [providers](index.QIWI._WalletCompat.md#providers)
- [restrictions](index.QIWI._WalletCompat.md#restrictions)
- [token](index.QIWI._WalletCompat.md#token)
- [walletId](index.QIWI._WalletCompat.md#walletid)
- [webhooks](index.QIWI._WalletCompat.md#webhooks)
- [BillsApi](index.QIWI._WalletCompat.md#billsapi)
- [CardActionStatus](index.QIWI._WalletCompat.md#cardactionstatus)
- [CardStatus](index.QIWI._WalletCompat.md#cardstatus)
- [CardsApi](index.QIWI._WalletCompat.md#cardsapi)
- [ChequeFormat](index.QIWI._WalletCompat.md#chequeformat)
- [Currency](index.QIWI._WalletCompat.md#currency)
- [FundingSourcesApi](index.QIWI._WalletCompat.md#fundingsourcesapi)
- [IdentificationApi](index.QIWI._WalletCompat.md#identificationapi)
- [IdentificationLevel](index.QIWI._WalletCompat.md#identificationlevel)
- [LimitType](index.QIWI._WalletCompat.md#limittype)
- [LimitsApi](index.QIWI._WalletCompat.md#limitsapi)
- [PaymentHistoryApi](index.QIWI._WalletCompat.md#paymenthistoryapi)
- [PaymentHistorySource](index.QIWI._WalletCompat.md#paymenthistorysource)
- [PaymentsApi](index.QIWI._WalletCompat.md#paymentsapi)
- [PersonIdentificationLevel](index.QIWI._WalletCompat.md#personidentificationlevel)
- [PersonProfileApi](index.QIWI._WalletCompat.md#personprofileapi)
- [ProvidersApi](index.QIWI._WalletCompat.md#providersapi)
- [ReceiptFormat](index.QIWI._WalletCompat.md#receiptformat)
- [Recipients](index.QIWI._WalletCompat.md#recipients)
- [RestrictionsApi](index.QIWI._WalletCompat.md#restrictionsapi)
- [TransactionStatus](index.QIWI._WalletCompat.md#transactionstatus)
- [TransactionType](index.QIWI._WalletCompat.md#transactiontype)
- [WebhooksApi](index.QIWI._WalletCompat.md#webhooksapi)
- [httpClientFactory](index.QIWI._WalletCompat.md#httpclientfactory)

### Accessors

- [API\_TOKEN](index.QIWI._WalletCompat.md#api_token)
- [agent](index.QIWI._WalletCompat.md#agent)
- [hookId](index.QIWI._WalletCompat.md#hookid)
- [options](index.QIWI._WalletCompat.md#options)
- [webhookKey](index.QIWI._WalletCompat.md#webhookkey)

### Methods

- [addWebHook](index.QIWI._WalletCompat.md#addwebhook)
- [blockCard](index.QIWI._WalletCompat.md#blockcard)
- [checkWebHookSign](index.QIWI._WalletCompat.md#checkwebhooksign)
- [createAccount](index.QIWI._WalletCompat.md#createaccount)
- [createFormUrl](index.QIWI._WalletCompat.md#createformurl)
- [createOauthToken](index.QIWI._WalletCompat.md#createoauthtoken)
- [createP2PKeyPair](index.QIWI._WalletCompat.md#createp2pkeypair)
- [getAccountOffers](index.QIWI._WalletCompat.md#getaccountoffers)
- [getAccounts](index.QIWI._WalletCompat.md#getaccounts)
- [getActiveWebHook](index.QIWI._WalletCompat.md#getactivewebhook)
- [getCardRequisites](index.QIWI._WalletCompat.md#getcardrequisites)
- [getCards](index.QIWI._WalletCompat.md#getcards)
- [getCommission](index.QIWI._WalletCompat.md#getcommission)
- [getIdentification](index.QIWI._WalletCompat.md#getidentification)
- [getLimits](index.QIWI._WalletCompat.md#getlimits)
- [getNewWebHookSecret](index.QIWI._WalletCompat.md#getnewwebhooksecret)
- [getPaymentHistory](index.QIWI._WalletCompat.md#getpaymenthistory)
- [getPaymentHistoryTotal](index.QIWI._WalletCompat.md#getpaymenthistorytotal)
- [getPersonProfile](index.QIWI._WalletCompat.md#getpersonprofile)
- [getRestrictions](index.QIWI._WalletCompat.md#getrestrictions)
- [getTransaction](index.QIWI._WalletCompat.md#gettransaction)
- [getTransactionCheque](index.QIWI._WalletCompat.md#gettransactioncheque)
- [getWebHookSecret](index.QIWI._WalletCompat.md#getwebhooksecret)
- [pay](index.QIWI._WalletCompat.md#pay)
- [pay2](index.QIWI._WalletCompat.md#pay2)
- [removeWebHook](index.QIWI._WalletCompat.md#removewebhook)
- [renameCard](index.QIWI._WalletCompat.md#renamecard)
- [sendTransactionCheque](index.QIWI._WalletCompat.md#sendtransactioncheque)
- [setDefaultAccount](index.QIWI._WalletCompat.md#setdefaultaccount)
- [setIdentification](index.QIWI._WalletCompat.md#setidentification)
- [testActiveWebHook](index.QIWI._WalletCompat.md#testactivewebhook)
- [unblockCard](index.QIWI._WalletCompat.md#unblockcard)
- [create](index.QIWI._WalletCompat.md#create)
- [createAndFetchWalletId](index.QIWI._WalletCompat.md#createandfetchwalletid)
- [createFormUrl](index.QIWI._WalletCompat.md#createformurl-1)
- [env](index.QIWI._WalletCompat.md#env)

## Constructors

### constructor

• **new _WalletCompat**(`token`, `walletId?`)

Creates an instance of _WalletCompat.

**`memberof`** _WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `walletId?` | `string` |

#### Overrides

[Wallet](index.QIWI.Wallet.md).[constructor](index.QIWI.Wallet.md#constructor)

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L24)

## Properties

### \_executeWithWalletId

• `Private` **\_executeWithWalletId**: `any`

**`template`**

**`param`**

**`param`**

**`returns`** {Promise<T>}

**`memberof`** _WalletCompat

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L35)

___

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[_options](index.QIWI.Wallet.md#_options)

#### Defined in

[dist/cjs/options-wrapper.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/options-wrapper.d.ts#L16)

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[bills](index.QIWI.Wallet.md#bills)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:123](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L123)

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[cards](index.QIWI.Wallet.md#cards)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:121](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L121)

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[fundingSources](index.QIWI.Wallet.md#fundingsources)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:120](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L120)

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[identification](index.QIWI.Wallet.md#identification)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:116](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L116)

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[limits](index.QIWI.Wallet.md#limits)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:117](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L117)

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[paymentHistory](index.QIWI.Wallet.md#paymenthistory)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:119](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L119)

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[payments](index.QIWI.Wallet.md#payments)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:122](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L122)

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[personProfile](index.QIWI.Wallet.md#personprofile)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:115](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L115)

___

### providers

• `Readonly` **providers**: [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[providers](index.QIWI.Wallet.md#providers)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:125](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L125)

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[restrictions](index.QIWI.Wallet.md#restrictions)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:118](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L118)

___

### token

• `Readonly` **token**: `string`

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L14)

___

### walletId

• `Readonly` **walletId**: `string`

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L15)

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[webhooks](index.QIWI.Wallet.md#webhooks)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:124](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L124)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[BillsApi](index.QIWI.Wallet.md#billsapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:51](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L51)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardActionStatus](index.QIWI.Wallet.md#cardactionstatus)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:42](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L42)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardStatus](index.QIWI.Wallet.md#cardstatus)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L41)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardsApi](index.QIWI.Wallet.md#cardsapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L49)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ChequeFormat](index.QIWI.Wallet.md#chequeformat)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:37](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L37)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/index.QIWI.Currency.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Currency](index.QIWI.Wallet.md#currency)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L36)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[FundingSourcesApi](index.QIWI.Wallet.md#fundingsourcesapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L48)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[IdentificationApi](index.QIWI.Wallet.md#identificationapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L44)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L16)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/index.QIWI.LimitType.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitType](index.QIWI.Wallet.md#limittype)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L40)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitsApi](index.QIWI.Wallet.md#limitsapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:45](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L45)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistoryApi](index.QIWI.Wallet.md#paymenthistoryapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L47)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistorySource](index.QIWI.Wallet.md#paymenthistorysource)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:39](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L39)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentsApi](index.QIWI.Wallet.md#paymentsapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:50](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L50)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonIdentificationLevel](index.QIWI.Wallet.md#personidentificationlevel)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:33](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L33)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonProfileApi](index.QIWI.Wallet.md#personprofileapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L43)

___

### ProvidersApi

▪ `Static` `Readonly` **ProvidersApi**: typeof [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ProvidersApi](index.QIWI.Wallet.md#providersapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L53)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L17)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/index.QIWI.Recipients.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Recipients](index.QIWI.Wallet.md#recipients)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L38)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[RestrictionsApi](index.QIWI.Wallet.md#restrictionsapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L46)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionStatus](index.QIWI.Wallet.md#transactionstatus)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L35)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionType](index.QIWI.Wallet.md#transactiontype)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:34](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L34)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[WebhooksApi](index.QIWI.Wallet.md#webhooksapi)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:52](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L52)

___

### httpClientFactory

▪ `Static` **httpClientFactory**: (`token`: `string`) => [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

#### Type declaration

▸ (`token`): [`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

**`static`**

**`memberof`** Wallet

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`SimpleJsonHttp`](index._internal_.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[httpClientFactory](index.QIWI.Wallet.md#httpclientfactory)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L62)

## Accessors

### API\_TOKEN

• `get` **API_TOKEN**(): `string`

**`readonly`**

**`memberof`** _WalletCompat

#### Returns

`string`

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:42](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L42)

___

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

Wallet.agent

#### Defined in

[dist/cjs/apis/api.d.ts:19](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/api.d.ts#L19)

• `set` **agent**(`agent`): `void`

**`memberof`** WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

Wallet.agent

#### Defined in

[dist/cjs/apis/api.d.ts:25](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/api.d.ts#L25)

___

### hookId

• `get` **hookId**(): `undefined` \| `string`

**`readonly`**

**`memberof`** _WalletCompat

#### Returns

`undefined` \| `string`

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L56)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

Wallet.options

#### Defined in

[dist/cjs/options-wrapper.d.ts:40](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/options-wrapper.d.ts#L40)

___

### webhookKey

• `get` **webhookKey**(): `Map`<`string`, `string`\>

**`readonly`**

**`memberof`** _WalletCompat

#### Returns

`Map`<`string`, `string`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:49](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L49)

## Methods

### addWebHook

▸ **addWebHook**(`parameter`, `txnType`): `Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

Регистрирует обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | `string` | Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.** |
| `txnType` | ``0`` \| ``2`` \| ``1`` | Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все" |

#### Returns

`Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:276](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L276)

___

### blockCard

▸ **blockCard**(`cardId`, `walletId?`): `Promise`<`any`\>

Блокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<`any`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:245](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L245)

___

### checkWebHookSign

▸ **checkWebHookSign**(`transaction`): `Promise`<`undefined` \| `boolean`\>

Проверяет подпись уведомления вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`WebhookTransaction`](../modules/index.QIWI.md#webhooktransaction) | Объект уведомления транзакции вебхука |

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:312](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L312)

___

### createAccount

▸ **createAccount**(`alias`, `walletId?`): `Promise`<``""``\>

Создаёт новый счёт по параметру `alias`
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | - |

#### Returns

`Promise`<``""``\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:153](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L153)

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options?` | [`FormUrlOptions`](../modules/index.QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:186](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L186)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`_WalletCompat`](index.QIWI._WalletCompat.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`_WalletCompat`](index.QIWI._WalletCompat.md)\>\>

#### Overrides

[Wallet](index.QIWI.Wallet.md).[createOauthToken](index.QIWI.Wallet.md#createoauthtoken)

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:230](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L230)

___

### createP2PKeyPair

▸ **createP2PKeyPair**(`name`, `server?`): `Promise`<[PublicKey: string, SecretKey: string]\>

Создаёт пару ключей для взаимодействия с P2P BILLS API

**`example`**

const [PublicKey, SecretKey] = await createP2PKeyPair('my-key-pair');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Название связки ключей |
| `server?` | `string` | URL сервера для отправки уведомлений |

#### Returns

`Promise`<[PublicKey: string, SecretKey: string]\>

Массив, где - [0=Публичный ключ, 1=Секретный ключ]

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:224](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L224)

___

### getAccountOffers

▸ **getAccountOffers**(`walletId?`): `Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

Успешный JSON-ответ содержит данные о счетах, которые можно
создать

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:146](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L146)

___

### getAccounts

▸ **getAccounts**(`walletId?`): `Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

Успешный ответ содержит JSON-массив счетов вашего QIWI
Кошелька для фондирования платежей и текущие балансы счетов

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:140](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L140)

___

### getActiveWebHook

▸ **getActiveWebHook**(): `Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:299](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L299)

___

### getCardRequisites

▸ **getCardRequisites**(`cardId`, `walletId?`): `Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

Получает реквизиты карты

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:261](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L261)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:236](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L236)

___

### getCommission

▸ **getCommission**(`provider`, `account`, `amount`): `Promise`<`number`\>

Получает сумму комиссии по заданным реквизитам

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID Провайдера у QIWI |
| `account` | `string` | ID получателя у провайдера |
| `amount` | `number` | Сумма |

#### Returns

`Promise`<`number`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:170](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L170)

___

### getIdentification

▸ **getIdentification**(`walletId?`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

{Promise<types.IdentificationResponse>}

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L79)

___

### getLimits

▸ **getLimits**<`Limits`\>(`limits`, `walletId?`): `Promise`<[`LimitsResponse`](../modules/index.QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

Запрос возвращает текущие уровни лимитов по операциям в вашем
QIWI кошельке. Лимиты действуют как ограничения на сумму
определенных операций.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Limits` | extends [`LimitTypeAny`](../modules/index.QIWI.md#limittypeany)[] = [`LimitTypeAny`](../modules/index.QIWI.md#limittypeany)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | `Limits` |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`LimitsResponse`](../modules/index.QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:89](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L89)

___

### getNewWebHookSecret

▸ **getNewWebHookSecret**(`hookId?`): `Promise`<`string`\>

Измененяет секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId?` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:294](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L294)

___

### getPaymentHistory

▸ **getPaymentHistory**(`parameters`, `walletId?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules/index.QIWI.md#getpaymenthistoryparams) | Тело запроса |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | - |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:104](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L104)

___

### getPaymentHistoryTotal

▸ **getPaymentHistoryTotal**(`parameters`, `walletId?`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules/index.QIWI.md#getpaymenthistorytotalparams) |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:112](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L112)

___

### getPersonProfile

▸ **getPersonProfile**(): `Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

#### Returns

`Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L61)

___

### getRestrictions

▸ **getRestrictions**(`walletId?`): `Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:95](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L95)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type?`): `Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | Номер транзакции |
| `type?` | [`TransactionType`](../enums/index.QIWI.TransactionType.md) | - |

#### Returns

`Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:120](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L120)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/index.QIWI.TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `format?` | [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:127](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L127)

___

### getWebHookSecret

▸ **getWebHookSecret**(`hookId?`): `Promise`<`string`\>

Получает секретный ключ вебхука

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookId?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:288](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L288)

___

### pay

▸ **pay**(`provider`, `account`, `amount`, `currency?`, `fields?`, `comment?`): `Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

Перевод с кошелька

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`deprecated`** Используйте [pay2](index.QIWI._WalletCompat.md#pay2), так-как он более читаемый

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `undefined` \| `number` | Ака ID, в доках, номер провайдера у QIWI |
| `account` | `string` | Номер кошелька или карты или типа того |
| `amount` | `number` | Сумма платежа |
| `currency?` | [`Currency`](../enums/index.QIWI.Currency.md) | Валюта платежа, по умолчанию = рубли |
| `fields?` | `Partial`<[`FreePayFields`](../modules/index.QIWI.md#freepayfields)\> & `Record`<`string`, `string`\> | Доп. поля, их невозможно типизировать, просто читайте доки |
| `comment?` | `string` | Комментарий к платежу, необязательный |

#### Returns

`Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:202](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L202)

___

### pay2

▸ **pay2**(`params`): `Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

Более читаемая версия метода [pay](index.QIWI._WalletCompat.md#pay)

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PayParameters`](../modules/index.QIWI.md#payparameters) | Параметры платежа |

#### Returns

`Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:211](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L211)

___

### removeWebHook

▸ **removeWebHook**(`hookId?`): `Promise`<`any`\>

Удаляет обработчик вебхука

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookId?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:282](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L282)

___

### renameCard

▸ **renameCard**(`cardId`, `alias`, `walletId?`): `Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `alias` | `string` |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:269](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L269)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<``""``\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/index.QIWI.TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<``""``\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:134](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L134)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`, `walletId?`): `Promise`<``""``\>

Устанавливает счёт по умолчанию
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | - |

#### Returns

`Promise`<``""``\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:160](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L160)

___

### setIdentification

▸ **setIdentification**(`data`, `walletId?`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/index.QIWI.md#identificationbase) |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

{Promise<types.IdentificationResponse>}

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L71)

___

### testActiveWebHook

▸ **testActiveWebHook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`link`** https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:306](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L306)

___

### unblockCard

▸ **unblockCard**(`cardId`, `walletId?`): `Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

Разблокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `walletId?` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:253](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L253)

___

### create

▸ `Static` **create**(`token`, `walletId?`): [`Wallet`](index.QIWI.Wallet.md)

Создаёт экземпляр класса.

Если используете с переменными окружения, то:
- Переименуйте переменную с токеном в `QIWI_TOKEN`
- Переименуйте переменную с номером кошелька (если есть) в `QIWI_WALLET`
- Используйте статический метод [env](index.QIWI._WalletCompat.md#env) вместо этого

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `walletId?` | `string` |

#### Returns

[`Wallet`](index.QIWI.Wallet.md)

{Wallet}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[create](index.QIWI.Wallet.md#create)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L78)

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`, `__namedParameters?`): `Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

Автоматически подтягивает номер телефона из API QIWI.
Номер телефона требуется для вызова большинства методов из
классов API:

- [IdentificationApi](index.QIWI._WalletCompat.md#identificationapi)
- [LimitsApi](index.QIWI._WalletCompat.md#limitsapi)
- [RestrictionsApi](index.QIWI._WalletCompat.md#restrictionsapi)
- [PaymentHistoryApi](index.QIWI._WalletCompat.md#paymenthistoryapi)
- [FundingSourcesApi](index.QIWI._WalletCompat.md#fundingsourcesapi)
- [CardsApi](index.QIWI._WalletCompat.md#cardsapi)

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `__namedParameters?` | [`CreateAndFetchWalletIdParameters`](../modules/index._internal_.md#createandfetchwalletidparameters) |

#### Returns

`Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

{Promise<Wallet>}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[createAndFetchWalletId](index.QIWI.Wallet.md#createandfetchwalletid)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:108](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L108)

___

### createFormUrl

▸ `Static` **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options?` | [`FormUrlOptions`](../modules/index.QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[dist/cjs/apis/wallet/wallet.compat.d.ts:178](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.compat.d.ts#L178)

___

### env

▸ `Static` **env**(`token?`, `walletId?`): [`Wallet`](index.QIWI.Wallet.md)

Подхватывает токен из переменной окружения `QIWI_TOKEN` и
номер телефона из переменной `QIWI_WALLET` и использует их
для создания экземпляра

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |
| `walletId?` | `string` |

#### Returns

[`Wallet`](index.QIWI.Wallet.md)

{Wallet}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[env](index.QIWI.Wallet.md#env)

#### Defined in

[dist/cjs/apis/wallet/wallet.d.ts:90](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/87e5174/dist/cjs/apis/wallet/wallet.d.ts#L90)
