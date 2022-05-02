'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 *
 * @export
 * @abstract
 * @class ApiClass
 * @template T
 */
class ApiClass {
    /**
     * Creates an instance of ApiClass.
     * @param {T} _options
     * @memberof ApiClass
     */
    constructor(_options) {
        this._options = _options;
    }
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
}

exports.ApiClass = ApiClass;
