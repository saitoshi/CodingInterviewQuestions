/**
 * @name vowels
 * @param str - the string in question
 * @descr A function that takes in a string and counts all of the vowles within the given string
 * @return count - the total vowel count
 */
function vowels(str) {
  let vowelCount = 0;
  let inputStrAsArray = str.toLowerCase().split('');

  for (let i = 0; i < inputStrAsArray.length; i++) {
    if (
      inputStrAsArray[i] === 'a' ||
      inputStrAsArray[i] === 'e' ||
      inputStrAsArray[i] === 'i' ||
      inputStrAsArray[i] === 'o' ||
      inputStrAsArray[i] === 'u'
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}
