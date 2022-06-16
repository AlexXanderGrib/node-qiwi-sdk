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

### Accessors

- [agent](index.QIWI.Wallet.md#agent)
- [options](index.QIWI.Wallet.md#options)

### Methods

- [createOauthToken](index.QIWI.Wallet.md#createoauthtoken)
- [create](index.QIWI.Wallet.md#create)
- [createAndFetchWalletId](index.QIWI.Wallet.md#createandfetchwalletid)
- [env](index.QIWI.Wallet.md#env)
- [httpClientFactory](index.QIWI.Wallet.md#httpclientfactory)

## Constructors

### constructor

• **new Wallet**(`[options]?`)

Creates an instance of Wallet.

**`memberof`** Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `[options]` | `Partial`<[`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)\> |

#### Overrides

[ApiClass](index._internal_.ApiClass.md).[constructor](index._internal_.ApiClass.md#constructor)

#### Defined in

[apis/wallet/wallet.ts:190](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L190)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`readonly`**

**`memberof`** OptionsWrapper

#### Inherited from

[ApiClass](index._internal_.ApiClass.md).[_options](index._internal_.ApiClass.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/options-wrapper.ts#L16)

___

### bills

• `Readonly` **bills**: [`WalletBillsApi`](index._internal_.WalletBillsApi.md)

#### Defined in

[apis/wallet/wallet.ts:206](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L206)

___

### cards

• `Readonly` **cards**: [`WalletCardsApi`](index._internal_.WalletCardsApi.md)

#### Defined in

[apis/wallet/wallet.ts:204](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L204)

___

### fundingSources

• `Readonly` **fundingSources**: [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md)

#### Defined in

[apis/wallet/wallet.ts:203](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L203)

___

### identification

• `Readonly` **identification**: [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md)

#### Defined in

[apis/wallet/wallet.ts:199](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L199)

___

### limits

• `Readonly` **limits**: [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md)

#### Defined in

[apis/wallet/wallet.ts:200](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L200)

___

### nickname

• `Readonly` **nickname**: [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md)

#### Defined in

[apis/wallet/wallet.ts:209](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L209)

___

### oauth

• `Readonly` **oauth**: [`WalletOauthApi`](index._internal_.WalletOauthApi.md)

#### Defined in

[apis/wallet/wallet.ts:210](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L210)

___

### paymentHistory

• `Readonly` **paymentHistory**: [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md)

#### Defined in

[apis/wallet/wallet.ts:202](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L202)

___

### payments

• `Readonly` **payments**: [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md)

#### Defined in

[apis/wallet/wallet.ts:205](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L205)

___

### personProfile

• `Readonly` **personProfile**: [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md)

#### Defined in

[apis/wallet/wallet.ts:198](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L198)

___

### providers

• `Readonly` **providers**: [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md)

#### Defined in

[apis/wallet/wallet.ts:208](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L208)

___

### restrictions

• `Readonly` **restrictions**: [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md)

#### Defined in

[apis/wallet/wallet.ts:201](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L201)

___

### webhooks

• `Readonly` **webhooks**: [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md)

#### Defined in

[apis/wallet/wallet.ts:207](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L207)

___

### BillsApi

▪ `Static` `Readonly` **BillsApi**: typeof [`WalletBillsApi`](index._internal_.WalletBillsApi.md) = `WalletBillsApi`

#### Defined in

[apis/wallet/wallet.ts:74](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L74)

___

### CardActionStatus

▪ `Static` `Readonly` **CardActionStatus**: typeof [`CardActionStatus`](../enums/index.QIWI.CardActionStatus.md) = `CardActionStatus`

#### Defined in

[apis/wallet/wallet.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L62)

___

### CardStatus

▪ `Static` `Readonly` **CardStatus**: typeof [`CardStatus`](../enums/index.QIWI.CardStatus.md) = `CardStatus`

#### Defined in

[apis/wallet/wallet.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L61)

___

### CardsApi

▪ `Static` `Readonly` **CardsApi**: typeof [`WalletCardsApi`](index._internal_.WalletCardsApi.md) = `WalletCardsApi`

#### Defined in

[apis/wallet/wallet.ts:72](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L72)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) = `ChequeFormat`

#### Defined in

[apis/wallet/wallet.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L57)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/index.QIWI.Currency.md) = `Currency`

#### Defined in

[apis/wallet/wallet.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L56)

___

### FundingSourcesApi

▪ `Static` `Readonly` **FundingSourcesApi**: typeof [`WalletFundingSourcesApi`](index._internal_.WalletFundingSourcesApi.md) = `WalletFundingSourcesApi`

#### Defined in

[apis/wallet/wallet.ts:71](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L71)

___

### IdentificationApi

▪ `Static` `Readonly` **IdentificationApi**: typeof [`WalletIdentificationApi`](index._internal_.WalletIdentificationApi.md) = `WalletIdentificationApi`

#### Defined in

[apis/wallet/wallet.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L67)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Defined in

[apis/wallet/wallet.ts:63](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L63)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/index.QIWI.LimitType.md) = `LimitType`

#### Defined in

[apis/wallet/wallet.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L60)

___

### LimitsApi

▪ `Static` `Readonly` **LimitsApi**: typeof [`WalletLimitsApi`](index._internal_.WalletLimitsApi.md) = `WalletLimitsApi`

#### Defined in

[apis/wallet/wallet.ts:68](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L68)

___

### NicknameApi

▪ `Static` `Readonly` **NicknameApi**: typeof [`WalletNicknameApi`](index._internal_.WalletNicknameApi.md) = `WalletNicknameApi`

#### Defined in

[apis/wallet/wallet.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L77)

___

### OauthApi

▪ `Static` `Readonly` **OauthApi**: typeof [`WalletOauthApi`](index._internal_.WalletOauthApi.md) = `WalletOauthApi`

#### Defined in

[apis/wallet/wallet.ts:78](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L78)

___

### PaymentHistoryApi

▪ `Static` `Readonly` **PaymentHistoryApi**: typeof [`WalletPaymentHistoryApi`](index._internal_.WalletPaymentHistoryApi.md) = `WalletPaymentHistoryApi`

#### Defined in

[apis/wallet/wallet.ts:70](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L70)

___

### PaymentHistorySource

▪ `Static` `Readonly` **PaymentHistorySource**: typeof [`PaymentHistorySource`](../enums/index.QIWI.PaymentHistorySource.md) = `PaymentHistorySource`

#### Defined in

[apis/wallet/wallet.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L59)

___

### PaymentsApi

▪ `Static` `Readonly` **PaymentsApi**: typeof [`WalletPaymentsApi`](index._internal_.WalletPaymentsApi.md) = `WalletPaymentsApi`

#### Defined in

[apis/wallet/wallet.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L73)

___

### PersonIdentificationLevel

▪ `Static` `Readonly` **PersonIdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/index.QIWI.PersonIdentificationLevel.md) = `PersonIdentificationLevel`

#### Defined in

[apis/wallet/wallet.ts:53](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L53)

___

### PersonProfileApi

▪ `Static` `Readonly` **PersonProfileApi**: typeof [`WalletPersonProfileApi`](index._internal_.WalletPersonProfileApi.md) = `WalletPersonProfileApi`

#### Defined in

[apis/wallet/wallet.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L66)

___

### ProvidersApi

▪ `Static` `Readonly` **ProvidersApi**: typeof [`WalletProvidersApi`](index._internal_.WalletProvidersApi.md) = `WalletProvidersApi`

#### Defined in

[apis/wallet/wallet.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L76)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/index.QIWI.ChequeFormat.md) = `ChequeFormat`

#### Defined in

[apis/wallet/wallet.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L64)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/index.QIWI.Recipients.md) = `Recipients`

#### Defined in

[apis/wallet/wallet.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L58)

___

### RestrictionsApi

▪ `Static` `Readonly` **RestrictionsApi**: typeof [`WalletRestrictionsApi`](index._internal_.WalletRestrictionsApi.md) = `WalletRestrictionsApi`

#### Defined in

[apis/wallet/wallet.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L69)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/index.QIWI.TransactionStatus.md) = `TransactionStatus`

#### Defined in

[apis/wallet/wallet.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L55)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/index.QIWI.TransactionType.md) = `TransactionType`

#### Defined in

[apis/wallet/wallet.ts:54](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L54)

___

### WebhooksApi

▪ `Static` `Readonly` **WebhooksApi**: typeof [`WalletWebhooksApi`](index._internal_.WalletWebhooksApi.md) = `WalletWebhooksApi`

#### Defined in

[apis/wallet/wallet.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L75)

## Accessors

### agent

• `get` **agent**(): `any`

**`memberof`** WalletCompat

#### Returns

`any`

#### Inherited from

ApiClass.agent

#### Defined in

[apis/api.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/api.ts#L23)

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

[apis/api.ts:32](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/api.ts#L32)

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

[apis/options-wrapper.ts:44](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/options-wrapper.ts#L44)

## Methods

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/index.QIWI.md#prettytokenresponse)<[`Wallet`](index.QIWI.Wallet.md)\>\>

#### Defined in

[apis/wallet/wallet.ts:217](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L217)

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `undefined` |
| `walletId` | `string` | `""` |

#### Returns

[`Wallet`](index.QIWI.Wallet.md)

{Wallet}

#### Defined in

[apis/wallet/wallet.ts:123](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L123)

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
| `__namedParameters` | [`CreateAndFetchWalletIdParameters`](../modules/index._internal_.md#createandfetchwalletidparameters) |

#### Returns

`Promise`<[`Wallet`](index.QIWI.Wallet.md)\>

{Promise<Wallet>}

#### Defined in

[apis/wallet/wallet.ts:166](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L166)

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

#### Defined in

[apis/wallet/wallet.ts:142](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L142)

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

#### Defined in

[apis/wallet/wallet.ts:88](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/05e2fb8/src/apis/wallet/wallet.ts#L88)
