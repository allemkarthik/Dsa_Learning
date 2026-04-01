// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0


var dailyTemp=function(arr){
    // initilaze stack
    let stack=[]
    let n=arr.length
    let res=Array(n).fill(0)
    // push last value index in stack
    stack.push(n-1)
    // fill last value with o in result
    res[n-1]=0;

    // run a loop from last but one element
    for(let i=(n-2);i>=0;i--){
        // check and run if stack not empty
        while(stack.length){
            let top=stack[stack.length-1]
            if(arr[i]>=arr[top]){
                // if arr[i] 76 > 73 yes then pop 73 from stack
                stack.pop()
            }else{
                // else arr[i] 72 > 76  no then add 5-6=1 in ans
                res[i]=top-i
                break;
            }
        }
        // if stack is empty then there is no element to pop then return i index with 0 answer[i] == 0
        if(!stack.length){
            res[i]=0
        }
        // push every element in stack
        stack.push(i)
    }

    // return the last element
    return res;
}