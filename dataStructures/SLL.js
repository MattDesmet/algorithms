// BENEFITS: easy insertion and removal of nodes in the sequence
// DRAWBACKS: must traverse entire list.  No direct lookup ability. traverse forward only
// uses more memory than arrays due to storage of the pointers as well.


// sample code

var list = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null
        }
    }
}

// NODE CONSTRUCTOR
function Node(data) {
    this.data = data;
    this.next = null;
};

// SLL CONSTRUCTOR
function LinkedList() {
    // head will be the top of the list
    // defined as null to start
    this.head = null;
    this.length = 0;



    // ADD method
    this.add = function(data) {
        var nodeToAdd = new Node(data),
            nodeToCheck = this.head;
        // if the head is null
        if (!nodeToCheck) {
            this.head = nodeToAdd;
            this.length++;
            return nodeToAdd;
        }
        // loop until we find the end
        while (nodeToCheck.next) {
            nodeToCheck = nodeToCheck.next;
        }
        // once were at the end of the list
        nodeToCheck.next = nodeToAdd;
        this.length++;
        return nodeToAdd;
    }
}


// GET method

LinkedList.prototype.get = function(num) {
    var nodeToCheck = this.head,
        count = 0;
    // a little error checking
    if (num > this.length) {
        return "Doesn't Exist!"
    }
    // find the node we're looking for
    while (count < num) {
        nodeToCheck = nodeToCheck.next;
        count++;
    }
    return nodeToCheck;
}



// DELETE method

LinkedList.prototype.remove = function(num) {
    var current = this.head,
        length = this.length,
        count = 0,
        prevNode = null,
        // error check
        if (num > length) {
            return "Doesn't Exist!"
        }
    // if the first node
    if (num === 0) {
        this.head = current.next;
        this.length--;
        return this.head;
    }
    // all other cases => traverse the SLL until count is = num
    while (count < num) {
        prevNode = current;
        current = current.next;
        count++;
    }
    // current is now the correct node
    prevNode.next = current.next;
    current = null;
    this.length--;

    return this.head;
}



// REVERSE method

LinkedList.prototype.reverse = function(linkedlist) {
    var current = linkedlist;
    var previous = null;

    while (current) {
        // save next or you lose it!!!
        var save = current.next;
        // reverse pointer
        current.next = previous;
        // change previous to current
        previous = current;
        // change current to next current or null at end of list
        current = save;
    }
    return previous; // Change the list head !!!
}
linkedlist = reverseLinkedList(linkedlist);
