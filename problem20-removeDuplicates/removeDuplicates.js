/**
 * @name removeDuplicates
 * @desc For a given array sort it and remove any duplicates
 * @param arr - the array in question
 * @return arr - sorted array without any duplicates
 */
const removeDuplicates = (arr) => {
  let sortArr = new Set();
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (!sortArr.has(arr[i])) {
      sortArr.add(arr[i]);
    }
  }
  return Array.from(sortArr);
};

console.log(removeDuplicates(['a', 'bb', 'a']));
