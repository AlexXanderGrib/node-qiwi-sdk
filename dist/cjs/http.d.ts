/// <reference types="node" />
import { Collection, ReadonlyRecord } from "./apis/shared";
export declare type Headers = ReadonlyRecord<string, string>;
export interface HttpClientOptions<Rq = any, Rs = any> {
    headers?: Headers;
    agent?: any;
    okStatusCodes?: Collection<number>;
    baseURL?: string;
    timeout?: number;
    stringifyBody?: (body: Rq) => string | Buffer;
    parseResponse?: (body: Buffer) => Rs;
    mapHttpErrors?: (error: HttpError) => Error;
}
export interface HttpRequestOptions<Rq = any, Rs = any> extends Partial<HttpClientOptions<Rq, Rs>> {
    url: string;
    method: string;
    body?: Rq;
}
export interface HttpResponse<Rq = any, Rs = any> {
    request: HttpRequestOptions<Rq, Rs>;
    statusCode: number;
    headers: Headers;
    body?: Rs;
}
/**
 *
 *
 * @export
 * @class HttpError
 * @extends {Error}
 */
export declare class HttpError<Rq = any, Rs = any> extends Error {
    response: HttpResponse<Rq, Rs>;
    /**
     * Creates an instance of HttpError.
     * @param {string} message
     * @param {HttpResponse} response
     * @memberof HttpError
     */
    constructor(message: string, response: HttpResponse<Rq, Rs>);
}
export interface HttpClient<Rq = any, Rs = any> {
    options: HttpClientOptions<Rq, Rs>;
    request(options: HttpRequestOptions<Rq, Rs>): Promise<HttpResponse<Rq, Rs>>;
}
/**
 *
 *
 * @export
 * @class DefaultHttpClient
 * @implements {HttpClient}
 */
export declare class DefaultHttpClient implements HttpClient {
    options: HttpClientOptions;
    private readonly _axios;
    /**
     * Creates an instance of DefaultHttpClient.
     * @param {HttpClientOptions} options
     * @memberof DefaultHttpClient
     */
    constructor(options: HttpClientOptions);
    /**
     *
     *
     * @param {HttpRequestOptions} options
     * @return {Promise<HttpResponse>}
     * @memberof DefaultHttpClient
     */
    request(options: HttpRequestOptions): Promise<HttpResponse>;
    /**
     *
     *
     * @private
     * @param {AxiosResponse} axiosResponse
     * @param {HttpRequestOptions} request
     * @return {HttpResponse}  {HttpResponse}
     * @memberof DefaultHttpClient
     */
    private _mapResponse;
}
/**
 *
 *
 * @export
 * @class SimpleJsonHttp
 */
export declare class SimpleJsonHttp {
    client: HttpClient;
    /**
     * Creates an instance of SimpleJsonHttp.
     * @param {HttpClient} client
     * @memberof SimpleJsonHttp
     */
    constructor(client?: HttpClient);
    /**
     *
     *
     * @template T
     * @param {string} url
     * @return {Promise<T>}
     * @memberof SimpleJsonHttp
     */
    get<T>(url: string): Promise<T>;
    /**
     *
     *
     * @template T
     * @param {string} url
     * @param {*} [data]
     * @return {Promise<T>}
     * @memberof SimpleJsonHttp
     */
    post<T>(url: string, data?: any): Promise<T>;
    /**
     *
     *
     * @template T
     * @param {string} url
     * @param {*} [data]
     * @return {Promise<T>}
     * @memberof SimpleJsonHttp
     */
    put<T>(url: string, data?: any): Promise<T>;
    /**
     *
     *
     * @template T
     * @param {string} url
     * @param {*} [data]
     * @return {Promise<T>}
     * @memberof SimpleJsonHttp
     */
    patch<T>(url: string, data?: any): Promise<T>;
    /**
     *
     *
     * @template T
     * @param {string} url
     * @param {*} [data]
     * @return {Promise<T>}
     * @memberof SimpleJsonHttp
     */
    delete<T>(url: string, data?: any): Promise<T>;
    /**
     *
     * @template T
     * @param {string} method
     * @param {string} url
     * @param {*} [body]
     * @return {Promise<T>} {Promise<T>}
     * @memberof SimpleJsonHttp
     */
    simpleRequest<T>(method: string, url: string, body?: any): Promise<T>;
    /**
     *
     * @template T
     * @param {HttpRequestOptions} option
     * @return {Promise<T>} {Promise<T>}
     * @memberof SimpleJsonHttp
     */
    request<T>(option: HttpRequestOptions): Promise<T>;
}
