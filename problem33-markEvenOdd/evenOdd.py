'''
@name evenOddClarification
@desc For a given integer clarify whether it is odd or even 
@param number - The given number to clarify 
@output result - Even or Odd 
'''
def evenOddClarification(number):
    result = "odd"
    if number % 2 == 0:
        result = "even"
    print(result)
    return result
evenOddClarification(10)
evenOddClarification(1)