/**
 * @name intToRoman
 * @desc A function that takes in a digit and converts it to roman numeral
 * @param digit - the number in question
 * @return romanValue - the roman numeral
 */
function intToRoman(digit) {
  let romanArray = [];
  let thousandPlace = digit % 1000;
  for (let i = 0; i < thousandPlace; i++) {
    romanArray.push('M');
  }
  let hundredsPlace = digit % 100;
  if (hundredsPlace < 4) {
  }
}
