/// <reference types="node" />
import { WalletApi } from "./api";
import { GetPaymentHistoryParams as GetPaymentHistoryParameters, GetTransactionsHistoryResponse, GetPaymentHistoryTotalParams as GetPaymentHistoryTotalParameters, GetPaymentHistoryTotalResponse, Transaction, StringOrNumber, ChequeFormat, TransactionTypeAny } from "./wallet.types";
/**
 * # История платежей
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments_history)
 *
 * @export
 * @class WalletPaymentHistoryApi
 * @extends {WalletApi}
 */
export declare class WalletPaymentHistoryApi extends WalletApi {
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
    getHistory(parameters: GetPaymentHistoryParameters): Promise<GetTransactionsHistoryResponse>;
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
    getTotal(parameters: GetPaymentHistoryTotalParameters): Promise<GetPaymentHistoryTotalResponse>;
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
    getTransaction(transactionId: StringOrNumber, type?: TransactionTypeAny): Promise<Transaction>;
    /**
     * ### Файл квитанции
     *
     * @param {StringOrNumber} transactionId  номер транзакции из {@link getHistory} (параметр `data[].txnId` в ответе)
     * @param {TransactionTypeAny} type тип транзакции из {@link getHistory} (параметр `data[].type` в ответе)
     * @param {ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
     * @return {Promise<Buffer>} {Promise<Buffer>}
     * @memberof WalletPaymentHistoryApi
     */
    getTransactionCheque(transactionId: StringOrNumber, type: TransactionTypeAny, format?: ChequeFormat): Promise<Buffer>;
    /**
     * ### Отправка квитанции
     *
     * @param {number} transactionId  номер транзакции из {@link getHistory} (параметр `data[].txnId` в ответе)
     * @param {TransactionTypeAny} type тип транзакции из {@link getHistory} (параметр `data[].type` в ответе)
     * @param {string} email Адрес для отправки электронной квитанции
     * @return {Promise<void>} {Promise<void>}
     * @memberof WalletPaymentHistoryApi
     */
    sendTransactionCheque(transactionId: StringOrNumber, type: TransactionTypeAny, email: string): Promise<void>;
}
