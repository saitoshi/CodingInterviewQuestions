/**
 * @name containerWithWater
 * @desc For an array of positive integer, where each integer represents the height of a vertical line. Return the area of water it would hold.
 * @param arr - Array that contains positive integer
 */
function containerWithWater(arr) {
  // intialize the variables
  let maxArea = 0;
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length + 1; j++) {
      const height = Math.min(arr[i], arr[j]);
      const width = j - i;
      const area = height * width;
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
}
const heightsArray = [7, 1, 2, 3, 9];
const area = containerWithWater(heightsArray);
console.log(area);
