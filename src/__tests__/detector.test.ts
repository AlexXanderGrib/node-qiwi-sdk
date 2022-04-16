import { Recipients } from "../exports";
import { Detector, DetectorError } from "../services/detector";

describe("Detector", () => {
  const detect = new Detector();

  test("Phone", async () => {
    // Префикс 7920 принадлежит Мегафону
    const providerId = await detect.getPhoneProvider("79203903479");

    expect(providerId).toBe(Recipients.MegaFon);
  });

  test("Invalid", () => {
    const promise = detect.getPhoneProvider("34985");

    expect(promise).rejects.toThrow(DetectorError);
  });
});
