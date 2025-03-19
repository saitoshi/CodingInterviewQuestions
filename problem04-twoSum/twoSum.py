"""
@problem twoSum 
@desc The program should take an array containing numbers and a target digit. Then it should return the possible combination that creates a sum of the target. 
@return The location 
"""
def twoSum(arrList, target):
    results = []
    for i in range(len(arrList) - 1):
        inputA = int(arrList[i])
        inputB = int(arrList[i+1])

        if (inputA + inputB ==target):
            results.append(i)
            results.append(i+1)
            return results

arrList = [3,2,4]
target = 6
print(twoSum(arrList, target))