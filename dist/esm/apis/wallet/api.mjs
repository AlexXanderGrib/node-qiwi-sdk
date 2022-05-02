/**
 *
 *
 * @export
 * @class WalletApi
 */
class WalletApi {
    /**
     * Creates an instance of WalletApi.
     * @param {WalletApiOptions} _options
     * @memberof WalletApi
     */
    constructor(_options) {
        this._options = _options;
    }
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof WalletApi
     */
    get http() {
        return this._options.http;
    }
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

export { WalletApi };
