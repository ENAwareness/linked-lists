class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  getHead() {
    return this.head;
  }

  tail() {
    if (this.head === null) return null;

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0) return null;
    if (this.head === null) return null;

    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current;
      }
      current = current.nextNode;
      count++;
    }

    return null;
  }

  pop() {
    if (this.head === null) return null;
    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }
}

const list = new LinkedList();

console.log(list.at(0));

list.prepend(5);
list.append(10);
list.append(20);

console.log(list.tail().value); // 输出 30（移除前）
list.pop();
console.log(list.tail().value); // 输出 20（移除后）

list.pop();
console.log(list.tail().value); // 输出 10（移除后）

list.pop();
console.log(list.tail()); // 输出 null（链表为空）
