import { P2p } from "./p2p.mjs";
import { BillCurrency, BillPaySource, BillStatus } from "./p2p.types.mjs";
import { formatOffsetDate } from "../shared/time.mjs";
/**
 *
 * @deprecated Используйте класс `P2p` и новые сигнатуры
 * методов
 * @export
 * @class _P2pCompat
 * @extends {P2p}
 */
class _P2pCompat extends P2p {
  /**
   * Creates an instance of _P2pCompat.
   * @param {string} secretKey
   * @param {string} publicKey
   * @memberof _P2pCompat
   */
  constructor(secretKey, publicKey = "") {
    super({
      http: _P2pCompat.httpClientFactory(secretKey),
      publicKey,
      secretKey
    });
    this.secretKey = secretKey;
    this.publicKey = publicKey;
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
   * @param {BillCreationRequest} data Сформированный запрос на создание счёта
   * @param {string} [billId] Свой ID счёта. По умолчанию генерируется UUID
   * @return {Promise<BillStatusData>}
   */
  async createBill(data, billId) {
    return await this.bills.create({ ...data, billId });
  }
  /**
   *  Создаёт ссылку оплаты счёта без запроса к API
   *
   * @param {BillFormParameters} parameters GET-параметры ссылки
   *
   * @return {string} Ссылка на оплату счёта
   */
  createBillFormUrl(parameters) {
    return this.bills.createFormUrl(parameters);
  }
  /**
   * ### Проверка статуса перевода по счету
   *
   * Метод позволяет проверить статус перевода по счету. Рекомендуется
   * его использовать после получения уведомления о переводе.
   *
   * @deprecated Используйте метод {@link getBillStatus}
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   * @return {Promise<BillStatusData>} Объект счёта
   */
  async billStatus(billId) {
    return await this.getBillStatus(billId);
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
  async getBillStatus(billId) {
    return await this.bills.getStatus(billId);
  }
  /**
   * ### Отмена неоплаченного счета
   *
   * Метод позволяет отменить счет, по которому не был выполнен перевод.
   *
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   * @return {Promise<BillStatusData>} Объект счёта
   */
  async rejectBill(billId) {
    return await this.bills.reject(billId);
  }
  /**
   *
   * @param {number} days Кол-во дней жизни счёта (может быть не целым числом)
   * @return {string} Дата понятная QIWI
   *
   * @deprecated Используйте {@link formatLifetimeDays} или {@link formatLifetimeMinutes}
   */
  static formatLifetime(days = 1) {
    return formatOffsetDate(days, "day");
  }
  /**
   * Добавляет параметры
   *
   * @param {string} payUrl
   * @param {PayUrlPatchParameters=} [options]
   * @return {string} Новый URL для оплаты
   */
  static patchPayUrl(payUrl, options) {
    return P2p.BillsApi.patchPayUrl(payUrl, options);
  }
  /**
   *
   * @param {number} days Кол-во дней жизни счёта (может быть не целым числом)
   * @return {string} Дата понятная QIWI
   */
  static formatLifetimeDays(days = 1) {
    return formatOffsetDate(days, "day");
  }
  /**
   *
   * @param {number} [minutes] Кол-во минут жизни счёта (может быть не целым числом)
   * @return {string} Дата понятная QIWI
   */
  static formatLifetimeMinutes(minutes = 15) {
    return formatOffsetDate(minutes, "minute");
  }
  /**
   * Проверяет подпись уведомления о статусе счёта
   *
   * @param {string} signature Подпись
   * @param {BillStatusData} body Объект уведомления
   * @return {boolean} Признак валидности
   */
  checkNotificationSignature(signature, body) {
    return this.bills.checkNotificationSignature(signature, body);
  }
}
_P2pCompat.Currency = BillCurrency;
_P2pCompat.PaySource = BillPaySource;
_P2pCompat.Status = BillStatus;
export { _P2pCompat };