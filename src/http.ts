import axios, { AxiosResponse, Method } from "axios";
import { Collection, convertCollection, ReadonlyRecord } from "./apis/shared";

export type Headers = ReadonlyRecord<string, string>;

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

export interface HttpRequestOptions<Rq = any, Rs = any>
  extends Partial<HttpClientOptions<Rq, Rs>> {
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
export class DefaultHttpClient implements HttpClient {
  private readonly _axios = axios.create();

  /**
   * Creates an instance of DefaultHttpClient.
   * @param {HttpClientOptions} options
   * @memberof DefaultHttpClient
   */
  constructor(public options: HttpClientOptions) {}

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
      request.okStatusCodes ? convertCollection(request.okStatusCodes) : []
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

          // Тесты не покрывают кривые использования API
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
   * @private
   * @param {AxiosResponse} axiosResponse
   * @param {HttpRequestOptions} request
   * @return {HttpResponse}  {HttpResponse}
   * @memberof DefaultHttpClient
   */
  private _mapResponse(
    axiosResponse: AxiosResponse,
    request: HttpRequestOptions
  ): HttpResponse {
    return {
      headers: axiosResponse.headers,
      statusCode: axiosResponse.status,
      body:
        axiosResponse.data !== undefined
          ? (request.parseResponse ?? _)(axiosResponse.data)
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
   * @param {*} [data]
   * @return {Promise<T>}
   * @memberof SimpleJsonHttp
   */
  async post<T>(url: string, data?: any): Promise<T> {
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
  async put<T>(url: string, data?: any): Promise<T> {
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
  async patch<T>(url: string, data?: any): Promise<T> {
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
  async delete<T>(url: string, data?: any): Promise<T> {
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
