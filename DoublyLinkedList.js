class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    const list = [];
    let currNode = this.head;
    while (currNode) {
      list.push(currNode.value);
      currNode = currNode.next;
    }
    return list;
  }

  push(value) {
    // insert after tail
    const node = new Node(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  pop() {
    // remove the tail and return it
    if (this.length === 0) {
      return null;
    }

    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
      return removedNode;
    }
    this.length -= 1;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
