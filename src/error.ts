export class ExtendedError extends Error {
  name = this.constructor.name;

  toJSON() {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack
    };
  }

  [Symbol.toStringTag]() {
    return this.name;
  }
}

export class ErrorWithCode<
  CodeType extends string | number = string | number
> extends ExtendedError {
  constructor(public message: string, public code: CodeType) {
    super(message);
  }

  toJSON() {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack,
      code: this.code
    };
  }

  toString() {
    `[Error ${this.name}; CODE=${this.code}]`;
  }
}
