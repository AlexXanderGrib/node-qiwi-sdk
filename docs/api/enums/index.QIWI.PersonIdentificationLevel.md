[QIWI SDK](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [QIWI](../modules/index.QIWI.md) / PersonIdentificationLevel

# Enumeration: PersonIdentificationLevel

[index](../modules/index.md).[QIWI](../modules/index.QIWI.md).PersonIdentificationLevel

## Table of contents

### Enumeration Members

- [ANONYMOUS](index.QIWI.PersonIdentificationLevel.md#anonymous)
- [FULL](index.QIWI.PersonIdentificationLevel.md#full)
- [SIMPLE](index.QIWI.PersonIdentificationLevel.md#simple)
- [VERIFIED](index.QIWI.PersonIdentificationLevel.md#verified)

## Enumeration Members

### ANONYMOUS

• **ANONYMOUS** = ``"ANONYMOUS"``

Пользователь не вошёл в кошелёк

#### Defined in

[apis/wallet/wallet.types.ts:3](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/wallet/wallet.types.ts#L3)

___

### FULL

• **FULL** = ``"FULL"``

"Профессиональный", если кошелек уже ранее получал полную
идентификацию по данным ФИО, номеру паспорта и дате рождения.

#### Defined in

[apis/wallet/wallet.types.ts:14](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/wallet/wallet.types.ts#L14)

___

### SIMPLE

• **SIMPLE** = ``"SIMPLE"``

"Минимальный"

#### Defined in

[apis/wallet/wallet.types.ts:5](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/wallet/wallet.types.ts#L5)

___

### VERIFIED

• **VERIFIED** = ``"VERIFIED"``

"Основной" (данные для идентификации успешно прошли проверку)

#### Defined in

[apis/wallet/wallet.types.ts:9](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/4602c58/src/apis/wallet/wallet.types.ts#L9)
