//find next greater element of each elements in stack(array implementation)..

class Stack {
  constructor(data) {
    this.top = -1;
    this.length = data;
    this.arr = new Array(this.length);
  }

  push(data) {
    this.top++;
    if (this.top > this.length) {
      console.log("stack is overflow..");
      return;
    }
    this.arr[this.top] = data;
  }

  pop() {
    let x;
    if (this.top < 0) {
      console.log("stack is empty..");
      return;
    }
    x = this.arr[this.top];
    this.top--;
    return x;
  }

  isEmpty() {
    if (this.top < 0) {
      return true;
    } else {
      return false;
    }
  }

  isPeek() {
    return this.arr[this.top];
  }
}

function nextGreaterEle(data) {
  let length = data.length;
  let newStack = new Stack(length);
  newStack.push(data[0]);
  for (let i = 1; i < length; i++) {
    if (newStack.isEmpty()) {
      newStack.push(data[i]);
      continue;
    }
    while (!newStack.isEmpty() && newStack.isPeek() < data[i]) {
      let x = newStack.pop();
      console.log(`${x} -------> ${data[i]}`);
    }
    newStack.push(data[i]);
  }

  while (!newStack.isEmpty()) {
    console.log(`${newStack.pop()} --------> -1`);
  }
}
nextGreaterEle([2, 3, 1, 5, 6]);

//Time Complexity: O(n)
//Space Complexity: O(n)

function displayFun() {
  for (let i = add.top; i >= 0; i--) {
    console.log(add.arr[i]);
  }
}
//displayFun();
