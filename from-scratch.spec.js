const {
  isUniqueLinear,
  isUniqueQuadratic,
  mostFrequentLinear,
  mostFrequentLogarithmic,
} = require("./from-scratch");

describe("isUniqueLinear", () => {
  test("returns true for a string with all unique characters", () => {
    expect(isUniqueLinear("abcdef")).toBe(true);
    expect(isUniqueLinear('aaa')).toBe(false)
  });

  test("returns false for a string with repeated characters", () => {
    expect(isUniqueLinear("aabbcc")).toBe(false);
  });
});

describe("isUniqueQuadratic", () => {
  test("returns true for a string with all unique characters", () => {
    expect(isUniqueQuadratic("abcdef")).toBe(true);
  });

  test("returns false for a string with repeated characters", () => {
    expect(isUniqueQuadratic("aabbcc")).toBe(false);
  });
});

describe("mostFrequentLinear", () => {
  test("finds the most frequent element in an array", () => {
    expect(mostFrequentLinear([1, 3, 3, 3, 2, 1])).toBe(3);
  });
});

describe("mostFrequentLogarithmic", () => {
  test("finds the most frequent element in a sorted array", () => {
    expect(mostFrequentLogarithmic([1, 1, 2, 2, 2, 3, 3])).toBe(2);
  });
});
