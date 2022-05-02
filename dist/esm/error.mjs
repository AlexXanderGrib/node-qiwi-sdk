/**
 * Ошибка, которую можно преобразовать в JSON
 *
 * @export
 * @class ExtendedError
 * @extends {Error}
 */
class ExtendedError extends Error {
  constructor() {
    super(...arguments);
    this.name = this.constructor.name;
  }
  /**
   *
   *
   * @return {*}  {Error}
   * @memberof ExtendedError
   */
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack
    };
  }
  /**
   *
   *
   * @readonly
   * @type {string}
   * @memberof ExtendedError
   */
  get [Symbol.toStringTag]() {
    return this.name;
  }
}
export { ExtendedError };
