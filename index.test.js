import calc from "./calc";

describe("calculator tests", () => {
  it("should add 1 and 2", () => {
    calc.press("1");
    calc.press("+");
    calc.press("2");
    calc.press("=");
    const result = calc.getValue();
    expect(result).toEqual("3");
    calc.press("c");
  });
});
