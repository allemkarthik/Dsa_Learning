// function fun(num){
//     if(num==0) return;
//     console.log(num)
//     num=num-1
//     fun(num)
// }
// let a=10
// fun(a)

// print n to 1 using recursion
function fun(n){
    if(n==1) return ;
    console.log(n);
    n=n-1
    fun(n)
    
}

fun(100)

// print 1 to n using recursion
function print(num,n){
    if(num>n) return;
    console.log(num);
    num=num+1
    print(num,n)
    
}
print(1,100)