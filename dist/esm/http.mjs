import axios from 'axios';
import { collect } from './apis/shared/collect.mjs';
import 'query-string';
import './apis/shared/time.mjs';
import 'uuid';
import 'crypto';

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
    /* istanbul ignore next */
    return argument;
}
/**
 *
 *
 * @export
 * @class DefaultHttpClient
 * @implements {HttpClient}
 */
class DefaultHttpClient {
    /**
     * Creates an instance of DefaultHttpClient.
     * @param {HttpClientOptions} options
     * @memberof DefaultHttpClient
     */
    constructor(options) {
        this.options = options;
        this._axios = axios.create();
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
        const okStatusCodes = new Set(request.okStatusCodes ? collect(request.okStatusCodes) : []);
        const validateStatus = (status) => okStatusCodes.size === 0 ? true : okStatusCodes.has(status);
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
                    ? ((_a = request.stringifyBody) !== null && _a !== void 0 ? _a : _)(request.body)
                    : undefined,
                validateStatus
            })
                .catch((error) => {
                if (axios.isAxiosError(error) && error.response) {
                    throw new HttpError(error.message, this._mapResponse(error.response, request));
                }
                // Тесты не покрывают кривые использования API
                /* istanbul ignore next */
                throw error;
            });
            return this._mapResponse(axiosResponse, request);
        }
        catch (error) {
            if (!(error instanceof HttpError))
                throw error;
            if (typeof request.mapHttpErrors !== "function")
                throw error;
            throw request.mapHttpErrors(error);
        }
    }
    /**
     *
     *
     * @private
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
            body: axiosResponse.data !== undefined
                ? ((_a = request.parseResponse) !== null && _a !== void 0 ? _a : _)(axiosResponse.data)
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
    constructor(client = new DefaultHttpClient({
        parseResponse: (body) => JSON.parse(body.toString()),
        stringifyBody: (body) => JSON.stringify(body)
    })) {
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
        // Метод PATCH не используется в тестах
        /* istanbul ignore next */
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
        // Метод DELETE не используется в тестах
        /* istanbul ignore next */
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

export { DefaultHttpClient, HttpError, SimpleJsonHttp };
