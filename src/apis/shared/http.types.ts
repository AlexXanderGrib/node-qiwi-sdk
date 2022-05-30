import type { Collection, ReadonlyRecord } from "./types";

/* istanbul ignore */
export type Headers = ReadonlyRecord<string, string>;

export interface HttpClientOptions<Request = any, Response = any> {
  headers?: Headers;
  agent?: any;
  okStatusCodes?: Collection<number>;
  baseURL?: string;
  timeout?: number;

  stringifyBody?: (body: Request) => string | Uint8Array;
  parseResponse?: (body: Uint8Array) => Response;
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
