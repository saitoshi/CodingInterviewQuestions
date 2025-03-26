/**
 * @name bubbleSort
 * @param arr - The array in question that will be sorted
 * @desc Given an array, sort it by using the bubble sort algorithm
 * @return sortArr - The sorted array
 */
function bubbleSort(arr) {
  if (arr.length < 0) {
    return 'The array must be filled!';
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
