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
                break
            }
        }
    }
    
}
let heap=new minHeap()
heap.insert(5)
heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(1)
console.log(heap);
