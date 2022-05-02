"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("./api.js");
/**
 * # Идентификация
 * [Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#identification)
 *
 * @export
 * @class WalletIdentificationApi
 * @extends {WalletApi}
 */
class WalletIdentificationApi extends api.WalletApi {
  /**
   * # Идентификация пользователя
   *
   * Данный запрос позволяет отправить данные для идентификации
   * вашего QIWI кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {IdentificationBase} data
   * @param {StringOrNumber} wallet
   * @return {Promise<IdentificationResponse>} {Promise<IdentificationResponse>}
   * @memberof WalletIdentificationApi
   */
  async set(data) {
    return await this.http.post(
      `identification/v1/persons/${this.walletId}/identification`,
      data
    );
  }
  /**
   * # Данные идентификации
   *
   * Данный запрос позволяет выгрузить маскированные данные и
   * статус идентификации своего QIWI кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {StringOrNumber} wallet
   * @return {Promise<IdentificationResponse>} {Promise<IdentificationResponse>}
   * @memberof WalletIdentificationApi
   */
  async get() {
    return await this.http.get(
      `identification/v1/persons/${this.walletId}/identification`
    );
  }
}
exports.WalletIdentificationApi = WalletIdentificationApi;
