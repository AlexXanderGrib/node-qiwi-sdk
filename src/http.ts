import fetch from "node-fetch";
import querystring from "querystring";
import { ErrorWithCode, ExtendedError } from "./error";

export class HttpError extends ErrorWithCode<number> {
  constructor(public code: number, public body: string) {
    super("API Responded with Error response code", code);
  }

  toJSON() {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack,
      code: this.code,
      body: this.body
    };
  }
}
export class DecodingError extends ExtendedError {}

export class HttpAPI {
  public readonly API_URL: string = "";
  public readonly API_HEADERS: Record<string, string> = {};
  public readonly API_TIMEOUT: number = 10000;
  public readonly API_OK_RESPONSE_CODES: number[] = [200];

  /**
   * Simplified http request function
   *
   * @throws {HttpError} If http error code is not matched valid
   * @throws {DecodingError} If unable to decode response
   *
   * @param {string} url Relative to API url path
   * @param {string} method Http request method
   * @param {Record<string, string>} headers Additional headers to API
   * @param {string?} body Request body
   *
   * @returns {Promise<*>} Decoded response
   */
  protected async request(
    url: string,
    method: string,
    headers: Record<string, string> = {},
    body: string | undefined = undefined
  ): Promise<any> {
    const absoluteUrl =
      url.startsWith("https://") || url.startsWith("http://")
        ? url
        : `${this.API_URL}/${url}`;

    const response = await fetch(absoluteUrl, {
      method,
      headers: { ...this.API_HEADERS, ...headers },
      timeout: this.API_TIMEOUT,
      body
    });

    const contentType = response.headers.get("content-type")?.split(";")[0];

    const responseText = await response.text();

    if (!this.API_OK_RESPONSE_CODES.includes(response.status)) {
      throw new HttpError(response.status, responseText);
    }

    try {
      switch (contentType) {
        case "application/json":
          return JSON.parse(responseText);
        case "application/x-www-urlencoded":
          return querystring.parse(responseText);
        default:
          return responseText;
      }
    } catch (e) {
      throw new DecodingError(e.message);
    }
  }

  protected async get<T>(
    url: string,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request(url, "GET", headers);
  }

  protected async head<T>(
    url: string,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request(url, "HEAD", headers);
  }

  protected async post<T>(
    url: string,
    headers: Record<string, string> = {},
    body: string | undefined = undefined
  ): Promise<T> {
    return this.request(url, "POST", headers, body);
  }

  protected async put<T>(
    url: string,
    headers: Record<string, string> = {},
    body: string | undefined = undefined
  ): Promise<T> {
    return this.request(url, "PUT", headers, body);
  }

  protected async patch<T>(
    url: string,
    headers: Record<string, string> = {},
    body: string | undefined = undefined
  ): Promise<T> {
    return this.request(url, "PATCH", headers, body);
  }

  protected async delete<T>(
    url: string,
    headers: Record<string, string> = {},
    body: string | undefined = undefined
  ): Promise<T> {
    return this.request(url, "DELETE", headers, body);
  }
}
