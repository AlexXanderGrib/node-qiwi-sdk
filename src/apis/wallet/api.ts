import { ApiSubclass } from "../api";
import type { WalletApiOptions } from "./wallet.options";
/**
 *
 *
 * @export
 * @class WalletApi
 */
export class WalletApi extends ApiSubclass<WalletApiOptions> {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof WalletApi
   */
  protected get walletId() {
    return this._options.walletId;
  }
}
