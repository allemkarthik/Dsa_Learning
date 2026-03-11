// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
// Input: head = [1,2,3,4]

// Output: [2,1,4,3]
// Input: head = [1,2,3]

// Output: [2,1,3]


var swapnodes=function(head){
    //step 1: create a dummy node and make it as prev
    let dummy=new ListNode()
    dummy.next=head
    let p=dummy
    let c=head
    let n=head.next

    while(c || n){
        p.next=n
        c.next=n.next
        n.next=c

        // move pointers
        p=c;
        c=p.next;
        n=c&&c.next
    }
    return dummy.next
}


// optimize approach using recursion
var swapPairs=function(head){
    if(!head || !head.next) return head

    let l=head;
    let r=head.next;
    
    l.next=swapPairs(r.next);
    r.next=l
    return r
}