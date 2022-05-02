import { ExtendedError } from "../../error.mjs";
import { HttpError } from "../../http.mjs";
/**
 *
 *
 * @export
 * @class P2pApiError
 * @extends {ExtendedError}
 */
class P2pApiError extends ExtendedError {
  /**
   * Creates an instance of P2pApiError.
   * @param {P2pApiErrorResponse} response
   * @memberof P2pApiError
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
 * @class P2pAuthorizationError
 * @extends {ExtendedError}
 */
class P2pAuthorizationError extends ExtendedError {
  /**
   * Creates an instance of P2pAuthorizationError.
   * @memberof P2pAuthorizationError
   */
  constructor() {
    super("Unauthorized api request");
  }
}
/**
 *
 *
 * @export
 * @class P2pBillNotificationError
 * @extends {ExtendedError}
 */
class P2pBillNotificationError extends ExtendedError {
  /**
   * Creates an instance of P2pBillNotificationError.
   * @memberof P2pBillNotificationError
   */
  constructor() {
    super("Notification signature mismatch");
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
  var _a;
  if (!(error instanceof HttpError)) return error;
  const response = error.response;
  if (response.statusCode === 401) {
    return new P2pAuthorizationError();
  }
  if ((_a = response.body) === null || _a === void 0 ? void 0 : _a.description) {
    return new P2pApiError(response.body);
  }
  return error;
}
export {
  P2pApiError,
  P2pAuthorizationError,
  P2pBillNotificationError,
  mapHttpErrors
};
