function detectLoop(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (slowPointer != null
        && fastPointer != null
        && fastPointer.next != null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer == fastPointer)
            fastPointer = head
            while( slow != fast) {
                fast = fast.next
                slow = slow.next
            }
            return slow
    }

    return 0;
}