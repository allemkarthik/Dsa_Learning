// Given the head of a linked list, rotate the list to the right by k places.
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

var rotateList=function(head,k){
    // corner case
    if(!head || !head.next) return head;
    // step1: find the length of linked list
    let curr=head;
    let length=0
    while(curr){
        curr=curr.next
        length++
    }
    // reduce the no of rotations of list
    k=k%length      //if k=102 , length=5 => k=102%5 that is equal to k=2 so k=102 is same as k=2

    // step2: take slow and fast pointer to reach before k position
    let s=head
    let f=head

    // move fast pointer by k times
    for(let i=0;i<k;i++){
        f=f.next
    }
    
    // reach before k position
    while(f.next){
        s=s.next
        f=f.next
    }
    f.next=head
    let newhead=s.next
    s.next=null

    return newhead

}