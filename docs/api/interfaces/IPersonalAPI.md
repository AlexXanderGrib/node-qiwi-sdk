[qiwi-sdk](../README.md) / [Exports](../modules.md) / IPersonalAPI

# Interface: IPersonalAPI

## Implemented by

- [`Personal`](../classes/Personal.md)

## Table of contents

### Methods

- [blockCard](IPersonalAPI.md#blockcard)
- [createAccount](IPersonalAPI.md#createaccount)
- [createFormUrl](IPersonalAPI.md#createformurl)
- [createOauthToken](IPersonalAPI.md#createoauthtoken)
- [createP2PKeyPair](IPersonalAPI.md#createp2pkeypair)
- [getAccountOffers](IPersonalAPI.md#getaccountoffers)
- [getAccounts](IPersonalAPI.md#getaccounts)
- [getCardRequisites](IPersonalAPI.md#getcardrequisites)
- [getCards](IPersonalAPI.md#getcards)
- [getCommission](IPersonalAPI.md#getcommission)
- [getIdentification](IPersonalAPI.md#getidentification)
- [getLimits](IPersonalAPI.md#getlimits)
- [getPaymentHistory](IPersonalAPI.md#getpaymenthistory)
- [getPaymentHistoryTotal](IPersonalAPI.md#getpaymenthistorytotal)
- [getPersonProfile](IPersonalAPI.md#getpersonprofile)
- [getRestrictions](IPersonalAPI.md#getrestrictions)
- [getTransaction](IPersonalAPI.md#gettransaction)
- [getTransactionCheque](IPersonalAPI.md#gettransactioncheque)
- [pay2](IPersonalAPI.md#pay2)
- [renameCard](IPersonalAPI.md#renamecard)
- [sendTransactionCheque](IPersonalAPI.md#sendtransactioncheque)
- [setDefaultAccount](IPersonalAPI.md#setdefaultaccount)
- [setIdentification](IPersonalAPI.md#setidentification)
- [unblockCard](IPersonalAPI.md#unblockcard)

## Methods

### blockCard

▸ **blockCard**(`cardId`, `wallet?`): `Promise`<`any`\>

Блокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/personal.types.ts:1473](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1473)

___

### createAccount

▸ **createAccount**(`alias`, `wallet?`): `Promise`<``""``\>

Создаёт новый счёт по параметру `alias`
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `wallet?` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<``""``\>

#### Defined in

[src/services/personal.types.ts:1389](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1389)

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[src/services/personal.types.ts:1420](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1420)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules.md#prettytokenresponse)<[`IPersonalAPI`](IPersonalAPI.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules.md#prettytokenresponse)<[`IPersonalAPI`](IPersonalAPI.md)\>\>

#### Defined in

[src/services/personal.types.ts:1456](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1456)

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

[src/services/personal.types.ts:1446](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1446)

___

### getAccountOffers

▸ **getAccountOffers**(`wallet`): `Promise`<[`GetAccountOffersResponse`](../modules.md#getaccountoffersresponse)\>

Успешный JSON-ответ содержит данные о счетах, которые можно
создать

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules.md#getaccountoffersresponse)\>

#### Defined in

[src/services/personal.types.ts:1381](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1381)

___

### getAccounts

▸ **getAccounts**(`wallet`): `Promise`<[`Account`](../modules.md#account)[]\>

Успешный ответ содержит JSON-массив счетов вашего QIWI
Кошелька для фондирования платежей и текущие балансы счетов

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`Account`](../modules.md#account)[]\>

#### Defined in

[src/services/personal.types.ts:1373](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1373)

___

### getCardRequisites

▸ **getCardRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules.md#cardrequisitesresponse)\>

Получает реквизиты карты

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules.md#cardrequisitesresponse)\>

#### Defined in

[src/services/personal.types.ts:1493](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1493)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules.md#cardresponse)[]\>

#### Defined in

[src/services/personal.types.ts:1463](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1463)

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

[src/services/personal.types.ts:1410](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1410)

___

### getIdentification

▸ **getIdentification**(`wallet?`): `Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet?` | `string` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

#### Defined in

[src/services/personal.types.ts:1284](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1284)

___

### getLimits

▸ **getLimits**<`Limits`\>(`limits`, `wallet?`): `Promise`<[`LimitsResponse`](../modules.md#limitsresponse)<`Limits`[`number`]\>\>

Запрос возвращает текущие уровни лимитов по операциям в вашем
QIWI кошельке. Лимиты действуют как ограничения на сумму
определенных операций.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Limits` | extends [`LimitType`](../enums/LimitType.md)[][`LimitType`](../enums/LimitType.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | `Limits` |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`LimitsResponse`](../modules.md#limitsresponse)<`Limits`[`number`]\>\>

#### Defined in

[src/services/personal.types.ts:1295](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1295)

___

### getPaymentHistory

▸ **getPaymentHistory**(`parameters`, `wallet?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules.md#gettransactionshistoryresponse)\>

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules.md#getpaymenthistoryparams) | Тело запроса |
| `wallet?` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules.md#gettransactionshistoryresponse)\>

#### Defined in

[src/services/personal.types.ts:1317](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1317)

___

### getPaymentHistoryTotal

▸ **getPaymentHistoryTotal**(`parameters`, `wallet?`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules.md#getpaymenthistorytotalresponse)\>

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules.md#getpaymenthistorytotalparams) |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules.md#getpaymenthistorytotalresponse)\>

#### Defined in

[src/services/personal.types.ts:1329](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1329)

___

### getPersonProfile

▸ **getPersonProfile**(): `Promise`<[`PersonProfile`](../modules.md#personprofile)\>

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

#### Returns

`Promise`<[`PersonProfile`](../modules.md#personprofile)\>

#### Defined in

[src/services/personal.types.ts:1264](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1264)

___

### getRestrictions

▸ **getRestrictions**(`wallet?`): `Promise`<[`Restrictions`](../modules.md#restrictions)\>

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`Restrictions`](../modules.md#restrictions)\>

#### Defined in

[src/services/personal.types.ts:1306](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1306)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type`): `Promise`<[`Transaction`](../modules.md#transaction)\>

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | Номер транзакции |
| `type` | [`TransactionType`](../enums/TransactionType.md) | Тип транзакции |

#### Returns

`Promise`<[`Transaction`](../modules.md#transaction)\>

#### Defined in

[src/services/personal.types.ts:1341](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1341)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `StringOrNumber` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `format?` | [`ChequeFormat`](../enums/ChequeFormat.md) | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[src/services/personal.types.ts:1349](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1349)

___

### pay2

▸ **pay2**(`options`): `Promise`<[`PaymentResponse`](../modules.md#paymentresponse)\>

Более читаемая версия метода [pay](../classes/Personal.md#pay)

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Pay2Params`](../modules.md#pay2params) |

#### Returns

`Promise`<[`PaymentResponse`](../modules.md#paymentresponse)\>

#### Defined in

[src/services/personal.types.ts:1431](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1431)

___

### renameCard

▸ **renameCard**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules.md#cardrenameresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules.md#cardrenameresponse)\>

#### Defined in

[src/services/personal.types.ts:1495](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1495)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<``""``\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<``""``\>

#### Defined in

[src/services/personal.types.ts:1361](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1361)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`, `wallet?`): `Promise`<``""``\>

Устанавливает счёт по умолчанию
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `wallet?` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<``""``\>

#### Defined in

[src/services/personal.types.ts:1398](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1398)

___

### setIdentification

▸ **setIdentification**(`data`, `wallet?`): `Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules.md#identificationbase) |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

#### Defined in

[src/services/personal.types.ts:1273](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1273)

___

### unblockCard

▸ **unblockCard**(`cardId`, `wallet?`): `Promise`<[`CardUnblockResponse`](../modules.md#cardunblockresponse)\>

Разблокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules.md#cardunblockresponse)\>

#### Defined in

[src/services/personal.types.ts:1482](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.types.ts#L1482)
