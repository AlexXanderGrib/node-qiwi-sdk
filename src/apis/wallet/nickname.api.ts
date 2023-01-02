import { url } from "../shared/url";
import { WalletApi } from "./api";
import type { NicknameData } from "./wallet.types";

/**
 * # Получение своего ника
 * Не документированное
 *
 * @export
 * @class WalletNicknameApi
 * @extends {WalletApi}
 */
export class WalletNicknameApi extends WalletApi {
  /**
   * ## Получение своего ника
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @return {Promise<NicknameData>} Promise<NicknameData>
   * @memberof WalletNicknameApi
   */
  async getCurrent(): Promise<NicknameData> {
    return await this.http.get(
      url`qw-nicknames/v1/persons/${this.walletId}/nickname`
    );
  }
}
