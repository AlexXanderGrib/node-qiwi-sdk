import { base64ToUint8Array } from "../apis/shared/platform/decode";
import { createHmac, randomBytes } from "crypto";
import { compareHmac, formatOffsetAltLifetimeDate } from "../apis/shared";
import { promise, resolveHeaderValue } from "../apis/p2p/p2p.middleware";
import { getByIndex, getOwnProperty, getOwnPropertyDeep } from "../apis/shared/get";

describe("P2p Internals", () => {
  test("promise()", async () => {
    expect(await promise(() => true)()).toBe(true);
    expect(await promise(async () => true)()).toBe(true);
    expect(
      await promise((): void => {
        throw new Error("aaa");
      })().catch((error) => error.message)
    ).toBe("aaa");

    expect(
      await promise(async () => {
        throw new Error("aaa");
      })().catch((error) => error.message)
    ).toBe("aaa");
  });

  test("resolveHeaderValue()", () => {
    expect(resolveHeaderValue("a")).toBe("a");
    expect(resolveHeaderValue(["a", "b", "c"])).toBe("a");
    expect(resolveHeaderValue()).toBe("");
  });
});

describe("Getters", () => {
  test("getOwnProperty", () => {
    expect(getOwnProperty({}, "__proto__" as never)).toBe(undefined);
    expect(getOwnProperty({ a: 1, b: 2 }, "a")).toBe(1);
  });
  test("getOwnPropertyDeep", () => {
    const object = {
      account: "myAccount",
      comment: "Комментарий",
      commission: undefined,
      date: "2018-05-18T16:05:15+03:00",
      errorCode: "0",
      personId: 79_254_914_194,
      provider: 25_549,
      signFields: "sum.currency,sum.amount,type,account,txnId,commission",
      status: "WAITING",
      sum: { amount: 1.73, currency: 643 },
      total: { amount: 1.73, currency: 643 },
      txnId: "13117338074",
      type: "OUT"
    };

    expect(
      object.signFields.split(",").map((field) => getOwnPropertyDeep(object, field))
    ).toEqual([643, 1.73, "OUT", "myAccount", "13117338074", undefined]);
  });

  test("Compare HMAC", () => {
    const algorithm = "sha512";
    const data = randomBytes(16);
    const key = randomBytes(8);

    const digest = createHmac(algorithm, key).update(data).digest();

    const result = compareHmac({
      algorithm,
      key,
      data,
      digest
    });

    expect(result).toBeTruthy();
  });

  test("formatOffsetAltLifetimeDate()", () => {
    const date = formatOffsetAltLifetimeDate(10);

    // ГГГГ-ММ-ДДTччмм
    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{4}$/);
  });

  test("getByIndex()", () => {
    const array = { length: 3, 0: 1, 1: 3, 2: 5 };

    expect(getByIndex(array, 2)).toBe(5);
  });

  test("base64ToUint8Array()", () => {
    const original = "data";

    expect(
      Buffer.from(
        base64ToUint8Array(Buffer.from(original).toString("base64"))
      ).toString()
    ).toBe(original);
  });
});
