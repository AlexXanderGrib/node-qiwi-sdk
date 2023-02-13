[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / WalletWebhooksApi

# Class: WalletWebhooksApi

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).WalletWebhooksApi

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

**`Export`**

## Hierarchy

- [`WalletApi`](index._internal_.WalletApi.md)

  ↳ **`WalletWebhooksApi`**

## Table of contents

### Constructors

- [constructor](index._internal_.WalletWebhooksApi.md#constructor)

### Properties

- [\_options](index._internal_.WalletWebhooksApi.md#_options)
- [activeId](index._internal_.WalletWebhooksApi.md#activeid)
- [keys](index._internal_.WalletWebhooksApi.md#keys)

### Accessors

- [http](index._internal_.WalletWebhooksApi.md#http)
- [walletId](index._internal_.WalletWebhooksApi.md#walletid)

### Methods

- [\_getDefaultHookId](index._internal_.WalletWebhooksApi.md#_getdefaulthookid)
- [add](index._internal_.WalletWebhooksApi.md#add)
- [checkSign](index._internal_.WalletWebhooksApi.md#checksign)
- [getActiveWebhook](index._internal_.WalletWebhooksApi.md#getactivewebhook)
- [getSecret](index._internal_.WalletWebhooksApi.md#getsecret)
- [remove](index._internal_.WalletWebhooksApi.md#remove)
- [testActiveWebhook](index._internal_.WalletWebhooksApi.md#testactivewebhook)
- [updateSecret](index._internal_.WalletWebhooksApi.md#updatesecret)

## Constructors

### constructor

• **new WalletWebhooksApi**(`options`)

Creates an instance of OptionsWrapper.

**`Memberof`**

OptionsWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md) |

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[constructor](index._internal_.WalletApi.md#constructor)

#### Defined in

[apis/options-wrapper.ts:23](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L23)

## Properties

### \_options

• `Protected` `Readonly` **\_options**: [`WalletApiOptions`](../interfaces/index.QIWI.WalletApiOptions.md)

**`Memberof`**

OptionsWrapper

#### Inherited from

[WalletApi](index._internal_.WalletApi.md).[_options](index._internal_.WalletApi.md#_options)

#### Defined in

[apis/options-wrapper.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/options-wrapper.ts#L16)

___

### activeId

• `Optional` **activeId**: `string`

#### Defined in

[apis/wallet/webhooks.api.ts:37](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L37)

___

### keys

• **keys**: `Map`<`string`, `string`\>

#### Defined in

[apis/wallet/webhooks.api.ts:36](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L36)

## Accessors

### http

• `Protected` `get` **http**(): [`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

**`Memberof`**

ApiSubclass

#### Returns

[`SimpleJsonHttp`](index.QIWI.SimpleJsonHttp.md)

#### Inherited from

WalletApi.http

#### Defined in

[apis/api.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/api.ts#L55)

___

### walletId

• `Protected` `get` **walletId**(): `string`

**`Memberof`**

WalletApi

#### Returns

`string`

#### Inherited from

WalletApi.walletId

#### Defined in

[apis/wallet/api.ts:17](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/api.ts#L17)

## Methods

### \_getDefaultHookId

▸ `Protected` **_getDefaultHookId**(): `string`

**`Memberof`**

WalletWebhooksApi

#### Returns

`string`

#### Defined in

[apis/wallet/webhooks.api.ts:46](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L46)

___

### add

▸ **add**(`parameter`, `txnType`): `Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

Регистрирует обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | `string` | Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.** |
| `txnType` | ``0`` \| ``2`` \| ``1`` | Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все" |

#### Returns

`Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Defined in

[apis/wallet/webhooks.api.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L58)

___

### checkSign

▸ **checkSign**(`transaction`): `Promise`<`undefined` \| `boolean`\>

Проверяет подпись уведомления вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`WebhookTransaction`](../modules/index.QIWI.md#webhooktransaction) | Объект уведомления транзакции вебхука |

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Defined in

[apis/wallet/webhooks.api.ts:138](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L138)

___

### getActiveWebhook

▸ **getActiveWebhook**(): `Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules/index.QIWI.md#webhookinfo)\>

#### Defined in

[apis/wallet/webhooks.api.ts:113](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L113)

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

[apis/wallet/webhooks.api.ts:88](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L88)

___

### remove

▸ **remove**(`hookId?`): `Promise`<`any`\>

Удаляет обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId?` | `string` | UUID вебхука |

#### Returns

`Promise`<`any`\>

#### Defined in

[apis/wallet/webhooks.api.ts:75](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L75)

___

### testActiveWebhook

▸ **testActiveWebhook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`Link`**

https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[apis/wallet/webhooks.api.ts:127](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L127)

___

### updateSecret

▸ **updateSecret**(`hookId?`): `Promise`<`string`\>

Изменяет секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[apis/wallet/webhooks.api.ts:101](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/8cf62fb/src/apis/wallet/webhooks.api.ts#L101)
