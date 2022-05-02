import { OptionsWrapperWithGetter, OptionsWrapper } from "../options-wrapper.mjs";
/**
 *
 *
 * @export
 * @class ApiClass
 * @template T
 */
class ApiClass extends OptionsWrapperWithGetter {
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
class ApiSubclass extends OptionsWrapper {
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
export { ApiClass, ApiSubclass };
