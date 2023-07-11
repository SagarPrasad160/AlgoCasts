function digitsSum(n) {
  let sum = 0;
  while (n) {
    const last = n % 10;
    sum += last;
    n = Math.floor(n / 10);
  }
  return sum;
}

function digitsCount(n) {
  let cnt = 0;
  while (n) {
    n = Math.floor(n / 10);
    cnt++;
  }
  return cnt;
}

function digitalRoot(num) {
  while (digitsCount(digitsSum(num)) > 1) {
    num = digitsSum(num);
  }
  return digitsSum(num);
}

digitalRoot(193);
