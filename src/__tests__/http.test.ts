import { randomBytes } from "crypto";
import { FetchError } from "node-fetch";
import { DecodingError, HttpAPI, HttpError } from "../http";
import bodyParser from "body-parser";
import { Application } from "express";
import { createMockServer, MockServer } from "./server";

/**
 *
 */
const api = new (class API extends HttpAPI {
  public API_URL = "";
  API_HEADERS = { "x-special-header": "4" };
})();

describe(HttpAPI.name, () => {
  const methods = ["post", "put", "patch", "delete"] as const;
  let server: MockServer;
  let app: Application;

  beforeAll(async () => {
    server = await createMockServer();

    app = server.app;
    api.API_URL = server.url;
  });

  afterAll(() => server.close());

  for (const methodName of methods) {
    test(HttpAPI.prototype[methodName].name, async () => {
      const url = `/${randomBytes(3).toString("hex")}`;

      const customHeaderName = "x-api-header";
      const customHeaderValue = randomBytes(2).toString("hex");

      const header = new Promise<string>((resolve) => {
        app[methodName](url, bodyParser.json(), (request, response) => {
          response.json(request.body);

          resolve(String(request.headers[customHeaderName]));
        });
      });

      const data = { url };

      const response = await api[methodName](
        url,
        {
          [customHeaderName]: customHeaderValue,
          "Content-Type": "application/json"
        },
        JSON.stringify(data)
      );

      expect(response).toEqual(data);
      expect(await header).toBe(customHeaderValue);
    });
  }

  const head = "head";

  test(head, async () => {
    const url = `/${randomBytes(3).toString("hex")}`;

    const customHeaderName = "x-api-header";
    const customHeaderValue = randomBytes(2).toString("hex");

    const header = new Promise<string>((resolve) => {
      app[head](url, (request, response) => {
        response.writeHead(200, "OK", { "Content-Type": "application/json" });
        response.end("");

        const header = request.headers[customHeaderName];
        resolve(String(header));
      });
    });

    const response = await api[head](url, { [customHeaderName]: customHeaderValue });

    expect(response).toBe(undefined);
    expect(await header).toBe(customHeaderValue);
  });

  const get = "get";

  test("Json Decoding", async () => {
    app[get]("/json", (_request, response) => {
      response.writeHead(200, "OK", { "Content-Type": "application/json" });
      response.end("{}");
    });

    await expect(api[get]("/json")).resolves.toEqual({});
  });

  test("QueryString Decoding", async () => {
    app[get]("/qs", (_request, response) => {
      response.writeHead(200, "OK", {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      });
      response.end("a=b");
    });

    await expect(api[get]("/qs")).resolves.toEqual({ a: "b" });
  });

  test("Binary Decoding", async () => {
    const data = Buffer.from([10, 11, 12]);

    app[get]("/bin", (_request, response) => {
      response.writeHead(200, "OK", { "Content-Type": "application/octet-stream" });
      response.end(data);
    });

    await expect(api[get]("/bin")).resolves.toEqual(data);
  });

  test("Text Decoding", async () => {
    const text = ".a { color: red; }";

    app[get]("/css", (_request, response) => {
      response.writeHead(200, "OK", { "Content-Type": "text/css" });
      response.end(text);
    });

    await expect(api[get]("/css")).resolves.toBe(text);
  });

  test("FetchError", async () => {
    expect(api[get]("http://localhost:3/")).rejects.toThrow(FetchError);
  });

  test("HttpError", async () => {
    try {
      await api[get]("/http-error");
      fail();
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
      expect(JSON.stringify(error)).toContain('"body":');
    }
  });

  test("DecodingError", async () => {
    app[get]("/decoding-error", (_request, response) => {
      response.writeHead(200, "OK", { "Content-Type": "application/json" });
      response.end("aboba");
    });

    await expect(api[get]("/decoding-error")).rejects.toThrow(DecodingError);
  });

  test("response without content type", async () => {
    app[get]("/wo-ct", (_request, response) => {
      response.writeHead(200, "OK", {});
      response.end("aboba");
    });

    await expect(api[get]("/wo-ct")).resolves.toEqual(Buffer.from("aboba"));
  });

  const allMethods = [...methods, get, head] as const;

  for (const method of allMethods) {
    test(`${method} (request without headers)`, async () => {
      const url = `/${randomBytes(3).toString("hex")}`;

      const headers = new Promise<Record<string, string | string[] | undefined>>(
        (resolve) => {
          app[method](url, (request, response) => {
            response.writeHead(200, "OK", { "Content-Type": "text/plain" });
            response.end("");

            resolve(request.headers);
          });
        }
      );

      await api[method](url);

      expect(await headers).toMatchObject(api.API_HEADERS);
    });
  }
});
