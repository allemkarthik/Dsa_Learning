var kthSmallest = function(matrix, k) {
    //step1: push all elements in first column in minpq 
    let minPq= new MinPriorityQueue(x=>x.val)
    let n=matrix[0].length
    for(let i=0;i<n;i++){
        minPq.push({val: matrix[i][0], row: i, col: 0})
    }
    
    //one by one find the min value in pq & increase the count
    for(let count=0 ; count<k-1; count++){
        //we will remove the first min value and add corresponding next element
        let {val, row, col}= minPq.pop()
        //add next element in same row if present
        if(col+1<n){
            minPq.push({val: matrix[row][col+1], row: row, col: col+1});
        }
    }

    //the last peek element in  minPq is kth smallest after removed k-1 smallest
    return minPq.pop().val;

};