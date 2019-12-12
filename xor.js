function missing(arr1, arr2) {
  return arr1.filter(i => arr2.indexOf(i) === -1)[0];
}
function miss2(arr1, arr2) {
  let xor = 0;

  for (const a of arr1) {
    xor ^= a;
    console.log({ a: xor, int: a });
  }
  for (const b of arr2) {
    xor ^= b;
    console.log({ b: xor });
  }
  return xor;
}
const ar = [4, 12, 9, 5, 6],
  arr = [4, 12, 9, 6];

// console.log(missing(ar, arr));
console.log(miss2(ar, arr));
