/* istanbul ignore file */
import { ExtendedError } from "../error";
import { HttpError } from "../shared/http.types";
import type { BillStatusNotificationBody } from "./p2p.types";

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
   * @param {HttpError} [cause]
   * @memberof P2pApiError
   */
  constructor(public readonly response: P2pApiErrorResponse, cause?: HttpError) {
    super(response.userMessage, cause);
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
   * @param {HttpError} [cause]
   * @memberof P2pAuthorizationError
   */
  constructor(cause?: HttpError) {
    super("Unauthorized api request", cause);
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
  constructor(public notification: BillStatusNotificationBody) {
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
    return new P2pAuthorizationError(error);
  }

  if (response.body?.description) {
    return new P2pApiError(response.body, error);
  }

  return error;
}
