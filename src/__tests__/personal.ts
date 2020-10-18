import { config } from "dotenv";
import * as QIWI from "..";

jest.setTimeout(30000);

config();

describe("Personal API", () => {
  const qiwi = new QIWI.Personal(process.env.QIWI_TOKEN as string);

  test("Can be initialized", () => expect(qiwi).toBeTruthy());

  test("Can get person profile", async () => {
    const response = await qiwi.getPersonProfile();

    expect(response).toHaveProperty("authInfo");
    expect(response).toHaveProperty("contractInfo");
    expect(response).toHaveProperty("userInfo");
  });

  test("Can get personal limits", async () => {
    const { limits } = await qiwi.getLimits(process.env.QIWI_WALLET as string, [
      QIWI.LimitType.TURNOVER
    ]);

    const [x] = limits.RU;

    expect(x.type).toBe(QIWI.LimitType.TURNOVER);
    expect(x.currency).toBe("RUB");
  });
});
