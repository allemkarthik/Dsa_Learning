// 680. Valid Palindrome II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

var validPalindrome = function(s) {
    let left=0
    let right=s.length-1
    while(left<right){
        if(s[left]!==s[right]){
            return ispalindrome(s,left+1,right) || ispalindrome(s,left,right-1);
        }
        left++
        right--
    }
    return true
  
};

function ispalindrome(s,l,r){
    while(l<r){
        if(s[l]!==s[r]){
            return false;
            
        }  
        l++
        r--  
    }
    return true
}