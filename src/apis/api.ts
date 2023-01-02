import type { SimpleJsonHttp } from "./shared/http";
import { OptionsWrapper, OptionsWrapperWithGetter } from "./options-wrapper";

export interface ApiClassOptions {
  readonly http: SimpleJsonHttp;
}

/**
 *
 *
 * @export
 * @class ApiClass
 * @template T
 */
export class ApiClass<
  T extends ApiClassOptions = ApiClassOptions
> extends OptionsWrapperWithGetter<T> {
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
  set agent(agent: any) {
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
export class ApiSubclass<
  T extends ApiClassOptions = ApiClassOptions
> extends OptionsWrapper<T> {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof ApiSubclass
   */
  protected get http() {
    return this._options.http;
  }
}
