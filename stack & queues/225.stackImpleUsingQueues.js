//     Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
 

// approach 1 using two queues 

var MyStack = function() {
    this.q1=[]
    this.q2=[]
};

// push operation
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

// pop
MyStack.prototype.pop = function() {
    let n=this.q1.length
    for(let i=0;i<n-1;i++){
        let frontele=this.q1.shift()
        this.q2.push(frontele)
    }
    let lastele=this.q1.shift()
    // exchange q1 and q2
    let temp=this.q1;
    this.q1=this.q2;
    this.q2=temp;

    return lastele;
};

// top
MyStack.prototype.top = function() {
    let n=this.q1.length
    for(let i=0;i<n-1;i++){
        let frontele=this.q1.shift()
        this.q2.push(frontele)
    }
    let lastele=this.q1[0]
    this.q2.push(this.q1.shift())
    // exchange q1 and q2
    let temp=this.q1;
    this.q1=this.q2;
    this.q2=temp;
    return lastele

};

// empty
MyStack.prototype.empty = function() {
    return this.q1.length==0;
};



// approach 2 using only one queue
var MyStack = function() {
    this.q=[]
};

// push operation
MyStack.prototype.push = function(x) {
    this.q.push(x)
};

// pop
MyStack.prototype.pop = function() {
    let n=this.q.length
    for(let i=0;i<n-1;i++){
        let frontele=this.q.shift()
        this.q.push(frontele)
    }
    let lastele=this.q.shift();

    return lastele;
};

// top
MyStack.prototype.top = function() {
    let n=this.q.length
    for(let i=0;i<n-1;i++){
        let frontele=this.q.shift()
        this.q.push(frontele)
    }
    let lastele=this.q[0]
    this.q.push(this.q.shift())
    
    return lastele

};

// empty
MyStack.prototype.empty = function() {
    return this.q1.length==0;
};

