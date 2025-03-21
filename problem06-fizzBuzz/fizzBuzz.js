/**
 * @name fizzBuzz
 * @desc A program that console logs the number *n* but if n is a multiple of 3 print fizz, else if 5 print buzz, if both print fizzbuzz.
 * @param n - integer
 */
function fizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log('fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('buzz');
    } else if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else {
      console.log(i);
    }
  }
}
