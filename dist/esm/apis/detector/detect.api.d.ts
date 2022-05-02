import { DetectorApi } from "./api";
/**
 *
 *
 * @export
 * @class DetectorDetectApi
 * @extends {DetectorApi}
 */
export declare class DetectorDetectApi extends DetectorApi {
    /**
     * Вытаскивает ID провайдера из объекта ответа
     *
     * @param {*} response
     * @return {number} ID провайдера
     */
    private _extractProvider;
    /**
     * Возвращает ID провайдера QIWI по номеру телефона.
     * Используется для пополнения на счёта мобильного
     *
     * @param {string} phone
     */
    byPhone(phone: string): Promise<number>;
    /**
     * Возвращает ID провайдера QIWI по номеру карты.
     * Используется для переводов на карту
     *
     * @param {string} cardNumber
     *
     * @note После ухода VISA и MasterCard из РФ стал работать хуже.
     * Советую использовать константу `Recipients.AnyRusCard` вместо вызова метода.
     */
    byCardNumber(cardNumber: string): Promise<number>;
}
