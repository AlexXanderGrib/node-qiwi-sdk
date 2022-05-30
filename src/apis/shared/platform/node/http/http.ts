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
import axios, { AxiosResponse, Method } from "axios";

/**
 *
 *
 * @export
 * @class AxiosHttpClient
 * @extends {OptionsWrapperWithSetter<HttpClientOptions>}
 * @implements {HttpClient}
 */
export class AxiosHttpClient
  extends OptionsWrapperWithSetter<HttpClientOptions>
  implements HttpClient
{
  /**
   *
   *
   * @protected
   * @memberof AxiosHttpClient
   */
  protected readonly _axios = axios.create();

  /**
   *
   *
   * @param {HttpRequestOptions} options
   * @return {Promise<HttpResponse>}
   * @memberof AxiosHttpClient
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
   * @memberof AxiosHttpClient
   */
  protected _mapResponse(
    axiosResponse: AxiosResponse,
    request: HttpRequestOptions
  ): HttpResponse {
    return {
      headers: axiosResponse.headers,
      statusCode: axiosResponse.status,
      body: (request.parseResponse ?? _)(
        axiosResponse.data instanceof ArrayBuffer
          ? new Uint8Array(axiosResponse.data)
          : axiosResponse.data
      ),
      request
    };
  }
}
