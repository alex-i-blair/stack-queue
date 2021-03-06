class LinkedList {
  #data;
  #next;

  constructor(data) {
    this.#next = null;
    this.#data = data;
  }
  add(node) {
    !this.#next ? (this.#next = node) : this.#next.add(node);
  }

  getList() {
    // check this.next and if this.next then next until !this.next
    // push to array data of final node(n) + node(n-1)... until n === 0
    if (!this.#next) return this.#data;
    return `${this.#data} ${this.#next.getList()}`;
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //We are checking if the node is greater than this.value.
    // If it is we check if this.right is null.
    // If it is, this.right = node
    // otherwise we add another node to this.right
    // Then do the same for the left but for the node < this.value situation
    if (node.value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    } else if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    }
  }
}

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }
  add(person) {
    if (person.person.name > this.value) {
      if (!this.right) {
        this.right = person;
      } else {
        this.right.add(person);
      }
    } else if (person.person.name < this.value) {
      if (!this.left) {
        this.left = person;
      } else {
        this.left.add(person);
      }
    }
  }

  getPerson(name) {
    if (this.value === name) {
      return this.person;
    } else if (name < this.value) {
      if (!this.left) return null;
      return this.left.getPerson(name);
    } else if (name > this.value) {
      if (!this.right) return null;
      return this.right.getPerson(name);
    }
  }
}

const jones = new PersonTreeNode({
  name: 'Jones',
  phone: '555-1212',
  address: '123 Main St',
});
jones.add(brook);
jones.add(smith);
jones.add(nelson);
console.log(jones.getPerson('Nelson'));
console.log(jones.getPerson('Smith'));

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

const root = new LinkedList('A');
const nodeB = new LinkedList('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedList('C');
const nodeD = new LinkedList('D');
const nodeE = new LinkedList('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
