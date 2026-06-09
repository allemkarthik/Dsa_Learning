// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [1,2,4,5,6,7,3,8,9]

// Explanation:



// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

var preorderTraversal = function(root) {
    let ans=[]
    function traversal(curr){
        if(!curr) return;
        ans.push(curr.val)  //pushing root
        traversal(curr.left) // left subtree
        traversal(curr.right) //right subtree
    }
    traversal(root)
    return ans;


    //iterative approach
    if(!root) return []
    let ans=[]
    let stack=[root]
    while(stack.length){
        let curr=stack.pop()
        ans.push(curr.val)
        curr.right && stack.push(curr.right)  //if right exist push right value in stack bcz LIFO
        curr.left && stack.push(curr.left) //if left exist push left value in stack
    }
    return ans;
};