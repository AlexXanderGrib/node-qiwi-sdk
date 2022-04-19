[qiwi-sdk](../README.md) / [Exports](../modules.md) / IPersonalAPI

# Interface: IPersonalAPI

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

[src/services/personal.types.ts:1556](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1556)

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

[src/services/personal.types.ts:1472](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1472)

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules/QIWI.md#formurloptions) |  |

#### Returns

`string`

#### Defined in

[src/services/personal.types.ts:1503](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1503)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`IPersonalAPI`](QIWI.IPersonalAPI.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules/QIWI.md#prettytokenresponse)<[`IPersonalAPI`](QIWI.IPersonalAPI.md)\>\>

#### Defined in

[src/services/personal.types.ts:1539](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1539)

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

[src/services/personal.types.ts:1529](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1529)

___

### getAccountOffers

▸ **getAccountOffers**(`wallet`): `Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

Успешный JSON-ответ содержит данные о счетах, которые можно
создать

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules/QIWI.md#getaccountoffersresponse)\>

#### Defined in

[src/services/personal.types.ts:1464](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1464)

___

### getAccounts

▸ **getAccounts**(`wallet`): `Promise`<[`Account`](../modules/QIWI.md#account)[]\>

Успешный ответ содержит JSON-массив счетов вашего QIWI
Кошелька для фондирования платежей и текущие балансы счетов

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`Account`](../modules/QIWI.md#account)[]\>

#### Defined in

[src/services/personal.types.ts:1456](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1456)

___

### getCardRequisites

▸ **getCardRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

Получает реквизиты карты

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules/QIWI.md#cardrequisitesresponse)\>

#### Defined in

[src/services/personal.types.ts:1576](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1576)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules/QIWI.md#cardresponse)[]\>

#### Defined in

[src/services/personal.types.ts:1546](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1546)

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

[src/services/personal.types.ts:1493](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1493)

___

### getIdentification

▸ **getIdentification**(`wallet?`): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet?` | `string` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

#### Defined in

[src/services/personal.types.ts:1367](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1367)

___

### getLimits

▸ **getLimits**<`Limits`\>(`limits`, `wallet?`): `Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

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
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`LimitsResponse`](../modules/QIWI.md#limitsresponse)<`Limits`[`number`]\>\>

#### Defined in

[src/services/personal.types.ts:1378](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1378)

___

### getPaymentHistory

▸ **getPaymentHistory**(`parameters`, `wallet?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules/QIWI.md#getpaymenthistoryparams) | Тело запроса |
| `wallet?` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules/QIWI.md#gettransactionshistoryresponse)\>

#### Defined in

[src/services/personal.types.ts:1400](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1400)

___

### getPaymentHistoryTotal

▸ **getPaymentHistoryTotal**(`parameters`, `wallet?`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules/QIWI.md#getpaymenthistorytotalparams) |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules/QIWI.md#getpaymenthistorytotalresponse)\>

#### Defined in

[src/services/personal.types.ts:1412](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1412)

___

### getPersonProfile

▸ **getPersonProfile**(): `Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

#### Returns

`Promise`<[`PersonProfile`](../modules/QIWI.md#personprofile)\>

#### Defined in

[src/services/personal.types.ts:1347](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1347)

___

### getRestrictions

▸ **getRestrictions**(`wallet?`): `Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`Restrictions`](../modules/QIWI.md#restrictions)\>

#### Defined in

[src/services/personal.types.ts:1389](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1389)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type`): `Promise`<[`Transaction`](../modules/QIWI.md#transaction-1)\>

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | Номер транзакции |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | Тип транзакции |

#### Returns

`Promise`<[`Transaction`](../modules/QIWI.md#transaction-1)\>

#### Defined in

[src/services/personal.types.ts:1424](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1424)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `StringOrNumber` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `format?` | [`ChequeFormat`](../enums/QIWI.ChequeFormat.md) | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[src/services/personal.types.ts:1432](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1432)

___

### pay2

▸ **pay2**(`options`): `Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

Более читаемая версия метода [pay](../classes/QIWI.Personal.md#pay)

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Pay2Params`](../modules/QIWI.md#pay2params) |

#### Returns

`Promise`<[`PaymentResponse`](../modules/QIWI.md#paymentresponse)\>

#### Defined in

[src/services/personal.types.ts:1514](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1514)

___

### renameCard

▸ **renameCard**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules/QIWI.md#cardrenameresponse)\>

#### Defined in

[src/services/personal.types.ts:1578](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1578)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<``""``\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/QIWI.TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<``""``\>

#### Defined in

[src/services/personal.types.ts:1444](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1444)

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

[src/services/personal.types.ts:1481](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1481)

___

### setIdentification

▸ **setIdentification**(`data`, `wallet?`): `Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules/QIWI.md#identificationbase) |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules/QIWI.md#identificationresponse)\>

#### Defined in

[src/services/personal.types.ts:1356](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1356)

___

### unblockCard

▸ **unblockCard**(`cardId`, `wallet?`): `Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

Разблокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `wallet?` | `StringOrNumber` |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules/QIWI.md#cardunblockresponse)\>

#### Defined in

[src/services/personal.types.ts:1565](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/9138ec0/src/services/personal.types.ts#L1565)
