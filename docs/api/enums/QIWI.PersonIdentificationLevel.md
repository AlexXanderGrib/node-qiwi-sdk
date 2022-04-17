[qiwi-sdk](../README.md) / [Exports](../modules.md) / [QIWI](../modules/QIWI.md) / PersonIdentificationLevel

# Enumeration: PersonIdentificationLevel

[QIWI](../modules/QIWI.md).PersonIdentificationLevel

## Table of contents

### Enumeration members

- [ANONYMOUS](QIWI.PersonIdentificationLevel.md#anonymous)
- [FULL](QIWI.PersonIdentificationLevel.md#full)
- [SIMPLE](QIWI.PersonIdentificationLevel.md#simple)
- [VERIFIED](QIWI.PersonIdentificationLevel.md#verified)

## Enumeration members

### ANONYMOUS

• **ANONYMOUS** = `"ANONYMOUS"`

Пользователь не вошёл в кошелёк

#### Defined in

[src/services/personal.types.ts:5](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/074077c/src/services/personal.types.ts#L5)

___

### FULL

• **FULL** = `"FULL"`

"Профессиональный", если кошелек уже ранее получал полную
идентификацию по данным ФИО, номеру паспорта и дате рождения.

#### Defined in

[src/services/personal.types.ts:16](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/074077c/src/services/personal.types.ts#L16)

___

### SIMPLE

• **SIMPLE** = `"SIMPLE"`

"Минимальный"

#### Defined in

[src/services/personal.types.ts:7](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/074077c/src/services/personal.types.ts#L7)

___

### VERIFIED

• **VERIFIED** = `"VERIFIED"`

"Основной" (данные для идентификации успешно прошли проверку)

#### Defined in

[src/services/personal.types.ts:11](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/074077c/src/services/personal.types.ts#L11)
