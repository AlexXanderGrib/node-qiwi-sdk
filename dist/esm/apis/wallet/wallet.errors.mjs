import { ExtendedError } from '../../error.mjs';
import { HttpError } from '../../http.mjs';

/* istanbul ignore file */
/**
 *
 *
 * @export
 * @class WalletApiError
 * @extends {ExtendedError}
 */
class WalletApiError extends ExtendedError {
    /**
     * Creates an instance of WalletApiError.
     * @param {WalletApiErrorResponse} response
     * @memberof WalletApiError
     */
    constructor(response) {
        super(response.userMessage);
        this.response = response;
        this.dateTime = new Date(this.response.dateTime);
        this.serviceName = this.response.serviceName;
    }
}
/**
 *
 *
 * @export
 * @class WalletApiShortError
 * @extends {ExtendedError}
 */
class WalletApiShortError extends ExtendedError {
    /**
     * Creates an instance of WalletApiShortError.
     * @param {WalletApiShortErrorResponse} response
     * @memberof WalletApiShortError
     */
    constructor(response) {
        super(response.message);
        this.response = response;
        this.code = this.response.code;
    }
}
/**
 *
 *
 * @export
 * @class WalletAuthorizationError
 * @extends {ExtendedError}
 */
class WalletAuthorizationError extends ExtendedError {
    /**
     * Creates an instance of WalletAuthorizationError.
     * @memberof WalletAuthorizationError
     */
    constructor() {
        super("Unauthorized api request");
    }
}
/**
 *
 *
 * @export
 * @param {HttpError} error
 * @return {*}
 */
function mapHttpErrors(error) {
    var _a, _b;
    if (!(error instanceof HttpError))
        return error;
    const response = error.response;
    if (response.statusCode === 401) {
        return new WalletAuthorizationError();
    }
    if ((_a = response.body) === null || _a === void 0 ? void 0 : _a.description) {
        return new WalletApiError(response.body);
    }
    if ((_b = response.body) === null || _b === void 0 ? void 0 : _b.code) {
        return new WalletApiShortError(response.body);
    }
    return error;
}

export { WalletApiError, WalletApiShortError, WalletAuthorizationError, mapHttpErrors };
