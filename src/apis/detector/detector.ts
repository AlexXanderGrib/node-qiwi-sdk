import { stringify } from "querystring";
import { SimpleJsonHttp } from "../../http";
import { USER_AGENT } from "../../identity";
import { ApiClass } from "../api";
import { DetectorDetectApi } from "./detect.api";
import { DetectorApiOptions } from "./detector.options";

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
   * @return {SimpleJsonHttp} {SimpleJsonHttp}
   * @memberof Detector
   */
  static httpClientFactory = (): SimpleJsonHttp => {
    const http = new SimpleJsonHttp();

    http.client.options = {
      ...http.client.options,
      stringifyBody: (body) => stringify(body),
      baseURL: "https://qiwi.com/",
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
   * @return {Detector}  {Detector}
   * @memberof Detector
   */
  static create(): Detector {
    return new this({ http: this.httpClientFactory() });
  }

  readonly detectProvider = new Detector.DetectApi(this._options);
}
