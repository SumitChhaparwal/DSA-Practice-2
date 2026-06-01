//Implementing enqueue operation in queues..

class Queue {
  constructor(n) {
    this.size = n;
    this.qArray = new Array(this.size);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(data) {
    if (this.rear === this.size - 1) {
      console.log("Queue is full so you cannot add new element..");
      return;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear++;
    this.qArray[this.rear] = data;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Cannot dequeue element as queue is empty..");
      return;
    }
    for (let i = 0; i <= this.rear; i++) {
      this.qArray[i] = this.qArray[i + 1];
    }
    this.rear--;
  }

  isFull() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }
    return "Queue is full..";
  }

  isEmpty() {
    if (this.rear === -1) {
      return true;
    } else {
      return false;
    }
  }

  findPeek() {
    if (this.rear == -1) {
      return;
    }
    return this.qArray[this.front];
  }

  findRear() {
    if (this.rear == -1) {
      return;
    }
    return this.qArray[this.rear];
  }

  displayValue() {
    if (this.rear === -1) {
      console.log("Queue is empty!");
      return;
    }
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.qArray[i]);
    }
  }
}

let q1 = new Queue(5);
//Enqueue
q1.enqueue(11);
q1.enqueue(12);
q1.enqueue(13);
q1.enqueue(14);
q1.enqueue(15);
//Time Complexity: O(1)
//Space Complexity: O(1)

//Dequeue
q1.dequeue();
q1.dequeue();
//Time Complexity: O(n)
//Space Complexity: O(1)

//All Queue operations like isFull, isEmpty, findPeek, findRear;
console.log("queue is full or not: ", q1.isFull());
console.log("queue is empty or not: ", q1.isEmpty());
console.log("peek element of queue: ", q1.findPeek());
console.log("rear element of queue: ", q1.findRear());
//Time Complexity: O(1)
//Space Complexity: O(1)

q1.displayValue();
