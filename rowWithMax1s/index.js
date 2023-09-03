function rowWithMax1s(arr, n, m) {
  // code here
  let maxRow = -1;
  let max1s = 0;
  for (let i = 0; i < arr.length; i++) {
    let currRow = 0;
    for (const num of arr[i]) {
      if (num === 1) currRow++;
    }
    if (currRow > max1s) {
      max1s = currRow;
      maxRow = i;
    }
  }
  return maxRow;
}
