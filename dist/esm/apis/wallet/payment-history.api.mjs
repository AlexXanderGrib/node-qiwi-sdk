import { WalletApi } from "./api.mjs";
import { ChequeFormat } from "./wallet.types.mjs";
import { formatQuerystring } from "../shared/querystring.mjs";
/**
 * # История платежей
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments_history)
 *
 * @export
 * @class WalletPaymentHistoryApi
 * @extends {WalletApi}
 */
class WalletPaymentHistoryApi extends WalletApi {
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
    return await this.http.get(
      `payment-history/v2/persons/${this.walletId}/payments?${formatQuerystring(
        parameters
      )}`
    );
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
    return await this.http.get(
      `payment-history/v2/persons/${
        this.walletId
      }/payments/total?${formatQuerystring(parameters)}`
    );
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
    return await this.http.get(
      `payment-history/v2/transactions/${transactionId}?${formatQuerystring({
        type
      })}`
    );
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
  async getTransactionCheque(transactionId, type, format = ChequeFormat.JPEG) {
    return await this.http.request({
      url: `payment-history/v1/transactions/${transactionId}/cheque/file?${formatQuerystring(
        {
          type,
          format
        }
      )}`,
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
    await this.http.post(
      `payment-history/v2/transactions/${transactionId}/cheque/send?${formatQuerystring(
        {
          type
        }
      )}`,
      { email }
    );
  }
}
export { WalletPaymentHistoryApi };
