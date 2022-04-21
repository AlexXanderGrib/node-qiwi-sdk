import { P2pApiOptions } from "./p2p.options";
/**
 *
 *
 * @export
 * @class P2pApi
 */
export class P2pApi {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof P2pApi
   */
  protected get http() {
    return this._options.http;
  }

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

  /**
   * Creates an instance of P2pApi.
   * @param {P2pApiOptions} _options
   * @memberof P2pApi
   */
  constructor(protected readonly _options: P2pApiOptions) {}
}
