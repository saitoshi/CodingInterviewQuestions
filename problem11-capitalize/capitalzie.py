'''
@name capitalize 
@desc 
'''
def capitalize(strInput):
    sortArr = list(strInput)
    cleanArr = []
    cleanArr.append(sortArr[0].upper())
    for i in range(1, len(sortArr)):
        if (sortArr[i-1] == ' '):
            cleanArr.append(sortArr[i].upper())
        else:
            cleanArr.append(sortArr[i])
    return ''.join(cleanArr)
    

print(capitalize('a short sentence'))