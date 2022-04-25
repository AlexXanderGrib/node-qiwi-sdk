import { SimpleJsonHttp } from "../http";

export interface ApiClassOptions {
  readonly http: SimpleJsonHttp;
}

/**
 *
 *
 * @export
 * @abstract
 * @class ApiClass
 * @template T
 */
export abstract class ApiClass<T extends ApiClassOptions = ApiClassOptions> {
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
    /* istanbul ignore next */
    this.options.http.client.options.agent = agent;
  }

  /**
   *
   *
   * @readonly
   * @memberof ApiClass
   */
  get options() {
    return this._options;
  }

  /**
   * Creates an instance of ApiClass.
   * @param {T} _options
   * @memberof ApiClass
   */
  constructor(protected readonly _options: T) {}
}
