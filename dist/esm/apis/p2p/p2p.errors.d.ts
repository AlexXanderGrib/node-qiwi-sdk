import { ExtendedError } from "../../error";
import { HttpError } from "../../http";
export declare type P2pApiErrorResponse = {
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
 * @class P2pApiError
 * @extends {ExtendedError}
 */
export declare class P2pApiError extends ExtendedError {
    readonly response: P2pApiErrorResponse;
    readonly dateTime: Date;
    readonly serviceName: string;
    /**
     * Creates an instance of P2pApiError.
     * @param {P2pApiErrorResponse} response
     * @memberof P2pApiError
     */
    constructor(response: P2pApiErrorResponse);
}
/**
 *
 *
 * @export
 * @class P2pAuthorizationError
 * @extends {ExtendedError}
 */
export declare class P2pAuthorizationError extends ExtendedError {
    /**
     * Creates an instance of P2pAuthorizationError.
     * @memberof P2pAuthorizationError
     */
    constructor();
}
/**
 *
 *
 * @export
 * @class P2pBillNotificationError
 * @extends {ExtendedError}
 */
export declare class P2pBillNotificationError extends ExtendedError {
    /**
     * Creates an instance of P2pBillNotificationError.
     * @memberof P2pBillNotificationError
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
export declare function mapHttpErrors(error: HttpError): P2pApiError | P2pAuthorizationError | HttpError<any, any>;
