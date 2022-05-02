import { SimpleJsonHttp } from "../http";
export interface ApiClassOptions {
    readonly http: SimpleJsonHttp;
}
/**
 *
 *
 * @export
 * @abstract
 * @class ApiClass
 * @template T
 */
export declare abstract class ApiClass<T extends ApiClassOptions = ApiClassOptions> {
    protected readonly _options: T;
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
    /**
     *
     *
     * @readonly
     * @memberof ApiClass
     */
    get options(): T;
    /**
     * Creates an instance of ApiClass.
     * @param {T} _options
     * @memberof ApiClass
     */
    constructor(_options: T);
}
