// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.
 

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
// Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

var maxFreqSum = function(s) {
    // store all values with freq in map
    let map={}
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }else{
            ++map[s[i]]
        }
    }
    // find the vowels and consonent with freq in map
    let vowels=['a','e','i','o','u']
    let maxV=0
    let maxC=0
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            if(map[s[i]]>maxV){
                maxV=map[s[i]]
            }
        }else{
            if(map[s[i]]>maxC){
                maxC=map[s[i]]
            }

        }
    }
    return maxV+maxC
};