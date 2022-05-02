import { WalletApiOptions } from "./wallet.options";
/**
 *
 *
 * @export
 * @class WalletApi
 */
export declare class WalletApi {
    protected readonly _options: WalletApiOptions;
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof WalletApi
     */
    protected get http(): import("../../http").SimpleJsonHttp;
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof WalletApi
     */
    protected get walletId(): string;
    /**
     * Creates an instance of WalletApi.
     * @param {WalletApiOptions} _options
     * @memberof WalletApi
     */
    constructor(_options: WalletApiOptions);
}
