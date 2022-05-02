import { ApiSubclass } from "../api.mjs";
/**
 *
 *
 * @export
 * @class P2pApi
 */
class P2pApi extends ApiSubclass {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof P2pApi
   */
  get publicKey() {
    return this._options.publicKey;
  }
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof P2pApi
   */
  get secretKey() {
    return this._options.secretKey;
  }
}
export { P2pApi };
