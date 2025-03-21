'''
@name containerWithWater 
@desc For an array of positive integer, where each integer represents the height of a vertical line. Return the area of water it would hold.
@param arr - Array that contains positive integers 
@return maxArea - The max area that can be calculated 
'''
def containerWithWater(arr):
    maxArea = 0
    for i in range(len(arr)):
        for j in range(1, len(arr)):
            height = min(int(arr[i]), int(arr[j]))
            width = j - i 
            area = height * width
            if (area > maxArea):
                maxArea = area
    return maxArea 
heightsArray = [7, 1, 2, 3, 9]
print(containerWithWater(heightsArray))