class Queue {
  #list = [];
  #index = 0;

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    this.#index++;
    return this.#list[this.#index - 1] ?? null;
  }

  hasNext() {
    if (this.#list[this.#index]) return true;
    return false;
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
