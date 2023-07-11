function isPalindrome(num) {
  return num === Number(num.toString().split("").reverse().join(""));
}

//isPalindrome(123);

// Trailing Zeroes in Factorial
function countZeroesFact(num) {
  let res = 0;
  for (let i = 5; i <= num; i = i * 5) {
    res += Math.floor(num / i);
  }
  return res;
}

//countZeroesFact(100);

function gcd(a, b) {
  let min = Math.min(a, b);
  while (min) {
    if (a % min === 0 && b % min === 0) {
      return min;
    }
    min--;
  }
  return min;
}
