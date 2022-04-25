[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / WalletCompat

# Class: WalletCompat

[QIWI](../modules/QIWI.md).WalletCompat

**`deprecated`** Используйте класс `Wallet` и новые сигнатуры
методов

**`export`**

## Hierarchy

- [`Wallet`](QIWI.Wallet.md)

  ↳ **`WalletCompat`**

## Table of contents

### Constructors

- [constructor](QIWI.WalletCompat.md#constructor)

### Properties

- [\_options](QIWI.WalletCompat.md#_options)
- [bills](QIWI.WalletCompat.md#bills)
- [cards](QIWI.WalletCompat.md#cards)
- [fundingSources](QIWI.WalletCompat.md#fundingsources)
- [identification](QIWI.WalletCompat.md#identification)
- [limits](QIWI.WalletCompat.md#limits)
- [paymentHistory](QIWI.WalletCompat.md#paymenthistory)
- [payments](QIWI.WalletCompat.md#payments)
- [personProfile](QIWI.WalletCompat.md#personprofile)
- [restrictions](QIWI.WalletCompat.md#restrictions)
- [token](QIWI.WalletCompat.md#token)
- [walletId](QIWI.WalletCompat.md#walletid)
- [webhooks](QIWI.WalletCompat.md#webhooks)
- [BillsApi](QIWI.WalletCompat.md#billsapi)
- [CardActionStatus](QIWI.WalletCompat.md#cardactionstatus)
- [CardStatus](QIWI.WalletCompat.md#cardstatus)
- [CardsApi](QIWI.WalletCompat.md#cardsapi)
- [ChequeFormat](QIWI.WalletCompat.md#chequeformat)
- [Currency](QIWI.WalletCompat.md#currency)
- [FundingSourcesApi](QIWI.WalletCompat.md#fundingsourcesapi)
- [IdentificationApi](QIWI.WalletCompat.md#identificationapi)
- [IdentificationLevel](QIWI.WalletCompat.md#identificationlevel)
- [LimitType](QIWI.WalletCompat.md#limittype)
- [LimitsApi](QIWI.WalletCompat.md#limitsapi)
- [PaymentHistoryApi](QIWI.WalletCompat.md#paymenthistoryapi)
- [PaymentHistorySource](QIWI.WalletCompat.md#paymenthistorysource)
- [PaymentsApi](QIWI.WalletCompat.md#paymentsapi)
- [PersonIdentificationLevel](QIWI.WalletCompat.md#personidentificationlevel)
- [PersonProfileApi](QIWI.WalletCompat.md#personprofileapi)
- [ReceiptFormat](QIWI.WalletCompat.md#receiptformat)
- [Recipients](QIWI.WalletCompat.md#recipients)
- [RestrictionsApi](QIWI.WalletCompat.md#restrictionsapi)
- [TransactionStatus](QIWI.WalletCompat.md#transactionstatus)
- [TransactionType](QIWI.WalletCompat.md#transactiontype)
- [WebhooksApi](QIWI.WalletCompat.md#webhooksapi)

### Accessors

- [API\_TOKEN](QIWI.WalletCompat.md#api_token)
- [agent](QIWI.WalletCompat.md#agent)
- [hookId](QIWI.WalletCompat.md#hookid)
- [options](QIWI.WalletCompat.md#options)
- [webhookKey](QIWI.WalletCompat.md#webhookkey)

### Methods

- [addWebHook](QIWI.WalletCompat.md#addwebhook)
- [blockCard](QIWI.WalletCompat.md#blockcard)
- [checkWebHookSign](QIWI.WalletCompat.md#checkwebhooksign)
- [createAccount](QIWI.WalletCompat.md#createaccount)
- [createFormUrl](QIWI.WalletCompat.md#createformurl)
- [createOauthToken](QIWI.WalletCompat.md#createoauthtoken)
- [createP2PKeyPair](QIWI.WalletCompat.md#createp2pkeypair)
- [getAccountOffers](QIWI.WalletCompat.md#getaccountoffers)
- [getAccounts](QIWI.WalletCompat.md#getaccounts)
- [getActiveWebHook](QIWI.WalletCompat.md#getactivewebhook)
- [getCardRequisites](QIWI.WalletCompat.md#getcardrequisites)
- [getCards](QIWI.WalletCompat.md#getcards)
- [getCommission](QIWI.WalletCompat.md#getcommission)
- [getIdentification](QIWI.WalletCompat.md#getidentification)
- [getLimits](QIWI.WalletCompat.md#getlimits)
- [getNewWebHookSecret](QIWI.WalletCompat.md#getnewwebhooksecret)
- [getPaymentHistory](QIWI.WalletCompat.md#getpaymenthistory)
- [getPaymentHistoryTotal](QIWI.WalletCompat.md#getpaymenthistorytotal)
- [getPersonProfile](QIWI.WalletCompat.md#getpersonprofile)
- [getRestrictions](QIWI.WalletCompat.md#getrestrictions)
- [getTransaction](QIWI.WalletCompat.md#gettransaction)
- [getTransactionCheque](QIWI.WalletCompat.md#gettransactioncheque)
- [getWebHookSecret](QIWI.WalletCompat.md#getwebhooksecret)
- [pay](QIWI.WalletCompat.md#pay)
- [pay2](QIWI.WalletCompat.md#pay2)
- [removeWebHook](QIWI.WalletCompat.md#removewebhook)
- [renameCard](QIWI.WalletCompat.md#renamecard)
- [sendTransactionCheque](QIWI.WalletCompat.md#sendtransactioncheque)
- [setDefaultAccount](QIWI.WalletCompat.md#setdefaultaccount)
- [setIdentification](QIWI.WalletCompat.md#setidentification)
- [testActiveWebHook](QIWI.WalletCompat.md#testactivewebhook)
- [unblockCard](QIWI.WalletCompat.md#unblockcard)
- [create](QIWI.WalletCompat.md#create)
- [createAndFetchWalletId](QIWI.WalletCompat.md#createandfetchwalletid)
- [createFormUrl](QIWI.WalletCompat.md#createformurl-1)
- [httpClientFactory](QIWI.WalletCompat.md#httpclientfactory)

## Constructors

### constructor

• **new WalletCompat**(`token`, `walletId?`)

Creates an instance of WalletCompat.

**`memberof`** WalletCompat

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `undefined` |
| `walletId` | `string` | `""` |

#### Overrides

[Wallet](QIWI.Wallet.md).[constructor](QIWI.Wallet.md#constructor)

#### Defined in

[src/apis/wallet/wallet.compat.ts:24](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L24)

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

[src/apis/wallet/wallet.ts:165](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L165)

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](internal_.WalletCardsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[cards](QIWI.Wallet.md#cards)

#### Defined in

[src/apis/wallet/wallet.ts:163](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L163)

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](internal_.WalletFundingSourcesApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[fundingSources](QIWI.Wallet.md#fundingsources)

#### Defined in

[src/apis/wallet/wallet.ts:162](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L162)

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](internal_.WalletIdentificationApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[identification](QIWI.Wallet.md#identification)

#### Defined in

[src/apis/wallet/wallet.ts:158](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L158)

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](internal_.WalletLimitsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[limits](QIWI.Wallet.md#limits)

#### Defined in

[src/apis/wallet/wallet.ts:159](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L159)

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](internal_.WalletPaymentHistoryApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[paymentHistory](QIWI.Wallet.md#paymenthistory)

#### Defined in

[src/apis/wallet/wallet.ts:161](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L161)

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](internal_.WalletPaymentsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[payments](QIWI.Wallet.md#payments)

#### Defined in

[src/apis/wallet/wallet.ts:164](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L164)

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](internal_.WalletPersonProfileApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[personProfile](QIWI.Wallet.md#personprofile)

#### Defined in

[src/apis/wallet/wallet.ts:157](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L157)

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](internal_.WalletRestrictionsApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[restrictions](QIWI.Wallet.md#restrictions)

#### Defined in

[src/apis/wallet/wallet.ts:160](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L160)

___

### token

• `Readonly` **token**: `string`

___

### walletId

• `Readonly` **walletId**: `string` = `""`

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](internal_.WalletWebhooksApi.md)

#### Inherited from

[Wallet](QIWI.Wallet.md).[webhooks](QIWI.Wallet.md#webhooks)

#### Defined in

[src/apis/wallet/wallet.ts:166](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L166)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](internal_.WalletBillsApi.md) = `WalletBillsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[BillsApi](QIWI.Wallet.md#billsapi)

#### Defined in

[src/apis/wallet/wallet.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L73)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/QIWI.CardActionStatus.md) = `CardActionStatus`

#### Inherited from

[Wallet](QIWI.Wallet.md).[CardActionStatus](QIWI.Wallet.md#cardactionstatus)

#### Defined in

[src/apis/wallet/wallet.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L63)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/QIWI.CardStatus.md) = `CardStatus`

#### Inherited from

[Wallet](QIWI.Wallet.md).[CardStatus](QIWI.Wallet.md#cardstatus)

#### Defined in

[src/apis/wallet/wallet.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L62)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](internal_.WalletCardsApi.md) = `WalletCardsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[CardsApi](QIWI.Wallet.md#cardsapi)

#### Defined in

[src/apis/wallet/wallet.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L71)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `ChequeFormat`

#### Inherited from

[Wallet](QIWI.Wallet.md).[ChequeFormat](QIWI.Wallet.md#chequeformat)

#### Defined in

[src/apis/wallet/wallet.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L58)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/QIWI.Currency.md) = `Currency`

#### Inherited from

[Wallet](QIWI.Wallet.md).[Currency](QIWI.Wallet.md#currency)

#### Defined in

[src/apis/wallet/wallet.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L57)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](internal_.WalletFundingSourcesApi.md) = `WalletFundingSourcesApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[FundingSourcesApi](QIWI.Wallet.md#fundingsourcesapi)

#### Defined in

[src/apis/wallet/wallet.ts:70](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L70)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](internal_.WalletIdentificationApi.md) = `WalletIdentificationApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[IdentificationApi](QIWI.Wallet.md#identificationapi)

#### Defined in

[src/apis/wallet/wallet.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L66)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) = `types.PersonIdentificationLevel`

#### Defined in

[src/apis/wallet/wallet.compat.ts:15](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L15)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/QIWI.LimitType.md) = `LimitType`

#### Inherited from

[Wallet](QIWI.Wallet.md).[LimitType](QIWI.Wallet.md#limittype)

#### Defined in

[src/apis/wallet/wallet.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L61)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](internal_.WalletLimitsApi.md) = `WalletLimitsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[LimitsApi](QIWI.Wallet.md#limitsapi)

#### Defined in

[src/apis/wallet/wallet.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L67)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](internal_.WalletPaymentHistoryApi.md) = `WalletPaymentHistoryApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PaymentHistoryApi](QIWI.Wallet.md#paymenthistoryapi)

#### Defined in

[src/apis/wallet/wallet.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L69)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/QIWI.PaymentHistorySource.md) = `PaymentHistorySource`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PaymentHistorySource](QIWI.Wallet.md#paymenthistorysource)

#### Defined in

[src/apis/wallet/wallet.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L60)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](internal_.WalletPaymentsApi.md) = `WalletPaymentsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PaymentsApi](QIWI.Wallet.md#paymentsapi)

#### Defined in

[src/apis/wallet/wallet.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L72)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PersonIdentificationLevel](QIWI.Wallet.md#personidentificationlevel)

#### Defined in

[src/apis/wallet/wallet.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L54)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](internal_.WalletPersonProfileApi.md) = `WalletPersonProfileApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[PersonProfileApi](QIWI.Wallet.md#personprofileapi)

#### Defined in

[src/apis/wallet/wallet.ts:65](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L65)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) = `types.ChequeFormat`

#### Defined in

[src/apis/wallet/wallet.compat.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L16)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/QIWI.Recipients.md) = `Recipients`

#### Inherited from

[Wallet](QIWI.Wallet.md).[Recipients](QIWI.Wallet.md#recipients)

#### Defined in

[src/apis/wallet/wallet.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L59)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](internal_.WalletRestrictionsApi.md) = `WalletRestrictionsApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[RestrictionsApi](QIWI.Wallet.md#restrictionsapi)

#### Defined in

[src/apis/wallet/wallet.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L68)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/QIWI.TransactionStatus.md) = `TransactionStatus`

#### Inherited from

[Wallet](QIWI.Wallet.md).[TransactionStatus](QIWI.Wallet.md#transactionstatus)

#### Defined in

[src/apis/wallet/wallet.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L56)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/QIWI.TransactionType.md) = `TransactionType`

#### Inherited from

[Wallet](QIWI.Wallet.md).[TransactionType](QIWI.Wallet.md#transactiontype)

#### Defined in

[src/apis/wallet/wallet.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L55)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](internal_.WalletWebhooksApi.md) = `WalletWebhooksApi`

#### Inherited from

[Wallet](QIWI.Wallet.md).[WebhooksApi](QIWI.Wallet.md#webhooksapi)

#### Defined in

[src/apis/wallet/wallet.ts:74](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L74)

## Accessors

### API\_TOKEN

• `get` **API_TOKEN**(): `string`

**`readonly`**

**`memberof`** WalletCompat

#### Returns

`string`

#### Defined in

[src/apis/wallet/wallet.compat.ts:38](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L38)

___

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

Wallet.agent

#### Defined in

[src/apis/api.ts:21](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L21)

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

[src/apis/api.ts:30](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L30)

___

### hookId

• `get` **hookId**(): `undefined` \| `string`

**`readonly`**

**`memberof`** WalletCompat

#### Returns

`undefined` \| `string`

#### Defined in

[src/apis/wallet/wallet.compat.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L58)

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

[src/apis/api.ts:41](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/api.ts#L41)

___

### webhookKey

• `get` **webhookKey**(): `Map`<`string`, `string`\>

**`readonly`**

**`memberof`** WalletCompat

#### Returns

`Map`<`string`, `string`\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:48](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L48)

## Methods

### addWebHook

▸ **addWebHook**(`parameter`, `txnType`): `Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

Регистрирует обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | `string` | Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.** |
| `txnType` | ``0`` \| ``2`` \| ``1`` | Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все" |

#### Returns

`Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:421](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L421)

___

### blockCard

▸ **blockCard**(`cardId`): `Promise`<`any`\>

Блокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:372](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L372)

___

### checkWebHookSign

▸ **checkWebHookSign**(`transaction`): `Promise`<`undefined` \| `boolean`\>

Проверяет подпись уведомления вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`WebhookTransaction`](../modules/QIWI.md#webhooktransaction) | Объект уведомления транзакции вебхука |

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:478](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L478)

___

### createAccount

▸ **createAccount**(`alias`): `Promise`<``""``\>

Создаёт новый счёт по параметру `alias`
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |

#### Returns

`Promise`<``""``\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:205](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L205)

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules/QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[src/apis/wallet/wallet.compat.ts:259](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L259)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`WalletCompat`](QIWI.WalletCompat.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`WalletCompat`](QIWI.WalletCompat.md)\>\>

#### Overrides

[Wallet](QIWI.Wallet.md).[createOauthToken](QIWI.Wallet.md#createoauthtoken)

#### Defined in

[src/apis/wallet/wallet.compat.ts:344](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L344)

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

[src/apis/wallet/wallet.compat.ts:330](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L330)

___

### getAccountOffers

▸ **getAccountOffers**(): `Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

Успешный JSON-ответ содержит данные о счетах, которые можно
создать

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:195](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L195)

___

### getAccounts

▸ **getAccounts**(): `Promise`<[`Account`](../modules/QIWI.md#account)[]\>

Успешный ответ содержит JSON-массив счетов вашего QIWI
Кошелька для фондирования платежей и текущие балансы счетов

#### Returns

`Promise`<[`Account`](../modules/QIWI.md#account)[]\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:187](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L187)

___

### getActiveWebHook

▸ **getActiveWebHook**(): `Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:459](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L459)

___

### getCardRequisites

▸ **getCardRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

Получает реквизиты карты

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:395](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L395)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:361](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L361)

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

[src/apis/wallet/wallet.compat.ts:230](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L230)

___

### getIdentification

▸ **getIdentification**(): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:86](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L86)

___

### getLimits

▸ **getLimits**<`Limits`\>(`limits`): `Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

Запрос возвращает текущие уровни лимитов по операциям в вашем
QIWI кошельке. Лимиты действуют как ограничения на сумму
определенных операций.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Limits` | extends [`LimitTypeAny`](../modules/QIWI.md#limittypeany)[] = [`LimitTypeAny`](../modules/QIWI.md#limittypeany)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | `Limits` |

#### Returns

`Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:98](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L98)

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

[src/apis/wallet/wallet.compat.ts:451](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L451)

___

### getPaymentHistory

▸ **getPaymentHistory**(`parameters`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules/QIWI.md#getpaymenthistoryparams) | Тело запроса |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:119](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L119)

___

### getPaymentHistoryTotal

▸ **getPaymentHistoryTotal**(`parameters`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules/QIWI.md#getpaymenthistorytotalparams) |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:130](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L130)

___

### getPersonProfile

▸ **getPersonProfile**(): `Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

#### Returns

`Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L66)

___

### getRestrictions

▸ **getRestrictions**(): `Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

#### Returns

`Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:108](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L108)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type?`): `Promise`<[`Transaction`](../modules/QIWI.md#transaction-1)\>

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | Номер транзакции |
| `type?` | [`TransactionType`](../enums/QIWI.TransactionType.md) | - |

#### Returns

`Promise`<[`Transaction`](../modules/QIWI.md#transaction-1)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:142](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L142)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) | `undefined` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | `undefined` | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `format` | [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) | `types.ChequeFormat.JPEG` | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:155](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L155)

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

[src/apis/wallet/wallet.compat.ts:442](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L442)

___

### pay

▸ **pay**(`provider`, `account`, `amount`, `currency?`, `fields?`, `comment?`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Перевод с кошелька

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`deprecated`** Используйте [pay2](QIWI.WalletCompat.md#pay2), так-как он более читаемый

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `provider` | `undefined` \| `number` | `undefined` | Ака ID, в доках, номер провайдера у QIWI |
| `account` | `string` | `undefined` | Номер кошелька или карты или типа того |
| `amount` | `number` | `undefined` | Сумма платежа |
| `currency` | `undefined` \| [`Currency`](../enums/QIWI.Currency.md) | `WalletCompat.Currency.RUB` | Валюта платежа, по умолчанию = рубли |
| `fields` | `undefined` \| [`Partial`](../modules/internal_.md#partial)<[`FreePayFields`](../modules/QIWI.md#freepayfields)\> & [`Record`](../modules/internal_.md#record)<`string`, `string`\> | `{}` | Доп. поля, их невозможно типизировать, просто читайте доки |
| `comment` | `undefined` \| `string` | `""` | Комментарий к платежу, необязательный |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:281](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L281)

___

### pay2

▸ **pay2**(`params`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Более читаемая версия метода [pay](QIWI.WalletCompat.md#pay)

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PayParameters`](../modules/QIWI.md#payparameters) | Параметры платежа |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:300](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L300)

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

[src/apis/wallet/wallet.compat.ts:433](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L433)

___

### renameCard

▸ **renameCard**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:407](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L407)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<``""``\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<``""``\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:173](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L173)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`): `Promise`<``""``\>

Устанавливает счёт по умолчанию
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |

#### Returns

`Promise`<``""``\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:216](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L216)

___

### setIdentification

▸ **setIdentification**(`data`): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/QIWI.md#identificationbase) |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L76)

___

### testActiveWebHook

▸ **testActiveWebHook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`link`** https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:469](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L469)

___

### unblockCard

▸ **unblockCard**(`cardId`): `Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

Разблокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | [`StringOrNumber`](../modules/QIWI.md#stringornumber) |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

#### Defined in

[src/apis/wallet/wallet.compat.ts:383](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L383)

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

[src/apis/wallet/wallet.ts:113](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L113)

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`, `__namedParameters?`): `Promise`<[`Wallet`](QIWI.Wallet.md)\>

Автоматически подтягивает номер телефона из API QIWI.
Номер телефона требуется для вызова большинства методов из
классов API:

- [IdentificationApi](QIWI.WalletCompat.md#identificationapi)
- [LimitsApi](QIWI.WalletCompat.md#limitsapi)
- [RestrictionsApi](QIWI.WalletCompat.md#restrictionsapi)
- [PaymentHistoryApi](QIWI.WalletCompat.md#paymenthistoryapi)
- [FundingSourcesApi](QIWI.WalletCompat.md#fundingsourcesapi)
- [CardsApi](QIWI.WalletCompat.md#cardsapi)

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

[src/apis/wallet/wallet.ts:138](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L138)

___

### createFormUrl

▸ `Static` **createFormUrl**(`provider`, `options?`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules/QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[src/apis/wallet/wallet.compat.ts:245](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.compat.ts#L245)

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

[src/apis/wallet/wallet.ts:84](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e26069b/src/apis/wallet/wallet.ts#L84)
