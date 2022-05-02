"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("./api.js");
/**
 * # Информация о провайдере
 * Не документированное
 *
 * @export
 * @class WalletProvidersApi
 * @extends {WalletApi}
 */
class WalletProvidersApi extends api.WalletApi {
  /**
   * ## Профиль пользователя
   *
   * Запрос возвращает информацию о вашем профиле - наборе
   * пользовательских данных и настроек вашего QIWI кошелька.
   *
   * @param {number} providerId
   * @return {Promise<ProviderInfo>} {Promise<ProviderInfo>}
   * @memberof WalletProvidersApi
   */
  async getInfo(providerId) {
    return await this.http.get(`providers-catalog/v2/providers/${providerId}`);
  }
}
exports.WalletProvidersApi = WalletProvidersApi;
