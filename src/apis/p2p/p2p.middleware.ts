import type { Request, RequestHandler } from "express";
import type { P2pBillsApi } from "./bills.api";
import { P2pBillNotificationError } from "./p2p.errors";
import type { BillStatusBody, BillStatusNotificationBody } from "./p2p.types";

type Promisify<T> = T extends Promise<any> ? T : Promise<T>;
type AnyCallableFunction = (...parameters: any[]) => unknown;
type PromisifyReturnType<T extends AnyCallableFunction> = Promisify<ReturnType<T>>;
type PromiseWrappedFunction<T extends AnyCallableFunction> = (
  ...parameters: Parameters<T>
) => PromisifyReturnType<T>;

/**
 * @template {AnyCallableFunction} T
 *
 * @param {T} callable
 * @return {PromiseWrappedFunction<T>}
 */
export function promise<T extends AnyCallableFunction>(
  callable: T
): PromiseWrappedFunction<T> {
  return (...parameters: any[]): any => {
    try {
      const result = callable(...parameters);

      if (result instanceof Promise) return result;

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

/**
 *
 *
 * @template T
 * @param {Request} request
 * @return {Promise<T>} Promise<T>
 */
export async function parseJsonRequestBody<T>(request: Request): Promise<T> {
  /* istanbul ignore next */
  if (typeof request.body === "object" && request.body) {
    return request.body;
  }

  return new Promise((resolve, reject) => {
    let body = "";

    request.on("error", (error) => reject(error));
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const data = JSON.parse(body.toString());

      resolve(data);
    });
  });
}

export type BillRequestHandler = RequestHandler<
  Record<string, string>,
  any,
  BillStatusNotificationBody
>;

export type MiddlewareOptions = {
  memo?: boolean;
  memoTime?: number;
};

/* istanbul ignore next */
const skipMiddleware: RequestHandler = (_request, _response, next) => next();

/**
 *
 *
 * @param {(string | string[] | undefined)} value
 * @return {string} string
 */
export function resolveHeaderValue(value?: string | string[] | undefined): string {
  if (!value) return "";

  if (Array.isArray(value)) return resolveHeaderValue(value[0]);

  return value;
}

/**
 *
 *
 * @export
 * @param {P2pBillsApi} bills
 * @param {MiddlewareOptions} [options={}]
 * @param {BillRequestHandler} [handler]
 * @return {BillRequestHandler} BillRequestHandler
 */
export function createP2pNotificationMiddleware(
  bills: P2pBillsApi,

  /* istanbul ignore next */
  options: MiddlewareOptions = {},

  /* istanbul ignore next */
  handler: BillRequestHandler = skipMiddleware
): BillRequestHandler {
  const calls = new Map<string, number>();
  const { memo = true, memoTime = 1000 * 60 * 15 } = options;

  return async function p2pNotificationMiddleware(request, response, next) {
    const notification = await parseJsonRequestBody<BillStatusBody>(request);
    const signature = resolveHeaderValue(request.headers["x-api-signature-sha256"]);

    if (memo && calls.has(signature)) return next();

    const { bill } = notification;

    if (!bills.checkNotificationSignature(signature, notification)) {
      return next(new P2pBillNotificationError(bill));
    }

    request.body = bill;

    /* istanbul ignore next */
    if (!memo) return handler(request, response, next);

    await promise(handler)(request, response, next);
    calls.set(signature, Date.now());

    for (const [signature, time] of calls) {
      /* istanbul ignore next */
      if (Date.now() - memoTime > time) calls.delete(signature);
    }
  };
}
