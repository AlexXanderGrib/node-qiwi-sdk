import { ApiClass } from "../api";
import { SimpleJsonHttp } from "../shared/http";
import { url } from "../shared/url";
import { formatQuerystring } from "../shared/querystring";
import { USER_AGENT } from "../shared/identity";
import { DetectorDetectApi } from "./detect.api";
import type { DetectorApiOptions } from "./detector.options";

/**
 * API получения ID провайдера QIWI по Номеру Телефона/Карте
 *
 * @export
 * @class Detector
 */
export class Detector extends ApiClass<DetectorApiOptions> {
  static readonly DetectApi = DetectorDetectApi;

  /**
   *
   *
   * @static
   * @return {SimpleJsonHttp} SimpleJsonHttp
   * @memberof Detector
   */
  static httpClientFactory = (): SimpleJsonHttp => {
    const http = new SimpleJsonHttp();

    http.client.options = {
      ...http.client.options,
      stringifyBody: (body) => formatQuerystring(body),
      baseURL: url`https://qiwi.com/`(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent": USER_AGENT
      },
      okStatusCodes: [200],
      timeout: 10_000
    };

    return http;
  };

  /**
   *
   *
   * @static
   * @return {Detector} Detector
   * @memberof Detector
   */
  static create(): Detector {
    return new this({ http: this.httpClientFactory() });
  }

  /**
   * Creates an instance of P2p.
   * @param {P2pApiOptions} [options]
   * @memberof P2p
   */
  constructor({
    http = Detector.httpClientFactory()
  }: Partial<DetectorApiOptions> = {}) {
    super({ http });
  }

  readonly detectProvider = new Detector.DetectApi(this._options);
}
