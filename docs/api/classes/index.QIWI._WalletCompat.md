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

- [\_options](index.QIWI._WalletCompat.md#_options)
- [bills](index.QIWI._WalletCompat.md#bills)
- [cards](index.QIWI._WalletCompat.md#cards)
- [fundingSources](index.QIWI._WalletCompat.md#fundingsources)
- [identification](index.QIWI._WalletCompat.md#identification)
- [limits](index.QIWI._WalletCompat.md#limits)
- [nickname](index.QIWI._WalletCompat.md#nickname)
- [oauth](index.QIWI._WalletCompat.md#oauth)
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
- [NicknameApi](index.QIWI._WalletCompat.md#nicknameapi)
- [OauthApi](index.QIWI._WalletCompat.md#oauthapi)
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

### Accessors

- [API\_TOKEN](index.QIWI._WalletCompat.md#api_token)
- [agent](index.QIWI._WalletCompat.md#agent)
- [hookId](index.QIWI._WalletCompat.md#hookid)
- [options](index.QIWI._WalletCompat.md#options)
- [webhookKey](index.QIWI._WalletCompat.md#webhookkey)

### Methods

- [\_executeWithWalletId](index.QIWI._WalletCompat.md#_executewithwalletid)
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
- [httpClientFactory](index.QIWI._WalletCompat.md#httpclientfactory)

## Constructors

### constructor

• **new _WalletCompat**(`token`, `walletId?`)

Creates an instance of _WalletCompat.

**`memberof`** _WalletCompat

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `undefined` |
| `walletId` | `string` | `""` |

#### Overrides

[Wallet](index.QIWI.Wallet.md).[constructor](index.QIWI.Wallet.md#constructor)

#### Defined in

[apis/wallet/wallet.compat.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L21)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[_options](index.QIWI.Wallet.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/options-wrapper.ts#L16)

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[bills](index.QIWI.Wallet.md#bills)

#### Defined in

[apis/wallet/wallet.ts:206](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L206)

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[cards](index.QIWI.Wallet.md#cards)

#### Defined in

[apis/wallet/wallet.ts:204](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L204)

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[fundingSources](index.QIWI.Wallet.md#fundingsources)

#### Defined in

[apis/wallet/wallet.ts:203](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L203)

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[identification](index.QIWI.Wallet.md#identification)

#### Defined in

[apis/wallet/wallet.ts:199](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L199)

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[limits](index.QIWI.Wallet.md#limits)

#### Defined in

[apis/wallet/wallet.ts:200](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L200)

___

### nickname

• `Readonly` **nickname**: [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[nickname](index.QIWI.Wallet.md#nickname)

#### Defined in

[apis/wallet/wallet.ts:209](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L209)

___

### oauth

• `Readonly` **oauth**: [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[oauth](index.QIWI.Wallet.md#oauth)

#### Defined in

[apis/wallet/wallet.ts:210](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L210)

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[paymentHistory](index.QIWI.Wallet.md#paymenthistory)

#### Defined in

[apis/wallet/wallet.ts:202](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L202)

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[payments](index.QIWI.Wallet.md#payments)

#### Defined in

[apis/wallet/wallet.ts:205](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L205)

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[personProfile](index.QIWI.Wallet.md#personprofile)

#### Defined in

[apis/wallet/wallet.ts:198](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L198)

___

### providers

• `Readonly` **providers**: [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[providers](index.QIWI.Wallet.md#providers)

#### Defined in

[apis/wallet/wallet.ts:208](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L208)

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[restrictions](index.QIWI.Wallet.md#restrictions)

#### Defined in

[apis/wallet/wallet.ts:201](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L201)

___

### token

• `Readonly` **token**: `string`

___

### walletId

• `Readonly` **walletId**: `string` = `""`

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[webhooks](index.QIWI.Wallet.md#webhooks)

#### Defined in

[apis/wallet/wallet.ts:207](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L207)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](index._internal_.WalletBillsApi.md) = `WalletBillsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[BillsApi](index.QIWI.Wallet.md#billsapi)

#### Defined in

[apis/wallet/wallet.ts:74](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L74)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md) = `CardActionStatus`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardActionStatus](index.QIWI.Wallet.md#cardactionstatus)

#### Defined in

[apis/wallet/wallet.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L62)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md) = `CardStatus`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardStatus](index.QIWI.Wallet.md#cardstatus)

#### Defined in

[apis/wallet/wallet.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L61)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](index._internal_.WalletCardsApi.md) = `WalletCardsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardsApi](index.QIWI.Wallet.md#cardsapi)

#### Defined in

[apis/wallet/wallet.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L72)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) = `ChequeFormat`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ChequeFormat](index.QIWI.Wallet.md#chequeformat)

#### Defined in

[apis/wallet/wallet.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L57)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/index.QIWI.Currency.md) = `Currency`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Currency](index.QIWI.Wallet.md#currency)

#### Defined in

[apis/wallet/wallet.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L56)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md) = `WalletFundingSourcesApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[FundingSourcesApi](index.QIWI.Wallet.md#fundingsourcesapi)

#### Defined in

[apis/wallet/wallet.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L71)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md) = `WalletIdentificationApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[IdentificationApi](index.QIWI.Wallet.md#identificationapi)

#### Defined in

[apis/wallet/wallet.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L67)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[IdentificationLevel](index.QIWI.Wallet.md#identificationlevel)

#### Defined in

[apis/wallet/wallet.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L63)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/index.QIWI.LimitType.md) = `LimitType`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitType](index.QIWI.Wallet.md#limittype)

#### Defined in

[apis/wallet/wallet.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L60)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md) = `WalletLimitsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitsApi](index.QIWI.Wallet.md#limitsapi)

#### Defined in

[apis/wallet/wallet.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L68)

___

### NicknameApi

▪ `Static` `Readonly` **NicknameApi**: typeof [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md) = `WalletNicknameApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[NicknameApi](index.QIWI.Wallet.md#nicknameapi)

#### Defined in

[apis/wallet/wallet.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L77)

___

### OauthApi

▪ `Static` `Readonly` **OauthApi**: typeof [`WalletOauthApi`](index._internal_.WalletOauthApi.md) = `WalletOauthApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[OauthApi](index.QIWI.Wallet.md#oauthapi)

#### Defined in

[apis/wallet/wallet.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L78)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md) = `WalletPaymentHistoryApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistoryApi](index.QIWI.Wallet.md#paymenthistoryapi)

#### Defined in

[apis/wallet/wallet.ts:70](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L70)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md) = `PaymentHistorySource`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistorySource](index.QIWI.Wallet.md#paymenthistorysource)

#### Defined in

[apis/wallet/wallet.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L59)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md) = `WalletPaymentsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentsApi](index.QIWI.Wallet.md#paymentsapi)

#### Defined in

[apis/wallet/wallet.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L73)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonIdentificationLevel](index.QIWI.Wallet.md#personidentificationlevel)

#### Defined in

[apis/wallet/wallet.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L53)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md) = `WalletPersonProfileApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonProfileApi](index.QIWI.Wallet.md#personprofileapi)

#### Defined in

[apis/wallet/wallet.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L66)

___

### ProvidersApi

▪ `Static` `Readonly` **ProvidersApi**: typeof [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md) = `WalletProvidersApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ProvidersApi](index.QIWI.Wallet.md#providersapi)

#### Defined in

[apis/wallet/wallet.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L76)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) = `ChequeFormat`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ReceiptFormat](index.QIWI.Wallet.md#receiptformat)

#### Defined in

[apis/wallet/wallet.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L64)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/index.QIWI.Recipients.md) = `Recipients`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Recipients](index.QIWI.Wallet.md#recipients)

#### Defined in

[apis/wallet/wallet.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L58)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md) = `WalletRestrictionsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[RestrictionsApi](index.QIWI.Wallet.md#restrictionsapi)

#### Defined in

[apis/wallet/wallet.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L69)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) = `TransactionStatus`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionStatus](index.QIWI.Wallet.md#transactionstatus)

#### Defined in

[apis/wallet/wallet.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L55)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md) = `TransactionType`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionType](index.QIWI.Wallet.md#transactiontype)

#### Defined in

[apis/wallet/wallet.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L54)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md) = `WalletWebhooksApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[WebhooksApi](index.QIWI.Wallet.md#webhooksapi)

#### Defined in

[apis/wallet/wallet.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L75)

## Accessors

### API\_TOKEN

• `get` **API_TOKEN**(): `string`

**`readonly`**

**`memberof`** _WalletCompat

#### Returns

`string`

#### Defined in

[apis/wallet/wallet.compat.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L65)

___

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

Wallet.agent

#### Defined in

[apis/api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/api.ts#L23)

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

[apis/api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/api.ts#L32)

___

### hookId

• `get` **hookId**(): `undefined` \| `string`

**`readonly`**

**`memberof`** _WalletCompat

#### Returns

`undefined` \| `string`

#### Defined in

[apis/wallet/wallet.compat.ts:85](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L85)

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

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/options-wrapper.ts#L44)

___

### webhookKey

• `get` **webhookKey**(): `Map`<`string`, `string`\>

**`readonly`**

**`memberof`** _WalletCompat

#### Returns

`Map`<`string`, `string`\>

#### Defined in

[apis/wallet/wallet.compat.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L75)

## Methods

### \_executeWithWalletId

▸ `Private` **_executeWithWalletId**<`T`\>(`walletId`, `executor`): `Promise`<`T`\>

**`memberof`** _WalletCompat

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId` | `undefined` \| [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `executor` | (`wallet`: [`_WalletCompat`](index.QIWI._WalletCompat.md)) => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

{Promise<T>}

#### Defined in

[apis/wallet/wallet.compat.ts:39](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L39)

___

### addWebHook

▸ **addWebHook**(`parameter`, `txnType`): `Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

Регистрирует обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | `string` | Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.** |
| `txnType` | ``0`` \| ``1`` \| ``2`` | Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все" |

#### Returns

`Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Defined in

[apis/wallet/wallet.compat.ts:510](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L510)

___

### blockCard

▸ **blockCard**(`cardId`, `walletId?`): `Promise`<`any`\>

Блокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<`any`\>

#### Defined in

[apis/wallet/wallet.compat.ts:446](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L446)

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

[apis/wallet/wallet.compat.ts:567](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L567)

___

### createAccount

▸ **createAccount**(`alias`, `walletId?`): `Promise`<``""``\>

Создаёт новый счёт по параметру `alias`
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | - |

#### Returns

`Promise`<``""``\>

#### Defined in

[apis/wallet/wallet.compat.ts:272](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L272)

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules/index.QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[apis/wallet/wallet.compat.ts:336](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L336)

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

[apis/wallet/wallet.compat.ts:421](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L421)

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

[apis/wallet/wallet.compat.ts:407](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L407)

___

### getAccountOffers

▸ **getAccountOffers**(`walletId?`): `Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

Успешный JSON-ответ содержит данные о счетах, которые можно
создать

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/index.QIWI.md#getaccountoffersresponse)\>

#### Defined in

[apis/wallet/wallet.compat.ts:258](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L258)

___

### getAccounts

▸ **getAccounts**(`walletId?`): `Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

Успешный ответ содержит JSON-массив счетов вашего QIWI
Кошелька для фондирования платежей и текущие балансы счетов

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

#### Defined in

[apis/wallet/wallet.compat.ts:245](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L245)

___

### getActiveWebHook

▸ **getActiveWebHook**(): `Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Defined in

[apis/wallet/wallet.compat.ts:548](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L548)

___

### getCardRequisites

▸ **getCardRequisites**(`cardId`, `walletId?`): `Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

Получает реквизиты карты

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/index.QIWI.md#cardrequisitesresponse)\>

#### Defined in

[apis/wallet/wallet.compat.ts:478](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L478)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules/index.QIWI.md#cardresponse)[]\>

#### Defined in

[apis/wallet/wallet.compat.ts:434](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L434)

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

[apis/wallet/wallet.compat.ts:307](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L307)

___

### getIdentification

▸ **getIdentification**(`walletId?`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

{Promise<types.IdentificationResponse>}

#### Defined in

[apis/wallet/wallet.compat.ts:122](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L122)

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
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`LimitsResponse`](../modules/index.QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

#### Defined in

[apis/wallet/wallet.compat.ts:139](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L139)

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

[apis/wallet/wallet.compat.ts:540](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L540)

___

### getPaymentHistory

▸ **getPaymentHistory**(`parameters`, `walletId?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParameters`](../modules/index.QIWI.md#getpaymenthistoryparameters) | Тело запроса |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | - |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

#### Defined in

[apis/wallet/wallet.compat.ts:169](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L169)

___

### getPaymentHistoryTotal

▸ **getPaymentHistoryTotal**(`parameters`, `walletId?`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParameters`](../modules/index.QIWI.md#getpaymenthistorytotalparameters) |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

#### Defined in

[apis/wallet/wallet.compat.ts:184](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L184)

___

### getPersonProfile

▸ **getPersonProfile**(): `Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

#### Returns

`Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

#### Defined in

[apis/wallet/wallet.compat.ts:93](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L93)

___

### getRestrictions

▸ **getRestrictions**(`walletId?`): `Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`Restrictions`](../modules/index.QIWI.md#restrictions)\>

#### Defined in

[apis/wallet/wallet.compat.ts:153](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L153)

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

[apis/wallet/wallet.compat.ts:199](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L199)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | `undefined` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/index.QIWI.TransactionType.md) | `undefined` | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `format` | [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) | `types.ChequeFormat.JPEG` | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[apis/wallet/wallet.compat.ts:212](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L212)

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

[apis/wallet/wallet.compat.ts:531](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L531)

___

### pay

▸ **pay**(`provider`, `account`, `amount`, `currency?`, `fields?`, `comment?`): `Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

Перевод с кошелька

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`deprecated`** Используйте [pay2](index.QIWI._WalletCompat.md#pay2), так-как он более читаемый

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `provider` | `undefined` \| `number` | `undefined` | Ака ID, в доках, номер провайдера у QIWI |
| `account` | `string` | `undefined` | Номер кошелька или карты или типа того |
| `amount` | `number` | `undefined` | Сумма платежа |
| `currency` | `undefined` \| [`Currency`](../enums/index.QIWI.Currency.md) | `_WalletCompat.Currency.RUB` | Валюта платежа, по умолчанию = рубли |
| `fields` | `undefined` \| `Partial`<[`FreePayFields`](../modules/index.QIWI.md#freepayfields)\> & `Record`<`string`, `string`\> | `{}` | Доп. поля, их невозможно типизировать, просто читайте доки |
| `comment` | `undefined` \| `string` | `""` | Комментарий к платежу, необязательный |

#### Returns

`Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

#### Defined in

[apis/wallet/wallet.compat.ts:358](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L358)

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

[apis/wallet/wallet.compat.ts:377](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L377)

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

[apis/wallet/wallet.compat.ts:522](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L522)

___

### renameCard

▸ **renameCard**(`cardId`, `alias`, `walletId?`): `Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `alias` | `string` |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/index.QIWI.md#cardrenameresponse)\>

#### Defined in

[apis/wallet/wallet.compat.ts:494](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L494)

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

[apis/wallet/wallet.compat.ts:230](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L230)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`, `walletId?`): `Promise`<``""``\>

Устанавливает счёт по умолчанию
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) | - |

#### Returns

`Promise`<``""``\>

#### Defined in

[apis/wallet/wallet.compat.ts:288](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L288)

___

### setIdentification

▸ **setIdentification**(`data`, `walletId?`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/index.QIWI.md#identificationbase) |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

{Promise<types.IdentificationResponse>}

#### Defined in

[apis/wallet/wallet.compat.ts:106](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L106)

___

### testActiveWebHook

▸ **testActiveWebHook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`link`** https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[apis/wallet/wallet.compat.ts:558](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L558)

___

### unblockCard

▸ **unblockCard**(`cardId`, `walletId?`): `Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

Разблокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |
| `walletId` | [`StringOrNumber`](../modules/index.QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/index.QIWI.md#cardunblockresponse)\>

#### Defined in

[apis/wallet/wallet.compat.ts:462](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L462)

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `undefined` |
| `walletId` | `string` | `""` |

#### Returns

[`Wallet`](index.QIWI.Wallet.md)

{Wallet}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[create](index.QIWI.Wallet.md#create)

#### Defined in

[apis/wallet/wallet.ts:123](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L123)

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
| `__namedParameters` | [`CreateAndFetchWalletIdParameters`](../modules/index._internal_.md#createandfetchwalletidparameters) |

#### Returns

`Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

{Promise<Wallet>}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[createAndFetchWalletId](index.QIWI.Wallet.md#createandfetchwalletid)

#### Defined in

[apis/wallet/wallet.ts:166](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L166)

___

### createFormUrl

▸ `Static` **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules/index.QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[apis/wallet/wallet.compat.ts:322](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.compat.ts#L322)

___

### env

▸ `Static` **env**(`token?`, `walletId?`): [`Wallet`](index.QIWI.Wallet.md)

Подхватывает токен из переменной окружения `QIWI_TOKEN` и
номер телефона из переменной `QIWI_WALLET` и использует их
для создания экземпляра

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `environment.QIWI_TOKEN` |
| `walletId` | `string` | `environment.QIWI_WALLET` |

#### Returns

[`Wallet`](index.QIWI.Wallet.md)

{Wallet}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[env](index.QIWI.Wallet.md#env)

#### Defined in

[apis/wallet/wallet.ts:142](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L142)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(`token`): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`static`**

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[httpClientFactory](index.QIWI.Wallet.md#httpclientfactory)

#### Defined in

[apis/wallet/wallet.ts:88](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8834c22/src/apis/wallet/wallet.ts#L88)
