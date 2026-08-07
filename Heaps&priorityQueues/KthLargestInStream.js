// You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

// You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

// Implement the KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
// int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.
 

// Example 1:

// Input:
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

// Output: [null, 4, 5, 5, 8, 8]

// Explanation:

// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3); // return 4
// kthLargest.add(5); // return 5
// kthLargest.add(10); // return 5
// kthLargest.add(9); // return 8
// kthLargest.add(4); // return 8

// Example 2:

// Input:
// ["KthLargest", "add", "add", "add", "add"]
// [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

// Output: [null, 7, 7, 7, 8]

// Explanation:

// KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
// kthLargest.add(2); // return 7
// kthLargest.add(10); // return 7
// kthLargest.add(9); // return 7
// kthLargest.add(9); // return 8
 

var KthLargest = function(k, nums) {
    //create a min pq and add given values
    this.heap=new MinPriorityQueue();
    this.k=k;
    for(let i=0;i<nums.length;i++){
        this.add(nums[i])
    }
    return null;

    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.enqueue(val)
    if(this.heap.size()>this.k){
        this.heap.dequeue()
    }
    return this.heap.front();
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