/**
 * @name letterCombinations 
 * @desc For a given string containing digits from 2-9 return all the possible letter combinations that the number could represent
 * @param digits - A string variable containing the digits 
 * @return result 
 */
function letterCombinations(digits) {
    // split the digits 
    // iterate through the digits
    // if digits are empty or 1 skip 
    let results = [];
    let digitArray = digits.split("");
    console.log(digitArray);
    for (let i = 0; i < digitArray.length; i++) {
        for (let j = 0; j < results.length + 1; j++) {
            if (digitArray[i] === "2")
        }
    }
}
letterCombinations("23");