'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('query-string');
var time = require('../shared/time.js');
require('uuid');
require('crypto');
var p2p = require('./p2p.js');
var p2p_types = require('./p2p.types.js');

/* istanbul ignore file */
/**
 *
 * @deprecated Используйте класс `P2p` и новые сигнатуры
 * методов
 * @export
 * @class _P2pCompat
 * @extends {P2p}
 */
class _P2pCompat extends p2p.P2p {
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
        return time.formatOffsetDate(days, "day");
    }
    /**
     * Добавляет параметры
     *
     * @param {string} payUrl
     * @param {PayUrlPatchParameters=} [options]
     * @return {string} Новый URL для оплаты
     */
    static patchPayUrl(payUrl, options) {
        return p2p.P2p.BillsApi.patchPayUrl(payUrl, options);
    }
    /**
     *
     * @param {number} days Кол-во дней жизни счёта (может быть не целым числом)
     * @return {string} Дата понятная QIWI
     */
    static formatLifetimeDays(days = 1) {
        return time.formatOffsetDate(days, "day");
    }
    /**
     *
     * @param {number} [minutes] Кол-во минут жизни счёта (может быть не целым числом)
     * @return {string} Дата понятная QIWI
     */
    static formatLifetimeMinutes(minutes = 15) {
        return time.formatOffsetDate(minutes, "minute");
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
_P2pCompat.Currency = p2p_types.BillCurrency;
_P2pCompat.PaySource = p2p_types.BillPaySource;
_P2pCompat.Status = p2p_types.BillStatus;

exports._P2pCompat = _P2pCompat;
