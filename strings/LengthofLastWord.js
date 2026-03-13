// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.
// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// approach 1 using built in function

var lengthOflastWord=function(s){
    // step1: trim empty spaces
    s=s.trim()
    // step2: convert string into array
    s=s.split(" ")

    // step3: return the last element length
    return s[s.length-1].length;
}

// approach 2: without built in function
var lengthofLastWord=function(s){
    // step1: trim empty spaces
    n=s.length-1
    while(n>=0){
        if(s[n]==" "){
            --n
        }else{
            break;
        }
    }
    // step2: count character from end until reach another space
    count=0
    while(n>=0){
        if(s[n]!=" "){
            --n;
            count++
        }else{
            break
        }
    }
    return count;
}

