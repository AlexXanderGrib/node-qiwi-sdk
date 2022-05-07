/**
 *
 *
 * @export
 * @class OptionsWrapper
 * @template T
 */
export class OptionsWrapper<T> {
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
  constructor(options: T) {
    this._options = options;
  }
}

/**
 *
 *
 * @export
 * @class OptionsWrapperWithGetter
 * @extends {OptionsWrapper<T>}
 * @template T
 */
export class OptionsWrapperWithGetter<T> extends OptionsWrapper<T> {
  /**
   *
   *
   * @readonly
   * @type {T}
   * @memberof OptionsWrapperWithGetter
   */
  get options(): T {
    return this._options;
  }
}

/**
 *
 *
 * @export
 * @class OptionsWrapperWithSetter
 * @extends {OptionsWrapper<T>}
 * @template T
 */
export class OptionsWrapperWithSetter<T> extends OptionsWrapper<T> {
  protected _options!: T;

  /**
   * @type {T}
   * @memberof OptionsWrapperWithSetter
   */
  get options(): T {
    return this._options;
  }

  /**
   * @param {T} value
   * @memberof OptionsWrapperWithSetter
   */
  set options(value: T) {
    this._options = value;
  }
}
