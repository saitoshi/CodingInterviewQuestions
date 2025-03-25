/**
 * @name vowelCountAlt
 * @desc A function that counts the "individual" vowels within a given string
 * @param str input string in question
 * @return vowelCount
 */
function vowelCountAlt(str) {
  // lower case the str and convert it into an array
  let strArray = str.toLowerCase().split('');
  // initialize the object to store
  let vowelCounter = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === 'a') {
      vowelCounter['a']++;
    } else if (strArray[i] === 'e') {
      vowelCounter['e']++;
    } else if (strArray[i] === 'i') {
      vowelCounter['i']++;
    } else if (strArray[i] === 'o') {
      vowelCounter['o']++;
    } else if (strArray[i] === 'u') {
      vowelCounter['u']++;
    }
  }
  console.log(vowelCounter);
  return vowelCounter;
}
vowelCountAlt('Hi There Apple!');
