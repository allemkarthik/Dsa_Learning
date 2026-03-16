// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

var reverseastring=function(s,k){
    // step1: convert string into an array
    s=s.split("")

    // step2: loop by 2k times
    for(let i=0;i<s.length;i=i+(2*k)){
        // find mid value for swap chars
        let mid=Math.floor(k/2);
        //step 3: loop through the k values
        for(let j=0; j<mid ;j++){
            // step4 : swap k elements and move ahead by 2k times
            let temp=s[i+j]
            s[i+j]=s[i+k-1-j]
            s[i+k-1-j]=temp
        }
    }
    return s.join("")
}

// time complexity= O(n)
// space = O(n)  because we creating an array
