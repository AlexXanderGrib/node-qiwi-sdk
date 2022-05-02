import { P2pApi } from "./api.mjs";
import { formatOffsetDate } from "../shared/time.mjs";
import { generateUUID } from "../shared/uuid.mjs";
import { compareHmac } from "../shared/hmac.mjs";
import { formatQuerystring } from "../shared/querystring.mjs";
/**
 * # P2P-счета
 * [Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/#p2p-)
 *
 * @export
 * @class P2pBillsApi
 * @extends {P2pApi}
 */
class P2pBillsApi extends P2pApi {
  constructor() {
    super(...arguments);
    this.generateId = () => generateUUID();
  }
  /**
   * Добавляет параметры
   *
   * @param {string} payUrl
   * @param {PayUrlPatchParameters=} [options]
   * @return {string} Новый URL для оплаты
   */
  static patchPayUrl(payUrl, options = {}) {
    const url = new URL(payUrl);
    if (options.paySource) url.searchParams.set("paySource", options.paySource);
    if (options.successUrl) url.searchParams.set("successUrl", options.successUrl);
    return url.toString();
  }
  /**
   * Нормализует сумму до строки с 2 числами после запятой
   *
   * @param {string|number} amount Сумма
   * @return {string}
   */
  _normalizeAmount(amount) {
    if (typeof amount === "number") return amount.toFixed(2);
    return this._normalizeAmount(Number.parseFloat(amount));
  }
  /**
   * ### Выставление счета
   *
   * **По оплаченным счетам возврат денежных средств не предусмотрен.**
   *
   * Доступно выставление счетов в рублях и тенге.
   * Надежный способ для интеграции. Параметры передаются
   * server2server с использованием авторизации. Метод позволяет
   * выставить счет: при успешном выполнении запроса в ответе
   * вернется параметр `payUrl` - ссылка для редиректа
   * пользователя на форму.
   *
   * {@link https://developer.qiwi.com/ru/p2p-payments/#option|Настройки формы и счета}
   *
   * **Для тестирования и отладки сервиса рекомендуем выставлять и оплачивать счета суммой 1 рубль.**
   *
   * @param {BillCreateParameters} data
   * @return {Promise<BillStatusData>}  {Promise<BillStatusData>}
   * @memberof P2pBillsApi
   */
  async create(data) {
    const {
      paySource,
      successUrl,
      billId = this.generateId(),
      expirationDateTime = formatOffsetDate(15, "min"),
      ...bill
    } = data;
    const patchedBill = {
      ...bill,
      expirationDateTime,
      amount: {
        currency: bill.amount.currency,
        value: this._normalizeAmount(bill.amount.value)
      }
    };
    const result = await this.http.put(billId, patchedBill);
    result.payUrl = P2pBillsApi.patchPayUrl(result.payUrl, {
      paySource,
      successUrl
    });
    return result;
  }
  /**
   * ### Проверка статуса перевода по счету
   *
   * Метод позволяет проверить статус перевода по счету. Рекомендуется
   * его использовать после получения уведомления о переводе.
   *
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   * @return {Promise<BillStatusData>} Объект счёта
   */
  async getStatus(billId) {
    return await this.http.get(billId);
  }
  /**
   * ### Отмена неоплаченного счета
   *
   * Метод позволяет отменить счет, по которому не был выполнен перевод.
   *
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   * @return {Promise<BillStatusData>} Объект счёта
   */
  async reject(billId) {
    return await this.http.post(`${billId}/reject`);
  }
  /**
   *
   *
   * @param {string} signature
   * @param {(BillStatusData | BillStatusBody)} body
   * @param {*} [merchantSecret=this.secretKey]
   * @return {*}  {boolean}
   * @memberof P2pBillsApi
   */
  checkNotificationSignature(signature, body, merchantSecret = this.secretKey) {
    if ("bill" in body) body = body.bill;
    const data = [
      body.amount.currency,
      body.amount.value,
      body.billId,
      body.siteId,
      body.status.value
    ].join("|");
    return compareHmac({
      key: merchantSecret,
      data,
      digest: signature
    });
  }
  /**
   *  Создаёт ссылку оплаты счёта без запроса к API
   *
   * @param {BillFormParams} parameters GET-параметры ссылки
   *
   * @return {string} Ссылка на оплату счёта
   */
  createFormUrl(parameters) {
    var _a, _b;
    const options = {
      ...parameters,
      amount: this._normalizeAmount(parameters.amount),
      publicKey: this.publicKey,
      ...Object.fromEntries(
        Object.entries(
          (_a = parameters.customFields) !== null && _a !== void 0 ? _a : {}
        ).map(([key, value]) => [`customFields[${key}]`, value])
      )
    };
    (_b = options.billId) !== null && _b !== void 0
      ? _b
      : (options.billId = generateUUID());
    delete options.customFields;
    return `https://oplata.qiwi.com/create?${formatQuerystring(options)}`;
  }
  /**
   *
   * @deprecated API заархивировано
   * @param {string} billId
   * @param {RefundCreationRequest} options
   * @return {Promise<BillRefundStatusData>}  {Promise<BillRefundStatusData>}
   * @memberof P2pBillsApi
   */
  async refund(billId, options) {
    const { refundId = this.generateId(), amount } = options;
    amount.value = this._normalizeAmount(amount.value);
    return await this.http.put(`${billId}/refunds/${refundId}`);
  }
  /**
   *
   * @deprecated API заархивировано
   * @param {string} billId
   * @param {string} refundId
   * @return {Promise<BillRefundStatusData>}  {Promise<BillRefundStatusData>}
   * @memberof P2pBillsApi
   */
  async getRefundStatus(billId, refundId) {
    return await this.http.get(`${billId}/refunds/${refundId}`);
  }
}
export { P2pBillsApi };