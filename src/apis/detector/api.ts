import { DetectorApiOptions } from "./detector.options";
/**
 *
 *
 * @export
 * @class DetectorApi
 */
export class DetectorApi {
  /**
   *
   *
   * @readonly
   * @protected
   * @memberof DetectorApi
   */
  protected get http() {
    return this._options.http;
  }

  /**
   * Creates an instance of DetectorApi.
   * @param {DetectorApiOptions} _options
   * @memberof DetectorApi
   */
  constructor(protected readonly _options: DetectorApiOptions) {}
}
