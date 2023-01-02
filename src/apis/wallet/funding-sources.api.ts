import { url } from "../shared/url";
import { WalletApi } from "./api";
import type { GetAccountsResponse, GetAccountOffersResponse } from "./wallet.types";

/**
 * # Баланс QIWI Кошелька
 * [Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#balance)
 *
 * @export
 * @class WalletFundingSourcesApi
 * @extends {WalletApi}
 */
export class WalletFundingSourcesApi extends WalletApi {
  /**
   * ## Список балансов
   *
   * Запрос выгружает текущие балансы счетов вашего QIWI Кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @return {Promise<GetAccountsResponse>} Promise<GetAccountsResponse["accounts"]>
   * @memberof WalletFundingSourcesApi
   */
  async getAccounts(): Promise<GetAccountsResponse["accounts"]> {
    const { accounts } = await this.http.get<GetAccountsResponse>(
      url`funding-sources/v2/persons/${this.walletId}/accounts`
    );

    return accounts;
  }

  /**
   * ## Создание баланса
   *
   * Запрос создает новый счет и баланс в вашем QIWI Кошельке.
   * Список доступных для создания счетов можно получить {@link WalletFundingSourcesApi.getAccountOffers}.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {string} alias Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer))
   * @return {Promise<void>} Promise<void>
   * @memberof WalletFundingSourcesApi
   */
  async createAccount(alias: string): Promise<void> {
    // Деструктивный метод
    /* istanbul ignore next */
    await this.http.post(url`funding-sources/v2/persons/${this.walletId}/accounts`, {
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
   * @return {Promise<GetAccountOffersResponse>} Promise<GetAccountOffersResponse>
   * @memberof WalletFundingSourcesApi
   */
  async getAccountOffers(): Promise<GetAccountOffersResponse> {
    return await this.http.get(
      url`funding-sources/v2/persons/${this.walletId}/accounts/offer`
    );
  }

  /**
   * ## Установка баланса по умолчанию
   *
   * Запрос устанавливает для вашего QIWI Кошелька счет, баланс
   * которого будет использоваться для фондирования всех платежей
   * по умолчанию. Счет должен содержаться в {@link WalletFundingSourcesApi.getAccounts}
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {string} alias Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer))
   * @return {Promise<void>} Promise<void>
   * @memberof WalletFundingSourcesApi
   */
  async setDefaultAccount(alias: string): Promise<void> {
    // Деструктивный метод
    /* istanbul ignore next */
    return await this.http.patch(
      url`funding-sources/v2/persons/${this.walletId}/accounts/${alias}`,
      { defaultAccount: true }
    );
  }
}
