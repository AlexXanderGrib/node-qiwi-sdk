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
export declare class WalletFundingSourcesApi extends WalletApi {
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
    getAccounts(): Promise<GetAccountsResponse["accounts"]>;
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
    createAccount(alias: string): Promise<void>;
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
    getAccountOffers(): Promise<GetAccountOffersResponse>;
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
    setDefaultAccount(alias: string): Promise<void>;
}
