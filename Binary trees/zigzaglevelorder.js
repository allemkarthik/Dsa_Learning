// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

var zigzagLevelOrder = function(root) {
    if(!root) return []
    // let ans=[]
    // let q=[root]
    // let level=0;
    // while(q.length){
    //     let levelArr=[]
    //     let levelsize=q.length
    //     for(let i=0;i<levelsize;i++){
    //         curr=q.shift()
    //         if(level%2==0){
    //             levelArr.push(curr.val)
    //         }else{
    //             levelArr.unshift(curr.val)
    //         }
    //         curr.left && q.push(curr.left)
    //         curr.right && q.push(curr.right)
    //     }
    //     ans.push(levelArr)
    //     level++
    // }
    // return ans;

    // recursive approach
    let ans=[]
    function traversal(curr, level){
        if(!ans[level]) ans[level]=[]
        if(level%2==0){
             ans[level].push(curr.val)
        }else{
             ans[level].unshift(curr.val)
        }
        curr.left &&  traversal(curr.left, level+1)
        curr.right && traversal(curr.right, level+1)
    }
    traversal(root, 0)
    return ans;
};