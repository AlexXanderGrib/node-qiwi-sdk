[qiwi-sdk](../README.md) / [Exports](../modules.md) / PersonIdentificationLevel

# Enumeration: PersonIdentificationLevel

## Table of contents

### Enumeration members

- [ANONYMOUS](PersonIdentificationLevel.md#anonymous)
- [FULL](PersonIdentificationLevel.md#full)
- [SIMPLE](PersonIdentificationLevel.md#simple)
- [VERIFIED](PersonIdentificationLevel.md#verified)

## Enumeration members

### ANONYMOUS

• **ANONYMOUS** = `"ANONYMOUS"`

Пользователь не вошёл в кошелёк

#### Defined in

src/apis/wallet/wallet.types.ts:5

___

### FULL

• **FULL** = `"FULL"`

"Профессиональный", если кошелек уже ранее получал полную
идентификацию по данным ФИО, номеру паспорта и дате рождения.

#### Defined in

src/apis/wallet/wallet.types.ts:16

___

### SIMPLE

• **SIMPLE** = `"SIMPLE"`

"Минимальный"

#### Defined in

src/apis/wallet/wallet.types.ts:7

___

### VERIFIED

• **VERIFIED** = `"VERIFIED"`

"Основной" (данные для идентификации успешно прошли проверку)

#### Defined in

src/apis/wallet/wallet.types.ts:11
