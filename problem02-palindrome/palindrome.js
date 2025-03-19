/**
 * @name palindrome
 * @desc For a given string, it checks whether the string is a plaindrome or not
 * @param str - The input string
 */
function palindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  if (reversedStr === str) {
    return true;
  }
  return false;
}
