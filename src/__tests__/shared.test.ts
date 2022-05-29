import { createHmac, randomBytes } from "crypto";
import { compareHmac } from "../apis";
import { promise, resolveHeaderValue } from "../apis/p2p/p2p.middleware";
import { getOwnProperty, getOwnPropertyDeep } from "../apis/shared/get";

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
});
