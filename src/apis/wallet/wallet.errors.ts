import { ExtendedError } from "../../error";
import { HttpError } from "../../http";

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
   * @memberof WalletApiError
   */
  constructor(public readonly response: WalletApiErrorResponse) {
    super(response.userMessage);
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
   * @memberof WalletApiShortError
   */
  constructor(public readonly response: WalletApiShortErrorResponse) {
    super(response.message);
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
export function mapHttpErrors(error: HttpError) {
  if (!(error instanceof HttpError)) return error;
  const response = error.response;

  if (response.statusCode === 401) {
    return new WalletAuthorizationError();
  }

  if (response.body?.description) {
    return new WalletApiError(response.body);
  }

  if (response.body?.code) {
    return new WalletApiShortError(response.body);
  }

  return error;
}
