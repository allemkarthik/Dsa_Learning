// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function(jewels, stones) {

    // using set approach => optimized
    let jset=new Set();
    for(let i=0;i<jewels.length;i++){
        jset.add(jewels[i])
    }
    let count=0
    for(let j=0;j<stones.length;j++){
        if(jset.has(stones[j])){
            count++
        }
    }


    // using builtin
    // for(let i=0;i<stones.length;i++){
    //     if(jewels.includes(stones[i])){
    //         count++
    //     }
    // }

    // using two loops
    // for(let i = 0 ; i<stones.length;i++){
    //    for(let j=0;j<jewels.length;j++){
    //     if(stones[i]==jewels[j]){
    //         count++
    //          break;
    //     }
    //    }
    // }
    return count
    
};