// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 
var checkInclusion = function(s1, s2) {
    // step1: take two hased array and fill with 0
    let hashS=Array(26).fill(0)
    let hashW=Array(26).fill(0)

    // step2: fill hashed array with 1 by window size
    for(let i=0; i<s1.length;i++){
        ++hashS[s1.charCodeAt(i)-97]
        ++hashW[s2.charCodeAt(i)-97]
    }
    
    // step3: take two pointers and i and j i will start at first index and j will start at s1.length that is window size
    let i=0;
    let j=s1.length-1;

    // step 4: move window by right and left it not matched , at end return false
    while(j<s2.length){
        if(isHashSame(hashS,hashW)){
            return true
        }else{
            // if not same move window until it reach at end of s2 array
            //1: move window and update hashed array by decrement side that is i(removeing element in hased array)
            --hashW[s2.charCodeAt(i)-97]
            i++
            j++
            //2: move and update hashed array by increment that is adding element in hashed that is j
            ++hashW[s2.charCodeAt(j)-97]

        }
    }
    return false;
};

// step5: check for valid both hashed array if valid true then false
var isHashSame=function(hashS,hashW){
    for(let i=0;i<26;i++){
        if(hashS[i]!==hashW[i]){
            return false;
        }
    }
    return true
}