class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1) TIME | O(1) SPACE
  enqueue(value) {
    const node = new Node(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length += 1;
    return this;
  }

  // O(1) TIME | O(1) SPACE
  dequeue() {
    if (!this.length) return null;

    const removedNode = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = removedNode.next;
    this.length -= 1;
    removedNode.next = null;
    return removedNode.value;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
