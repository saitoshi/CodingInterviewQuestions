import re 
'''
@name anagrams
@desc Takes in two strings and determines whether they are anagram from one another 
@param stringA 
@param stringB 
@return true or false 
'''
def anagram(stringA, stringB):
    stringA = stringA.replace(" ", "")
    stringA = re.sub('[^0-9a-zA-Z]', '', stringA)
    compareA = sorted(list(stringA))
    print(compareA)
    stringB = stringB.replace(" ", "")
    stringB = re.sub('[^0-9a-zA-Z]', '', stringB)
    compareB = sorted(list(stringB))
    if (compareA == compareB):
        return True
    else:
        return False
print(anagram('rail safety!', 'fairy tales'))
print(anagram('Hi there', 'Bye there'))