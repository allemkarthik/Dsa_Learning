// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// approach 1
var trap = function(height) {
    let n=height.length
    // step1: first calculate maximum height of left side contaniner
    let maxL=[]
    maxL[0]= height[0]
    for(let i=1; i<height.length;i++){
        // take maximum between previous and current value
        maxL[i]=Math.max(maxL[i-1],height[i])
    }

    // step2: cal maximum height of right side of the container
    let maxR=[]
    maxR[n-1]= height[n-1]
    for(let i=n-2 ; i>=0;i--){
        maxR[i]=Math.max(height[i],maxR[i+1])
    }

    // step 3: find the sum 
    let sum=0;
    for(let i=0;i<n;i++){
        // take min between two sides of container and sub from current height
        let water= Math.min(maxL[i],maxR[i])-height[i]
        sum=sum+ (water<0 ? 0: water)
    }
    return sum;
};

// appraoch 2 using pointer
 // APPROACH II using two loops
var trap = function(height) {
    let n=height.length
    // step1: first calculate maximum height of left side contaniner
    let maxL=[]
    let maxR=[]
    maxR[n-1]= height[n-1]
    maxL[0]= height[0]
    for(let i=1; i<height.length;i++){
        // take maximum between previous and current value
        maxL[i]=Math.max(maxL[i-1],height[i])
        maxR[n-1-i]=Math.max(height[n-i-1],maxR[n-i])
    } 

    // step 3: find the sum 
    let sum=0;
    for(let i=0;i<n;i++){
        // take min between two sides of container and sub from current height
        let water= Math.min(maxL[i],maxR[i])-height[i]
        sum=sum+ (water<0 ? 0: water)
    }
    return sum;
};