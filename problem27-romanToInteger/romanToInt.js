/**
 * @name romanToInt
 * @desc A function that takes in an roman numeral and convert it to numerical digit
 * @param romanNum - the roman numeral in question
 * @return intNum - the converted integer
 */
function romanToInt(romanNum) {
  let intNum = 0;
  // Split the roman numeral into a array
  const romanArray = romanNum.split('');
  // iterate through the roman numeral split array
  for (let i = 0; i < romanArray.length; i++) {
    let currentVal = romanArray[i];
    console.log(currentVal);
    if (currentVal == 'I') {
      if (romanArray[i + 1] == 'V') {
        intNum = intNum + 4;
      } else if (romanArray[i + 1] == 'X') {
        intNum = intNum + 9;
      } else {
        intNum = intNum + 1;
      }
    } else if (currentVal == 'V') {
      if (romanArray[i - 1] != 'I') {
        intNum = intNum + 5;
      }
    } else if (currentVal === 'X') {
      if (romanArray[i + 1] == 'L') {
        intNum = intNum + 40;
      } else if (romanArray[i + 1] == 'C') {
        intNum = intNum + 90;
      } else if (romanArray[i - 1] !== 'I') {
        intNum = intNum + 10;
      }
    } else if (currentVal === 'L') {
      if (romanArray[i - 1] !== 'X') {
        intNum = intNum + 50;
      }
    } else if (currentVal === 'C') {
      if (romanArray[i + 1] === 'D') {
        intNum = intNum + 400;
      } else if (romanArray[i + 1] === 'M') {
        intNum = intNum + 900;
      } else if (romanArray[i - 1] !== 'X') {
        intNum = intNum + 100;
      }
    } else if (currentVal === 'D') {
      if (romanArray[i - 1] !== 'C') {
        intNum = intNum + 500;
      }
    } else if (currentVal === 'M') {
      if (romanArray[i - 1] !== 'C') {
        intNum = intNum + 1000;
      }
    }
  }
  console.log(intNum);
  // check the current item
  // convert it to the respective value
  // add it to the converted value
}
romanToInt('MCMXCIV');
