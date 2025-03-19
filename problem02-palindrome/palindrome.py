'''
@name palindrome 
@input str 
@desc The input string 
'''
def palindrome(str):
    reverseStr = str[::-1]
    if (reverseStr == str):
        return True 
    else:
        return False

print(palindrome('abc'))
print('\n')
print(palindrome('abcba'))