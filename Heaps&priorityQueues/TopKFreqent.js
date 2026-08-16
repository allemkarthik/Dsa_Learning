// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

var topKFrequent = function(arr, k) {
    //step1: create a map store freq of every number
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        if(!map[arr[i]]){
            map[arr[i]]=0;
        }
        ++map[arr[i]]
    }
    //step2: add elemets to MinPriortyQueue and restrict the size to k
    //here we are using minpq beacuse we need to remove smallest freq from an heap
    let pq= new MinPriorityQueue(x=>x.freq)

    for(key in map){
        pq.enqueue({val: key, freq: map[key]})
        if(pq.size()>k){
            pq.dequeue()
        }
    }

    //step3: return remaining k element in pq
    return pq.toArray().map(x=>Number(x.val))
    
};