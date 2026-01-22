# // write a function that searches for an element in an array and returns the index
def search(arr,target):
    for i in range(len(arr)):
        if arr[i]==target:
            return i
a=search([1,2,3,4,5], 4)
print(a)
    
    
def find(arr2,tar):
    for index, value in enumerate(arr2):
        if value==tar:
            return index
    return -1
b=search([1,7,8,5,6,9,2],8)
print(b)

# // // write a function that returns the number of negative numbers in an array
def neg(arr3):
    count=0
    for i in arr3:
        if i<0:
            count=count+1
    return count
print(neg([1,-5,9,-10,5,4,-7]))

# / // write a function that returns largest number in an array
def large(arr4):
    largest=0
    for i in arr4:
        if i>=largest:
            largest=i
    return largest
print(large([1,-5,9,-10,5,4,-7]))

# palindrome 

g="mom"
upd=g.replace(" ",'').lower()
rev=upd[::-1]
if rev==upd:
    print("palindrome")
else:
    print("not palindrome")

num=122
org=num
rev=0
while num!=0:
    rev=rev*10+num%10
    num=int(num/10)

if org==rev:
    print("palindrome")
else:
    print("not palindrome")

# find the second largest in array
def seclarge(arr5):
    firstlargest=float('-inf')
    secondlargest=float('-inf')
    for i in arr5:
        if i>firstlargest:
            secondlargest=firstlargest
            firstlargest=i
        elif i>secondlargest and i!=firstlargest:
            secondlargest=i
    print(firstlargest,secondlargest)
seclarge([10,20,20])
