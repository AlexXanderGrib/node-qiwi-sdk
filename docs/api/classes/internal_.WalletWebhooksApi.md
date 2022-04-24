[qiwi-sdk](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WalletWebhooksApi

# Class: WalletWebhooksApi

[<internal>](../modules/internal_.md).WalletWebhooksApi

# Уведомления (вебхуки)

Хуки или уведомления с данными о событии (платеже/пополнении)
отправляются на ваш сервер. В настоящее время поддерживаются
только вебхуки (webhook) - сообщения, адресованные веб-сервисам.
Для приема вебхуков вам необходимо настроить свой сервер на
прием и обработку POST-запросов ([Формат запросов](https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_format)).

**От вашего сервера успешный ответ 200 OK на входящий запрос
должен поступить в течение 1-2 сек. Не дождавшись ответа, сервис
КИВИ отправляет еще одно уведомление через 10 минут, потом еще
одно через 1 час.**

Пулы IP-адресов, с которых сервисы QIWI отправляют webhook:
- `79.142.16.0/20`
- `195.189.100.0/22`
- `91.232.230.0/23`
- `91.213.51.0/24`

Если ваш сервер обработки вебхуков работает за брандмауэром, необходимо добавить эти IP-адреса в список разрешенных адресов входящих TCP-пакетов.

**`export`**

## Hierarchy

- [`WalletApi`](internal_.WalletApi.md)

  ↳ **`WalletWebhooksApi`**

## Table of contents

### Constructors

- [constructor](internal_.WalletWebhooksApi.md#constructor)

### Properties

- [\_options](internal_.WalletWebhooksApi.md#_options)
- [activeId](internal_.WalletWebhooksApi.md#activeid)
- [keys](internal_.WalletWebhooksApi.md#keys)

### Accessors

- [http](internal_.WalletWebhooksApi.md#http)
- [walletId](internal_.WalletWebhooksApi.md#walletid)

### Methods

- [add](internal_.WalletWebhooksApi.md#add)
- [checkSign](internal_.WalletWebhooksApi.md#checksign)
- [getActiveWebhook](internal_.WalletWebhooksApi.md#getactivewebhook)
- [getSecret](internal_.WalletWebhooksApi.md#getsecret)
- [remove](internal_.WalletWebhooksApi.md#remove)
- [testActiveWebhook](internal_.WalletWebhooksApi.md#testactivewebhook)
- [updateSecret](internal_.WalletWebhooksApi.md#updatesecret)

## Constructors

### constructor

• **new WalletWebhooksApi**(`_options`)

Creates an instance of WalletApi.

**`memberof`** WalletApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](internal_.WalletApi.md).[constructor](internal_.WalletApi.md#constructor)

#### Defined in

[src/apis/wallet/api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L36)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/QIWI.WalletApiOptions.md)

#### Inherited from

[WalletApi](internal_.WalletApi.md).[_options](internal_.WalletApi.md#_options)

___

### activeId

• `Optional` **activeId**: `string`

#### Defined in

[src/apis/wallet/webhooks.api.ts:35](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L35)

___

### keys

• **keys**: `Map`<`string`, `string`\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:34](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L34)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

**`readonly`**

**`memberof`** WalletApi

#### Returns

[`SimpleJsonHttp`](internal_.SimpleJsonHttp.md)

#### Inherited from

WalletApi.http

#### Defined in

[src/apis/wallet/api.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L16)

___

### walletId

• `Protected` `get` **walletId**(): `string`

**`readonly`**

**`memberof`** WalletApi

#### Returns

`string`

#### Inherited from

WalletApi.walletId

#### Defined in

[src/apis/wallet/api.ts:27](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/api.ts#L27)

## Methods

### add

▸ **add**(`parameter`, `txnType`): `Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

Регистрирует обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | `string` | Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.** |
| `txnType` | ``0`` \| ``2`` \| ``1`` | Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все" |

#### Returns

`Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:43](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L43)

___

### checkSign

▸ **checkSign**(`transaction`): `Promise`<`undefined` \| `boolean`\>

Проверяет подпись уведомления вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`WebhookTransaction`](../modules/QIWI.md#webhooktransaction) | Объект уведомления транзакции вебхука |

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:123](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L123)

___

### getActiveWebhook

▸ **getActiveWebhook**(): `Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules/QIWI.md#webhookinfo)\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:98](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L98)

___

### getSecret

▸ **getSecret**(`hookId?`): `Promise`<`string`\>

Получает секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:73](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L73)

___

### remove

▸ **remove**(`hookId?`): `Promise`<`any`\>

Удаляет обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L60)

___

### testActiveWebhook

▸ **testActiveWebhook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`link`** https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:112](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L112)

___

### updateSecret

▸ **updateSecret**(`hookId?`): `Promise`<`string`\>

Измененяет секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/apis/wallet/webhooks.api.ts:86](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/0783ca8/src/apis/wallet/webhooks.api.ts#L86)
