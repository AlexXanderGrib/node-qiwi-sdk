import { Detector } from "./detector";
/**
 *
 * @deprecated Используйте класс `Detector` и новые сигнатуры
 * методов
 *
 * @export
 * @class DetectorCompat
 * @extends {Detector}
 */
export declare class DetectorCompat extends Detector {
    /**
     * Creates an instance of DetectorCompat.
     * @memberof DetectorCompat
     */
    constructor();
    /**
     *
     * @param {string} phone
     * @return {*}  {Promise<number>}
     * @memberof Detector
     */
    getPhoneProvider(phone: string): Promise<number>;
    /**
     *
     * @param {string} cardNumber
     * @return {*}  {Promise<number>}
     * @memberof Detector
     */
    getCardProvider(cardNumber: string): Promise<number>;
}
