import { WalletApi } from "./api.mjs";
import { formatQuerystring } from "../shared/querystring.mjs";
/**
 * # Лимиты QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#limits)
 *
 * @export
 * @class WalletLimitsApi
 * @extends {WalletApi}
 */
class WalletLimitsApi extends WalletApi {
  /**
   * ## Лимиты QIWI Кошелька
   *
   * Запрос возвращает текущие уровни лимитов по операциям в
   * вашем QIWI кошельке. Лимиты действуют как ограничения на
   * сумму определенных операций.
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @template {LimitTypeAny[]} Limits
   * @param {Limits} limits
   * @return {Promise<LimitsResponse>} {Promise<LimitsResponse<Limits[number]>>}
   * @memberof WalletLimitsApi
   */
  async get(limits) {
    return await this.http.get(
      `qw-limits/v1/persons/${this.walletId}/actual-limits?${formatQuerystring({
        types: limits
      })}`
    );
  }
}
export { WalletLimitsApi };
