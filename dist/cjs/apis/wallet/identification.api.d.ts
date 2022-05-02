import { WalletApi } from "./api";
import { IdentificationBase, IdentificationResponse } from "./wallet.types";
/**
 * # Идентификация
 * [Документация QIWI] (https://developer.qiwi.com/ru/qiwi-wallet-personal/#identification)
 *
 * @export
 * @class WalletIdentificationApi
 * @extends {WalletApi}
 */
export declare class WalletIdentificationApi extends WalletApi {
    /**
     * # Идентификация пользователя
     *
     * Данный запрос позволяет отправить данные для идентификации
     * вашего QIWI кошелька.
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {IdentificationBase} data
     * @param {StringOrNumber} wallet
     * @return {Promise<IdentificationResponse>} {Promise<IdentificationResponse>}
     * @memberof WalletIdentificationApi
     */
    set(data: IdentificationBase): Promise<IdentificationResponse>;
    /**
     * # Данные идентификации
     *
     * Данный запрос позволяет выгрузить маскированные данные и
     * статус идентификации своего QIWI кошелька.
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @param {StringOrNumber} wallet
     * @return {Promise<IdentificationResponse>} {Promise<IdentificationResponse>}
     * @memberof WalletIdentificationApi
     */
    get(): Promise<IdentificationResponse>;
}
