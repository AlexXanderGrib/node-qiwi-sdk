'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('query-string');
require('../shared/time.js');
var uuid = require('../shared/uuid.js');
var api = require('./api.js');

/* istanbul ignore file */
/**
 * # API QIWI Мастер
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#default_balance)
 *
 * @export
 * @class WalletCardsApi
 * @extends {WalletApi}
 */
class WalletCardsApi extends api.WalletApi {
    /**
     * ## Список карт
     *
     * Успешный ответ содержит JSON-массив с информацией о
     * выпущенных картах
     *
     * @return {Promise<CardResponse[]>} {Promise<CardResponse[]>}
     * @memberof WalletCardsApi
     */
    async get() {
        return await this.http.get("cards/v1/cards");
    }
    /**
     * ## Блокировка карты
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {StringOrNumber} cardId
     * @return {Promise<void>} {Promise<void>}
     * @memberof WalletCardsApi
     */
    async block(cardId) {
        await this.http.put(`cards/v2/persons/${this.walletId}/cards/${cardId}/block`);
    }
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
    async unblock(cardId) {
        return await this.http.put(`cards/v2/persons/${this.walletId}/cards/${cardId}/unblock`);
    }
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
    async getRequisites(cardId) {
        return await this.http.put(`cards/v1/cards/${cardId}/details`, {
            operationId: uuid.generateUUID()
        });
    }
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
    async rename(cardId, alias) {
        return await this.http.put(`cards/v1/cards/${cardId}/alias`, { alias });
    }
}

exports.WalletCardsApi = WalletCardsApi;
