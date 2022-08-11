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
export class DetectorCompat extends Detector {
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
   * @return {*} Promise<number>
   * @memberof Detector
   */
  async getPhoneProvider(phone: string): Promise<number> {
    return await this.detectProvider.byPhone(phone);
  }

  /**
   *
   * @param {string} cardNumber
   * @return {*} Promise<number>
   * @memberof Detector
   */
  async getCardProvider(cardNumber: string): Promise<number> {
    return await this.detectProvider.byCardNumber(cardNumber);
  }
}
