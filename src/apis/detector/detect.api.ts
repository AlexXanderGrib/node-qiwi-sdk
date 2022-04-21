import { AnyResponse } from "../shared";
import { DetectorApi } from "./api";
import { DetectorError } from "./detector.errors";

/**
 *
 *
 * @export
 * @class DetectorDetectApi
 * @extends {DetectorApi}
 */
export class DetectorDetectApi extends DetectorApi {
  /**
   * Вытаскивает ID провайдера из объекта ответа
   *
   * @param {*} response
   * @return {number} ID провайдера
   */
  private _extractProvider(response: AnyResponse): number {
    if (response.code.value !== "0") throw new DetectorError(response.message);

    return Number.parseInt(response.message);
  }

  /**
   * Возвращает ID провайдера QIWI по номеру телефона.
   * Используется для пополнения на счёта мобильного
   *
   * @param {string} phone
   */
  async byPhone(phone: string): Promise<number> {
    const response = await this.http.post<any>("mobile/detect.action", { phone });

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
  async byCardNumber(cardNumber: string): Promise<number> {
    const response = await this.http.post<any>("card/detect.action", { cardNumber });

    return this._extractProvider(response);
  }
}
