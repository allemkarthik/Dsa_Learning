// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function(s, t) {
    // step1: take two pointers
    let i=0;
    let j=0;
    // step 2: run loop till end of "t" elements
    while(j<t.length){
        // step3: check first element in s with t
        if(s[i]===t[j]){ //if both are same move i pointer ahead in s
            i++
        }
        // always move j pointer if either matched nor unmatched
        j++
    }
    // return if i pointer == s elements length that means we found every element in "t" with correct order
    return i===s.length;
    
};