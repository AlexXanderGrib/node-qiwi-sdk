/**
 *
 *
 * @export
 * @class OptionsWrapper
 * @template T
 */
class OptionsWrapper {
  /**
   * Creates an instance of OptionsWrapper.
   * @param {T} options
   * @memberof OptionsWrapper
   */
  constructor(options) {
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
class OptionsWrapperWithGetter extends OptionsWrapper {
  /**
   *
   *
   * @readonly
   * @type {T}
   * @memberof OptionsWrapperWithGetter
   */
  get options() {
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
class OptionsWrapperWithSetter extends OptionsWrapper {
  /**
   * @type {T}
   * @memberof OptionsWrapperWithSetter
   */
  get options() {
    return this._options;
  }
  /**
   * @param {T} value
   * @memberof OptionsWrapperWithSetter
   */
  set options(value) {
    this._options = value;
  }
}
export { OptionsWrapper, OptionsWrapperWithGetter, OptionsWrapperWithSetter };
