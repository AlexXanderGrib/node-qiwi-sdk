"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("../../http.js"),
  identity = require("../../identity.js"),
  api = require("../api.js"),
  bills_api = require("./bills.api.js"),
  p2p_errors = require("./p2p.errors.js"),
  p2p_types = require("./p2p.types.js"),
  p2p_utils = require("./p2p.utils.js"),
  environment = require("../shared/environment.js");
/**
 * # P2P-счета
 * [Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)
 *
 * @export
 * @class P2p
 */
class P2p extends api.ApiClass {
  /**
   * Creates an instance of P2p.
   * @param {P2pApiOptions} [options]
   * @memberof P2p
   */
  constructor({
    publicKey = "",
    secretKey = "",
    http = P2p.httpClientFactory(secretKey)
  } = {}) {
    super({ publicKey, secretKey, http });
    this.bills = new P2p.BillsApi(this._options);
  }
  /**
   *
   *
   * @static
   * @param {string} secretKey
   * @param {string} [publicKey=""]
   * @return {P2p}  {P2p}
   * @memberof P2p
   */
  static create(secretKey, publicKey = "") {
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
   * @return {P2p}  {P2p}
   * @memberof P2p
   */
  static env(
    secretKey = environment.environment.QIWI_SECRET_KEY,
    publicKey = environment.environment.QIWI_PUBLIC_KEY
  ) {
    return this.create(secretKey, publicKey);
  }
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
  notificationMiddleware(
    options = {},
    actualHandler = (_request, _response, next) => next()
  ) {
    const calls = new Set();
    const { memo = true } = options;
    return async (request, response, next) => {
      let notification = {};
      if (!request.body) {
        const text = await new Promise((resolve, reject) => {
          let accumulated = "";
          request.on("error", (error) => reject(error));
          request.on("data", (data) => (accumulated += String(data)));
          request.on("end", () => resolve(accumulated));
        });
        notification = JSON.parse(text);
      }
      if (typeof request.body === "object") {
        notification = request.body;
      }
      const hash = request.headers["x-api-signature-sha256"];
      if (memo && calls.has(hash)) return next();
      if (!this.bills.checkNotificationSignature(hash, notification.bill)) {
        return next(new p2p_errors.P2pBillNotificationError());
      }
      request.body = notification.bill;
      if (!memo) return actualHandler(request, response, next);
      await p2p_utils.promise(actualHandler)(request, response, next);
      calls.add(hash);
    };
  }
}
P2p.BillsApi = bills_api.P2pBillsApi;
P2p.BillCurrency = p2p_types.BillCurrency;
P2p.BillPaySource = p2p_types.BillPaySource;
P2p.BillStatus = p2p_types.BillStatus;
/**
 *
 *
 * @static
 * @param {string} secretKey
 * @return {SimpleJsonHttp} {SimpleJsonHttp}
 * @memberof P2p
 */
P2p.httpClientFactory = (secretKey) => {
  const http$1 = new http.SimpleJsonHttp();
  http$1.client.options = {
    ...http$1.client.options,
    baseURL: "https://api.qiwi.com/partner/bill/v1/bills/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": identity.USER_AGENT,
      Authorization: `Bearer ${secretKey}`
    },
    okStatusCodes: [200],
    timeout: 10000,
    mapHttpErrors: p2p_errors.mapHttpErrors
  };
  return http$1;
};
exports.P2p = P2p;
