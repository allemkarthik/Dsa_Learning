'''
*****
*****
*****
*****
*****
'''
for i in range(0,5):
    row=""
    for j in range(0,5):
        row=row+"*"+" "
    print(row)

'''
*
* *
* * *
* * * *
* * * * *
'''
for i in range(0,5):
    row=""
    for j in range(0,i+1):
        row=row+"*"+" "
    print(row)

'''
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
'''
for i in range(1,5+1):
    row=""
    for j in range(1,i+1):
        row=row+str(j)+" "
        
    print(row)

'''
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
'''
print("-------------------")
n=5
for i in range(0,n):
    row=""
    for j in range(1,n+1-i):
        row=row+str(j)+" "
    print(row)

print("-------------------")
'''
         *
       * *
     * * *
   * * * *
 * * * * *
 '''
y=5
for i in range(1,y+1):
    row=""
    for s in range(1,y+1-i):
        row=row+" "+" "
    for j in range(1,i+1):
        row=row+"*"+" "
    print(row)

print("-------------------")
'''
        1
      1 2
    1 2 3
  1 2 3 4
1 2 3 4 5      

'''
y=5
for i in range(1,y+1):
    row=""
    for s in range(1,y+1-i):
        row=row+" "+" "
    for j in range(1,i+1):
        row=row+str(j)+" "
    print(row)

