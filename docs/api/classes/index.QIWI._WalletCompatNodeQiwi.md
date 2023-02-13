[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / \_WalletCompatNodeQiwi

# Class: \_WalletCompatNodeQiwi

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md)._WalletCompatNodeQiwi

**`Deprecated`**

Это класс для тех, кто мигрирует с `node-qiwi`.
Остальным рекомендуется использовать класс `Wallet`

**`Export`**

## Hierarchy

- [`Wallet`](index.QIWI.Wallet.md)

  ↳ **`_WalletCompatNodeQiwi`**

## Table of contents

### Constructors

- [constructor](index.QIWI._WalletCompatNodeQiwi.md#constructor)

### Properties

- [\_options](index.QIWI._WalletCompatNodeQiwi.md#_options)
- [bills](index.QIWI._WalletCompatNodeQiwi.md#bills)
- [cards](index.QIWI._WalletCompatNodeQiwi.md#cards)
- [contractId](index.QIWI._WalletCompatNodeQiwi.md#contractid)
- [fundingSources](index.QIWI._WalletCompatNodeQiwi.md#fundingsources)
- [identification](index.QIWI._WalletCompatNodeQiwi.md#identification)
- [key](index.QIWI._WalletCompatNodeQiwi.md#key)
- [limits](index.QIWI._WalletCompatNodeQiwi.md#limits)
- [nickname](index.QIWI._WalletCompatNodeQiwi.md#nickname)
- [oauth](index.QIWI._WalletCompatNodeQiwi.md#oauth)
- [paymentHistory](index.QIWI._WalletCompatNodeQiwi.md#paymenthistory)
- [payments](index.QIWI._WalletCompatNodeQiwi.md#payments)
- [personProfile](index.QIWI._WalletCompatNodeQiwi.md#personprofile)
- [providers](index.QIWI._WalletCompatNodeQiwi.md#providers)
- [restrictions](index.QIWI._WalletCompatNodeQiwi.md#restrictions)
- [webhooks](index.QIWI._WalletCompatNodeQiwi.md#webhooks)
- [BillsApi](index.QIWI._WalletCompatNodeQiwi.md#billsapi)
- [CardActionStatus](index.QIWI._WalletCompatNodeQiwi.md#cardactionstatus)
- [CardStatus](index.QIWI._WalletCompatNodeQiwi.md#cardstatus)
- [CardsApi](index.QIWI._WalletCompatNodeQiwi.md#cardsapi)
- [ChequeFormat](index.QIWI._WalletCompatNodeQiwi.md#chequeformat)
- [Currency](index.QIWI._WalletCompatNodeQiwi.md#currency)
- [FundingSourcesApi](index.QIWI._WalletCompatNodeQiwi.md#fundingsourcesapi)
- [IdentificationApi](index.QIWI._WalletCompatNodeQiwi.md#identificationapi)
- [IdentificationLevel](index.QIWI._WalletCompatNodeQiwi.md#identificationlevel)
- [LimitType](index.QIWI._WalletCompatNodeQiwi.md#limittype)
- [LimitsApi](index.QIWI._WalletCompatNodeQiwi.md#limitsapi)
- [NicknameApi](index.QIWI._WalletCompatNodeQiwi.md#nicknameapi)
- [OauthApi](index.QIWI._WalletCompatNodeQiwi.md#oauthapi)
- [PaymentHistoryApi](index.QIWI._WalletCompatNodeQiwi.md#paymenthistoryapi)
- [PaymentHistorySource](index.QIWI._WalletCompatNodeQiwi.md#paymenthistorysource)
- [PaymentsApi](index.QIWI._WalletCompatNodeQiwi.md#paymentsapi)
- [PersonIdentificationLevel](index.QIWI._WalletCompatNodeQiwi.md#personidentificationlevel)
- [PersonProfileApi](index.QIWI._WalletCompatNodeQiwi.md#personprofileapi)
- [ProvidersApi](index.QIWI._WalletCompatNodeQiwi.md#providersapi)
- [ReceiptFormat](index.QIWI._WalletCompatNodeQiwi.md#receiptformat)
- [Recipients](index.QIWI._WalletCompatNodeQiwi.md#recipients)
- [RestrictionsApi](index.QIWI._WalletCompatNodeQiwi.md#restrictionsapi)
- [TransactionStatus](index.QIWI._WalletCompatNodeQiwi.md#transactionstatus)
- [TransactionType](index.QIWI._WalletCompatNodeQiwi.md#transactiontype)
- [WebhooksApi](index.QIWI._WalletCompatNodeQiwi.md#webhooksapi)

### Accessors

- [agent](index.QIWI._WalletCompatNodeQiwi.md#agent)
- [options](index.QIWI._WalletCompatNodeQiwi.md#options)

### Methods

- [\_executeWithContractId](index.QIWI._WalletCompatNodeQiwi.md#_executewithcontractid)
- [createOauthToken](index.QIWI._WalletCompatNodeQiwi.md#createoauthtoken)
- [getBalance](index.QIWI._WalletCompatNodeQiwi.md#getbalance)
- [getHistory](index.QIWI._WalletCompatNodeQiwi.md#gethistory)
- [getIdentification](index.QIWI._WalletCompatNodeQiwi.md#getidentification)
- [getProfile](index.QIWI._WalletCompatNodeQiwi.md#getprofile)
- [getTransaction](index.QIWI._WalletCompatNodeQiwi.md#gettransaction)
- [getTransactionsStats](index.QIWI._WalletCompatNodeQiwi.md#gettransactionsstats)
- [sendPayment](index.QIWI._WalletCompatNodeQiwi.md#sendpayment)
- [create](index.QIWI._WalletCompatNodeQiwi.md#create)
- [createAndFetchWalletId](index.QIWI._WalletCompatNodeQiwi.md#createandfetchwalletid)
- [env](index.QIWI._WalletCompatNodeQiwi.md#env)
- [httpClientFactory](index.QIWI._WalletCompatNodeQiwi.md#httpclientfactory)

## Constructors

### constructor

• **new _WalletCompatNodeQiwi**(`key`, `contractId?`)

Creates an instance of _WalletCompatNodeQiwi.

**`Memberof`**

_WalletCompatNodeQiwi

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `contractId?` | `string` | `""` |

#### Overrides

[Wallet](index.QIWI.Wallet.md).[constructor](index.QIWI.Wallet.md#constructor)

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L21)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[_options](index.QIWI.Wallet.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[bills](index.QIWI.Wallet.md#bills)

#### Defined in

[apis/wallet/wallet.ts:209](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L209)

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[cards](index.QIWI.Wallet.md#cards)

#### Defined in

[apis/wallet/wallet.ts:207](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L207)

___

### contractId

• `Readonly` **contractId**: `string` = `""`

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L21)

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[fundingSources](index.QIWI.Wallet.md#fundingsources)

#### Defined in

[apis/wallet/wallet.ts:206](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L206)

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[identification](index.QIWI.Wallet.md#identification)

#### Defined in

[apis/wallet/wallet.ts:202](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L202)

___

### key

• `Readonly` **key**: `string`

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L21)

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[limits](index.QIWI.Wallet.md#limits)

#### Defined in

[apis/wallet/wallet.ts:203](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L203)

___

### nickname

• `Readonly` **nickname**: [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[nickname](index.QIWI.Wallet.md#nickname)

#### Defined in

[apis/wallet/wallet.ts:212](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L212)

___

### oauth

• `Readonly` **oauth**: [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[oauth](index.QIWI.Wallet.md#oauth)

#### Defined in

[apis/wallet/wallet.ts:213](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L213)

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[paymentHistory](index.QIWI.Wallet.md#paymenthistory)

#### Defined in

[apis/wallet/wallet.ts:205](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L205)

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[payments](index.QIWI.Wallet.md#payments)

#### Defined in

[apis/wallet/wallet.ts:208](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L208)

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[personProfile](index.QIWI.Wallet.md#personprofile)

#### Defined in

[apis/wallet/wallet.ts:201](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L201)

___

### providers

• `Readonly` **providers**: [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[providers](index.QIWI.Wallet.md#providers)

#### Defined in

[apis/wallet/wallet.ts:211](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L211)

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[restrictions](index.QIWI.Wallet.md#restrictions)

#### Defined in

[apis/wallet/wallet.ts:204](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L204)

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[webhooks](index.QIWI.Wallet.md#webhooks)

#### Defined in

[apis/wallet/wallet.ts:210](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L210)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](index._internal_.WalletBillsApi.md) = `WalletBillsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[BillsApi](index.QIWI.Wallet.md#billsapi)

#### Defined in

[apis/wallet/wallet.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L77)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md) = `CardActionStatus`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardActionStatus](index.QIWI.Wallet.md#cardactionstatus)

#### Defined in

[apis/wallet/wallet.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L65)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md) = `CardStatus`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardStatus](index.QIWI.Wallet.md#cardstatus)

#### Defined in

[apis/wallet/wallet.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L64)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](index._internal_.WalletCardsApi.md) = `WalletCardsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardsApi](index.QIWI.Wallet.md#cardsapi)

#### Defined in

[apis/wallet/wallet.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L75)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) = `ChequeFormat`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ChequeFormat](index.QIWI.Wallet.md#chequeformat)

#### Defined in

[apis/wallet/wallet.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L60)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/index.QIWI.Currency.md) = `Currency`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Currency](index.QIWI.Wallet.md#currency)

#### Defined in

[apis/wallet/wallet.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L59)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md) = `WalletFundingSourcesApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[FundingSourcesApi](index.QIWI.Wallet.md#fundingsourcesapi)

#### Defined in

[apis/wallet/wallet.ts:74](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L74)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md) = `WalletIdentificationApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[IdentificationApi](index.QIWI.Wallet.md#identificationapi)

#### Defined in

[apis/wallet/wallet.ts:70](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L70)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[IdentificationLevel](index.QIWI.Wallet.md#identificationlevel)

#### Defined in

[apis/wallet/wallet.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L66)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/index.QIWI.LimitType.md) = `LimitType`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitType](index.QIWI.Wallet.md#limittype)

#### Defined in

[apis/wallet/wallet.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L63)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md) = `WalletLimitsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitsApi](index.QIWI.Wallet.md#limitsapi)

#### Defined in

[apis/wallet/wallet.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L71)

___

### NicknameApi

▪ `Static` `Readonly` **NicknameApi**: typeof [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md) = `WalletNicknameApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[NicknameApi](index.QIWI.Wallet.md#nicknameapi)

#### Defined in

[apis/wallet/wallet.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L80)

___

### OauthApi

▪ `Static` `Readonly` **OauthApi**: typeof [`WalletOauthApi`](index._internal_.WalletOauthApi.md) = `WalletOauthApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[OauthApi](index.QIWI.Wallet.md#oauthapi)

#### Defined in

[apis/wallet/wallet.ts:81](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L81)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md) = `WalletPaymentHistoryApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistoryApi](index.QIWI.Wallet.md#paymenthistoryapi)

#### Defined in

[apis/wallet/wallet.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L73)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md) = `PaymentHistorySource`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistorySource](index.QIWI.Wallet.md#paymenthistorysource)

#### Defined in

[apis/wallet/wallet.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L62)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md) = `WalletPaymentsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentsApi](index.QIWI.Wallet.md#paymentsapi)

#### Defined in

[apis/wallet/wallet.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L76)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonIdentificationLevel](index.QIWI.Wallet.md#personidentificationlevel)

#### Defined in

[apis/wallet/wallet.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L56)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md) = `WalletPersonProfileApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonProfileApi](index.QIWI.Wallet.md#personprofileapi)

#### Defined in

[apis/wallet/wallet.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L69)

___

### ProvidersApi

▪ `Static` `Readonly` **ProvidersApi**: typeof [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md) = `WalletProvidersApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ProvidersApi](index.QIWI.Wallet.md#providersapi)

#### Defined in

[apis/wallet/wallet.ts:79](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L79)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) = `ChequeFormat`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ReceiptFormat](index.QIWI.Wallet.md#receiptformat)

#### Defined in

[apis/wallet/wallet.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L67)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/index.QIWI.Recipients.md) = `Recipients`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Recipients](index.QIWI.Wallet.md#recipients)

#### Defined in

[apis/wallet/wallet.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L61)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md) = `WalletRestrictionsApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[RestrictionsApi](index.QIWI.Wallet.md#restrictionsapi)

#### Defined in

[apis/wallet/wallet.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L72)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) = `TransactionStatus`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionStatus](index.QIWI.Wallet.md#transactionstatus)

#### Defined in

[apis/wallet/wallet.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L58)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md) = `TransactionType`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionType](index.QIWI.Wallet.md#transactiontype)

#### Defined in

[apis/wallet/wallet.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L57)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md) = `WalletWebhooksApi`

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[WebhooksApi](index.QIWI.Wallet.md#webhooksapi)

#### Defined in

[apis/wallet/wallet.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L78)

## Accessors

### agent

• `get` **agent**(): `any`

**`Memberof`**

WalletCompat

#### Returns

`any`

#### Inherited from

Wallet.agent

#### Defined in

[apis/api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L23)

• `set` **agent**(`agent`): `void`

**`Memberof`**

WalletCompat

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `any` |

#### Returns

`void`

#### Inherited from

Wallet.agent

#### Defined in

[apis/api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L32)

___

### options

• `get` **options**(): `T`

**`Memberof`**

OptionsWrapperWithGetter

#### Returns

`T`

#### Inherited from

Wallet.options

#### Defined in

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L44)

## Methods

### \_executeWithContractId

▸ `Protected` **_executeWithContractId**<`T`\>(`contractId`, `executor`): `Promise`<`T`\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `executor` | (`api`: [`_WalletCompatNodeQiwi`](index.QIWI._WalletCompatNodeQiwi.md)) => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

Promise<T>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:39](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L39)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

[Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[createOauthToken](index.QIWI.Wallet.md#createoauthtoken)

#### Defined in

[apis/wallet/wallet.ts:220](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L220)

___

### getBalance

▸ **getBalance**(): `Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Returns

`Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

Promise<types.Account[]>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:137](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L137)

___

### getHistory

▸ **getHistory**(`contractId`, `settings?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `settings` | `Partial`<[`GetPaymentHistoryParameters`](../modules/index.QIWI.md#getpaymenthistoryparameters)\> |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

Promise<types.GetTransactionsHistoryResponse>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L80)

___

### getIdentification

▸ **getIdentification**(`contractId`, `body?`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `body?` | [`IdentificationBase`](../modules/index.QIWI.md#identificationbase) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

Promise<types.IdentificationResponse>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L61)

___

### getProfile

▸ **getProfile**(): `Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Returns

`Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

Promise<types.PersonProfile>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:127](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L127)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `settings?`): `Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` \| `number` |
| `settings?` | `Object` |
| `settings.type?` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) |

#### Returns

`Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

Promise<types.Transaction>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:114](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L114)

___

### getTransactionsStats

▸ **getTransactionsStats**(`contractId`, `settings`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `settings` | [`GetPaymentHistoryTotalParameters`](../modules/index.QIWI.md#getpaymenthistorytotalparameters) |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

Promise<types.GetPaymentHistoryTotalResponse>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:97](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L97)

___

### sendPayment

▸ **sendPayment**(`amount`, `account`, `comment?`): `Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

**`Memberof`**

_WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `account` | `string` |
| `comment?` | `string` |

#### Returns

`Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

Promise<types.PaymentResponse>

#### Defined in

[apis/wallet/wallet.compat-node-qiwi.ts:150](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.compat-node-qiwi.ts#L150)

___

### create

▸ `Static` **create**(`token`, `walletId?`): [`Wallet`](index.QIWI.Wallet.md)

Создаёт экземпляр класса.

Если используете с переменными окружения, то:
- Переименуйте переменную с токеном в `QIWI_TOKEN`
- Переименуйте переменную с номером кошелька (если есть) в `QIWI_WALLET`
- Используйте статический метод [env](index.QIWI.Wallet.md#env) вместо этого

**`Static`**

**`Memberof`**

Wallet

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `undefined` |
| `walletId?` | `string` | `""` |

#### Returns

[`Wallet`](index.QIWI.Wallet.md)

Wallet

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[create](index.QIWI.Wallet.md#create)

#### Defined in

[apis/wallet/wallet.ts:126](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L126)

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`, `«destructured»?`): `Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

Автоматически подтягивает номер телефона из API QIWI.
Номер телефона требуется для вызова большинства методов из
классов API:

- [IdentificationApi](index.QIWI.Wallet.md#identificationapi)
- [LimitsApi](index.QIWI.Wallet.md#limitsapi)
- [RestrictionsApi](index.QIWI.Wallet.md#restrictionsapi)
- [PaymentHistoryApi](index.QIWI.Wallet.md#paymenthistoryapi)
- [FundingSourcesApi](index.QIWI.Wallet.md#fundingsourcesapi)
- [CardsApi](index.QIWI.Wallet.md#cardsapi)

**`Static`**

**`Memberof`**

Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `«destructured»` | [`CreateAndFetchWalletIdParameters`](../modules/index._internal_.md#createandfetchwalletidparameters) |

#### Returns

`Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

Promise<Wallet>

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[createAndFetchWalletId](index.QIWI.Wallet.md#createandfetchwalletid)

#### Defined in

[apis/wallet/wallet.ts:169](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L169)

___

### env

▸ `Static` **env**(`token?`, `walletId?`): [`Wallet`](index.QIWI.Wallet.md)

Подхватывает токен из переменной окружения `QIWI_TOKEN` и
номер телефона из переменной `QIWI_WALLET` и использует их
для создания экземпляра

**`Static`**

**`Memberof`**

Wallet

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token?` | `string` | `environment.QIWI_TOKEN` |
| `walletId?` | `string` | `environment.QIWI_WALLET` |

#### Returns

[`Wallet`](index.QIWI.Wallet.md)

Wallet

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[env](index.QIWI.Wallet.md#env)

#### Defined in

[apis/wallet/wallet.ts:145](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L145)

___

### httpClientFactory

▸ `Static` **httpClientFactory**(`token`): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Static`**

**`Memberof`**

Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

SimpleJsonHttp

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[httpClientFactory](index.QIWI.Wallet.md#httpclientfactory)

#### Defined in

[apis/wallet/wallet.ts:91](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/wallet.ts#L91)
