import { formatQuerystring } from "./querystring";
import type { ReadonlyRecord } from "./types";

type URLResult = (queryParameters?: ReadonlyRecord<string, unknown>) => string;

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

  return function createUrl(queryParameters: Record<string, unknown> = {}): string {
    const querystring = formatQuerystring(queryParameters);

    if (querystring.length > 0) url += `?${querystring}`;

    return url;
  };
}
