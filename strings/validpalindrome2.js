var isPalindrome = function(s) {
    s=s.toLowerCase()
    left=0;
    right=s.length-1;
    while(left<right){
        if(!s[left].match(/[a-z0-9]/)){
            left++
        }
        else if(!s[right].match(/[a-z0-9]/)){
            right--
        }
        else if(s[left]==s[right]){
            left++;
            right--;
        }else{
            return false
        }
    }
    return true

};