[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / Wallet

# Class: Wallet

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).Wallet

# API Кошелька
[Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/)

**`export`**

## Hierarchy

- [`ApiClass`](index._internal_.ApiClass.md)<[`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)\>

  ↳ **`Wallet`**

  ↳↳ [`_WalletCompat`](index.QIWI._WalletCompat.md)

  ↳↳ [`_WalletCompatNodeQiwi`](index.QIWI._WalletCompatNodeQiwi.md)

## Table of contents

### Constructors

- [constructor](index.QIWI.Wallet.md#constructor)

### Properties

- [\_options](index.QIWI.Wallet.md#_options)
- [bills](index.QIWI.Wallet.md#bills)
- [cards](index.QIWI.Wallet.md#cards)
- [fundingSources](index.QIWI.Wallet.md#fundingsources)
- [identification](index.QIWI.Wallet.md#identification)
- [limits](index.QIWI.Wallet.md#limits)
- [nickname](index.QIWI.Wallet.md#nickname)
- [oauth](index.QIWI.Wallet.md#oauth)
- [paymentHistory](index.QIWI.Wallet.md#paymenthistory)
- [payments](index.QIWI.Wallet.md#payments)
- [personProfile](index.QIWI.Wallet.md#personprofile)
- [providers](index.QIWI.Wallet.md#providers)
- [restrictions](index.QIWI.Wallet.md#restrictions)
- [webhooks](index.QIWI.Wallet.md#webhooks)
- [BillsApi](index.QIWI.Wallet.md#billsapi)
- [CardActionStatus](index.QIWI.Wallet.md#cardactionstatus)
- [CardStatus](index.QIWI.Wallet.md#cardstatus)
- [CardsApi](index.QIWI.Wallet.md#cardsapi)
- [ChequeFormat](index.QIWI.Wallet.md#chequeformat)
- [Currency](index.QIWI.Wallet.md#currency)
- [FundingSourcesApi](index.QIWI.Wallet.md#fundingsourcesapi)
- [IdentificationApi](index.QIWI.Wallet.md#identificationapi)
- [IdentificationLevel](index.QIWI.Wallet.md#identificationlevel)
- [LimitType](index.QIWI.Wallet.md#limittype)
- [LimitsApi](index.QIWI.Wallet.md#limitsapi)
- [NicknameApi](index.QIWI.Wallet.md#nicknameapi)
- [OauthApi](index.QIWI.Wallet.md#oauthapi)
- [PaymentHistoryApi](index.QIWI.Wallet.md#paymenthistoryapi)
- [PaymentHistorySource](index.QIWI.Wallet.md#paymenthistorysource)
- [PaymentsApi](index.QIWI.Wallet.md#paymentsapi)
- [PersonIdentificationLevel](index.QIWI.Wallet.md#personidentificationlevel)
- [PersonProfileApi](index.QIWI.Wallet.md#personprofileapi)
- [ProvidersApi](index.QIWI.Wallet.md#providersapi)
- [ReceiptFormat](index.QIWI.Wallet.md#receiptformat)
- [Recipients](index.QIWI.Wallet.md#recipients)
- [RestrictionsApi](index.QIWI.Wallet.md#restrictionsapi)
- [TransactionStatus](index.QIWI.Wallet.md#transactionstatus)
- [TransactionType](index.QIWI.Wallet.md#transactiontype)
- [WebhooksApi](index.QIWI.Wallet.md#webhooksapi)
- [httpClientFactory](index.QIWI.Wallet.md#httpclientfactory)

### Accessors

- [agent](index.QIWI.Wallet.md#agent)
- [options](index.QIWI.Wallet.md#options)

### Methods

- [createOauthToken](index.QIWI.Wallet.md#createoauthtoken)
- [create](index.QIWI.Wallet.md#create)
- [createAndFetchWalletId](index.QIWI.Wallet.md#createandfetchwalletid)
- [env](index.QIWI.Wallet.md#env)

## Constructors

### constructor

• **new Wallet**(`[options]?`)

Creates an instance of Wallet.

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `[options]?` | `Partial`<[`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)\> |

#### Overrides

[ApiClass](index._internal_.ApiClass.md).[constructor](index._internal_.ApiClass.md#constructor)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:120

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[ApiClass](index._internal_.ApiClass.md).[_options](index._internal_.ApiClass.md#_options)

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:16

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:129

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:127

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:126

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:122

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:123

___

### nickname

• `Readonly` **nickname**: [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:132

___

### oauth

• `Readonly` **oauth**: [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:133

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:125

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:128

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:121

___

### providers

• `Readonly` **providers**: [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:131

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:124

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:130

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:55

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:44

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:43

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:53

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:39

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/index.QIWI.Currency.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:38

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:52

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:48

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:45

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/index.QIWI.LimitType.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:42

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:49

___

### NicknameApi

▪ `Static` `Readonly` **NicknameApi**: typeof [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:58

___

### OauthApi

▪ `Static` `Readonly` **OauthApi**: typeof [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:59

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:51

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:41

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:54

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:35

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:47

___

### ProvidersApi

▪ `Static` `Readonly` **ProvidersApi**: typeof [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:57

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:46

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/index.QIWI.Recipients.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:40

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:50

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:37

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md)

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:36

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

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

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:68

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

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

ApiClass.agent

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

ApiClass.options

#### Defined in

dist/cjs/apis/options-wrapper.d.ts:40

## Methods

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:139

___

### create

▸ `Static` **create**(`token`, `walletId?`): [`Wallet`](index.QIWI.Wallet.md)

Создаёт экземпляр класса.

Если используете с переменными окружения, то:
- Переименуйте переменную с токеном в `QIWI_TOKEN`
- Переименуйте переменную с номером кошелька (если есть) в `QIWI_WALLET`
- Используйте статический метод [env](index.QIWI.Wallet.md#env) вместо этого

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

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:84

___

### createAndFetchWalletId

▸ `Static` **createAndFetchWalletId**(`token`, `__namedParameters?`): `Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

Автоматически подтягивает номер телефона из API QIWI.
Номер телефона требуется для вызова большинства методов из
классов API:

- [IdentificationApi](index.QIWI.Wallet.md#identificationapi)
- [LimitsApi](index.QIWI.Wallet.md#limitsapi)
- [RestrictionsApi](index.QIWI.Wallet.md#restrictionsapi)
- [PaymentHistoryApi](index.QIWI.Wallet.md#paymenthistoryapi)
- [FundingSourcesApi](index.QIWI.Wallet.md#fundingsourcesapi)
- [CardsApi](index.QIWI.Wallet.md#cardsapi)

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

#### Defined in

dist/cjs/apis/wallet/wallet.d.ts:96
