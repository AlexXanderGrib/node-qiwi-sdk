import { WalletApi } from "./api";
import { Recipients, FormUrlOptions, Currency, PayParameters, PaymentResponse, QuickPayParameters } from "./wallet.types";
/**
 * # Платежное API
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
 *
 * @export
 * @class WalletPaymentsApi
 * @extends {WalletApi}
 */
export declare class WalletPaymentsApi extends WalletApi {
    /**
     * ## Комиссионные тарифы
     *
     * Чтобы узнать комиссию за платеж до его совершения по заданному
     * набору платежных реквизитов, используйте этот запрос.
     * Возвращается полная комиссия QIWI Кошелька за платеж в пользу
     * указанного провайдера с учетом всех тарифов.
     *
     * @param {(number | Recipients)} provider Идентификатор провайдера
     * @param {string} account Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера)
     * @param {number} amount Сумма
     * @return {Promise<number>}
     * @memberof WalletPaymentsApi
     */
    getCommission(provider: number | Recipients, account: string, amount: number, { accountCurrency, paymentCurrency }?: {
        accountCurrency?: Currency | undefined;
        paymentCurrency?: Currency | undefined;
    }): Promise<number>;
    /**
     * Данный метод создаёт ссылку на предзаполненную форму оплаты
     *
     * @static
     * @param {(number | Recipients)} provider Идентификатор провайдера
     * @param {FormUrlOptions} [options={}] Параметры формы
     * @return {string} {string} Ссылка
     * @memberof WalletPaymentsApi
     */
    static createFormUrl(provider: number | Recipients, options?: FormUrlOptions): string;
    /**
     * Данный метод создаёт ссылку на предзаполненную форму оплаты
     *
     * @param {(number | Recipients)} provider Идентификатор провайдера
     * @param {FormUrlOptions} [options={}] Параметры формы
     * @return {string} {string} Ссылка
     * @memberof WalletPaymentsApi
     */
    createFormUrl(provider: number | Recipients, options?: FormUrlOptions): string;
    /**
     *
     *
     * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
     *
     * @param {PayParameters} params Параметры платежа
     * @return {Promise<PaymentResponse>} {Promise<PaymentResponse>}
     * @memberof WalletPaymentsApi
     */
    pay({ account, amount, provider, comment, currency, fields, accountCurrency }: PayParameters): Promise<PaymentResponse>;
    /**
     * Метод для отправки платежа с возможностью автоматического вычета
     * комиссии и распознавания `provider`'а
     *
     * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
     *
     * @param {QuickPayParameters} parameters
     * @throws {DetectorError} Под капотом создаётся и вызывается `Detector`. Он может выкинуть эту ошибку
     * @return {Promise<PaymentResponse>}  {Promise<PaymentResponse>}
     * @memberof WalletPaymentsApi
     */
    quickPay({ account, amount, commissionPayer, provider, comment, currency, fields, accountCurrency }: QuickPayParameters): Promise<PaymentResponse>;
    /**
     *
     *
     * @protected
     * @param {string|number} provider
     * @param {string} account
     * @return {Promise<number>} {Promise<number>}
     * @throws {DetectorError}
     * @memberof WalletPaymentsApi
     */
    protected _resolveProvider(provider: QuickPayParameters["provider"], account: string): Promise<number>;
}
