// find the second largest in an array
function seclarge(arr){
    if(arr.length<2){
        return "array should have 2 elements"
    }
    firstlargest=-Infinity
    secondlargest=-Infinity
    for(let i of arr){
        if(i>firstlargest ){
            secondlargest=firstlargest
            firstlargest=i
            
        }
        else if(i > secondlargest && i!=firstlargest){
            secondlargest=i
        }
    }
    if(secondlargest===-Infinity){
        console.log("no second largest found");
        
    }else{

        console.log(secondlargest);
    }
    

}
seclarge([10,20,20])
