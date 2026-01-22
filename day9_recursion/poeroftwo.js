// power of two

function poweroftwo(n){
    if (n==1) return true;
    if (n<1 || n%2!==0) return false;
    return poweroftwo(n/2)
}
console.log(poweroftwo(16));
