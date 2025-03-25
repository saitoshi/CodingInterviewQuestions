/**
 * @name nonrepeatChar
 * @desc For a given string find the legnth of the longest character without repeatition
 * @param str
 * @return maxCount - the longest count without repetition
 */
const nonrepeatChar = (str) => {
  // initialize the current counter
  let currentCounter = 1;
  // initialize the maxCounter
  let maxCounter = 0;
  // split the str into array
  let strAsArray = str.split('');
  // iterate through the array
  for (let i = 1; i < strAsArray.length + 1; i++) {
    // check the previous and current index value
    if (strAsArray[i - 1] !== strAsArray[i]) {
      currentCounter++;
    } else {
      currentCounter = 0;
    }
    if (currentCounter > maxCounter) {
      maxCounter = currentCounter;
    }
    // else reset the current counter
    // if the current counter exceeds the max counter then update the max counter
  }
  return maxCounter;
};

console.log(nonrepeatChar('abccabb'));
