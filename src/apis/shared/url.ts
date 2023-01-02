import { formatQuerystring } from "./querystring";
import type { AnyRecord } from "./types";

export type URLResult = ((queryParameters?: AnyRecord) => string) & {
  $$isURL: true;
};

/**
 *
 *
 * @export
 * @param {string[]} parts
 * @param {...unknown[]} insertions
 * @return {URLResult}
 */
export function url(
  parts: TemplateStringsArray,
  ...insertions: unknown[]
): URLResult {
  const safeInsertions = insertions.map((value) =>
    encodeURIComponent(String(value))
  );

  let url = "";

  for (const part of parts) {
    url += part;

    const insertion = safeInsertions.shift();
    if (typeof insertion === "string") url += insertion;
  }

  /**
   *
   *
   * @param {AnyRecord} [queryParameters={}]
   * @return {string}  {string}
   */
  function createUrl(queryParameters: AnyRecord = {}): string {
    const querystring = formatQuerystring(queryParameters);

    if (querystring.length > 0) url += `?${querystring}`;

    return url;
  }

  createUrl.toString = () => createUrl();

  return createUrl as URLResult;
}
