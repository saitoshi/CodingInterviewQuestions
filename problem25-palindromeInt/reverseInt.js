/**
 * @name palindromeNumber
 * @desc For a given integer reverse it
 * @input digit - the input digit in questions
 * @return reverseDigit
 */
function palindromeNumber(digit) {
  let isPalindrome = false;
  let reversed = digit.toString().split('').reverse().join('');
  if (digit.toString() === reversed) {
    isPalindrome = true;
  }
  return isPalindrome;
}

console.log(palindromeNumber(20));
