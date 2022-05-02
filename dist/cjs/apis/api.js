"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const optionsWrapper = require("../options-wrapper.js");
/**
 *
 *
 * @export
 * @class ApiClass
 * @template T
 */
class ApiClass extends optionsWrapper.OptionsWrapperWithGetter {
  /**
   *
   *
   * @memberof WalletCompat
   */
  get agent() {
    return this.options.http.client.options.agent;
  }
  /**
   *
   * @param {*} agent
   * @memberof WalletCompat
   */
  set agent(agent) {
    this.options.http.client.options.agent = agent;
  }
}
/**
 *
 *
 * @export
 * @class ApiSubclass
 * @extends {OptionsWrapper<T>}
 * @template T
 */
class ApiSubclass extends optionsWrapper.OptionsWrapper {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof ApiSubclass
   */
  get http() {
    return this._options.http;
  }
}
exports.ApiClass = ApiClass;
exports.ApiSubclass = ApiSubclass;
