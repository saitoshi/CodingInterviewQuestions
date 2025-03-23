/***
 * @name steps
 * @desc n - the positive number n to print out the *
 */
function steps(n) {
  if (n < 0) {
    console.log('input must be a positive number');
  }
  console.log(n);
  for (let i = 0; i < n; i++) {
    let steps = '';
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        steps += '#';
      } else {
        steps += '';
      }
    }
    console.log(steps);
  }
}

steps(2);
