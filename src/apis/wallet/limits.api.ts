import { url } from "../shared/url";
import { WalletApi } from "./api";
import type { LimitsResponse, LimitTypeAny } from "./wallet.types";

/**
 * # Лимиты QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#limits)
 *
 * @export
 * @class WalletLimitsApi
 * @extends {WalletApi}
 */
export class WalletLimitsApi extends WalletApi {
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
   * @return {Promise<LimitsResponse>} Promise<LimitsResponse<Limits[number]>>
   * @memberof WalletLimitsApi
   */
  async get<Limits extends LimitTypeAny[] = LimitTypeAny[]>(
    limits: Limits
  ): Promise<LimitsResponse<Limits[number]>> {
    return await this.http.get(
      url`qw-limits/v1/persons/${this.walletId}/actual-limits`({
        types: limits
      })
    );
  }
}
