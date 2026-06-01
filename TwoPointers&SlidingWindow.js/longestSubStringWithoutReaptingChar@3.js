// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

var lengthOfLongestSubstring = function(s) {
    // step1: initilize i, j from start
    let i=j=0;
    //step2: initilize map
    let map={}
    let maxWs=0;
    for(let j=0;j<s.length;j++){
        // check for duplicate in map && if already present and not in window 
        if(map[s[j]]!=undefined && map[s[j]]>=i){
            // move window by duplicate +1
            i=map[s[j]]+1
        }
        // update map current with value with current index
        map[s[j]]=j;
        // cal window size
        let currWs=j-i+1;
        // update max window size
        maxWs=Math.max(currWs, maxWs)
    }
    return maxWs
};