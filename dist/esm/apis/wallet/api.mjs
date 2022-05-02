import { ApiSubclass } from "../api.mjs";
/**
 *
 *
 * @export
 * @class WalletApi
 */
class WalletApi extends ApiSubclass {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof WalletApi
   */
  get walletId() {
    return this._options.walletId;
  }
}
export { WalletApi };
