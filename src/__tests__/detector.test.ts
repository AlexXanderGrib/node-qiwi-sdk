import { Recipients, DetectorCompat, DetectorError, Detector } from "../apis";

describe("Detector", () => {
  const detect = new DetectorCompat();

  test("Phone", async () => {
    // Префикс 7920 принадлежит Мегафону
    const providerId = await detect.getPhoneProvider("79203903479");

    expect(providerId).toBe(Recipients.MegaFon);
  });

  test("Card", async () => {
    const providerId = await detect.getCardProvider("5536913960059463");

    expect(providerId).toBe(Recipients.MasterCardRus);
  });

  test("Invalid", () => {
    const promise = detect.getPhoneProvider("34985");

    expect(promise).rejects.toThrow(DetectorError);
  });

  test("[v3] Can be instantiated", () => {
    expect(Detector.create()).toBeInstanceOf(Detector);
    expect(detect).toBeInstanceOf(Detector);
  });
});
