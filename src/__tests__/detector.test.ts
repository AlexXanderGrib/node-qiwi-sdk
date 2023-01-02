import { Recipients, DetectorCompat, DetectorError, Detector } from "../apis/index";
import { SAMPLE_CARD, SAMPLE_PHONE } from "./constants";

describe("Detector", () => {
  const detect = new DetectorCompat();

  test("Instantiation", () => {
    expect(new Detector()).toBeInstanceOf(Detector);
    expect(new Detector({})).toBeInstanceOf(Detector);
  });

  test("Phone", async () => {
    // Префикс 7920 принадлежит Мегафону
    const providerId = await detect.getPhoneProvider(SAMPLE_PHONE);

    expect(providerId).toBe(Recipients.MegaFon);
  });

  test("Card", async () => {
    const providerId = await detect.getCardProvider(SAMPLE_CARD);

    expect(providerId).toBe(Recipients.MasterCardRus);
  });

  test("Invalid", async () => {
    try {
      await detect.getPhoneProvider("34985");
      fail("getPhoneProvider() have not thrown an error");
    } catch (error) {
      expect(error).toBeInstanceOf(DetectorError);
    }
  });

  test("[v3] Can be instantiated", () => {
    expect(Detector.create()).toBeInstanceOf(Detector);
    expect(detect).toBeInstanceOf(Detector);
  });
});
