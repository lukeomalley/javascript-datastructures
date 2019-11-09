class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // O(log(n)) TIME | O(1) SPACE
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          // When the value already exists in the tree
          return this;
        }
      }
    }
  }

  // O(log(n)) TIME | O(1) SPACE
  contains(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // O(n) TIME | O(n) SPACE
  breadthFirstSearch() {
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      let currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }

  depthFirstSearchPreOrder() {
    const visited = [];

    (function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(this.root);

    return visited;
  }

  depthFirstSearchInOrder() {
    const visited = [];

    (function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    })(this.root);

    return visited;
  }

  depthFirstSearchPostOrder() {
    const visited = [];

    (function traverse(node) {
      if (node.right) traverse(node.right);
      visited.push(node.value);
      if (node.left) traverse(node.left);
    })(this.root);

    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(3);
tree.insert(7);
tree.insert(15);
tree.insert(11);
tree.insert(21);
tree.insert(1);
tree.insert(12);
