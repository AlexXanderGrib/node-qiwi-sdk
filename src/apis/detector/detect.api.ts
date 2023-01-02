import type { AnyRecord } from "../shared/types";
import { url } from "../shared/url";
import { getOwnPropertyDeep } from "../shared/get";
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
   * @protected
   * @param {AnyRecord} response
   * @return {number} ID провайдера
   */
  protected _extractProvider(response: AnyRecord): number {
    if (getOwnPropertyDeep(response, "code.value") !== "0") {
      throw new DetectorError(response.message as string);
    }

    return Number.parseInt(response.message as string);
  }

  /**
   * Возвращает ID провайдера QIWI по номеру телефона.
   * Используется для пополнения на счёта мобильного
   *
   * @param {string} phone
   */
  async byPhone(phone: string): Promise<number> {
    const response = await this.http.post<any>(url`mobile/detect.action`, {
      phone
    });

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
    const response = await this.http.post<any>(url`card/detect.action`, {
      cardNumber
    });

    return this._extractProvider(response);
  }
}
