"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("./api.js");
/**
 * # Баланс QIWI Кошелька
 * [Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#balance)
 *
 * @export
 * @class WalletFundingSourcesApi
 * @extends {WalletApi}
 */
class WalletFundingSourcesApi extends api.WalletApi {
  /**
   * ## Список балансов
   *
   * Запрос выгружает текущие балансы счетов вашего QIWI Кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @return {Promise<GetAccountsResponse>} {Promise<GetAccountsResponse["accounts"]>}
   * @memberof WalletFundingSourcesApi
   */
  async getAccounts() {
    const { accounts } = await this.http.get(
      `funding-sources/v2/persons/${this.walletId}/accounts`
    );
    return accounts;
  }
  /**
   * ## Создание баланса
   *
   * Запрос создает новый счет и баланс в вашем QIWI Кошельке.
   * Список доступных для создания счетов можно получить {@link getAccountOffers}.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {string} alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @return {Promise<void>} {Promise<void>}
   * @memberof WalletFundingSourcesApi
   */
  async createAccount(alias) {
    await this.http.post(`funding-sources/v2/persons/${this.walletId}/accounts`, {
      alias
    });
  }
  /**
   * ## Запрос доступных счетов
   *
   * Запрос отображает псевдонимы счетов, доступных для создания
   * в вашем QIWI Кошельке.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @return {Promise<GetAccountOffersResponse>} {Promise<GetAccountOffersResponse>}
   * @memberof WalletFundingSourcesApi
   */
  async getAccountOffers() {
    return await this.http.get(
      `funding-sources/v2/persons/${this.walletId}/accounts/offer`
    );
  }
  /**
   * ## Установка баланса по умолчанию
   *
   * Запрос устанавливает для вашего QIWI Кошелька счет, баланс
   * которого будет использоваться для фондирования всех платежей
   * по умолчанию. Счет должен содержаться в {@link getAccounts}
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {string} alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @return {Promise<void>} {Promise<void>}
   * @memberof WalletFundingSourcesApi
   */
  async setDefaultAccount(alias) {
    return await this.http.patch(
      `funding-sources/v2/persons/${this.walletId}/accounts/${alias}`,
      { defaultAccount: true }
    );
  }
}
exports.WalletFundingSourcesApi = WalletFundingSourcesApi;
