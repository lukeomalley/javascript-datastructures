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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(3);
tree.insert(7);
tree.insert(15);
tree.insert(11);
