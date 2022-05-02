import { Detector } from "./detector.mjs";
/**
 *
 * @deprecated Используйте класс `Detector` и новые сигнатуры
 * методов
 *
 * @export
 * @class DetectorCompat
 * @extends {Detector}
 */
class DetectorCompat extends Detector {
  /**
   * Creates an instance of DetectorCompat.
   * @memberof DetectorCompat
   */
  constructor() {
    super({ http: DetectorCompat.httpClientFactory() });
  }
  /**
   *
   * @param {string} phone
   * @return {*}  {Promise<number>}
   * @memberof Detector
   */
  async getPhoneProvider(phone) {
    return await this.detectProvider.byPhone(phone);
  }
  /**
   *
   * @param {string} cardNumber
   * @return {*}  {Promise<number>}
   * @memberof Detector
   */
  async getCardProvider(cardNumber) {
    return await this.detectProvider.byCardNumber(cardNumber);
  }
}
export { DetectorCompat };
