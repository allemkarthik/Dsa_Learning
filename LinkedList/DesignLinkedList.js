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
