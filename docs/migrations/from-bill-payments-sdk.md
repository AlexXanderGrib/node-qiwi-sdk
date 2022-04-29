# Миграция с `@qiwi/bill-payments-node-js-sdk`

Для начала, `@qiwi/bill-payments-node-js-sdk` это не плохая, но
у неё есть существенные минусы, которые решены в данном SDK.
Вот что мы решаем:

- **Типы.** `qiwi-sdk` в отличии от `@qiwi/bill-payments-node-js-sdk`
  полностью написана на **TypeScript** и покрыта тестами.

- **Безопасность.** `qiwi-sdk` постоянно проверятся на уязвимости
  в [Snyk](https://snyk.io/advisor/npm-package/qiwi-sdk) и Code QL.
  В то время как `@qiwi/bill-payments-node-js-sdk` на момент написания
  содержит уязвимость типа [Timing Attack](https://ru.wikipedia.org/wiki/%D0%90%D1%82%D0%B0%D0%BA%D0%B0_%D0%BF%D0%BE_%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8):

  ```javascript
  return hash === signature;
  ```

  Уязвимый код до сих пор находится на [GitHub](https://github.com/QIWI-API/bill-payments-node-js-sdk/blob/master/lib/QiwiBillPaymentsAPI.js#L108)

- **Поддержка.** `qiwi-sdk` активно разрабатывается и поддерживается
  уже 2 года подряд. В то время, как в `@qiwi/bill-payments-node-js-sdk`
  висят [Issue датированные 2020](https://github.com/QIWI-API/bill-payments-node-js-sdk/issues/43)
  без ответа

- **Обработка ошибок.** В `@qiwi/bill-payments-node-js-sdk` нет реализованных
  ошибок API, только ошибки http-запроса. `qiwi-sdk` разделяет ошибки Http и ошибки API
  и даже заботится о том, чтобы из за использования `Promise`'ов не терялся
  Stack Trace

Ещё раз повторяю. `@qiwi/bill-payments-node-js-sdk` это не плохая библиотека.
Она официальная, правда, кажется, что морально устаревшая.

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
   - const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk');
   + const { QiwiBillPaymentsAPI } = require('qiwi-sdk');
   ```

   Импортированный класс `QiwiBillPaymentsAPI` практически полностью
   совместим с таковым из `@qiwi/bill-payments-node-js-sdk` чтобы
   обеспечить лёгкую замену

3. Готово, теперь ваша работа с QIWI API типизированна и безопасна

## Что дальше

1. Посмотрите код [класса совместимости](../../src/apis/p2p/p2p.compat-bill-payments.ts)
   чтобы понять как используются текущие API.
2. Изучите [документацию библиотеки](../api/modules.md)
3. Посмотрите [пример использования p2p счетов](../../examples/3-p2p.js)
