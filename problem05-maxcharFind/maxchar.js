/**
 *
 * @param {*} str
 */
function maxChar(str) {
  // initializes all of the necessary variables
  const charMap = {};
  let maxChar = '';
  let max = 0;
  // go through the character of the str
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // if the character is available in the list then add it to the list
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  // otherwise initialize that particular count of the letter
  // go through the list
  return maxChar;
}
