import { SimpleJsonHttp } from "../../http";
import { ApiClass } from "../api";
import { DetectorDetectApi } from "./detect.api";
import { DetectorApiOptions } from "./detector.options";
/**
 * API получения ID провайдера QIWI по Номеру Телефона/Карте
 *
 * @export
 * @class Detector
 */
export declare class Detector extends ApiClass<DetectorApiOptions> {
    static readonly DetectApi: typeof DetectorDetectApi;
    /**
     *
     *
     * @static
     * @return {SimpleJsonHttp} {SimpleJsonHttp}
     * @memberof Detector
     */
    static httpClientFactory: () => SimpleJsonHttp;
    /**
     *
     *
     * @static
     * @return {Detector}  {Detector}
     * @memberof Detector
     */
    static create(): Detector;
    /**
     * Creates an instance of P2p.
     * @param {P2pApiOptions} [options]
     * @memberof P2p
     */
    constructor({ http }?: Partial<DetectorApiOptions>);
    readonly detectProvider: DetectorDetectApi;
}
