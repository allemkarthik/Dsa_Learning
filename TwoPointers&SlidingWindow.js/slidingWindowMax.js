// 239. Sliding Window Maximum
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

var maxSlidingWindow = function(arr, k) {
    //step1: let take empty res, and dequeue
    let res=[]
    let q=[]
    let i=j=0;

    // step2: loop untill it reaches last element
    while(j<arr.length){
        // step2: check queue is not empty  && current element is largerst then pop last elements from queue
        while(q.length && arr[j]>q[q.length-1]){
            // pop values from last if it smaller than current (for maximum number)
            q.pop()
        }
        q.push(arr[j])

        // step3: when j goes more than or equal to windoe size (k) then push maximum value in res
        if(j>=k-1){
            res.push(q[0])

            // element at left side that is arr[i] is larger in window then pop from queue (skip arr[i] if it is larger )
            arr[i]==q[0] && q.shift()
            //move if only j reaches equal or more than k 
            i++

        }
        // always move j pointer
        j++;
    }
    return res;
    
};