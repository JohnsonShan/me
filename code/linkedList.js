class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

// initialize a new head for the linked list
let head = null;

// reverse 
function reverse(head) {
    let prev = null
    while(head != null) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

// detect if there is a loop
// in the linked list
function detectLoop(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (slowPointer != null
        && fastPointer != null
        && fastPointer.next != null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer == fastPointer)
            return 1;
    }

    return 0;
}

// inserting new values
head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

// adding a loop for the sake
// of this example
let temp = head;
while (temp.next != null)
    temp = temp.next;

temp.next = head;