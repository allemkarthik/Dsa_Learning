// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
var oddeven=function(head){
    if(!head || !head.next) return head;
    odd=head;
    even=head.next;
    evenstart=even;
    while(odd.next && even.next){

        odd.next=odd.next.next;
        even.next=even.next.next;
        even=even.next
        odd=odd.next
    }
    odd.next=evenstart
    return head;

}