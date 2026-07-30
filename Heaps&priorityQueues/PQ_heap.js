//priority queue implementation using heap data structure

//efficent way to O(logn)

class priorityQueueHeap {
  constructor() {
    this.heap = [];
  }

  //enqueue i.e insertion
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }

  //move element based on heap properties
  heapifyUp() {
    let lastIndex = this.heap.length - 1;
    while (lastIndex > 0) {
      //find parent index of insertion element
      let parentIndex = Math.floor((lastIndex - 1) / 2);

      //compare last value with its parent if greater heapifyup
      if (this.heap[lastIndex].priority > this.heap[parentIndex].priority) {
        this.swap(lastIndex, parentIndex);
        lastIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  //dequeue i.e extraction
  dequeue() {
    if (this.heap.length <= 0) return null;
    const max = this.heap[0];
    const end = this.heap.length - 1;

    //swap first element and last element and remove
    this.swap(0, end);

    this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let firstIndex = 0;
    let length = this.heap.length;

    while (true) {
      //find left and right child and compare largest one and swap
      let left = 2 * firstIndex + 1;
      let right = 2 * firstIndex + 2;
      //consider largest is firstone i.e parent
      let largest = firstIndex;

      if (
        left < length &&
        this.heap[left].priority > this.heap[largest].priority
      ) {
        largest = left;
      }
      if (
        right < length &&
        this.heap[right].priority > this.heap[largest].priority
      ) {
        largest = right;
      }

      //check is largest is changed if not break
      if (largest == firstIndex) break;

      //if changed then swap largest and higher value we got
      this.swap(firstIndex, largest);

      //change next sorting element with largest one
      firstIndex = largest;
    }
  }


  //swap helper function
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

let pq = new priorityQueueHeap();

pq.enqueue("fever", 1);
pq.enqueue("accident", 5);
pq.enqueue("headace", 2);

console.log(pq.dequeue());
