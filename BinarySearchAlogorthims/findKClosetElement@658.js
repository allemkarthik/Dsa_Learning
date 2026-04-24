// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
 

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3

// Output: [1,2,3,4]

// Example 2:

// Input: arr = [1,1,2,3,4,5], k = 4, x = -1

// Output: [1,1,2,3]

var findClosestElements = function(arr, k, x) {
    let l=0;
    let r=arr.length-1;
    while(l<r){
        let m=l+Math.floor((r-l)/2);
        if((arr[m+k]-x) < (x-arr[m])){
            l=m+1
        }else{
            r=m;
        }
    }
    return arr.slice(l,l+k)
};