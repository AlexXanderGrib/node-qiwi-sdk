"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = require("../../error.js"),
  http = require("../../http.js");
/**
 *
 *
 * @export
 * @class WalletApiError
 * @extends {ExtendedError}
 */
class WalletApiError extends error.ExtendedError {
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
class WalletApiShortError extends error.ExtendedError {
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
class WalletAuthorizationError extends error.ExtendedError {
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
  if (!(error instanceof http.HttpError)) return error;
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
exports.WalletApiError = WalletApiError;
exports.WalletApiShortError = WalletApiShortError;
exports.WalletAuthorizationError = WalletAuthorizationError;
exports.mapHttpErrors = mapHttpErrors;