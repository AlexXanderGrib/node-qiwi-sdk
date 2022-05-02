'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var api = require('./api.js');
var detector_errors = require('./detector.errors.js');

/**
 *
 *
 * @export
 * @class DetectorDetectApi
 * @extends {DetectorApi}
 */
class DetectorDetectApi extends api.DetectorApi {
    /**
     * Вытаскивает ID провайдера из объекта ответа
     *
     * @param {*} response
     * @return {number} ID провайдера
     */
    _extractProvider(response) {
        // Legacy проверка ответа
        /* istanbul ignore next */
        if (response.code.value !== "0")
            throw new detector_errors.DetectorError(response.message);
        return Number.parseInt(response.message);
    }
    /**
     * Возвращает ID провайдера QIWI по номеру телефона.
     * Используется для пополнения на счёта мобильного
     *
     * @param {string} phone
     */
    async byPhone(phone) {
        const response = await this.http.post("mobile/detect.action", { phone });
        return this._extractProvider(response);
    }
    /**
     * Возвращает ID провайдера QIWI по номеру карты.
     * Используется для переводов на карту
     *
     * @param {string} cardNumber
     *
     * @note После ухода VISA и MasterCard из РФ стал работать хуже.
     * Советую использовать константу `Recipients.AnyRusCard` вместо вызова метода.
     */
    async byCardNumber(cardNumber) {
        const response = await this.http.post("card/detect.action", { cardNumber });
        return this._extractProvider(response);
    }
}

exports.DetectorDetectApi = DetectorDetectApi;
