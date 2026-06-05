

// 424. Longest Repeating Character Replacement
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

var characterReplacement = function(s, k) {
    // step1: slide the window
    let i=j=0;
    let map={}
    let maxWindow=0;
    map[s[0]]=1;
    while(j<s.length){
        // if window is valid then slide window by right
        if(isValidWindow(map,k)){
            currWs=j-i+1
            maxWindow=Math.max(maxWindow, currWs)
            j++
            map[s[j]]=!map[s[j]]?1:++map[s[j]]
        }else{
            //if not valid window slide window by right
            --map[s[i]]
            i++;
        }
    }
    return maxWindow;
    
};
// step2: check for valid window

var isValidWindow=function(map, k){
    let totalCount=0
    let maxCount=0
    // run loop till 26 beacuse only contain alphabets
    for(let i=0;i<26;i++){
        // find char from number  (i+65=> 0+65= 65(A))
        let char=String.fromCharCode(i+65)
        if(map[char]){
            totalCount=totalCount+map[char]
            maxCount=Math.max(maxCount,map[char])
        }
    }
    return (totalCount-maxCount)<=k

}