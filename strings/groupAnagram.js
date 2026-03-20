// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// approach 1 using built in method sort

var groupAnagram=function(strs){
    let map={}
    for(let i=0 ; i< strs.length;i++){
        let sortedstr=strs[i].split("").sort().join("")
        if(!map[sortedstr]){
            map[sortedstr]=[strs[i]]
        }else{
            map[sortedstr].push(strs[i])
        }
    }
    return [...Object.values(map)]
}


// optimized approach using hashed key
var groupAnagrams = function(strs) {
     //create  a map
     let map={}
     for(let i of strs){
        // create a key
        let freqArr=Array(26).fill(0)
        for(let j of i){
            let index=j.charCodeAt()-'a'.charCodeAt()
            freqArr[index]++
        }
        
        let key=freqArr.join("#")
        if(!map[key]){
            map[key]=[i]
        }else{
            map[key].push(i)
        }
     }
     return Object.values(map)
};