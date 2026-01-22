function palindrome(num){
    let num2=num
    if(num==0 || num==1 || num<0){
        return false    }
    
    
    rev=0
    while(num!=0){
        let rem=num%10
        rev=rev*10+rem
        num=Math.floor(num/10)

    }
    if(num2==rev){
        return "is palindrome"
    }else{
        return "not palindrome"
    }
}
console.log(palindrome(-121));
