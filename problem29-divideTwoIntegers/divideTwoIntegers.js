/**
 * @name divideTwoIntegers 
 * @desc A function that divides two integers without using any multiplication and divisions 
 * @param dividend - 
 * @param divisor - 
 * @return quotient - The resulting quotient integer
 */
function divideTwoIntegers(dividend, divisor) {
    let sum = 0;
    let counter = 0;
    let negativeFlag = false;
    if (dividend < 0 && divisor > 0) {
        negativeFlag = true;
    } else if (divisor < 0 && dividend > 0) {
        negativeFlag = true;
    }
    if (dividend < 0) {
        dividend = dividend * -1;
    }
    if (divisor < 0) {
        divisor = divisor * -1;
    }
    while (dividend >= sum + divisor) {
        sum = sum + divisor
        console.log("Sum: " + sum)
        counter++;
        console.log("Counter: " + counter)
    }
    if (negativeFlag) {
        counter = counter * -1;
    }
 
    console.log("quotient: " + counter)
    return counter;
}
divideTwoIntegers(-7,3)