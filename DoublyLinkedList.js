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

  // O(n) TIME | O(n) SPACE
  print() {
    // convert list to array
    const list = [];
    let currNode = this.head;
    while (currNode) {
      list.push(currNode.value);
      currNode = currNode.next;
    }
    return list;
  }

  // O(1) TIME | O(1) SPACE
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

  // O(1) TIME | O(1) SPACE
  pop() {
    // remove the tail and return it
    if (!this.length) {
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
    }
    this.length -= 1;
    return removedNode;
  }

  // O(1) TIME | O(1) SPACE
  shift() {
    // remove the head of the list
    if (!this.length) {
      return null;
    }

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length -= 1;
    return removedNode;
  }

  // O(1) TIME | O(1) SPACE
  unshift(value) {
    // insert node at the head
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length += 1;
    return this;
  }

  // O(n) TIME | O(1) SPACE
  get(index) {
    // returns the node at the given index
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index > (this.length - 1) / 2) {
      // start from tail
      let count = this.length - 1;
      let currNode = this.tail;
      while (count !== index) {
        currNode = currNode.prev;
        count -= 1;
      }
      return currNode;
    } else {
      // start from the head
      let count = 0;
      let currNode = this.head;
      while (count !== index) {
        currNode = currNode.next;
        count += 1;
      }
      return currNode;
    }
  }

  // O(n) TIME | O(1) SPACE
  set(index, value) {
    // set the value of the at the given index
    const nodeToUpdate = get(index);
    if (nodeToUpdate) {
      nodeToUpdate.value = value;
    }
    return this;
  }

  // O(n) TIME | O(1) SPACE
  insert(index, value) {
    // insert node at given index
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const node = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = node;
    node.prev = prevNode;
    node.next = nextNode;
    nextNode.prev = node;

    this.length += 1;
    return this;
  }

  // O(n) TIME | O(1) SPACE
  remove(index) {
    // remove node at given index
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let nodeToRemove = this.get(index);
    let prevNode = nodeToRemove.prev;
    let nextNode = nodeToRemove.next;

    prevNode.next = nodeToRemove.next;
    nextNode.prev = nodeToRemove.prev;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;

    return nodeToRemove;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
