// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

// Example 1:


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:


// Input: root = [4,2,7,1,3], val = 5
// Output: []
 
var searchBST = function(root, val) {
    // let ans=null;
    // //top down approach
    // function traversal(curr){
    //     //present val eqaul to val then return that node
    //     if(curr.val==val){
    //         ans=curr;
    //     }else{
    //         //not equal then go left side if val is smaller than curr.val
    //         if(val<curr.val){
    //             curr.left && traversal(curr.left)
    //         }else{
    //             //traverse right side if val is greater than curr.val
    //             curr.right && traversal(curr.right)
    //         }
    //     }
    // }
    // traversal(root)
    // //return node
    // return ans;

    //bottom up approach
    if(!root) return root;
    if(root.val==val) return root;

    return val<root.val? searchBST(root.left, val) : searchBST(root.right, val);
}; 