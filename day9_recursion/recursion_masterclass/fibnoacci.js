// fibnoacci number is every number is sum of previous two numbers
function fib(n){
    if(n<=1) return n;
    return fib(n-1)+fib(n-2)
}
console.log(fib(10));
