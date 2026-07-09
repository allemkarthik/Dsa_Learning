// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3


var kthSmallest = function(root, k) {
    // let ans=[]
    // function traversal(curr){
    //     if(!curr) return
    //     traversal(curr.left)
    //     ans.push(curr.val)
    //     traversal(curr.right)
    // }
    // traversal(root)
    // return ans[k-1]

    // optimized approach
    let ans=null;
    let count=k
    function traversal(curr){
        if(ans) return;
        curr.left && traversal(curr.left)
        --count
        if(count==0){
            ans=curr.val
        }
        curr.right && traversal(curr.right)
    }

    traversal(root)
    return ans;
};