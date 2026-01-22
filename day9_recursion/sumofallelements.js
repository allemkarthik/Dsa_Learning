// write a function to return sum of all numbers in array
arr=[5,7,8,5,58,6,5,6]
function sum(n){
    if(n==0) return arr[0]
    return arr[n]+sum(n-1)
}
console.log(sum(arr.length-1));


// sum of odd numbeers
arr2=[5,7,8,5,58,6,5,6]

function sumofodd(n){
    i_odd=arr2[n]%2!=0
    if(n==0){
        if(i_odd){
            return arr2[n]
        }else{
            return 0
        }
    }
    if(i_odd){
        return arr2[n]+sumofodd(n-1)
    }else{
        return 0+sumofodd(n-1)
    }
}
console.log(sumofodd(arr2.length-1));
