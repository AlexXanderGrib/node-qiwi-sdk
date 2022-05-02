"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios"),
  optionsWrapper = require("./options-wrapper.js"),
  collect = require("./apis/shared/collect.js");
const _interopDefaultLegacy = (e) =>
  e && typeof e === "object" && "default" in e ? e["default"] : e;
const axios__default = /*#__PURE__*/ _interopDefaultLegacy(axios);
/**
 *
 *
 * @export
 * @class HttpError
 * @extends {Error}
 */
class HttpError extends Error {
  /**
   * Creates an instance of HttpError.
   * @param {string} message
   * @param {HttpResponse} response
   * @memberof HttpError
   */
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}
/**
 * Identity function
 *
 * @template T
 * @param {T} argument
 * @return {T}
 */
function _(argument) {
  return argument;
}
/**
 *
 *
 * @export
 * @class DefaultHttpClient
 * @implements {HttpClient}
 */
class DefaultHttpClient extends optionsWrapper.OptionsWrapperWithSetter {
  constructor() {
    super(...arguments);
    /**
     *
     *
     * @protected
     * @memberof DefaultHttpClient
     */
    this._axios = axios__default.create();
  }
  /**
   *
   *
   * @param {HttpRequestOptions} options
   * @return {Promise<HttpResponse>}
   * @memberof DefaultHttpClient
   */
  async request(options) {
    var _a;
    const request = {
      ...this.options,
      ...options,
      headers: { ...this.options.headers, ...options.headers }
    };
    const okStatusCodes = new Set(
      request.okStatusCodes ? collect.collect(request.okStatusCodes) : []
    );
    const validateStatus = (status) =>
      okStatusCodes.size === 0 ? true : okStatusCodes.has(status);
    try {
      const axiosResponse = await this._axios
        .request({
          httpAgent: request.agent,
          httpsAgent: request.agent,
          baseURL: request.baseURL,
          timeout: request.timeout,
          url: request.url,
          method: request.method,
          headers: { ...request.headers },
          responseType: "arraybuffer",
          data: request.body
            ? ((_a = request.stringifyBody) !== null && _a !== void 0 ? _a : _)(
                request.body
              )
            : undefined,
          validateStatus
        })
        .catch((error) => {
          if (axios__default.isAxiosError(error) && error.response) {
            throw new HttpError(
              error.message,
              this._mapResponse(error.response, request)
            );
          }
          throw error;
        });
      return this._mapResponse(axiosResponse, request);
    } catch (error) {
      if (!(error instanceof HttpError)) throw error;
      if (typeof request.mapHttpErrors !== "function") throw error;
      throw request.mapHttpErrors(error);
    }
  }
  /**
   *
   *
   * @protected
   * @param {AxiosResponse} axiosResponse
   * @param {HttpRequestOptions} request
   * @return {HttpResponse}  {HttpResponse}
   * @memberof DefaultHttpClient
   */
  _mapResponse(axiosResponse, request) {
    var _a;
    return {
      headers: axiosResponse.headers,
      statusCode: axiosResponse.status,
      body:
        axiosResponse.data !== undefined
          ? ((_a = request.parseResponse) !== null && _a !== void 0 ? _a : _)(
              axiosResponse.data
            )
          : undefined,
      request
    };
  }
}
/**
 *
 *
 * @export
 * @class SimpleJsonHttp
 */
class SimpleJsonHttp {
  /**
   * Creates an instance of SimpleJsonHttp.
   * @param {HttpClient} client
   * @memberof SimpleJsonHttp
   */
  constructor(
    client = new DefaultHttpClient({
      parseResponse: (body) => JSON.parse(body.toString()),
      stringifyBody: (body) => JSON.stringify(body)
    })
  ) {
    this.client = client;
  }
  /**
   *
   *
   * @template T
   * @param {string} url
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async get(url) {
    return await this.simpleRequest("GET", url);
  }
  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [data]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async post(url, data) {
    return await this.simpleRequest("POST", url, data);
  }
  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [data]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async put(url, data) {
    return await this.simpleRequest("PUT", url, data);
  }
  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [data]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async patch(url, data) {
    return await this.simpleRequest("PATCH", url, data);
  }
  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [data]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async delete(url, data) {
    return await this.simpleRequest("DELETE", url, data);
  }
  /**
   *
   * @template T
   * @param {string} method
   * @param {string} url
   * @param {*} [body]
   * @return {Promise<T>} {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async simpleRequest(method, url, body) {
    return await this.request({ method, url, body });
  }
  /**
   *
   * @template T
   * @param {HttpRequestOptions} option
   * @return {Promise<T>} {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async request(option) {
    return await this.client.request(option).then((response) => response.body);
  }
}
exports.DefaultHttpClient = DefaultHttpClient;
exports.HttpError = HttpError;
exports.SimpleJsonHttp = SimpleJsonHttp;
