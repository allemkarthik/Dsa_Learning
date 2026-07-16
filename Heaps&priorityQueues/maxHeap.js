class maxHeap{
    constructor(){
        this.heap=[50,30,10,5,6,3]
    }
    getLeftChildIndex(i){
        return (2*i)+1;
    }
    getRightChildIndex(i){
        return (2*i)+1
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    //insertion
    insert(val){
        //insertion will happen at the end and maintain heapifyup
        this.heap.push(val);
        let lastIndex=this.heap.length-1;
        this.heapifyUp(lastIndex)
    }

    //process the heapifyup
    heapifyUp(i){
        while(i>0){
            //get parent of insertion element
            let parentIndex=this.getParentIndex(i)
            //check maxheap property parent >=child
            if(this.heap[i]>this.heap[parentIndex]){
                //swap
                [this.heap[i],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[i]];
                //make i as parentindex
                i=parentIndex
            }else{
                break
            }

        }

    }
    //extraction deletion 
    extract(){
        if(this.heap.length<1) return null;
        //extract will happen at top
        let min=this.heap[0]
        //exhange first and last node and then delete last and maintain heapifydown
        let lastIndex=this.heap.length-1;
        [this.heap[0], this.heap[lastIndex]]=[this.heap[lastIndex], this.heap[0]]
        //pop last element
        this.heap.pop()
        this.heapifyDown(0)
        return min;
    }

    heapifyDown(i){
        let left=this.getLeftChildIndex(i)
        let right=this.getRightChildIndex(i)
        
        let n=this.heap.length

        let largest=i

        //find largest among parent left child and swap i with largest
        if(left<n && this.heap[left]>this.heap[largest]){
            largest=left
        }
        if(right<n && this.heap[right]>this.heap[largest]){
            largest=right
        }

        if(largest!=i){
            //swap
            [this.heap[largest], this.heap[i]]=[this.heap[i], this.heap[largest]]
            this.heapifyDown(largest)
        }
    }

    peek(){
        if(this.heap.length<1) return null;
        return this.heap[0]
    }

}
let heap=new maxHeap()
heap.insert(100)


console.log(heap.extract());

console.log(heap);
