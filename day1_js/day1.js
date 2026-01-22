// // create a function to check whether a person is eligilble to vote or not

// function voters(name,age){
//     if(age>=18){
//         return name + " " +"is eligbile for vote"

//     }else{
//         return name + " "+ "not eligible"
//     }

// }
// let voter1=voters("karthilk",20)
// let voter2=voters("kalyan",17)
// console.log(voter1);
// console.log(voter2);


// // write a function that searches for an element in an array and returns the index
// function search(arr,element){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==element){
            
//             console.log(i);
//         }
        
//     }
//     console.log("-1");
    
// }
// search([1,25, 8,72,100],720)

// // write a function that returns the number of negative numbers in an array
// function num(arr2){
//     count=0
//     for(i=0;i<arr2.length;i++){
//         if(arr2[i]<0){
//             count++
//         }

//     }
//     console.log(count);
    
// }
// num([4,5,6,-1,-5])

// // write a function that returns largest number in an array
// function largest(arr3){
//     large= -Infinity
//     for(i=0;i<arr3.length;i++){
//         if(arr3[i]>large){
//             large=arr3[i]
//         }
//     }
//     console.log(large);
    
// }
// largest([-3,-500])








// let arr=[1,3,5,4,2,7]
// target=8
// for( i=0;i<=arr.length;i++){
//     for (j=0;j<=arr.length;i++){
//         if(arr[i]+arr[j]==target){
//             console.log(arr[i],arr[j]);
            
            
            
//         }
        
//     }
    
// }

// palindrome

// let arr="madam"
// rev=""
// for(i=arr.length-1;i>=0;i--){
//     rev=rev+arr[i]
    
// }
// if(rev==arr){
//     console.log(`given string${arr} is palindrome`);
    
// }else{
//     console.log(`given string ${arr} is not palindrome`);
    
// }


// find given number is palindrome

function ispalindrome(num){
    let originalnum=num
    let rev=0
    while(num!=0){
        rev=rev*10+ num%10
        num=Math.floor(num/10)
    }
    return rev==originalnum
}
console.log(ispalindrome(121));

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
