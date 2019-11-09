class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1) TIME | O(1) SPACE
  push(value) {
    const node = new Node(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.length += 1;
    return this;
  }

  // O(1) TIME | O(1) SPACE
  pop() {
    if (!this.length) return null;

    const removedNode = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    this.length -= 1;
    removedNode.next = null;
    return removedNode.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
