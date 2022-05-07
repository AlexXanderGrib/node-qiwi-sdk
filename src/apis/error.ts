/**
 * Ошибка, которую можно преобразовать в JSON
 *
 * @export
 * @class ExtendedError
 * @extends {Error}
 */
export class ExtendedError extends Error {
  name = this.constructor.name;

  /**
   *
   *
   * @return {*}  {Error}
   * @memberof ExtendedError
   */
  toJSON(): Error {
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
  get [Symbol.toStringTag](): string {
    return this.name;
  }
}

/**
 *
 *
 * @export
 * @class ErrorWithCode
 * @extends {ExtendedError}
 * @template CodeType
 */
export class ErrorWithCode<
  CodeType extends string | number = string | number
> extends ExtendedError {
  /**
   * Creates an instance of ErrorWithCode.
   * @param {string} message
   * @param {CodeType} code
   * @memberof ErrorWithCode
   */
  constructor(public message: string, public code: CodeType) {
    super(message);
  }

  /**
   *
   *
   * @return {*}  {(Error & { code: CodeType })}
   * @memberof ErrorWithCode
   */
  toJSON(): Error & { code: CodeType } {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack,
      code: this.code
    };
  }

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ErrorWithCode
   */
  toString(): string {
    return `[Error ${this.name}; CODE=${this.code}]`;
  }
}
