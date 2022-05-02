"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("./api.js");
/**
 * # Проверка ограничений исходящих платежей с QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#restrictions)
 *
 * @export
 * @class WalletRestrictionsApi
 * @extends {WalletApi}
 */
class WalletRestrictionsApi extends api.WalletApi {
  /**
   * ## Проверка ограничений исходящих платежей с QIWI Кошелька
   *
   * Запрос проверяет, есть ли ограничение на исходящие платежи с
   * QIWI Кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @return {Promise<Restrictions>} {Promise<Restrictions>}
   * @memberof WalletRestrictionsApi
   */
  async get() {
    return await this.http.get(
      `person-profile/v1/persons/${this.walletId}/status/restrictions`
    );
  }
}
exports.WalletRestrictionsApi = WalletRestrictionsApi;