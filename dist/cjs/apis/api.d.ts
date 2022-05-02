import { SimpleJsonHttp } from "../http";
import { OptionsWrapper, OptionsWrapperWithGetter } from "../options-wrapper";
export interface ApiClassOptions {
    readonly http: SimpleJsonHttp;
}
/**
 *
 *
 * @export
 * @class ApiClass
 * @template T
 */
export declare class ApiClass<T extends ApiClassOptions = ApiClassOptions> extends OptionsWrapperWithGetter<T> {
    /**
     *
     *
     * @memberof WalletCompat
     */
    get agent(): any;
    /**
     *
     * @param {*} agent
     * @memberof WalletCompat
     */
    set agent(agent: any);
}
/**
 *
 *
 * @export
 * @class ApiSubclass
 * @extends {OptionsWrapper<T>}
 * @template T
 */
export declare class ApiSubclass<T extends ApiClassOptions = ApiClassOptions> extends OptionsWrapper<T> {
    /**
     *
     *
     * @readonly
     * @protected
     * @memberof ApiSubclass
     */
    protected get http(): SimpleJsonHttp;
}
