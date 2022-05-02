import { ExtendedError } from "../../error";
import { HttpError } from "../../http";
export declare type WalletApiErrorResponse = {
    serviceName: string;
    errorCode: string;
    description: string;
    userMessage: string;
    dateTime: string;
    traceId: string;
};
/**
 *
 *
 * @export
 * @class WalletApiError
 * @extends {ExtendedError}
 */
export declare class WalletApiError extends ExtendedError {
    readonly response: WalletApiErrorResponse;
    readonly dateTime: Date;
    readonly serviceName: string;
    /**
     * Creates an instance of WalletApiError.
     * @param {WalletApiErrorResponse} response
     * @memberof WalletApiError
     */
    constructor(response: WalletApiErrorResponse);
}
export declare type WalletApiShortErrorResponse = {
    message: string;
    code: string;
};
/**
 *
 *
 * @export
 * @class WalletApiShortError
 * @extends {ExtendedError}
 */
export declare class WalletApiShortError extends ExtendedError {
    readonly response: WalletApiShortErrorResponse;
    readonly code: string;
    /**
     * Creates an instance of WalletApiShortError.
     * @param {WalletApiShortErrorResponse} response
     * @memberof WalletApiShortError
     */
    constructor(response: WalletApiShortErrorResponse);
}
/**
 *
 *
 * @export
 * @class WalletAuthorizationError
 * @extends {ExtendedError}
 */
export declare class WalletAuthorizationError extends ExtendedError {
    /**
     * Creates an instance of WalletAuthorizationError.
     * @memberof WalletAuthorizationError
     */
    constructor();
}
/**
 *
 *
 * @export
 * @param {HttpError} error
 * @return {*}
 */
export declare function mapHttpErrors(error: HttpError): WalletApiError | WalletApiShortError | WalletAuthorizationError | HttpError<any, any>;
