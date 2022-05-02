import { formatQuerystring } from '../shared/querystring.mjs';
import '../shared/time.mjs';
import 'uuid';
import 'crypto';
import { WalletApi } from './api.mjs';

/* istanbul ignore file */
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
class WalletBillsApi extends WalletApi {
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
    async createP2PKeyPair(name, server) {
        var _a, _b, _c, _d;
        const response = await this.http.post("widgets-api/api/p2p/protected/keys/create", {
            keysPairName: name,
            ...(server && { serverNotificationsUrl: server })
        });
        const publicKey = (_b = (_a = response.result) === null || _a === void 0 ? void 0 : _a.publicKey) !== null && _b !== void 0 ? _b : response.PublicKey;
        const secretKey = (_d = (_c = response.result) === null || _c === void 0 ? void 0 : _c.secretKey) !== null && _d !== void 0 ? _d : response.SecretKey;
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
     * @param {BillsGetParameters} [parameters={}]
     * @return {Promise<Bill[]>}  {Promise<Bill[]>}
     * @memberof WalletBillsApi
     */
    async get(parameters = {}) {
        const { bills } = await this.http.get(`checkout-api/api/bill/search?${formatQuerystring(parameters)}`);
        return bills;
    }
    /**
     *
     *
     * @param {(number|Bill)} bill
     * @param {Currency=} [currency]
     * @return {Promise<BillPayResponse>}  {Promise<BillPayResponse>}
     * @memberof WalletBillsApi
     */
    async pay(bill, currency) {
        if (typeof bill === "object") {
            currency = bill.sum.currency;
            bill = bill.id;
        }
        return await this.http.post("checkout-api/invoice/pay/wallet", {
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
     * @return {Promise<void>}  {Promise<void>}
     * @memberof WalletBillsApi
     */
    async reject(id) {
        await this.http.post("checkout-api/api/bill/reject", { id });
    }
}

export { WalletBillsApi };
