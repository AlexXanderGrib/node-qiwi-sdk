/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */

/**
 * Ошибка, которую можно преобразовать в JSON
 */
export class ExtendedError extends Error {
  name = this.constructor.name;

  toJSON(): Error {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack
    };
  }

  get [Symbol.toStringTag](): string {
    return this.name;
  }
}

export class ErrorWithCode<
  CodeType extends string | number = string | number
> extends ExtendedError {
  constructor(public message: string, public code: CodeType) {
    super(message);
  }

  toJSON(): Error & { code: CodeType } {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack,
      code: this.code
    };
  }

  toString(): string {
    return `[Error ${this.name}; CODE=${this.code}]`;
  }
}
