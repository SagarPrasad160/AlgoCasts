function addToArrayForm(arr, k) {
  let carry = 0;
  const res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.unshift(((k % 10) + arr[i] + carry) % 10);
    carry = Math.floor(((k % 10) + arr[i] + carry) / 10);
    k = Math.floor(k / 10);
  }
  // append the remaining sum if either or carry or k exists
  while (k || carry) {
    let sum = (k % 10) + carry;
    res.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    k = Math.floor(k / 10);
  }

  return res;
}

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

module.exports = addToArrayForm;
