/**
 *
 *
 * @export
 * @class OptionsWrapper
 * @template T
 */
export declare class OptionsWrapper<T> {
    /**
     *
     * @readonly
     * @protected
     * @type {T}
     * @memberof OptionsWrapper
     */
    protected readonly _options: T;
    /**
     * Creates an instance of OptionsWrapper.
     * @param {T} options
     * @memberof OptionsWrapper
     */
    constructor(options: T);
}
/**
 *
 *
 * @export
 * @class OptionsWrapperWithGetter
 * @extends {OptionsWrapper<T>}
 * @template T
 */
export declare class OptionsWrapperWithGetter<T> extends OptionsWrapper<T> {
    /**
     *
     *
     * @readonly
     * @type {T}
     * @memberof OptionsWrapperWithGetter
     */
    get options(): T;
}
/**
 *
 *
 * @export
 * @class OptionsWrapperWithSetter
 * @extends {OptionsWrapper<T>}
 * @template T
 */
export declare class OptionsWrapperWithSetter<T> extends OptionsWrapper<T> {
    protected _options: T;
    /**
     * @type {T}
     * @memberof OptionsWrapperWithSetter
     */
    get options(): T;
    /**
     * @param {T} value
     * @memberof OptionsWrapperWithSetter
     */
    set options(value: T);
}
