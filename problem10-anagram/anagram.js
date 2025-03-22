/**
 * @name anagram
 * @desc A function that takes in two strings and determine whether they are anagram from each other
 * @param stringA - the first string it takes for consideration
 * @param stringB - the second string it takes for consideration
 * @return true or false
 */
function anagram(stringA, stringB) {
  // convert all of the stringA to lowercase
  stringA = stringA.replace(/\W/g, '');
  stringA = stringA.replace(/\s/g, '');
  stringB = stringB.replace(/\W/g, '');
  stringB = stringB.replace(/\s/g, '');

  let compareA = stringA.split('').sort().join('');
  let compareB = stringB.split('').sort().join('');
  if (compareA == compareB) {
    console.log('Found Anagram');
    return true;
  }
  console.log('not anagram');
  return false;
  // remove the spaces and characters from stringA
  // convert all of the stringB to lowercase
  // remove the spaces and characters from stringB
  // organize all of stringA to character order
  // organize all of stringB to character order
  // if it is a match then return true
  // otherwise return false
}

anagram('rail safety!', 'fairy tales');
anagram('Hi there', 'Bye there');
