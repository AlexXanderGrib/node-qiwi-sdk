import { P2p } from "./p2p";
import { BillCreationRequest, BillCurrency, BillFormParameters, BillPaySource, BillStatus, BillStatusData, PayUrlPatchParameters } from "./p2p.types";
/**
 *
 * @deprecated Используйте класс `P2p` и новые сигнатуры
 * методов
 * @export
 * @class _P2pCompat
 * @extends {P2p}
 */
export declare class _P2pCompat extends P2p {
    readonly secretKey: string;
    readonly publicKey: string;
    static readonly Currency: typeof BillCurrency;
    static readonly PaySource: typeof BillPaySource;
    static readonly Status: typeof BillStatus;
    /**
     * Creates an instance of _P2pCompat.
     * @param {string} secretKey
     * @param {string} publicKey
     * @memberof _P2pCompat
     */
    constructor(secretKey: string, publicKey?: string);
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
    createBill(data: BillCreationRequest, billId?: string): Promise<BillStatusData>;
    /**
     *  Создаёт ссылку оплаты счёта без запроса к API
     *
     * @param {BillFormParameters} parameters GET-параметры ссылки
     *
     * @return {string} Ссылка на оплату счёта
     */
    createBillFormUrl(parameters: BillFormParameters): string;
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
    billStatus(billId: string): Promise<BillStatusData>;
    /**
     * ### Проверка статуса перевода по счету
     *
     * Метод позволяет проверить статус перевода по счету. Рекомендуется
     * его использовать после получения уведомления о переводе.
     *
     * @param {string} billId Уникальный идентификатор счета в вашей системе.
     * @return {Promise<BillStatusData>} Объект счёта
     */
    getBillStatus(billId: string): Promise<BillStatusData>;
    /**
     * ### Отмена неоплаченного счета
     *
     * Метод позволяет отменить счет, по которому не был выполнен перевод.
     *
     * @param {string} billId Уникальный идентификатор счета в вашей системе.
     * @return {Promise<BillStatusData>} Объект счёта
     */
    rejectBill(billId: string): Promise<BillStatusData>;
    /**
     *
     * @param {number} days Кол-во дней жизни счёта (может быть не целым числом)
     * @return {string} Дата понятная QIWI
     *
     * @deprecated Используйте {@link formatLifetimeDays} или {@link formatLifetimeMinutes}
     */
    static formatLifetime(days?: number): string;
    /**
     * Добавляет параметры
     *
     * @param {string} payUrl
     * @param {PayUrlPatchParameters=} [options]
     * @return {string} Новый URL для оплаты
     */
    static patchPayUrl(payUrl: string, options?: PayUrlPatchParameters): string;
    /**
     *
     * @param {number} days Кол-во дней жизни счёта (может быть не целым числом)
     * @return {string} Дата понятная QIWI
     */
    static formatLifetimeDays(days?: number): string;
    /**
     *
     * @param {number} [minutes] Кол-во минут жизни счёта (может быть не целым числом)
     * @return {string} Дата понятная QIWI
     */
    static formatLifetimeMinutes(minutes?: number): string;
    /**
     * Проверяет подпись уведомления о статусе счёта
     *
     * @param {string} signature Подпись
     * @param {BillStatusData} body Объект уведомления
     * @return {boolean} Признак валидности
     */
    checkNotificationSignature(signature: string, body: BillStatusData): boolean;
}
