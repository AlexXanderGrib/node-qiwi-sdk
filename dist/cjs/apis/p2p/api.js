"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("../api.js");
/**
 *
 *
 * @export
 * @class P2pApi
 */
class P2pApi extends api.ApiSubclass {
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
exports.P2pApi = P2pApi;
