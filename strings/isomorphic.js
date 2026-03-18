// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "f11", t = "b23"

// Output: false

// Explanation:

// The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true


var isIsomorhphic=function(s,t){
    // step1: create two maps 
    let smap={}
    let tmap={}

    for(let i=0;i<s.length;i++){
        // check two maps if not present then add
        if(!smap[s[i]] && !tmap[t[i]]){
            smap[s[i]]=t[i]
            tmap[t[i]]=s[i]
        }
        // check two cases if repeated elements are not equal in two maps then return false
        else if(smap[s[i]]!=t[i]  || tmap[t[i]]!=s[i]) {
            return false
        }
    }
    return true;
}