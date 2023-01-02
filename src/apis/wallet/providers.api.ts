import { url } from "../shared/url";
import { WalletApi } from "./api";
import type { ProviderInfo } from "./wallet.types";

/**
 * # Информация о провайдере
 * Не документированное
 *
 * @export
 * @class WalletProvidersApi
 * @extends {WalletApi}
 */
export class WalletProvidersApi extends WalletApi {
  /**
   * ## Профиль пользователя
   *
   * Запрос возвращает информацию о вашем профиле - наборе
   * пользовательских данных и настроек вашего QIWI кошелька.
   *
   * @param {number} providerId
   * @return {Promise<ProviderInfo>} Promise<ProviderInfo>
   * @memberof WalletProvidersApi
   */
  async getInfo(providerId: number): Promise<ProviderInfo> {
    return await this.http.get(url`providers-catalog/v2/providers/${providerId}`);
  }
}
