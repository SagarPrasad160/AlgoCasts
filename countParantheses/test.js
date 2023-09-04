const countParentheses = require("./index");

describe("calculate parantheses score", () => {
  it("check for ()", () => {
    expect(countParentheses("()")).toEqual(1);
  });
  it("check for ()()", () => {
    expect(countParentheses("()()")).toEqual(2);
  });
  it("check for (()(()))", () => {
    expect(countParentheses("(()(()))")).toEqual(6);
  });
});
