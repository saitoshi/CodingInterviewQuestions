### @name quadratic 
### @desc A function that computes the quadratic formula 
### @param a, b, c - the input numbers for the quadractic formula 
### @returns depends on the case but should return real numbers 

def solve_quadratic(a, b, c):
    # 1. check for the numbers 
    root1 = 0
    root2 = 0
    # 2. check for the discriminants 

    if a == 0 and b != 0 and c != 0:
        root1 = -c/b
        print("Root is: " + str(root1))
        return "Output: " + str(root1); 
    elif a == 0 and b == 0 and c == 0:
        print("Infinite Solutions")
        return "Output: Infinite solutions"
    elif a == 0 and b == 0 and c != 0:
        print("Invalid Format")
        return "No solution"
    # 3. the case for real numbers 

    disc = (float(b * b - 4 * a * c));
    print(disc)
    if disc > 0:
        num1 = -b + disc ** 0.5;
        num2 = -b - disc ** 0.5;
        denom = 2 * a; 
        root1 = num1/denom
        root2 = num2/denom
        print("Two Real Roots: " + str(root1) + " , " +  str(root2))
        return (root2, root1)
    # 4. if the disc equals 0 then one real root 
    elif disc == 0:
        print("One Real Root");
        numerator = -b + disc;
        denom = 2 * a;
        root1 = numerator / denom;
        return root1
    else:
        print("No real root");
        return "No real roots"


        
print(quadratic(1,-3,2))
print(quadratic(0,2,-4))
print(quadratic(1,0,1))
print(quadratic(0,0,0))
print(quadratic(0,0,5))
print(quadratic(1,2,1))