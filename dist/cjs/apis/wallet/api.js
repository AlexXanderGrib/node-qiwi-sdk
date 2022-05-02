"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("../api.js");
/**
 *
 *
 * @export
 * @class WalletApi
 */
class WalletApi extends api.ApiSubclass {
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
exports.WalletApi = WalletApi;
