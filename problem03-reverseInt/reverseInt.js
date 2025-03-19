/**
 * @name reverseInt
 * @desc A function that reverses an integer
 * @return
 */
function reverseInt(n) {
  // convert the input integer into a string
  const intInput = n.toString();
  // reverse the string
  const reverseStr = intInput.split('').reverse().join('');

  // convert the string into integer
  const reverseDigit = parseInt(reverseStr);
  if (n < 0) {
    return reverseDigit * -1;
  }

  // return the integer
  return reverseDigit;
}
