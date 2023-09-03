function createMatrix(arr, n, m) {
  if (arr.length < m * n) {
    throw Error(
      `Array size is not sufficient to create ${n} rows and ${m} columns matrix`
    );
  }
  const res = [];
  for (let i = 0; i + m <= m * n; i = i + m) {
    const row = [];
    for (let j = i; j < i + m; j++) {
      row.push(arr[j]);
    }
    res.push(row);
  }
  return res;
}
