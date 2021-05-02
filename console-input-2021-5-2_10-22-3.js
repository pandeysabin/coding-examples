// Design linked list

class MyLinkedList {
  constructor() {
    this.linkedList = [];
  }

  get list() {
    return this.linkedList;
  }

  get(index) {
    if (typeof this.linkedList[index] !== "undefined") {
      return this.linkedList[index];
    }
    return -1;
  }

  addAtHead(val) {
    this.linkedList.unshift(val);
  }

  addAtTail(val) {
    this.linkedList.push(val);
  }

  addAtIndex(index, val) {
    if (index <= this.linkedList.length) {
      this.linkedList.splice(index, 0, val);
    }
  }

  deleteAtIndex(index) {
    if (index <= this.linkedList.length) {
      this.linkedList.splice(index, 1);
    }
  }
}
