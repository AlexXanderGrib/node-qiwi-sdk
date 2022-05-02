import { WalletApi } from './api.mjs';

/**
 * # Информация о провайдере
 * Не документированное
 *
 * @export
 * @class WalletProvidersApi
 * @extends {WalletApi}
 */
class WalletProvidersApi extends WalletApi {
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
    async getInfo(providerId) {
        return await this.http.get(`providers-catalog/v2/providers/${providerId}`);
    }
}

export { WalletProvidersApi };
