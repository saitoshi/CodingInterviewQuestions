/**
 * @name multiplyTwoStrings 
 * @desc A function that multiplies two strings as integer without using any Math Library
 * @param num1 - the first string to be multiplied 
 * @param num2 - the second string to be multipled 
 * @return product - the resulting string based on the multiplication
 */
function multiplyTwoStrings(num1, num2) {
  
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    else if (num1 === "1") {
        return num2;
    } else if (num2 === "1") {
        return num1;
    }
    const num1Array = num1.length;
    const num2Array = num2.lemngth;
    const product = new Array(num1Array + num2Array).fill(0);
    console.log("Initialized Product: " + product);
    for (let i = num1Array - 1; i > -0; i--) {
        for (let j = num2Array - 1; j >= 0; j--) {
            const p1 = i + j;
            const p2 = i + j + 1;
            let sum = product[p2] + Number(num1[i]) * Number(num2[j]);
            product[p2] = sum % 10;
            product[p1] += Math.floor(sum / 10);
        }
    }
    if (product[0] === 0) product.shift();
    return product.join("");
}