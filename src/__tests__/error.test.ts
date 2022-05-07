import { ExtendedError, ErrorWithCode } from "../apis/error";

describe("Error Classes", () => {
  const message = "Abo ba";

  test(ExtendedError.name, () => {
    const error = new ExtendedError(message);

    expect(error[Symbol.toStringTag]).toContain(ExtendedError.name);
    expect(JSON.stringify(error)).toContain(`"message":"${message}"`);
  });

  test(ErrorWithCode.name, () => {
    const code = "TEST";
    const error = new ErrorWithCode(message, code);

    expect(error.code).toBe("TEST");
    expect(error.toString()).toContain(`CODE=${code}`);
    expect(JSON.stringify(error)).toContain(`"code":"${code}"`);
  });
});
