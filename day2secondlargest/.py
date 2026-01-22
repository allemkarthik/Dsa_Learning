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
