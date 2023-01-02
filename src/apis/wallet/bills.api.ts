/* istanbul ignore file */
import { url } from "../shared/url";
import { WalletApi } from "./api";
import type {
  Bill,
  BillPayResponse,
  BillsGetParameters,
  Currency,
  KeyPair
} from "./wallet.types";

/**
 * # Выставление счета на QIWI кошелек
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#invoices)
 *
 * Для выставления счета на QIWI Кошелек используется протокол
 * [API P2P-счетов](https://developer.qiwi.com/ru/p2p-payments/#create).
 * Для авторизации используется [токен P2P](https://developer.qiwi.com/ru/qiwi-wallet-personal/#p2p-token).
 *
 * @export
 * @class WalletBillsApi
 * @extends {WalletApi}
 */
export class WalletBillsApi extends WalletApi {
  /**
   * ## Выпуск токена P2P
   *
   * Запрос возвращает пару токенов P2P (для выставления счета
   * при вызове платежной формы и через API, соответственно) в
   * полях ответа PublicKey и SecretKey. Для авторизации
   * используется токен API QIWI Кошелька.
   *
   * @param {string} name Название связки ключей
   * @param {string=} [server] URL сервера для отправки уведомлений
   *
   * @return {Promise<KeyPair>} Promise<KeyPair>
   * @memberof WalletBillsApi
   *
   * @example
   *
   * const { publicKey, secretKey } = await createP2PKeyPair('my-key-pair');
   */
  async createP2PKeyPair(name: string, server?: string): Promise<KeyPair> {
    const response = await this.http.post<any>(
      url`widgets-api/api/p2p/protected/keys/create`,
      {
        keysPairName: name,
        ...(server && { serverNotificationsUrl: server })
      }
    );

    const publicKey: string = response.result?.publicKey ?? response.PublicKey;
    const secretKey: string = response.result?.secretKey ?? response.SecretKey;

    return { publicKey, secretKey };
  }

  /**
   * ## Список счетов
   *
   * Метод получения списка неоплаченных счетов вашего кошелька.
   * Список строится в обратном хронологическом порядке. По
   * умолчанию, список разбивается на страницы по 50 элементов в
   * каждой, но вы можете задать другое количество элементов (не
   * более 50). В запросе можно использовать фильтры по времени
   * выставления счета, начальному идентификатору счета.
   *
   * @param {BillsGetParameters} [parameters]
   * @return {Promise<Bill[]>} Promise<Bill[]>
   * @memberof WalletBillsApi
   */
  async get(parameters: BillsGetParameters = {}): Promise<Bill[]> {
    const { bills } = await this.http.get<{ bills: Bill[] }>(
      url`checkout-api/api/bill/search`(parameters)
    );

    return bills;
  }

  pay(bill: Bill): Promise<BillPayResponse>;
  pay(id: Bill["id"], currency: Currency): Promise<BillPayResponse>;

  /**
   *
   *
   * @param {(number|Bill)} bill
   * @param {Currency=} [currency]
   * @return {Promise<BillPayResponse>} Promise<BillPayResponse>
   * @memberof WalletBillsApi
   */
  async pay(bill: Bill["id"] | Bill, currency?: Currency): Promise<BillPayResponse> {
    if (typeof bill === "object") {
      currency = bill.sum.currency;
      bill = bill.id;
    }

    return await this.http.post(url`checkout-api/invoice/pay/wallet`, {
      invoice_uid: bill.toString(),
      currency
    });
  }

  /**
   * ## Отмена неоплаченного счета
   *
   * Метод отклоняет неоплаченный счет. При этом счет становится
   * недоступным для оплаты.
   *
   * @param {number} id
   * @return {Promise<void>} Promise<void>
   * @memberof WalletBillsApi
   */
  async reject(id: Bill["id"]): Promise<void> {
    await this.http.post(url`checkout-api/api/bill/reject`, { id });
  }
}
