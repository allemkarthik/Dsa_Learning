//  binary search have a constrain that only work on sorted arrays
nums=[0,1,8,45,56,89,100,101,500]
target=101
function search(nums,target){
    let left=0
    let right=nums.length-1
    while(right>=left){
        let middle=Math.floor((left+right)/2)
        if(target==nums[middle]){
            return middle
        }else if(target>nums[middle]){
            left=middle+1
        }else{
            right=middle-1
        }
    }
    return -1
}
console.log(search(nums,target));

