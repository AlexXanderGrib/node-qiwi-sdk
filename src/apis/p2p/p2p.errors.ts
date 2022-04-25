/* istanbul ignore file */
import { ExtendedError } from "../../error";
import { HttpError } from "../../http";

export type P2pApiErrorResponse = {
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
export class P2pApiError extends ExtendedError {
  public readonly dateTime = new Date(this.response.dateTime);
  public readonly serviceName = this.response.serviceName;

  /**
   * Creates an instance of P2pApiError.
   * @param {P2pApiErrorResponse} response
   * @memberof P2pApiError
   */
  constructor(public readonly response: P2pApiErrorResponse) {
    super(response.userMessage);
  }
}

/**
 *
 *
 * @export
 * @class P2pAuthorizationError
 * @extends {ExtendedError}
 */
export class P2pAuthorizationError extends ExtendedError {
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
export class P2pBillNotificationError extends ExtendedError {
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
export function mapHttpErrors(error: HttpError) {
  if (!(error instanceof HttpError)) return error;
  const response = error.response;

  if (response.statusCode === 401) {
    return new P2pAuthorizationError();
  }

  if (response.body?.description) {
    return new P2pApiError(response.body);
  }

  return error;
}
