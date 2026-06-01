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
    if(this.isEmpty()){
      console.log("Cannot dequeue element as queue is empty..");
      return;
    }
    for(let i=0; i<=this.rear; i++){
      this.qArray[i] = this.qArray[i+1];
    }
    this.rear--;
  }

  isEmpty() {
    if(this.rear === -1){
      return true;
    } else{
      return false;
    }
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
q1.enqueue(11);
q1.enqueue(12);
q1.enqueue(13);
q1.enqueue(14);
q1.enqueue(15);
//Time Complexity: O(1)
//Space Complexity: O(1)

q1.dequeue();
q1.dequeue();
//Time Complexity: O(n)
//Space Complexity: O(1)

q1.displayValue();
