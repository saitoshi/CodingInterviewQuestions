'''
@name fib 
@desc A function that takes an integer and returns the sequence of the int 
@return int 
'''
def fib(n):
    a = 0
    b = 1
    if n < 0:
        return a
    elif n == 1:
        return b
    for i in range(2,n+1):
        c = a + b 
        a = b
        b = c
    return b
print(fib(10))