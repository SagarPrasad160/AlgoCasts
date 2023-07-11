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

  // Computing power in O(logn)
  function power(x, n) {
    if (n === 0) {
      return 1;
    }
    let result = power(x, Math.floor(n / 2));
    result = result * result;
    if (n % 2 === 0) {
      return result;
    } else {
      return result * x;
    }
  }
}
