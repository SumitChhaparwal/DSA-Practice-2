//Implementing stack using two queues..

class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(val) {
    this.q2.push(val);
    while (this.q1.length !== 0) {
      //round values so queues behave like stack. for deleting element: such as [3,2,1]-dequeue(3) == [1,2,3]-pop(3)
      this.q2.push(this.q1[0]);
      this.q1.shift();
    }
    this.q = this.q1;
    this.q1 = this.q2;
    this.q2 = this.q;
  }

  pop() {
    let val = this.q1[0];
    this.q1.shift();
    return val;
  }

  topVal() {
    return this.q1[0];
  }

  traversalVal() {
    for (let i = 0; i < this.q1.length; i++) {
      console.log(this.q1[i]);
    }
  }
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(6);
stack1.push(7);
stack1.push(8);
stack1.pop();
stack1.pop();
console.log("peek value: ", stack1.topVal());
stack1.traversalVal();

//Push:
//Time Complexity: O(n)
//Space Complexity: O(n)

//Pop:
//Time Complexity: O(1)
//Space Complexity: O(1)
