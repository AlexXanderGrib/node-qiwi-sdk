/**
 *
 *
 * @export
 * @class DetectorApi
 */
class DetectorApi {
    /**
     * Creates an instance of DetectorApi.
     * @param {DetectorApiOptions} _options
     * @memberof DetectorApi
     */
    constructor(_options) {
        this._options = _options;
    }
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof DetectorApi
     */
    get http() {
        return this._options.http;
    }
}

export { DetectorApi };
