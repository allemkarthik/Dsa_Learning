// // You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// // You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//  Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addtwonum=function(head,l1,l2){
    let dummy=new ListNode();
    let dummyhead=dummy
    let carry=0;
    
    while(l1!=null || l2!=null || carry!=0){
        let sum=(l1==null ? 0: l1.val)+(l2==null?0:l2.val)+carry
        let carry=Math.floor(sum/10);
        let digit=sum%10
        let newnode=new ListNode(digit)
        dummy.next=newnode
        dummy=dummy.next
        l1= l1!=null && l1.next;
        l2=l2!=null && l2.next;
    }
    return dummyhead.next

}