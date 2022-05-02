import { DetectorApiOptions } from "./detector.options";
/**
 *
 *
 * @export
 * @class DetectorApi
 */
export declare class DetectorApi {
    protected readonly _options: DetectorApiOptions;
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof DetectorApi
     */
    protected get http(): import("../../http").SimpleJsonHttp;
    /**
     * Creates an instance of DetectorApi.
     * @param {DetectorApiOptions} _options
     * @memberof DetectorApi
     */
    constructor(_options: DetectorApiOptions);
}
