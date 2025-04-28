"""
@name divideTwoIntegers 
@desc A function that divides two integers 
@return quotient 
"""
def divideTwoIntegers(dividend, divisor):
    sum = 0
    counter = 0
    negativeFlag = False
    if (dividend < 0 and divisor > 0):
        negativeFlag = True
    elif (divisor < 0 and dividend > 0):
        negativeFlag = True
    if (dividend < 0):
        dividend = dividend * -1
    if (divisor < 0):
        divisor = divisor * -1
  
    while (dividend >= sum + divisor):
        sum = sum + divisor
        counter = counter + 1
    if (negativeFlag):
        counter = counter * -1
    print(counter)
    return counter
divideTwoIntegers(10,3)