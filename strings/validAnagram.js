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