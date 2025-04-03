/**
 * @name median
 * @desc A function that takes in two sorted array and returns the median.
 * @param1 nums1 - the first array
 * @param2 nums2 - the second array
 * @return the median point
 */
function median(nums1, nums2) {
  let mergeArray = nums1.concat(nums2);
  mergeArray.sort();
  if (mergeArray.length % 2 === 0) {
    midPoint = Math.floor(mergeArray.length / 2);
    console.log(midPoint);
    midPoint2 = midPoint - 1;
    med = (mergeArray[midPoint] + mergeArray[midPoint2]) / 2;
    return med;
  } else {
    midPoint = Math.floor(mergeArray.length / 2);
    return mergeArray[midPoint];
  }
}

//console.log(median([1, 3], [2]));
console.log(median([1, 2], [3, 4]));
