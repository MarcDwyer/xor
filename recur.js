const unNest = arr => {
  let result = [];
  //   console.log(arr);
  for (const a of arr) {
    if (Array.isArray(a)) {
      result.push(...unNest(a));
    } else {
      result.push(a);
    }
    // Array.isArray(a) ? result.push(...unNest(arr)) : result.push(a);
  }
  return result;
};
const arr1 = [1, [1, 2, [3, 4], 5, 6], 7, [8, 9], 10, 11];

console.log(unNest(arr1));
console.log(arr1.flat(Infinity));
