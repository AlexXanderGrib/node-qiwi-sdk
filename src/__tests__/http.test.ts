/* eslint-disable security/detect-object-injection */
import { uint8ArrayToUtf8 } from "../apis/shared/platform/decode";
import { randomBytes } from "crypto";
import express, { Application } from "express";
import { HttpError, SimpleJsonHttp } from "../apis";
import { MockServer, createMockServer } from "./server";

describe("Http", () => {
  let server: MockServer;
  let app: Application;
  let baseURL = "";

  const http = new SimpleJsonHttp();
  const methods = ["post", "put", "patch", "delete"] as const;

  beforeAll(async () => {
    server = await createMockServer();
    app = server.app;
    baseURL = server.url;
    http.client.options.baseURL = baseURL;
  });

  for (const methodName of methods) {
    test(methodName, async () => {
      const url = `/${randomBytes(3).toString("hex")}`;
      const customHeaderName = "x-api-header";
      const customHeaderValue = randomBytes(2).toString("hex");

      http.client.options = {
        ...http.client.options,
        headers: {
          "Content-Type": "application/json",
          [customHeaderName]: customHeaderValue
        }
      };

      const header = new Promise<string>((resolve) => {
        app[methodName](url, express.json(), (request, response) => {
          response.json(request.body);

          resolve(String(request.headers[customHeaderName]));
        });
      });

      const data = { url };

      const response = await http[methodName](url, data);

      expect(response).toEqual(data);
      expect(await header).toBe(customHeaderValue);
    });
  }

  test("Default serialization", async () => {
    app.post("/def", express.raw(), (request, response) => {
      response.end(request.body);
    });

    http.client.options = {
      ...http.client.options,
      stringifyBody: undefined,
      parseResponse: undefined,
      headers: { "Content-Type": "application/octet-stream" }
    };

    const data = randomBytes(9);

    const response = await http.post("/def", data);

    expect(response).toEqual(new Uint8Array(data));
  });

  test("Default serialization", async () => {
    app.get("/broken", (_request, response) => {
      response.end('{"');
    });

    http.client.options = {
      ...http.client.options,
      stringifyBody: undefined,
      parseResponse: (body) => JSON.parse(uint8ArrayToUtf8(body))
    };

    const data = await http.get("/broken");
    expect(data).toEqual(new Uint8Array(Buffer.from('{"')));
  });

  test("Empty response", async () => {
    app.get("/empty", (_request, response) => {
      // 204 = No Content
      response.status(204).end();
    });

    http.client.options = {
      ...http.client.options,
      stringifyBody: undefined,
      parseResponse: undefined,
      okStatusCodes: [200]
    };

    try {
      await http.get("/empty");
      fail("http.get() should have thrown an error");
    } catch (error: any) {
      expect(error).toBeInstanceOf(HttpError);
      expect(error.response.body).toEqual(new Uint8Array());
    }
  });

  afterAll(() => {
    server.close();
  });
});
