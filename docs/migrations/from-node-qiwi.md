# Миграция с `node-qiwi`

Для начала, `node-qiwi` это не плохая, но
у неё есть существенные минусы, которые решены в данном SDK.
Вот что мы решаем:

- **Типы.** `qiwi-sdk` в отличии от `node-qiwi`
  полностью написана на **TypeScript** и покрыта тестами.

- **Поддержка.** `qiwi-sdk` активно разрабатывается и поддерживается
  уже 2 года подряд. В то время, как в `node-qiwi`
  последний коммит был сделан в 2017 году.

- **Обработка ошибок.** В `node-qiwi` нет реализованных
  ошибок API, только ошибки http-запроса. `qiwi-sdk` разделяет ошибки Http и ошибки API
  и даже заботится о том, чтобы из за использования `Promise`'ов не терялся
  Stack Trace

Ещё раз повторяю. `node-qiwi` это не плохая библиотека, правда, кажется, что морально устаревшая.

## Шаги

1. Установите `qiwi-sdk` через любой удобный вам менеджер пакетов
   - **Используя `npm`**
     ```shell
     npm i qiwi-sdk
     ```
   - **Используя `Yarn`**
     ```shell
     yarn add qiwi-sdk
     ```
   - **Используя `pnpm`**
     ```shell
     pnpm add qiwi-sdk
     ```
2. Замените импорты в ваших файлах.

   ```diff
   - const Qiwi = require('node-qiwi');
   + const { NodeQiwi: Qiwi } = require('qiwi-sdk');
   ```

   Импортированный класс `NodeQiwi` практически полностью
   совместим с таковым из `node-qiwi` чтобы
   обеспечить лёгкую замену

3. Готово, теперь ваша работа с QIWI API типизированна и безопасна

## Что дальше

1. Посмотрите код [класса совместимости](../../src/apis/wallet/wallet.compat-node-qiwi.ts)
   чтобы понять как используются текущие API.
2. Изучите [документацию библиотеки](../api/modules.md)
3. Посмотрите [пример использования Wallet API](../../examples/5-bot.js)