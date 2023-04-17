const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode;

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.insert(this.rootNode, data);
  }

  insert(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this.insert(node.left, data);
    } else {
      node.right = this.insert(node.right, data);
    }
    if (node.data === data) {
      return node;
    }

    return node;
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return !this.rootNode ? null : this.search(this.rootNode, data);
  }

  search(node, data) {
    if (node.data == data) return node;
    else {
      if (node.data > data) {
        return !node.left ? null : this.search(node.left, data);
      } else {
        return !node.right ? null : this.search(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = this.deleteNode(this.rootNode, data);
  }

  deleteNode(node, data) {
    if (!node) {
      return null;
    } else {
      if (node.data < data) {
        node.right = this.deleteNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = this.deleteNode(node.left, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        } else if (!node.right) {
          return node.left;
        } else if (!node.left) return node.right;
      }

      let min = node.right;
      while (min.left) {
        min = min.left;
      }
      node.data = min.data;
      node.right = this.deleteNode(node.right, node.data);
      return node;
    }
  }

  min() {
    return this.searchMinMax(this.rootNode, true);
  }

  searchMinMax(node, isMin) {
    if (isMin) {
      return !node
        ? null
        : !node.left
        ? node.data
        : this.searchMinMax(node.left, true);
    } else {
      return !node
        ? null
        : !node.right
        ? node.data
        : this.searchMinMax(node.right, false);
    }
  }

  max() {
    return this.searchMinMax(this.rootNode, false);
  }
}

module.exports = {
  BinarySearchTree,
};
