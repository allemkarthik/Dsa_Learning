let arr=[4,1,3,20,7,8]

function heapsort(arr){
    let n= arr.length
    //create a max heap from givenn array
    for(let i=n-1;i>=0;i--){
        heapifyDown(arr, i, n)
    }

    //swap first and lastnode and then sort
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapifyDown(arr, 0, i)
    }
    return arr;
}
function heapifyDown(arr, i, n){
    let left= (2*i)+1
    let right= (2*i)+2;
    let largest=i
    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right;
    }
    if(largest!=i){
        [arr[i], arr[largest]]=[arr[largest],arr[i]]
        heapifyDown(arr, largest, n)
    }
}

console.log(heapsort(arr));
