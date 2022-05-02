'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var querystring = require('querystring');
var http = require('../../http.js');
var identity = require('../../identity.js');
var api = require('../api.js');
var detect_api = require('./detect.api.js');

/**
 * API получения ID провайдера QIWI по Номеру Телефона/Карте
 *
 * @export
 * @class Detector
 */
class Detector extends api.ApiClass {
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
Detector.DetectApi = detect_api.DetectorDetectApi;
/**
 *
 *
 * @static
 * @return {SimpleJsonHttp} {SimpleJsonHttp}
 * @memberof Detector
 */
Detector.httpClientFactory = () => {
    const http$1 = new http.SimpleJsonHttp();
    http$1.client.options = {
        ...http$1.client.options,
        stringifyBody: (body) => querystring.stringify(body),
        baseURL: "https://qiwi.com/",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
            "User-Agent": identity.USER_AGENT
        },
        okStatusCodes: [200],
        timeout: 10000
    };
    return http$1;
};

exports.Detector = Detector;
