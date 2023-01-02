import { url } from "../shared/url";
import { WalletApi } from "./api";
import type { Restrictions } from "./wallet.types";

/**
 * # Проверка ограничений исходящих платежей с QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#restrictions)
 *
 * @export
 * @class WalletRestrictionsApi
 * @extends {WalletApi}
 */
export class WalletRestrictionsApi extends WalletApi {
  /**
   * ## Проверка ограничений исходящих платежей с QIWI Кошелька
   *
   * Запрос проверяет, есть ли ограничение на исходящие платежи с
   * QIWI Кошелька.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @return {Promise<Restrictions>} Promise<Restrictions>
   * @memberof WalletRestrictionsApi
   */
  async get(): Promise<Restrictions> {
    return await this.http.get(
      url`person-profile/v1/persons/${this.walletId}/status/restrictions`
    );
  }
}
