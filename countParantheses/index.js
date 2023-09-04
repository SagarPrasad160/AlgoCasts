function countParentheses(str) {
  // base case for "()"
  if (str.length === 2 && str[0] === "(" && str[1] === ")") {
    return 1;
  } else if (str.length > 2 && str[0] === "(" && str[1] === ")") {
    return 1 + countParentheses(str.slice(2));
  } else if (
    str.length > 2 &&
    str[0] === "(" &&
    str[1] !== ")" &&
    str[str.length - 1] === ")"
  ) {
    return 2 * countParentheses(str.slice(1, str.length - 1));
  }
}

// "()" -> 1
// "()()" -> 1 + 1 -> 2
// "(())" -> 2 * 1 -> 2
// "(()(()))" -> 2 * (1 + 2 * (1)) -> 2 (3) -> 6
// (1 (1))

module.exports = countParentheses;
