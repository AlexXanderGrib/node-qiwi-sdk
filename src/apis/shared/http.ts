import { uint8ArrayToUtf8 } from "./platform/decode";
import { PlatformHttpClient } from "./platform/http";
import type { URLResult } from "./url";
import type { HttpClient, HttpRequestOptions } from "./http.types";

type ToString = string | URLResult;

/**
 *
 *
 * @export
 * @class SimpleJsonHttp
 */
export class SimpleJsonHttp {
  /**
   * Creates an instance of SimpleJsonHttp.
   * @param {HttpClient} client
   * @memberof SimpleJsonHttp
   */
  constructor(
    public client: HttpClient = new PlatformHttpClient({
      parseResponse: (body) => JSON.parse(uint8ArrayToUtf8(body)),
      stringifyBody: (body) => JSON.stringify(body)
    })
  ) {}

  /**
   *
   *
   * @template T
   * @param {ToString} url
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async get<T>(url: ToString): Promise<T> {
    return await this.simpleRequest("GET", url.toString());
  }

  /**
   *
   *
   * @template T
   * @param {ToString} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async post<T>(url: ToString, body?: any): Promise<T> {
    return await this.simpleRequest("POST", url.toString(), body);
  }

  /**
   *
   *
   * @template T
   * @param {ToString} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async put<T>(url: ToString, body?: any): Promise<T> {
    return await this.simpleRequest("PUT", url.toString(), body);
  }

  /**
   *
   *
   * @template T
   * @param {ToString} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async patch<T>(url: ToString, body?: any): Promise<T> {
    return await this.simpleRequest("PATCH", url.toString(), body);
  }

  /**
   *
   *
   * @template T
   * @param {ToString} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async delete<T>(url: ToString, body?: any): Promise<T> {
    return await this.simpleRequest("DELETE", url.toString(), body);
  }

  /**
   *
   * @template T
   * @param {string} method
   * @param {string} url
   * @param {*} [body]
   * @return {Promise<T>} Promise<T>
   * @memberof SimpleJsonHttp
   */
  async simpleRequest<T>(method: string, url: string, body?: any): Promise<T> {
    return await this.request<T>({ method, url, body });
  }

  /**
   *
   * @template T
   * @param {HttpRequestOptions} option
   * @return {Promise<T>} Promise<T>
   * @memberof SimpleJsonHttp
   */
  async request<T>(option: HttpRequestOptions): Promise<T> {
    return await this.client.request(option).then((response) => response.body);
  }
}
