import { url } from "../shared/url";
import { WalletApi } from "./api";
import {
  GetPaymentHistoryParameters as GetPaymentHistoryParameters,
  GetTransactionsHistoryResponse,
  GetPaymentHistoryTotalParameters as GetPaymentHistoryTotalParameters,
  GetPaymentHistoryTotalResponse,
  Transaction,
  StringOrNumber,
  ChequeFormat,
  TransactionTypeAny
} from "./wallet.types";

/**
 * # История платежей
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments_history)
 *
 * @export
 * @class WalletPaymentHistoryApi
 * @extends {WalletApi}
 */
export class WalletPaymentHistoryApi extends WalletApi {
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
   * @return {Promise<GetTransactionsHistoryResponse>} Promise<GetTransactionsHistoryResponse>
   * @memberof WalletPaymentHistoryApi
   */
  async getHistory(
    parameters: GetPaymentHistoryParameters
  ): Promise<GetTransactionsHistoryResponse> {
    return await this.http.get(
      url`payment-history/v2/persons/${this.walletId}/payments`(parameters)
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
   * @return {Promise<GetPaymentHistoryTotalResponse>} Promise<GetPaymentHistoryTotalResponse>
   * @memberof WalletPaymentHistoryApi
   */
  async getTotal(
    parameters: GetPaymentHistoryTotalParameters
  ): Promise<GetPaymentHistoryTotalResponse> {
    return await this.http.get(
      url`payment-history/v2/persons/${this.walletId}/payments/total`(parameters)
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
   * @return {Promise<Transaction>} Promise<Transaction>
   * @memberof WalletPaymentHistoryApi
   */
  async getTransaction(
    transactionId: StringOrNumber,
    type?: TransactionTypeAny
  ): Promise<Transaction> {
    return await this.http.get(
      url`payment-history/v2/transactions/${transactionId}`({ type })
    );
  }

  /**
   * ### Файл квитанции
   *
   * @param {StringOrNumber} transactionId  номер транзакции из {@link WalletPaymentHistoryApi.getHistory} (параметр `data[].txnId` в ответе)
   * @param {TransactionTypeAny} type тип транзакции из {@link WalletPaymentHistoryApi.getHistory} (параметр `data[].type` в ответе)
   * @param {ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   * @return {Promise<Uint8Array>} Promise<Uint8Array>
   * @memberof WalletPaymentHistoryApi
   */
  async getTransactionCheque(
    transactionId: StringOrNumber,
    type: TransactionTypeAny,
    format: ChequeFormat = ChequeFormat.JPEG
  ): Promise<Uint8Array> {
    return await this.http.request({
      url: url`payment-history/v1/transactions/${transactionId}/cheque/file`({
        type,
        format
      }),
      method: "GET",
      parseResponse: (body) => body
    });
  }

  /**
   * ### Отправка квитанции
   *
   * @param {number} transactionId  номер транзакции из {@link WalletPaymentHistoryApi.getHistory} (параметр `data[].txnId` в ответе)
   * @param {TransactionTypeAny} type тип транзакции из {@link WalletPaymentHistoryApi.getHistory} (параметр `data[].type` в ответе)
   * @param {string} email Адрес для отправки электронной квитанции
   * @return {Promise<void>} Promise<void>
   * @memberof WalletPaymentHistoryApi
   */
  async sendTransactionCheque(
    transactionId: StringOrNumber,
    type: TransactionTypeAny,
    email: string
  ): Promise<void> {
    // Деструктивный метод. Отправляет почту. Не может быть вызван
    // несколько раз подряд, что требуется для тестов
    /* istanbul ignore next */
    await this.http.post(
      url`payment-history/v2/transactions/${transactionId}/cheque/send`({ type }),
      { email }
    );
  }
}
