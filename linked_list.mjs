class Node {
  value;
  nextNode; // make this private
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  get nextNode() {
    return this.nextNode;
  }

  set nextNode(nodeIn) {
    this.nextNode = nodeIn;
  }

  get value() {
    return this.data;
  }

  set value(dataIn) {
    this.data = dataIn;
  }
}

class LinkedList {
  head; // init as null
  tail; // init as null
  size = 0;

  // if a separate head and tail are defined then link head and tail
  // if no data is entered set head and tail to null
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;

    this.head.nextNode = tail;
    this.size = 2; // change this later
  }

  // seems to be working
  // TODO: check if the linked list is empty
  append(value) {
    const newNode = new Node(value);
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  // seems to be working
  // TODO: check if link list is empty
  prepend(value) {
    const newNode = new Node(value);

    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  // works
  get size() {
    return this.size;
  }

  // works
  get head() {
    return this.head;
  }

  // works
  get tail() {
    return this.tail;
  }

  // seems to be working
  at(index) {
    if (index == 0) {
      return this.head;
    }

    if (index == this.size - 1) {
      return this.tail;
    }

    if (index >= this.size || index <= 0) {
      throw new Error("index out of range");
    }

    let currentNode = this.head; // linearly traversing from head to to index

    for (let i = 1; i < index + 1; i++) {
      console.log("current node", currentNode);
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // works
  pop() {
    if (this.size < 1) {
      throw new Error("this link list is empty");
    }
    if (this.size == 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return temp;
    }
    const temp = this.tail;
    const newTail = this.at(this.size - 2);
    this.tail = newTail;
    this.tail.nextNode = null;
    this.size--;
    return temp;
  }

  // returns true if value exists, else returns false
  contains(value) {
    let currentNode = this.head;
    while (currentNode != this.tail) {
      if (currentNode.value == value) return true;
      currentNode = currentNode.nextNode;
    }
    console.log(`current node`, currentNode);
    if (currentNode.value == value) {
      return true;
    }
    return false;
  }

  // returns the index of the value, or null if not found
  find(value) {
    if (this.head.value === value) {
      return index;
    }

    if (this.tail.value === value) {
      return this.size - 1;
    }

    let index = 1;
    let currentNode = this.head.nextNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      } else {
        index++;
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }

  toString() {
    let LLString = `( ${this.head.value} ) -> `;

    let currentNode = this.head.nextNode;
    do {
      LLString = LLString.concat(`( ${currentNode.value} ) -> `);
      currentNode = currentNode.nextNode;
    } while (currentNode !== null);

    return LLString.concat(`null`);
  }

  // extra credit
  insertAt(index) {}
  removeAt(index) {}
}

let ll = new LinkedList(new Node(0), new Node(1));

// index 0 = 0, index 1 = 1, index 2 = 4, index 3 = 12
ll.append(4);
ll.append(12);

console.log(ll.find(12));
console.log(ll.find(4));
console.log(ll.find(44));

console.log(ll.toString());
