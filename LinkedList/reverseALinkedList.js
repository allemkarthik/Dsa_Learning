// reverse a linked list
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

var reverselist=function(head){
    let prev=null;
    let curr=head;
    while(curr!=null){
        temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp
    }
    head=prev;
    return head;
}