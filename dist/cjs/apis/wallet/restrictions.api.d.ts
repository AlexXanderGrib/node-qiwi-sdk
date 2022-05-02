import { WalletApi } from "./api";
import { Restrictions } from "./wallet.types";
/**
 * # Проверка ограничений исходящих платежей с QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#restrictions)
 *
 * @export
 * @class WalletRestrictionsApi
 * @extends {WalletApi}
 */
export declare class WalletRestrictionsApi extends WalletApi {
    /**
     * ## Проверка ограничений исходящих платежей с QIWI Кошелька
     *
     * Запрос проверяет, есть ли ограничение на исходящие платежи с
     * QIWI Кошелька.
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @return {Promise<Restrictions>} {Promise<Restrictions>}
     * @memberof WalletRestrictionsApi
     */
    get(): Promise<Restrictions>;
}
