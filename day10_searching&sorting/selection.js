// selection sort : selecting the minimum element and putting it into there place is know as selection sort
nums=[5,8,1,9,21,2,80,100,6]
function selectionSort(nums){
    let n=nums.length
    for(let i=0;i<n-1;i++){
        let min=i
        for(j=i+1;j<n;j++){
            if(nums[j]<nums[min]){
                min=j
            }
        }
        if(min!=i){
            let temp=nums[i]
            nums[i]=nums[min]
            nums[min]=temp
        }
    }
    return nums
}
console.log(selectionSort(nums));
