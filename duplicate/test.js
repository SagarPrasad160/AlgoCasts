const duplicate = require("./index");

describe("duplicate in an array", () => {
  it("should be a function", () => {
    expect(typeof duplicate).toEqual("function");
  });
  it("should return the duplicate number", () => {
    expect(duplicate([1, 3, 4, 2, 2])).toEqual(2);
    expect(duplicate([3, 1, 3, 4, 2])).toEqual(3);
  });
});
