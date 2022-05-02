import { WalletApi } from "./api";
import { Bill, BillPayResponse, BillsGetParameters, Currency, KeyPair } from "./wallet.types";
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
export declare class WalletBillsApi extends WalletApi {
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
     * @return {Promise<KeyPair>} {Promise<KeyPair>}
     * @memberof WalletBillsApi
     *
     * @example
     *
     * const { publicKey, secretKey } = await createP2PKeyPair('my-key-pair');
     */
    createP2PKeyPair(name: string, server?: string): Promise<KeyPair>;
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
     * @param {BillsGetParameters} [parameters={}]
     * @return {Promise<Bill[]>}  {Promise<Bill[]>}
     * @memberof WalletBillsApi
     */
    get(parameters?: BillsGetParameters): Promise<Bill[]>;
    pay(bill: Bill): Promise<BillPayResponse>;
    pay(id: Bill["id"], currency: Currency): Promise<BillPayResponse>;
    /**
     * ## Отмена неоплаченного счета
     *
     * Метод отклоняет неоплаченный счет. При этом счет становится
     * недоступным для оплаты.
     *
     * @param {number} id
     * @return {Promise<void>}  {Promise<void>}
     * @memberof WalletBillsApi
     */
    reject(id: Bill["id"]): Promise<void>;
}
