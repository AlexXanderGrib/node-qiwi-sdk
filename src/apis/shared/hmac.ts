import { BinaryLike, createHmac, timingSafeEqual } from "crypto";

/**
 *
 *
 * @param {BinaryLike} data
 * @return {NodeJS.ArrayBufferView}  {NodeJS.ArrayBufferView}
 */
function parseBinaryAlike(data: BinaryLike) {
  if (typeof data === "string") return Buffer.from(data, "hex");
  /* istanbul ignore next */
  return data;
}

export type HmacOptions = {
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
export function compareHmac({
  algorithm = "sha256",
  data,
  digest,
  key
}: HmacOptions) {
  const hash = createHmac(algorithm, key).update(data).digest();

  return timingSafeEqual(hash, parseBinaryAlike(digest));
}
