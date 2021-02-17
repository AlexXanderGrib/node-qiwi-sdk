import { Detector } from "../services/detector";

describe("Detector", () => {
  const detect = new Detector();

  test("Phone", async () => {
    // Префикс 7920 принадлежит Мегафону
    const providerId = await detect.getPhoneProvider("79203903479");

    // ID Мегафона у QIWI 3 - https://qiwi.com/payment/form/3
    expect(providerId).toBe(3);
  });

  test("Card Number", async () => {
    // Бин 427666 принадлежит Сберу (VISA)
    const providerId = await detect.getCardProvider("4276662397052545");

    // Переводы VISA по РУ - 1963
    expect(providerId).toBe(1963);
  });
});
