const addToArrayForm = require("./index");

describe("addToArrayForm", () => {
  test("Adding 34 to [1,2,3,4]", () => {
    expect(addToArrayForm([1, 2, 3, 4], 34)).toEqual([1, 2, 6, 8]);
  });
  test("Adding 809 to [6]", () => {
    expect(addToArrayForm([6], 809)).toEqual([8, 1, 5]);
  });
});
