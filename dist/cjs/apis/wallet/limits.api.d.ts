import { WalletApi } from "./api";
import { LimitsResponse, LimitTypeAny } from "./wallet.types";
/**
 * # Лимиты QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#limits)
 *
 * @export
 * @class WalletLimitsApi
 * @extends {WalletApi}
 */
export declare class WalletLimitsApi extends WalletApi {
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
    get<Limits extends LimitTypeAny[] = LimitTypeAny[]>(limits: Limits): Promise<LimitsResponse<Limits[number]>>;
}
