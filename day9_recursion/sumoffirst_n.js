// sum of first n numbers using recursion
function sum(n){
    if (n==0) return 0; //base case
    return n+sum(n-1)


}
n=5
console.log(sum(n));

