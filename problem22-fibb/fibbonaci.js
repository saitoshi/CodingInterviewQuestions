/**
 * @name fib
 * @desc A function that takes an integer and returns the sequence of that fibbonaci
 * @return int
 */
function fib(n) {
  let a = 0;
  let b = 1;
  if (n < 0) {
    return a;
  } else if (n == 1) {
    return b;
  }
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
