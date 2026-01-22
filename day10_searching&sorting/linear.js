// linear search
let arr=[1,5,8,2,8,96]
function linear(arr, target){
    for(i=0;i<=arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}
console.log(linear(arr,100));
