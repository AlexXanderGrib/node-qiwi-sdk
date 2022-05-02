import { P2pApiOptions } from "./p2p.options";
/**
 *
 *
 * @export
 * @class P2pApi
 */
export declare class P2pApi {
    protected readonly _options: P2pApiOptions;
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof P2pApi
     */
    protected get http(): import("../../http").SimpleJsonHttp;
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof P2pApi
     */
    protected get publicKey(): string;
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof P2pApi
     */
    protected get secretKey(): string;
    /**
     * Creates an instance of P2pApi.
     * @param {P2pApiOptions} _options
     * @memberof P2pApi
     */
    constructor(_options: P2pApiOptions);
}
