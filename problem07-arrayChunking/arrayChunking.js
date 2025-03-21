/**
 * @name chunk
 * @param array - the initialized array
 * @param size - the size to divide
 * @desc For a given an array and chunk size, divide the contents of the array into subarrays where each subarray is of length
 */

function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i++) {
    console.log(chunked);
    const last = chunked[chunked.length - 1];
    console.log(last);
    if (!last || last.length === size) {
      chunked.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));
