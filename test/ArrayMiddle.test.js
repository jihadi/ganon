const { ArrayMiddle } = require("../lib");

describe("ArrayMiddle", () => {
  test("Finds element at Middle in Array according to ordering function", () => {
    expect(ArrayMiddle([1, 2, 3, 4, 5], (a, b) => a > b))
      .toEqual(3);

    expect(ArrayMiddle([3, 2, 5, 4, 1], (a, b) => a > b))
      .toEqual(5);

    expect(ArrayMiddle(["a", "bc", "def"], (a, b) => a.length > b.length))
      .toEqual("bc");
  });

  test("Throws when parameter 1 is not an array", () => {
    expect(() => ArrayMiddle(undefined, (a, b) => a > b)).toThrow();
    expect(() => ArrayMiddle(null, (a, b) => a > b)).toThrow();
    expect(() => ArrayMiddle("array", (a, b) => a > b)).toThrow();
    expect(() => ArrayMiddle({}, (a, b) => a > b)).toThrow();
  });

  test("Throws when parameter 2 is not a function", () => {
    expect(() => ArrayMiddle([1, 2, 3, 4, 5])).toThrow();
    expect(() => ArrayMiddle([1, 2, 3, 4, 5], "function")).toThrow();
    expect(() => ArrayMiddle([1, 2, 3, 4, 5], {})).toThrow();
  });
});
