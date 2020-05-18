class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  insert(val) {
    if (!this.root) {
      this.root = new Node(val, null, null);
      return val;
    }
    let currentNode = this.root;
    while (
      (currentNode.value > val && currentNode.left) ||
      (currentNode.value < val && currentNode.right)
    ) {
      if (currentNode.value < val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    if (currentNode.value < val) {
      currentNode.right = new Node(val, null, null);
    } else {
      currentNode.left = new Node(val, null, null);
    }
    return val;
  }
  max(node) {
    if (!this.root) return null;
    let currentNode;
    if (!node) {
      currentNode = this.root;
    } else {
      currentNode = node;
    }
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  min(node) {
    if (!this.root) return null;
    let currentNode;
    if (!node) {
      currentNode = this.root;
    } else {
      currentNode = node;
    }
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  remove(val) {
    this.root = this.removeInner(val, this.root);
  }
  removeInner(value, node) {
    if (node) {
      if (value < node.value) {
        node.left = this.removeInner(value, node.left);
      } else if (value > node.value) {
        node.right = this.removeInner(value, node.right);
      } else if (node.left && node.right) {
        node.value = this.min(node.right);
        node.right = this.removeInner(node.value, node.right);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  }
  contains(val) {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode.value !== val) {
      if (currentNode.value < val && currentNode.right) {
        currentNode = currentNode.right;
      } else if (currentNode.value > val && currentNode.left) {
        currentNode = currentNode.left;
      } else if (currentNode.value === val) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  getHeight(node) {
    if (!node) node = this.root;

    if (!node.left && !node.right) {
      return 0;
    }
    if (!node.left) return 1 + this.getHeight(node.right);
    if (!node.right) return 1 + this.getHeight(node.left);
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }
  isEmpty() {
    return this.root === null;
  }
  bfsLTR() {
    let queue = [this.root];
    let result = [];
    let currentNode;
    while (queue.length > 0) {
      currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      result.push(currentNode.value);
    }
    return result;
  }
  bfsRTL() {
    let queue = [this.root];
    let result = [];
    let currentNode;
    while (queue.length > 0) {
      currentNode = queue.shift();
      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.left) queue.push(currentNode.left);
      result.push(currentNode.value);
    }
    return result;
  }
  dfsLTR() {
    let stack = [this.root];
    let result = [];
    let currentNode;
    while (stack.length > 0) {
      currentNode = stack.pop();
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
      result.push(currentNode.value);
    }
    return result;
  }
  dfsRTL() {
    let stack = [this.root];
    let result = [];
    let currentNode;
    while (stack.length > 0) {
      currentNode = stack.pop();
      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
      result.push(currentNode.value);
    }
    return result;
  }
  inOrder() {
    let result = []
    function inOrderHelper(node) {
        if (node !== null) {
           inOrderHelper(node.left);
           result.push(node.value);
           inOrderHelper(node.right);
        }
     }
     inOrderHelper(this.root);
     return result
 }
 postOrder() {
    let result = []
    function inOrderHelper(node) {
        if (node !== null) {
           inOrderHelper(node.right);
           result.push(node.value);
           inOrderHelper(node.left);
        }
     }
     inOrderHelper(this.root);
     return result
 }
 getClosest(val) {
    if(!this.root) return null
    let currentNode = this.root
    let found = false
    let currentBest = Math.abs(currentNode.value - val)
    while(!found) {

    }
 }
}

const myBt = new BinaryTree(new Node(1, null, null));
myBt.insert(2);
myBt.insert(5);
myBt.insert(3);
myBt.insert(8);
myBt.insert(9);

console.log(myBt.contains(2));
console.log(myBt.max());
console.log(myBt.min());
console.log(myBt.getHeight());
console.log(JSON.stringify(myBt, null, 4));

console.log(myBt.bfsLTR());
console.log(myBt.bfsRTL());


console.log(myBt.dfsLTR());
console.log(myBt.dfsRTL());

console.log(myBt.inOrder())
console.log(myBt.postOrder())
console.log([1, 2, 3].shift());
