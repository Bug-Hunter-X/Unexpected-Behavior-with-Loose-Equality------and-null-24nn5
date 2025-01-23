function foo(x){
  if (x === null) {
    return 0; // corrected
  }
  return x + 1;
}

console.log(foo(null)); // now correct