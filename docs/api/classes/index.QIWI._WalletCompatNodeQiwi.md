[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / \_WalletCompatNodeQiwi

# Class: \_WalletCompatNodeQiwi

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md)._WalletCompatNodeQiwi

**`deprecated`** Это класс для тех, кто мигрирует с `node-qiwi`.
Остальным рекомендуется использовать класс `Wallet`

**`export`**

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
- [httpClientFactory](index.QIWI._WalletCompatNodeQiwi.md#httpclientfactory)

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

## Constructors

### constructor

• **new _WalletCompatNodeQiwi**(`key`, `contractId?`)

Creates an instance of _WalletCompatNodeQiwi.

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `contractId?` | `string` |

#### Overrides

[Wallet](index.QIWI.Wallet.md).[constructor](index.QIWI.Wallet.md#constructor)

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:21

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[_options](index.QIWI.Wallet.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[bills](index.QIWI.Wallet.md#bills)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:129

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[cards](index.QIWI.Wallet.md#cards)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:127

___

### contractId

• `Readonly` **contractId**: `string`

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:14

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[fundingSources](index.QIWI.Wallet.md#fundingsources)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:126

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[identification](index.QIWI.Wallet.md#identification)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:122

___

### key

• `Readonly` **key**: `string`

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:13

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[limits](index.QIWI.Wallet.md#limits)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:123

___

### nickname

• `Readonly` **nickname**: [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[nickname](index.QIWI.Wallet.md#nickname)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:132

___

### oauth

• `Readonly` **oauth**: [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[oauth](index.QIWI.Wallet.md#oauth)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:133

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[paymentHistory](index.QIWI.Wallet.md#paymenthistory)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:125

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[payments](index.QIWI.Wallet.md#payments)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:128

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[personProfile](index.QIWI.Wallet.md#personprofile)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:121

___

### providers

• `Readonly` **providers**: [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[providers](index.QIWI.Wallet.md#providers)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:131

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[restrictions](index.QIWI.Wallet.md#restrictions)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:124

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[webhooks](index.QIWI.Wallet.md#webhooks)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:130

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[BillsApi](index.QIWI.Wallet.md#billsapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:55

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardActionStatus](index.QIWI.Wallet.md#cardactionstatus)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:44

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardStatus](index.QIWI.Wallet.md#cardstatus)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:43

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[CardsApi](index.QIWI.Wallet.md#cardsapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:53

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ChequeFormat](index.QIWI.Wallet.md#chequeformat)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:39

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/index.QIWI.Currency.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Currency](index.QIWI.Wallet.md#currency)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:38

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[FundingSourcesApi](index.QIWI.Wallet.md#fundingsourcesapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:52

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[IdentificationApi](index.QIWI.Wallet.md#identificationapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:48

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[IdentificationLevel](index.QIWI.Wallet.md#identificationlevel)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:45

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/index.QIWI.LimitType.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitType](index.QIWI.Wallet.md#limittype)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:42

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[LimitsApi](index.QIWI.Wallet.md#limitsapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:49

___

### NicknameApi

▪ `Static` `Readonly` **NicknameApi**: typeof [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[NicknameApi](index.QIWI.Wallet.md#nicknameapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:58

___

### OauthApi

▪ `Static` `Readonly` **OauthApi**: typeof [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[OauthApi](index.QIWI.Wallet.md#oauthapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:59

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistoryApi](index.QIWI.Wallet.md#paymenthistoryapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:51

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentHistorySource](index.QIWI.Wallet.md#paymenthistorysource)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:41

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PaymentsApi](index.QIWI.Wallet.md#paymentsapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:54

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonIdentificationLevel](index.QIWI.Wallet.md#personidentificationlevel)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:35

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[PersonProfileApi](index.QIWI.Wallet.md#personprofileapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:47

___

### ProvidersApi

▪ `Static` `Readonly` **ProvidersApi**: typeof [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ProvidersApi](index.QIWI.Wallet.md#providersapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:57

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[ReceiptFormat](index.QIWI.Wallet.md#receiptformat)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:46

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/index.QIWI.Recipients.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[Recipients](index.QIWI.Wallet.md#recipients)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:40

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[RestrictionsApi](index.QIWI.Wallet.md#restrictionsapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:50

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionStatus](index.QIWI.Wallet.md#transactionstatus)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:37

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[TransactionType](index.QIWI.Wallet.md#transactiontype)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:36

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[WebhooksApi](index.QIWI.Wallet.md#webhooksapi)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:56

___

### httpClientFactory

▪ `Static` **httpClientFactory**: (`token`: `string`) => [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Type declaration

▸ (`token`): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`static`**

**`memberof`** Wallet

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

{SimpleJsonHttp}

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[httpClientFactory](index.QIWI.Wallet.md#httpclientfactory)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:68

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

Wallet.agent

#### Defined in

dist/cjs/apis/api.d.ts:19

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

dist/cjs/apis/api.d.ts:25

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

dist/cjs/apis/options-wrapper.d.ts:40

## Methods

### \_executeWithContractId

▸ `Protected` **_executeWithContractId**<`T`\>(`contractId`, `executor`): `Promise`<`T`\>

**`memberof`** _WalletCompatNodeQiwi

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

{Promise<T>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:32

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

#### Inherited from

[Wallet](index.QIWI.Wallet.md).[createOauthToken](index.QIWI.Wallet.md#createoauthtoken)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:139

___

### getBalance

▸ **getBalance**(): `Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

**`memberof`** _WalletCompatNodeQiwi

#### Returns

`Promise`<[`Account`](../modules/index.QIWI.md#account)[]\>

{Promise<types.Account[]>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:84

___

### getHistory

▸ **getHistory**(`contractId`, `settings?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `settings?` | `Partial`<[`GetPaymentHistoryParameters`](../modules/index.QIWI.md#getpaymenthistoryparameters)\> |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/index.QIWI.md#gettransactionshistoryresponse)\>

{Promise<types.GetTransactionsHistoryResponse>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:50

___

### getIdentification

▸ **getIdentification**(`contractId`, `body?`): `Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `body?` | [`IdentificationBase`](../modules/index.QIWI.md#identificationbase) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/index.QIWI.md#identificationresponse)\>

{Promise<types.IdentificationResponse>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:41

___

### getProfile

▸ **getProfile**(): `Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

**`memberof`** _WalletCompatNodeQiwi

#### Returns

`Promise`<[`PersonProfile`](../modules/index.QIWI.md#personprofile)\>

{Promise<types.PersonProfile>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:77

___

### getTransaction

▸ **getTransaction**(`transactionId`, `settings?`): `Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` \| `number` |
| `settings?` | `Object` |
| `settings.type?` | [`TransactionTypeAny`](../modules/index.QIWI.md#transactiontypeany) |

#### Returns

`Promise`<[`Transaction`](../modules/index.QIWI.md#transaction)\>

{Promise<types.Transaction>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:68

___

### getTransactionsStats

▸ **getTransactionsStats**(`contractId`, `settings`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `settings` | [`GetPaymentHistoryTotalParameters`](../modules/index.QIWI.md#getpaymenthistorytotalparameters) |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/index.QIWI.md#getpaymenthistorytotalresponse)\>

{Promise<types.GetPaymentHistoryTotalResponse>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:59

___

### sendPayment

▸ **sendPayment**(`amount`, `account`, `comment?`): `Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `account` | `string` |
| `comment?` | `string` |

#### Returns

`Promise`<[`PaymentResponse`](../modules/index.QIWI.md#paymentresponse)\>

{Promise<types.PaymentResponse>}

#### Defined in

dist/cjs/apis/wallet/wallet.compat-node-qiwi.d.ts:94

___

### create

▸ `Static` **create**(`token`, `walletId?`): [`Wallet`](index.QIWI.Wallet.md)

Создаёт экземпляр класса.

Если используете с переменными окружения, то:
- Переименуйте переменную с токеном в `QIWI_TOKEN`
- Переименуйте переменную с номером кошелька (если есть) в `QIWI_WALLET`
- Используйте статический метод [env](index.QIWI._WalletCompatNodeQiwi.md#env) вместо этого

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

dist/cjs/apis/wallet/wallet.d.ts:84

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`, `__namedParameters?`): `Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

Автоматически подтягивает номер телефона из API QIWI.
Номер телефона требуется для вызова большинства методов из
классов API:

- [IdentificationApi](index.QIWI._WalletCompatNodeQiwi.md#identificationapi)
- [LimitsApi](index.QIWI._WalletCompatNodeQiwi.md#limitsapi)
- [RestrictionsApi](index.QIWI._WalletCompatNodeQiwi.md#restrictionsapi)
- [PaymentHistoryApi](index.QIWI._WalletCompatNodeQiwi.md#paymenthistoryapi)
- [FundingSourcesApi](index.QIWI._WalletCompatNodeQiwi.md#fundingsourcesapi)
- [CardsApi](index.QIWI._WalletCompatNodeQiwi.md#cardsapi)

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

dist/cjs/apis/wallet/wallet.d.ts:114

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

dist/cjs/apis/wallet/wallet.d.ts:96
