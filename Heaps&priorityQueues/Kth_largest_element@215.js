// 215. Kth Largest Element in an Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pq= new minPq();
    for(let i=0;i<nums.length;i++){
        pq.enqueue(nums[i])
        if(pq.size()>k){
            pq.dequeue()
        }
    }
    return pq.peek()
};

class minPq{
    constructor(){
        this.heap=[]
    }
    //add element 
    enqueue(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    //call heapifyup & maintain min heap ppt
    heapifyUp(){
        let lastIndex=this.heap.length-1
        while(lastIndex>0){
            //compare lI with its parent
            let pi=Math.floor((lastIndex-1)/2)
            if(this.heap[lastIndex]<this.heap[pi]){
                this.swap(lastIndex,pi)
                lastIndex=pi
            }else{
                break
            }
        }
    }

    //delete value
    dequeue(){
        if(this.heap.length<=0) return null;
        //find first and last then swap then pop and call heapifydown process to maintain minheap ppt
        let min=this.heap[0]
        let end= this.heap.length-1

        this.swap(0,end)
        this.heap.pop()
        this.heapifyDown()
        return min
    }
    heapifyDown(){
        let fi=0;
        let length=this.heap.length
        while(true){
            //find both childs and compare small one and swap
            let left= 2*fi+1;
            let right= 2*fi+2;
            let smallest=fi
            if(left<length && this.heap[left]<this.heap[smallest]){
                smallest=left
            }
             if(right<length && this.heap[right]<this.heap[smallest]){
                smallest=right
            }

            if(smallest == fi ) break;
            //anytime smallest is changed then swap
            this.swap(fi, smallest)
            fi=smallest;

        }
    }
    swap(i,j){
       [this.heap[i], this.heap[j]]=[this.heap[j], this.heap[i]]
    }
    size(){
        return this.heap.length
    }
    peek(){
        return this.heap[0]
    }
}