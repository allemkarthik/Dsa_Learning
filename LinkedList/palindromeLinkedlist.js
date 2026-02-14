// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Example 1:


// Input: head = [1,2,2,1]
// Output: true

var isPalindrome=function(head){
    // step1: find the middle element of linked list
    let slow=head;
    let fast=head;
    while(fast !=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next;
    }
    // step2: reverse the second half of the linked list
    let prev=null;
    let curr=slow;
    while(curr!=null){
        temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp
    }
    // step3: compare the each values from firstList and second list
    firstList=head;
    secondList=prev;
    while(secondList!=null){
        if(firstList.val!=secondList.val){
            return false;
        }
        firstList=firstList.next;
        secondList=secondList.next;
    }
    return true
  
}