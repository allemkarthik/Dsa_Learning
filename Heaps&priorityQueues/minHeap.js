class minHeap{
    constructor(){
        this.heap=[]
    }
    getLeftChildIndex(i){
        return (2*i)+1;
    }
    getRightChildIndex(i){
        return (2*i)+2
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    
    insert(val){
        this.heap.push(val)
        ///do heapifyup process if do not meet min ppt (parent.val<=child.val)
        let lastnode=this.heap.length-1
        this.heapifyUp(lastnode);
    }
    heapifyUp(i){
        while(i>0){
            let parentIndex=this.getParentIndex(i)

            //check min heap ppt
            if(this.heap[i]<this.heap[parentIndex]){
                //swap values
                [this.heap[i],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[i]]
                i=parentIndex
            }else{
                break;
            }
        }
    }

    extract(){
        //chech if heap is empty
        if(this.heap.length<1) return null;

        //take first value
        let min= this.heap[0]
        let lastIndex=this.heap.length-1;

        //swap first node with last node and then delete last node and maintain heapifyDown
        [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]];
        
        //then pop last element
        this.heap.pop()
        //call heapifyDown process
        this.heapifyDown(0)

        return min;
    }

    //heapifyDown
    heapifyDown(i){
        let left=this.getLeftChildIndex(i);
        let right=this.getRightChildIndex(i);

        let n=this.heap.length
        // consider smallest is (i) i.e parent
        let smallest=i;

        //check parent with left child with parent if parent greater then swap
        if(left<n && this.heap[left]< this.heap[smallest]){
            smallest=left
        }
        //check parent with right child with parent and left(if only left small) if parent or left greater then swap
        if(right<n && this.heap[right]<this.heap[smallest]){
            smallest=right;
        }

        //anytime smallest is changed then swap parent with smallest
        if(smallest!=i){
            [this.heap[smallest],this.heap[i]]=[this.heap[i], this.heap[smallest]];
            //again call heapifydown with smallest
            this.heapifyDown(smallest)
        }

    }
    peek(){
        if(this.heap.length<1) return null;
        return this.heap[0]
    }
    
}
let heap=new minHeap()
heap.insert(5)
heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(1)
console.log(heap.peek());


console.log(heap.extract());
console.log(heap.extract());

console.log(heap);
