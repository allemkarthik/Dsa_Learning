// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
 
var singleNonDuplicate = function(arr) {
    let l=0;
    let r=arr.length-1
    while(l<=r){
        let m=l+Math.floor((r-l)/2)
        // pair exits on left side
        if(arr[m]==arr[m-1]){
            // count leftside array 
            let leftcount=m-1-l
            if(leftcount%2==1){
                // if leftside is odd then move right pointer to middle -2
                r=m-2
            }else{
                // if rightside is odd then move left pointer to middle +1
                l=m+1
            }
        }
        // pair exists on right side
        else if(arr[m]==arr[m+1]){
            // count the leftside array size
            let leftcount=m-l
            if(leftcount%2==1){
                // if leftside is odd then move right pointer to middle -1
                r=m-1
            }else{
                 // if rightside is odd then move left pointer to middle +2
                l=m+2
            }
        }
        // return if middle is single element
        else{
            return arr[m]
        }
    }
};