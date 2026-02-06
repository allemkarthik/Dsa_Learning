// creating node in linked list
function Node(val) {
  this.val = null;
  this.next = null;
}

// creating a Linked List
function myLinkedList() {
  this.head = null;
  this.size = 0;
}

// creation of newnode in linked list
let newnode = new Node(val);

// addAtHead of Linked list
function addAtHead(val) {
  let newnode = new Node(val);
  newnode.next = this.head;
  this.head = newnode;
  this.size++;
}

// addAtTail of linked list

function addAtTail(val) {
  let newnode = new Node(val);
  if (this.head == null) {
    this.head = newnode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newnode;
  }
  this.size++;
}

function addAtIndex(index,val){
  let newnode=new Node(val);
  // corner case
  if(index<0 || index>this.size) return;
  if(index==0){
    this.addAtHead(val)
    return;
  }else if(index==this.size){
    this.addAtTail(val)
    return;
  }else{

    let curr=this.head
    for(let i=0;i<index-1;i++){
      curr=curr.next;
    }
    newnode.next=curr.next;
    curr.next=newnode;
  }
  this.size++
}

function get(index){
  // corner case
  if(index<0 || index>=this.size) return -1;
  let curr=this.head;
  for(let i=0;i<index;i++){
    curr=curr.next;
  }
  return curr.val;
}

function deleteAtInde(index){
  // corner case
  if(index<0 || index>=this.size) return;
  if(index==0){
    this.head=this.head.next;
  }else{

    let curr=this.head;
    for(let i=0; i<index-1;i++){
      curr=curr.next;
    }
    curr.next=curr.next.next;
  }
  this.size--;
}