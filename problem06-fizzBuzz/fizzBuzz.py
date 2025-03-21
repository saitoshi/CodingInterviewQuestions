'''
@name fizzBuzz 
@param n - the total value to iterate up to 
@desc A program that iterates from 1 to n but if the current value is 
@param n - max integer that iterates up to 
'''
def fizzBuzz(n):
    maxVal = n + 1
    for i in range(1, maxVal):
        if (i % 3 == 0 and i % 5 != 0):
            print("fizz") 
        elif (i % 5 == 0 and i %3 != 0):
            print("buzz")
        elif (i % 3 == 0 and i % 5 ==0): 
            print("fizzbuzz")
        else:
            print(i)
fizzBuzz(12)