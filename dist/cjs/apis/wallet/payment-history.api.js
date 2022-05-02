'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var querystring = require('../shared/querystring.js');
require('../shared/time.js');
require('uuid');
require('crypto');
var api = require('./api.js');
var wallet_types = require('./wallet.types.js');

/**
 * # История платежей
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments_history)
 *
 * @export
 * @class WalletPaymentHistoryApi
 * @extends {WalletApi}
 */
class WalletPaymentHistoryApi extends api.WalletApi {
    /**
     * ## Список платежей
     *
     * Запрос выгружает список платежей и пополнений вашего кошелька.
     * Можно использовать фильтр по количеству, ID и дате
     * (интервалу дат) транзакций.
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {GetPaymentHistoryParams} parameters Тело запроса
     * @return {Promise<GetTransactionsHistoryResponse>} {Promise<GetTransactionsHistoryResponse>}
     * @memberof WalletPaymentHistoryApi
     */
    async getHistory(parameters) {
        return await this.http.get(`payment-history/v2/persons/${this.walletId}/payments?${querystring.formatQuerystring(parameters)}`);
    }
    /**
     * ## Статистика платежей
     *
     * Данный запрос используется для получения сводной статистики
     * по суммам платежей за заданный период.
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {GetPaymentHistoryTotalParams} parameters Тело запроса
     * @return {Promise<GetPaymentHistoryTotalResponse>} {Promise<GetPaymentHistoryTotalResponse>}
     * @memberof WalletPaymentHistoryApi
     */
    async getTotal(parameters) {
        return await this.http.get(`payment-history/v2/persons/${this.walletId}/payments/total?${querystring.formatQuerystring(parameters)}`);
    }
    /**
     * ## Информация о транзакции
     *
     * Запрос используется для получения информации по определенной
     * транзакции из вашей истории платежей.
     *
     * @param {StringOrNumber} transactionId Номер транзакции
     * @param {TransactionTypeAny} [type] Тип транзакции
     * @return {Promise<Transaction>} {Promise<Transaction>}
     * @memberof WalletPaymentHistoryApi
     */
    async getTransaction(transactionId, type) {
        return await this.http.get(`payment-history/v2/transactions/${transactionId}?${querystring.formatQuerystring({
            type
        })}`);
    }
    /**
     * ### Файл квитанции
     *
     * @param {StringOrNumber} transactionId  номер транзакции из {@link getHistory} (параметр `data[].txnId` в ответе)
     * @param {TransactionTypeAny} type тип транзакции из {@link getHistory} (параметр `data[].type` в ответе)
     * @param {ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
     * @return {Promise<Buffer>} {Promise<Buffer>}
     * @memberof WalletPaymentHistoryApi
     */
    async getTransactionCheque(transactionId, type, format = wallet_types.ChequeFormat.JPEG) {
        return await this.http.request({
            url: `payment-history/v1/transactions/${transactionId}/cheque/file?${querystring.formatQuerystring({
                type,
                format
            })}`,
            method: "GET",
            parseResponse: (body) => body
        });
    }
    /**
     * ### Отправка квитанции
     *
     * @param {number} transactionId  номер транзакции из {@link getHistory} (параметр `data[].txnId` в ответе)
     * @param {TransactionTypeAny} type тип транзакции из {@link getHistory} (параметр `data[].type` в ответе)
     * @param {string} email Адрес для отправки электронной квитанции
     * @return {Promise<void>} {Promise<void>}
     * @memberof WalletPaymentHistoryApi
     */
    async sendTransactionCheque(transactionId, type, email) {
        // Деструктивный метод. Отправляет почту. Не может быть вызван
        // несколько раз подряд, что требуется для тестов
        /* istanbul ignore next */
        await this.http.post(`payment-history/v2/transactions/${transactionId}/cheque/send?${querystring.formatQuerystring({
            type
        })}`, { email });
    }
}

exports.WalletPaymentHistoryApi = WalletPaymentHistoryApi;
