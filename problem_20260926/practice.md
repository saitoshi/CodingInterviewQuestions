# 2026-09-26 PRACTICE PROBLEM SET 

A set of practices problem worked on the following date: 2026-09-24. The topics centered around the following;
- SQL
- Python 
- Agile Practitioner 
- System Design 
- AWS 
- JavaScript

## PRACTICE 1 - PYTHON FUNCTION TO FIND GCD and LCM
Create a python function that finds the greatest common denominator and lowest common multiples.

```
def gcd(a, b):
    largeNumber = a;
    smallNumber = b;
    if (b > a):
        largeNumber = b;
        smallNumber = a;
    
    while (b != 0):
        a,b = largeNumber, largeNumber % smallNumber
    return abs(a)
    

def find_lcm(a, b):
    if a == 0 or b == 0:
        return 0
    greatest = max(a,b)
    smallest = min(a,b)
    
    for i in range(greatest, a*b + 1, greatest):
        if i % smallest == 0:
            return i
    return a*b
```