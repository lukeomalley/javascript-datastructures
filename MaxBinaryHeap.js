// Model the max heap with an array.
// Every node's children nodes are at index: 2n + 1 (left child) and 2n + 2 (right child)
// Every node's parent node is at index Math.floor((n - 1)/2)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // Add item to the end of the heap and then bubble it up to its correct position
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx] <= this.values[parentIdx]) break;
      this._swap(this.values, idx, parentIdx);
      idx = parentIdx;
    }
  }

  _swap(firstIdx, secondIdx, array) {
    [array[firstIdx], array[secondIdx]] = [array[secondIdx], array[firstIdx]];
  }
}

let heap = new MaxBinaryHeap();

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
