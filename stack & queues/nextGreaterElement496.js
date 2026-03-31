// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

var nextGreaterElement = function(nums1, nums2) {
    // intinilize empty stack and map to store values in stack and values with next greater element in map
    let stack=[]
    let ngeMap={}
    // run loop from last
    let n=nums2.length
    // assume that the value of last element will always be -1 sp lets push last vlaue in stack and lastvalue with -1 in map
    stack.push(nums2[n-1])
    ngeMap[nums2[n-1]]=-1
    for(let i=(n-2);i>=0;i--){
        // check nums[n-2] with the top of the stack
        let top=stack[stack.length-1]
        if(nums2[i]<top){
            // if it is less than top then the next greater will be top one
            ngeMap[nums2[i]]=top
        }else{
            // if not less than 
            while(stack.length){
                // again check with top if not then pop 
                if(stack[stack.length-1]<nums2[i]){
                    stack.pop()
                }else{
                    // if less than then make top as next greater element
                    ngeMap[nums2[i]]=stack[stack.length-1];
                    // if found break
                    break
                }
            }
            // in this case where the next greater element was not there in right hand side of it then return -1
            if(stack.length==0){
                ngeMap[nums2[i]]=-1
            }
        }
        // push every element in stack
        stack.push(nums2[i])
    }
    // check every in nums1 with map push in result array and return result
    let res=[]
    for(let i=0;i<nums1.length;i++){
        res.push(ngeMap[nums1[i]])
    }
    return res;
};