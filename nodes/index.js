class LinkedList {
  data;
  next;

  constructor(data) {
    this.next = null;
    this.data = data;
  }
  add(node) {
    !this.next ? (this.next = node) : this.next.add(node);
    console.log(this);
  }

  getList() {
    // check this.next and if this.next then next until !this.next
    // push to array data of final node(n) + node(n-1)... until n === 0

    if (!this.next) return this.data;
    return `${this.data} ${this.next.getList()}`;
  }
}

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
