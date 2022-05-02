import { ApiSubclass } from "../api";
import type { P2pApiOptions } from "./p2p.options";
/**
 *
 *
 * @export
 * @class P2pApi
 */
export class P2pApi extends ApiSubclass<P2pApiOptions> {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof P2pApi
   */
  protected get publicKey() {
    return this._options.publicKey;
  }

  /**
   *
   *
   * @readonly
   * @protected
   * @memberof P2pApi
   */
  protected get secretKey() {
    return this._options.secretKey;
  }
}
