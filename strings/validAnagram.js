// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false


//using built in methods
var validAnagram=function(s,t){
    // step1: convert string into array and sort then join
    let scopy=s.split("").sort().join("")
    let tcopy=s.split("").sort().join("")
    if(scopy==tcopy){
        return true
    }else{
        return false;
    }
}

// without built in methods
var isAnagram = function(s, t) {
    // corner case
    if(s.length!=t.length) return false;
    let map={}

    // add first string characters in map with frequency
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }else{
            map[s[i]]++
        }
    }

    // check second string character in map with first string char if found reduce the count else return false
    for(let j=0;j<t.length;j++){
        if(!map[t[j]] || map[t[j]]<0){
            return false
        }else{
            map[t[j]]--
        }
    }
    return true;
        
};