// remove dulipicates from sorted array
// non decreasing order -> duplicates in increasing order (in_place)-> cannot create a new array
// ex: a=[0,0,1,1,1,2,2,3,3,4]-> op:[0,1,2,3,4,-,-,-,-,-]
const nums=[0,0,1,1,1,2,2,3,3,4]
var remove=function(nums){
    let x=0
    for(i=0;i<nums.length;i++){
        if(nums[i]>nums[x]){
            x=x+1
            nums[x]=nums[i]
        }
    }
    for(j=x+1;j<nums.length;j++){
        nums[j]='_'
    }
    return nums
}
console.log(remove(nums));

// remove element
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
nums2 = [0,1,2,2,3,0,4,2], val = 2
var revelement=function(nums2,val){
    let x1=0
    for(let i=0;i<nums2.length;i++){
        if(nums2[i]!==val){
            nums2[x1]=nums2[i]
            x1=x1+1

        }
    }
    return x1
    
}
console.log(revelement(nums2,val));

// reverse a string (in-place)
// Example 1:

s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
var revstring=function(s){
    for(i=0;i<Math.floor(s.length/2);i++){
    temp=s[i]
    s[i]=s[s.length-1-i]
    s[s.length-1-i]=temp
    }
    return s
    

}
console.log(revstring(s));


// merge sorted array
// nums1=[1,2,3,0,0,0] and nums2=[2,5,6]
// op: [1,2,2,3,5,6]
let n1=[1,2,3,0,0,0]
let m=3
let n2=[2,5,6]
let n=3
var merge = function(n1,m,n2,n){
    n1.splice(m,n1.length-m, ...n2) //(start,delete-count,items_to_add)
    n1.sort((a,b)=>a-b)
    return n1
}
console.log(merge(n1,m,n2,n));

// Move Zeroes
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
let nums3=[0,1,0,3,12]
var moveZeroes = function(nums3) {
    let x=0
    for(let i=0;i<nums3.length;i++){
        if(nums3[i]!==0){
            nums3[x]=nums3[i]
            x=x+1
        }
    }
    for(i=x;i<nums3.length;i++){
        nums3[i]=0
        
    }
    
    return nums3;
};
console.log(moveZeroes(nums3));

// Max Consecutive Ones
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
    let count=0
    let maxcount=0
    nums = [1,1,0,1,1,1]
    for(i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++
            maxcount=Math.max(maxcount,count)
        }else{
            count=0
        }
    }return maxcount;
};
console.log(findMaxConsecutiveOnes(nums));


// Missing Number
// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
var missingNumber = function(nums) {
    let n=nums.length
    for(let i=0;i<=n;i++){
        if(!nums.includes(i)){
            return i
        }
    }
};
console.log(missingNumber([0,1]));


// Single Number
// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
var singleNumber = function(nums) {
    let hash={};
    for(let i=0;i<nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]]=1
        }else{
            hash[nums[i]]++
        }
    }
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]==1){
            return nums[i]
        }
    }
};console.log(singleNumber([4,1,2,1,2]));
