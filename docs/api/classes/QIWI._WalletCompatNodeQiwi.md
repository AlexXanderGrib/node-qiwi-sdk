[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / \_WalletCompatNodeQiwi

# Class: \_WalletCompatNodeQiwi

[QIWI](../modules/QIWI.md)._WalletCompatNodeQiwi

**`deprecated`** Это класс для тех, кто мигрирует с `node-qiwi`.
Остальным рекомендуется использовать

**`export`**

## Hierarchy

- [`Wallet`](QIWI.Wallet.md)

  ↳ **`_WalletCompatNodeQiwi`**

## Table of contents

### Constructors

- [constructor](QIWI._WalletCompatNodeQiwi.md#constructor)

### Properties

- [\_options](QIWI._WalletCompatNodeQiwi.md#_options)
- [bills](QIWI._WalletCompatNodeQiwi.md#bills)
- [cards](QIWI._WalletCompatNodeQiwi.md#cards)
- [contractId](QIWI._WalletCompatNodeQiwi.md#contractid)
- [fundingSources](QIWI._WalletCompatNodeQiwi.md#fundingsources)
- [identification](QIWI._WalletCompatNodeQiwi.md#identification)
- [key](QIWI._WalletCompatNodeQiwi.md#key)
- [limits](QIWI._WalletCompatNodeQiwi.md#limits)
- [paymentHistory](QIWI._WalletCompatNodeQiwi.md#paymenthistory)
- [payments](QIWI._WalletCompatNodeQiwi.md#payments)
- [personProfile](QIWI._WalletCompatNodeQiwi.md#personprofile)
- [providers](QIWI._WalletCompatNodeQiwi.md#providers)
- [restrictions](QIWI._WalletCompatNodeQiwi.md#restrictions)
- [webhooks](QIWI._WalletCompatNodeQiwi.md#webhooks)
- [BillsApi](QIWI._WalletCompatNodeQiwi.md#billsapi)
- [CardActionStatus](QIWI._WalletCompatNodeQiwi.md#cardactionstatus)
- [CardStatus](QIWI._WalletCompatNodeQiwi.md#cardstatus)
- [CardsApi](QIWI._WalletCompatNodeQiwi.md#cardsapi)
- [ChequeFormat](QIWI._WalletCompatNodeQiwi.md#chequeformat)
- [Currency](QIWI._WalletCompatNodeQiwi.md#currency)
- [FundingSourcesApi](QIWI._WalletCompatNodeQiwi.md#fundingsourcesapi)
- [IdentificationApi](QIWI._WalletCompatNodeQiwi.md#identificationapi)
- [LimitType](QIWI._WalletCompatNodeQiwi.md#limittype)
- [LimitsApi](QIWI._WalletCompatNodeQiwi.md#limitsapi)
- [PaymentHistoryApi](QIWI._WalletCompatNodeQiwi.md#paymenthistoryapi)
- [PaymentHistorySource](QIWI._WalletCompatNodeQiwi.md#paymenthistorysource)
- [PaymentsApi](QIWI._WalletCompatNodeQiwi.md#paymentsapi)
- [PersonIdentificationLevel](QIWI._WalletCompatNodeQiwi.md#personidentificationlevel)
- [PersonProfileApi](QIWI._WalletCompatNodeQiwi.md#personprofileapi)
- [ProvidersApi](QIWI._WalletCompatNodeQiwi.md#providersapi)
- [Recipients](QIWI._WalletCompatNodeQiwi.md#recipients)
- [RestrictionsApi](QIWI._WalletCompatNodeQiwi.md#restrictionsapi)
- [TransactionStatus](QIWI._WalletCompatNodeQiwi.md#transactionstatus)
- [TransactionType](QIWI._WalletCompatNodeQiwi.md#transactiontype)
- [WebhooksApi](QIWI._WalletCompatNodeQiwi.md#webhooksapi)

### Accessors

- [agent](QIWI._WalletCompatNodeQiwi.md#agent)
- [options](QIWI._WalletCompatNodeQiwi.md#options)

### Methods

- [\_executeWithContractId](QIWI._WalletCompatNodeQiwi.md#_executewithcontractid)
- [createOauthToken](QIWI._WalletCompatNodeQiwi.md#createoauthtoken)
- [getBalance](QIWI._WalletCompatNodeQiwi.md#getbalance)
- [getHistory](QIWI._WalletCompatNodeQiwi.md#gethistory)
- [getIdentification](QIWI._WalletCompatNodeQiwi.md#getidentification)
- [getProfile](QIWI._WalletCompatNodeQiwi.md#getprofile)
- [getTransaction](QIWI._WalletCompatNodeQiwi.md#gettransaction)
- [getTransactionsStats](QIWI._WalletCompatNodeQiwi.md#gettransactionsstats)
- [sendPayment](QIWI._WalletCompatNodeQiwi.md#sendpayment)
- [create](QIWI._WalletCompatNodeQiwi.md#create)
- [createAndFetchWalletId](QIWI._WalletCompatNodeQiwi.md#createandfetchwalletid)
- [httpClientFactory](QIWI._WalletCompatNodeQiwi.md#httpclientfactory)

## Constructors

### constructor

• **new _WalletCompatNodeQiwi**(`key`, `contractId?`)

Creates an instance of _WalletCompatNodeQiwi.

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `contractId` | `string` | `""` |

#### Overrides

[Wallet](QIWI.Wallet.md).[constructor](QIWI.Wallet.md#constructor)

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L21)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[_options](QIWI.Wallet.md#_options)

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](internal_.WalletBillsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[bills](QIWI.Wallet.md#bills)

#### Defined in

[src/apis/wallet/wallet.ts:180](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L180)

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[cards](QIWI.Wallet.md#cards)

#### Defined in

[src/apis/wallet/wallet.ts:178](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L178)

___

### contractId

• `Readonly` **contractId**: `string` = `""`

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[fundingSources](QIWI.Wallet.md#fundingsources)

#### Defined in

[src/apis/wallet/wallet.ts:177](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L177)

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[identification](QIWI.Wallet.md#identification)

#### Defined in

[src/apis/wallet/wallet.ts:173](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L173)

___

### key

• `Readonly` **key**: `string`

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[limits](QIWI.Wallet.md#limits)

#### Defined in

[src/apis/wallet/wallet.ts:174](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L174)

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[paymentHistory](QIWI.Wallet.md#paymenthistory)

#### Defined in

[src/apis/wallet/wallet.ts:176](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L176)

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[payments](QIWI.Wallet.md#payments)

#### Defined in

[src/apis/wallet/wallet.ts:179](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L179)

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[personProfile](QIWI.Wallet.md#personprofile)

#### Defined in

[src/apis/wallet/wallet.ts:172](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L172)

___

### providers

• `Readonly` **providers**: [`WalletProvidersApi`](internal_.WalletProvidersApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[providers](QIWI.Wallet.md#providers)

#### Defined in

[src/apis/wallet/wallet.ts:182](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L182)

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[restrictions](QIWI.Wallet.md#restrictions)

#### Defined in

[src/apis/wallet/wallet.ts:175](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L175)

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[webhooks](QIWI.Wallet.md#webhooks)

#### Defined in

[src/apis/wallet/wallet.ts:181](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L181)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](internal_.WalletBillsApi.md) = `WalletBillsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[BillsApi](QIWI.Wallet.md#billsapi)

#### Defined in

[src/apis/wallet/wallet.ts:74](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L74)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/QIWI.CardActionStatus.md) = `CardActionStatus`

#### Inherited from

[Wallet](QIWI.Wallet.md).[CardActionStatus](QIWI.Wallet.md#cardactionstatus)

#### Defined in

[src/apis/wallet/wallet.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L64)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/QIWI.CardStatus.md) = `CardStatus`

#### Inherited from

[Wallet](QIWI.Wallet.md).[CardStatus](QIWI.Wallet.md#cardstatus)

#### Defined in

[src/apis/wallet/wallet.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L63)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](internal_.WalletCardsApi.md) = `WalletCardsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[CardsApi](QIWI.Wallet.md#cardsapi)

#### Defined in

[src/apis/wallet/wallet.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L72)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `ChequeFormat`

#### Inherited from

[Wallet](QIWI.Wallet.md).[ChequeFormat](QIWI.Wallet.md#chequeformat)

#### Defined in

[src/apis/wallet/wallet.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L59)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/QIWI.Currency.md) = `Currency`

#### Inherited from

[Wallet](QIWI.Wallet.md).[Currency](QIWI.Wallet.md#currency)

#### Defined in

[src/apis/wallet/wallet.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L58)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](internal_.WalletFundingSourcesApi.md) = `WalletFundingSourcesApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[FundingSourcesApi](QIWI.Wallet.md#fundingsourcesapi)

#### Defined in

[src/apis/wallet/wallet.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L71)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](internal_.WalletIdentificationApi.md) = `WalletIdentificationApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[IdentificationApi](QIWI.Wallet.md#identificationapi)

#### Defined in

[src/apis/wallet/wallet.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L67)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/QIWI.LimitType.md) = `LimitType`

#### Inherited from

[Wallet](QIWI.Wallet.md).[LimitType](QIWI.Wallet.md#limittype)

#### Defined in

[src/apis/wallet/wallet.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L62)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](internal_.WalletLimitsApi.md) = `WalletLimitsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[LimitsApi](QIWI.Wallet.md#limitsapi)

#### Defined in

[src/apis/wallet/wallet.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L68)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](internal_.WalletPaymentHistoryApi.md) = `WalletPaymentHistoryApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PaymentHistoryApi](QIWI.Wallet.md#paymenthistoryapi)

#### Defined in

[src/apis/wallet/wallet.ts:70](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L70)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md) = `PaymentHistorySource`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PaymentHistorySource](QIWI.Wallet.md#paymenthistorysource)

#### Defined in

[src/apis/wallet/wallet.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L61)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](internal_.WalletPaymentsApi.md) = `WalletPaymentsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PaymentsApi](QIWI.Wallet.md#paymentsapi)

#### Defined in

[src/apis/wallet/wallet.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L73)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PersonIdentificationLevel](QIWI.Wallet.md#personidentificationlevel)

#### Defined in

[src/apis/wallet/wallet.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L55)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](internal_.WalletPersonProfileApi.md) = `WalletPersonProfileApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PersonProfileApi](QIWI.Wallet.md#personprofileapi)

#### Defined in

[src/apis/wallet/wallet.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L66)

___

### ProvidersApi

▪ `Static` `Readonly` **ProvidersApi**: typeof [`WalletProvidersApi`](internal_.WalletProvidersApi.md) = `WalletProvidersApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[ProvidersApi](QIWI.Wallet.md#providersapi)

#### Defined in

[src/apis/wallet/wallet.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L76)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/QIWI.Recipients.md) = `Recipients`

#### Inherited from

[Wallet](QIWI.Wallet.md).[Recipients](QIWI.Wallet.md#recipients)

#### Defined in

[src/apis/wallet/wallet.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L60)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](internal_.WalletRestrictionsApi.md) = `WalletRestrictionsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[RestrictionsApi](QIWI.Wallet.md#restrictionsapi)

#### Defined in

[src/apis/wallet/wallet.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L69)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) = `TransactionStatus`

#### Inherited from

[Wallet](QIWI.Wallet.md).[TransactionStatus](QIWI.Wallet.md#transactionstatus)

#### Defined in

[src/apis/wallet/wallet.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L57)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/QIWI.TransactionType.md) = `TransactionType`

#### Inherited from

[Wallet](QIWI.Wallet.md).[TransactionType](QIWI.Wallet.md#transactiontype)

#### Defined in

[src/apis/wallet/wallet.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L56)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](internal_.WalletWebhooksApi.md) = `WalletWebhooksApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[WebhooksApi](QIWI.Wallet.md#webhooksapi)

#### Defined in

[src/apis/wallet/wallet.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L75)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

Wallet.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/api.ts#L21)

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

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/api.ts#L30)

___

### options

• `get` **options**(): `T`

**`readonly`**

**`memberof`** ApiClass

#### Returns

`T`

#### Inherited from

Wallet.options

#### Defined in

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/api.ts#L41)

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
| `executor` | (`api`: [`_WalletCompatNodeQiwi`](QIWI._WalletCompatNodeQiwi.md)) => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

{Promise<T>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:39](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L39)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Wallet`](QIWI.Wallet.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`Wallet`](QIWI.Wallet.md)\>\>

#### Inherited from

[Wallet](QIWI.Wallet.md).[createOauthToken](QIWI.Wallet.md#createoauthtoken)

#### Defined in

[src/apis/wallet/wallet.ts:189](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L189)

___

### getBalance

▸ **getBalance**(): `Promise`<[`Account`](../modules/QIWI.md#account)[]\>

**`memberof`** _WalletCompatNodeQiwi

#### Returns

`Promise`<[`Account`](../modules/QIWI.md#account)[]\>

{Promise<types.Account[]>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:137](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L137)

___

### getHistory

▸ **getHistory**(`contractId`, `settings?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `settings` | [`Partial`](../modules/internal_.md#partial)<[`GetPaymentHistoryParams`](../modules/QIWI.md#getpaymenthistoryparams)\> |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

{Promise<types.GetTransactionsHistoryResponse>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:80](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L80)

___

### getIdentification

▸ **getIdentification**(`contractId`, `body?`): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `body?` | [`IdentificationBase`](../modules/QIWI.md#identificationbase) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

{Promise<types.IdentificationResponse>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L61)

___

### getProfile

▸ **getProfile**(): `Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

**`memberof`** _WalletCompatNodeQiwi

#### Returns

`Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

{Promise<types.PersonProfile>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:127](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L127)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `settings?`): `Promise`<[`Transaction`](../modules/QIWI.md#transaction)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` \| `number` |
| `settings` | `Object` |
| `settings.type?` | [`TransactionTypeAny`](../modules/QIWI.md#transactiontypeany) |

#### Returns

`Promise`<[`Transaction`](../modules/QIWI.md#transaction)\>

{Promise<types.Transaction>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:114](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L114)

___

### getTransactionsStats

▸ **getTransactionsStats**(`contractId`, `settings`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` \| `number` |
| `settings` | [`GetPaymentHistoryTotalParams`](../modules/QIWI.md#getpaymenthistorytotalparams) |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

{Promise<types.GetPaymentHistoryTotalResponse>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:97](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L97)

___

### sendPayment

▸ **sendPayment**(`amount`, `account`, `comment?`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

**`memberof`** _WalletCompatNodeQiwi

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `account` | `string` |
| `comment?` | `string` |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

{Promise<types.PaymentResponse>}

#### Defined in

[src/apis/wallet/wallet.compat-node-qiwi.ts:150](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.compat-node-qiwi.ts#L150)

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

#### Inherited from

[Wallet](QIWI.Wallet.md).[create](QIWI.Wallet.md#create)

#### Defined in

[src/apis/wallet/wallet.ts:115](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L115)

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`, `__namedParameters?`): `Promise`<[`Wallet`](QIWI.Wallet.md)\>

Автоматически подтягивает номер телефона из API QIWI.
Номер телефона требуется для вызова большинства методов из
классов API:

- [IdentificationApi](QIWI._WalletCompatNodeQiwi.md#identificationapi)
- [LimitsApi](QIWI._WalletCompatNodeQiwi.md#limitsapi)
- [RestrictionsApi](QIWI._WalletCompatNodeQiwi.md#restrictionsapi)
- [PaymentHistoryApi](QIWI._WalletCompatNodeQiwi.md#paymenthistoryapi)
- [FundingSourcesApi](QIWI._WalletCompatNodeQiwi.md#fundingsourcesapi)
- [CardsApi](QIWI._WalletCompatNodeQiwi.md#cardsapi)

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

#### Inherited from

[Wallet](QIWI.Wallet.md).[createAndFetchWalletId](QIWI.Wallet.md#createandfetchwalletid)

#### Defined in

[src/apis/wallet/wallet.ts:140](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L140)

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

#### Inherited from

[Wallet](QIWI.Wallet.md).[httpClientFactory](QIWI.Wallet.md#httpclientfactory)

#### Defined in

[src/apis/wallet/wallet.ts:86](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/7ca37ed/src/apis/wallet/wallet.ts#L86)
