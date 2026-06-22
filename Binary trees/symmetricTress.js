// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

var isSymmetric = function(root) {
    //recursive approach
    function isMirror(left, right){
        // if both values are does not exit
        if(!left && !right) return true;
        // if one value does not exits
        if(!left || !right) return false;

        //check root value && outervalues && innervalues
        return left.val==right.val &&
               isMirror(left.left, right.right)&&
               isMirror(left.right,right.left)

    }
    return isMirror(root.left, root.right)

    //iterative approach
    let q=[root.left, root.right]
    while(q.length){
        let p1=q.shift()
        let p2=q.shift()
        if(!p1 && !p2) continue;
        if(!p1 || !p2) return false;
        if(p1.val !== p2.val) return false;
        q.push(p1.left, p2.right)
        q.push(p1.right, p2.left)
    }
    return true
};