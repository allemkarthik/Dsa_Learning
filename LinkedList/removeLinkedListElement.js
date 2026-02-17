// // Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

//  Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

var removeElement=function(head,val){
    let sentinel=new ListNode()
    sentinel.next=head

    let prev=sentinel;
    while(prev!=null && prev.next!=null){
        if(prev.next.val==val){
            prev.next=prev.next.next
        }else{
            prev=prev.next
        }
    }
    return sentinel.next
}