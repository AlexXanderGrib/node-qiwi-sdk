import { ApiSubclass } from "../api";
import type { P2pApiOptions } from "./p2p.options";
/**
 *
 *
 * @export
 * @class P2pApi
 */
export declare class P2pApi extends ApiSubclass<P2pApiOptions> {
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
}
