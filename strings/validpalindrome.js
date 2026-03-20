// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 
var isPalindrome = function(s) {
    // step1: convert it into lower
    s=s.toLowerCase()
    // step2:  remove non alphanumeric
    filter=""
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filter+=s[i]
        }
    }
    
   let rev=filter.split("").reverse().join("")
   return rev===filter
    
};


var isPalindrome=function(s){
    // convert it into lower case
    s=s.toLowerCase()
    // two pointer approach
    let i=0
    let j=s.length-1

    while(i<j){
        if(!s[i].match(/[a-z0-9]/)){
            i++
        }
        else if(!s[j].match(/[a-z0-9]/)){
            j--
        }
        else if(s[i]==s[j]){
            i++
            j--
        }else{
            return false
        }
    }
    return true;
    
}