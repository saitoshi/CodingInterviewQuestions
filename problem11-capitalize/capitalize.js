/**
 * @name capitalize
 * @desc A function that takes in a string and capitalizes the first letter of each word
 * @param str - the string where capitalization is applied
 * @return capitalStr -
 */
function capitalize(str) {
  let sortArr = str.split('');
  let cleanArr = [];
  cleanArr.push(sortArr[0].toUpperCase());
  for (let i = 1; i < sortArr.length; i++) {
    if (sortArr[i - 1] === ' ') {
      cleanArr.push(sortArr[i].toUpperCase());
    } else {
      cleanArr.push(sortArr[i]);
    }
  }
  return cleanArr.join('');
}

capitalize('a short sentence');
