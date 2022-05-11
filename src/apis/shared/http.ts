import axios, { AxiosResponse, Method } from "axios";
import type { Collection, ReadonlyRecord } from "./types";
import { OptionsWrapperWithSetter } from "../options-wrapper";
import { collect } from "./collect";

export type Headers = ReadonlyRecord<string, string>;

export interface HttpClientOptions<Request = any, Response = any> {
  headers?: Headers;
  agent?: any;
  okStatusCodes?: Collection<number>;
  baseURL?: string;
  timeout?: number;

  stringifyBody?: (body: Request) => string | Buffer;
  parseResponse?: (body: Buffer) => Response;
  mapHttpErrors?: (error: HttpError) => Error;
}

export interface HttpRequestOptions<Request = any, Response = any>
  extends Partial<HttpClientOptions<Request, Response>> {
  url: string;
  method: string;
  body?: Request;
}

export interface HttpResponse<Request = any, Response = any> {
  request: HttpRequestOptions<Request, Response>;
  statusCode: number;
  headers: Headers;
  body?: Response;
}

/**
 *
 *
 * @export
 * @class HttpError
 * @extends {Error}
 */
export class HttpError<Rq = any, Rs = any> extends Error {
  /**
   * Creates an instance of HttpError.
   * @param {string} message
   * @param {HttpResponse} response
   * @memberof HttpError
   */
  constructor(message: string, public response: HttpResponse<Rq, Rs>) {
    super(message);
  }
}

export interface HttpClient<Rq = any, Rs = any> {
  options: HttpClientOptions<Rq, Rs>;
  request(options: HttpRequestOptions<Rq, Rs>): Promise<HttpResponse<Rq, Rs>>;
}

/**
 * Identity function
 *
 * @template T
 * @param {T} argument
 * @return {T}
 */
function _<T>(argument: T): T {
  return argument;
}
/**
 *
 *
 * @export
 * @class DefaultHttpClient
 * @implements {HttpClient}
 */
export class DefaultHttpClient
  extends OptionsWrapperWithSetter<HttpClientOptions>
  implements HttpClient
{
  /**
   *
   *
   * @protected
   * @memberof DefaultHttpClient
   */
  protected readonly _axios = axios.create();

  /**
   *
   *
   * @param {HttpRequestOptions} options
   * @return {Promise<HttpResponse>}
   * @memberof DefaultHttpClient
   */
  async request(options: HttpRequestOptions): Promise<HttpResponse> {
    const request = {
      ...this.options,
      ...options,
      headers: { ...this.options.headers, ...options.headers }
    };

    const okStatusCodes = new Set(
      request.okStatusCodes ? collect(request.okStatusCodes) : []
    );

    const validateStatus = (status: number) =>
      okStatusCodes.size === 0 ? true : okStatusCodes.has(status);

    try {
      const axiosResponse = await this._axios
        .request({
          httpAgent: request.agent,
          httpsAgent: request.agent,
          baseURL: request.baseURL,
          timeout: request.timeout,
          url: request.url,
          method: request.method as Method,
          headers: { ...request.headers },
          responseType: "arraybuffer",
          data: request.body
            ? (request.stringifyBody ?? _)(request.body)
            : undefined,
          validateStatus
        })
        .catch((error) => {
          if (axios.isAxiosError(error) && error.response) {
            throw new HttpError(
              error.message,
              this._mapResponse(error.response, request)
            );
          }

          // Выбрасывается если есть ошибки сети
          /* istanbul ignore next */
          throw error;
        });

      return this._mapResponse(axiosResponse, request);
    } catch (error: unknown) {
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
  protected _mapResponse(
    axiosResponse: AxiosResponse,
    request: HttpRequestOptions
  ): HttpResponse {
    return {
      headers: axiosResponse.headers,
      statusCode: axiosResponse.status,
      body: (request.parseResponse ?? _)(axiosResponse.data),
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
export class SimpleJsonHttp {
  /**
   * Creates an instance of SimpleJsonHttp.
   * @param {HttpClient} client
   * @memberof SimpleJsonHttp
   */
  constructor(
    public client: HttpClient = new DefaultHttpClient({
      parseResponse: (body) => JSON.parse(body.toString()),
      stringifyBody: (body) => JSON.stringify(body)
    })
  ) {}

  /**
   *
   *
   * @template T
   * @param {string} url
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async get<T>(url: string): Promise<T> {
    return await this.simpleRequest("GET", url);
  }

  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async post<T>(url: string, body?: any): Promise<T> {
    return await this.simpleRequest("POST", url, body);
  }

  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async put<T>(url: string, body?: any): Promise<T> {
    return await this.simpleRequest("PUT", url, body);
  }

  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async patch<T>(url: string, body?: any): Promise<T> {
    return await this.simpleRequest("PATCH", url, body);
  }

  /**
   *
   *
   * @template T
   * @param {string} url
   * @param {*} [body]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async delete<T>(url: string, body?: any): Promise<T> {
    return await this.simpleRequest("DELETE", url, body);
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
  async simpleRequest<T>(method: string, url: string, body?: any): Promise<T> {
    return await this.request<T>({ method, url, body });
  }

  /**
   *
   * @template T
   * @param {HttpRequestOptions} option
   * @return {Promise<T>} {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async request<T>(option: HttpRequestOptions): Promise<T> {
    return await this.client.request(option).then((response) => response.body);
  }
}
