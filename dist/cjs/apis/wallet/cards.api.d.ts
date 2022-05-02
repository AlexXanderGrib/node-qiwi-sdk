import { WalletApi } from "./api";
import { CardResponse, StringOrNumber, CardUnblockResponse, CardRequisitesResponse, CardRenameResponse } from "./wallet.types";
/**
 * # API QIWI Мастер
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#default_balance)
 *
 * @export
 * @class WalletCardsApi
 * @extends {WalletApi}
 */
export declare class WalletCardsApi extends WalletApi {
    /**
     * ## Список карт
     *
     * Успешный ответ содержит JSON-массив с информацией о
     * выпущенных картах
     *
     * @return {Promise<CardResponse[]>} {Promise<CardResponse[]>}
     * @memberof WalletCardsApi
     */
    get(): Promise<CardResponse[]>;
    /**
     * ## Блокировка карты
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {StringOrNumber} cardId
     * @return {Promise<void>} {Promise<void>}
     * @memberof WalletCardsApi
     */
    block(cardId: StringOrNumber): Promise<void>;
    /**
     * ## Разблокировка карты
     *
     * Успешный ответ содержит JSON со статусом операции
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {StringOrNumber} cardId
     * @return {Promise<CardUnblockResponse>} {Promise<CardUnblockResponse>}
     * @memberof WalletCardsApi
     */
    unblock(cardId: StringOrNumber): Promise<CardUnblockResponse>;
    /**
     * ## Получение реквизитов карты
     *
     * Успешный ответ содержит JSON с PAN и CVV карты
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {StringOrNumber} cardId
     * @return {Promise<CardRequisitesResponse>} {Promise<CardRequisitesResponse>}
     * @memberof WalletCardsApi
     */
    getRequisites(cardId: StringOrNumber): Promise<CardRequisitesResponse>;
    /**
     * ## Переименование карты
     *
     * Успешный ответ содержит JSON со статусом операции
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {StringOrNumber} cardId
     * @param {StringOrNumber} alias
     * @return {Promise<CardRenameResponse>} {Promise<CardRenameResponse>}
     * @memberof WalletCardsApi
     */
    rename(cardId: StringOrNumber, alias: string): Promise<CardRenameResponse>;
}
