// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

var isValidBST = function(root) {
    let ans=false;
    function isBST(curr, lo, hi){
        if(!curr) return true;

        //check 5 !=null and 4(curr.val)<=lo(5) return false
        if(lo!=null && curr.val<=lo){
            return false
        }

        //check hi!=null(5!=null) and 1(curr.val)>=5 return false
        if(hi!=null && curr.val>=hi ){
            return false
        }
        //go left with curr.left and when going leftside pass lo as lo and hi as curr.val (null, 5)
        let left=isBST(curr.left, lo, curr.val)
        //go right with curr.right and while going pass lo as curr.val(5) and hi as null (5, null)
        let right=isBST(curr.right, curr.val, hi)

        //return when both return true
        return left && right
    }
    //assign ans as return value
    ans=isBST(root, null, null)
    return ans;
    
};