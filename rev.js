function rev(str) {
  let output = "";
  for (const s of str) {
    output = s + output;
    console.log(output);
  }
  console.log(output);
  return str === output;
}

console.log(rev("apple"));
