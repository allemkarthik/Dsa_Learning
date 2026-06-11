// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [3,2,1]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [4,6,7,5,2,9,8,3,1]

// Explanation:



// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// // Output: [1]
var postorderTraversal = function(root) {
    let res=[]
    function t(curr){
        if(!curr) return;
        t(curr.left)  //left subtree
        t(curr.right)  //right subtree
        res.push(curr.val) //push root
    }

    t(root)
    return res;

    // iterative approach using two stacks;
    if(!root) return [];
    let s1=[root]
    let s2=[]
    while(s1.length){
        // pop root valure
        let curr=s1.pop();
        //store in s2
        s2.push(curr)
        // add left child in s1 of curr
        curr.left && s1.push(curr.left)
        //add right child in s1 of curr
        curr.right && s1.push(curr.right)
    }
    let ans=[]
    while(s2.length){
        ans.push(s2.pop().val)
    }
    return ans;
    
    //optimized approach using only one stack
    let stack=[]
    let ans=[]
    let curr=root;
    let lastVisited=null;
    while(curr || stack.length){
        // go left 
        while(curr){
            stack.push(curr);
            curr=curr.left;
        }
        let peak= stack[stack.length-1];
        // go right sub tree if exist
        if(peak.right && peak.right!=lastVisited){
            curr=peak.right;
        }else{
            ans.push(peak.val)
            lastVisited=stack.pop()
        }
    }
    return ans;
};