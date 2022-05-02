/**
 *
 *
 * @export
 * @class P2pApi
 */
class P2pApi {
    /**
     * Creates an instance of P2pApi.
     * @param {P2pApiOptions} _options
     * @memberof P2pApi
     */
    constructor(_options) {
        this._options = _options;
    }
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof P2pApi
     */
    get http() {
        return this._options.http;
    }
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
