import { WalletApi } from "./api";
import { ProviderInfo } from "./wallet.types";
/**
 * # Информация о провайдере
 * Не документированное
 *
 * @export
 * @class WalletProvidersApi
 * @extends {WalletApi}
 */
export declare class WalletProvidersApi extends WalletApi {
    /**
     * ## Профиль пользователя
     *
     * Запрос возвращает информацию о вашем профиле - наборе
     * пользовательских данных и настроек вашего QIWI кошелька.
     *
     * @param {number} providerId
     * @return {Promise<ProviderInfo>} {Promise<ProviderInfo>}
     * @memberof WalletProvidersApi
     */
    getInfo(providerId: number): Promise<ProviderInfo>;
}
