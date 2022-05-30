/* istanbul ignore file */
import { OptionsWrapperWithSetter } from "apis/options-wrapper";
import { collect } from "apis/shared/collect";
import {
  HttpClient,
  HttpClientOptions,
  HttpError,
  HttpRequestOptions,
  HttpResponse
} from "apis/shared/http.types";
import { _ } from "apis/shared/pass";

/**
 *
 *
 * @export
 * @class FetchHttpClient
 * @extends {OptionsWrapperWithSetter<HttpClientOptions>}
 * @implements {HttpClient}
 */
export class FetchHttpClient
  extends OptionsWrapperWithSetter<HttpClientOptions>
  implements HttpClient
{
  /**
   *
   *
   * @param {HttpRequestOptions} options
   * @return {Promise<HttpResponse>}
   * @memberof FetchHttpClient
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
      const abortController = new AbortController();
      let timeout: ReturnType<typeof setTimeout> | undefined;

      if (request.timeout) {
        timeout = setTimeout(() => abortController.abort(), request.timeout);
      }

      const response = await fetch((request.baseURL ?? "") + request.url, {
        headers: request.headers,
        body: request.body ? (request.stringifyBody ?? _)(request.body) : undefined,
        method: request.method,
        signal: abortController.signal
      });

      if (timeout) clearTimeout(timeout);

      const buffer = await response.arrayBuffer();
      const headers: Record<string, string> = {};

      for (const [key, value] of response.headers.entries()) {
        Object.assign(headers, { [key]: value });
      }

      const responseData = {
        body: (request.parseResponse ?? _)(new Uint8Array(buffer)),
        headers,
        statusCode: response.status,
        request: request
      };

      if (!validateStatus(responseData.statusCode)) {
        throw new HttpError(
          "Server responded with invalid status code",
          responseData
        );
      }

      return responseData;
    } catch (error: unknown) {
      if (!(error instanceof HttpError)) throw error;

      if (typeof request.mapHttpErrors !== "function") throw error;

      throw request.mapHttpErrors(error);
    }
  }
}
