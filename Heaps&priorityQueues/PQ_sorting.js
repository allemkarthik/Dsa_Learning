// priority queue implementation using sorting

//not efficient sollution because it will take O(n logn) time complexity

class priorityQueueSorting{
    constructor(){
        this.queue=[];
    }

    //add element in queue (enqueue) i.e insertion
    enqueue(value, priority){
        this.queue.push({value, priority});
        this.queue.sort((a,b)=> b.priority-a.priority)  //it will sort in ascending order
    }

    //remove element dequeue i.e extraction

    dequeue(){
       return this.queue.shift()  //return first highest element i.e most priority one
    }

    //return top elemet i.e peek

    peek(){
        return this.queue[0]
    }

    //return empty queue
    isEmpty(){
        return this.queue.length==0;
    }

}

let pq=new priorityQueueSorting();
pq.enqueue("fever",1);
pq.enqueue("accident",5);
pq.enqueue("headace",2);

console.log(pq.dequeue());

