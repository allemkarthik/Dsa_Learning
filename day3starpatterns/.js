/* 
****
****
****
****
*/
n=4
for(i=0;i<n;i++){
    row=""
    for(j=0;j<n;j++){
        row=row+"*"
    }
    console.log(row);
    
}

/* 
*
* *
* * * 
* * * *
* * * * *
*/
n1=5
for(i=1;i<=n1;i++){
    row=""
    for(j=1;j<=i;j++){
        row=row+"*"+" "
    }
    console.log(row);
    
}

/*
1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5

 */
for(i=1;i<=5;i++){
    
    row=""
    for(j=1;j<=i;j++){
        row=row+j+" "
        
    }
    console.log(row);
    
}
for(i=1;i<=5;i++){
    
    row=""
    for(j=1;j<=i;j++){
        row=row+i+" "
        
    }
    console.log(row);
    
}
/*
1 2 3 4 5
1 2 3 4
1 2 3 
1 2
1
 */
console.log("--------------------");

for(i=5;i>=1;i--){
    row=""
    for(j=1;j<=i;j++){
        row=row+j+" "
    
    }
    console.log(row);
    
}
console.log("--------------------");

/*
         *
       * *
     * * *
   * * * *
 * * * * *  
 */
for(i=1;i<=5;i++){
    row=""
    for(sp=1;sp<=5-i;sp++){
        row=row+" "+" "

    }
    for(j=1;j<=i;j++){
        row=row+"*"+" "
    
    }
    console.log(row);
    
}

/*
        1
      1 2
    1 2 3
  1 2 3 4
1 2 3 4 5      

 */
y=5
for(i=1;i<=y;i++){
    row=""
    for(s=1;s<=y-i;s++){
        row=row+" "+" "
    }
    for(j=1;j<=i;j++){
        row=row+j+" "
    }
    console.log(row);
    
}

console.log("--------------------");
/*
1
1 0
1 0 1 
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
 */

for(i=1;i<=5;i++){
    row=0
    toggle=1
    for(j=1;j<=i;j++){
        row=row+toggle+" "
        if(toggle==1){
            toggle=0
        }else{
            toggle=1
        }
    }
    console.log(row);
    
}