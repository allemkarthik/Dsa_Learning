// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function(haystack, needle) {
    let n=haystack.length;
    let m=needle.length;
    for(let i=0;i<=n-m;i++){
        let j=0;
        for(j=0;j<m;j++){
            if(haystack[i+j]!==needle[j]){
                break;
            }
        }
        if(j==m){
            return i;
        }
    }
    return -1;
};


// approach using kmp algorithm;
var strStr = function(haystack, needle) {
    // kmp algorithm
    let n=haystack.length;
    let m=needle.length;
    let lps=[0]
    let i=0;
    let j=1;
    // step1 build and lps(length of longest prefix that is also suffix) array
    while(j<m){
        if(needle[i]==needle[j]){
            lps[j]=i+1;
            i++;
            j++;
        }else{
            if(i==0){
                lps[j]=0;
                ++j;
            }else{
                i=lps[i-1];
            }
        }
    }
    // step2: check for string
    i=0;
    j=0;
    while(i<n){
        if(haystack[i]==needle[j]){
            i++;
            j++;
        }else{
            if(j==0){
                i++
            }else{
                j=lps[j-1]
            }
        }
        if(j==m){
            return i-m;
        }
    }
    return -1;
};