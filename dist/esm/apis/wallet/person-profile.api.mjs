import { WalletApi } from "./api.mjs";
/**
 * # Профиль пользователя
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#profile)
 *
 * @export
 * @class WalletPersonProfileApi
 * @extends {WalletApi}
 */
class WalletPersonProfileApi extends WalletApi {
  /**
   * ## Профиль пользователя
   *
   * Запрос возвращает информацию о вашем профиле - наборе
   * пользовательских данных и настроек вашего QIWI кошелька.
   *
   * @return {Promise<PersonProfile>} {Promise<PersonProfile>}
   * @memberof WalletPersonProfileApi
   */
  async getCurrent() {
    return await this.http.get("person-profile/v1/profile/current");
  }
}
export { WalletPersonProfileApi };
