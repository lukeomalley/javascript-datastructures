class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    // Inserting at the end of the linked list
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  pop() {
    // Remove the last item from the list
    if (!this.length) {
      return this;
    } else if (this.length === 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return removedNode;
    }

    let prevNode = null;
    let currentNode = this.head;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;
    this.length -= 1;
    prevNode.next = null;
    return currentNode;
  }

  shift() {
    // Remove the first node in the list
    const removedNode = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return removedNode;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');
list.push('Friend');

console.log(list);
