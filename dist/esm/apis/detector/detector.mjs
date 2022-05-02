import { SimpleJsonHttp } from "../../http.mjs";
import { USER_AGENT } from "../../identity.mjs";
import { ApiClass } from "../api.mjs";
import { DetectorDetectApi } from "./detect.api.mjs";
import { formatQuerystring } from "../shared/querystring.mjs";
/**
 * API получения ID провайдера QIWI по Номеру Телефона/Карте
 *
 * @export
 * @class Detector
 */
class Detector extends ApiClass {
  /**
   * Creates an instance of P2p.
   * @param {P2pApiOptions} [options]
   * @memberof P2p
   */
  constructor({ http = Detector.httpClientFactory() } = {}) {
    super({ http });
    this.detectProvider = new Detector.DetectApi(this._options);
  }
  /**
   *
   *
   * @static
   * @return {Detector}  {Detector}
   * @memberof Detector
   */
  static create() {
    return new this({ http: this.httpClientFactory() });
  }
}
Detector.DetectApi = DetectorDetectApi;
/**
 *
 *
 * @static
 * @return {SimpleJsonHttp} {SimpleJsonHttp}
 * @memberof Detector
 */
Detector.httpClientFactory = () => {
  const http = new SimpleJsonHttp();
  http.client.options = {
    ...http.client.options,
    stringifyBody: (body) => formatQuerystring(body),
    baseURL: "https://qiwi.com/",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      "User-Agent": USER_AGENT
    },
    okStatusCodes: [200],
    timeout: 10000
  };
  return http;
};
export { Detector };
