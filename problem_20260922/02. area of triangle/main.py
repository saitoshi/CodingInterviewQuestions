   """
    @name calculate_triangle_area
    @desc A function that calculates the area of a triangle based on the given base and height
    @case if base or height is less than or equal to 0 then return value error 
    @param base - a float or int 
    @param height - a float or int 
    @return the calculated area of the triangle
    """
def calculate_triangle_area(base, height):
    # Your code here
    if base <= 0 or height <= 0:
        raise ValueError("Base and height must be non-negative.")
    else:
        return 0.5 * float(base) * float(height)