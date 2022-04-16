import * as QIWI from "..";

describe("Core", () => {
  test("Date formatting", () => {
    const date = QIWI.formatDate(0);

    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}([+-])\d{2}:\d{2}$/);
  });
});
