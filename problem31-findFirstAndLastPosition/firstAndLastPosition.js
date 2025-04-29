/**
 * @name searchRange 
 * @desc For a given array of integers find the starting and ending position of the given target
 * @return Array containing the position of the target interested
 */
function searchRange(arr, target) {
    let found = false;
    let position = [];
    let count = 0;
    while (count < arr.length) {
        if (arr[count] === target ) {
            found = true;
            position.push(count);
        }
        count++;
    }
    if (!found) {
        position.push(-1);
        position.push(-1);
    }
    return position;
}

console.log(searchRange([4,5,6], 6))