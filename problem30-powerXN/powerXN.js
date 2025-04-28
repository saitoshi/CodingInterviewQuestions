/**
 * @name powerXN
 * @desc A function that takes in two values where one is the base and the power and returns its results
 * @param base - The base number 
 * @param power - the power to raise that base number 
 * @return results 
 */
function powerXN(base, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result = result * base;
        console.log(result)
    }
    return result
}
console.log(powerXN(-2,3))