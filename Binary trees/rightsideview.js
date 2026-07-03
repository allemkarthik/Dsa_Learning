// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:

// Input: root = [1,2,3,null,5,null,4]

// Output: [1,3,4]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,null,null,null,5]

// Output: [1,3,4,5]

// Explanation:



// Example 3:

// Input: root = [1,null,3]

// Output: [1,3]

// Example 4:

// Input: root = []

// Output: []

 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

var rightSideView = function(root) {
    if(!root) return []
    // let q=[root]
    // let ans=[]
    // while(q.length){
    //     let levelsize=q.length;
    //     for(let i=0;i<levelsize;i++){
    //         let curr=q.shift()

    //         // push first node of that level in ans array
    //         i==0 && ans.push(curr.val)

    //         // right view so we need to push right one first
    //         curr.right&& q.push(curr.right)
    //         curr.left&& q.push(curr.left)

    //     }
    // }
    // return ans;

    // recursion approach

    let ans=[]
    function traversal(curr, level){
        if(!curr) return;
        if(ans.length==level){
            ans.push(curr.val)
        }
        curr.right && traversal(curr.right, level+1)
        curr.left && traversal(curr.left, level+1)
        
    }
    traversal(root,0)
    return ans;
};