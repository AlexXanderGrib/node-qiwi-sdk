import type { RequestHandler } from "express";
import { ApiClass } from "../api";
import { environment } from "../shared/environment";
import { SimpleJsonHttp } from "../shared/http";
import { url } from "../shared/url";
import { USER_AGENT } from "../shared/identity";
import { P2pBillsApi } from "./bills.api";
import { mapHttpErrors } from "./p2p.errors";
import {
  BillRequestHandler,
  MiddlewareOptions,
  createP2pNotificationMiddleware
} from "./p2p.middleware";
import type { P2pApiOptions } from "./p2p.options";
import { BillCurrency, BillPaySource, BillStatus } from "./p2p.types";

/**
 * # P2P-счета
 * [Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)
 *
 * @export
 * @class P2p
 */
export class P2p extends ApiClass<P2pApiOptions> {
  static readonly BillsApi = P2pBillsApi;

  static readonly BillCurrency = BillCurrency;
  static readonly BillPaySource = BillPaySource;
  static readonly BillStatus = BillStatus;

  static readonly Currency = BillCurrency;
  static readonly PaySource = BillPaySource;
  static readonly Status = BillStatus;

  /**
   *
   *
   * @static
   * @param {string} secretKey
   * @return {SimpleJsonHttp} SimpleJsonHttp
   * @memberof P2p
   */
  static httpClientFactory = (secretKey: string): SimpleJsonHttp => {
    const http = new SimpleJsonHttp();

    http.client.options = {
      ...http.client.options,
      baseURL: url`https://api.qiwi.com/partner/bill/v1/bills/`(),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": USER_AGENT,
        Authorization: `Bearer ${secretKey}`
      },
      okStatusCodes: [200],
      timeout: 10_000,
      mapHttpErrors
    };

    return http;
  };

  /**
   *
   *
   * @static
   * @param {string} secretKey
   * @param {string} [publicKey=""]
   * @return {P2p} P2p
   * @memberof P2p
   */
  static create(secretKey: string, publicKey = ""): P2p {
    return new this({
      http: this.httpClientFactory(secretKey),
      publicKey,
      secretKey
    });
  }

  /**
   *
   *
   * @static
   * @param {string} [secretKey=process.env.QIWI_SECRET_KEY]
   * @param {string} [publicKey=process.env.QIWI_PUBLIC_KEY]
   * @return {P2p} P2p
   * @memberof P2p
   */
  static env(
    secretKey = environment.QIWI_SECRET_KEY,
    publicKey = environment.QIWI_PUBLIC_KEY
  ): P2p {
    return this.create(secretKey, publicKey);
  }

  /**
   * Creates an instance of P2p.
   * @param {P2pApiOptions} [options]
   * @memberof P2p
   */
  constructor({
    publicKey = "",
    secretKey = "",
    http = P2p.httpClientFactory(secretKey)
  }: Partial<P2pApiOptions> = {}) {
    super({ publicKey, secretKey, http });
  }

  readonly bills = new P2p.BillsApi(this._options);

  /**
   * `[Экспериментально]` Упрощает интеграцию с `express`
   *
   * ## Это middleware кидает ошибки, позаботьтесь об их обработке
   *
   * @param {Object} [options] Параметры обработки запроса
   * @param {boolean} [options.memo=true] Флаг для включения/отключения пропуска повторяющихся запросов, если один из них был успешно обработан
   *
   * @param {RequestHandler<Record<string, string>, any, BillStatusNotificationBody>} handler
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
   *  req.body // Это `BillStatusNotificationBody`
   * })
   * ```
   *
   * *`Вариант 2 - Если нужны подсказки типов`*
   *
   * ```js
   * app.post('/webhook/qiwi', p2p.notificationMiddleware({}, (req, res) => {
   *  req.body // Это `BillStatusNotificationBody`
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
  notificationMiddleware(
    /* istanbul ignore next */
    options: MiddlewareOptions = {},

    // Стандартный middleware. Не нуждается в тестировании
    /* istanbul ignore next */
    handler?: BillRequestHandler
  ): RequestHandler {
    return createP2pNotificationMiddleware(this.bills, options, handler);
  }
}
