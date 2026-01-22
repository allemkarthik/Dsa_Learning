// write a function that returns the count of a digits in a number
function digits(num){
    if(num==0){ //for n =0
        return 1
    }
    //for negative numbers to positive numbers
    num=Math.abs(num)
    let count=0
    while(num!=0){
        num=Math.floor(num/10);
        count++
    }
    return count
}
result=digits(354354)
console.log(result);

