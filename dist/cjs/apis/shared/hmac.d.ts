/// <reference types="node" />
import { BinaryLike } from "crypto";
export declare type HmacOptions = {
    algorithm?: string;
    key: BinaryLike;
    data: BinaryLike;
    digest: BinaryLike;
};
/**
 *
 *
 * @export
 * @param {HmacOptions} options
 * @return {boolean}
 */
export declare function compareHmac({ algorithm, data, digest, key }: HmacOptions): boolean;
