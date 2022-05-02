import { RequestHandler } from "express";
import { SimpleJsonHttp } from "../../http";
import { ApiClass } from "../api";
import { P2pBillsApi } from "./bills.api";
import { P2pApiOptions } from "./p2p.options";
import { BillStatusData, BillCurrency, BillPaySource, BillStatus } from "./p2p.types";
/**
 * # P2P-счета
 * [Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)
 *
 * @export
 * @class P2p
 */
export declare class P2p extends ApiClass<P2pApiOptions> {
    static readonly BillsApi: typeof P2pBillsApi;
    static readonly BillCurrency: typeof BillCurrency;
    static readonly BillPaySource: typeof BillPaySource;
    static readonly BillStatus: typeof BillStatus;
    /**
     *
     *
     * @static
     * @param {string} secretKey
     * @return {SimpleJsonHttp} {SimpleJsonHttp}
     * @memberof P2p
     */
    static httpClientFactory: (secretKey: string) => SimpleJsonHttp;
    /**
     *
     *
     * @static
     * @param {string} secretKey
     * @param {string} [publicKey=""]
     * @return {P2p}  {P2p}
     * @memberof P2p
     */
    static create(secretKey: string, publicKey?: string): P2p;
    /**
     * Creates an instance of P2p.
     * @param {P2pApiOptions} [options]
     * @memberof P2p
     */
    constructor({ publicKey, secretKey, http }?: Partial<P2pApiOptions>);
    readonly bills: P2pBillsApi;
    /**
     * `[Экспериментально]` Упрощает интеграцию с `express`
     *
     * ## Это middleware кидает ошибки, позаботьтесь об их обработке
     *
     * @param {Object} [options={}] Параметры обработки запроса
     * @param {boolean} [options.memo=true] Флаг для включения/отключения пропуска повторяющихся запросов, если один из них был успешно обработан
     *
     * @param {RequestHandler<Record<string, string>, any, types.BillStatusData>} actualHandler
     *
     * @return {RequestHandler}
     *
     * ##### Пример:
     * **В начале файла**
     * ```js
     * const p2p = new QIWI.P2P(process.env.QIWI_PRIVATE_KEY);
     * ```
     * *`Вариант 1 - Классический`*
     *
     * ```js
     * app.post('/webhook/qiwi', p2p.notificationMiddleware(), (req, res) => {
     *  req.body // Это `BillStatusData`
     * })
     * ```
     *
     * *`Вариант 2 - Если нужны подсказки типов`*
     *
     * ```js
     * app.post('/webhook/qiwi', p2p.notificationMiddleware({}, (req, res) => {
     *  req.body // Это `BillStatusData`
     * }))
     * ```
     *
     * **Обработка ошибок**
     * ```js
     * app.use((error, request, response, next) => {
     *  console.log(error); // [Error: Notification signature mismatch]
     * })
     * ```
     */
    notificationMiddleware(options?: {
        memo?: boolean;
    }, actualHandler?: RequestHandler<Record<string, string>, any, BillStatusData>): RequestHandler;
}
