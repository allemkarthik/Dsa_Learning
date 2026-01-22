nums=[5,8,1,9,21,2,80,100,6]
function bubble_sort(nums){
    
    for(let i=0; i<nums.length-1;i++){
        let isSwapped=false     //optimization
        for(let j=0;j<nums.length-1-i;j++){
            if(nums[j]>nums[j+1]){
                temp=nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=temp;
                isSwapped=true
            }
        }
        if(!isSwapped) break;
    }
    return nums
}
console.log(bubble_sort(nums));
