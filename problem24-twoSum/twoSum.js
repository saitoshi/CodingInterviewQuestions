/**
 * @name twoSum
 * @desc Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param1 arrs - array of intergers
 * @param2 target - the target that should add uop
 * @return indexes - array of indicating the index
 */
function twoSum(arrs, target) {
  let indexes = [];
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 1; j < arrs.length; j++) {
      if (arrs[i] + arrs[j] === target) {
        indexes.push(i);
        indexes.push(j);
        return indexes;
      }
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
