// merge sort - divide and conquer algorithm
let arr=[8,4,5,6,9,1,3,6]
function sortarray(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2)
    let left=sortarray(arr.slice(0,mid))
    let right=sortarray(arr.slice(mid))

    return merge(left,right)
};

function merge(left,right){
    let res=[]
    let i=0
    let j=0
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i])
            i++
        }else{
            res.push(right[j])
            j++
        }
    }
    return[...res, ...left.slice(i), ...right.slice(j)]
    
}
console.log(sortarray(arr));