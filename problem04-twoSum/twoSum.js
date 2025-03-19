/**
 * @name twoSum
 * @desc For a given int, returns the indicies of two number that sums into the given target
 * @param intArr the given integer array
 * @param target The target value
 * @return the indicies of the two integers that sum up to the
 */
function twoSum(intArr, target) {
  for (let i = 0; i < intArr.length; i++) {
    for (let j = 1; j < intArr.length; j++) {
      if (intArr[i] + intArr[j] === target) {
        return (
          'The two values that sum up to: ' + target + ' is ' + i + ' and ' + j
        );
      }
    }
  }
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
