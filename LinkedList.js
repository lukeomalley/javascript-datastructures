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

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
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
    if (!this.head) return this;
    const removedNode = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode;
  }

  unshift(value) {
    // Insert at the start of the list
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    // return the item at the given index. Starting from 0
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
      count += 1;
    }
    return currentNode;
  }

  set(index, value) {
    // set the value of a node at the given index
    let node = this.get(index);
    if (!node) return null;
    node.value = value;
    return node;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const prevNode = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length += 1;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');
list.push('Friend');
