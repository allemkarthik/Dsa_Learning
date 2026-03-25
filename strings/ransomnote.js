// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
    let map={}
    for(let i of magazine){
        if(!map[i]){
            map[i]=1
        }else{
            map[i]++
        }
    }
    for(let i of ransomNote){
        if(!map[i]){
            return false
        }
  // if letter available in ransomnote in map
        map[i]=map[i]-1
    }
    return true  
};