import { WalletApi } from "./api";
import { GetAccountsResponse, GetAccountOffersResponse } from "./wallet.types";

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
   * @return {Promise<GetAccountsResponse>} {Promise<GetAccountsResponse["accounts"]>}
   * @memberof WalletFundingSourcesApi
   */
  async getAccounts(): Promise<GetAccountsResponse["accounts"]> {
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
   * @param {string} alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @return {Promise<void>} {Promise<void>}
   * @memberof WalletFundingSourcesApi
   */
  async createAccount(alias: string): Promise<void> {
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
   * @return {Promise<GetAccountOffersResponse>} {Promise<GetAccountOffersResponse>}
   * @memberof WalletFundingSourcesApi
   */
  async getAccountOffers(): Promise<GetAccountOffersResponse> {
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
   * @param {string} alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @return {Promise<void>} {Promise<void>}
   * @memberof WalletFundingSourcesApi
   */
  async setDefaultAccount(alias: string): Promise<void> {
    return await this.http.patch(
      `funding-sources/v2/persons/${this.walletId}/accounts/${alias}`,
      { defaultAccount: true }
    );
  }
}
