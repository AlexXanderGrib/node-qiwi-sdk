import { WalletApiOptions } from "./wallet.options";
/**
 *
 *
 * @export
 * @class WalletApi
 */
export class WalletApi {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof WalletApi
   */
  protected get http() {
    return this._options.http;
  }

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

  /**
   * Creates an instance of WalletApi.
   * @param {WalletApiOptions} _options
   * @memberof WalletApi
   */
  constructor(protected readonly _options: WalletApiOptions) {}
}
