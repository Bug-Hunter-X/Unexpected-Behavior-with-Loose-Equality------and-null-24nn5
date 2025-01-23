function foo(x){
  if (x == null) {
    return 0; // this is wrong!
  }
  return x + 1;
}

console.log(foo(null)); // unexpected output