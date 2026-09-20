### @name quadratic 
### @desc A function that computes the quadratic formula 
### @param a, b, c - the input numbers for the quadractic formula 
### @returns depends on the case but should return real numbers 

def quadratic(a,b,c):
    # 1. check for the numbers 

    # 2. check for the discriminants 
    disc = b * b - 4 * a * c;
    # 3. the case for real numbers 
    if disc < 0:
        print("No real roots")
        return "No real roots"
    # 4. 