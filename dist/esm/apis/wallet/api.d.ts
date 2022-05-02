import { ApiSubclass } from "../api";
import type { WalletApiOptions } from "./wallet.options";
/**
 *
 *
 * @export
 * @class WalletApi
 */
export declare class WalletApi extends ApiSubclass<WalletApiOptions> {
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof WalletApi
     */
    protected get walletId(): string;
}
