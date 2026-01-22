// factorial of a number
function fact(n){
    if(n==0) return n
    if(n<=1) return n
    return n*fact(n-1)
}
console.log(fact(5));
