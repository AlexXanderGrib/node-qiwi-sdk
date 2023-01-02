import { url } from "../shared/url";
import { WalletApi } from "./api";
import type { IdentificationBase, IdentificationResponse } from "./wallet.types";

/**
 * # Идентификация
 * [Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#identification)
 *
 * @export
 * @class WalletIdentificationApi
 * @extends {WalletApi}
 */
export class WalletIdentificationApi extends WalletApi {
  /**
   * # Идентификация пользователя
   *
   * Данный запрос позволяет отправить данные для идентификации
   * вашего QIWI кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {IdentificationBase} data
   * @return {Promise<IdentificationResponse>} Promise<IdentificationResponse>
   * @memberof WalletIdentificationApi
   */
  async set(data: IdentificationBase): Promise<IdentificationResponse> {
    // Тесты не могут покрыть этот метод. Он - деструктивный
    // Он не может быть вызван много раз
    /* istanbul ignore next */
    return await this.http.post(
      url`identification/v1/persons/${this.walletId}/identification`,
      data
    );
  }

  /**
   * # Данные идентификации
   *
   * Данный запрос позволяет выгрузить маскированные данные и
   * статус идентификации своего QIWI кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @return {Promise<IdentificationResponse>} Promise<IdentificationResponse>
   * @memberof WalletIdentificationApi
   */
  async get(): Promise<IdentificationResponse> {
    return await this.http.get(
      url`identification/v1/persons/${this.walletId}/identification`
    );
  }
}
