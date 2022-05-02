import { P2pApi } from "./api";
import { BillCreateParameters, BillFormParameters as BillFormParameters, BillRefundStatusData, BillStatusBody, BillStatusData, PayUrlPatchParameters, RefundCreationRequest } from "./p2p.types";
/**
 * # P2P-счета
 * [Документация QIWI](https://developer.qiwi.com/ru/p2p-payments/#p2p-)
 *
 * @export
 * @class P2pBillsApi
 * @extends {P2pApi}
 */
export declare class P2pBillsApi extends P2pApi {
    /**
     * Добавляет параметры
     *
     * @param {string} payUrl
     * @param {PayUrlPatchParameters=} [options]
     * @return {string} Новый URL для оплаты
     */
    static patchPayUrl(payUrl: string, options?: PayUrlPatchParameters): string;
    /**
     * Нормализует сумму до строки с 2 числами после запятой
     *
     * @param {string|number} amount Сумма
     * @return {string}
     */
    protected _normalizeAmount(amount: string | number): string;
    generateId: () => string;
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
    create(data: BillCreateParameters): Promise<BillStatusData>;
    /**
     * ### Проверка статуса перевода по счету
     *
     * Метод позволяет проверить статус перевода по счету. Рекомендуется
     * его использовать после получения уведомления о переводе.
     *
     * @param {string} billId Уникальный идентификатор счета в вашей системе.
     * @return {Promise<BillStatusData>} Объект счёта
     */
    getStatus(billId: string): Promise<BillStatusData>;
    /**
     * ### Отмена неоплаченного счета
     *
     * Метод позволяет отменить счет, по которому не был выполнен перевод.
     *
     * @param {string} billId Уникальный идентификатор счета в вашей системе.
     * @return {Promise<BillStatusData>} Объект счёта
     */
    reject(billId: string): Promise<BillStatusData>;
    /**
     *
     *
     * @param {string} signature
     * @param {(BillStatusData | BillStatusBody)} body
     * @param {*} [merchantSecret=this.secretKey]
     * @return {*}  {boolean}
     * @memberof P2pBillsApi
     */
    checkNotificationSignature(signature: string, body: BillStatusData | BillStatusBody, merchantSecret?: string): boolean;
    /**
     *  Создаёт ссылку оплаты счёта без запроса к API
     *
     * @param {BillFormParams} parameters GET-параметры ссылки
     *
     * @return {string} Ссылка на оплату счёта
     */
    createFormUrl(parameters: BillFormParameters): string;
    /**
     *
     * @deprecated API заархивировано
     * @param {string} billId
     * @param {RefundCreationRequest} options
     * @return {Promise<BillRefundStatusData>}  {Promise<BillRefundStatusData>}
     * @memberof P2pBillsApi
     */
    refund(billId: string, options: RefundCreationRequest): Promise<BillRefundStatusData>;
    /**
     *
     * @deprecated API заархивировано
     * @param {string} billId
     * @param {string} refundId
     * @return {Promise<BillRefundStatusData>}  {Promise<BillRefundStatusData>}
     * @memberof P2pBillsApi
     */
    getRefundStatus(billId: string, refundId: string): Promise<BillRefundStatusData>;
}
