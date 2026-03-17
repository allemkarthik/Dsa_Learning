// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix=function(str){
    // step1: take a pointer
    let x=0;
    // loop thorugh first str 
    while(x<str[0].length){
        // take first string character to check
        let ch=str[0][x]
        for(let i=1;i<str.length;i++){
            if(ch!=str[i][x] || x==str.length){
                return str[0].substring[0,x]
            }
        }
        x++
    }
    return str[0];
}