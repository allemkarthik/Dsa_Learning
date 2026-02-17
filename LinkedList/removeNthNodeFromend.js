// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

var removeNthNode=function(head,n){
    // step1: create a sentinel node
    let sentinel=new ListNode()
    let sentinel.next=head;
    let prev=sentinel

    // step2: find the length of linked list
    let length=0;
    while(head!=null){
        head=head.next;
        length++
    }

    // step3: find the prevpos of nth node that has deletion node
    let prevpos=length-n;

    // step4: loop through the ll and move prev ahead till it reaches to prevpos
    for(let i=0;i<prevpos;i++){
        prev=prev.next
    }

    // delete the nth node that is prevpos next
    prev.next=prev.next.next
    // return head node
    return sentinel.next
}