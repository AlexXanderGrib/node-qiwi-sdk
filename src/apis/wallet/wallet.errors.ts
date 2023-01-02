/* istanbul ignore file */
import { ExtendedError } from "../error";
import { HttpError } from "../shared/http.types";

export type WalletApiErrorResponse = {
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
export class WalletApiError extends ExtendedError {
  public readonly dateTime = new Date(this.response.dateTime);
  public readonly serviceName = this.response.serviceName;

  /**
   * Creates an instance of WalletApiError.
   * @param {WalletApiErrorResponse} response
   * @param {HttpError} [cause]
   * @memberof WalletApiError
   */
  constructor(public readonly response: WalletApiErrorResponse, cause: HttpError) {
    super(response.userMessage, cause);
  }
}

export type WalletApiShortErrorResponse = {
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
export class WalletApiShortError extends ExtendedError {
  public readonly code = this.response.code;

  /**
   * Creates an instance of WalletApiShortError.
   * @param {WalletApiShortErrorResponse} response
   * @param {HttpError} [cause]
   * @memberof WalletApiShortError
   */
  constructor(
    public readonly response: WalletApiShortErrorResponse,
    cause?: HttpError
  ) {
    super(response.message, cause);
  }
}

/**
 *
 *
 * @export
 * @class WalletAuthorizationError
 * @extends {ExtendedError}
 */
export class WalletAuthorizationError extends ExtendedError {
  /**
   * Creates an instance of WalletAuthorizationError.
   * @memberof WalletAuthorizationError
   */
  constructor(public cause?: HttpError) {
    super("Unauthorized api request", cause);
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
    return new WalletAuthorizationError(error);
  }

  if (response.body?.description) {
    return new WalletApiError(response.body, error);
  }

  if (response.body?.code) {
    return new WalletApiShortError(response.body, error);
  }

  return error;
}
