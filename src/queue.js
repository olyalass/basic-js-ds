const { ListNode } = require("../extensions/list-node.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue;
  length;

  constructor() {
    this.length = 0;
  }

  getUnderlyingList() {
    return !this.queue ? null : this.queue;
  }

  enqueue(value) {
    if (this.length > 0) {
      let head = this.queue;
      while (head && head.next) {
        head = head.next;
      }
      head.next = new ListNode(value);
    } else {
      this.queue = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    let node = this.queue.value;
    this.queue = this.queue.next;
    return node;
  }
}

module.exports = {
  Queue,
};
