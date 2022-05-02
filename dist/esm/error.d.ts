/**
 * Ошибка, которую можно преобразовать в JSON
 *
 * @export
 * @class ExtendedError
 * @extends {Error}
 */
export declare class ExtendedError extends Error {
    name: string;
    /**
     *
     *
     * @return {*}  {Error}
     * @memberof ExtendedError
     */
    toJSON(): Error;
    /**
     *
     *
     * @readonly
     * @type {string}
     * @memberof ExtendedError
     */
    get [Symbol.toStringTag](): string;
}
/**
 *
 *
 * @export
 * @class ErrorWithCode
 * @extends {ExtendedError}
 * @template CodeType
 */
export declare class ErrorWithCode<CodeType extends string | number = string | number> extends ExtendedError {
    message: string;
    code: CodeType;
    /**
     * Creates an instance of ErrorWithCode.
     * @param {string} message
     * @param {CodeType} code
     * @memberof ErrorWithCode
     */
    constructor(message: string, code: CodeType);
    /**
     *
     *
     * @return {*}  {(Error & { code: CodeType })}
     * @memberof ErrorWithCode
     */
    toJSON(): Error & {
        code: CodeType;
    };
    /**
     *
     *
     * @return {*}  {string}
     * @memberof ErrorWithCode
     */
    toString(): string;
}
