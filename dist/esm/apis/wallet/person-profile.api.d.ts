import { WalletApi } from "./api";
import { PersonProfile } from "./wallet.types";
/**
 * # Профиль пользователя
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#profile)
 *
 * @export
 * @class WalletPersonProfileApi
 * @extends {WalletApi}
 */
export declare class WalletPersonProfileApi extends WalletApi {
    /**
     * ## Профиль пользователя
     *
     * Запрос возвращает информацию о вашем профиле - наборе
     * пользовательских данных и настроек вашего QIWI кошелька.
     *
     * @return {Promise<PersonProfile>} {Promise<PersonProfile>}
     * @memberof WalletPersonProfileApi
     */
    getCurrent(): Promise<PersonProfile>;
}
