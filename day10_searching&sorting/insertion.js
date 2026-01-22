let arr=[7,1,5,12,-10,0,4,3,2]
function insertion(a){
    let n=a.length
    for(i=1;i<n;i++){
        let curr=a[i]
        let prev=i-1
        while(a[prev]>curr && prev>=0){
            a[prev+1]=a[prev]
            prev--
        }
        a[prev+1]=curr
    }
    return arr

}
console.log(insertion(arr));
