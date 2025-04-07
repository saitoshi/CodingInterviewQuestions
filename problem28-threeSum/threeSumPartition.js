/**
 * @name threeSumPartition
 * @desc Find the sum of the array by partitioning the value for every three index
 * @param arr - the array in question
 * @return The Value Of The Sum
 */
const threeSumPartition = (arr) => {
  let unique = arr.filter(
    (value, index, array) => array.indexOf(value) === index,
  );
  let threeSum = [];
  console.log(unique);
  const partitionCount = Math.floor(unique.length / 3);
  for (let i = 0; i < partitionCount; i++) {
    const startIndex = i * 3;
    const sum =
      unique[startIndex] + unique[startIndex + 1] + unique[startIndex + 2];
    threeSum.push(sum);
  }
  console.log(
    'The sum of ' + unique + ' when dividing by 3 is the following ' + threeSum,
  );
};

threeSumPartition([1, 2, 3, 3, 5, 6, 1]);
