import { url } from "../shared/url";
import { WalletApi } from "./api";
import type { PersonProfile } from "./wallet.types";

/**
 * # Профиль пользователя
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#profile)
 *
 * @export
 * @class WalletPersonProfileApi
 * @extends {WalletApi}
 */
export class WalletPersonProfileApi extends WalletApi {
  /**
   * ## Профиль пользователя
   *
   * Запрос возвращает информацию о вашем профиле - наборе
   * пользовательских данных и настроек вашего QIWI кошелька.
   *
   * @return {Promise<PersonProfile>} Promise<PersonProfile>
   * @memberof WalletPersonProfileApi
   */
  async getCurrent(): Promise<PersonProfile> {
    return await this.http.get(url`person-profile/v1/profile/current`);
  }
}
