import { SimpleJsonHttp } from "../../http.mjs";
import { USER_AGENT } from "../../identity.mjs";
import { ApiClass } from "../api.mjs";
import { P2pBillsApi } from "./bills.api.mjs";
import { P2pBillNotificationError, mapHttpErrors } from "./p2p.errors.mjs";
import { BillCurrency, BillPaySource, BillStatus } from "./p2p.types.mjs";
import { promise } from "./p2p.utils.mjs";
/**
 * # P2P-счета
 * [Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/)
 *
 * @export
 * @class P2p
 */
class P2p extends ApiClass {
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
        return next(new P2pBillNotificationError());
      }
      request.body = notification.bill;
      if (!memo) return actualHandler(request, response, next);
      await promise(actualHandler)(request, response, next);
      calls.add(hash);
    };
  }
}
P2p.BillsApi = P2pBillsApi;
P2p.BillCurrency = BillCurrency;
P2p.BillPaySource = BillPaySource;
P2p.BillStatus = BillStatus;
/**
 *
 *
 * @static
 * @param {string} secretKey
 * @return {SimpleJsonHttp} {SimpleJsonHttp}
 * @memberof P2p
 */
P2p.httpClientFactory = (secretKey) => {
  const http = new SimpleJsonHttp();
  http.client.options = {
    ...http.client.options,
    baseURL: "https://api.qiwi.com/partner/bill/v1/bills/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT,
      Authorization: `Bearer ${secretKey}`
    },
    okStatusCodes: [200],
    timeout: 10000,
    mapHttpErrors
  };
  return http;
};
export { P2p };
