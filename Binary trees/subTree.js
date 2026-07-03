// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

// Example 1:


// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

var isSubtree = function(root, subRoot) {
    // step1: create a hash string for both trees
    // step2: compare two hashed keys and return
    let hashRoot=serailzer(root)
    let hashSubRoot=serailzer(subRoot)
    return hashRoot.includes(hashSubRoot)
};

let serailzer=function(root){
    let hash=""
    let traversal=(curr)=>{
        if(!curr){
            hash=hash+"-#"
            return;
        }
        hash=hash+"-"+curr.val;
        traversal(curr.left)
        traversal(curr.right)
    }
    traversal(root)
    return hash;
}