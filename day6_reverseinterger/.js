// reverse aa interger
function reverse(num){
    let numcopy=num
    let rev=0
    num=Math.abs(num)
    while(num!=0){
        rem=num%10
        rev=rev*10+rem
        num=Math.floor(num/10)

    }
    return (numcopy<0)? -rev:rev
}
console.log(reverse(123));
