/**
 * @name intToRoman
 * @desc A function that takes in a digit and converts it to roman numeral
 * @param digit - the number in question
 * @return romanValue - the roman numeral
 */
function intToRoman(digit) {
  let romanArray = [];
  let thousandPlace = Math.floor((digit / 1000) % 10);

  for (let i = 0; i < thousandPlace; i++) {
    romanArray.push('M');
  }
  let hundredsPlace = Math.floor((digit / 100) % 10);

  if (hundredsPlace == 9) {
    romanArray.push('CM');
  } else if (hundredsPlace == 4) {
    romanArray.push('CD');
  } else if (hundredsPlace == 5) {
    romanArray.push('D');
  } else if (hundredsPlace < 4) {
    for (let i = 0; i < hundredsPlace; i++) {
      romanArray.push('C');
    }
  } else if (hundredsPlace > 5 && hundredsPlace < 9) {
    romanArray.push('D');
    for (let i = 5; i < hundredsPlace; i++) {
      romanArray.push('C');
    }
  }
  let tensPlace = Math.floor((digit / 10) % 10);

  if (tensPlace == 4) {
    romanArray.push('XL');
  } else if (tensPlace == 5) {
    romanArray.push('L');
  } else if (tensPlace == 9) {
    romanArray.push('XC');
  } else if (tensPlace > 5 && tensPlace < 9) {
    romanArray.push('L');
    for (let i = 5; i < 9; i++) {
      romanArray.push('X');
    }
  } else {
    for (let i = 0; i < tensPlace; i++) {
      romanArray.push('X');
    }
  }
  let onesPlace = Math.floor(digit % 10);
  if (onesPlace < 4) {
    for (let i = 0; i < onesPlace; i++) {
      romanArray.push('I');
    }
  } else if (onesPlace == 5) {
    romanArray.push('V');
  } else if (onesPlace == 4) {
    romanArray.push('IV');
  } else if (onesPlace == 9) {
    romanArray.push('IX');
  } else if (onesPlace > 5 && onesPlace < 9) {
    romanArray.push('V');
    for (let i = 5; i < onesPlace; i++) {
      romanArray.push('I');
    }
  }
  console.log(romanArray.join(''));
}
intToRoman(3749);
intToRoman(58);
intToRoman(1994);
