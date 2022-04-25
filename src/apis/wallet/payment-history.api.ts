import { formatQuerystring } from "../shared";
import { WalletApi } from "./api";
import {
  GetPaymentHistoryParams as GetPaymentHistoryParameters,
  GetTransactionsHistoryResponse,
  GetPaymentHistoryTotalParams as GetPaymentHistoryTotalParameters,
  GetPaymentHistoryTotalResponse,
  TransactionType,
  Transaction,
  StringOrNumber,
  ChequeFormat
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
   * @return {Promise<GetTransactionsHistoryResponse>} {Promise<GetTransactionsHistoryResponse>}
   * @memberof WalletPaymentHistoryApi
   */
  async getHistory(
    parameters: GetPaymentHistoryParameters
  ): Promise<GetTransactionsHistoryResponse> {
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
  async getTotal(
    parameters: GetPaymentHistoryTotalParameters
  ): Promise<GetPaymentHistoryTotalResponse> {
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
   * @param {number} transactionId Номер транзакции
   * @param {TransactionType} [type] Тип транзакции
   * @return {Promise<Transaction>} {Promise<Transaction>}
   * @memberof WalletPaymentHistoryApi
   */
  async getTransaction(
    transactionId: number,
    type?: TransactionType
  ): Promise<Transaction> {
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
   * @param {TransactionType} type тип транзакции из {@link getHistory} (параметр `data[].type` в ответе)
   * @param {ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   * @return {Promise<Buffer>} {Promise<Buffer>}
   * @memberof WalletPaymentHistoryApi
   */
  async getTransactionCheque(
    transactionId: StringOrNumber,
    type: TransactionType,
    format: ChequeFormat = ChequeFormat.JPEG
  ): Promise<Buffer> {
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
   * @param {TransactionType} type тип транзакции из {@link getHistory} (параметр `data[].type` в ответе)
   * @param {string} email Адрес для отправки электронной квитанции
   * @return {Promise<void>} {Promise<void>}
   * @memberof WalletPaymentHistoryApi
   */
  async sendTransactionCheque(
    transactionId: StringOrNumber,
    type: TransactionType,
    email: string
  ): Promise<void> {
    // Деструктивный метод. Отправляет почту. Не может быть вызван
    // несколько раз подряд, что требуется для тестов
    /* istanbul ignore */
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
