import { stringify } from "query-string";
import { ExtendedError } from "../error";
import { HttpAPI } from "../http";
import { AnyResponse } from "./shared.types";

/**
 * Ошибка, которую выбрасывает персональное API в случае
 * неправильного кода ответа от QIWI
 */
export class DetectorError extends ExtendedError {}

/**
 * API получения ID провайдера QIWI по Номеру Телефона/Карте
 */
export class Detector extends HttpAPI {
  protected readonly API_URL = "https://qiwi.com";
  protected readonly API_HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  };

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
  async getPhoneProvider(phone: string): Promise<number> {
    const response = await this.post<any>(
      "mobile/detect.action",
      {},
      stringify({ phone })
    );

    return this._extractProvider(response);
  }

  /**
   * Возвращает ID провайдера QIWI по номеру карты.
   * Используется для переводов на карту
   *
   * @param {string} cardNumber
   */
  async getCardProvider(cardNumber: string): Promise<number> {
    const response = await this.post<any>(
      "card/detect.action",
      {},
      stringify({ cardNumber })
    );

    return this._extractProvider(response);
  }
}
